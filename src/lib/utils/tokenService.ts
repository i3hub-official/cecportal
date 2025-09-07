import { randomBytes, createHmac } from "crypto";
import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});
redis.connect().catch(console.error);

const HMAC_SECRET = process.env.HMAC_SECRET || "dev-secret"; // for access tokens

// 🔹 Generate or bump version
export async function getTokenVersion(userId: string): Promise<number> {
  const key = `tokenVersion:${userId}`;
  const version = await redis.get(key);
  return version ? parseInt(version, 10) : 0;
}

export async function bumpTokenVersion(userId: string) {
  const key = `tokenVersion:${userId}`;
  await redis.incr(key); // increments version, invalidating all old tokens
}

// 🔹 Access token = stateless (signed string with HMAC + version)
export async function issueAccessToken(
  userId: string,
  device: string,
  ttlSeconds = 900
) {
  const version = await getTokenVersion(userId);
  const exp = Date.now() + ttlSeconds * 1000;

  const payload = `${userId}:${device}:${exp}:${version}`;
  const sig = createHmac("sha256", HMAC_SECRET).update(payload).digest("hex");

  return Buffer.from(`${payload}:${sig}`).toString("base64url");
}

export async function verifyAccessToken(token: string) {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const [userId, device, expStr, versionStr, sig] = decoded.split(":");
    if (!userId || !device || !expStr || !versionStr || !sig) return null;

    const exp = parseInt(expStr, 10);
    if (Date.now() > exp) return null;

    const version = parseInt(versionStr, 10);
    const currentVersion = await getTokenVersion(userId);
    if (version !== currentVersion) return null; // 🔹 token is stale

    const payload = `${userId}:${device}:${exp}:${version}`;
    const expectedSig = createHmac("sha256", HMAC_SECRET)
      .update(payload)
      .digest("hex");

    if (sig !== expectedSig) return null;

    return { userId, device };
  } catch {
    return null;
  }
}

// 🔹 Refresh token = stateful (stored in Redis)
export async function issueRefreshToken(
  userId: string,
  device: string,
  ttlSeconds = 60 * 60 * 24 * 30 // 30 days
) {
  const refreshToken = randomBytes(48).toString("hex");
  const expiresAt = Date.now() + ttlSeconds * 1000;

  const key = `refresh:${userId}:${device}`;
  await redis.set(key, JSON.stringify({ refreshToken, expiresAt }), {
    EX: ttlSeconds,
  });

  return refreshToken;
}

export async function verifyRefreshToken(
  userId: string,
  device: string,
  token: string
) {
  const key = `refresh:${userId}:${device}`;
  const data = await redis.get(key);
  if (!data) return false;

  const { refreshToken, expiresAt } = JSON.parse(data);
  if (refreshToken !== token) return false;
  if (Date.now() > expiresAt) {
    await redis.del(key);
    return false;
  }
  return true;
}

export async function revokeRefreshToken(userId: string, device: string) {
  const key = `refresh:${userId}:${device}`;
  await redis.del(key);
}

export async function listActiveDevices(userId: string) {
  const pattern = `refresh:${userId}:*`;
  const keys = await redis.keys(pattern);

  const devices: Array<{ device: string; expiresAt: number }> = [];

  for (const key of keys) {
    const data = await redis.get(key);
    if (data) {
      const { expiresAt } = JSON.parse(data);
      const device = key.split(":").pop() || "unknown";
      devices.push({ device, expiresAt });
    }
  }

  return devices;
}

export async function revokeDevice(userId: string, device: string) {
  const key = `refresh:${userId}:${device}`;
  await redis.del(key);
}

export async function revokeAllDevices(userId: string) {
  const pattern = `refresh:${userId}:*`;
  const keys = await redis.keys(pattern);
  if (keys.length > 0) {
    await redis.del(keys);
  }
}

// 🔹 On password change, kill all sessions + invalidate all access tokens
export async function handlePasswordChange(userId: string) {
  await revokeAllDevices(userId); // refresh tokens gone
  await bumpTokenVersion(userId); // all access tokens stale instantly
}
