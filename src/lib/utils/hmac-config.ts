import { randomBytes } from "crypto";
import { existsSync, appendFileSync, readFileSync } from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");

let SECRET_KEY = process.env.HMAC_SECRET;

if (!SECRET_KEY) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("HMAC_SECRET environment variable is not set!");
  }

  // Dev-only fallback: read from .env if present
  if (existsSync(envPath)) {
    const envContents = readFileSync(envPath, "utf-8");
    const match = envContents.match(/^HMAC_SECRET=(.+)$/m);
    if (match) {
      SECRET_KEY = match[1];
    }
  }

  // If still missing, generate new one and save it
  if (!SECRET_KEY) {
    SECRET_KEY = randomBytes(32).toString("hex");
    appendFileSync(envPath, `\nHMAC_SECRET=${SECRET_KEY}\n`);
    console.warn(
      `[authMiddleware] No HMAC_SECRET found. Generated and saved new one in .env: ${SECRET_KEY}`
    );
  }
}

export { SECRET_KEY };
