
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model ExamSession
 * 
 */
export type ExamSession = $Result.DefaultSelection<Prisma.$ExamSessionPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model LGA
 * 
 */
export type LGA = $Result.DefaultSelection<Prisma.$LGAPayload>
/**
 * Model CandidateAuditLog
 * 
 */
export type CandidateAuditLog = $Result.DefaultSelection<Prisma.$CandidateAuditLogPayload>
/**
 * Model AdminAuditLog
 * 
 */
export type AdminAuditLog = $Result.DefaultSelection<Prisma.$AdminAuditLogPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Disability: {
  VISUAL: 'VISUAL',
  HEARING: 'HEARING',
  PHYSICAL: 'PHYSICAL',
  LEARNING: 'LEARNING',
  OTHER: 'OTHER'
};

export type Disability = (typeof Disability)[keyof typeof Disability]


export const RegistrationStatus: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]


export const SchoolType: {
  SECONDARY: 'SECONDARY',
  SEMINARY: 'SEMINARY'
};

export type SchoolType = (typeof SchoolType)[keyof typeof SchoolType]


export const AdminRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const ExamSessionStatus: {
  UPCOMING: 'UPCOMING',
  REGISTRATION_OPEN: 'REGISTRATION_OPEN',
  REGISTRATION_CLOSED: 'REGISTRATION_CLOSED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ExamSessionStatus = (typeof ExamSessionStatus)[keyof typeof ExamSessionStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Disability = $Enums.Disability

export const Disability: typeof $Enums.Disability

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

export type SchoolType = $Enums.SchoolType

export const SchoolType: typeof $Enums.SchoolType

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type ExamSessionStatus = $Enums.ExamSessionStatus

export const ExamSessionStatus: typeof $Enums.ExamSessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examSession`: Exposes CRUD operations for the **ExamSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamSessions
    * const examSessions = await prisma.examSession.findMany()
    * ```
    */
  get examSession(): Prisma.ExamSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lGA`: Exposes CRUD operations for the **LGA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LGAS
    * const lGAS = await prisma.lGA.findMany()
    * ```
    */
  get lGA(): Prisma.LGADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateAuditLog`: Exposes CRUD operations for the **CandidateAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateAuditLogs
    * const candidateAuditLogs = await prisma.candidateAuditLog.findMany()
    * ```
    */
  get candidateAuditLog(): Prisma.CandidateAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminAuditLog`: Exposes CRUD operations for the **AdminAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAuditLogs
    * const adminAuditLogs = await prisma.adminAuditLog.findMany()
    * ```
    */
  get adminAuditLog(): Prisma.AdminAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    School: 'School',
    AdminUser: 'AdminUser',
    Session: 'Session',
    Candidate: 'Candidate',
    ExamSession: 'ExamSession',
    PasswordResetToken: 'PasswordResetToken',
    EmailVerificationToken: 'EmailVerificationToken',
    State: 'State',
    LGA: 'LGA',
    CandidateAuditLog: 'CandidateAuditLog',
    AdminAuditLog: 'AdminAuditLog',
    SystemConfig: 'SystemConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "school" | "adminUser" | "session" | "candidate" | "examSession" | "passwordResetToken" | "emailVerificationToken" | "state" | "lGA" | "candidateAuditLog" | "adminAuditLog" | "systemConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      ExamSession: {
        payload: Prisma.$ExamSessionPayload<ExtArgs>
        fields: Prisma.ExamSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          findFirst: {
            args: Prisma.ExamSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          findMany: {
            args: Prisma.ExamSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>[]
          }
          create: {
            args: Prisma.ExamSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          createMany: {
            args: Prisma.ExamSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>[]
          }
          delete: {
            args: Prisma.ExamSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          update: {
            args: Prisma.ExamSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          deleteMany: {
            args: Prisma.ExamSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>[]
          }
          upsert: {
            args: Prisma.ExamSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          aggregate: {
            args: Prisma.ExamSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamSession>
          }
          groupBy: {
            args: Prisma.ExamSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamSessionCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      LGA: {
        payload: Prisma.$LGAPayload<ExtArgs>
        fields: Prisma.LGAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LGAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LGAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>
          }
          findFirst: {
            args: Prisma.LGAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LGAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>
          }
          findMany: {
            args: Prisma.LGAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>[]
          }
          create: {
            args: Prisma.LGACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>
          }
          createMany: {
            args: Prisma.LGACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LGACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>[]
          }
          delete: {
            args: Prisma.LGADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>
          }
          update: {
            args: Prisma.LGAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>
          }
          deleteMany: {
            args: Prisma.LGADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LGAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LGAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>[]
          }
          upsert: {
            args: Prisma.LGAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LGAPayload>
          }
          aggregate: {
            args: Prisma.LGAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLGA>
          }
          groupBy: {
            args: Prisma.LGAGroupByArgs<ExtArgs>
            result: $Utils.Optional<LGAGroupByOutputType>[]
          }
          count: {
            args: Prisma.LGACountArgs<ExtArgs>
            result: $Utils.Optional<LGACountAggregateOutputType> | number
          }
        }
      }
      CandidateAuditLog: {
        payload: Prisma.$CandidateAuditLogPayload<ExtArgs>
        fields: Prisma.CandidateAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>
          }
          findFirst: {
            args: Prisma.CandidateAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>
          }
          findMany: {
            args: Prisma.CandidateAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>[]
          }
          create: {
            args: Prisma.CandidateAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>
          }
          createMany: {
            args: Prisma.CandidateAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>[]
          }
          delete: {
            args: Prisma.CandidateAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>
          }
          update: {
            args: Prisma.CandidateAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.CandidateAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.CandidateAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAuditLogPayload>
          }
          aggregate: {
            args: Prisma.CandidateAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateAuditLog>
          }
          groupBy: {
            args: Prisma.CandidateAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateAuditLogCountAggregateOutputType> | number
          }
        }
      }
      AdminAuditLog: {
        payload: Prisma.$AdminAuditLogPayload<ExtArgs>
        fields: Prisma.AdminAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          findFirst: {
            args: Prisma.AdminAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          findMany: {
            args: Prisma.AdminAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          create: {
            args: Prisma.AdminAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          createMany: {
            args: Prisma.AdminAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          delete: {
            args: Prisma.AdminAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          update: {
            args: Prisma.AdminAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AdminAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          aggregate: {
            args: Prisma.AdminAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAuditLog>
          }
          groupBy: {
            args: Prisma.AdminAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAuditLogCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    school?: SchoolOmit
    adminUser?: AdminUserOmit
    session?: SessionOmit
    candidate?: CandidateOmit
    examSession?: ExamSessionOmit
    passwordResetToken?: PasswordResetTokenOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    state?: StateOmit
    lGA?: LGAOmit
    candidateAuditLog?: CandidateAuditLogOmit
    adminAuditLog?: AdminAuditLogOmit
    systemConfig?: SystemConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    adminUsers: number
    candidates: number
    examSessions: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUsers?: boolean | SchoolCountOutputTypeCountAdminUsersArgs
    candidates?: boolean | SchoolCountOutputTypeCountCandidatesArgs
    examSessions?: boolean | SchoolCountOutputTypeCountExamSessionsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAdminUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountExamSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSessionWhereInput
  }


  /**
   * Count Type AdminUserCountOutputType
   */

  export type AdminUserCountOutputType = {
    sessions: number
    candidatesCreated: number
    auditLogs: number
  }

  export type AdminUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AdminUserCountOutputTypeCountSessionsArgs
    candidatesCreated?: boolean | AdminUserCountOutputTypeCountCandidatesCreatedArgs
    auditLogs?: boolean | AdminUserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserCountOutputType
     */
    select?: AdminUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountCandidatesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuditLogWhereInput
  }


  /**
   * Count Type ExamSessionCountOutputType
   */

  export type ExamSessionCountOutputType = {
    candidates: number
    schools: number
  }

  export type ExamSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | ExamSessionCountOutputTypeCountCandidatesArgs
    schools?: boolean | ExamSessionCountOutputTypeCountSchoolsArgs
  }

  // Custom InputTypes
  /**
   * ExamSessionCountOutputType without action
   */
  export type ExamSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSessionCountOutputType
     */
    select?: ExamSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamSessionCountOutputType without action
   */
  export type ExamSessionCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * ExamSessionCountOutputType without action
   */
  export type ExamSessionCountOutputTypeCountSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    lgas: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lgas?: boolean | StateCountOutputTypeCountLgasArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountLgasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LGAWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    centerNumber: string | null
    centerName: string | null
    state: string | null
    lga: string | null
    schoolEmail: string | null
    schoolPhone: string | null
    schoolAddress: string | null
    schoolType: $Enums.SchoolType | null
    principalName: string | null
    principalPhone: string | null
    examOfficerPhone: string | null
    isActive: boolean | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    centerNumber: string | null
    centerName: string | null
    state: string | null
    lga: string | null
    schoolEmail: string | null
    schoolPhone: string | null
    schoolAddress: string | null
    schoolType: $Enums.SchoolType | null
    principalName: string | null
    principalPhone: string | null
    examOfficerPhone: string | null
    isActive: boolean | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    centerNumber: number
    centerName: number
    state: number
    lga: number
    schoolEmail: number
    schoolPhone: number
    schoolAddress: number
    schoolType: number
    principalName: number
    principalPhone: number
    examOfficerPhone: number
    isActive: number
    isVerified: number
    verifiedAt: number
    verifiedBy: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    centerNumber?: true
    centerName?: true
    state?: true
    lga?: true
    schoolEmail?: true
    schoolPhone?: true
    schoolAddress?: true
    schoolType?: true
    principalName?: true
    principalPhone?: true
    examOfficerPhone?: true
    isActive?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    centerNumber?: true
    centerName?: true
    state?: true
    lga?: true
    schoolEmail?: true
    schoolPhone?: true
    schoolAddress?: true
    schoolType?: true
    principalName?: true
    principalPhone?: true
    examOfficerPhone?: true
    isActive?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    centerNumber?: true
    centerName?: true
    state?: true
    lga?: true
    schoolEmail?: true
    schoolPhone?: true
    schoolAddress?: true
    schoolType?: true
    principalName?: true
    principalPhone?: true
    examOfficerPhone?: true
    isActive?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone: string | null
    isActive: boolean
    isVerified: boolean
    verifiedAt: Date | null
    verifiedBy: string | null
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    centerNumber?: boolean
    centerName?: boolean
    state?: boolean
    lga?: boolean
    schoolEmail?: boolean
    schoolPhone?: boolean
    schoolAddress?: boolean
    schoolType?: boolean
    principalName?: boolean
    principalPhone?: boolean
    examOfficerPhone?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    adminUsers?: boolean | School$adminUsersArgs<ExtArgs>
    candidates?: boolean | School$candidatesArgs<ExtArgs>
    examSessions?: boolean | School$examSessionsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    centerNumber?: boolean
    centerName?: boolean
    state?: boolean
    lga?: boolean
    schoolEmail?: boolean
    schoolPhone?: boolean
    schoolAddress?: boolean
    schoolType?: boolean
    principalName?: boolean
    principalPhone?: boolean
    examOfficerPhone?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    centerNumber?: boolean
    centerName?: boolean
    state?: boolean
    lga?: boolean
    schoolEmail?: boolean
    schoolPhone?: boolean
    schoolAddress?: boolean
    schoolType?: boolean
    principalName?: boolean
    principalPhone?: boolean
    examOfficerPhone?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    centerNumber?: boolean
    centerName?: boolean
    state?: boolean
    lga?: boolean
    schoolEmail?: boolean
    schoolPhone?: boolean
    schoolAddress?: boolean
    schoolType?: boolean
    principalName?: boolean
    principalPhone?: boolean
    examOfficerPhone?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "centerNumber" | "centerName" | "state" | "lga" | "schoolEmail" | "schoolPhone" | "schoolAddress" | "schoolType" | "principalName" | "principalPhone" | "examOfficerPhone" | "isActive" | "isVerified" | "verifiedAt" | "verifiedBy", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUsers?: boolean | School$adminUsersArgs<ExtArgs>
    candidates?: boolean | School$candidatesArgs<ExtArgs>
    examSessions?: boolean | School$examSessionsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      adminUsers: Prisma.$AdminUserPayload<ExtArgs>[]
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
      examSessions: Prisma.$ExamSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      centerNumber: string
      centerName: string
      state: string
      lga: string
      schoolEmail: string
      schoolPhone: string
      schoolAddress: string
      schoolType: $Enums.SchoolType
      principalName: string
      principalPhone: string
      examOfficerPhone: string | null
      isActive: boolean
      isVerified: boolean
      verifiedAt: Date | null
      verifiedBy: string | null
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminUsers<T extends School$adminUsersArgs<ExtArgs> = {}>(args?: Subset<T, School$adminUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidates<T extends School$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, School$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examSessions<T extends School$examSessionsArgs<ExtArgs> = {}>(args?: Subset<T, School$examSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
    readonly centerNumber: FieldRef<"School", 'String'>
    readonly centerName: FieldRef<"School", 'String'>
    readonly state: FieldRef<"School", 'String'>
    readonly lga: FieldRef<"School", 'String'>
    readonly schoolEmail: FieldRef<"School", 'String'>
    readonly schoolPhone: FieldRef<"School", 'String'>
    readonly schoolAddress: FieldRef<"School", 'String'>
    readonly schoolType: FieldRef<"School", 'SchoolType'>
    readonly principalName: FieldRef<"School", 'String'>
    readonly principalPhone: FieldRef<"School", 'String'>
    readonly examOfficerPhone: FieldRef<"School", 'String'>
    readonly isActive: FieldRef<"School", 'Boolean'>
    readonly isVerified: FieldRef<"School", 'Boolean'>
    readonly verifiedAt: FieldRef<"School", 'DateTime'>
    readonly verifiedBy: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.adminUsers
   */
  export type School$adminUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    cursor?: AdminUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * School.candidates
   */
  export type School$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * School.examSessions
   */
  export type School$examSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    where?: ExamSessionWhereInput
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    cursor?: ExamSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    emailVerified: boolean | null
    emailVerifiedAt: Date | null
    lastLoginAt: Date | null
    schoolId: string | null
    role: $Enums.AdminRole | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    emailVerified: boolean | null
    emailVerifiedAt: Date | null
    lastLoginAt: Date | null
    schoolId: string | null
    role: $Enums.AdminRole | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    phone: number
    password: number
    isActive: number
    emailVerified: number
    emailVerifiedAt: number
    lastLoginAt: number
    schoolId: number
    role: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    emailVerified?: true
    emailVerifiedAt?: true
    lastLoginAt?: true
    schoolId?: true
    role?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    emailVerified?: true
    emailVerifiedAt?: true
    lastLoginAt?: true
    schoolId?: true
    role?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    emailVerified?: true
    emailVerifiedAt?: true
    lastLoginAt?: true
    schoolId?: true
    role?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    email: string
    phone: string
    password: string
    isActive: boolean
    emailVerified: boolean
    emailVerifiedAt: Date | null
    lastLoginAt: Date | null
    schoolId: string
    role: $Enums.AdminRole
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    lastLoginAt?: boolean
    schoolId?: boolean
    role?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    sessions?: boolean | AdminUser$sessionsArgs<ExtArgs>
    candidatesCreated?: boolean | AdminUser$candidatesCreatedArgs<ExtArgs>
    auditLogs?: boolean | AdminUser$auditLogsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    lastLoginAt?: boolean
    schoolId?: boolean
    role?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    lastLoginAt?: boolean
    schoolId?: boolean
    role?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    lastLoginAt?: boolean
    schoolId?: boolean
    role?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "phone" | "password" | "isActive" | "emailVerified" | "emailVerifiedAt" | "lastLoginAt" | "schoolId" | "role", ExtArgs["result"]["adminUser"]>
  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    sessions?: boolean | AdminUser$sessionsArgs<ExtArgs>
    candidatesCreated?: boolean | AdminUser$candidatesCreatedArgs<ExtArgs>
    auditLogs?: boolean | AdminUser$auditLogsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      candidatesCreated: Prisma.$CandidatePayload<ExtArgs>[]
      auditLogs: Prisma.$AdminAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      email: string
      phone: string
      password: string
      isActive: boolean
      emailVerified: boolean
      emailVerifiedAt: Date | null
      lastLoginAt: Date | null
      schoolId: string
      role: $Enums.AdminRole
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends AdminUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidatesCreated<T extends AdminUser$candidatesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$candidatesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends AdminUser$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly phone: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly isActive: FieldRef<"AdminUser", 'Boolean'>
    readonly emailVerified: FieldRef<"AdminUser", 'Boolean'>
    readonly emailVerifiedAt: FieldRef<"AdminUser", 'DateTime'>
    readonly lastLoginAt: FieldRef<"AdminUser", 'DateTime'>
    readonly schoolId: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'AdminRole'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser.sessions
   */
  export type AdminUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * AdminUser.candidatesCreated
   */
  export type AdminUser$candidatesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * AdminUser.auditLogs
   */
  export type AdminUser$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    where?: AdminAuditLogWhereInput
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    cursor?: AdminAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    adminUserId: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    adminUserId: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    adminUserId: number
    expires: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    adminUserId?: true
    expires?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    adminUserId?: true
    expires?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    adminUserId?: true
    expires?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    adminUserId: string
    expires: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    adminUserId?: boolean
    expires?: boolean
    createdAt?: boolean
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    adminUserId?: boolean
    expires?: boolean
    createdAt?: boolean
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    adminUserId?: boolean
    expires?: boolean
    createdAt?: boolean
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    adminUserId?: boolean
    expires?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "adminUserId" | "expires" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      adminUser: Prisma.$AdminUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      adminUserId: string
      expires: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminUser<T extends AdminUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminUserDefaultArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly adminUserId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    surname: string | null
    firstName: string | null
    otherName: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    nin: string | null
    phoneNumber: string | null
    disability: $Enums.Disability | null
    state: string | null
    lga: string | null
    passportPhotoUrl: string | null
    registrationNumber: string | null
    acceptedTerms: boolean | null
    registrationStatus: $Enums.RegistrationStatus | null
    schoolId: string | null
    createdById: string | null
    examSessionId: string | null
    submittedAt: Date | null
    verifiedAt: Date | null
    verifiedBy: string | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    surname: string | null
    firstName: string | null
    otherName: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    nin: string | null
    phoneNumber: string | null
    disability: $Enums.Disability | null
    state: string | null
    lga: string | null
    passportPhotoUrl: string | null
    registrationNumber: string | null
    acceptedTerms: boolean | null
    registrationStatus: $Enums.RegistrationStatus | null
    schoolId: string | null
    createdById: string | null
    examSessionId: string | null
    submittedAt: Date | null
    verifiedAt: Date | null
    verifiedBy: string | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    surname: number
    firstName: number
    otherName: number
    dateOfBirth: number
    gender: number
    nin: number
    phoneNumber: number
    disability: number
    state: number
    lga: number
    passportPhotoUrl: number
    registrationNumber: number
    acceptedTerms: number
    registrationStatus: number
    schoolId: number
    createdById: number
    examSessionId: number
    submittedAt: number
    verifiedAt: number
    verifiedBy: number
    _all: number
  }


  export type CandidateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    surname?: true
    firstName?: true
    otherName?: true
    dateOfBirth?: true
    gender?: true
    nin?: true
    phoneNumber?: true
    disability?: true
    state?: true
    lga?: true
    passportPhotoUrl?: true
    registrationNumber?: true
    acceptedTerms?: true
    registrationStatus?: true
    schoolId?: true
    createdById?: true
    examSessionId?: true
    submittedAt?: true
    verifiedAt?: true
    verifiedBy?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    surname?: true
    firstName?: true
    otherName?: true
    dateOfBirth?: true
    gender?: true
    nin?: true
    phoneNumber?: true
    disability?: true
    state?: true
    lga?: true
    passportPhotoUrl?: true
    registrationNumber?: true
    acceptedTerms?: true
    registrationStatus?: true
    schoolId?: true
    createdById?: true
    examSessionId?: true
    submittedAt?: true
    verifiedAt?: true
    verifiedBy?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    surname?: true
    firstName?: true
    otherName?: true
    dateOfBirth?: true
    gender?: true
    nin?: true
    phoneNumber?: true
    disability?: true
    state?: true
    lga?: true
    passportPhotoUrl?: true
    registrationNumber?: true
    acceptedTerms?: true
    registrationStatus?: true
    schoolId?: true
    createdById?: true
    examSessionId?: true
    submittedAt?: true
    verifiedAt?: true
    verifiedBy?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    surname: string
    firstName: string
    otherName: string | null
    dateOfBirth: Date
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl: string | null
    registrationNumber: string
    acceptedTerms: boolean
    registrationStatus: $Enums.RegistrationStatus
    schoolId: string
    createdById: string
    examSessionId: string | null
    submittedAt: Date | null
    verifiedAt: Date | null
    verifiedBy: string | null
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surname?: boolean
    firstName?: boolean
    otherName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    nin?: boolean
    phoneNumber?: boolean
    disability?: boolean
    state?: boolean
    lga?: boolean
    passportPhotoUrl?: boolean
    registrationNumber?: boolean
    acceptedTerms?: boolean
    registrationStatus?: boolean
    schoolId?: boolean
    createdById?: boolean
    examSessionId?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    createdBy?: boolean | AdminUserDefaultArgs<ExtArgs>
    examSession?: boolean | Candidate$examSessionArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surname?: boolean
    firstName?: boolean
    otherName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    nin?: boolean
    phoneNumber?: boolean
    disability?: boolean
    state?: boolean
    lga?: boolean
    passportPhotoUrl?: boolean
    registrationNumber?: boolean
    acceptedTerms?: boolean
    registrationStatus?: boolean
    schoolId?: boolean
    createdById?: boolean
    examSessionId?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    createdBy?: boolean | AdminUserDefaultArgs<ExtArgs>
    examSession?: boolean | Candidate$examSessionArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surname?: boolean
    firstName?: boolean
    otherName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    nin?: boolean
    phoneNumber?: boolean
    disability?: boolean
    state?: boolean
    lga?: boolean
    passportPhotoUrl?: boolean
    registrationNumber?: boolean
    acceptedTerms?: boolean
    registrationStatus?: boolean
    schoolId?: boolean
    createdById?: boolean
    examSessionId?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    createdBy?: boolean | AdminUserDefaultArgs<ExtArgs>
    examSession?: boolean | Candidate$examSessionArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surname?: boolean
    firstName?: boolean
    otherName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    nin?: boolean
    phoneNumber?: boolean
    disability?: boolean
    state?: boolean
    lga?: boolean
    passportPhotoUrl?: boolean
    registrationNumber?: boolean
    acceptedTerms?: boolean
    registrationStatus?: boolean
    schoolId?: boolean
    createdById?: boolean
    examSessionId?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "surname" | "firstName" | "otherName" | "dateOfBirth" | "gender" | "nin" | "phoneNumber" | "disability" | "state" | "lga" | "passportPhotoUrl" | "registrationNumber" | "acceptedTerms" | "registrationStatus" | "schoolId" | "createdById" | "examSessionId" | "submittedAt" | "verifiedAt" | "verifiedBy", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    createdBy?: boolean | AdminUserDefaultArgs<ExtArgs>
    examSession?: boolean | Candidate$examSessionArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    createdBy?: boolean | AdminUserDefaultArgs<ExtArgs>
    examSession?: boolean | Candidate$examSessionArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    createdBy?: boolean | AdminUserDefaultArgs<ExtArgs>
    examSession?: boolean | Candidate$examSessionArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      createdBy: Prisma.$AdminUserPayload<ExtArgs>
      examSession: Prisma.$ExamSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      surname: string
      firstName: string
      otherName: string | null
      dateOfBirth: Date
      gender: $Enums.Gender
      nin: string
      phoneNumber: string
      disability: $Enums.Disability | null
      state: string
      lga: string
      passportPhotoUrl: string | null
      registrationNumber: string
      acceptedTerms: boolean
      registrationStatus: $Enums.RegistrationStatus
      schoolId: string
      createdById: string
      examSessionId: string | null
      submittedAt: Date | null
      verifiedAt: Date | null
      verifiedBy: string | null
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends AdminUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminUserDefaultArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examSession<T extends Candidate$examSessionArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$examSessionArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly createdAt: FieldRef<"Candidate", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidate", 'DateTime'>
    readonly surname: FieldRef<"Candidate", 'String'>
    readonly firstName: FieldRef<"Candidate", 'String'>
    readonly otherName: FieldRef<"Candidate", 'String'>
    readonly dateOfBirth: FieldRef<"Candidate", 'DateTime'>
    readonly gender: FieldRef<"Candidate", 'Gender'>
    readonly nin: FieldRef<"Candidate", 'String'>
    readonly phoneNumber: FieldRef<"Candidate", 'String'>
    readonly disability: FieldRef<"Candidate", 'Disability'>
    readonly state: FieldRef<"Candidate", 'String'>
    readonly lga: FieldRef<"Candidate", 'String'>
    readonly passportPhotoUrl: FieldRef<"Candidate", 'String'>
    readonly registrationNumber: FieldRef<"Candidate", 'String'>
    readonly acceptedTerms: FieldRef<"Candidate", 'Boolean'>
    readonly registrationStatus: FieldRef<"Candidate", 'RegistrationStatus'>
    readonly schoolId: FieldRef<"Candidate", 'String'>
    readonly createdById: FieldRef<"Candidate", 'String'>
    readonly examSessionId: FieldRef<"Candidate", 'String'>
    readonly submittedAt: FieldRef<"Candidate", 'DateTime'>
    readonly verifiedAt: FieldRef<"Candidate", 'DateTime'>
    readonly verifiedBy: FieldRef<"Candidate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.examSession
   */
  export type Candidate$examSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    where?: ExamSessionWhereInput
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model ExamSession
   */

  export type AggregateExamSession = {
    _count: ExamSessionCountAggregateOutputType | null
    _avg: ExamSessionAvgAggregateOutputType | null
    _sum: ExamSessionSumAggregateOutputType | null
    _min: ExamSessionMinAggregateOutputType | null
    _max: ExamSessionMaxAggregateOutputType | null
  }

  export type ExamSessionAvgAggregateOutputType = {
    duration: number | null
    registrationFee: Decimal | null
  }

  export type ExamSessionSumAggregateOutputType = {
    duration: number | null
    registrationFee: Decimal | null
  }

  export type ExamSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    examDate: Date | null
    examTime: string | null
    duration: number | null
    registrationStartDate: Date | null
    registrationEndDate: Date | null
    status: $Enums.ExamSessionStatus | null
    isActive: boolean | null
    registrationFee: Decimal | null
  }

  export type ExamSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    examDate: Date | null
    examTime: string | null
    duration: number | null
    registrationStartDate: Date | null
    registrationEndDate: Date | null
    status: $Enums.ExamSessionStatus | null
    isActive: boolean | null
    registrationFee: Decimal | null
  }

  export type ExamSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    examDate: number
    examTime: number
    duration: number
    registrationStartDate: number
    registrationEndDate: number
    status: number
    isActive: number
    registrationFee: number
    _all: number
  }


  export type ExamSessionAvgAggregateInputType = {
    duration?: true
    registrationFee?: true
  }

  export type ExamSessionSumAggregateInputType = {
    duration?: true
    registrationFee?: true
  }

  export type ExamSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    examDate?: true
    examTime?: true
    duration?: true
    registrationStartDate?: true
    registrationEndDate?: true
    status?: true
    isActive?: true
    registrationFee?: true
  }

  export type ExamSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    examDate?: true
    examTime?: true
    duration?: true
    registrationStartDate?: true
    registrationEndDate?: true
    status?: true
    isActive?: true
    registrationFee?: true
  }

  export type ExamSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    examDate?: true
    examTime?: true
    duration?: true
    registrationStartDate?: true
    registrationEndDate?: true
    status?: true
    isActive?: true
    registrationFee?: true
    _all?: true
  }

  export type ExamSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSession to aggregate.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamSessions
    **/
    _count?: true | ExamSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamSessionMaxAggregateInputType
  }

  export type GetExamSessionAggregateType<T extends ExamSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamSession[P]>
      : GetScalarType<T[P], AggregateExamSession[P]>
  }




  export type ExamSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSessionWhereInput
    orderBy?: ExamSessionOrderByWithAggregationInput | ExamSessionOrderByWithAggregationInput[]
    by: ExamSessionScalarFieldEnum[] | ExamSessionScalarFieldEnum
    having?: ExamSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamSessionCountAggregateInputType | true
    _avg?: ExamSessionAvgAggregateInputType
    _sum?: ExamSessionSumAggregateInputType
    _min?: ExamSessionMinAggregateInputType
    _max?: ExamSessionMaxAggregateInputType
  }

  export type ExamSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    examDate: Date
    examTime: string
    duration: number
    registrationStartDate: Date
    registrationEndDate: Date
    status: $Enums.ExamSessionStatus
    isActive: boolean
    registrationFee: Decimal
    _count: ExamSessionCountAggregateOutputType | null
    _avg: ExamSessionAvgAggregateOutputType | null
    _sum: ExamSessionSumAggregateOutputType | null
    _min: ExamSessionMinAggregateOutputType | null
    _max: ExamSessionMaxAggregateOutputType | null
  }

  type GetExamSessionGroupByPayload<T extends ExamSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamSessionGroupByOutputType[P]>
        }
      >
    >


  export type ExamSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    examDate?: boolean
    examTime?: boolean
    duration?: boolean
    registrationStartDate?: boolean
    registrationEndDate?: boolean
    status?: boolean
    isActive?: boolean
    registrationFee?: boolean
    candidates?: boolean | ExamSession$candidatesArgs<ExtArgs>
    schools?: boolean | ExamSession$schoolsArgs<ExtArgs>
    _count?: boolean | ExamSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSession"]>

  export type ExamSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    examDate?: boolean
    examTime?: boolean
    duration?: boolean
    registrationStartDate?: boolean
    registrationEndDate?: boolean
    status?: boolean
    isActive?: boolean
    registrationFee?: boolean
  }, ExtArgs["result"]["examSession"]>

  export type ExamSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    examDate?: boolean
    examTime?: boolean
    duration?: boolean
    registrationStartDate?: boolean
    registrationEndDate?: boolean
    status?: boolean
    isActive?: boolean
    registrationFee?: boolean
  }, ExtArgs["result"]["examSession"]>

  export type ExamSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    examDate?: boolean
    examTime?: boolean
    duration?: boolean
    registrationStartDate?: boolean
    registrationEndDate?: boolean
    status?: boolean
    isActive?: boolean
    registrationFee?: boolean
  }

  export type ExamSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "examDate" | "examTime" | "duration" | "registrationStartDate" | "registrationEndDate" | "status" | "isActive" | "registrationFee", ExtArgs["result"]["examSession"]>
  export type ExamSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | ExamSession$candidatesArgs<ExtArgs>
    schools?: boolean | ExamSession$schoolsArgs<ExtArgs>
    _count?: boolean | ExamSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExamSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExamSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamSession"
    objects: {
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
      schools: Prisma.$SchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
      examDate: Date
      examTime: string
      duration: number
      registrationStartDate: Date
      registrationEndDate: Date
      status: $Enums.ExamSessionStatus
      isActive: boolean
      registrationFee: Prisma.Decimal
    }, ExtArgs["result"]["examSession"]>
    composites: {}
  }

  type ExamSessionGetPayload<S extends boolean | null | undefined | ExamSessionDefaultArgs> = $Result.GetResult<Prisma.$ExamSessionPayload, S>

  type ExamSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamSessionCountAggregateInputType | true
    }

  export interface ExamSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamSession'], meta: { name: 'ExamSession' } }
    /**
     * Find zero or one ExamSession that matches the filter.
     * @param {ExamSessionFindUniqueArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamSessionFindUniqueArgs>(args: SelectSubset<T, ExamSessionFindUniqueArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamSessionFindUniqueOrThrowArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionFindFirstArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamSessionFindFirstArgs>(args?: SelectSubset<T, ExamSessionFindFirstArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionFindFirstOrThrowArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamSessions
     * const examSessions = await prisma.examSession.findMany()
     * 
     * // Get first 10 ExamSessions
     * const examSessions = await prisma.examSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examSessionWithIdOnly = await prisma.examSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamSessionFindManyArgs>(args?: SelectSubset<T, ExamSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamSession.
     * @param {ExamSessionCreateArgs} args - Arguments to create a ExamSession.
     * @example
     * // Create one ExamSession
     * const ExamSession = await prisma.examSession.create({
     *   data: {
     *     // ... data to create a ExamSession
     *   }
     * })
     * 
     */
    create<T extends ExamSessionCreateArgs>(args: SelectSubset<T, ExamSessionCreateArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamSessions.
     * @param {ExamSessionCreateManyArgs} args - Arguments to create many ExamSessions.
     * @example
     * // Create many ExamSessions
     * const examSession = await prisma.examSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamSessionCreateManyArgs>(args?: SelectSubset<T, ExamSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamSessions and returns the data saved in the database.
     * @param {ExamSessionCreateManyAndReturnArgs} args - Arguments to create many ExamSessions.
     * @example
     * // Create many ExamSessions
     * const examSession = await prisma.examSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamSessions and only return the `id`
     * const examSessionWithIdOnly = await prisma.examSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamSession.
     * @param {ExamSessionDeleteArgs} args - Arguments to delete one ExamSession.
     * @example
     * // Delete one ExamSession
     * const ExamSession = await prisma.examSession.delete({
     *   where: {
     *     // ... filter to delete one ExamSession
     *   }
     * })
     * 
     */
    delete<T extends ExamSessionDeleteArgs>(args: SelectSubset<T, ExamSessionDeleteArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamSession.
     * @param {ExamSessionUpdateArgs} args - Arguments to update one ExamSession.
     * @example
     * // Update one ExamSession
     * const examSession = await prisma.examSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamSessionUpdateArgs>(args: SelectSubset<T, ExamSessionUpdateArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamSessions.
     * @param {ExamSessionDeleteManyArgs} args - Arguments to filter ExamSessions to delete.
     * @example
     * // Delete a few ExamSessions
     * const { count } = await prisma.examSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamSessionDeleteManyArgs>(args?: SelectSubset<T, ExamSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamSessions
     * const examSession = await prisma.examSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamSessionUpdateManyArgs>(args: SelectSubset<T, ExamSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSessions and returns the data updated in the database.
     * @param {ExamSessionUpdateManyAndReturnArgs} args - Arguments to update many ExamSessions.
     * @example
     * // Update many ExamSessions
     * const examSession = await prisma.examSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamSessions and only return the `id`
     * const examSessionWithIdOnly = await prisma.examSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamSession.
     * @param {ExamSessionUpsertArgs} args - Arguments to update or create a ExamSession.
     * @example
     * // Update or create a ExamSession
     * const examSession = await prisma.examSession.upsert({
     *   create: {
     *     // ... data to create a ExamSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamSession we want to update
     *   }
     * })
     */
    upsert<T extends ExamSessionUpsertArgs>(args: SelectSubset<T, ExamSessionUpsertArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionCountArgs} args - Arguments to filter ExamSessions to count.
     * @example
     * // Count the number of ExamSessions
     * const count = await prisma.examSession.count({
     *   where: {
     *     // ... the filter for the ExamSessions we want to count
     *   }
     * })
    **/
    count<T extends ExamSessionCountArgs>(
      args?: Subset<T, ExamSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamSessionAggregateArgs>(args: Subset<T, ExamSessionAggregateArgs>): Prisma.PrismaPromise<GetExamSessionAggregateType<T>>

    /**
     * Group by ExamSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamSessionGroupByArgs['orderBy'] }
        : { orderBy?: ExamSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamSession model
   */
  readonly fields: ExamSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends ExamSession$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, ExamSession$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schools<T extends ExamSession$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, ExamSession$schoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamSession model
   */
  interface ExamSessionFieldRefs {
    readonly id: FieldRef<"ExamSession", 'String'>
    readonly createdAt: FieldRef<"ExamSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ExamSession", 'DateTime'>
    readonly name: FieldRef<"ExamSession", 'String'>
    readonly description: FieldRef<"ExamSession", 'String'>
    readonly examDate: FieldRef<"ExamSession", 'DateTime'>
    readonly examTime: FieldRef<"ExamSession", 'String'>
    readonly duration: FieldRef<"ExamSession", 'Int'>
    readonly registrationStartDate: FieldRef<"ExamSession", 'DateTime'>
    readonly registrationEndDate: FieldRef<"ExamSession", 'DateTime'>
    readonly status: FieldRef<"ExamSession", 'ExamSessionStatus'>
    readonly isActive: FieldRef<"ExamSession", 'Boolean'>
    readonly registrationFee: FieldRef<"ExamSession", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ExamSession findUnique
   */
  export type ExamSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession findUniqueOrThrow
   */
  export type ExamSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession findFirst
   */
  export type ExamSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSessions.
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSessions.
     */
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * ExamSession findFirstOrThrow
   */
  export type ExamSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSessions.
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSessions.
     */
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * ExamSession findMany
   */
  export type ExamSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSessions to fetch.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamSessions.
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * ExamSession create
   */
  export type ExamSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamSession.
     */
    data: XOR<ExamSessionCreateInput, ExamSessionUncheckedCreateInput>
  }

  /**
   * ExamSession createMany
   */
  export type ExamSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamSessions.
     */
    data: ExamSessionCreateManyInput | ExamSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamSession createManyAndReturn
   */
  export type ExamSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ExamSessions.
     */
    data: ExamSessionCreateManyInput | ExamSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamSession update
   */
  export type ExamSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamSession.
     */
    data: XOR<ExamSessionUpdateInput, ExamSessionUncheckedUpdateInput>
    /**
     * Choose, which ExamSession to update.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession updateMany
   */
  export type ExamSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamSessions.
     */
    data: XOR<ExamSessionUpdateManyMutationInput, ExamSessionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSessions to update
     */
    where?: ExamSessionWhereInput
    /**
     * Limit how many ExamSessions to update.
     */
    limit?: number
  }

  /**
   * ExamSession updateManyAndReturn
   */
  export type ExamSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * The data used to update ExamSessions.
     */
    data: XOR<ExamSessionUpdateManyMutationInput, ExamSessionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSessions to update
     */
    where?: ExamSessionWhereInput
    /**
     * Limit how many ExamSessions to update.
     */
    limit?: number
  }

  /**
   * ExamSession upsert
   */
  export type ExamSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamSession to update in case it exists.
     */
    where: ExamSessionWhereUniqueInput
    /**
     * In case the ExamSession found by the `where` argument doesn't exist, create a new ExamSession with this data.
     */
    create: XOR<ExamSessionCreateInput, ExamSessionUncheckedCreateInput>
    /**
     * In case the ExamSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamSessionUpdateInput, ExamSessionUncheckedUpdateInput>
  }

  /**
   * ExamSession delete
   */
  export type ExamSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter which ExamSession to delete.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession deleteMany
   */
  export type ExamSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSessions to delete
     */
    where?: ExamSessionWhereInput
    /**
     * Limit how many ExamSessions to delete.
     */
    limit?: number
  }

  /**
   * ExamSession.candidates
   */
  export type ExamSession$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * ExamSession.schools
   */
  export type ExamSession$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    cursor?: SchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * ExamSession without action
   */
  export type ExamSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    used: boolean | null
    usedAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    used: boolean | null
    usedAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    createdAt: number
    used: number
    usedAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    used?: true
    usedAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    used?: true
    usedAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    used?: true
    usedAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    createdAt: Date
    used: boolean
    usedAt: Date | null
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "createdAt" | "used" | "usedAt", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
      createdAt: Date
      used: boolean
      usedAt: Date | null
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expires: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly used: FieldRef<"PasswordResetToken", 'Boolean'>
    readonly usedAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    used: boolean | null
    usedAt: Date | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    used: boolean | null
    usedAt: Date | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    createdAt: number
    used: number
    usedAt: number
    _all: number
  }


  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    used?: true
    usedAt?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    used?: true
    usedAt?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    used?: true
    usedAt?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    createdAt: Date
    used: boolean
    usedAt: Date | null
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    used?: boolean
    usedAt?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "createdAt" | "used" | "usedAt", ExtArgs["result"]["emailVerificationToken"]>

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
      createdAt: Date
      used: boolean
      usedAt: Date | null
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly email: FieldRef<"EmailVerificationToken", 'String'>
    readonly token: FieldRef<"EmailVerificationToken", 'String'>
    readonly expires: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly used: FieldRef<"EmailVerificationToken", 'Boolean'>
    readonly usedAt: FieldRef<"EmailVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: string
    name: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lgas?: boolean | State$lgasArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lgas?: boolean | State$lgasArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      lgas: Prisma.$LGAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lgas<T extends State$lgasArgs<ExtArgs> = {}>(args?: Subset<T, State$lgasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'String'>
    readonly name: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.lgas
   */
  export type State$lgasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    where?: LGAWhereInput
    orderBy?: LGAOrderByWithRelationInput | LGAOrderByWithRelationInput[]
    cursor?: LGAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LGAScalarFieldEnum | LGAScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model LGA
   */

  export type AggregateLGA = {
    _count: LGACountAggregateOutputType | null
    _min: LGAMinAggregateOutputType | null
    _max: LGAMaxAggregateOutputType | null
  }

  export type LGAMinAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
  }

  export type LGAMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
  }

  export type LGACountAggregateOutputType = {
    id: number
    name: number
    stateId: number
    _all: number
  }


  export type LGAMinAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
  }

  export type LGAMaxAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
  }

  export type LGACountAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    _all?: true
  }

  export type LGAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LGA to aggregate.
     */
    where?: LGAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LGAS to fetch.
     */
    orderBy?: LGAOrderByWithRelationInput | LGAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LGAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LGAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LGAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LGAS
    **/
    _count?: true | LGACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LGAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LGAMaxAggregateInputType
  }

  export type GetLGAAggregateType<T extends LGAAggregateArgs> = {
        [P in keyof T & keyof AggregateLGA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLGA[P]>
      : GetScalarType<T[P], AggregateLGA[P]>
  }




  export type LGAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LGAWhereInput
    orderBy?: LGAOrderByWithAggregationInput | LGAOrderByWithAggregationInput[]
    by: LGAScalarFieldEnum[] | LGAScalarFieldEnum
    having?: LGAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LGACountAggregateInputType | true
    _min?: LGAMinAggregateInputType
    _max?: LGAMaxAggregateInputType
  }

  export type LGAGroupByOutputType = {
    id: string
    name: string
    stateId: string
    _count: LGACountAggregateOutputType | null
    _min: LGAMinAggregateOutputType | null
    _max: LGAMaxAggregateOutputType | null
  }

  type GetLGAGroupByPayload<T extends LGAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LGAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LGAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LGAGroupByOutputType[P]>
            : GetScalarType<T[P], LGAGroupByOutputType[P]>
        }
      >
    >


  export type LGASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lGA"]>

  export type LGASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lGA"]>

  export type LGASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lGA"]>

  export type LGASelectScalar = {
    id?: boolean
    name?: boolean
    stateId?: boolean
  }

  export type LGAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateId", ExtArgs["result"]["lGA"]>
  export type LGAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }
  export type LGAIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }
  export type LGAIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }

  export type $LGAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LGA"
    objects: {
      state: Prisma.$StatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stateId: string
    }, ExtArgs["result"]["lGA"]>
    composites: {}
  }

  type LGAGetPayload<S extends boolean | null | undefined | LGADefaultArgs> = $Result.GetResult<Prisma.$LGAPayload, S>

  type LGACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LGAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LGACountAggregateInputType | true
    }

  export interface LGADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LGA'], meta: { name: 'LGA' } }
    /**
     * Find zero or one LGA that matches the filter.
     * @param {LGAFindUniqueArgs} args - Arguments to find a LGA
     * @example
     * // Get one LGA
     * const lGA = await prisma.lGA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LGAFindUniqueArgs>(args: SelectSubset<T, LGAFindUniqueArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LGA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LGAFindUniqueOrThrowArgs} args - Arguments to find a LGA
     * @example
     * // Get one LGA
     * const lGA = await prisma.lGA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LGAFindUniqueOrThrowArgs>(args: SelectSubset<T, LGAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LGA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGAFindFirstArgs} args - Arguments to find a LGA
     * @example
     * // Get one LGA
     * const lGA = await prisma.lGA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LGAFindFirstArgs>(args?: SelectSubset<T, LGAFindFirstArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LGA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGAFindFirstOrThrowArgs} args - Arguments to find a LGA
     * @example
     * // Get one LGA
     * const lGA = await prisma.lGA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LGAFindFirstOrThrowArgs>(args?: SelectSubset<T, LGAFindFirstOrThrowArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LGAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LGAS
     * const lGAS = await prisma.lGA.findMany()
     * 
     * // Get first 10 LGAS
     * const lGAS = await prisma.lGA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lGAWithIdOnly = await prisma.lGA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LGAFindManyArgs>(args?: SelectSubset<T, LGAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LGA.
     * @param {LGACreateArgs} args - Arguments to create a LGA.
     * @example
     * // Create one LGA
     * const LGA = await prisma.lGA.create({
     *   data: {
     *     // ... data to create a LGA
     *   }
     * })
     * 
     */
    create<T extends LGACreateArgs>(args: SelectSubset<T, LGACreateArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LGAS.
     * @param {LGACreateManyArgs} args - Arguments to create many LGAS.
     * @example
     * // Create many LGAS
     * const lGA = await prisma.lGA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LGACreateManyArgs>(args?: SelectSubset<T, LGACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LGAS and returns the data saved in the database.
     * @param {LGACreateManyAndReturnArgs} args - Arguments to create many LGAS.
     * @example
     * // Create many LGAS
     * const lGA = await prisma.lGA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LGAS and only return the `id`
     * const lGAWithIdOnly = await prisma.lGA.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LGACreateManyAndReturnArgs>(args?: SelectSubset<T, LGACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LGA.
     * @param {LGADeleteArgs} args - Arguments to delete one LGA.
     * @example
     * // Delete one LGA
     * const LGA = await prisma.lGA.delete({
     *   where: {
     *     // ... filter to delete one LGA
     *   }
     * })
     * 
     */
    delete<T extends LGADeleteArgs>(args: SelectSubset<T, LGADeleteArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LGA.
     * @param {LGAUpdateArgs} args - Arguments to update one LGA.
     * @example
     * // Update one LGA
     * const lGA = await prisma.lGA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LGAUpdateArgs>(args: SelectSubset<T, LGAUpdateArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LGAS.
     * @param {LGADeleteManyArgs} args - Arguments to filter LGAS to delete.
     * @example
     * // Delete a few LGAS
     * const { count } = await prisma.lGA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LGADeleteManyArgs>(args?: SelectSubset<T, LGADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LGAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LGAS
     * const lGA = await prisma.lGA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LGAUpdateManyArgs>(args: SelectSubset<T, LGAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LGAS and returns the data updated in the database.
     * @param {LGAUpdateManyAndReturnArgs} args - Arguments to update many LGAS.
     * @example
     * // Update many LGAS
     * const lGA = await prisma.lGA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LGAS and only return the `id`
     * const lGAWithIdOnly = await prisma.lGA.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LGAUpdateManyAndReturnArgs>(args: SelectSubset<T, LGAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LGA.
     * @param {LGAUpsertArgs} args - Arguments to update or create a LGA.
     * @example
     * // Update or create a LGA
     * const lGA = await prisma.lGA.upsert({
     *   create: {
     *     // ... data to create a LGA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LGA we want to update
     *   }
     * })
     */
    upsert<T extends LGAUpsertArgs>(args: SelectSubset<T, LGAUpsertArgs<ExtArgs>>): Prisma__LGAClient<$Result.GetResult<Prisma.$LGAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LGAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGACountArgs} args - Arguments to filter LGAS to count.
     * @example
     * // Count the number of LGAS
     * const count = await prisma.lGA.count({
     *   where: {
     *     // ... the filter for the LGAS we want to count
     *   }
     * })
    **/
    count<T extends LGACountArgs>(
      args?: Subset<T, LGACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LGACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LGA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LGAAggregateArgs>(args: Subset<T, LGAAggregateArgs>): Prisma.PrismaPromise<GetLGAAggregateType<T>>

    /**
     * Group by LGA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LGAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LGAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LGAGroupByArgs['orderBy'] }
        : { orderBy?: LGAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LGAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLGAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LGA model
   */
  readonly fields: LGAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LGA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LGAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LGA model
   */
  interface LGAFieldRefs {
    readonly id: FieldRef<"LGA", 'String'>
    readonly name: FieldRef<"LGA", 'String'>
    readonly stateId: FieldRef<"LGA", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LGA findUnique
   */
  export type LGAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * Filter, which LGA to fetch.
     */
    where: LGAWhereUniqueInput
  }

  /**
   * LGA findUniqueOrThrow
   */
  export type LGAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * Filter, which LGA to fetch.
     */
    where: LGAWhereUniqueInput
  }

  /**
   * LGA findFirst
   */
  export type LGAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * Filter, which LGA to fetch.
     */
    where?: LGAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LGAS to fetch.
     */
    orderBy?: LGAOrderByWithRelationInput | LGAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LGAS.
     */
    cursor?: LGAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LGAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LGAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LGAS.
     */
    distinct?: LGAScalarFieldEnum | LGAScalarFieldEnum[]
  }

  /**
   * LGA findFirstOrThrow
   */
  export type LGAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * Filter, which LGA to fetch.
     */
    where?: LGAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LGAS to fetch.
     */
    orderBy?: LGAOrderByWithRelationInput | LGAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LGAS.
     */
    cursor?: LGAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LGAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LGAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LGAS.
     */
    distinct?: LGAScalarFieldEnum | LGAScalarFieldEnum[]
  }

  /**
   * LGA findMany
   */
  export type LGAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * Filter, which LGAS to fetch.
     */
    where?: LGAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LGAS to fetch.
     */
    orderBy?: LGAOrderByWithRelationInput | LGAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LGAS.
     */
    cursor?: LGAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LGAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LGAS.
     */
    skip?: number
    distinct?: LGAScalarFieldEnum | LGAScalarFieldEnum[]
  }

  /**
   * LGA create
   */
  export type LGACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * The data needed to create a LGA.
     */
    data: XOR<LGACreateInput, LGAUncheckedCreateInput>
  }

  /**
   * LGA createMany
   */
  export type LGACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LGAS.
     */
    data: LGACreateManyInput | LGACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LGA createManyAndReturn
   */
  export type LGACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * The data used to create many LGAS.
     */
    data: LGACreateManyInput | LGACreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LGA update
   */
  export type LGAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * The data needed to update a LGA.
     */
    data: XOR<LGAUpdateInput, LGAUncheckedUpdateInput>
    /**
     * Choose, which LGA to update.
     */
    where: LGAWhereUniqueInput
  }

  /**
   * LGA updateMany
   */
  export type LGAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LGAS.
     */
    data: XOR<LGAUpdateManyMutationInput, LGAUncheckedUpdateManyInput>
    /**
     * Filter which LGAS to update
     */
    where?: LGAWhereInput
    /**
     * Limit how many LGAS to update.
     */
    limit?: number
  }

  /**
   * LGA updateManyAndReturn
   */
  export type LGAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * The data used to update LGAS.
     */
    data: XOR<LGAUpdateManyMutationInput, LGAUncheckedUpdateManyInput>
    /**
     * Filter which LGAS to update
     */
    where?: LGAWhereInput
    /**
     * Limit how many LGAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LGA upsert
   */
  export type LGAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * The filter to search for the LGA to update in case it exists.
     */
    where: LGAWhereUniqueInput
    /**
     * In case the LGA found by the `where` argument doesn't exist, create a new LGA with this data.
     */
    create: XOR<LGACreateInput, LGAUncheckedCreateInput>
    /**
     * In case the LGA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LGAUpdateInput, LGAUncheckedUpdateInput>
  }

  /**
   * LGA delete
   */
  export type LGADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
    /**
     * Filter which LGA to delete.
     */
    where: LGAWhereUniqueInput
  }

  /**
   * LGA deleteMany
   */
  export type LGADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LGAS to delete
     */
    where?: LGAWhereInput
    /**
     * Limit how many LGAS to delete.
     */
    limit?: number
  }

  /**
   * LGA without action
   */
  export type LGADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LGA
     */
    select?: LGASelect<ExtArgs> | null
    /**
     * Omit specific fields from the LGA
     */
    omit?: LGAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LGAInclude<ExtArgs> | null
  }


  /**
   * Model CandidateAuditLog
   */

  export type AggregateCandidateAuditLog = {
    _count: CandidateAuditLogCountAggregateOutputType | null
    _min: CandidateAuditLogMinAggregateOutputType | null
    _max: CandidateAuditLogMaxAggregateOutputType | null
  }

  export type CandidateAuditLogMinAggregateOutputType = {
    id: string | null
    candidateId: string | null
    action: string | null
    performedBy: string | null
    performedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type CandidateAuditLogMaxAggregateOutputType = {
    id: string | null
    candidateId: string | null
    action: string | null
    performedBy: string | null
    performedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type CandidateAuditLogCountAggregateOutputType = {
    id: number
    candidateId: number
    action: number
    changes: number
    performedBy: number
    performedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type CandidateAuditLogMinAggregateInputType = {
    id?: true
    candidateId?: true
    action?: true
    performedBy?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type CandidateAuditLogMaxAggregateInputType = {
    id?: true
    candidateId?: true
    action?: true
    performedBy?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type CandidateAuditLogCountAggregateInputType = {
    id?: true
    candidateId?: true
    action?: true
    changes?: true
    performedBy?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type CandidateAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateAuditLog to aggregate.
     */
    where?: CandidateAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAuditLogs to fetch.
     */
    orderBy?: CandidateAuditLogOrderByWithRelationInput | CandidateAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateAuditLogs
    **/
    _count?: true | CandidateAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateAuditLogMaxAggregateInputType
  }

  export type GetCandidateAuditLogAggregateType<T extends CandidateAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateAuditLog[P]>
      : GetScalarType<T[P], AggregateCandidateAuditLog[P]>
  }




  export type CandidateAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateAuditLogWhereInput
    orderBy?: CandidateAuditLogOrderByWithAggregationInput | CandidateAuditLogOrderByWithAggregationInput[]
    by: CandidateAuditLogScalarFieldEnum[] | CandidateAuditLogScalarFieldEnum
    having?: CandidateAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateAuditLogCountAggregateInputType | true
    _min?: CandidateAuditLogMinAggregateInputType
    _max?: CandidateAuditLogMaxAggregateInputType
  }

  export type CandidateAuditLogGroupByOutputType = {
    id: string
    candidateId: string
    action: string
    changes: JsonValue | null
    performedBy: string | null
    performedAt: Date
    ipAddress: string | null
    userAgent: string | null
    _count: CandidateAuditLogCountAggregateOutputType | null
    _min: CandidateAuditLogMinAggregateOutputType | null
    _max: CandidateAuditLogMaxAggregateOutputType | null
  }

  type GetCandidateAuditLogGroupByPayload<T extends CandidateAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type CandidateAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    action?: boolean
    changes?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["candidateAuditLog"]>

  export type CandidateAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    action?: boolean
    changes?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["candidateAuditLog"]>

  export type CandidateAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    action?: boolean
    changes?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["candidateAuditLog"]>

  export type CandidateAuditLogSelectScalar = {
    id?: boolean
    candidateId?: boolean
    action?: boolean
    changes?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type CandidateAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "action" | "changes" | "performedBy" | "performedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["candidateAuditLog"]>

  export type $CandidateAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      candidateId: string
      action: string
      changes: Prisma.JsonValue | null
      performedBy: string | null
      performedAt: Date
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["candidateAuditLog"]>
    composites: {}
  }

  type CandidateAuditLogGetPayload<S extends boolean | null | undefined | CandidateAuditLogDefaultArgs> = $Result.GetResult<Prisma.$CandidateAuditLogPayload, S>

  type CandidateAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateAuditLogCountAggregateInputType | true
    }

  export interface CandidateAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateAuditLog'], meta: { name: 'CandidateAuditLog' } }
    /**
     * Find zero or one CandidateAuditLog that matches the filter.
     * @param {CandidateAuditLogFindUniqueArgs} args - Arguments to find a CandidateAuditLog
     * @example
     * // Get one CandidateAuditLog
     * const candidateAuditLog = await prisma.candidateAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateAuditLogFindUniqueArgs>(args: SelectSubset<T, CandidateAuditLogFindUniqueArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateAuditLogFindUniqueOrThrowArgs} args - Arguments to find a CandidateAuditLog
     * @example
     * // Get one CandidateAuditLog
     * const candidateAuditLog = await prisma.candidateAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogFindFirstArgs} args - Arguments to find a CandidateAuditLog
     * @example
     * // Get one CandidateAuditLog
     * const candidateAuditLog = await prisma.candidateAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateAuditLogFindFirstArgs>(args?: SelectSubset<T, CandidateAuditLogFindFirstArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogFindFirstOrThrowArgs} args - Arguments to find a CandidateAuditLog
     * @example
     * // Get one CandidateAuditLog
     * const candidateAuditLog = await prisma.candidateAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateAuditLogs
     * const candidateAuditLogs = await prisma.candidateAuditLog.findMany()
     * 
     * // Get first 10 CandidateAuditLogs
     * const candidateAuditLogs = await prisma.candidateAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateAuditLogWithIdOnly = await prisma.candidateAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateAuditLogFindManyArgs>(args?: SelectSubset<T, CandidateAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateAuditLog.
     * @param {CandidateAuditLogCreateArgs} args - Arguments to create a CandidateAuditLog.
     * @example
     * // Create one CandidateAuditLog
     * const CandidateAuditLog = await prisma.candidateAuditLog.create({
     *   data: {
     *     // ... data to create a CandidateAuditLog
     *   }
     * })
     * 
     */
    create<T extends CandidateAuditLogCreateArgs>(args: SelectSubset<T, CandidateAuditLogCreateArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateAuditLogs.
     * @param {CandidateAuditLogCreateManyArgs} args - Arguments to create many CandidateAuditLogs.
     * @example
     * // Create many CandidateAuditLogs
     * const candidateAuditLog = await prisma.candidateAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateAuditLogCreateManyArgs>(args?: SelectSubset<T, CandidateAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateAuditLogs and returns the data saved in the database.
     * @param {CandidateAuditLogCreateManyAndReturnArgs} args - Arguments to create many CandidateAuditLogs.
     * @example
     * // Create many CandidateAuditLogs
     * const candidateAuditLog = await prisma.candidateAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateAuditLogs and only return the `id`
     * const candidateAuditLogWithIdOnly = await prisma.candidateAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateAuditLog.
     * @param {CandidateAuditLogDeleteArgs} args - Arguments to delete one CandidateAuditLog.
     * @example
     * // Delete one CandidateAuditLog
     * const CandidateAuditLog = await prisma.candidateAuditLog.delete({
     *   where: {
     *     // ... filter to delete one CandidateAuditLog
     *   }
     * })
     * 
     */
    delete<T extends CandidateAuditLogDeleteArgs>(args: SelectSubset<T, CandidateAuditLogDeleteArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateAuditLog.
     * @param {CandidateAuditLogUpdateArgs} args - Arguments to update one CandidateAuditLog.
     * @example
     * // Update one CandidateAuditLog
     * const candidateAuditLog = await prisma.candidateAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateAuditLogUpdateArgs>(args: SelectSubset<T, CandidateAuditLogUpdateArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateAuditLogs.
     * @param {CandidateAuditLogDeleteManyArgs} args - Arguments to filter CandidateAuditLogs to delete.
     * @example
     * // Delete a few CandidateAuditLogs
     * const { count } = await prisma.candidateAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateAuditLogDeleteManyArgs>(args?: SelectSubset<T, CandidateAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateAuditLogs
     * const candidateAuditLog = await prisma.candidateAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateAuditLogUpdateManyArgs>(args: SelectSubset<T, CandidateAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateAuditLogs and returns the data updated in the database.
     * @param {CandidateAuditLogUpdateManyAndReturnArgs} args - Arguments to update many CandidateAuditLogs.
     * @example
     * // Update many CandidateAuditLogs
     * const candidateAuditLog = await prisma.candidateAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateAuditLogs and only return the `id`
     * const candidateAuditLogWithIdOnly = await prisma.candidateAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateAuditLog.
     * @param {CandidateAuditLogUpsertArgs} args - Arguments to update or create a CandidateAuditLog.
     * @example
     * // Update or create a CandidateAuditLog
     * const candidateAuditLog = await prisma.candidateAuditLog.upsert({
     *   create: {
     *     // ... data to create a CandidateAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends CandidateAuditLogUpsertArgs>(args: SelectSubset<T, CandidateAuditLogUpsertArgs<ExtArgs>>): Prisma__CandidateAuditLogClient<$Result.GetResult<Prisma.$CandidateAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogCountArgs} args - Arguments to filter CandidateAuditLogs to count.
     * @example
     * // Count the number of CandidateAuditLogs
     * const count = await prisma.candidateAuditLog.count({
     *   where: {
     *     // ... the filter for the CandidateAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends CandidateAuditLogCountArgs>(
      args?: Subset<T, CandidateAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAuditLogAggregateArgs>(args: Subset<T, CandidateAuditLogAggregateArgs>): Prisma.PrismaPromise<GetCandidateAuditLogAggregateType<T>>

    /**
     * Group by CandidateAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: CandidateAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateAuditLog model
   */
  readonly fields: CandidateAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateAuditLog model
   */
  interface CandidateAuditLogFieldRefs {
    readonly id: FieldRef<"CandidateAuditLog", 'String'>
    readonly candidateId: FieldRef<"CandidateAuditLog", 'String'>
    readonly action: FieldRef<"CandidateAuditLog", 'String'>
    readonly changes: FieldRef<"CandidateAuditLog", 'Json'>
    readonly performedBy: FieldRef<"CandidateAuditLog", 'String'>
    readonly performedAt: FieldRef<"CandidateAuditLog", 'DateTime'>
    readonly ipAddress: FieldRef<"CandidateAuditLog", 'String'>
    readonly userAgent: FieldRef<"CandidateAuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CandidateAuditLog findUnique
   */
  export type CandidateAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which CandidateAuditLog to fetch.
     */
    where: CandidateAuditLogWhereUniqueInput
  }

  /**
   * CandidateAuditLog findUniqueOrThrow
   */
  export type CandidateAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which CandidateAuditLog to fetch.
     */
    where: CandidateAuditLogWhereUniqueInput
  }

  /**
   * CandidateAuditLog findFirst
   */
  export type CandidateAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which CandidateAuditLog to fetch.
     */
    where?: CandidateAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAuditLogs to fetch.
     */
    orderBy?: CandidateAuditLogOrderByWithRelationInput | CandidateAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateAuditLogs.
     */
    cursor?: CandidateAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateAuditLogs.
     */
    distinct?: CandidateAuditLogScalarFieldEnum | CandidateAuditLogScalarFieldEnum[]
  }

  /**
   * CandidateAuditLog findFirstOrThrow
   */
  export type CandidateAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which CandidateAuditLog to fetch.
     */
    where?: CandidateAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAuditLogs to fetch.
     */
    orderBy?: CandidateAuditLogOrderByWithRelationInput | CandidateAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateAuditLogs.
     */
    cursor?: CandidateAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateAuditLogs.
     */
    distinct?: CandidateAuditLogScalarFieldEnum | CandidateAuditLogScalarFieldEnum[]
  }

  /**
   * CandidateAuditLog findMany
   */
  export type CandidateAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which CandidateAuditLogs to fetch.
     */
    where?: CandidateAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAuditLogs to fetch.
     */
    orderBy?: CandidateAuditLogOrderByWithRelationInput | CandidateAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateAuditLogs.
     */
    cursor?: CandidateAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAuditLogs.
     */
    skip?: number
    distinct?: CandidateAuditLogScalarFieldEnum | CandidateAuditLogScalarFieldEnum[]
  }

  /**
   * CandidateAuditLog create
   */
  export type CandidateAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a CandidateAuditLog.
     */
    data: XOR<CandidateAuditLogCreateInput, CandidateAuditLogUncheckedCreateInput>
  }

  /**
   * CandidateAuditLog createMany
   */
  export type CandidateAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateAuditLogs.
     */
    data: CandidateAuditLogCreateManyInput | CandidateAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateAuditLog createManyAndReturn
   */
  export type CandidateAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateAuditLogs.
     */
    data: CandidateAuditLogCreateManyInput | CandidateAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateAuditLog update
   */
  export type CandidateAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a CandidateAuditLog.
     */
    data: XOR<CandidateAuditLogUpdateInput, CandidateAuditLogUncheckedUpdateInput>
    /**
     * Choose, which CandidateAuditLog to update.
     */
    where: CandidateAuditLogWhereUniqueInput
  }

  /**
   * CandidateAuditLog updateMany
   */
  export type CandidateAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateAuditLogs.
     */
    data: XOR<CandidateAuditLogUpdateManyMutationInput, CandidateAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which CandidateAuditLogs to update
     */
    where?: CandidateAuditLogWhereInput
    /**
     * Limit how many CandidateAuditLogs to update.
     */
    limit?: number
  }

  /**
   * CandidateAuditLog updateManyAndReturn
   */
  export type CandidateAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update CandidateAuditLogs.
     */
    data: XOR<CandidateAuditLogUpdateManyMutationInput, CandidateAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which CandidateAuditLogs to update
     */
    where?: CandidateAuditLogWhereInput
    /**
     * Limit how many CandidateAuditLogs to update.
     */
    limit?: number
  }

  /**
   * CandidateAuditLog upsert
   */
  export type CandidateAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the CandidateAuditLog to update in case it exists.
     */
    where: CandidateAuditLogWhereUniqueInput
    /**
     * In case the CandidateAuditLog found by the `where` argument doesn't exist, create a new CandidateAuditLog with this data.
     */
    create: XOR<CandidateAuditLogCreateInput, CandidateAuditLogUncheckedCreateInput>
    /**
     * In case the CandidateAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateAuditLogUpdateInput, CandidateAuditLogUncheckedUpdateInput>
  }

  /**
   * CandidateAuditLog delete
   */
  export type CandidateAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
    /**
     * Filter which CandidateAuditLog to delete.
     */
    where: CandidateAuditLogWhereUniqueInput
  }

  /**
   * CandidateAuditLog deleteMany
   */
  export type CandidateAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateAuditLogs to delete
     */
    where?: CandidateAuditLogWhereInput
    /**
     * Limit how many CandidateAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * CandidateAuditLog without action
   */
  export type CandidateAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAuditLog
     */
    select?: CandidateAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAuditLog
     */
    omit?: CandidateAuditLogOmit<ExtArgs> | null
  }


  /**
   * Model AdminAuditLog
   */

  export type AggregateAdminAuditLog = {
    _count: AdminAuditLogCountAggregateOutputType | null
    _min: AdminAuditLogMinAggregateOutputType | null
    _max: AdminAuditLogMaxAggregateOutputType | null
  }

  export type AdminAuditLogMinAggregateOutputType = {
    id: string | null
    adminUserId: string | null
    action: string | null
    performedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type AdminAuditLogMaxAggregateOutputType = {
    id: string | null
    adminUserId: string | null
    action: string | null
    performedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type AdminAuditLogCountAggregateOutputType = {
    id: number
    adminUserId: number
    action: number
    details: number
    performedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type AdminAuditLogMinAggregateInputType = {
    id?: true
    adminUserId?: true
    action?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type AdminAuditLogMaxAggregateInputType = {
    id?: true
    adminUserId?: true
    action?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type AdminAuditLogCountAggregateInputType = {
    id?: true
    adminUserId?: true
    action?: true
    details?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type AdminAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuditLog to aggregate.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAuditLogs
    **/
    _count?: true | AdminAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAuditLogMaxAggregateInputType
  }

  export type GetAdminAuditLogAggregateType<T extends AdminAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAuditLog[P]>
      : GetScalarType<T[P], AggregateAdminAuditLog[P]>
  }




  export type AdminAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuditLogWhereInput
    orderBy?: AdminAuditLogOrderByWithAggregationInput | AdminAuditLogOrderByWithAggregationInput[]
    by: AdminAuditLogScalarFieldEnum[] | AdminAuditLogScalarFieldEnum
    having?: AdminAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAuditLogCountAggregateInputType | true
    _min?: AdminAuditLogMinAggregateInputType
    _max?: AdminAuditLogMaxAggregateInputType
  }

  export type AdminAuditLogGroupByOutputType = {
    id: string
    adminUserId: string
    action: string
    details: JsonValue | null
    performedAt: Date
    ipAddress: string | null
    userAgent: string | null
    _count: AdminAuditLogCountAggregateOutputType | null
    _min: AdminAuditLogMinAggregateOutputType | null
    _max: AdminAuditLogMaxAggregateOutputType | null
  }

  type GetAdminAuditLogGroupByPayload<T extends AdminAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminUserId?: boolean
    action?: boolean
    details?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminUserId?: boolean
    action?: boolean
    details?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminUserId?: boolean
    action?: boolean
    details?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectScalar = {
    id?: boolean
    adminUserId?: boolean
    action?: boolean
    details?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type AdminAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminUserId" | "action" | "details" | "performedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["adminAuditLog"]>
  export type AdminAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }
  export type AdminAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }
  export type AdminAuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | AdminUserDefaultArgs<ExtArgs>
  }

  export type $AdminAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAuditLog"
    objects: {
      adminUser: Prisma.$AdminUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminUserId: string
      action: string
      details: Prisma.JsonValue | null
      performedAt: Date
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["adminAuditLog"]>
    composites: {}
  }

  type AdminAuditLogGetPayload<S extends boolean | null | undefined | AdminAuditLogDefaultArgs> = $Result.GetResult<Prisma.$AdminAuditLogPayload, S>

  type AdminAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminAuditLogCountAggregateInputType | true
    }

  export interface AdminAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAuditLog'], meta: { name: 'AdminAuditLog' } }
    /**
     * Find zero or one AdminAuditLog that matches the filter.
     * @param {AdminAuditLogFindUniqueArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAuditLogFindUniqueArgs>(args: SelectSubset<T, AdminAuditLogFindUniqueArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminAuditLogFindUniqueOrThrowArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindFirstArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAuditLogFindFirstArgs>(args?: SelectSubset<T, AdminAuditLogFindFirstArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindFirstOrThrowArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAuditLogs
     * const adminAuditLogs = await prisma.adminAuditLog.findMany()
     * 
     * // Get first 10 AdminAuditLogs
     * const adminAuditLogs = await prisma.adminAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAuditLogFindManyArgs>(args?: SelectSubset<T, AdminAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminAuditLog.
     * @param {AdminAuditLogCreateArgs} args - Arguments to create a AdminAuditLog.
     * @example
     * // Create one AdminAuditLog
     * const AdminAuditLog = await prisma.adminAuditLog.create({
     *   data: {
     *     // ... data to create a AdminAuditLog
     *   }
     * })
     * 
     */
    create<T extends AdminAuditLogCreateArgs>(args: SelectSubset<T, AdminAuditLogCreateArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminAuditLogs.
     * @param {AdminAuditLogCreateManyArgs} args - Arguments to create many AdminAuditLogs.
     * @example
     * // Create many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAuditLogCreateManyArgs>(args?: SelectSubset<T, AdminAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAuditLogs and returns the data saved in the database.
     * @param {AdminAuditLogCreateManyAndReturnArgs} args - Arguments to create many AdminAuditLogs.
     * @example
     * // Create many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAuditLogs and only return the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminAuditLog.
     * @param {AdminAuditLogDeleteArgs} args - Arguments to delete one AdminAuditLog.
     * @example
     * // Delete one AdminAuditLog
     * const AdminAuditLog = await prisma.adminAuditLog.delete({
     *   where: {
     *     // ... filter to delete one AdminAuditLog
     *   }
     * })
     * 
     */
    delete<T extends AdminAuditLogDeleteArgs>(args: SelectSubset<T, AdminAuditLogDeleteArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminAuditLog.
     * @param {AdminAuditLogUpdateArgs} args - Arguments to update one AdminAuditLog.
     * @example
     * // Update one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAuditLogUpdateArgs>(args: SelectSubset<T, AdminAuditLogUpdateArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminAuditLogs.
     * @param {AdminAuditLogDeleteManyArgs} args - Arguments to filter AdminAuditLogs to delete.
     * @example
     * // Delete a few AdminAuditLogs
     * const { count } = await prisma.adminAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAuditLogDeleteManyArgs>(args?: SelectSubset<T, AdminAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAuditLogUpdateManyArgs>(args: SelectSubset<T, AdminAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAuditLogs and returns the data updated in the database.
     * @param {AdminAuditLogUpdateManyAndReturnArgs} args - Arguments to update many AdminAuditLogs.
     * @example
     * // Update many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminAuditLogs and only return the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminAuditLog.
     * @param {AdminAuditLogUpsertArgs} args - Arguments to update or create a AdminAuditLog.
     * @example
     * // Update or create a AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.upsert({
     *   create: {
     *     // ... data to create a AdminAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminAuditLogUpsertArgs>(args: SelectSubset<T, AdminAuditLogUpsertArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogCountArgs} args - Arguments to filter AdminAuditLogs to count.
     * @example
     * // Count the number of AdminAuditLogs
     * const count = await prisma.adminAuditLog.count({
     *   where: {
     *     // ... the filter for the AdminAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminAuditLogCountArgs>(
      args?: Subset<T, AdminAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAuditLogAggregateArgs>(args: Subset<T, AdminAuditLogAggregateArgs>): Prisma.PrismaPromise<GetAdminAuditLogAggregateType<T>>

    /**
     * Group by AdminAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAuditLog model
   */
  readonly fields: AdminAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminUser<T extends AdminUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminUserDefaultArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminAuditLog model
   */
  interface AdminAuditLogFieldRefs {
    readonly id: FieldRef<"AdminAuditLog", 'String'>
    readonly adminUserId: FieldRef<"AdminAuditLog", 'String'>
    readonly action: FieldRef<"AdminAuditLog", 'String'>
    readonly details: FieldRef<"AdminAuditLog", 'Json'>
    readonly performedAt: FieldRef<"AdminAuditLog", 'DateTime'>
    readonly ipAddress: FieldRef<"AdminAuditLog", 'String'>
    readonly userAgent: FieldRef<"AdminAuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminAuditLog findUnique
   */
  export type AdminAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog findUniqueOrThrow
   */
  export type AdminAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog findFirst
   */
  export type AdminAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuditLogs.
     */
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog findFirstOrThrow
   */
  export type AdminAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuditLogs.
     */
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog findMany
   */
  export type AdminAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLogs to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog create
   */
  export type AdminAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminAuditLog.
     */
    data: XOR<AdminAuditLogCreateInput, AdminAuditLogUncheckedCreateInput>
  }

  /**
   * AdminAuditLog createMany
   */
  export type AdminAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAuditLogs.
     */
    data: AdminAuditLogCreateManyInput | AdminAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAuditLog createManyAndReturn
   */
  export type AdminAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdminAuditLogs.
     */
    data: AdminAuditLogCreateManyInput | AdminAuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAuditLog update
   */
  export type AdminAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminAuditLog.
     */
    data: XOR<AdminAuditLogUpdateInput, AdminAuditLogUncheckedUpdateInput>
    /**
     * Choose, which AdminAuditLog to update.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog updateMany
   */
  export type AdminAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAuditLogs.
     */
    data: XOR<AdminAuditLogUpdateManyMutationInput, AdminAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminAuditLogs to update
     */
    where?: AdminAuditLogWhereInput
    /**
     * Limit how many AdminAuditLogs to update.
     */
    limit?: number
  }

  /**
   * AdminAuditLog updateManyAndReturn
   */
  export type AdminAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AdminAuditLogs.
     */
    data: XOR<AdminAuditLogUpdateManyMutationInput, AdminAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminAuditLogs to update
     */
    where?: AdminAuditLogWhereInput
    /**
     * Limit how many AdminAuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAuditLog upsert
   */
  export type AdminAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminAuditLog to update in case it exists.
     */
    where: AdminAuditLogWhereUniqueInput
    /**
     * In case the AdminAuditLog found by the `where` argument doesn't exist, create a new AdminAuditLog with this data.
     */
    create: XOR<AdminAuditLogCreateInput, AdminAuditLogUncheckedCreateInput>
    /**
     * In case the AdminAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAuditLogUpdateInput, AdminAuditLogUncheckedUpdateInput>
  }

  /**
   * AdminAuditLog delete
   */
  export type AdminAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter which AdminAuditLog to delete.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog deleteMany
   */
  export type AdminAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuditLogs to delete
     */
    where?: AdminAuditLogWhereInput
    /**
     * Limit how many AdminAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AdminAuditLog without action
   */
  export type AdminAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuditLog
     */
    omit?: AdminAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt" | "updatedBy", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      updatedAt: Date
      updatedBy: string | null
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly value: FieldRef<"SystemConfig", 'String'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedBy: FieldRef<"SystemConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    centerNumber: 'centerNumber',
    centerName: 'centerName',
    state: 'state',
    lga: 'lga',
    schoolEmail: 'schoolEmail',
    schoolPhone: 'schoolPhone',
    schoolAddress: 'schoolAddress',
    schoolType: 'schoolType',
    principalName: 'principalName',
    principalPhone: 'principalPhone',
    examOfficerPhone: 'examOfficerPhone',
    isActive: 'isActive',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    emailVerifiedAt: 'emailVerifiedAt',
    lastLoginAt: 'lastLoginAt',
    schoolId: 'schoolId',
    role: 'role'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    adminUserId: 'adminUserId',
    expires: 'expires',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    surname: 'surname',
    firstName: 'firstName',
    otherName: 'otherName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    nin: 'nin',
    phoneNumber: 'phoneNumber',
    disability: 'disability',
    state: 'state',
    lga: 'lga',
    passportPhotoUrl: 'passportPhotoUrl',
    registrationNumber: 'registrationNumber',
    acceptedTerms: 'acceptedTerms',
    registrationStatus: 'registrationStatus',
    schoolId: 'schoolId',
    createdById: 'createdById',
    examSessionId: 'examSessionId',
    submittedAt: 'submittedAt',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const ExamSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    examDate: 'examDate',
    examTime: 'examTime',
    duration: 'duration',
    registrationStartDate: 'registrationStartDate',
    registrationEndDate: 'registrationEndDate',
    status: 'status',
    isActive: 'isActive',
    registrationFee: 'registrationFee'
  };

  export type ExamSessionScalarFieldEnum = (typeof ExamSessionScalarFieldEnum)[keyof typeof ExamSessionScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    used: 'used',
    usedAt: 'usedAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    used: 'used',
    usedAt: 'usedAt'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const LGAScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateId: 'stateId'
  };

  export type LGAScalarFieldEnum = (typeof LGAScalarFieldEnum)[keyof typeof LGAScalarFieldEnum]


  export const CandidateAuditLogScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    action: 'action',
    changes: 'changes',
    performedBy: 'performedBy',
    performedAt: 'performedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type CandidateAuditLogScalarFieldEnum = (typeof CandidateAuditLogScalarFieldEnum)[keyof typeof CandidateAuditLogScalarFieldEnum]


  export const AdminAuditLogScalarFieldEnum: {
    id: 'id',
    adminUserId: 'adminUserId',
    action: 'action',
    details: 'details',
    performedAt: 'performedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type AdminAuditLogScalarFieldEnum = (typeof AdminAuditLogScalarFieldEnum)[keyof typeof AdminAuditLogScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SchoolType'
   */
  export type EnumSchoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SchoolType'>
    


  /**
   * Reference to a field of type 'SchoolType[]'
   */
  export type ListEnumSchoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SchoolType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Disability'
   */
  export type EnumDisabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Disability'>
    


  /**
   * Reference to a field of type 'Disability[]'
   */
  export type ListEnumDisabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Disability[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ExamSessionStatus'
   */
  export type EnumExamSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamSessionStatus'>
    


  /**
   * Reference to a field of type 'ExamSessionStatus[]'
   */
  export type ListEnumExamSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamSessionStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    centerNumber?: StringFilter<"School"> | string
    centerName?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    lga?: StringFilter<"School"> | string
    schoolEmail?: StringFilter<"School"> | string
    schoolPhone?: StringFilter<"School"> | string
    schoolAddress?: StringFilter<"School"> | string
    schoolType?: EnumSchoolTypeFilter<"School"> | $Enums.SchoolType
    principalName?: StringFilter<"School"> | string
    principalPhone?: StringFilter<"School"> | string
    examOfficerPhone?: StringNullableFilter<"School"> | string | null
    isActive?: BoolFilter<"School"> | boolean
    isVerified?: BoolFilter<"School"> | boolean
    verifiedAt?: DateTimeNullableFilter<"School"> | Date | string | null
    verifiedBy?: StringNullableFilter<"School"> | string | null
    adminUsers?: AdminUserListRelationFilter
    candidates?: CandidateListRelationFilter
    examSessions?: ExamSessionListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    centerNumber?: SortOrder
    centerName?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    schoolEmail?: SortOrder
    schoolPhone?: SortOrder
    schoolAddress?: SortOrder
    schoolType?: SortOrder
    principalName?: SortOrder
    principalPhone?: SortOrder
    examOfficerPhone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    adminUsers?: AdminUserOrderByRelationAggregateInput
    candidates?: CandidateOrderByRelationAggregateInput
    examSessions?: ExamSessionOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    centerNumber?: string
    schoolEmail?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    centerName?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    lga?: StringFilter<"School"> | string
    schoolPhone?: StringFilter<"School"> | string
    schoolAddress?: StringFilter<"School"> | string
    schoolType?: EnumSchoolTypeFilter<"School"> | $Enums.SchoolType
    principalName?: StringFilter<"School"> | string
    principalPhone?: StringFilter<"School"> | string
    examOfficerPhone?: StringNullableFilter<"School"> | string | null
    isActive?: BoolFilter<"School"> | boolean
    isVerified?: BoolFilter<"School"> | boolean
    verifiedAt?: DateTimeNullableFilter<"School"> | Date | string | null
    verifiedBy?: StringNullableFilter<"School"> | string | null
    adminUsers?: AdminUserListRelationFilter
    candidates?: CandidateListRelationFilter
    examSessions?: ExamSessionListRelationFilter
  }, "id" | "centerNumber" | "schoolEmail">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    centerNumber?: SortOrder
    centerName?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    schoolEmail?: SortOrder
    schoolPhone?: SortOrder
    schoolAddress?: SortOrder
    schoolType?: SortOrder
    principalName?: SortOrder
    principalPhone?: SortOrder
    examOfficerPhone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    centerNumber?: StringWithAggregatesFilter<"School"> | string
    centerName?: StringWithAggregatesFilter<"School"> | string
    state?: StringWithAggregatesFilter<"School"> | string
    lga?: StringWithAggregatesFilter<"School"> | string
    schoolEmail?: StringWithAggregatesFilter<"School"> | string
    schoolPhone?: StringWithAggregatesFilter<"School"> | string
    schoolAddress?: StringWithAggregatesFilter<"School"> | string
    schoolType?: EnumSchoolTypeWithAggregatesFilter<"School"> | $Enums.SchoolType
    principalName?: StringWithAggregatesFilter<"School"> | string
    principalPhone?: StringWithAggregatesFilter<"School"> | string
    examOfficerPhone?: StringNullableWithAggregatesFilter<"School"> | string | null
    isActive?: BoolWithAggregatesFilter<"School"> | boolean
    isVerified?: BoolWithAggregatesFilter<"School"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"School"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"School"> | string | null
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    name?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    phone?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    isActive?: BoolFilter<"AdminUser"> | boolean
    emailVerified?: BoolFilter<"AdminUser"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    schoolId?: StringFilter<"AdminUser"> | string
    role?: EnumAdminRoleFilter<"AdminUser"> | $Enums.AdminRole
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    sessions?: SessionListRelationFilter
    candidatesCreated?: CandidateListRelationFilter
    auditLogs?: AdminAuditLogListRelationFilter
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    school?: SchoolOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    candidatesCreated?: CandidateOrderByRelationAggregateInput
    auditLogs?: AdminAuditLogOrderByRelationAggregateInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    name?: StringFilter<"AdminUser"> | string
    phone?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    isActive?: BoolFilter<"AdminUser"> | boolean
    emailVerified?: BoolFilter<"AdminUser"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    schoolId?: StringFilter<"AdminUser"> | string
    role?: EnumAdminRoleFilter<"AdminUser"> | $Enums.AdminRole
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    sessions?: SessionListRelationFilter
    candidatesCreated?: CandidateListRelationFilter
    auditLogs?: AdminAuditLogListRelationFilter
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    phone?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    isActive?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null
    schoolId?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"AdminUser"> | $Enums.AdminRole
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    adminUserId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    adminUser?: XOR<AdminUserScalarRelationFilter, AdminUserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    adminUserId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    adminUser?: AdminUserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    adminUserId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    adminUser?: XOR<AdminUserScalarRelationFilter, AdminUserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    adminUserId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    adminUserId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    surname?: StringFilter<"Candidate"> | string
    firstName?: StringFilter<"Candidate"> | string
    otherName?: StringNullableFilter<"Candidate"> | string | null
    dateOfBirth?: DateTimeFilter<"Candidate"> | Date | string
    gender?: EnumGenderFilter<"Candidate"> | $Enums.Gender
    nin?: StringFilter<"Candidate"> | string
    phoneNumber?: StringFilter<"Candidate"> | string
    disability?: EnumDisabilityNullableFilter<"Candidate"> | $Enums.Disability | null
    state?: StringFilter<"Candidate"> | string
    lga?: StringFilter<"Candidate"> | string
    passportPhotoUrl?: StringNullableFilter<"Candidate"> | string | null
    registrationNumber?: StringFilter<"Candidate"> | string
    acceptedTerms?: BoolFilter<"Candidate"> | boolean
    registrationStatus?: EnumRegistrationStatusFilter<"Candidate"> | $Enums.RegistrationStatus
    schoolId?: StringFilter<"Candidate"> | string
    createdById?: StringFilter<"Candidate"> | string
    examSessionId?: StringNullableFilter<"Candidate"> | string | null
    submittedAt?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Candidate"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    createdBy?: XOR<AdminUserScalarRelationFilter, AdminUserWhereInput>
    examSession?: XOR<ExamSessionNullableScalarRelationFilter, ExamSessionWhereInput> | null
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    surname?: SortOrder
    firstName?: SortOrder
    otherName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nin?: SortOrder
    phoneNumber?: SortOrder
    disability?: SortOrderInput | SortOrder
    state?: SortOrder
    lga?: SortOrder
    passportPhotoUrl?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    acceptedTerms?: SortOrder
    registrationStatus?: SortOrder
    schoolId?: SortOrder
    createdById?: SortOrder
    examSessionId?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
    createdBy?: AdminUserOrderByWithRelationInput
    examSession?: ExamSessionOrderByWithRelationInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nin?: string
    registrationNumber?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    surname?: StringFilter<"Candidate"> | string
    firstName?: StringFilter<"Candidate"> | string
    otherName?: StringNullableFilter<"Candidate"> | string | null
    dateOfBirth?: DateTimeFilter<"Candidate"> | Date | string
    gender?: EnumGenderFilter<"Candidate"> | $Enums.Gender
    phoneNumber?: StringFilter<"Candidate"> | string
    disability?: EnumDisabilityNullableFilter<"Candidate"> | $Enums.Disability | null
    state?: StringFilter<"Candidate"> | string
    lga?: StringFilter<"Candidate"> | string
    passportPhotoUrl?: StringNullableFilter<"Candidate"> | string | null
    acceptedTerms?: BoolFilter<"Candidate"> | boolean
    registrationStatus?: EnumRegistrationStatusFilter<"Candidate"> | $Enums.RegistrationStatus
    schoolId?: StringFilter<"Candidate"> | string
    createdById?: StringFilter<"Candidate"> | string
    examSessionId?: StringNullableFilter<"Candidate"> | string | null
    submittedAt?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Candidate"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    createdBy?: XOR<AdminUserScalarRelationFilter, AdminUserWhereInput>
    examSession?: XOR<ExamSessionNullableScalarRelationFilter, ExamSessionWhereInput> | null
  }, "id" | "nin" | "registrationNumber">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    surname?: SortOrder
    firstName?: SortOrder
    otherName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nin?: SortOrder
    phoneNumber?: SortOrder
    disability?: SortOrderInput | SortOrder
    state?: SortOrder
    lga?: SortOrder
    passportPhotoUrl?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    acceptedTerms?: SortOrder
    registrationStatus?: SortOrder
    schoolId?: SortOrder
    createdById?: SortOrder
    examSessionId?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    surname?: StringWithAggregatesFilter<"Candidate"> | string
    firstName?: StringWithAggregatesFilter<"Candidate"> | string
    otherName?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    dateOfBirth?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"Candidate"> | $Enums.Gender
    nin?: StringWithAggregatesFilter<"Candidate"> | string
    phoneNumber?: StringWithAggregatesFilter<"Candidate"> | string
    disability?: EnumDisabilityNullableWithAggregatesFilter<"Candidate"> | $Enums.Disability | null
    state?: StringWithAggregatesFilter<"Candidate"> | string
    lga?: StringWithAggregatesFilter<"Candidate"> | string
    passportPhotoUrl?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    registrationNumber?: StringWithAggregatesFilter<"Candidate"> | string
    acceptedTerms?: BoolWithAggregatesFilter<"Candidate"> | boolean
    registrationStatus?: EnumRegistrationStatusWithAggregatesFilter<"Candidate"> | $Enums.RegistrationStatus
    schoolId?: StringWithAggregatesFilter<"Candidate"> | string
    createdById?: StringWithAggregatesFilter<"Candidate"> | string
    examSessionId?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Candidate"> | Date | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Candidate"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
  }

  export type ExamSessionWhereInput = {
    AND?: ExamSessionWhereInput | ExamSessionWhereInput[]
    OR?: ExamSessionWhereInput[]
    NOT?: ExamSessionWhereInput | ExamSessionWhereInput[]
    id?: StringFilter<"ExamSession"> | string
    createdAt?: DateTimeFilter<"ExamSession"> | Date | string
    updatedAt?: DateTimeFilter<"ExamSession"> | Date | string
    name?: StringFilter<"ExamSession"> | string
    description?: StringNullableFilter<"ExamSession"> | string | null
    examDate?: DateTimeFilter<"ExamSession"> | Date | string
    examTime?: StringFilter<"ExamSession"> | string
    duration?: IntFilter<"ExamSession"> | number
    registrationStartDate?: DateTimeFilter<"ExamSession"> | Date | string
    registrationEndDate?: DateTimeFilter<"ExamSession"> | Date | string
    status?: EnumExamSessionStatusFilter<"ExamSession"> | $Enums.ExamSessionStatus
    isActive?: BoolFilter<"ExamSession"> | boolean
    registrationFee?: DecimalFilter<"ExamSession"> | Decimal | DecimalJsLike | number | string
    candidates?: CandidateListRelationFilter
    schools?: SchoolListRelationFilter
  }

  export type ExamSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    duration?: SortOrder
    registrationStartDate?: SortOrder
    registrationEndDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    registrationFee?: SortOrder
    candidates?: CandidateOrderByRelationAggregateInput
    schools?: SchoolOrderByRelationAggregateInput
  }

  export type ExamSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamSessionWhereInput | ExamSessionWhereInput[]
    OR?: ExamSessionWhereInput[]
    NOT?: ExamSessionWhereInput | ExamSessionWhereInput[]
    createdAt?: DateTimeFilter<"ExamSession"> | Date | string
    updatedAt?: DateTimeFilter<"ExamSession"> | Date | string
    name?: StringFilter<"ExamSession"> | string
    description?: StringNullableFilter<"ExamSession"> | string | null
    examDate?: DateTimeFilter<"ExamSession"> | Date | string
    examTime?: StringFilter<"ExamSession"> | string
    duration?: IntFilter<"ExamSession"> | number
    registrationStartDate?: DateTimeFilter<"ExamSession"> | Date | string
    registrationEndDate?: DateTimeFilter<"ExamSession"> | Date | string
    status?: EnumExamSessionStatusFilter<"ExamSession"> | $Enums.ExamSessionStatus
    isActive?: BoolFilter<"ExamSession"> | boolean
    registrationFee?: DecimalFilter<"ExamSession"> | Decimal | DecimalJsLike | number | string
    candidates?: CandidateListRelationFilter
    schools?: SchoolListRelationFilter
  }, "id">

  export type ExamSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    duration?: SortOrder
    registrationStartDate?: SortOrder
    registrationEndDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    registrationFee?: SortOrder
    _count?: ExamSessionCountOrderByAggregateInput
    _avg?: ExamSessionAvgOrderByAggregateInput
    _max?: ExamSessionMaxOrderByAggregateInput
    _min?: ExamSessionMinOrderByAggregateInput
    _sum?: ExamSessionSumOrderByAggregateInput
  }

  export type ExamSessionScalarWhereWithAggregatesInput = {
    AND?: ExamSessionScalarWhereWithAggregatesInput | ExamSessionScalarWhereWithAggregatesInput[]
    OR?: ExamSessionScalarWhereWithAggregatesInput[]
    NOT?: ExamSessionScalarWhereWithAggregatesInput | ExamSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExamSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExamSession"> | Date | string
    name?: StringWithAggregatesFilter<"ExamSession"> | string
    description?: StringNullableWithAggregatesFilter<"ExamSession"> | string | null
    examDate?: DateTimeWithAggregatesFilter<"ExamSession"> | Date | string
    examTime?: StringWithAggregatesFilter<"ExamSession"> | string
    duration?: IntWithAggregatesFilter<"ExamSession"> | number
    registrationStartDate?: DateTimeWithAggregatesFilter<"ExamSession"> | Date | string
    registrationEndDate?: DateTimeWithAggregatesFilter<"ExamSession"> | Date | string
    status?: EnumExamSessionStatusWithAggregatesFilter<"ExamSession"> | $Enums.ExamSessionStatus
    isActive?: BoolWithAggregatesFilter<"ExamSession"> | boolean
    registrationFee?: DecimalWithAggregatesFilter<"ExamSession"> | Decimal | DecimalJsLike | number | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrderInput | SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expires?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    used?: BoolWithAggregatesFilter<"PasswordResetToken"> | boolean
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    email?: StringFilter<"EmailVerificationToken"> | string
    token?: StringFilter<"EmailVerificationToken"> | string
    expires?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    used?: BoolFilter<"EmailVerificationToken"> | boolean
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrderInput | SortOrder
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    email?: StringFilter<"EmailVerificationToken"> | string
    expires?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    used?: BoolFilter<"EmailVerificationToken"> | boolean
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
  }, "id" | "token">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    email?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    token?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    used?: BoolWithAggregatesFilter<"EmailVerificationToken"> | boolean
    usedAt?: DateTimeNullableWithAggregatesFilter<"EmailVerificationToken"> | Date | string | null
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: StringFilter<"State"> | string
    name?: StringFilter<"State"> | string
    lgas?: LGAListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lgas?: LGAOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    lgas?: LGAListRelationFilter
  }, "id" | "name">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"State"> | string
    name?: StringWithAggregatesFilter<"State"> | string
  }

  export type LGAWhereInput = {
    AND?: LGAWhereInput | LGAWhereInput[]
    OR?: LGAWhereInput[]
    NOT?: LGAWhereInput | LGAWhereInput[]
    id?: StringFilter<"LGA"> | string
    name?: StringFilter<"LGA"> | string
    stateId?: StringFilter<"LGA"> | string
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
  }

  export type LGAOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    state?: StateOrderByWithRelationInput
  }

  export type LGAWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_stateId?: LGANameStateIdCompoundUniqueInput
    AND?: LGAWhereInput | LGAWhereInput[]
    OR?: LGAWhereInput[]
    NOT?: LGAWhereInput | LGAWhereInput[]
    name?: StringFilter<"LGA"> | string
    stateId?: StringFilter<"LGA"> | string
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
  }, "id" | "name_stateId">

  export type LGAOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    _count?: LGACountOrderByAggregateInput
    _max?: LGAMaxOrderByAggregateInput
    _min?: LGAMinOrderByAggregateInput
  }

  export type LGAScalarWhereWithAggregatesInput = {
    AND?: LGAScalarWhereWithAggregatesInput | LGAScalarWhereWithAggregatesInput[]
    OR?: LGAScalarWhereWithAggregatesInput[]
    NOT?: LGAScalarWhereWithAggregatesInput | LGAScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LGA"> | string
    name?: StringWithAggregatesFilter<"LGA"> | string
    stateId?: StringWithAggregatesFilter<"LGA"> | string
  }

  export type CandidateAuditLogWhereInput = {
    AND?: CandidateAuditLogWhereInput | CandidateAuditLogWhereInput[]
    OR?: CandidateAuditLogWhereInput[]
    NOT?: CandidateAuditLogWhereInput | CandidateAuditLogWhereInput[]
    id?: StringFilter<"CandidateAuditLog"> | string
    candidateId?: StringFilter<"CandidateAuditLog"> | string
    action?: StringFilter<"CandidateAuditLog"> | string
    changes?: JsonNullableFilter<"CandidateAuditLog">
    performedBy?: StringNullableFilter<"CandidateAuditLog"> | string | null
    performedAt?: DateTimeFilter<"CandidateAuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"CandidateAuditLog"> | string | null
    userAgent?: StringNullableFilter<"CandidateAuditLog"> | string | null
  }

  export type CandidateAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    action?: SortOrder
    changes?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
  }

  export type CandidateAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateAuditLogWhereInput | CandidateAuditLogWhereInput[]
    OR?: CandidateAuditLogWhereInput[]
    NOT?: CandidateAuditLogWhereInput | CandidateAuditLogWhereInput[]
    candidateId?: StringFilter<"CandidateAuditLog"> | string
    action?: StringFilter<"CandidateAuditLog"> | string
    changes?: JsonNullableFilter<"CandidateAuditLog">
    performedBy?: StringNullableFilter<"CandidateAuditLog"> | string | null
    performedAt?: DateTimeFilter<"CandidateAuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"CandidateAuditLog"> | string | null
    userAgent?: StringNullableFilter<"CandidateAuditLog"> | string | null
  }, "id">

  export type CandidateAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    action?: SortOrder
    changes?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: CandidateAuditLogCountOrderByAggregateInput
    _max?: CandidateAuditLogMaxOrderByAggregateInput
    _min?: CandidateAuditLogMinOrderByAggregateInput
  }

  export type CandidateAuditLogScalarWhereWithAggregatesInput = {
    AND?: CandidateAuditLogScalarWhereWithAggregatesInput | CandidateAuditLogScalarWhereWithAggregatesInput[]
    OR?: CandidateAuditLogScalarWhereWithAggregatesInput[]
    NOT?: CandidateAuditLogScalarWhereWithAggregatesInput | CandidateAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CandidateAuditLog"> | string
    candidateId?: StringWithAggregatesFilter<"CandidateAuditLog"> | string
    action?: StringWithAggregatesFilter<"CandidateAuditLog"> | string
    changes?: JsonNullableWithAggregatesFilter<"CandidateAuditLog">
    performedBy?: StringNullableWithAggregatesFilter<"CandidateAuditLog"> | string | null
    performedAt?: DateTimeWithAggregatesFilter<"CandidateAuditLog"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"CandidateAuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"CandidateAuditLog"> | string | null
  }

  export type AdminAuditLogWhereInput = {
    AND?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    OR?: AdminAuditLogWhereInput[]
    NOT?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    id?: StringFilter<"AdminAuditLog"> | string
    adminUserId?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    details?: JsonNullableFilter<"AdminAuditLog">
    performedAt?: DateTimeFilter<"AdminAuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableFilter<"AdminAuditLog"> | string | null
    adminUser?: XOR<AdminUserScalarRelationFilter, AdminUserWhereInput>
  }

  export type AdminAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    adminUserId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    adminUser?: AdminUserOrderByWithRelationInput
  }

  export type AdminAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    OR?: AdminAuditLogWhereInput[]
    NOT?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    adminUserId?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    details?: JsonNullableFilter<"AdminAuditLog">
    performedAt?: DateTimeFilter<"AdminAuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableFilter<"AdminAuditLog"> | string | null
    adminUser?: XOR<AdminUserScalarRelationFilter, AdminUserWhereInput>
  }, "id">

  export type AdminAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminUserId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: AdminAuditLogCountOrderByAggregateInput
    _max?: AdminAuditLogMaxOrderByAggregateInput
    _min?: AdminAuditLogMinOrderByAggregateInput
  }

  export type AdminAuditLogScalarWhereWithAggregatesInput = {
    AND?: AdminAuditLogScalarWhereWithAggregatesInput | AdminAuditLogScalarWhereWithAggregatesInput[]
    OR?: AdminAuditLogScalarWhereWithAggregatesInput[]
    NOT?: AdminAuditLogScalarWhereWithAggregatesInput | AdminAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    adminUserId?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    action?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AdminAuditLog">
    performedAt?: DateTimeWithAggregatesFilter<"AdminAuditLog"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    key?: StringFilter<"SystemConfig"> | string
    value?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedBy?: StringNullableFilter<"SystemConfig"> | string | null
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    value?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedBy?: StringNullableFilter<"SystemConfig"> | string | null
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    value?: StringWithAggregatesFilter<"SystemConfig"> | string
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
  }

  export type SchoolCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    adminUsers?: AdminUserCreateNestedManyWithoutSchoolInput
    candidates?: CandidateCreateNestedManyWithoutSchoolInput
    examSessions?: ExamSessionCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    adminUsers?: AdminUserUncheckedCreateNestedManyWithoutSchoolInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutSchoolInput
    examSessions?: ExamSessionUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    adminUsers?: AdminUserUpdateManyWithoutSchoolNestedInput
    candidates?: CandidateUpdateManyWithoutSchoolNestedInput
    examSessions?: ExamSessionUpdateManyWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    adminUsers?: AdminUserUncheckedUpdateManyWithoutSchoolNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutSchoolNestedInput
    examSessions?: ExamSessionUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
    school: SchoolCreateNestedOneWithoutAdminUsersInput
    sessions?: SessionCreateNestedManyWithoutAdminUserInput
    candidatesCreated?: CandidateCreateNestedManyWithoutCreatedByInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    schoolId: string
    role?: $Enums.AdminRole
    sessions?: SessionUncheckedCreateNestedManyWithoutAdminUserInput
    candidatesCreated?: CandidateUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    school?: SchoolUpdateOneRequiredWithoutAdminUsersNestedInput
    sessions?: SessionUpdateManyWithoutAdminUserNestedInput
    candidatesCreated?: CandidateUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    sessions?: SessionUncheckedUpdateManyWithoutAdminUserNestedInput
    candidatesCreated?: CandidateUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    schoolId: string
    role?: $Enums.AdminRole
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    adminUser: AdminUserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    adminUserId: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUser?: AdminUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    adminUserId: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    school: SchoolCreateNestedOneWithoutCandidatesInput
    createdBy: AdminUserCreateNestedOneWithoutCandidatesCreatedInput
    examSession?: ExamSessionCreateNestedOneWithoutCandidatesInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    schoolId: string
    createdById: string
    examSessionId?: string | null
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutCandidatesNestedInput
    createdBy?: AdminUserUpdateOneRequiredWithoutCandidatesCreatedNestedInput
    examSession?: ExamSessionUpdateOneWithoutCandidatesNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    schoolId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    examSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    schoolId: string
    createdById: string
    examSessionId?: string | null
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    schoolId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    examSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
    candidates?: CandidateCreateNestedManyWithoutExamSessionInput
    schools?: SchoolCreateNestedManyWithoutExamSessionsInput
  }

  export type ExamSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutExamSessionInput
    schools?: SchoolUncheckedCreateNestedManyWithoutExamSessionsInput
  }

  export type ExamSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    candidates?: CandidateUpdateManyWithoutExamSessionNestedInput
    schools?: SchoolUpdateManyWithoutExamSessionsNestedInput
  }

  export type ExamSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    candidates?: CandidateUncheckedUpdateManyWithoutExamSessionNestedInput
    schools?: SchoolUncheckedUpdateManyWithoutExamSessionsNestedInput
  }

  export type ExamSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
  }

  export type ExamSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExamSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    used?: boolean
    usedAt?: Date | string | null
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    used?: boolean
    usedAt?: Date | string | null
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    used?: boolean
    usedAt?: Date | string | null
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    used?: boolean
    usedAt?: Date | string | null
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    used?: boolean
    usedAt?: Date | string | null
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    used?: boolean
    usedAt?: Date | string | null
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StateCreateInput = {
    id?: string
    name: string
    lgas?: LGACreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: string
    name: string
    lgas?: LGAUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lgas?: LGAUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lgas?: LGAUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: string
    name: string
  }

  export type StateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LGACreateInput = {
    id?: string
    name: string
    state: StateCreateNestedOneWithoutLgasInput
  }

  export type LGAUncheckedCreateInput = {
    id?: string
    name: string
    stateId: string
  }

  export type LGAUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutLgasNestedInput
  }

  export type LGAUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
  }

  export type LGACreateManyInput = {
    id?: string
    name: string
    stateId: string
  }

  export type LGAUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LGAUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateAuditLogCreateInput = {
    id?: string
    candidateId: string
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: string | null
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type CandidateAuditLogUncheckedCreateInput = {
    id?: string
    candidateId: string
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: string | null
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type CandidateAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateAuditLogCreateManyInput = {
    id?: string
    candidateId: string
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: string | null
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type CandidateAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminAuditLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    adminUser: AdminUserCreateNestedOneWithoutAuditLogsInput
  }

  export type AdminAuditLogUncheckedCreateInput = {
    id?: string
    adminUserId: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AdminAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    adminUser?: AdminUserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AdminAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminAuditLogCreateManyInput = {
    id?: string
    adminUserId: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AdminAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSchoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeFilter<$PrismaModel> | $Enums.SchoolType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AdminUserListRelationFilter = {
    every?: AdminUserWhereInput
    some?: AdminUserWhereInput
    none?: AdminUserWhereInput
  }

  export type CandidateListRelationFilter = {
    every?: CandidateWhereInput
    some?: CandidateWhereInput
    none?: CandidateWhereInput
  }

  export type ExamSessionListRelationFilter = {
    every?: ExamSessionWhereInput
    some?: ExamSessionWhereInput
    none?: ExamSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    centerNumber?: SortOrder
    centerName?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    schoolEmail?: SortOrder
    schoolPhone?: SortOrder
    schoolAddress?: SortOrder
    schoolType?: SortOrder
    principalName?: SortOrder
    principalPhone?: SortOrder
    examOfficerPhone?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    centerNumber?: SortOrder
    centerName?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    schoolEmail?: SortOrder
    schoolPhone?: SortOrder
    schoolAddress?: SortOrder
    schoolType?: SortOrder
    principalName?: SortOrder
    principalPhone?: SortOrder
    examOfficerPhone?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    centerNumber?: SortOrder
    centerName?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    schoolEmail?: SortOrder
    schoolPhone?: SortOrder
    schoolAddress?: SortOrder
    schoolType?: SortOrder
    principalName?: SortOrder
    principalPhone?: SortOrder
    examOfficerPhone?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSchoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolTypeFilter<$PrismaModel>
    _max?: NestedEnumSchoolTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AdminAuditLogListRelationFilter = {
    every?: AdminAuditLogWhereInput
    some?: AdminAuditLogWhereInput
    none?: AdminAuditLogWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type AdminUserScalarRelationFilter = {
    is?: AdminUserWhereInput
    isNot?: AdminUserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    adminUserId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    adminUserId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    adminUserId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumDisabilityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Disability | EnumDisabilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDisabilityNullableFilter<$PrismaModel> | $Enums.Disability | null
  }

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type ExamSessionNullableScalarRelationFilter = {
    is?: ExamSessionWhereInput | null
    isNot?: ExamSessionWhereInput | null
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    surname?: SortOrder
    firstName?: SortOrder
    otherName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nin?: SortOrder
    phoneNumber?: SortOrder
    disability?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    passportPhotoUrl?: SortOrder
    registrationNumber?: SortOrder
    acceptedTerms?: SortOrder
    registrationStatus?: SortOrder
    schoolId?: SortOrder
    createdById?: SortOrder
    examSessionId?: SortOrder
    submittedAt?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    surname?: SortOrder
    firstName?: SortOrder
    otherName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nin?: SortOrder
    phoneNumber?: SortOrder
    disability?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    passportPhotoUrl?: SortOrder
    registrationNumber?: SortOrder
    acceptedTerms?: SortOrder
    registrationStatus?: SortOrder
    schoolId?: SortOrder
    createdById?: SortOrder
    examSessionId?: SortOrder
    submittedAt?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    surname?: SortOrder
    firstName?: SortOrder
    otherName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nin?: SortOrder
    phoneNumber?: SortOrder
    disability?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    passportPhotoUrl?: SortOrder
    registrationNumber?: SortOrder
    acceptedTerms?: SortOrder
    registrationStatus?: SortOrder
    schoolId?: SortOrder
    createdById?: SortOrder
    examSessionId?: SortOrder
    submittedAt?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumDisabilityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Disability | EnumDisabilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDisabilityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Disability | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDisabilityNullableFilter<$PrismaModel>
    _max?: NestedEnumDisabilityNullableFilter<$PrismaModel>
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumExamSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamSessionStatus | EnumExamSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamSessionStatusFilter<$PrismaModel> | $Enums.ExamSessionStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SchoolListRelationFilter = {
    every?: SchoolWhereInput
    some?: SchoolWhereInput
    none?: SchoolWhereInput
  }

  export type SchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    duration?: SortOrder
    registrationStartDate?: SortOrder
    registrationEndDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    registrationFee?: SortOrder
  }

  export type ExamSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
    registrationFee?: SortOrder
  }

  export type ExamSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    duration?: SortOrder
    registrationStartDate?: SortOrder
    registrationEndDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    registrationFee?: SortOrder
  }

  export type ExamSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    duration?: SortOrder
    registrationStartDate?: SortOrder
    registrationEndDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    registrationFee?: SortOrder
  }

  export type ExamSessionSumOrderByAggregateInput = {
    duration?: SortOrder
    registrationFee?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumExamSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamSessionStatus | EnumExamSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExamSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumExamSessionStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrder
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    usedAt?: SortOrder
  }

  export type LGAListRelationFilter = {
    every?: LGAWhereInput
    some?: LGAWhereInput
    none?: LGAWhereInput
  }

  export type LGAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type LGANameStateIdCompoundUniqueInput = {
    name: string
    stateId: string
  }

  export type LGACountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type LGAMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type LGAMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CandidateAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    action?: SortOrder
    changes?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type CandidateAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type CandidateAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AdminAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminUserId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type AdminAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminUserId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type AdminAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminUserId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type AdminUserCreateNestedManyWithoutSchoolInput = {
    create?: XOR<AdminUserCreateWithoutSchoolInput, AdminUserUncheckedCreateWithoutSchoolInput> | AdminUserCreateWithoutSchoolInput[] | AdminUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutSchoolInput | AdminUserCreateOrConnectWithoutSchoolInput[]
    createMany?: AdminUserCreateManySchoolInputEnvelope
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
  }

  export type CandidateCreateNestedManyWithoutSchoolInput = {
    create?: XOR<CandidateCreateWithoutSchoolInput, CandidateUncheckedCreateWithoutSchoolInput> | CandidateCreateWithoutSchoolInput[] | CandidateUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutSchoolInput | CandidateCreateOrConnectWithoutSchoolInput[]
    createMany?: CandidateCreateManySchoolInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type ExamSessionCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<ExamSessionCreateWithoutSchoolsInput, ExamSessionUncheckedCreateWithoutSchoolsInput> | ExamSessionCreateWithoutSchoolsInput[] | ExamSessionUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutSchoolsInput | ExamSessionCreateOrConnectWithoutSchoolsInput[]
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
  }

  export type AdminUserUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<AdminUserCreateWithoutSchoolInput, AdminUserUncheckedCreateWithoutSchoolInput> | AdminUserCreateWithoutSchoolInput[] | AdminUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutSchoolInput | AdminUserCreateOrConnectWithoutSchoolInput[]
    createMany?: AdminUserCreateManySchoolInputEnvelope
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<CandidateCreateWithoutSchoolInput, CandidateUncheckedCreateWithoutSchoolInput> | CandidateCreateWithoutSchoolInput[] | CandidateUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutSchoolInput | CandidateCreateOrConnectWithoutSchoolInput[]
    createMany?: CandidateCreateManySchoolInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type ExamSessionUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<ExamSessionCreateWithoutSchoolsInput, ExamSessionUncheckedCreateWithoutSchoolsInput> | ExamSessionCreateWithoutSchoolsInput[] | ExamSessionUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutSchoolsInput | ExamSessionCreateOrConnectWithoutSchoolsInput[]
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSchoolTypeFieldUpdateOperationsInput = {
    set?: $Enums.SchoolType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AdminUserUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<AdminUserCreateWithoutSchoolInput, AdminUserUncheckedCreateWithoutSchoolInput> | AdminUserCreateWithoutSchoolInput[] | AdminUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutSchoolInput | AdminUserCreateOrConnectWithoutSchoolInput[]
    upsert?: AdminUserUpsertWithWhereUniqueWithoutSchoolInput | AdminUserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: AdminUserCreateManySchoolInputEnvelope
    set?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    disconnect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    delete?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    update?: AdminUserUpdateWithWhereUniqueWithoutSchoolInput | AdminUserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: AdminUserUpdateManyWithWhereWithoutSchoolInput | AdminUserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
  }

  export type CandidateUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<CandidateCreateWithoutSchoolInput, CandidateUncheckedCreateWithoutSchoolInput> | CandidateCreateWithoutSchoolInput[] | CandidateUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutSchoolInput | CandidateCreateOrConnectWithoutSchoolInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutSchoolInput | CandidateUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: CandidateCreateManySchoolInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutSchoolInput | CandidateUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutSchoolInput | CandidateUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type ExamSessionUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<ExamSessionCreateWithoutSchoolsInput, ExamSessionUncheckedCreateWithoutSchoolsInput> | ExamSessionCreateWithoutSchoolsInput[] | ExamSessionUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutSchoolsInput | ExamSessionCreateOrConnectWithoutSchoolsInput[]
    upsert?: ExamSessionUpsertWithWhereUniqueWithoutSchoolsInput | ExamSessionUpsertWithWhereUniqueWithoutSchoolsInput[]
    set?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    disconnect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    delete?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    update?: ExamSessionUpdateWithWhereUniqueWithoutSchoolsInput | ExamSessionUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: ExamSessionUpdateManyWithWhereWithoutSchoolsInput | ExamSessionUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
  }

  export type AdminUserUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<AdminUserCreateWithoutSchoolInput, AdminUserUncheckedCreateWithoutSchoolInput> | AdminUserCreateWithoutSchoolInput[] | AdminUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutSchoolInput | AdminUserCreateOrConnectWithoutSchoolInput[]
    upsert?: AdminUserUpsertWithWhereUniqueWithoutSchoolInput | AdminUserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: AdminUserCreateManySchoolInputEnvelope
    set?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    disconnect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    delete?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    update?: AdminUserUpdateWithWhereUniqueWithoutSchoolInput | AdminUserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: AdminUserUpdateManyWithWhereWithoutSchoolInput | AdminUserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<CandidateCreateWithoutSchoolInput, CandidateUncheckedCreateWithoutSchoolInput> | CandidateCreateWithoutSchoolInput[] | CandidateUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutSchoolInput | CandidateCreateOrConnectWithoutSchoolInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutSchoolInput | CandidateUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: CandidateCreateManySchoolInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutSchoolInput | CandidateUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutSchoolInput | CandidateUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type ExamSessionUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<ExamSessionCreateWithoutSchoolsInput, ExamSessionUncheckedCreateWithoutSchoolsInput> | ExamSessionCreateWithoutSchoolsInput[] | ExamSessionUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutSchoolsInput | ExamSessionCreateOrConnectWithoutSchoolsInput[]
    upsert?: ExamSessionUpsertWithWhereUniqueWithoutSchoolsInput | ExamSessionUpsertWithWhereUniqueWithoutSchoolsInput[]
    set?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    disconnect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    delete?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    update?: ExamSessionUpdateWithWhereUniqueWithoutSchoolsInput | ExamSessionUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: ExamSessionUpdateManyWithWhereWithoutSchoolsInput | ExamSessionUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutAdminUsersInput = {
    create?: XOR<SchoolCreateWithoutAdminUsersInput, SchoolUncheckedCreateWithoutAdminUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAdminUsersInput
    connect?: SchoolWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<SessionCreateWithoutAdminUserInput, SessionUncheckedCreateWithoutAdminUserInput> | SessionCreateWithoutAdminUserInput[] | SessionUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminUserInput | SessionCreateOrConnectWithoutAdminUserInput[]
    createMany?: SessionCreateManyAdminUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CandidateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CandidateCreateWithoutCreatedByInput, CandidateUncheckedCreateWithoutCreatedByInput> | CandidateCreateWithoutCreatedByInput[] | CandidateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCreatedByInput | CandidateCreateOrConnectWithoutCreatedByInput[]
    createMany?: CandidateCreateManyCreatedByInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type AdminAuditLogCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<AdminAuditLogCreateWithoutAdminUserInput, AdminAuditLogUncheckedCreateWithoutAdminUserInput> | AdminAuditLogCreateWithoutAdminUserInput[] | AdminAuditLogUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutAdminUserInput | AdminAuditLogCreateOrConnectWithoutAdminUserInput[]
    createMany?: AdminAuditLogCreateManyAdminUserInputEnvelope
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<SessionCreateWithoutAdminUserInput, SessionUncheckedCreateWithoutAdminUserInput> | SessionCreateWithoutAdminUserInput[] | SessionUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminUserInput | SessionCreateOrConnectWithoutAdminUserInput[]
    createMany?: SessionCreateManyAdminUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CandidateCreateWithoutCreatedByInput, CandidateUncheckedCreateWithoutCreatedByInput> | CandidateCreateWithoutCreatedByInput[] | CandidateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCreatedByInput | CandidateCreateOrConnectWithoutCreatedByInput[]
    createMany?: CandidateCreateManyCreatedByInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type AdminAuditLogUncheckedCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<AdminAuditLogCreateWithoutAdminUserInput, AdminAuditLogUncheckedCreateWithoutAdminUserInput> | AdminAuditLogCreateWithoutAdminUserInput[] | AdminAuditLogUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutAdminUserInput | AdminAuditLogCreateOrConnectWithoutAdminUserInput[]
    createMany?: AdminAuditLogCreateManyAdminUserInputEnvelope
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type SchoolUpdateOneRequiredWithoutAdminUsersNestedInput = {
    create?: XOR<SchoolCreateWithoutAdminUsersInput, SchoolUncheckedCreateWithoutAdminUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAdminUsersInput
    upsert?: SchoolUpsertWithoutAdminUsersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutAdminUsersInput, SchoolUpdateWithoutAdminUsersInput>, SchoolUncheckedUpdateWithoutAdminUsersInput>
  }

  export type SessionUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<SessionCreateWithoutAdminUserInput, SessionUncheckedCreateWithoutAdminUserInput> | SessionCreateWithoutAdminUserInput[] | SessionUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminUserInput | SessionCreateOrConnectWithoutAdminUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutAdminUserInput | SessionUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: SessionCreateManyAdminUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutAdminUserInput | SessionUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutAdminUserInput | SessionUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CandidateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CandidateCreateWithoutCreatedByInput, CandidateUncheckedCreateWithoutCreatedByInput> | CandidateCreateWithoutCreatedByInput[] | CandidateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCreatedByInput | CandidateCreateOrConnectWithoutCreatedByInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutCreatedByInput | CandidateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CandidateCreateManyCreatedByInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutCreatedByInput | CandidateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutCreatedByInput | CandidateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type AdminAuditLogUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<AdminAuditLogCreateWithoutAdminUserInput, AdminAuditLogUncheckedCreateWithoutAdminUserInput> | AdminAuditLogCreateWithoutAdminUserInput[] | AdminAuditLogUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutAdminUserInput | AdminAuditLogCreateOrConnectWithoutAdminUserInput[]
    upsert?: AdminAuditLogUpsertWithWhereUniqueWithoutAdminUserInput | AdminAuditLogUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: AdminAuditLogCreateManyAdminUserInputEnvelope
    set?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    disconnect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    delete?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    update?: AdminAuditLogUpdateWithWhereUniqueWithoutAdminUserInput | AdminAuditLogUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: AdminAuditLogUpdateManyWithWhereWithoutAdminUserInput | AdminAuditLogUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<SessionCreateWithoutAdminUserInput, SessionUncheckedCreateWithoutAdminUserInput> | SessionCreateWithoutAdminUserInput[] | SessionUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminUserInput | SessionCreateOrConnectWithoutAdminUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutAdminUserInput | SessionUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: SessionCreateManyAdminUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutAdminUserInput | SessionUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutAdminUserInput | SessionUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CandidateCreateWithoutCreatedByInput, CandidateUncheckedCreateWithoutCreatedByInput> | CandidateCreateWithoutCreatedByInput[] | CandidateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCreatedByInput | CandidateCreateOrConnectWithoutCreatedByInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutCreatedByInput | CandidateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CandidateCreateManyCreatedByInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutCreatedByInput | CandidateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutCreatedByInput | CandidateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type AdminAuditLogUncheckedUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<AdminAuditLogCreateWithoutAdminUserInput, AdminAuditLogUncheckedCreateWithoutAdminUserInput> | AdminAuditLogCreateWithoutAdminUserInput[] | AdminAuditLogUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutAdminUserInput | AdminAuditLogCreateOrConnectWithoutAdminUserInput[]
    upsert?: AdminAuditLogUpsertWithWhereUniqueWithoutAdminUserInput | AdminAuditLogUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: AdminAuditLogCreateManyAdminUserInputEnvelope
    set?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    disconnect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    delete?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    update?: AdminAuditLogUpdateWithWhereUniqueWithoutAdminUserInput | AdminAuditLogUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: AdminAuditLogUpdateManyWithWhereWithoutAdminUserInput | AdminAuditLogUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
  }

  export type AdminUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AdminUserCreateWithoutSessionsInput, AdminUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutSessionsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AdminUserCreateWithoutSessionsInput, AdminUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutSessionsInput
    upsert?: AdminUserUpsertWithoutSessionsInput
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutSessionsInput, AdminUserUpdateWithoutSessionsInput>, AdminUserUncheckedUpdateWithoutSessionsInput>
  }

  export type SchoolCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<SchoolCreateWithoutCandidatesInput, SchoolUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCandidatesInput
    connect?: SchoolWhereUniqueInput
  }

  export type AdminUserCreateNestedOneWithoutCandidatesCreatedInput = {
    create?: XOR<AdminUserCreateWithoutCandidatesCreatedInput, AdminUserUncheckedCreateWithoutCandidatesCreatedInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutCandidatesCreatedInput
    connect?: AdminUserWhereUniqueInput
  }

  export type ExamSessionCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<ExamSessionCreateWithoutCandidatesInput, ExamSessionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ExamSessionCreateOrConnectWithoutCandidatesInput
    connect?: ExamSessionWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableEnumDisabilityFieldUpdateOperationsInput = {
    set?: $Enums.Disability | null
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type SchoolUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<SchoolCreateWithoutCandidatesInput, SchoolUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCandidatesInput
    upsert?: SchoolUpsertWithoutCandidatesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutCandidatesInput, SchoolUpdateWithoutCandidatesInput>, SchoolUncheckedUpdateWithoutCandidatesInput>
  }

  export type AdminUserUpdateOneRequiredWithoutCandidatesCreatedNestedInput = {
    create?: XOR<AdminUserCreateWithoutCandidatesCreatedInput, AdminUserUncheckedCreateWithoutCandidatesCreatedInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutCandidatesCreatedInput
    upsert?: AdminUserUpsertWithoutCandidatesCreatedInput
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutCandidatesCreatedInput, AdminUserUpdateWithoutCandidatesCreatedInput>, AdminUserUncheckedUpdateWithoutCandidatesCreatedInput>
  }

  export type ExamSessionUpdateOneWithoutCandidatesNestedInput = {
    create?: XOR<ExamSessionCreateWithoutCandidatesInput, ExamSessionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ExamSessionCreateOrConnectWithoutCandidatesInput
    upsert?: ExamSessionUpsertWithoutCandidatesInput
    disconnect?: ExamSessionWhereInput | boolean
    delete?: ExamSessionWhereInput | boolean
    connect?: ExamSessionWhereUniqueInput
    update?: XOR<XOR<ExamSessionUpdateToOneWithWhereWithoutCandidatesInput, ExamSessionUpdateWithoutCandidatesInput>, ExamSessionUncheckedUpdateWithoutCandidatesInput>
  }

  export type CandidateCreateNestedManyWithoutExamSessionInput = {
    create?: XOR<CandidateCreateWithoutExamSessionInput, CandidateUncheckedCreateWithoutExamSessionInput> | CandidateCreateWithoutExamSessionInput[] | CandidateUncheckedCreateWithoutExamSessionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutExamSessionInput | CandidateCreateOrConnectWithoutExamSessionInput[]
    createMany?: CandidateCreateManyExamSessionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type SchoolCreateNestedManyWithoutExamSessionsInput = {
    create?: XOR<SchoolCreateWithoutExamSessionsInput, SchoolUncheckedCreateWithoutExamSessionsInput> | SchoolCreateWithoutExamSessionsInput[] | SchoolUncheckedCreateWithoutExamSessionsInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutExamSessionsInput | SchoolCreateOrConnectWithoutExamSessionsInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutExamSessionInput = {
    create?: XOR<CandidateCreateWithoutExamSessionInput, CandidateUncheckedCreateWithoutExamSessionInput> | CandidateCreateWithoutExamSessionInput[] | CandidateUncheckedCreateWithoutExamSessionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutExamSessionInput | CandidateCreateOrConnectWithoutExamSessionInput[]
    createMany?: CandidateCreateManyExamSessionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type SchoolUncheckedCreateNestedManyWithoutExamSessionsInput = {
    create?: XOR<SchoolCreateWithoutExamSessionsInput, SchoolUncheckedCreateWithoutExamSessionsInput> | SchoolCreateWithoutExamSessionsInput[] | SchoolUncheckedCreateWithoutExamSessionsInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutExamSessionsInput | SchoolCreateOrConnectWithoutExamSessionsInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumExamSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExamSessionStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CandidateUpdateManyWithoutExamSessionNestedInput = {
    create?: XOR<CandidateCreateWithoutExamSessionInput, CandidateUncheckedCreateWithoutExamSessionInput> | CandidateCreateWithoutExamSessionInput[] | CandidateUncheckedCreateWithoutExamSessionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutExamSessionInput | CandidateCreateOrConnectWithoutExamSessionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutExamSessionInput | CandidateUpsertWithWhereUniqueWithoutExamSessionInput[]
    createMany?: CandidateCreateManyExamSessionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutExamSessionInput | CandidateUpdateWithWhereUniqueWithoutExamSessionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutExamSessionInput | CandidateUpdateManyWithWhereWithoutExamSessionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type SchoolUpdateManyWithoutExamSessionsNestedInput = {
    create?: XOR<SchoolCreateWithoutExamSessionsInput, SchoolUncheckedCreateWithoutExamSessionsInput> | SchoolCreateWithoutExamSessionsInput[] | SchoolUncheckedCreateWithoutExamSessionsInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutExamSessionsInput | SchoolCreateOrConnectWithoutExamSessionsInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutExamSessionsInput | SchoolUpsertWithWhereUniqueWithoutExamSessionsInput[]
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutExamSessionsInput | SchoolUpdateWithWhereUniqueWithoutExamSessionsInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutExamSessionsInput | SchoolUpdateManyWithWhereWithoutExamSessionsInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutExamSessionNestedInput = {
    create?: XOR<CandidateCreateWithoutExamSessionInput, CandidateUncheckedCreateWithoutExamSessionInput> | CandidateCreateWithoutExamSessionInput[] | CandidateUncheckedCreateWithoutExamSessionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutExamSessionInput | CandidateCreateOrConnectWithoutExamSessionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutExamSessionInput | CandidateUpsertWithWhereUniqueWithoutExamSessionInput[]
    createMany?: CandidateCreateManyExamSessionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutExamSessionInput | CandidateUpdateWithWhereUniqueWithoutExamSessionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutExamSessionInput | CandidateUpdateManyWithWhereWithoutExamSessionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type SchoolUncheckedUpdateManyWithoutExamSessionsNestedInput = {
    create?: XOR<SchoolCreateWithoutExamSessionsInput, SchoolUncheckedCreateWithoutExamSessionsInput> | SchoolCreateWithoutExamSessionsInput[] | SchoolUncheckedCreateWithoutExamSessionsInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutExamSessionsInput | SchoolCreateOrConnectWithoutExamSessionsInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutExamSessionsInput | SchoolUpsertWithWhereUniqueWithoutExamSessionsInput[]
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutExamSessionsInput | SchoolUpdateWithWhereUniqueWithoutExamSessionsInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutExamSessionsInput | SchoolUpdateManyWithWhereWithoutExamSessionsInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type LGACreateNestedManyWithoutStateInput = {
    create?: XOR<LGACreateWithoutStateInput, LGAUncheckedCreateWithoutStateInput> | LGACreateWithoutStateInput[] | LGAUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LGACreateOrConnectWithoutStateInput | LGACreateOrConnectWithoutStateInput[]
    createMany?: LGACreateManyStateInputEnvelope
    connect?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
  }

  export type LGAUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<LGACreateWithoutStateInput, LGAUncheckedCreateWithoutStateInput> | LGACreateWithoutStateInput[] | LGAUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LGACreateOrConnectWithoutStateInput | LGACreateOrConnectWithoutStateInput[]
    createMany?: LGACreateManyStateInputEnvelope
    connect?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
  }

  export type LGAUpdateManyWithoutStateNestedInput = {
    create?: XOR<LGACreateWithoutStateInput, LGAUncheckedCreateWithoutStateInput> | LGACreateWithoutStateInput[] | LGAUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LGACreateOrConnectWithoutStateInput | LGACreateOrConnectWithoutStateInput[]
    upsert?: LGAUpsertWithWhereUniqueWithoutStateInput | LGAUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: LGACreateManyStateInputEnvelope
    set?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    disconnect?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    delete?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    connect?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    update?: LGAUpdateWithWhereUniqueWithoutStateInput | LGAUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: LGAUpdateManyWithWhereWithoutStateInput | LGAUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: LGAScalarWhereInput | LGAScalarWhereInput[]
  }

  export type LGAUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<LGACreateWithoutStateInput, LGAUncheckedCreateWithoutStateInput> | LGACreateWithoutStateInput[] | LGAUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LGACreateOrConnectWithoutStateInput | LGACreateOrConnectWithoutStateInput[]
    upsert?: LGAUpsertWithWhereUniqueWithoutStateInput | LGAUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: LGACreateManyStateInputEnvelope
    set?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    disconnect?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    delete?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    connect?: LGAWhereUniqueInput | LGAWhereUniqueInput[]
    update?: LGAUpdateWithWhereUniqueWithoutStateInput | LGAUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: LGAUpdateManyWithWhereWithoutStateInput | LGAUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: LGAScalarWhereInput | LGAScalarWhereInput[]
  }

  export type StateCreateNestedOneWithoutLgasInput = {
    create?: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
    connectOrCreate?: StateCreateOrConnectWithoutLgasInput
    connect?: StateWhereUniqueInput
  }

  export type StateUpdateOneRequiredWithoutLgasNestedInput = {
    create?: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
    connectOrCreate?: StateCreateOrConnectWithoutLgasInput
    upsert?: StateUpsertWithoutLgasInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutLgasInput, StateUpdateWithoutLgasInput>, StateUncheckedUpdateWithoutLgasInput>
  }

  export type AdminUserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutAuditLogsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminUserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutAuditLogsInput
    upsert?: AdminUserUpsertWithoutAuditLogsInput
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutAuditLogsInput, AdminUserUpdateWithoutAuditLogsInput>, AdminUserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSchoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeFilter<$PrismaModel> | $Enums.SchoolType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSchoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolTypeFilter<$PrismaModel>
    _max?: NestedEnumSchoolTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumDisabilityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Disability | EnumDisabilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDisabilityNullableFilter<$PrismaModel> | $Enums.Disability | null
  }

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumDisabilityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Disability | EnumDisabilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disability[] | ListEnumDisabilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDisabilityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Disability | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDisabilityNullableFilter<$PrismaModel>
    _max?: NestedEnumDisabilityNullableFilter<$PrismaModel>
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type NestedEnumExamSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamSessionStatus | EnumExamSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamSessionStatusFilter<$PrismaModel> | $Enums.ExamSessionStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumExamSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamSessionStatus | EnumExamSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamSessionStatus[] | ListEnumExamSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExamSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumExamSessionStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AdminUserCreateWithoutSchoolInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
    sessions?: SessionCreateNestedManyWithoutAdminUserInput
    candidatesCreated?: CandidateCreateNestedManyWithoutCreatedByInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateWithoutSchoolInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
    sessions?: SessionUncheckedCreateNestedManyWithoutAdminUserInput
    candidatesCreated?: CandidateUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserCreateOrConnectWithoutSchoolInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutSchoolInput, AdminUserUncheckedCreateWithoutSchoolInput>
  }

  export type AdminUserCreateManySchoolInputEnvelope = {
    data: AdminUserCreateManySchoolInput | AdminUserCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type CandidateCreateWithoutSchoolInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdBy: AdminUserCreateNestedOneWithoutCandidatesCreatedInput
    examSession?: ExamSessionCreateNestedOneWithoutCandidatesInput
  }

  export type CandidateUncheckedCreateWithoutSchoolInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    createdById: string
    examSessionId?: string | null
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type CandidateCreateOrConnectWithoutSchoolInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutSchoolInput, CandidateUncheckedCreateWithoutSchoolInput>
  }

  export type CandidateCreateManySchoolInputEnvelope = {
    data: CandidateCreateManySchoolInput | CandidateCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ExamSessionCreateWithoutSchoolsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
    candidates?: CandidateCreateNestedManyWithoutExamSessionInput
  }

  export type ExamSessionUncheckedCreateWithoutSchoolsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutExamSessionInput
  }

  export type ExamSessionCreateOrConnectWithoutSchoolsInput = {
    where: ExamSessionWhereUniqueInput
    create: XOR<ExamSessionCreateWithoutSchoolsInput, ExamSessionUncheckedCreateWithoutSchoolsInput>
  }

  export type AdminUserUpsertWithWhereUniqueWithoutSchoolInput = {
    where: AdminUserWhereUniqueInput
    update: XOR<AdminUserUpdateWithoutSchoolInput, AdminUserUncheckedUpdateWithoutSchoolInput>
    create: XOR<AdminUserCreateWithoutSchoolInput, AdminUserUncheckedCreateWithoutSchoolInput>
  }

  export type AdminUserUpdateWithWhereUniqueWithoutSchoolInput = {
    where: AdminUserWhereUniqueInput
    data: XOR<AdminUserUpdateWithoutSchoolInput, AdminUserUncheckedUpdateWithoutSchoolInput>
  }

  export type AdminUserUpdateManyWithWhereWithoutSchoolInput = {
    where: AdminUserScalarWhereInput
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyWithoutSchoolInput>
  }

  export type AdminUserScalarWhereInput = {
    AND?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
    OR?: AdminUserScalarWhereInput[]
    NOT?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    name?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    phone?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    isActive?: BoolFilter<"AdminUser"> | boolean
    emailVerified?: BoolFilter<"AdminUser"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    schoolId?: StringFilter<"AdminUser"> | string
    role?: EnumAdminRoleFilter<"AdminUser"> | $Enums.AdminRole
  }

  export type CandidateUpsertWithWhereUniqueWithoutSchoolInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutSchoolInput, CandidateUncheckedUpdateWithoutSchoolInput>
    create: XOR<CandidateCreateWithoutSchoolInput, CandidateUncheckedCreateWithoutSchoolInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutSchoolInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutSchoolInput, CandidateUncheckedUpdateWithoutSchoolInput>
  }

  export type CandidateUpdateManyWithWhereWithoutSchoolInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutSchoolInput>
  }

  export type CandidateScalarWhereInput = {
    AND?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    OR?: CandidateScalarWhereInput[]
    NOT?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    id?: StringFilter<"Candidate"> | string
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    surname?: StringFilter<"Candidate"> | string
    firstName?: StringFilter<"Candidate"> | string
    otherName?: StringNullableFilter<"Candidate"> | string | null
    dateOfBirth?: DateTimeFilter<"Candidate"> | Date | string
    gender?: EnumGenderFilter<"Candidate"> | $Enums.Gender
    nin?: StringFilter<"Candidate"> | string
    phoneNumber?: StringFilter<"Candidate"> | string
    disability?: EnumDisabilityNullableFilter<"Candidate"> | $Enums.Disability | null
    state?: StringFilter<"Candidate"> | string
    lga?: StringFilter<"Candidate"> | string
    passportPhotoUrl?: StringNullableFilter<"Candidate"> | string | null
    registrationNumber?: StringFilter<"Candidate"> | string
    acceptedTerms?: BoolFilter<"Candidate"> | boolean
    registrationStatus?: EnumRegistrationStatusFilter<"Candidate"> | $Enums.RegistrationStatus
    schoolId?: StringFilter<"Candidate"> | string
    createdById?: StringFilter<"Candidate"> | string
    examSessionId?: StringNullableFilter<"Candidate"> | string | null
    submittedAt?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Candidate"> | string | null
  }

  export type ExamSessionUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: ExamSessionWhereUniqueInput
    update: XOR<ExamSessionUpdateWithoutSchoolsInput, ExamSessionUncheckedUpdateWithoutSchoolsInput>
    create: XOR<ExamSessionCreateWithoutSchoolsInput, ExamSessionUncheckedCreateWithoutSchoolsInput>
  }

  export type ExamSessionUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: ExamSessionWhereUniqueInput
    data: XOR<ExamSessionUpdateWithoutSchoolsInput, ExamSessionUncheckedUpdateWithoutSchoolsInput>
  }

  export type ExamSessionUpdateManyWithWhereWithoutSchoolsInput = {
    where: ExamSessionScalarWhereInput
    data: XOR<ExamSessionUpdateManyMutationInput, ExamSessionUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type ExamSessionScalarWhereInput = {
    AND?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
    OR?: ExamSessionScalarWhereInput[]
    NOT?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
    id?: StringFilter<"ExamSession"> | string
    createdAt?: DateTimeFilter<"ExamSession"> | Date | string
    updatedAt?: DateTimeFilter<"ExamSession"> | Date | string
    name?: StringFilter<"ExamSession"> | string
    description?: StringNullableFilter<"ExamSession"> | string | null
    examDate?: DateTimeFilter<"ExamSession"> | Date | string
    examTime?: StringFilter<"ExamSession"> | string
    duration?: IntFilter<"ExamSession"> | number
    registrationStartDate?: DateTimeFilter<"ExamSession"> | Date | string
    registrationEndDate?: DateTimeFilter<"ExamSession"> | Date | string
    status?: EnumExamSessionStatusFilter<"ExamSession"> | $Enums.ExamSessionStatus
    isActive?: BoolFilter<"ExamSession"> | boolean
    registrationFee?: DecimalFilter<"ExamSession"> | Decimal | DecimalJsLike | number | string
  }

  export type SchoolCreateWithoutAdminUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    candidates?: CandidateCreateNestedManyWithoutSchoolInput
    examSessions?: ExamSessionCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateWithoutAdminUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    candidates?: CandidateUncheckedCreateNestedManyWithoutSchoolInput
    examSessions?: ExamSessionUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolCreateOrConnectWithoutAdminUsersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutAdminUsersInput, SchoolUncheckedCreateWithoutAdminUsersInput>
  }

  export type SessionCreateWithoutAdminUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutAdminUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutAdminUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAdminUserInput, SessionUncheckedCreateWithoutAdminUserInput>
  }

  export type SessionCreateManyAdminUserInputEnvelope = {
    data: SessionCreateManyAdminUserInput | SessionCreateManyAdminUserInput[]
    skipDuplicates?: boolean
  }

  export type CandidateCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    school: SchoolCreateNestedOneWithoutCandidatesInput
    examSession?: ExamSessionCreateNestedOneWithoutCandidatesInput
  }

  export type CandidateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    schoolId: string
    examSessionId?: string | null
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type CandidateCreateOrConnectWithoutCreatedByInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutCreatedByInput, CandidateUncheckedCreateWithoutCreatedByInput>
  }

  export type CandidateCreateManyCreatedByInputEnvelope = {
    data: CandidateCreateManyCreatedByInput | CandidateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AdminAuditLogCreateWithoutAdminUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AdminAuditLogUncheckedCreateWithoutAdminUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AdminAuditLogCreateOrConnectWithoutAdminUserInput = {
    where: AdminAuditLogWhereUniqueInput
    create: XOR<AdminAuditLogCreateWithoutAdminUserInput, AdminAuditLogUncheckedCreateWithoutAdminUserInput>
  }

  export type AdminAuditLogCreateManyAdminUserInputEnvelope = {
    data: AdminAuditLogCreateManyAdminUserInput | AdminAuditLogCreateManyAdminUserInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutAdminUsersInput = {
    update: XOR<SchoolUpdateWithoutAdminUsersInput, SchoolUncheckedUpdateWithoutAdminUsersInput>
    create: XOR<SchoolCreateWithoutAdminUsersInput, SchoolUncheckedCreateWithoutAdminUsersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutAdminUsersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutAdminUsersInput, SchoolUncheckedUpdateWithoutAdminUsersInput>
  }

  export type SchoolUpdateWithoutAdminUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    candidates?: CandidateUpdateManyWithoutSchoolNestedInput
    examSessions?: ExamSessionUpdateManyWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateWithoutAdminUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    candidates?: CandidateUncheckedUpdateManyWithoutSchoolNestedInput
    examSessions?: ExamSessionUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutAdminUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutAdminUserInput, SessionUncheckedUpdateWithoutAdminUserInput>
    create: XOR<SessionCreateWithoutAdminUserInput, SessionUncheckedCreateWithoutAdminUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutAdminUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutAdminUserInput, SessionUncheckedUpdateWithoutAdminUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutAdminUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutAdminUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    adminUserId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type CandidateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutCreatedByInput, CandidateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CandidateCreateWithoutCreatedByInput, CandidateUncheckedCreateWithoutCreatedByInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutCreatedByInput, CandidateUncheckedUpdateWithoutCreatedByInput>
  }

  export type CandidateUpdateManyWithWhereWithoutCreatedByInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AdminAuditLogUpsertWithWhereUniqueWithoutAdminUserInput = {
    where: AdminAuditLogWhereUniqueInput
    update: XOR<AdminAuditLogUpdateWithoutAdminUserInput, AdminAuditLogUncheckedUpdateWithoutAdminUserInput>
    create: XOR<AdminAuditLogCreateWithoutAdminUserInput, AdminAuditLogUncheckedCreateWithoutAdminUserInput>
  }

  export type AdminAuditLogUpdateWithWhereUniqueWithoutAdminUserInput = {
    where: AdminAuditLogWhereUniqueInput
    data: XOR<AdminAuditLogUpdateWithoutAdminUserInput, AdminAuditLogUncheckedUpdateWithoutAdminUserInput>
  }

  export type AdminAuditLogUpdateManyWithWhereWithoutAdminUserInput = {
    where: AdminAuditLogScalarWhereInput
    data: XOR<AdminAuditLogUpdateManyMutationInput, AdminAuditLogUncheckedUpdateManyWithoutAdminUserInput>
  }

  export type AdminAuditLogScalarWhereInput = {
    AND?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
    OR?: AdminAuditLogScalarWhereInput[]
    NOT?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
    id?: StringFilter<"AdminAuditLog"> | string
    adminUserId?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    details?: JsonNullableFilter<"AdminAuditLog">
    performedAt?: DateTimeFilter<"AdminAuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableFilter<"AdminAuditLog"> | string | null
  }

  export type AdminUserCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
    school: SchoolCreateNestedOneWithoutAdminUsersInput
    candidatesCreated?: CandidateCreateNestedManyWithoutCreatedByInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    schoolId: string
    role?: $Enums.AdminRole
    candidatesCreated?: CandidateUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserCreateOrConnectWithoutSessionsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutSessionsInput, AdminUserUncheckedCreateWithoutSessionsInput>
  }

  export type AdminUserUpsertWithoutSessionsInput = {
    update: XOR<AdminUserUpdateWithoutSessionsInput, AdminUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<AdminUserCreateWithoutSessionsInput, AdminUserUncheckedCreateWithoutSessionsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutSessionsInput, AdminUserUncheckedUpdateWithoutSessionsInput>
  }

  export type AdminUserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    school?: SchoolUpdateOneRequiredWithoutAdminUsersNestedInput
    candidatesCreated?: CandidateUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    candidatesCreated?: CandidateUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type SchoolCreateWithoutCandidatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    adminUsers?: AdminUserCreateNestedManyWithoutSchoolInput
    examSessions?: ExamSessionCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateWithoutCandidatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    adminUsers?: AdminUserUncheckedCreateNestedManyWithoutSchoolInput
    examSessions?: ExamSessionUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolCreateOrConnectWithoutCandidatesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutCandidatesInput, SchoolUncheckedCreateWithoutCandidatesInput>
  }

  export type AdminUserCreateWithoutCandidatesCreatedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
    school: SchoolCreateNestedOneWithoutAdminUsersInput
    sessions?: SessionCreateNestedManyWithoutAdminUserInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateWithoutCandidatesCreatedInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    schoolId: string
    role?: $Enums.AdminRole
    sessions?: SessionUncheckedCreateNestedManyWithoutAdminUserInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserCreateOrConnectWithoutCandidatesCreatedInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutCandidatesCreatedInput, AdminUserUncheckedCreateWithoutCandidatesCreatedInput>
  }

  export type ExamSessionCreateWithoutCandidatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
    schools?: SchoolCreateNestedManyWithoutExamSessionsInput
  }

  export type ExamSessionUncheckedCreateWithoutCandidatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    examDate: Date | string
    examTime: string
    duration: number
    registrationStartDate: Date | string
    registrationEndDate: Date | string
    status?: $Enums.ExamSessionStatus
    isActive?: boolean
    registrationFee: Decimal | DecimalJsLike | number | string
    schools?: SchoolUncheckedCreateNestedManyWithoutExamSessionsInput
  }

  export type ExamSessionCreateOrConnectWithoutCandidatesInput = {
    where: ExamSessionWhereUniqueInput
    create: XOR<ExamSessionCreateWithoutCandidatesInput, ExamSessionUncheckedCreateWithoutCandidatesInput>
  }

  export type SchoolUpsertWithoutCandidatesInput = {
    update: XOR<SchoolUpdateWithoutCandidatesInput, SchoolUncheckedUpdateWithoutCandidatesInput>
    create: XOR<SchoolCreateWithoutCandidatesInput, SchoolUncheckedCreateWithoutCandidatesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutCandidatesInput, SchoolUncheckedUpdateWithoutCandidatesInput>
  }

  export type SchoolUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    adminUsers?: AdminUserUpdateManyWithoutSchoolNestedInput
    examSessions?: ExamSessionUpdateManyWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    adminUsers?: AdminUserUncheckedUpdateManyWithoutSchoolNestedInput
    examSessions?: ExamSessionUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type AdminUserUpsertWithoutCandidatesCreatedInput = {
    update: XOR<AdminUserUpdateWithoutCandidatesCreatedInput, AdminUserUncheckedUpdateWithoutCandidatesCreatedInput>
    create: XOR<AdminUserCreateWithoutCandidatesCreatedInput, AdminUserUncheckedCreateWithoutCandidatesCreatedInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutCandidatesCreatedInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutCandidatesCreatedInput, AdminUserUncheckedUpdateWithoutCandidatesCreatedInput>
  }

  export type AdminUserUpdateWithoutCandidatesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    school?: SchoolUpdateOneRequiredWithoutAdminUsersNestedInput
    sessions?: SessionUpdateManyWithoutAdminUserNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutCandidatesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    sessions?: SessionUncheckedUpdateManyWithoutAdminUserNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type ExamSessionUpsertWithoutCandidatesInput = {
    update: XOR<ExamSessionUpdateWithoutCandidatesInput, ExamSessionUncheckedUpdateWithoutCandidatesInput>
    create: XOR<ExamSessionCreateWithoutCandidatesInput, ExamSessionUncheckedCreateWithoutCandidatesInput>
    where?: ExamSessionWhereInput
  }

  export type ExamSessionUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: ExamSessionWhereInput
    data: XOR<ExamSessionUpdateWithoutCandidatesInput, ExamSessionUncheckedUpdateWithoutCandidatesInput>
  }

  export type ExamSessionUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schools?: SchoolUpdateManyWithoutExamSessionsNestedInput
  }

  export type ExamSessionUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schools?: SchoolUncheckedUpdateManyWithoutExamSessionsNestedInput
  }

  export type CandidateCreateWithoutExamSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    school: SchoolCreateNestedOneWithoutCandidatesInput
    createdBy: AdminUserCreateNestedOneWithoutCandidatesCreatedInput
  }

  export type CandidateUncheckedCreateWithoutExamSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    schoolId: string
    createdById: string
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type CandidateCreateOrConnectWithoutExamSessionInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutExamSessionInput, CandidateUncheckedCreateWithoutExamSessionInput>
  }

  export type CandidateCreateManyExamSessionInputEnvelope = {
    data: CandidateCreateManyExamSessionInput | CandidateCreateManyExamSessionInput[]
    skipDuplicates?: boolean
  }

  export type SchoolCreateWithoutExamSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    adminUsers?: AdminUserCreateNestedManyWithoutSchoolInput
    candidates?: CandidateCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutExamSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    centerNumber: string
    centerName: string
    state: string
    lga: string
    schoolEmail: string
    schoolPhone: string
    schoolAddress: string
    schoolType: $Enums.SchoolType
    principalName: string
    principalPhone: string
    examOfficerPhone?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    adminUsers?: AdminUserUncheckedCreateNestedManyWithoutSchoolInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutExamSessionsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutExamSessionsInput, SchoolUncheckedCreateWithoutExamSessionsInput>
  }

  export type CandidateUpsertWithWhereUniqueWithoutExamSessionInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutExamSessionInput, CandidateUncheckedUpdateWithoutExamSessionInput>
    create: XOR<CandidateCreateWithoutExamSessionInput, CandidateUncheckedCreateWithoutExamSessionInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutExamSessionInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutExamSessionInput, CandidateUncheckedUpdateWithoutExamSessionInput>
  }

  export type CandidateUpdateManyWithWhereWithoutExamSessionInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutExamSessionInput>
  }

  export type SchoolUpsertWithWhereUniqueWithoutExamSessionsInput = {
    where: SchoolWhereUniqueInput
    update: XOR<SchoolUpdateWithoutExamSessionsInput, SchoolUncheckedUpdateWithoutExamSessionsInput>
    create: XOR<SchoolCreateWithoutExamSessionsInput, SchoolUncheckedCreateWithoutExamSessionsInput>
  }

  export type SchoolUpdateWithWhereUniqueWithoutExamSessionsInput = {
    where: SchoolWhereUniqueInput
    data: XOR<SchoolUpdateWithoutExamSessionsInput, SchoolUncheckedUpdateWithoutExamSessionsInput>
  }

  export type SchoolUpdateManyWithWhereWithoutExamSessionsInput = {
    where: SchoolScalarWhereInput
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyWithoutExamSessionsInput>
  }

  export type SchoolScalarWhereInput = {
    AND?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    OR?: SchoolScalarWhereInput[]
    NOT?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    id?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    centerNumber?: StringFilter<"School"> | string
    centerName?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    lga?: StringFilter<"School"> | string
    schoolEmail?: StringFilter<"School"> | string
    schoolPhone?: StringFilter<"School"> | string
    schoolAddress?: StringFilter<"School"> | string
    schoolType?: EnumSchoolTypeFilter<"School"> | $Enums.SchoolType
    principalName?: StringFilter<"School"> | string
    principalPhone?: StringFilter<"School"> | string
    examOfficerPhone?: StringNullableFilter<"School"> | string | null
    isActive?: BoolFilter<"School"> | boolean
    isVerified?: BoolFilter<"School"> | boolean
    verifiedAt?: DateTimeNullableFilter<"School"> | Date | string | null
    verifiedBy?: StringNullableFilter<"School"> | string | null
  }

  export type LGACreateWithoutStateInput = {
    id?: string
    name: string
  }

  export type LGAUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
  }

  export type LGACreateOrConnectWithoutStateInput = {
    where: LGAWhereUniqueInput
    create: XOR<LGACreateWithoutStateInput, LGAUncheckedCreateWithoutStateInput>
  }

  export type LGACreateManyStateInputEnvelope = {
    data: LGACreateManyStateInput | LGACreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type LGAUpsertWithWhereUniqueWithoutStateInput = {
    where: LGAWhereUniqueInput
    update: XOR<LGAUpdateWithoutStateInput, LGAUncheckedUpdateWithoutStateInput>
    create: XOR<LGACreateWithoutStateInput, LGAUncheckedCreateWithoutStateInput>
  }

  export type LGAUpdateWithWhereUniqueWithoutStateInput = {
    where: LGAWhereUniqueInput
    data: XOR<LGAUpdateWithoutStateInput, LGAUncheckedUpdateWithoutStateInput>
  }

  export type LGAUpdateManyWithWhereWithoutStateInput = {
    where: LGAScalarWhereInput
    data: XOR<LGAUpdateManyMutationInput, LGAUncheckedUpdateManyWithoutStateInput>
  }

  export type LGAScalarWhereInput = {
    AND?: LGAScalarWhereInput | LGAScalarWhereInput[]
    OR?: LGAScalarWhereInput[]
    NOT?: LGAScalarWhereInput | LGAScalarWhereInput[]
    id?: StringFilter<"LGA"> | string
    name?: StringFilter<"LGA"> | string
    stateId?: StringFilter<"LGA"> | string
  }

  export type StateCreateWithoutLgasInput = {
    id?: string
    name: string
  }

  export type StateUncheckedCreateWithoutLgasInput = {
    id?: string
    name: string
  }

  export type StateCreateOrConnectWithoutLgasInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
  }

  export type StateUpsertWithoutLgasInput = {
    update: XOR<StateUpdateWithoutLgasInput, StateUncheckedUpdateWithoutLgasInput>
    create: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutLgasInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutLgasInput, StateUncheckedUpdateWithoutLgasInput>
  }

  export type StateUpdateWithoutLgasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateWithoutLgasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUserCreateWithoutAuditLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
    school: SchoolCreateNestedOneWithoutAdminUsersInput
    sessions?: SessionCreateNestedManyWithoutAdminUserInput
    candidatesCreated?: CandidateCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    schoolId: string
    role?: $Enums.AdminRole
    sessions?: SessionUncheckedCreateNestedManyWithoutAdminUserInput
    candidatesCreated?: CandidateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserCreateOrConnectWithoutAuditLogsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
  }

  export type AdminUserUpsertWithoutAuditLogsInput = {
    update: XOR<AdminUserUpdateWithoutAuditLogsInput, AdminUserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutAuditLogsInput, AdminUserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type AdminUserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    school?: SchoolUpdateOneRequiredWithoutAdminUsersNestedInput
    sessions?: SessionUpdateManyWithoutAdminUserNestedInput
    candidatesCreated?: CandidateUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    sessions?: SessionUncheckedUpdateManyWithoutAdminUserNestedInput
    candidatesCreated?: CandidateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserCreateManySchoolInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    password: string
    isActive?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    role?: $Enums.AdminRole
  }

  export type CandidateCreateManySchoolInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    createdById: string
    examSessionId?: string | null
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type AdminUserUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    sessions?: SessionUpdateManyWithoutAdminUserNestedInput
    candidatesCreated?: CandidateUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    sessions?: SessionUncheckedUpdateManyWithoutAdminUserNestedInput
    candidatesCreated?: CandidateUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type CandidateUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: AdminUserUpdateOneRequiredWithoutCandidatesCreatedNestedInput
    examSession?: ExamSessionUpdateOneWithoutCandidatesNestedInput
  }

  export type CandidateUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    createdById?: StringFieldUpdateOperationsInput | string
    examSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    createdById?: StringFieldUpdateOperationsInput | string
    examSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSessionUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    candidates?: CandidateUpdateManyWithoutExamSessionNestedInput
  }

  export type ExamSessionUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    candidates?: CandidateUncheckedUpdateManyWithoutExamSessionNestedInput
  }

  export type ExamSessionUncheckedUpdateManyWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    registrationStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumExamSessionStatusFieldUpdateOperationsInput | $Enums.ExamSessionStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    registrationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SessionCreateManyAdminUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type CandidateCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    schoolId: string
    examSessionId?: string | null
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type AdminAuditLogCreateManyAdminUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutCandidatesNestedInput
    examSession?: ExamSessionUpdateOneWithoutCandidatesNestedInput
  }

  export type CandidateUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    schoolId?: StringFieldUpdateOperationsInput | string
    examSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    schoolId?: StringFieldUpdateOperationsInput | string
    examSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminAuditLogUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminAuditLogUncheckedUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminAuditLogUncheckedUpdateManyWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateCreateManyExamSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surname: string
    firstName: string
    otherName?: string | null
    dateOfBirth: Date | string
    gender: $Enums.Gender
    nin: string
    phoneNumber: string
    disability?: $Enums.Disability | null
    state: string
    lga: string
    passportPhotoUrl?: string | null
    registrationNumber: string
    acceptedTerms?: boolean
    registrationStatus?: $Enums.RegistrationStatus
    schoolId: string
    createdById: string
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
  }

  export type CandidateUpdateWithoutExamSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutCandidatesNestedInput
    createdBy?: AdminUserUpdateOneRequiredWithoutCandidatesCreatedNestedInput
  }

  export type CandidateUncheckedUpdateWithoutExamSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    schoolId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateUncheckedUpdateManyWithoutExamSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surname?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nin?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    disability?: NullableEnumDisabilityFieldUpdateOperationsInput | $Enums.Disability | null
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    passportPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    schoolId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUpdateWithoutExamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    adminUsers?: AdminUserUpdateManyWithoutSchoolNestedInput
    candidates?: CandidateUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutExamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    adminUsers?: AdminUserUncheckedUpdateManyWithoutSchoolNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateManyWithoutExamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    centerNumber?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    schoolEmail?: StringFieldUpdateOperationsInput | string
    schoolPhone?: StringFieldUpdateOperationsInput | string
    schoolAddress?: StringFieldUpdateOperationsInput | string
    schoolType?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    principalName?: StringFieldUpdateOperationsInput | string
    principalPhone?: StringFieldUpdateOperationsInput | string
    examOfficerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LGACreateManyStateInput = {
    id?: string
    name: string
  }

  export type LGAUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LGAUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LGAUncheckedUpdateManyWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}