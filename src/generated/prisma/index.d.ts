
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model inquiry
 * 
 */
export type inquiry = $Result.DefaultSelection<Prisma.$inquiryPayload>
/**
 * Model miners
 * 
 */
export type miners = $Result.DefaultSelection<Prisma.$minersPayload>
/**
 * Model network
 * 
 */
export type network = $Result.DefaultSelection<Prisma.$networkPayload>
/**
 * Model paymentlogs
 * 
 */
export type paymentlogs = $Result.DefaultSelection<Prisma.$paymentlogsPayload>
/**
 * Model sitebalance
 * 
 */
export type sitebalance = $Result.DefaultSelection<Prisma.$sitebalancePayload>
/**
 * Model tokenbalance
 * 
 */
export type tokenbalance = $Result.DefaultSelection<Prisma.$tokenbalancePayload>
/**
 * Model tokencontract
 * 
 */
export type tokencontract = $Result.DefaultSelection<Prisma.$tokencontractPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model withdrawals
 * 
 */
export type withdrawals = $Result.DefaultSelection<Prisma.$withdrawalsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MANAGER: 'MANAGER'
};

export type users_role = (typeof users_role)[keyof typeof users_role]

}

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.inquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miners`: Exposes CRUD operations for the **miners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Miners
    * const miners = await prisma.miners.findMany()
    * ```
    */
  get miners(): Prisma.minersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.network`: Exposes CRUD operations for the **network** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Networks
    * const networks = await prisma.network.findMany()
    * ```
    */
  get network(): Prisma.networkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentlogs`: Exposes CRUD operations for the **paymentlogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paymentlogs
    * const paymentlogs = await prisma.paymentlogs.findMany()
    * ```
    */
  get paymentlogs(): Prisma.paymentlogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sitebalance`: Exposes CRUD operations for the **sitebalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sitebalances
    * const sitebalances = await prisma.sitebalance.findMany()
    * ```
    */
  get sitebalance(): Prisma.sitebalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenbalance`: Exposes CRUD operations for the **tokenbalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokenbalances
    * const tokenbalances = await prisma.tokenbalance.findMany()
    * ```
    */
  get tokenbalance(): Prisma.tokenbalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokencontract`: Exposes CRUD operations for the **tokencontract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokencontracts
    * const tokencontracts = await prisma.tokencontract.findMany()
    * ```
    */
  get tokencontract(): Prisma.tokencontractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawals`: Exposes CRUD operations for the **withdrawals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawals.findMany()
    * ```
    */
  get withdrawals(): Prisma.withdrawalsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    admin: 'admin',
    inquiry: 'inquiry',
    miners: 'miners',
    network: 'network',
    paymentlogs: 'paymentlogs',
    sitebalance: 'sitebalance',
    tokenbalance: 'tokenbalance',
    tokencontract: 'tokencontract',
    users: 'users',
    withdrawals: 'withdrawals'
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
      modelProps: "admin" | "inquiry" | "miners" | "network" | "paymentlogs" | "sitebalance" | "tokenbalance" | "tokencontract" | "users" | "withdrawals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      inquiry: {
        payload: Prisma.$inquiryPayload<ExtArgs>
        fields: Prisma.inquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          findFirst: {
            args: Prisma.inquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          findMany: {
            args: Prisma.inquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>[]
          }
          create: {
            args: Prisma.inquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          createMany: {
            args: Prisma.inquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          update: {
            args: Prisma.inquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          deleteMany: {
            args: Prisma.inquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.inquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      miners: {
        payload: Prisma.$minersPayload<ExtArgs>
        fields: Prisma.minersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.minersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.minersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>
          }
          findFirst: {
            args: Prisma.minersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.minersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>
          }
          findMany: {
            args: Prisma.minersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>[]
          }
          create: {
            args: Prisma.minersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>
          }
          createMany: {
            args: Prisma.minersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.minersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>
          }
          update: {
            args: Prisma.minersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>
          }
          deleteMany: {
            args: Prisma.minersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.minersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.minersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$minersPayload>
          }
          aggregate: {
            args: Prisma.MinersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiners>
          }
          groupBy: {
            args: Prisma.minersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MinersGroupByOutputType>[]
          }
          count: {
            args: Prisma.minersCountArgs<ExtArgs>
            result: $Utils.Optional<MinersCountAggregateOutputType> | number
          }
        }
      }
      network: {
        payload: Prisma.$networkPayload<ExtArgs>
        fields: Prisma.networkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.networkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.networkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          findFirst: {
            args: Prisma.networkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.networkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          findMany: {
            args: Prisma.networkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>[]
          }
          create: {
            args: Prisma.networkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          createMany: {
            args: Prisma.networkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.networkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          update: {
            args: Prisma.networkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          deleteMany: {
            args: Prisma.networkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.networkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.networkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          aggregate: {
            args: Prisma.NetworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetwork>
          }
          groupBy: {
            args: Prisma.networkGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.networkCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkCountAggregateOutputType> | number
          }
        }
      }
      paymentlogs: {
        payload: Prisma.$paymentlogsPayload<ExtArgs>
        fields: Prisma.paymentlogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentlogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentlogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>
          }
          findFirst: {
            args: Prisma.paymentlogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentlogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>
          }
          findMany: {
            args: Prisma.paymentlogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>[]
          }
          create: {
            args: Prisma.paymentlogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>
          }
          createMany: {
            args: Prisma.paymentlogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentlogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>
          }
          update: {
            args: Prisma.paymentlogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>
          }
          deleteMany: {
            args: Prisma.paymentlogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentlogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentlogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentlogsPayload>
          }
          aggregate: {
            args: Prisma.PaymentlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentlogs>
          }
          groupBy: {
            args: Prisma.paymentlogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentlogsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentlogsCountAggregateOutputType> | number
          }
        }
      }
      sitebalance: {
        payload: Prisma.$sitebalancePayload<ExtArgs>
        fields: Prisma.sitebalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sitebalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sitebalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>
          }
          findFirst: {
            args: Prisma.sitebalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sitebalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>
          }
          findMany: {
            args: Prisma.sitebalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>[]
          }
          create: {
            args: Prisma.sitebalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>
          }
          createMany: {
            args: Prisma.sitebalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sitebalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>
          }
          update: {
            args: Prisma.sitebalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>
          }
          deleteMany: {
            args: Prisma.sitebalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sitebalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sitebalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitebalancePayload>
          }
          aggregate: {
            args: Prisma.SitebalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSitebalance>
          }
          groupBy: {
            args: Prisma.sitebalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SitebalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.sitebalanceCountArgs<ExtArgs>
            result: $Utils.Optional<SitebalanceCountAggregateOutputType> | number
          }
        }
      }
      tokenbalance: {
        payload: Prisma.$tokenbalancePayload<ExtArgs>
        fields: Prisma.tokenbalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokenbalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokenbalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>
          }
          findFirst: {
            args: Prisma.tokenbalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokenbalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>
          }
          findMany: {
            args: Prisma.tokenbalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>[]
          }
          create: {
            args: Prisma.tokenbalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>
          }
          createMany: {
            args: Prisma.tokenbalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tokenbalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>
          }
          update: {
            args: Prisma.tokenbalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>
          }
          deleteMany: {
            args: Prisma.tokenbalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokenbalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tokenbalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenbalancePayload>
          }
          aggregate: {
            args: Prisma.TokenbalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenbalance>
          }
          groupBy: {
            args: Prisma.tokenbalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenbalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokenbalanceCountArgs<ExtArgs>
            result: $Utils.Optional<TokenbalanceCountAggregateOutputType> | number
          }
        }
      }
      tokencontract: {
        payload: Prisma.$tokencontractPayload<ExtArgs>
        fields: Prisma.tokencontractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokencontractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokencontractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>
          }
          findFirst: {
            args: Prisma.tokencontractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokencontractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>
          }
          findMany: {
            args: Prisma.tokencontractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>[]
          }
          create: {
            args: Prisma.tokencontractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>
          }
          createMany: {
            args: Prisma.tokencontractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tokencontractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>
          }
          update: {
            args: Prisma.tokencontractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>
          }
          deleteMany: {
            args: Prisma.tokencontractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokencontractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tokencontractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokencontractPayload>
          }
          aggregate: {
            args: Prisma.TokencontractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokencontract>
          }
          groupBy: {
            args: Prisma.tokencontractGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokencontractGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokencontractCountArgs<ExtArgs>
            result: $Utils.Optional<TokencontractCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      withdrawals: {
        payload: Prisma.$withdrawalsPayload<ExtArgs>
        fields: Prisma.withdrawalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          findFirst: {
            args: Prisma.withdrawalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          findMany: {
            args: Prisma.withdrawalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          create: {
            args: Prisma.withdrawalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          createMany: {
            args: Prisma.withdrawalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.withdrawalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          update: {
            args: Prisma.withdrawalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.withdrawalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawals>
          }
          groupBy: {
            args: Prisma.withdrawalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalsCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    admin?: adminOmit
    inquiry?: inquiryOmit
    miners?: minersOmit
    network?: networkOmit
    paymentlogs?: paymentlogsOmit
    sitebalance?: sitebalanceOmit
    tokenbalance?: tokenbalanceOmit
    tokencontract?: tokencontractOmit
    users?: usersOmit
    withdrawals?: withdrawalsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MinersCountOutputType
   */

  export type MinersCountOutputType = {
    tokenbalance: number
  }

  export type MinersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokenbalance?: boolean | MinersCountOutputTypeCountTokenbalanceArgs
  }

  // Custom InputTypes
  /**
   * MinersCountOutputType without action
   */
  export type MinersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinersCountOutputType
     */
    select?: MinersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MinersCountOutputType without action
   */
  export type MinersCountOutputTypeCountTokenbalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenbalanceWhereInput
  }


  /**
   * Count Type NetworkCountOutputType
   */

  export type NetworkCountOutputType = {
    tokencontract: number
  }

  export type NetworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokencontract?: boolean | NetworkCountOutputTypeCountTokencontractArgs
  }

  // Custom InputTypes
  /**
   * NetworkCountOutputType without action
   */
  export type NetworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkCountOutputType
     */
    select?: NetworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NetworkCountOutputType without action
   */
  export type NetworkCountOutputTypeCountTokencontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokencontractWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    commision: number | null
    commissionReceived: number | null
  }

  export type AdminSumAggregateOutputType = {
    commision: number | null
    commissionReceived: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    isSuper: boolean | null
    handle: string | null
    commision: number | null
    commissionReceived: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    isSuper: boolean | null
    handle: string | null
    commision: number | null
    commissionReceived: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    isSuper: number
    handle: number
    commision: number
    commissionReceived: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    commision?: true
    commissionReceived?: true
  }

  export type AdminSumAggregateInputType = {
    commision?: true
    commissionReceived?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isSuper?: true
    handle?: true
    commision?: true
    commissionReceived?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isSuper?: true
    handle?: true
    commision?: true
    commissionReceived?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isSuper?: true
    handle?: true
    commision?: true
    commissionReceived?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    isSuper: boolean | null
    handle: string
    commision: number
    commissionReceived: number | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isSuper?: boolean
    handle?: boolean
    commision?: boolean
    commissionReceived?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    isSuper?: boolean
    handle?: boolean
    commision?: boolean
    commissionReceived?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "isSuper" | "handle" | "commision" | "commissionReceived", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      isSuper: boolean | null
      handle: string
      commision: number
      commissionReceived: number | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly isSuper: FieldRef<"admin", 'Boolean'>
    readonly handle: FieldRef<"admin", 'String'>
    readonly commision: FieldRef<"admin", 'Float'>
    readonly commissionReceived: FieldRef<"admin", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    content: string | null
    dateCreated: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    content: string | null
    dateCreated: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    content: number
    dateCreated: number
    _all: number
  }


  export type InquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    content?: true
    dateCreated?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    content?: true
    dateCreated?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    content?: true
    dateCreated?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inquiry to aggregate.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type inquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inquiryWhereInput
    orderBy?: inquiryOrderByWithAggregationInput | inquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: inquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    name: string
    email: string
    content: string
    dateCreated: Date
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends inquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type inquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    dateCreated?: boolean
  }, ExtArgs["result"]["inquiry"]>



  export type inquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    dateCreated?: boolean
  }

  export type inquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "content" | "dateCreated", ExtArgs["result"]["inquiry"]>

  export type $inquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      content: string
      dateCreated: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type inquiryGetPayload<S extends boolean | null | undefined | inquiryDefaultArgs> = $Result.GetResult<Prisma.$inquiryPayload, S>

  type inquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface inquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inquiry'], meta: { name: 'inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {inquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inquiryFindUniqueArgs>(args: SelectSubset<T, inquiryFindUniqueArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, inquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inquiryFindFirstArgs>(args?: SelectSubset<T, inquiryFindFirstArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, inquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inquiryFindManyArgs>(args?: SelectSubset<T, inquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {inquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends inquiryCreateArgs>(args: SelectSubset<T, inquiryCreateArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {inquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inquiryCreateManyArgs>(args?: SelectSubset<T, inquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {inquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends inquiryDeleteArgs>(args: SelectSubset<T, inquiryDeleteArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {inquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inquiryUpdateArgs>(args: SelectSubset<T, inquiryUpdateArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {inquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inquiryDeleteManyArgs>(args?: SelectSubset<T, inquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inquiryUpdateManyArgs>(args: SelectSubset<T, inquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {inquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends inquiryUpsertArgs>(args: SelectSubset<T, inquiryUpsertArgs<ExtArgs>>): Prisma__inquiryClient<$Result.GetResult<Prisma.$inquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends inquiryCountArgs>(
      args?: Subset<T, inquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inquiryGroupByArgs} args - Group by arguments.
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
      T extends inquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inquiryGroupByArgs['orderBy'] }
        : { orderBy?: inquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inquiry model
   */
  readonly fields: inquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the inquiry model
   */
  interface inquiryFieldRefs {
    readonly id: FieldRef<"inquiry", 'String'>
    readonly name: FieldRef<"inquiry", 'String'>
    readonly email: FieldRef<"inquiry", 'String'>
    readonly content: FieldRef<"inquiry", 'String'>
    readonly dateCreated: FieldRef<"inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inquiry findUnique
   */
  export type inquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry findUniqueOrThrow
   */
  export type inquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry findFirst
   */
  export type inquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry findFirstOrThrow
   */
  export type inquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Filter, which inquiry to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry findMany
   */
  export type inquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Filter, which inquiries to fetch.
     */
    where?: inquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inquiries to fetch.
     */
    orderBy?: inquiryOrderByWithRelationInput | inquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inquiries.
     */
    cursor?: inquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * inquiry create
   */
  export type inquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a inquiry.
     */
    data: XOR<inquiryCreateInput, inquiryUncheckedCreateInput>
  }

  /**
   * inquiry createMany
   */
  export type inquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inquiries.
     */
    data: inquiryCreateManyInput | inquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inquiry update
   */
  export type inquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a inquiry.
     */
    data: XOR<inquiryUpdateInput, inquiryUncheckedUpdateInput>
    /**
     * Choose, which inquiry to update.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry updateMany
   */
  export type inquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inquiries.
     */
    data: XOR<inquiryUpdateManyMutationInput, inquiryUncheckedUpdateManyInput>
    /**
     * Filter which inquiries to update
     */
    where?: inquiryWhereInput
    /**
     * Limit how many inquiries to update.
     */
    limit?: number
  }

  /**
   * inquiry upsert
   */
  export type inquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the inquiry to update in case it exists.
     */
    where: inquiryWhereUniqueInput
    /**
     * In case the inquiry found by the `where` argument doesn't exist, create a new inquiry with this data.
     */
    create: XOR<inquiryCreateInput, inquiryUncheckedCreateInput>
    /**
     * In case the inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inquiryUpdateInput, inquiryUncheckedUpdateInput>
  }

  /**
   * inquiry delete
   */
  export type inquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
    /**
     * Filter which inquiry to delete.
     */
    where: inquiryWhereUniqueInput
  }

  /**
   * inquiry deleteMany
   */
  export type inquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inquiries to delete
     */
    where?: inquiryWhereInput
    /**
     * Limit how many inquiries to delete.
     */
    limit?: number
  }

  /**
   * inquiry without action
   */
  export type inquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inquiry
     */
    select?: inquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inquiry
     */
    omit?: inquiryOmit<ExtArgs> | null
  }


  /**
   * Model miners
   */

  export type AggregateMiners = {
    _count: MinersCountAggregateOutputType | null
    _avg: MinersAvgAggregateOutputType | null
    _sum: MinersSumAggregateOutputType | null
    _min: MinersMinAggregateOutputType | null
    _max: MinersMaxAggregateOutputType | null
  }

  export type MinersAvgAggregateOutputType = {
    hashRate: number | null
    numberofDays: number | null
    referralfee: number | null
    referralWithdrawn: number | null
  }

  export type MinersSumAggregateOutputType = {
    hashRate: number | null
    numberofDays: number | null
    referralfee: number | null
    referralWithdrawn: number | null
  }

  export type MinersMinAggregateOutputType = {
    id: string | null
    address: string | null
    lastlogin: Date | null
    IP: string | null
    hashRate: number | null
    site: string | null
    lockedPeriod: Date | null
    numberofDays: number | null
    invite: string | null
    referralfee: number | null
    referralWithdrawn: number | null
  }

  export type MinersMaxAggregateOutputType = {
    id: string | null
    address: string | null
    lastlogin: Date | null
    IP: string | null
    hashRate: number | null
    site: string | null
    lockedPeriod: Date | null
    numberofDays: number | null
    invite: string | null
    referralfee: number | null
    referralWithdrawn: number | null
  }

  export type MinersCountAggregateOutputType = {
    id: number
    address: number
    lastlogin: number
    IP: number
    hashRate: number
    site: number
    lockedPeriod: number
    numberofDays: number
    invite: number
    referralfee: number
    referralWithdrawn: number
    _all: number
  }


  export type MinersAvgAggregateInputType = {
    hashRate?: true
    numberofDays?: true
    referralfee?: true
    referralWithdrawn?: true
  }

  export type MinersSumAggregateInputType = {
    hashRate?: true
    numberofDays?: true
    referralfee?: true
    referralWithdrawn?: true
  }

  export type MinersMinAggregateInputType = {
    id?: true
    address?: true
    lastlogin?: true
    IP?: true
    hashRate?: true
    site?: true
    lockedPeriod?: true
    numberofDays?: true
    invite?: true
    referralfee?: true
    referralWithdrawn?: true
  }

  export type MinersMaxAggregateInputType = {
    id?: true
    address?: true
    lastlogin?: true
    IP?: true
    hashRate?: true
    site?: true
    lockedPeriod?: true
    numberofDays?: true
    invite?: true
    referralfee?: true
    referralWithdrawn?: true
  }

  export type MinersCountAggregateInputType = {
    id?: true
    address?: true
    lastlogin?: true
    IP?: true
    hashRate?: true
    site?: true
    lockedPeriod?: true
    numberofDays?: true
    invite?: true
    referralfee?: true
    referralWithdrawn?: true
    _all?: true
  }

  export type MinersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which miners to aggregate.
     */
    where?: minersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miners to fetch.
     */
    orderBy?: minersOrderByWithRelationInput | minersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: minersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned miners
    **/
    _count?: true | MinersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MinersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MinersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinersMaxAggregateInputType
  }

  export type GetMinersAggregateType<T extends MinersAggregateArgs> = {
        [P in keyof T & keyof AggregateMiners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiners[P]>
      : GetScalarType<T[P], AggregateMiners[P]>
  }




  export type minersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: minersWhereInput
    orderBy?: minersOrderByWithAggregationInput | minersOrderByWithAggregationInput[]
    by: MinersScalarFieldEnum[] | MinersScalarFieldEnum
    having?: minersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinersCountAggregateInputType | true
    _avg?: MinersAvgAggregateInputType
    _sum?: MinersSumAggregateInputType
    _min?: MinersMinAggregateInputType
    _max?: MinersMaxAggregateInputType
  }

  export type MinersGroupByOutputType = {
    id: string
    address: string
    lastlogin: Date
    IP: string
    hashRate: number
    site: string
    lockedPeriod: Date
    numberofDays: number
    invite: string | null
    referralfee: number | null
    referralWithdrawn: number | null
    _count: MinersCountAggregateOutputType | null
    _avg: MinersAvgAggregateOutputType | null
    _sum: MinersSumAggregateOutputType | null
    _min: MinersMinAggregateOutputType | null
    _max: MinersMaxAggregateOutputType | null
  }

  type GetMinersGroupByPayload<T extends minersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinersGroupByOutputType[P]>
            : GetScalarType<T[P], MinersGroupByOutputType[P]>
        }
      >
    >


  export type minersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    lastlogin?: boolean
    IP?: boolean
    hashRate?: boolean
    site?: boolean
    lockedPeriod?: boolean
    numberofDays?: boolean
    invite?: boolean
    referralfee?: boolean
    referralWithdrawn?: boolean
    tokenbalance?: boolean | miners$tokenbalanceArgs<ExtArgs>
    _count?: boolean | MinersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miners"]>



  export type minersSelectScalar = {
    id?: boolean
    address?: boolean
    lastlogin?: boolean
    IP?: boolean
    hashRate?: boolean
    site?: boolean
    lockedPeriod?: boolean
    numberofDays?: boolean
    invite?: boolean
    referralfee?: boolean
    referralWithdrawn?: boolean
  }

  export type minersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "lastlogin" | "IP" | "hashRate" | "site" | "lockedPeriod" | "numberofDays" | "invite" | "referralfee" | "referralWithdrawn", ExtArgs["result"]["miners"]>
  export type minersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokenbalance?: boolean | miners$tokenbalanceArgs<ExtArgs>
    _count?: boolean | MinersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $minersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "miners"
    objects: {
      tokenbalance: Prisma.$tokenbalancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      lastlogin: Date
      IP: string
      hashRate: number
      site: string
      lockedPeriod: Date
      numberofDays: number
      invite: string | null
      referralfee: number | null
      referralWithdrawn: number | null
    }, ExtArgs["result"]["miners"]>
    composites: {}
  }

  type minersGetPayload<S extends boolean | null | undefined | minersDefaultArgs> = $Result.GetResult<Prisma.$minersPayload, S>

  type minersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<minersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MinersCountAggregateInputType | true
    }

  export interface minersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['miners'], meta: { name: 'miners' } }
    /**
     * Find zero or one Miners that matches the filter.
     * @param {minersFindUniqueArgs} args - Arguments to find a Miners
     * @example
     * // Get one Miners
     * const miners = await prisma.miners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends minersFindUniqueArgs>(args: SelectSubset<T, minersFindUniqueArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Miners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {minersFindUniqueOrThrowArgs} args - Arguments to find a Miners
     * @example
     * // Get one Miners
     * const miners = await prisma.miners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends minersFindUniqueOrThrowArgs>(args: SelectSubset<T, minersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Miners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minersFindFirstArgs} args - Arguments to find a Miners
     * @example
     * // Get one Miners
     * const miners = await prisma.miners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends minersFindFirstArgs>(args?: SelectSubset<T, minersFindFirstArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Miners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minersFindFirstOrThrowArgs} args - Arguments to find a Miners
     * @example
     * // Get one Miners
     * const miners = await prisma.miners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends minersFindFirstOrThrowArgs>(args?: SelectSubset<T, minersFindFirstOrThrowArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Miners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Miners
     * const miners = await prisma.miners.findMany()
     * 
     * // Get first 10 Miners
     * const miners = await prisma.miners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const minersWithIdOnly = await prisma.miners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends minersFindManyArgs>(args?: SelectSubset<T, minersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Miners.
     * @param {minersCreateArgs} args - Arguments to create a Miners.
     * @example
     * // Create one Miners
     * const Miners = await prisma.miners.create({
     *   data: {
     *     // ... data to create a Miners
     *   }
     * })
     * 
     */
    create<T extends minersCreateArgs>(args: SelectSubset<T, minersCreateArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Miners.
     * @param {minersCreateManyArgs} args - Arguments to create many Miners.
     * @example
     * // Create many Miners
     * const miners = await prisma.miners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends minersCreateManyArgs>(args?: SelectSubset<T, minersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Miners.
     * @param {minersDeleteArgs} args - Arguments to delete one Miners.
     * @example
     * // Delete one Miners
     * const Miners = await prisma.miners.delete({
     *   where: {
     *     // ... filter to delete one Miners
     *   }
     * })
     * 
     */
    delete<T extends minersDeleteArgs>(args: SelectSubset<T, minersDeleteArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Miners.
     * @param {minersUpdateArgs} args - Arguments to update one Miners.
     * @example
     * // Update one Miners
     * const miners = await prisma.miners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends minersUpdateArgs>(args: SelectSubset<T, minersUpdateArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Miners.
     * @param {minersDeleteManyArgs} args - Arguments to filter Miners to delete.
     * @example
     * // Delete a few Miners
     * const { count } = await prisma.miners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends minersDeleteManyArgs>(args?: SelectSubset<T, minersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Miners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Miners
     * const miners = await prisma.miners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends minersUpdateManyArgs>(args: SelectSubset<T, minersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Miners.
     * @param {minersUpsertArgs} args - Arguments to update or create a Miners.
     * @example
     * // Update or create a Miners
     * const miners = await prisma.miners.upsert({
     *   create: {
     *     // ... data to create a Miners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Miners we want to update
     *   }
     * })
     */
    upsert<T extends minersUpsertArgs>(args: SelectSubset<T, minersUpsertArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Miners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minersCountArgs} args - Arguments to filter Miners to count.
     * @example
     * // Count the number of Miners
     * const count = await prisma.miners.count({
     *   where: {
     *     // ... the filter for the Miners we want to count
     *   }
     * })
    **/
    count<T extends minersCountArgs>(
      args?: Subset<T, minersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Miners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MinersAggregateArgs>(args: Subset<T, MinersAggregateArgs>): Prisma.PrismaPromise<GetMinersAggregateType<T>>

    /**
     * Group by Miners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minersGroupByArgs} args - Group by arguments.
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
      T extends minersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: minersGroupByArgs['orderBy'] }
        : { orderBy?: minersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, minersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the miners model
   */
  readonly fields: minersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for miners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__minersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokenbalance<T extends miners$tokenbalanceArgs<ExtArgs> = {}>(args?: Subset<T, miners$tokenbalanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the miners model
   */
  interface minersFieldRefs {
    readonly id: FieldRef<"miners", 'String'>
    readonly address: FieldRef<"miners", 'String'>
    readonly lastlogin: FieldRef<"miners", 'DateTime'>
    readonly IP: FieldRef<"miners", 'String'>
    readonly hashRate: FieldRef<"miners", 'Float'>
    readonly site: FieldRef<"miners", 'String'>
    readonly lockedPeriod: FieldRef<"miners", 'DateTime'>
    readonly numberofDays: FieldRef<"miners", 'Int'>
    readonly invite: FieldRef<"miners", 'String'>
    readonly referralfee: FieldRef<"miners", 'Float'>
    readonly referralWithdrawn: FieldRef<"miners", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * miners findUnique
   */
  export type minersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * Filter, which miners to fetch.
     */
    where: minersWhereUniqueInput
  }

  /**
   * miners findUniqueOrThrow
   */
  export type minersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * Filter, which miners to fetch.
     */
    where: minersWhereUniqueInput
  }

  /**
   * miners findFirst
   */
  export type minersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * Filter, which miners to fetch.
     */
    where?: minersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miners to fetch.
     */
    orderBy?: minersOrderByWithRelationInput | minersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for miners.
     */
    cursor?: minersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of miners.
     */
    distinct?: MinersScalarFieldEnum | MinersScalarFieldEnum[]
  }

  /**
   * miners findFirstOrThrow
   */
  export type minersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * Filter, which miners to fetch.
     */
    where?: minersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miners to fetch.
     */
    orderBy?: minersOrderByWithRelationInput | minersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for miners.
     */
    cursor?: minersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of miners.
     */
    distinct?: MinersScalarFieldEnum | MinersScalarFieldEnum[]
  }

  /**
   * miners findMany
   */
  export type minersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * Filter, which miners to fetch.
     */
    where?: minersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miners to fetch.
     */
    orderBy?: minersOrderByWithRelationInput | minersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing miners.
     */
    cursor?: minersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miners.
     */
    skip?: number
    distinct?: MinersScalarFieldEnum | MinersScalarFieldEnum[]
  }

  /**
   * miners create
   */
  export type minersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * The data needed to create a miners.
     */
    data: XOR<minersCreateInput, minersUncheckedCreateInput>
  }

  /**
   * miners createMany
   */
  export type minersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many miners.
     */
    data: minersCreateManyInput | minersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * miners update
   */
  export type minersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * The data needed to update a miners.
     */
    data: XOR<minersUpdateInput, minersUncheckedUpdateInput>
    /**
     * Choose, which miners to update.
     */
    where: minersWhereUniqueInput
  }

  /**
   * miners updateMany
   */
  export type minersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update miners.
     */
    data: XOR<minersUpdateManyMutationInput, minersUncheckedUpdateManyInput>
    /**
     * Filter which miners to update
     */
    where?: minersWhereInput
    /**
     * Limit how many miners to update.
     */
    limit?: number
  }

  /**
   * miners upsert
   */
  export type minersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * The filter to search for the miners to update in case it exists.
     */
    where: minersWhereUniqueInput
    /**
     * In case the miners found by the `where` argument doesn't exist, create a new miners with this data.
     */
    create: XOR<minersCreateInput, minersUncheckedCreateInput>
    /**
     * In case the miners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<minersUpdateInput, minersUncheckedUpdateInput>
  }

  /**
   * miners delete
   */
  export type minersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    /**
     * Filter which miners to delete.
     */
    where: minersWhereUniqueInput
  }

  /**
   * miners deleteMany
   */
  export type minersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which miners to delete
     */
    where?: minersWhereInput
    /**
     * Limit how many miners to delete.
     */
    limit?: number
  }

  /**
   * miners.tokenbalance
   */
  export type miners$tokenbalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    where?: tokenbalanceWhereInput
    orderBy?: tokenbalanceOrderByWithRelationInput | tokenbalanceOrderByWithRelationInput[]
    cursor?: tokenbalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenbalanceScalarFieldEnum | TokenbalanceScalarFieldEnum[]
  }

  /**
   * miners without action
   */
  export type minersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
  }


  /**
   * Model network
   */

  export type AggregateNetwork = {
    _count: NetworkCountAggregateOutputType | null
    _min: NetworkMinAggregateOutputType | null
    _max: NetworkMaxAggregateOutputType | null
  }

  export type NetworkMinAggregateOutputType = {
    id: string | null
    name: string | null
    enable: boolean | null
  }

  export type NetworkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    enable: boolean | null
  }

  export type NetworkCountAggregateOutputType = {
    id: number
    name: number
    enable: number
    _all: number
  }


  export type NetworkMinAggregateInputType = {
    id?: true
    name?: true
    enable?: true
  }

  export type NetworkMaxAggregateInputType = {
    id?: true
    name?: true
    enable?: true
  }

  export type NetworkCountAggregateInputType = {
    id?: true
    name?: true
    enable?: true
    _all?: true
  }

  export type NetworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which network to aggregate.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned networks
    **/
    _count?: true | NetworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkMaxAggregateInputType
  }

  export type GetNetworkAggregateType<T extends NetworkAggregateArgs> = {
        [P in keyof T & keyof AggregateNetwork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetwork[P]>
      : GetScalarType<T[P], AggregateNetwork[P]>
  }




  export type networkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: networkWhereInput
    orderBy?: networkOrderByWithAggregationInput | networkOrderByWithAggregationInput[]
    by: NetworkScalarFieldEnum[] | NetworkScalarFieldEnum
    having?: networkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkCountAggregateInputType | true
    _min?: NetworkMinAggregateInputType
    _max?: NetworkMaxAggregateInputType
  }

  export type NetworkGroupByOutputType = {
    id: string
    name: string
    enable: boolean
    _count: NetworkCountAggregateOutputType | null
    _min: NetworkMinAggregateOutputType | null
    _max: NetworkMaxAggregateOutputType | null
  }

  type GetNetworkGroupByPayload<T extends networkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkGroupByOutputType[P]>
        }
      >
    >


  export type networkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enable?: boolean
    tokencontract?: boolean | network$tokencontractArgs<ExtArgs>
    _count?: boolean | NetworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["network"]>



  export type networkSelectScalar = {
    id?: boolean
    name?: boolean
    enable?: boolean
  }

  export type networkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enable", ExtArgs["result"]["network"]>
  export type networkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokencontract?: boolean | network$tokencontractArgs<ExtArgs>
    _count?: boolean | NetworkCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $networkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "network"
    objects: {
      tokencontract: Prisma.$tokencontractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      enable: boolean
    }, ExtArgs["result"]["network"]>
    composites: {}
  }

  type networkGetPayload<S extends boolean | null | undefined | networkDefaultArgs> = $Result.GetResult<Prisma.$networkPayload, S>

  type networkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<networkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkCountAggregateInputType | true
    }

  export interface networkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['network'], meta: { name: 'network' } }
    /**
     * Find zero or one Network that matches the filter.
     * @param {networkFindUniqueArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends networkFindUniqueArgs>(args: SelectSubset<T, networkFindUniqueArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Network that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {networkFindUniqueOrThrowArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends networkFindUniqueOrThrowArgs>(args: SelectSubset<T, networkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Network that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkFindFirstArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends networkFindFirstArgs>(args?: SelectSubset<T, networkFindFirstArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Network that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkFindFirstOrThrowArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends networkFindFirstOrThrowArgs>(args?: SelectSubset<T, networkFindFirstOrThrowArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Networks
     * const networks = await prisma.network.findMany()
     * 
     * // Get first 10 Networks
     * const networks = await prisma.network.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkWithIdOnly = await prisma.network.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends networkFindManyArgs>(args?: SelectSubset<T, networkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Network.
     * @param {networkCreateArgs} args - Arguments to create a Network.
     * @example
     * // Create one Network
     * const Network = await prisma.network.create({
     *   data: {
     *     // ... data to create a Network
     *   }
     * })
     * 
     */
    create<T extends networkCreateArgs>(args: SelectSubset<T, networkCreateArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Networks.
     * @param {networkCreateManyArgs} args - Arguments to create many Networks.
     * @example
     * // Create many Networks
     * const network = await prisma.network.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends networkCreateManyArgs>(args?: SelectSubset<T, networkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Network.
     * @param {networkDeleteArgs} args - Arguments to delete one Network.
     * @example
     * // Delete one Network
     * const Network = await prisma.network.delete({
     *   where: {
     *     // ... filter to delete one Network
     *   }
     * })
     * 
     */
    delete<T extends networkDeleteArgs>(args: SelectSubset<T, networkDeleteArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Network.
     * @param {networkUpdateArgs} args - Arguments to update one Network.
     * @example
     * // Update one Network
     * const network = await prisma.network.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends networkUpdateArgs>(args: SelectSubset<T, networkUpdateArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Networks.
     * @param {networkDeleteManyArgs} args - Arguments to filter Networks to delete.
     * @example
     * // Delete a few Networks
     * const { count } = await prisma.network.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends networkDeleteManyArgs>(args?: SelectSubset<T, networkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Networks
     * const network = await prisma.network.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends networkUpdateManyArgs>(args: SelectSubset<T, networkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Network.
     * @param {networkUpsertArgs} args - Arguments to update or create a Network.
     * @example
     * // Update or create a Network
     * const network = await prisma.network.upsert({
     *   create: {
     *     // ... data to create a Network
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Network we want to update
     *   }
     * })
     */
    upsert<T extends networkUpsertArgs>(args: SelectSubset<T, networkUpsertArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkCountArgs} args - Arguments to filter Networks to count.
     * @example
     * // Count the number of Networks
     * const count = await prisma.network.count({
     *   where: {
     *     // ... the filter for the Networks we want to count
     *   }
     * })
    **/
    count<T extends networkCountArgs>(
      args?: Subset<T, networkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkAggregateArgs>(args: Subset<T, NetworkAggregateArgs>): Prisma.PrismaPromise<GetNetworkAggregateType<T>>

    /**
     * Group by Network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkGroupByArgs} args - Group by arguments.
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
      T extends networkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: networkGroupByArgs['orderBy'] }
        : { orderBy?: networkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, networkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the network model
   */
  readonly fields: networkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for network.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__networkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokencontract<T extends network$tokencontractArgs<ExtArgs> = {}>(args?: Subset<T, network$tokencontractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the network model
   */
  interface networkFieldRefs {
    readonly id: FieldRef<"network", 'String'>
    readonly name: FieldRef<"network", 'String'>
    readonly enable: FieldRef<"network", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * network findUnique
   */
  export type networkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network findUniqueOrThrow
   */
  export type networkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network findFirst
   */
  export type networkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networks.
     */
    cursor?: networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of networks.
     */
    distinct?: NetworkScalarFieldEnum | NetworkScalarFieldEnum[]
  }

  /**
   * network findFirstOrThrow
   */
  export type networkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networks.
     */
    cursor?: networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of networks.
     */
    distinct?: NetworkScalarFieldEnum | NetworkScalarFieldEnum[]
  }

  /**
   * network findMany
   */
  export type networkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing networks.
     */
    cursor?: networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    distinct?: NetworkScalarFieldEnum | NetworkScalarFieldEnum[]
  }

  /**
   * network create
   */
  export type networkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * The data needed to create a network.
     */
    data: XOR<networkCreateInput, networkUncheckedCreateInput>
  }

  /**
   * network createMany
   */
  export type networkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many networks.
     */
    data: networkCreateManyInput | networkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * network update
   */
  export type networkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * The data needed to update a network.
     */
    data: XOR<networkUpdateInput, networkUncheckedUpdateInput>
    /**
     * Choose, which network to update.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network updateMany
   */
  export type networkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update networks.
     */
    data: XOR<networkUpdateManyMutationInput, networkUncheckedUpdateManyInput>
    /**
     * Filter which networks to update
     */
    where?: networkWhereInput
    /**
     * Limit how many networks to update.
     */
    limit?: number
  }

  /**
   * network upsert
   */
  export type networkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * The filter to search for the network to update in case it exists.
     */
    where: networkWhereUniqueInput
    /**
     * In case the network found by the `where` argument doesn't exist, create a new network with this data.
     */
    create: XOR<networkCreateInput, networkUncheckedCreateInput>
    /**
     * In case the network was found with the provided `where` argument, update it with this data.
     */
    update: XOR<networkUpdateInput, networkUncheckedUpdateInput>
  }

  /**
   * network delete
   */
  export type networkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter which network to delete.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network deleteMany
   */
  export type networkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which networks to delete
     */
    where?: networkWhereInput
    /**
     * Limit how many networks to delete.
     */
    limit?: number
  }

  /**
   * network.tokencontract
   */
  export type network$tokencontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    where?: tokencontractWhereInput
    orderBy?: tokencontractOrderByWithRelationInput | tokencontractOrderByWithRelationInput[]
    cursor?: tokencontractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokencontractScalarFieldEnum | TokencontractScalarFieldEnum[]
  }

  /**
   * network without action
   */
  export type networkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
  }


  /**
   * Model paymentlogs
   */

  export type AggregatePaymentlogs = {
    _count: PaymentlogsCountAggregateOutputType | null
    _avg: PaymentlogsAvgAggregateOutputType | null
    _sum: PaymentlogsSumAggregateOutputType | null
    _min: PaymentlogsMinAggregateOutputType | null
    _max: PaymentlogsMaxAggregateOutputType | null
  }

  export type PaymentlogsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    royalty: number | null
  }

  export type PaymentlogsSumAggregateOutputType = {
    id: number | null
    amount: number | null
    royalty: number | null
  }

  export type PaymentlogsMinAggregateOutputType = {
    id: number | null
    minerAddress: string | null
    agent: string | null
    amount: number | null
    royalty: number | null
    date: Date | null
  }

  export type PaymentlogsMaxAggregateOutputType = {
    id: number | null
    minerAddress: string | null
    agent: string | null
    amount: number | null
    royalty: number | null
    date: Date | null
  }

  export type PaymentlogsCountAggregateOutputType = {
    id: number
    minerAddress: number
    agent: number
    amount: number
    royalty: number
    date: number
    _all: number
  }


  export type PaymentlogsAvgAggregateInputType = {
    id?: true
    amount?: true
    royalty?: true
  }

  export type PaymentlogsSumAggregateInputType = {
    id?: true
    amount?: true
    royalty?: true
  }

  export type PaymentlogsMinAggregateInputType = {
    id?: true
    minerAddress?: true
    agent?: true
    amount?: true
    royalty?: true
    date?: true
  }

  export type PaymentlogsMaxAggregateInputType = {
    id?: true
    minerAddress?: true
    agent?: true
    amount?: true
    royalty?: true
    date?: true
  }

  export type PaymentlogsCountAggregateInputType = {
    id?: true
    minerAddress?: true
    agent?: true
    amount?: true
    royalty?: true
    date?: true
    _all?: true
  }

  export type PaymentlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentlogs to aggregate.
     */
    where?: paymentlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentlogs to fetch.
     */
    orderBy?: paymentlogsOrderByWithRelationInput | paymentlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paymentlogs
    **/
    _count?: true | PaymentlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentlogsMaxAggregateInputType
  }

  export type GetPaymentlogsAggregateType<T extends PaymentlogsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentlogs[P]>
      : GetScalarType<T[P], AggregatePaymentlogs[P]>
  }




  export type paymentlogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentlogsWhereInput
    orderBy?: paymentlogsOrderByWithAggregationInput | paymentlogsOrderByWithAggregationInput[]
    by: PaymentlogsScalarFieldEnum[] | PaymentlogsScalarFieldEnum
    having?: paymentlogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentlogsCountAggregateInputType | true
    _avg?: PaymentlogsAvgAggregateInputType
    _sum?: PaymentlogsSumAggregateInputType
    _min?: PaymentlogsMinAggregateInputType
    _max?: PaymentlogsMaxAggregateInputType
  }

  export type PaymentlogsGroupByOutputType = {
    id: number
    minerAddress: string
    agent: string
    amount: number
    royalty: number
    date: Date
    _count: PaymentlogsCountAggregateOutputType | null
    _avg: PaymentlogsAvgAggregateOutputType | null
    _sum: PaymentlogsSumAggregateOutputType | null
    _min: PaymentlogsMinAggregateOutputType | null
    _max: PaymentlogsMaxAggregateOutputType | null
  }

  type GetPaymentlogsGroupByPayload<T extends paymentlogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentlogsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentlogsGroupByOutputType[P]>
        }
      >
    >


  export type paymentlogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minerAddress?: boolean
    agent?: boolean
    amount?: boolean
    royalty?: boolean
    date?: boolean
  }, ExtArgs["result"]["paymentlogs"]>



  export type paymentlogsSelectScalar = {
    id?: boolean
    minerAddress?: boolean
    agent?: boolean
    amount?: boolean
    royalty?: boolean
    date?: boolean
  }

  export type paymentlogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "minerAddress" | "agent" | "amount" | "royalty" | "date", ExtArgs["result"]["paymentlogs"]>

  export type $paymentlogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paymentlogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      minerAddress: string
      agent: string
      amount: number
      royalty: number
      date: Date
    }, ExtArgs["result"]["paymentlogs"]>
    composites: {}
  }

  type paymentlogsGetPayload<S extends boolean | null | undefined | paymentlogsDefaultArgs> = $Result.GetResult<Prisma.$paymentlogsPayload, S>

  type paymentlogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentlogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentlogsCountAggregateInputType | true
    }

  export interface paymentlogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paymentlogs'], meta: { name: 'paymentlogs' } }
    /**
     * Find zero or one Paymentlogs that matches the filter.
     * @param {paymentlogsFindUniqueArgs} args - Arguments to find a Paymentlogs
     * @example
     * // Get one Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentlogsFindUniqueArgs>(args: SelectSubset<T, paymentlogsFindUniqueArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paymentlogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentlogsFindUniqueOrThrowArgs} args - Arguments to find a Paymentlogs
     * @example
     * // Get one Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentlogsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentlogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paymentlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentlogsFindFirstArgs} args - Arguments to find a Paymentlogs
     * @example
     * // Get one Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentlogsFindFirstArgs>(args?: SelectSubset<T, paymentlogsFindFirstArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paymentlogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentlogsFindFirstOrThrowArgs} args - Arguments to find a Paymentlogs
     * @example
     * // Get one Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentlogsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentlogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paymentlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentlogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.findMany()
     * 
     * // Get first 10 Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentlogsWithIdOnly = await prisma.paymentlogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentlogsFindManyArgs>(args?: SelectSubset<T, paymentlogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paymentlogs.
     * @param {paymentlogsCreateArgs} args - Arguments to create a Paymentlogs.
     * @example
     * // Create one Paymentlogs
     * const Paymentlogs = await prisma.paymentlogs.create({
     *   data: {
     *     // ... data to create a Paymentlogs
     *   }
     * })
     * 
     */
    create<T extends paymentlogsCreateArgs>(args: SelectSubset<T, paymentlogsCreateArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paymentlogs.
     * @param {paymentlogsCreateManyArgs} args - Arguments to create many Paymentlogs.
     * @example
     * // Create many Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentlogsCreateManyArgs>(args?: SelectSubset<T, paymentlogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paymentlogs.
     * @param {paymentlogsDeleteArgs} args - Arguments to delete one Paymentlogs.
     * @example
     * // Delete one Paymentlogs
     * const Paymentlogs = await prisma.paymentlogs.delete({
     *   where: {
     *     // ... filter to delete one Paymentlogs
     *   }
     * })
     * 
     */
    delete<T extends paymentlogsDeleteArgs>(args: SelectSubset<T, paymentlogsDeleteArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paymentlogs.
     * @param {paymentlogsUpdateArgs} args - Arguments to update one Paymentlogs.
     * @example
     * // Update one Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentlogsUpdateArgs>(args: SelectSubset<T, paymentlogsUpdateArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paymentlogs.
     * @param {paymentlogsDeleteManyArgs} args - Arguments to filter Paymentlogs to delete.
     * @example
     * // Delete a few Paymentlogs
     * const { count } = await prisma.paymentlogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentlogsDeleteManyArgs>(args?: SelectSubset<T, paymentlogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paymentlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentlogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentlogsUpdateManyArgs>(args: SelectSubset<T, paymentlogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paymentlogs.
     * @param {paymentlogsUpsertArgs} args - Arguments to update or create a Paymentlogs.
     * @example
     * // Update or create a Paymentlogs
     * const paymentlogs = await prisma.paymentlogs.upsert({
     *   create: {
     *     // ... data to create a Paymentlogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paymentlogs we want to update
     *   }
     * })
     */
    upsert<T extends paymentlogsUpsertArgs>(args: SelectSubset<T, paymentlogsUpsertArgs<ExtArgs>>): Prisma__paymentlogsClient<$Result.GetResult<Prisma.$paymentlogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paymentlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentlogsCountArgs} args - Arguments to filter Paymentlogs to count.
     * @example
     * // Count the number of Paymentlogs
     * const count = await prisma.paymentlogs.count({
     *   where: {
     *     // ... the filter for the Paymentlogs we want to count
     *   }
     * })
    **/
    count<T extends paymentlogsCountArgs>(
      args?: Subset<T, paymentlogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paymentlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentlogsAggregateArgs>(args: Subset<T, PaymentlogsAggregateArgs>): Prisma.PrismaPromise<GetPaymentlogsAggregateType<T>>

    /**
     * Group by Paymentlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentlogsGroupByArgs} args - Group by arguments.
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
      T extends paymentlogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentlogsGroupByArgs['orderBy'] }
        : { orderBy?: paymentlogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentlogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paymentlogs model
   */
  readonly fields: paymentlogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paymentlogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentlogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the paymentlogs model
   */
  interface paymentlogsFieldRefs {
    readonly id: FieldRef<"paymentlogs", 'Int'>
    readonly minerAddress: FieldRef<"paymentlogs", 'String'>
    readonly agent: FieldRef<"paymentlogs", 'String'>
    readonly amount: FieldRef<"paymentlogs", 'Float'>
    readonly royalty: FieldRef<"paymentlogs", 'Float'>
    readonly date: FieldRef<"paymentlogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paymentlogs findUnique
   */
  export type paymentlogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * Filter, which paymentlogs to fetch.
     */
    where: paymentlogsWhereUniqueInput
  }

  /**
   * paymentlogs findUniqueOrThrow
   */
  export type paymentlogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * Filter, which paymentlogs to fetch.
     */
    where: paymentlogsWhereUniqueInput
  }

  /**
   * paymentlogs findFirst
   */
  export type paymentlogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * Filter, which paymentlogs to fetch.
     */
    where?: paymentlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentlogs to fetch.
     */
    orderBy?: paymentlogsOrderByWithRelationInput | paymentlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentlogs.
     */
    cursor?: paymentlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentlogs.
     */
    distinct?: PaymentlogsScalarFieldEnum | PaymentlogsScalarFieldEnum[]
  }

  /**
   * paymentlogs findFirstOrThrow
   */
  export type paymentlogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * Filter, which paymentlogs to fetch.
     */
    where?: paymentlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentlogs to fetch.
     */
    orderBy?: paymentlogsOrderByWithRelationInput | paymentlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentlogs.
     */
    cursor?: paymentlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentlogs.
     */
    distinct?: PaymentlogsScalarFieldEnum | PaymentlogsScalarFieldEnum[]
  }

  /**
   * paymentlogs findMany
   */
  export type paymentlogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * Filter, which paymentlogs to fetch.
     */
    where?: paymentlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentlogs to fetch.
     */
    orderBy?: paymentlogsOrderByWithRelationInput | paymentlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paymentlogs.
     */
    cursor?: paymentlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentlogs.
     */
    skip?: number
    distinct?: PaymentlogsScalarFieldEnum | PaymentlogsScalarFieldEnum[]
  }

  /**
   * paymentlogs create
   */
  export type paymentlogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * The data needed to create a paymentlogs.
     */
    data: XOR<paymentlogsCreateInput, paymentlogsUncheckedCreateInput>
  }

  /**
   * paymentlogs createMany
   */
  export type paymentlogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentlogs.
     */
    data: paymentlogsCreateManyInput | paymentlogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentlogs update
   */
  export type paymentlogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * The data needed to update a paymentlogs.
     */
    data: XOR<paymentlogsUpdateInput, paymentlogsUncheckedUpdateInput>
    /**
     * Choose, which paymentlogs to update.
     */
    where: paymentlogsWhereUniqueInput
  }

  /**
   * paymentlogs updateMany
   */
  export type paymentlogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentlogs.
     */
    data: XOR<paymentlogsUpdateManyMutationInput, paymentlogsUncheckedUpdateManyInput>
    /**
     * Filter which paymentlogs to update
     */
    where?: paymentlogsWhereInput
    /**
     * Limit how many paymentlogs to update.
     */
    limit?: number
  }

  /**
   * paymentlogs upsert
   */
  export type paymentlogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * The filter to search for the paymentlogs to update in case it exists.
     */
    where: paymentlogsWhereUniqueInput
    /**
     * In case the paymentlogs found by the `where` argument doesn't exist, create a new paymentlogs with this data.
     */
    create: XOR<paymentlogsCreateInput, paymentlogsUncheckedCreateInput>
    /**
     * In case the paymentlogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentlogsUpdateInput, paymentlogsUncheckedUpdateInput>
  }

  /**
   * paymentlogs delete
   */
  export type paymentlogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
    /**
     * Filter which paymentlogs to delete.
     */
    where: paymentlogsWhereUniqueInput
  }

  /**
   * paymentlogs deleteMany
   */
  export type paymentlogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentlogs to delete
     */
    where?: paymentlogsWhereInput
    /**
     * Limit how many paymentlogs to delete.
     */
    limit?: number
  }

  /**
   * paymentlogs without action
   */
  export type paymentlogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentlogs
     */
    select?: paymentlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentlogs
     */
    omit?: paymentlogsOmit<ExtArgs> | null
  }


  /**
   * Model sitebalance
   */

  export type AggregateSitebalance = {
    _count: SitebalanceCountAggregateOutputType | null
    _avg: SitebalanceAvgAggregateOutputType | null
    _sum: SitebalanceSumAggregateOutputType | null
    _min: SitebalanceMinAggregateOutputType | null
    _max: SitebalanceMaxAggregateOutputType | null
  }

  export type SitebalanceAvgAggregateOutputType = {
    balance: number | null
    amountUSD: number | null
    totalUser: number | null
  }

  export type SitebalanceSumAggregateOutputType = {
    balance: number | null
    amountUSD: number | null
    totalUser: number | null
  }

  export type SitebalanceMinAggregateOutputType = {
    id: string | null
    balance: number | null
    amountUSD: number | null
    lastUpdate: Date | null
    totalUser: number | null
  }

  export type SitebalanceMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    amountUSD: number | null
    lastUpdate: Date | null
    totalUser: number | null
  }

  export type SitebalanceCountAggregateOutputType = {
    id: number
    balance: number
    amountUSD: number
    lastUpdate: number
    totalUser: number
    _all: number
  }


  export type SitebalanceAvgAggregateInputType = {
    balance?: true
    amountUSD?: true
    totalUser?: true
  }

  export type SitebalanceSumAggregateInputType = {
    balance?: true
    amountUSD?: true
    totalUser?: true
  }

  export type SitebalanceMinAggregateInputType = {
    id?: true
    balance?: true
    amountUSD?: true
    lastUpdate?: true
    totalUser?: true
  }

  export type SitebalanceMaxAggregateInputType = {
    id?: true
    balance?: true
    amountUSD?: true
    lastUpdate?: true
    totalUser?: true
  }

  export type SitebalanceCountAggregateInputType = {
    id?: true
    balance?: true
    amountUSD?: true
    lastUpdate?: true
    totalUser?: true
    _all?: true
  }

  export type SitebalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sitebalance to aggregate.
     */
    where?: sitebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitebalances to fetch.
     */
    orderBy?: sitebalanceOrderByWithRelationInput | sitebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sitebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitebalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sitebalances
    **/
    _count?: true | SitebalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SitebalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SitebalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitebalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitebalanceMaxAggregateInputType
  }

  export type GetSitebalanceAggregateType<T extends SitebalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSitebalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSitebalance[P]>
      : GetScalarType<T[P], AggregateSitebalance[P]>
  }




  export type sitebalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sitebalanceWhereInput
    orderBy?: sitebalanceOrderByWithAggregationInput | sitebalanceOrderByWithAggregationInput[]
    by: SitebalanceScalarFieldEnum[] | SitebalanceScalarFieldEnum
    having?: sitebalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitebalanceCountAggregateInputType | true
    _avg?: SitebalanceAvgAggregateInputType
    _sum?: SitebalanceSumAggregateInputType
    _min?: SitebalanceMinAggregateInputType
    _max?: SitebalanceMaxAggregateInputType
  }

  export type SitebalanceGroupByOutputType = {
    id: string
    balance: number
    amountUSD: number
    lastUpdate: Date
    totalUser: number
    _count: SitebalanceCountAggregateOutputType | null
    _avg: SitebalanceAvgAggregateOutputType | null
    _sum: SitebalanceSumAggregateOutputType | null
    _min: SitebalanceMinAggregateOutputType | null
    _max: SitebalanceMaxAggregateOutputType | null
  }

  type GetSitebalanceGroupByPayload<T extends sitebalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitebalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitebalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitebalanceGroupByOutputType[P]>
            : GetScalarType<T[P], SitebalanceGroupByOutputType[P]>
        }
      >
    >


  export type sitebalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    amountUSD?: boolean
    lastUpdate?: boolean
    totalUser?: boolean
  }, ExtArgs["result"]["sitebalance"]>



  export type sitebalanceSelectScalar = {
    id?: boolean
    balance?: boolean
    amountUSD?: boolean
    lastUpdate?: boolean
    totalUser?: boolean
  }

  export type sitebalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "amountUSD" | "lastUpdate" | "totalUser", ExtArgs["result"]["sitebalance"]>

  export type $sitebalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sitebalance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      amountUSD: number
      lastUpdate: Date
      totalUser: number
    }, ExtArgs["result"]["sitebalance"]>
    composites: {}
  }

  type sitebalanceGetPayload<S extends boolean | null | undefined | sitebalanceDefaultArgs> = $Result.GetResult<Prisma.$sitebalancePayload, S>

  type sitebalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sitebalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SitebalanceCountAggregateInputType | true
    }

  export interface sitebalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sitebalance'], meta: { name: 'sitebalance' } }
    /**
     * Find zero or one Sitebalance that matches the filter.
     * @param {sitebalanceFindUniqueArgs} args - Arguments to find a Sitebalance
     * @example
     * // Get one Sitebalance
     * const sitebalance = await prisma.sitebalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sitebalanceFindUniqueArgs>(args: SelectSubset<T, sitebalanceFindUniqueArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sitebalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sitebalanceFindUniqueOrThrowArgs} args - Arguments to find a Sitebalance
     * @example
     * // Get one Sitebalance
     * const sitebalance = await prisma.sitebalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sitebalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, sitebalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sitebalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitebalanceFindFirstArgs} args - Arguments to find a Sitebalance
     * @example
     * // Get one Sitebalance
     * const sitebalance = await prisma.sitebalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sitebalanceFindFirstArgs>(args?: SelectSubset<T, sitebalanceFindFirstArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sitebalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitebalanceFindFirstOrThrowArgs} args - Arguments to find a Sitebalance
     * @example
     * // Get one Sitebalance
     * const sitebalance = await prisma.sitebalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sitebalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, sitebalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sitebalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitebalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sitebalances
     * const sitebalances = await prisma.sitebalance.findMany()
     * 
     * // Get first 10 Sitebalances
     * const sitebalances = await prisma.sitebalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sitebalanceWithIdOnly = await prisma.sitebalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sitebalanceFindManyArgs>(args?: SelectSubset<T, sitebalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sitebalance.
     * @param {sitebalanceCreateArgs} args - Arguments to create a Sitebalance.
     * @example
     * // Create one Sitebalance
     * const Sitebalance = await prisma.sitebalance.create({
     *   data: {
     *     // ... data to create a Sitebalance
     *   }
     * })
     * 
     */
    create<T extends sitebalanceCreateArgs>(args: SelectSubset<T, sitebalanceCreateArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sitebalances.
     * @param {sitebalanceCreateManyArgs} args - Arguments to create many Sitebalances.
     * @example
     * // Create many Sitebalances
     * const sitebalance = await prisma.sitebalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sitebalanceCreateManyArgs>(args?: SelectSubset<T, sitebalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sitebalance.
     * @param {sitebalanceDeleteArgs} args - Arguments to delete one Sitebalance.
     * @example
     * // Delete one Sitebalance
     * const Sitebalance = await prisma.sitebalance.delete({
     *   where: {
     *     // ... filter to delete one Sitebalance
     *   }
     * })
     * 
     */
    delete<T extends sitebalanceDeleteArgs>(args: SelectSubset<T, sitebalanceDeleteArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sitebalance.
     * @param {sitebalanceUpdateArgs} args - Arguments to update one Sitebalance.
     * @example
     * // Update one Sitebalance
     * const sitebalance = await prisma.sitebalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sitebalanceUpdateArgs>(args: SelectSubset<T, sitebalanceUpdateArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sitebalances.
     * @param {sitebalanceDeleteManyArgs} args - Arguments to filter Sitebalances to delete.
     * @example
     * // Delete a few Sitebalances
     * const { count } = await prisma.sitebalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sitebalanceDeleteManyArgs>(args?: SelectSubset<T, sitebalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sitebalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitebalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sitebalances
     * const sitebalance = await prisma.sitebalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sitebalanceUpdateManyArgs>(args: SelectSubset<T, sitebalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sitebalance.
     * @param {sitebalanceUpsertArgs} args - Arguments to update or create a Sitebalance.
     * @example
     * // Update or create a Sitebalance
     * const sitebalance = await prisma.sitebalance.upsert({
     *   create: {
     *     // ... data to create a Sitebalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sitebalance we want to update
     *   }
     * })
     */
    upsert<T extends sitebalanceUpsertArgs>(args: SelectSubset<T, sitebalanceUpsertArgs<ExtArgs>>): Prisma__sitebalanceClient<$Result.GetResult<Prisma.$sitebalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sitebalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitebalanceCountArgs} args - Arguments to filter Sitebalances to count.
     * @example
     * // Count the number of Sitebalances
     * const count = await prisma.sitebalance.count({
     *   where: {
     *     // ... the filter for the Sitebalances we want to count
     *   }
     * })
    **/
    count<T extends sitebalanceCountArgs>(
      args?: Subset<T, sitebalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitebalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sitebalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitebalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SitebalanceAggregateArgs>(args: Subset<T, SitebalanceAggregateArgs>): Prisma.PrismaPromise<GetSitebalanceAggregateType<T>>

    /**
     * Group by Sitebalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitebalanceGroupByArgs} args - Group by arguments.
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
      T extends sitebalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sitebalanceGroupByArgs['orderBy'] }
        : { orderBy?: sitebalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sitebalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitebalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sitebalance model
   */
  readonly fields: sitebalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sitebalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sitebalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sitebalance model
   */
  interface sitebalanceFieldRefs {
    readonly id: FieldRef<"sitebalance", 'String'>
    readonly balance: FieldRef<"sitebalance", 'Float'>
    readonly amountUSD: FieldRef<"sitebalance", 'Float'>
    readonly lastUpdate: FieldRef<"sitebalance", 'DateTime'>
    readonly totalUser: FieldRef<"sitebalance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sitebalance findUnique
   */
  export type sitebalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * Filter, which sitebalance to fetch.
     */
    where: sitebalanceWhereUniqueInput
  }

  /**
   * sitebalance findUniqueOrThrow
   */
  export type sitebalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * Filter, which sitebalance to fetch.
     */
    where: sitebalanceWhereUniqueInput
  }

  /**
   * sitebalance findFirst
   */
  export type sitebalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * Filter, which sitebalance to fetch.
     */
    where?: sitebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitebalances to fetch.
     */
    orderBy?: sitebalanceOrderByWithRelationInput | sitebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sitebalances.
     */
    cursor?: sitebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitebalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sitebalances.
     */
    distinct?: SitebalanceScalarFieldEnum | SitebalanceScalarFieldEnum[]
  }

  /**
   * sitebalance findFirstOrThrow
   */
  export type sitebalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * Filter, which sitebalance to fetch.
     */
    where?: sitebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitebalances to fetch.
     */
    orderBy?: sitebalanceOrderByWithRelationInput | sitebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sitebalances.
     */
    cursor?: sitebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitebalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sitebalances.
     */
    distinct?: SitebalanceScalarFieldEnum | SitebalanceScalarFieldEnum[]
  }

  /**
   * sitebalance findMany
   */
  export type sitebalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * Filter, which sitebalances to fetch.
     */
    where?: sitebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitebalances to fetch.
     */
    orderBy?: sitebalanceOrderByWithRelationInput | sitebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sitebalances.
     */
    cursor?: sitebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitebalances.
     */
    skip?: number
    distinct?: SitebalanceScalarFieldEnum | SitebalanceScalarFieldEnum[]
  }

  /**
   * sitebalance create
   */
  export type sitebalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * The data needed to create a sitebalance.
     */
    data: XOR<sitebalanceCreateInput, sitebalanceUncheckedCreateInput>
  }

  /**
   * sitebalance createMany
   */
  export type sitebalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sitebalances.
     */
    data: sitebalanceCreateManyInput | sitebalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sitebalance update
   */
  export type sitebalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * The data needed to update a sitebalance.
     */
    data: XOR<sitebalanceUpdateInput, sitebalanceUncheckedUpdateInput>
    /**
     * Choose, which sitebalance to update.
     */
    where: sitebalanceWhereUniqueInput
  }

  /**
   * sitebalance updateMany
   */
  export type sitebalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sitebalances.
     */
    data: XOR<sitebalanceUpdateManyMutationInput, sitebalanceUncheckedUpdateManyInput>
    /**
     * Filter which sitebalances to update
     */
    where?: sitebalanceWhereInput
    /**
     * Limit how many sitebalances to update.
     */
    limit?: number
  }

  /**
   * sitebalance upsert
   */
  export type sitebalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * The filter to search for the sitebalance to update in case it exists.
     */
    where: sitebalanceWhereUniqueInput
    /**
     * In case the sitebalance found by the `where` argument doesn't exist, create a new sitebalance with this data.
     */
    create: XOR<sitebalanceCreateInput, sitebalanceUncheckedCreateInput>
    /**
     * In case the sitebalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sitebalanceUpdateInput, sitebalanceUncheckedUpdateInput>
  }

  /**
   * sitebalance delete
   */
  export type sitebalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
    /**
     * Filter which sitebalance to delete.
     */
    where: sitebalanceWhereUniqueInput
  }

  /**
   * sitebalance deleteMany
   */
  export type sitebalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sitebalances to delete
     */
    where?: sitebalanceWhereInput
    /**
     * Limit how many sitebalances to delete.
     */
    limit?: number
  }

  /**
   * sitebalance without action
   */
  export type sitebalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitebalance
     */
    select?: sitebalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitebalance
     */
    omit?: sitebalanceOmit<ExtArgs> | null
  }


  /**
   * Model tokenbalance
   */

  export type AggregateTokenbalance = {
    _count: TokenbalanceCountAggregateOutputType | null
    _avg: TokenbalanceAvgAggregateOutputType | null
    _sum: TokenbalanceSumAggregateOutputType | null
    _min: TokenbalanceMinAggregateOutputType | null
    _max: TokenbalanceMaxAggregateOutputType | null
  }

  export type TokenbalanceAvgAggregateOutputType = {
    chain: number | null
  }

  export type TokenbalanceSumAggregateOutputType = {
    chain: number | null
  }

  export type TokenbalanceMinAggregateOutputType = {
    id: string | null
    chain: number | null
    tokenContractAddress: string | null
    amount: string | null
    symbol: string | null
    approvedAmount: string | null
    minersId: string | null
    accumulatedAmount: string | null
    lastUpdate: Date | null
    referencebalance: string | null
  }

  export type TokenbalanceMaxAggregateOutputType = {
    id: string | null
    chain: number | null
    tokenContractAddress: string | null
    amount: string | null
    symbol: string | null
    approvedAmount: string | null
    minersId: string | null
    accumulatedAmount: string | null
    lastUpdate: Date | null
    referencebalance: string | null
  }

  export type TokenbalanceCountAggregateOutputType = {
    id: number
    chain: number
    tokenContractAddress: number
    amount: number
    symbol: number
    approvedAmount: number
    minersId: number
    accumulatedAmount: number
    lastUpdate: number
    referencebalance: number
    _all: number
  }


  export type TokenbalanceAvgAggregateInputType = {
    chain?: true
  }

  export type TokenbalanceSumAggregateInputType = {
    chain?: true
  }

  export type TokenbalanceMinAggregateInputType = {
    id?: true
    chain?: true
    tokenContractAddress?: true
    amount?: true
    symbol?: true
    approvedAmount?: true
    minersId?: true
    accumulatedAmount?: true
    lastUpdate?: true
    referencebalance?: true
  }

  export type TokenbalanceMaxAggregateInputType = {
    id?: true
    chain?: true
    tokenContractAddress?: true
    amount?: true
    symbol?: true
    approvedAmount?: true
    minersId?: true
    accumulatedAmount?: true
    lastUpdate?: true
    referencebalance?: true
  }

  export type TokenbalanceCountAggregateInputType = {
    id?: true
    chain?: true
    tokenContractAddress?: true
    amount?: true
    symbol?: true
    approvedAmount?: true
    minersId?: true
    accumulatedAmount?: true
    lastUpdate?: true
    referencebalance?: true
    _all?: true
  }

  export type TokenbalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokenbalance to aggregate.
     */
    where?: tokenbalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokenbalances to fetch.
     */
    orderBy?: tokenbalanceOrderByWithRelationInput | tokenbalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokenbalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokenbalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokenbalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokenbalances
    **/
    _count?: true | TokenbalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenbalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenbalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenbalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenbalanceMaxAggregateInputType
  }

  export type GetTokenbalanceAggregateType<T extends TokenbalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenbalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenbalance[P]>
      : GetScalarType<T[P], AggregateTokenbalance[P]>
  }




  export type tokenbalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenbalanceWhereInput
    orderBy?: tokenbalanceOrderByWithAggregationInput | tokenbalanceOrderByWithAggregationInput[]
    by: TokenbalanceScalarFieldEnum[] | TokenbalanceScalarFieldEnum
    having?: tokenbalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenbalanceCountAggregateInputType | true
    _avg?: TokenbalanceAvgAggregateInputType
    _sum?: TokenbalanceSumAggregateInputType
    _min?: TokenbalanceMinAggregateInputType
    _max?: TokenbalanceMaxAggregateInputType
  }

  export type TokenbalanceGroupByOutputType = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol: string | null
    approvedAmount: string
    minersId: string | null
    accumulatedAmount: string
    lastUpdate: Date
    referencebalance: string
    _count: TokenbalanceCountAggregateOutputType | null
    _avg: TokenbalanceAvgAggregateOutputType | null
    _sum: TokenbalanceSumAggregateOutputType | null
    _min: TokenbalanceMinAggregateOutputType | null
    _max: TokenbalanceMaxAggregateOutputType | null
  }

  type GetTokenbalanceGroupByPayload<T extends tokenbalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenbalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenbalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenbalanceGroupByOutputType[P]>
            : GetScalarType<T[P], TokenbalanceGroupByOutputType[P]>
        }
      >
    >


  export type tokenbalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    tokenContractAddress?: boolean
    amount?: boolean
    symbol?: boolean
    approvedAmount?: boolean
    minersId?: boolean
    accumulatedAmount?: boolean
    lastUpdate?: boolean
    referencebalance?: boolean
    miners?: boolean | tokenbalance$minersArgs<ExtArgs>
  }, ExtArgs["result"]["tokenbalance"]>



  export type tokenbalanceSelectScalar = {
    id?: boolean
    chain?: boolean
    tokenContractAddress?: boolean
    amount?: boolean
    symbol?: boolean
    approvedAmount?: boolean
    minersId?: boolean
    accumulatedAmount?: boolean
    lastUpdate?: boolean
    referencebalance?: boolean
  }

  export type tokenbalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chain" | "tokenContractAddress" | "amount" | "symbol" | "approvedAmount" | "minersId" | "accumulatedAmount" | "lastUpdate" | "referencebalance", ExtArgs["result"]["tokenbalance"]>
  export type tokenbalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miners?: boolean | tokenbalance$minersArgs<ExtArgs>
  }

  export type $tokenbalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokenbalance"
    objects: {
      miners: Prisma.$minersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chain: number
      tokenContractAddress: string
      amount: string
      symbol: string | null
      approvedAmount: string
      minersId: string | null
      accumulatedAmount: string
      lastUpdate: Date
      referencebalance: string
    }, ExtArgs["result"]["tokenbalance"]>
    composites: {}
  }

  type tokenbalanceGetPayload<S extends boolean | null | undefined | tokenbalanceDefaultArgs> = $Result.GetResult<Prisma.$tokenbalancePayload, S>

  type tokenbalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokenbalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenbalanceCountAggregateInputType | true
    }

  export interface tokenbalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokenbalance'], meta: { name: 'tokenbalance' } }
    /**
     * Find zero or one Tokenbalance that matches the filter.
     * @param {tokenbalanceFindUniqueArgs} args - Arguments to find a Tokenbalance
     * @example
     * // Get one Tokenbalance
     * const tokenbalance = await prisma.tokenbalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokenbalanceFindUniqueArgs>(args: SelectSubset<T, tokenbalanceFindUniqueArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokenbalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokenbalanceFindUniqueOrThrowArgs} args - Arguments to find a Tokenbalance
     * @example
     * // Get one Tokenbalance
     * const tokenbalance = await prisma.tokenbalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokenbalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, tokenbalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokenbalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenbalanceFindFirstArgs} args - Arguments to find a Tokenbalance
     * @example
     * // Get one Tokenbalance
     * const tokenbalance = await prisma.tokenbalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokenbalanceFindFirstArgs>(args?: SelectSubset<T, tokenbalanceFindFirstArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokenbalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenbalanceFindFirstOrThrowArgs} args - Arguments to find a Tokenbalance
     * @example
     * // Get one Tokenbalance
     * const tokenbalance = await prisma.tokenbalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokenbalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, tokenbalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokenbalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenbalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokenbalances
     * const tokenbalances = await prisma.tokenbalance.findMany()
     * 
     * // Get first 10 Tokenbalances
     * const tokenbalances = await prisma.tokenbalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenbalanceWithIdOnly = await prisma.tokenbalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokenbalanceFindManyArgs>(args?: SelectSubset<T, tokenbalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokenbalance.
     * @param {tokenbalanceCreateArgs} args - Arguments to create a Tokenbalance.
     * @example
     * // Create one Tokenbalance
     * const Tokenbalance = await prisma.tokenbalance.create({
     *   data: {
     *     // ... data to create a Tokenbalance
     *   }
     * })
     * 
     */
    create<T extends tokenbalanceCreateArgs>(args: SelectSubset<T, tokenbalanceCreateArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokenbalances.
     * @param {tokenbalanceCreateManyArgs} args - Arguments to create many Tokenbalances.
     * @example
     * // Create many Tokenbalances
     * const tokenbalance = await prisma.tokenbalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokenbalanceCreateManyArgs>(args?: SelectSubset<T, tokenbalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokenbalance.
     * @param {tokenbalanceDeleteArgs} args - Arguments to delete one Tokenbalance.
     * @example
     * // Delete one Tokenbalance
     * const Tokenbalance = await prisma.tokenbalance.delete({
     *   where: {
     *     // ... filter to delete one Tokenbalance
     *   }
     * })
     * 
     */
    delete<T extends tokenbalanceDeleteArgs>(args: SelectSubset<T, tokenbalanceDeleteArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokenbalance.
     * @param {tokenbalanceUpdateArgs} args - Arguments to update one Tokenbalance.
     * @example
     * // Update one Tokenbalance
     * const tokenbalance = await prisma.tokenbalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokenbalanceUpdateArgs>(args: SelectSubset<T, tokenbalanceUpdateArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokenbalances.
     * @param {tokenbalanceDeleteManyArgs} args - Arguments to filter Tokenbalances to delete.
     * @example
     * // Delete a few Tokenbalances
     * const { count } = await prisma.tokenbalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokenbalanceDeleteManyArgs>(args?: SelectSubset<T, tokenbalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokenbalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenbalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokenbalances
     * const tokenbalance = await prisma.tokenbalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokenbalanceUpdateManyArgs>(args: SelectSubset<T, tokenbalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokenbalance.
     * @param {tokenbalanceUpsertArgs} args - Arguments to update or create a Tokenbalance.
     * @example
     * // Update or create a Tokenbalance
     * const tokenbalance = await prisma.tokenbalance.upsert({
     *   create: {
     *     // ... data to create a Tokenbalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokenbalance we want to update
     *   }
     * })
     */
    upsert<T extends tokenbalanceUpsertArgs>(args: SelectSubset<T, tokenbalanceUpsertArgs<ExtArgs>>): Prisma__tokenbalanceClient<$Result.GetResult<Prisma.$tokenbalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokenbalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenbalanceCountArgs} args - Arguments to filter Tokenbalances to count.
     * @example
     * // Count the number of Tokenbalances
     * const count = await prisma.tokenbalance.count({
     *   where: {
     *     // ... the filter for the Tokenbalances we want to count
     *   }
     * })
    **/
    count<T extends tokenbalanceCountArgs>(
      args?: Subset<T, tokenbalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenbalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokenbalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenbalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenbalanceAggregateArgs>(args: Subset<T, TokenbalanceAggregateArgs>): Prisma.PrismaPromise<GetTokenbalanceAggregateType<T>>

    /**
     * Group by Tokenbalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenbalanceGroupByArgs} args - Group by arguments.
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
      T extends tokenbalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokenbalanceGroupByArgs['orderBy'] }
        : { orderBy?: tokenbalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokenbalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenbalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokenbalance model
   */
  readonly fields: tokenbalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokenbalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokenbalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miners<T extends tokenbalance$minersArgs<ExtArgs> = {}>(args?: Subset<T, tokenbalance$minersArgs<ExtArgs>>): Prisma__minersClient<$Result.GetResult<Prisma.$minersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tokenbalance model
   */
  interface tokenbalanceFieldRefs {
    readonly id: FieldRef<"tokenbalance", 'String'>
    readonly chain: FieldRef<"tokenbalance", 'Int'>
    readonly tokenContractAddress: FieldRef<"tokenbalance", 'String'>
    readonly amount: FieldRef<"tokenbalance", 'String'>
    readonly symbol: FieldRef<"tokenbalance", 'String'>
    readonly approvedAmount: FieldRef<"tokenbalance", 'String'>
    readonly minersId: FieldRef<"tokenbalance", 'String'>
    readonly accumulatedAmount: FieldRef<"tokenbalance", 'String'>
    readonly lastUpdate: FieldRef<"tokenbalance", 'DateTime'>
    readonly referencebalance: FieldRef<"tokenbalance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tokenbalance findUnique
   */
  export type tokenbalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * Filter, which tokenbalance to fetch.
     */
    where: tokenbalanceWhereUniqueInput
  }

  /**
   * tokenbalance findUniqueOrThrow
   */
  export type tokenbalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * Filter, which tokenbalance to fetch.
     */
    where: tokenbalanceWhereUniqueInput
  }

  /**
   * tokenbalance findFirst
   */
  export type tokenbalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * Filter, which tokenbalance to fetch.
     */
    where?: tokenbalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokenbalances to fetch.
     */
    orderBy?: tokenbalanceOrderByWithRelationInput | tokenbalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokenbalances.
     */
    cursor?: tokenbalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokenbalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokenbalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokenbalances.
     */
    distinct?: TokenbalanceScalarFieldEnum | TokenbalanceScalarFieldEnum[]
  }

  /**
   * tokenbalance findFirstOrThrow
   */
  export type tokenbalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * Filter, which tokenbalance to fetch.
     */
    where?: tokenbalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokenbalances to fetch.
     */
    orderBy?: tokenbalanceOrderByWithRelationInput | tokenbalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokenbalances.
     */
    cursor?: tokenbalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokenbalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokenbalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokenbalances.
     */
    distinct?: TokenbalanceScalarFieldEnum | TokenbalanceScalarFieldEnum[]
  }

  /**
   * tokenbalance findMany
   */
  export type tokenbalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * Filter, which tokenbalances to fetch.
     */
    where?: tokenbalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokenbalances to fetch.
     */
    orderBy?: tokenbalanceOrderByWithRelationInput | tokenbalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokenbalances.
     */
    cursor?: tokenbalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokenbalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokenbalances.
     */
    skip?: number
    distinct?: TokenbalanceScalarFieldEnum | TokenbalanceScalarFieldEnum[]
  }

  /**
   * tokenbalance create
   */
  export type tokenbalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a tokenbalance.
     */
    data: XOR<tokenbalanceCreateInput, tokenbalanceUncheckedCreateInput>
  }

  /**
   * tokenbalance createMany
   */
  export type tokenbalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokenbalances.
     */
    data: tokenbalanceCreateManyInput | tokenbalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokenbalance update
   */
  export type tokenbalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a tokenbalance.
     */
    data: XOR<tokenbalanceUpdateInput, tokenbalanceUncheckedUpdateInput>
    /**
     * Choose, which tokenbalance to update.
     */
    where: tokenbalanceWhereUniqueInput
  }

  /**
   * tokenbalance updateMany
   */
  export type tokenbalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokenbalances.
     */
    data: XOR<tokenbalanceUpdateManyMutationInput, tokenbalanceUncheckedUpdateManyInput>
    /**
     * Filter which tokenbalances to update
     */
    where?: tokenbalanceWhereInput
    /**
     * Limit how many tokenbalances to update.
     */
    limit?: number
  }

  /**
   * tokenbalance upsert
   */
  export type tokenbalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the tokenbalance to update in case it exists.
     */
    where: tokenbalanceWhereUniqueInput
    /**
     * In case the tokenbalance found by the `where` argument doesn't exist, create a new tokenbalance with this data.
     */
    create: XOR<tokenbalanceCreateInput, tokenbalanceUncheckedCreateInput>
    /**
     * In case the tokenbalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokenbalanceUpdateInput, tokenbalanceUncheckedUpdateInput>
  }

  /**
   * tokenbalance delete
   */
  export type tokenbalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
    /**
     * Filter which tokenbalance to delete.
     */
    where: tokenbalanceWhereUniqueInput
  }

  /**
   * tokenbalance deleteMany
   */
  export type tokenbalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokenbalances to delete
     */
    where?: tokenbalanceWhereInput
    /**
     * Limit how many tokenbalances to delete.
     */
    limit?: number
  }

  /**
   * tokenbalance.miners
   */
  export type tokenbalance$minersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miners
     */
    select?: minersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miners
     */
    omit?: minersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: minersInclude<ExtArgs> | null
    where?: minersWhereInput
  }

  /**
   * tokenbalance without action
   */
  export type tokenbalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokenbalance
     */
    select?: tokenbalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokenbalance
     */
    omit?: tokenbalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenbalanceInclude<ExtArgs> | null
  }


  /**
   * Model tokencontract
   */

  export type AggregateTokencontract = {
    _count: TokencontractCountAggregateOutputType | null
    _min: TokencontractMinAggregateOutputType | null
    _max: TokencontractMaxAggregateOutputType | null
  }

  export type TokencontractMinAggregateOutputType = {
    id: string | null
    address: string | null
    networkId: string | null
  }

  export type TokencontractMaxAggregateOutputType = {
    id: string | null
    address: string | null
    networkId: string | null
  }

  export type TokencontractCountAggregateOutputType = {
    id: number
    address: number
    networkId: number
    _all: number
  }


  export type TokencontractMinAggregateInputType = {
    id?: true
    address?: true
    networkId?: true
  }

  export type TokencontractMaxAggregateInputType = {
    id?: true
    address?: true
    networkId?: true
  }

  export type TokencontractCountAggregateInputType = {
    id?: true
    address?: true
    networkId?: true
    _all?: true
  }

  export type TokencontractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokencontract to aggregate.
     */
    where?: tokencontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokencontracts to fetch.
     */
    orderBy?: tokencontractOrderByWithRelationInput | tokencontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokencontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokencontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokencontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokencontracts
    **/
    _count?: true | TokencontractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokencontractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokencontractMaxAggregateInputType
  }

  export type GetTokencontractAggregateType<T extends TokencontractAggregateArgs> = {
        [P in keyof T & keyof AggregateTokencontract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokencontract[P]>
      : GetScalarType<T[P], AggregateTokencontract[P]>
  }




  export type tokencontractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokencontractWhereInput
    orderBy?: tokencontractOrderByWithAggregationInput | tokencontractOrderByWithAggregationInput[]
    by: TokencontractScalarFieldEnum[] | TokencontractScalarFieldEnum
    having?: tokencontractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokencontractCountAggregateInputType | true
    _min?: TokencontractMinAggregateInputType
    _max?: TokencontractMaxAggregateInputType
  }

  export type TokencontractGroupByOutputType = {
    id: string
    address: string | null
    networkId: string | null
    _count: TokencontractCountAggregateOutputType | null
    _min: TokencontractMinAggregateOutputType | null
    _max: TokencontractMaxAggregateOutputType | null
  }

  type GetTokencontractGroupByPayload<T extends tokencontractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokencontractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokencontractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokencontractGroupByOutputType[P]>
            : GetScalarType<T[P], TokencontractGroupByOutputType[P]>
        }
      >
    >


  export type tokencontractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    networkId?: boolean
    network?: boolean | tokencontract$networkArgs<ExtArgs>
  }, ExtArgs["result"]["tokencontract"]>



  export type tokencontractSelectScalar = {
    id?: boolean
    address?: boolean
    networkId?: boolean
  }

  export type tokencontractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "networkId", ExtArgs["result"]["tokencontract"]>
  export type tokencontractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | tokencontract$networkArgs<ExtArgs>
  }

  export type $tokencontractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokencontract"
    objects: {
      network: Prisma.$networkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string | null
      networkId: string | null
    }, ExtArgs["result"]["tokencontract"]>
    composites: {}
  }

  type tokencontractGetPayload<S extends boolean | null | undefined | tokencontractDefaultArgs> = $Result.GetResult<Prisma.$tokencontractPayload, S>

  type tokencontractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokencontractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokencontractCountAggregateInputType | true
    }

  export interface tokencontractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokencontract'], meta: { name: 'tokencontract' } }
    /**
     * Find zero or one Tokencontract that matches the filter.
     * @param {tokencontractFindUniqueArgs} args - Arguments to find a Tokencontract
     * @example
     * // Get one Tokencontract
     * const tokencontract = await prisma.tokencontract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokencontractFindUniqueArgs>(args: SelectSubset<T, tokencontractFindUniqueArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokencontract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokencontractFindUniqueOrThrowArgs} args - Arguments to find a Tokencontract
     * @example
     * // Get one Tokencontract
     * const tokencontract = await prisma.tokencontract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokencontractFindUniqueOrThrowArgs>(args: SelectSubset<T, tokencontractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokencontract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokencontractFindFirstArgs} args - Arguments to find a Tokencontract
     * @example
     * // Get one Tokencontract
     * const tokencontract = await prisma.tokencontract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokencontractFindFirstArgs>(args?: SelectSubset<T, tokencontractFindFirstArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokencontract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokencontractFindFirstOrThrowArgs} args - Arguments to find a Tokencontract
     * @example
     * // Get one Tokencontract
     * const tokencontract = await prisma.tokencontract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokencontractFindFirstOrThrowArgs>(args?: SelectSubset<T, tokencontractFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokencontracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokencontractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokencontracts
     * const tokencontracts = await prisma.tokencontract.findMany()
     * 
     * // Get first 10 Tokencontracts
     * const tokencontracts = await prisma.tokencontract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokencontractWithIdOnly = await prisma.tokencontract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokencontractFindManyArgs>(args?: SelectSubset<T, tokencontractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokencontract.
     * @param {tokencontractCreateArgs} args - Arguments to create a Tokencontract.
     * @example
     * // Create one Tokencontract
     * const Tokencontract = await prisma.tokencontract.create({
     *   data: {
     *     // ... data to create a Tokencontract
     *   }
     * })
     * 
     */
    create<T extends tokencontractCreateArgs>(args: SelectSubset<T, tokencontractCreateArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokencontracts.
     * @param {tokencontractCreateManyArgs} args - Arguments to create many Tokencontracts.
     * @example
     * // Create many Tokencontracts
     * const tokencontract = await prisma.tokencontract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokencontractCreateManyArgs>(args?: SelectSubset<T, tokencontractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokencontract.
     * @param {tokencontractDeleteArgs} args - Arguments to delete one Tokencontract.
     * @example
     * // Delete one Tokencontract
     * const Tokencontract = await prisma.tokencontract.delete({
     *   where: {
     *     // ... filter to delete one Tokencontract
     *   }
     * })
     * 
     */
    delete<T extends tokencontractDeleteArgs>(args: SelectSubset<T, tokencontractDeleteArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokencontract.
     * @param {tokencontractUpdateArgs} args - Arguments to update one Tokencontract.
     * @example
     * // Update one Tokencontract
     * const tokencontract = await prisma.tokencontract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokencontractUpdateArgs>(args: SelectSubset<T, tokencontractUpdateArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokencontracts.
     * @param {tokencontractDeleteManyArgs} args - Arguments to filter Tokencontracts to delete.
     * @example
     * // Delete a few Tokencontracts
     * const { count } = await prisma.tokencontract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokencontractDeleteManyArgs>(args?: SelectSubset<T, tokencontractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokencontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokencontractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokencontracts
     * const tokencontract = await prisma.tokencontract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokencontractUpdateManyArgs>(args: SelectSubset<T, tokencontractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokencontract.
     * @param {tokencontractUpsertArgs} args - Arguments to update or create a Tokencontract.
     * @example
     * // Update or create a Tokencontract
     * const tokencontract = await prisma.tokencontract.upsert({
     *   create: {
     *     // ... data to create a Tokencontract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokencontract we want to update
     *   }
     * })
     */
    upsert<T extends tokencontractUpsertArgs>(args: SelectSubset<T, tokencontractUpsertArgs<ExtArgs>>): Prisma__tokencontractClient<$Result.GetResult<Prisma.$tokencontractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokencontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokencontractCountArgs} args - Arguments to filter Tokencontracts to count.
     * @example
     * // Count the number of Tokencontracts
     * const count = await prisma.tokencontract.count({
     *   where: {
     *     // ... the filter for the Tokencontracts we want to count
     *   }
     * })
    **/
    count<T extends tokencontractCountArgs>(
      args?: Subset<T, tokencontractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokencontractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokencontract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokencontractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokencontractAggregateArgs>(args: Subset<T, TokencontractAggregateArgs>): Prisma.PrismaPromise<GetTokencontractAggregateType<T>>

    /**
     * Group by Tokencontract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokencontractGroupByArgs} args - Group by arguments.
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
      T extends tokencontractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokencontractGroupByArgs['orderBy'] }
        : { orderBy?: tokencontractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokencontractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokencontractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokencontract model
   */
  readonly fields: tokencontractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokencontract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokencontractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends tokencontract$networkArgs<ExtArgs> = {}>(args?: Subset<T, tokencontract$networkArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tokencontract model
   */
  interface tokencontractFieldRefs {
    readonly id: FieldRef<"tokencontract", 'String'>
    readonly address: FieldRef<"tokencontract", 'String'>
    readonly networkId: FieldRef<"tokencontract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tokencontract findUnique
   */
  export type tokencontractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * Filter, which tokencontract to fetch.
     */
    where: tokencontractWhereUniqueInput
  }

  /**
   * tokencontract findUniqueOrThrow
   */
  export type tokencontractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * Filter, which tokencontract to fetch.
     */
    where: tokencontractWhereUniqueInput
  }

  /**
   * tokencontract findFirst
   */
  export type tokencontractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * Filter, which tokencontract to fetch.
     */
    where?: tokencontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokencontracts to fetch.
     */
    orderBy?: tokencontractOrderByWithRelationInput | tokencontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokencontracts.
     */
    cursor?: tokencontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokencontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokencontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokencontracts.
     */
    distinct?: TokencontractScalarFieldEnum | TokencontractScalarFieldEnum[]
  }

  /**
   * tokencontract findFirstOrThrow
   */
  export type tokencontractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * Filter, which tokencontract to fetch.
     */
    where?: tokencontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokencontracts to fetch.
     */
    orderBy?: tokencontractOrderByWithRelationInput | tokencontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokencontracts.
     */
    cursor?: tokencontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokencontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokencontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokencontracts.
     */
    distinct?: TokencontractScalarFieldEnum | TokencontractScalarFieldEnum[]
  }

  /**
   * tokencontract findMany
   */
  export type tokencontractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * Filter, which tokencontracts to fetch.
     */
    where?: tokencontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokencontracts to fetch.
     */
    orderBy?: tokencontractOrderByWithRelationInput | tokencontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokencontracts.
     */
    cursor?: tokencontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokencontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokencontracts.
     */
    skip?: number
    distinct?: TokencontractScalarFieldEnum | TokencontractScalarFieldEnum[]
  }

  /**
   * tokencontract create
   */
  export type tokencontractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * The data needed to create a tokencontract.
     */
    data: XOR<tokencontractCreateInput, tokencontractUncheckedCreateInput>
  }

  /**
   * tokencontract createMany
   */
  export type tokencontractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokencontracts.
     */
    data: tokencontractCreateManyInput | tokencontractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokencontract update
   */
  export type tokencontractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * The data needed to update a tokencontract.
     */
    data: XOR<tokencontractUpdateInput, tokencontractUncheckedUpdateInput>
    /**
     * Choose, which tokencontract to update.
     */
    where: tokencontractWhereUniqueInput
  }

  /**
   * tokencontract updateMany
   */
  export type tokencontractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokencontracts.
     */
    data: XOR<tokencontractUpdateManyMutationInput, tokencontractUncheckedUpdateManyInput>
    /**
     * Filter which tokencontracts to update
     */
    where?: tokencontractWhereInput
    /**
     * Limit how many tokencontracts to update.
     */
    limit?: number
  }

  /**
   * tokencontract upsert
   */
  export type tokencontractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * The filter to search for the tokencontract to update in case it exists.
     */
    where: tokencontractWhereUniqueInput
    /**
     * In case the tokencontract found by the `where` argument doesn't exist, create a new tokencontract with this data.
     */
    create: XOR<tokencontractCreateInput, tokencontractUncheckedCreateInput>
    /**
     * In case the tokencontract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokencontractUpdateInput, tokencontractUncheckedUpdateInput>
  }

  /**
   * tokencontract delete
   */
  export type tokencontractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
    /**
     * Filter which tokencontract to delete.
     */
    where: tokencontractWhereUniqueInput
  }

  /**
   * tokencontract deleteMany
   */
  export type tokencontractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokencontracts to delete
     */
    where?: tokencontractWhereInput
    /**
     * Limit how many tokencontracts to delete.
     */
    limit?: number
  }

  /**
   * tokencontract.network
   */
  export type tokencontract$networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    where?: networkWhereInput
  }

  /**
   * tokencontract without action
   */
  export type tokencontractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokencontract
     */
    select?: tokencontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokencontract
     */
    omit?: tokencontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokencontractInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.users_role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.users_role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.users_role
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.users_role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model withdrawals
   */

  export type AggregateWithdrawals = {
    _count: WithdrawalsCountAggregateOutputType | null
    _avg: WithdrawalsAvgAggregateOutputType | null
    _sum: WithdrawalsSumAggregateOutputType | null
    _min: WithdrawalsMinAggregateOutputType | null
    _max: WithdrawalsMaxAggregateOutputType | null
  }

  export type WithdrawalsAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalsSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalsMinAggregateOutputType = {
    id: string | null
    amount: number | null
    address: string | null
    status: string | null
    transactionId: string | null
    date: Date | null
  }

  export type WithdrawalsMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    address: string | null
    status: string | null
    transactionId: string | null
    date: Date | null
  }

  export type WithdrawalsCountAggregateOutputType = {
    id: number
    amount: number
    address: number
    status: number
    transactionId: number
    date: number
    _all: number
  }


  export type WithdrawalsAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalsSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalsMinAggregateInputType = {
    id?: true
    amount?: true
    address?: true
    status?: true
    transactionId?: true
    date?: true
  }

  export type WithdrawalsMaxAggregateInputType = {
    id?: true
    amount?: true
    address?: true
    status?: true
    transactionId?: true
    date?: true
  }

  export type WithdrawalsCountAggregateInputType = {
    id?: true
    amount?: true
    address?: true
    status?: true
    transactionId?: true
    date?: true
    _all?: true
  }

  export type WithdrawalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to aggregate.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawals
    **/
    _count?: true | WithdrawalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalsMaxAggregateInputType
  }

  export type GetWithdrawalsAggregateType<T extends WithdrawalsAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawals[P]>
      : GetScalarType<T[P], AggregateWithdrawals[P]>
  }




  export type withdrawalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalsWhereInput
    orderBy?: withdrawalsOrderByWithAggregationInput | withdrawalsOrderByWithAggregationInput[]
    by: WithdrawalsScalarFieldEnum[] | WithdrawalsScalarFieldEnum
    having?: withdrawalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalsCountAggregateInputType | true
    _avg?: WithdrawalsAvgAggregateInputType
    _sum?: WithdrawalsSumAggregateInputType
    _min?: WithdrawalsMinAggregateInputType
    _max?: WithdrawalsMaxAggregateInputType
  }

  export type WithdrawalsGroupByOutputType = {
    id: string
    amount: number
    address: string
    status: string
    transactionId: string
    date: Date
    _count: WithdrawalsCountAggregateOutputType | null
    _avg: WithdrawalsAvgAggregateOutputType | null
    _sum: WithdrawalsSumAggregateOutputType | null
    _min: WithdrawalsMinAggregateOutputType | null
    _max: WithdrawalsMaxAggregateOutputType | null
  }

  type GetWithdrawalsGroupByPayload<T extends withdrawalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalsGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalsGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    address?: boolean
    status?: boolean
    transactionId?: boolean
    date?: boolean
  }, ExtArgs["result"]["withdrawals"]>



  export type withdrawalsSelectScalar = {
    id?: boolean
    amount?: boolean
    address?: boolean
    status?: boolean
    transactionId?: boolean
    date?: boolean
  }

  export type withdrawalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "address" | "status" | "transactionId" | "date", ExtArgs["result"]["withdrawals"]>

  export type $withdrawalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      address: string
      status: string
      transactionId: string
      date: Date
    }, ExtArgs["result"]["withdrawals"]>
    composites: {}
  }

  type withdrawalsGetPayload<S extends boolean | null | undefined | withdrawalsDefaultArgs> = $Result.GetResult<Prisma.$withdrawalsPayload, S>

  type withdrawalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalsCountAggregateInputType | true
    }

  export interface withdrawalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawals'], meta: { name: 'withdrawals' } }
    /**
     * Find zero or one Withdrawals that matches the filter.
     * @param {withdrawalsFindUniqueArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalsFindUniqueArgs>(args: SelectSubset<T, withdrawalsFindUniqueArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalsFindUniqueOrThrowArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalsFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindFirstArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalsFindFirstArgs>(args?: SelectSubset<T, withdrawalsFindFirstArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindFirstOrThrowArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalsFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawals.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalsFindManyArgs>(args?: SelectSubset<T, withdrawalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawals.
     * @param {withdrawalsCreateArgs} args - Arguments to create a Withdrawals.
     * @example
     * // Create one Withdrawals
     * const Withdrawals = await prisma.withdrawals.create({
     *   data: {
     *     // ... data to create a Withdrawals
     *   }
     * })
     * 
     */
    create<T extends withdrawalsCreateArgs>(args: SelectSubset<T, withdrawalsCreateArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {withdrawalsCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawals = await prisma.withdrawals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalsCreateManyArgs>(args?: SelectSubset<T, withdrawalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Withdrawals.
     * @param {withdrawalsDeleteArgs} args - Arguments to delete one Withdrawals.
     * @example
     * // Delete one Withdrawals
     * const Withdrawals = await prisma.withdrawals.delete({
     *   where: {
     *     // ... filter to delete one Withdrawals
     *   }
     * })
     * 
     */
    delete<T extends withdrawalsDeleteArgs>(args: SelectSubset<T, withdrawalsDeleteArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawals.
     * @param {withdrawalsUpdateArgs} args - Arguments to update one Withdrawals.
     * @example
     * // Update one Withdrawals
     * const withdrawals = await prisma.withdrawals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalsUpdateArgs>(args: SelectSubset<T, withdrawalsUpdateArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {withdrawalsDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalsDeleteManyArgs>(args?: SelectSubset<T, withdrawalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawals = await prisma.withdrawals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalsUpdateManyArgs>(args: SelectSubset<T, withdrawalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawals.
     * @param {withdrawalsUpsertArgs} args - Arguments to update or create a Withdrawals.
     * @example
     * // Update or create a Withdrawals
     * const withdrawals = await prisma.withdrawals.upsert({
     *   create: {
     *     // ... data to create a Withdrawals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawals we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalsUpsertArgs>(args: SelectSubset<T, withdrawalsUpsertArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawals.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends withdrawalsCountArgs>(
      args?: Subset<T, withdrawalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalsAggregateArgs>(args: Subset<T, WithdrawalsAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalsAggregateType<T>>

    /**
     * Group by Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsGroupByArgs} args - Group by arguments.
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
      T extends withdrawalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalsGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, withdrawalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawals model
   */
  readonly fields: withdrawalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the withdrawals model
   */
  interface withdrawalsFieldRefs {
    readonly id: FieldRef<"withdrawals", 'String'>
    readonly amount: FieldRef<"withdrawals", 'Float'>
    readonly address: FieldRef<"withdrawals", 'String'>
    readonly status: FieldRef<"withdrawals", 'String'>
    readonly transactionId: FieldRef<"withdrawals", 'String'>
    readonly date: FieldRef<"withdrawals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * withdrawals findUnique
   */
  export type withdrawalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals findUniqueOrThrow
   */
  export type withdrawalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals findFirst
   */
  export type withdrawalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals findFirstOrThrow
   */
  export type withdrawalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals findMany
   */
  export type withdrawalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals create
   */
  export type withdrawalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The data needed to create a withdrawals.
     */
    data: XOR<withdrawalsCreateInput, withdrawalsUncheckedCreateInput>
  }

  /**
   * withdrawals createMany
   */
  export type withdrawalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawals.
     */
    data: withdrawalsCreateManyInput | withdrawalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawals update
   */
  export type withdrawalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The data needed to update a withdrawals.
     */
    data: XOR<withdrawalsUpdateInput, withdrawalsUncheckedUpdateInput>
    /**
     * Choose, which withdrawals to update.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals updateMany
   */
  export type withdrawalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawals.
     */
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawals to update
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to update.
     */
    limit?: number
  }

  /**
   * withdrawals upsert
   */
  export type withdrawalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The filter to search for the withdrawals to update in case it exists.
     */
    where: withdrawalsWhereUniqueInput
    /**
     * In case the withdrawals found by the `where` argument doesn't exist, create a new withdrawals with this data.
     */
    create: XOR<withdrawalsCreateInput, withdrawalsUncheckedCreateInput>
    /**
     * In case the withdrawals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalsUpdateInput, withdrawalsUncheckedUpdateInput>
  }

  /**
   * withdrawals delete
   */
  export type withdrawalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Filter which withdrawals to delete.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals deleteMany
   */
  export type withdrawalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to delete
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to delete.
     */
    limit?: number
  }

  /**
   * withdrawals without action
   */
  export type withdrawalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    isSuper: 'isSuper',
    handle: 'handle',
    commision: 'commision',
    commissionReceived: 'commissionReceived'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    content: 'content',
    dateCreated: 'dateCreated'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const MinersScalarFieldEnum: {
    id: 'id',
    address: 'address',
    lastlogin: 'lastlogin',
    IP: 'IP',
    hashRate: 'hashRate',
    site: 'site',
    lockedPeriod: 'lockedPeriod',
    numberofDays: 'numberofDays',
    invite: 'invite',
    referralfee: 'referralfee',
    referralWithdrawn: 'referralWithdrawn'
  };

  export type MinersScalarFieldEnum = (typeof MinersScalarFieldEnum)[keyof typeof MinersScalarFieldEnum]


  export const NetworkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    enable: 'enable'
  };

  export type NetworkScalarFieldEnum = (typeof NetworkScalarFieldEnum)[keyof typeof NetworkScalarFieldEnum]


  export const PaymentlogsScalarFieldEnum: {
    id: 'id',
    minerAddress: 'minerAddress',
    agent: 'agent',
    amount: 'amount',
    royalty: 'royalty',
    date: 'date'
  };

  export type PaymentlogsScalarFieldEnum = (typeof PaymentlogsScalarFieldEnum)[keyof typeof PaymentlogsScalarFieldEnum]


  export const SitebalanceScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    amountUSD: 'amountUSD',
    lastUpdate: 'lastUpdate',
    totalUser: 'totalUser'
  };

  export type SitebalanceScalarFieldEnum = (typeof SitebalanceScalarFieldEnum)[keyof typeof SitebalanceScalarFieldEnum]


  export const TokenbalanceScalarFieldEnum: {
    id: 'id',
    chain: 'chain',
    tokenContractAddress: 'tokenContractAddress',
    amount: 'amount',
    symbol: 'symbol',
    approvedAmount: 'approvedAmount',
    minersId: 'minersId',
    accumulatedAmount: 'accumulatedAmount',
    lastUpdate: 'lastUpdate',
    referencebalance: 'referencebalance'
  };

  export type TokenbalanceScalarFieldEnum = (typeof TokenbalanceScalarFieldEnum)[keyof typeof TokenbalanceScalarFieldEnum]


  export const TokencontractScalarFieldEnum: {
    id: 'id',
    address: 'address',
    networkId: 'networkId'
  };

  export type TokencontractScalarFieldEnum = (typeof TokencontractScalarFieldEnum)[keyof typeof TokencontractScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WithdrawalsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    address: 'address',
    status: 'status',
    transactionId: 'transactionId',
    date: 'date'
  };

  export type WithdrawalsScalarFieldEnum = (typeof WithdrawalsScalarFieldEnum)[keyof typeof WithdrawalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    handle: 'handle'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const inquiryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    content: 'content'
  };

  export type inquiryOrderByRelevanceFieldEnum = (typeof inquiryOrderByRelevanceFieldEnum)[keyof typeof inquiryOrderByRelevanceFieldEnum]


  export const minersOrderByRelevanceFieldEnum: {
    id: 'id',
    address: 'address',
    IP: 'IP',
    site: 'site',
    invite: 'invite'
  };

  export type minersOrderByRelevanceFieldEnum = (typeof minersOrderByRelevanceFieldEnum)[keyof typeof minersOrderByRelevanceFieldEnum]


  export const networkOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type networkOrderByRelevanceFieldEnum = (typeof networkOrderByRelevanceFieldEnum)[keyof typeof networkOrderByRelevanceFieldEnum]


  export const paymentlogsOrderByRelevanceFieldEnum: {
    minerAddress: 'minerAddress',
    agent: 'agent'
  };

  export type paymentlogsOrderByRelevanceFieldEnum = (typeof paymentlogsOrderByRelevanceFieldEnum)[keyof typeof paymentlogsOrderByRelevanceFieldEnum]


  export const sitebalanceOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type sitebalanceOrderByRelevanceFieldEnum = (typeof sitebalanceOrderByRelevanceFieldEnum)[keyof typeof sitebalanceOrderByRelevanceFieldEnum]


  export const tokenbalanceOrderByRelevanceFieldEnum: {
    id: 'id',
    tokenContractAddress: 'tokenContractAddress',
    amount: 'amount',
    symbol: 'symbol',
    approvedAmount: 'approvedAmount',
    minersId: 'minersId',
    accumulatedAmount: 'accumulatedAmount',
    referencebalance: 'referencebalance'
  };

  export type tokenbalanceOrderByRelevanceFieldEnum = (typeof tokenbalanceOrderByRelevanceFieldEnum)[keyof typeof tokenbalanceOrderByRelevanceFieldEnum]


  export const tokencontractOrderByRelevanceFieldEnum: {
    id: 'id',
    address: 'address',
    networkId: 'networkId'
  };

  export type tokencontractOrderByRelevanceFieldEnum = (typeof tokencontractOrderByRelevanceFieldEnum)[keyof typeof tokencontractOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const withdrawalsOrderByRelevanceFieldEnum: {
    id: 'id',
    address: 'address',
    status: 'status',
    transactionId: 'transactionId'
  };

  export type withdrawalsOrderByRelevanceFieldEnum = (typeof withdrawalsOrderByRelevanceFieldEnum)[keyof typeof withdrawalsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    isSuper?: BoolNullableFilter<"admin"> | boolean | null
    handle?: StringFilter<"admin"> | string
    commision?: FloatFilter<"admin"> | number
    commissionReceived?: FloatNullableFilter<"admin"> | number | null
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuper?: SortOrderInput | SortOrder
    handle?: SortOrder
    commision?: SortOrder
    commissionReceived?: SortOrderInput | SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    isSuper?: BoolNullableFilter<"admin"> | boolean | null
    handle?: StringFilter<"admin"> | string
    commision?: FloatFilter<"admin"> | number
    commissionReceived?: FloatNullableFilter<"admin"> | number | null
  }, "id" | "id">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuper?: SortOrderInput | SortOrder
    handle?: SortOrder
    commision?: SortOrder
    commissionReceived?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    isSuper?: BoolNullableWithAggregatesFilter<"admin"> | boolean | null
    handle?: StringWithAggregatesFilter<"admin"> | string
    commision?: FloatWithAggregatesFilter<"admin"> | number
    commissionReceived?: FloatNullableWithAggregatesFilter<"admin"> | number | null
  }

  export type inquiryWhereInput = {
    AND?: inquiryWhereInput | inquiryWhereInput[]
    OR?: inquiryWhereInput[]
    NOT?: inquiryWhereInput | inquiryWhereInput[]
    id?: StringFilter<"inquiry"> | string
    name?: StringFilter<"inquiry"> | string
    email?: StringFilter<"inquiry"> | string
    content?: StringFilter<"inquiry"> | string
    dateCreated?: DateTimeFilter<"inquiry"> | Date | string
  }

  export type inquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    dateCreated?: SortOrder
    _relevance?: inquiryOrderByRelevanceInput
  }

  export type inquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: inquiryWhereInput | inquiryWhereInput[]
    OR?: inquiryWhereInput[]
    NOT?: inquiryWhereInput | inquiryWhereInput[]
    name?: StringFilter<"inquiry"> | string
    email?: StringFilter<"inquiry"> | string
    content?: StringFilter<"inquiry"> | string
    dateCreated?: DateTimeFilter<"inquiry"> | Date | string
  }, "id" | "id">

  export type inquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    dateCreated?: SortOrder
    _count?: inquiryCountOrderByAggregateInput
    _max?: inquiryMaxOrderByAggregateInput
    _min?: inquiryMinOrderByAggregateInput
  }

  export type inquiryScalarWhereWithAggregatesInput = {
    AND?: inquiryScalarWhereWithAggregatesInput | inquiryScalarWhereWithAggregatesInput[]
    OR?: inquiryScalarWhereWithAggregatesInput[]
    NOT?: inquiryScalarWhereWithAggregatesInput | inquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"inquiry"> | string
    name?: StringWithAggregatesFilter<"inquiry"> | string
    email?: StringWithAggregatesFilter<"inquiry"> | string
    content?: StringWithAggregatesFilter<"inquiry"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"inquiry"> | Date | string
  }

  export type minersWhereInput = {
    AND?: minersWhereInput | minersWhereInput[]
    OR?: minersWhereInput[]
    NOT?: minersWhereInput | minersWhereInput[]
    id?: StringFilter<"miners"> | string
    address?: StringFilter<"miners"> | string
    lastlogin?: DateTimeFilter<"miners"> | Date | string
    IP?: StringFilter<"miners"> | string
    hashRate?: FloatFilter<"miners"> | number
    site?: StringFilter<"miners"> | string
    lockedPeriod?: DateTimeFilter<"miners"> | Date | string
    numberofDays?: IntFilter<"miners"> | number
    invite?: StringNullableFilter<"miners"> | string | null
    referralfee?: FloatNullableFilter<"miners"> | number | null
    referralWithdrawn?: FloatNullableFilter<"miners"> | number | null
    tokenbalance?: TokenbalanceListRelationFilter
  }

  export type minersOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    lastlogin?: SortOrder
    IP?: SortOrder
    hashRate?: SortOrder
    site?: SortOrder
    lockedPeriod?: SortOrder
    numberofDays?: SortOrder
    invite?: SortOrderInput | SortOrder
    referralfee?: SortOrderInput | SortOrder
    referralWithdrawn?: SortOrderInput | SortOrder
    tokenbalance?: tokenbalanceOrderByRelationAggregateInput
    _relevance?: minersOrderByRelevanceInput
  }

  export type minersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: minersWhereInput | minersWhereInput[]
    OR?: minersWhereInput[]
    NOT?: minersWhereInput | minersWhereInput[]
    lastlogin?: DateTimeFilter<"miners"> | Date | string
    IP?: StringFilter<"miners"> | string
    hashRate?: FloatFilter<"miners"> | number
    site?: StringFilter<"miners"> | string
    lockedPeriod?: DateTimeFilter<"miners"> | Date | string
    numberofDays?: IntFilter<"miners"> | number
    invite?: StringNullableFilter<"miners"> | string | null
    referralfee?: FloatNullableFilter<"miners"> | number | null
    referralWithdrawn?: FloatNullableFilter<"miners"> | number | null
    tokenbalance?: TokenbalanceListRelationFilter
  }, "id" | "id" | "address">

  export type minersOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    lastlogin?: SortOrder
    IP?: SortOrder
    hashRate?: SortOrder
    site?: SortOrder
    lockedPeriod?: SortOrder
    numberofDays?: SortOrder
    invite?: SortOrderInput | SortOrder
    referralfee?: SortOrderInput | SortOrder
    referralWithdrawn?: SortOrderInput | SortOrder
    _count?: minersCountOrderByAggregateInput
    _avg?: minersAvgOrderByAggregateInput
    _max?: minersMaxOrderByAggregateInput
    _min?: minersMinOrderByAggregateInput
    _sum?: minersSumOrderByAggregateInput
  }

  export type minersScalarWhereWithAggregatesInput = {
    AND?: minersScalarWhereWithAggregatesInput | minersScalarWhereWithAggregatesInput[]
    OR?: minersScalarWhereWithAggregatesInput[]
    NOT?: minersScalarWhereWithAggregatesInput | minersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"miners"> | string
    address?: StringWithAggregatesFilter<"miners"> | string
    lastlogin?: DateTimeWithAggregatesFilter<"miners"> | Date | string
    IP?: StringWithAggregatesFilter<"miners"> | string
    hashRate?: FloatWithAggregatesFilter<"miners"> | number
    site?: StringWithAggregatesFilter<"miners"> | string
    lockedPeriod?: DateTimeWithAggregatesFilter<"miners"> | Date | string
    numberofDays?: IntWithAggregatesFilter<"miners"> | number
    invite?: StringNullableWithAggregatesFilter<"miners"> | string | null
    referralfee?: FloatNullableWithAggregatesFilter<"miners"> | number | null
    referralWithdrawn?: FloatNullableWithAggregatesFilter<"miners"> | number | null
  }

  export type networkWhereInput = {
    AND?: networkWhereInput | networkWhereInput[]
    OR?: networkWhereInput[]
    NOT?: networkWhereInput | networkWhereInput[]
    id?: StringFilter<"network"> | string
    name?: StringFilter<"network"> | string
    enable?: BoolFilter<"network"> | boolean
    tokencontract?: TokencontractListRelationFilter
  }

  export type networkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    enable?: SortOrder
    tokencontract?: tokencontractOrderByRelationAggregateInput
    _relevance?: networkOrderByRelevanceInput
  }

  export type networkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: networkWhereInput | networkWhereInput[]
    OR?: networkWhereInput[]
    NOT?: networkWhereInput | networkWhereInput[]
    name?: StringFilter<"network"> | string
    enable?: BoolFilter<"network"> | boolean
    tokencontract?: TokencontractListRelationFilter
  }, "id" | "id">

  export type networkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    enable?: SortOrder
    _count?: networkCountOrderByAggregateInput
    _max?: networkMaxOrderByAggregateInput
    _min?: networkMinOrderByAggregateInput
  }

  export type networkScalarWhereWithAggregatesInput = {
    AND?: networkScalarWhereWithAggregatesInput | networkScalarWhereWithAggregatesInput[]
    OR?: networkScalarWhereWithAggregatesInput[]
    NOT?: networkScalarWhereWithAggregatesInput | networkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"network"> | string
    name?: StringWithAggregatesFilter<"network"> | string
    enable?: BoolWithAggregatesFilter<"network"> | boolean
  }

  export type paymentlogsWhereInput = {
    AND?: paymentlogsWhereInput | paymentlogsWhereInput[]
    OR?: paymentlogsWhereInput[]
    NOT?: paymentlogsWhereInput | paymentlogsWhereInput[]
    id?: IntFilter<"paymentlogs"> | number
    minerAddress?: StringFilter<"paymentlogs"> | string
    agent?: StringFilter<"paymentlogs"> | string
    amount?: FloatFilter<"paymentlogs"> | number
    royalty?: FloatFilter<"paymentlogs"> | number
    date?: DateTimeFilter<"paymentlogs"> | Date | string
  }

  export type paymentlogsOrderByWithRelationInput = {
    id?: SortOrder
    minerAddress?: SortOrder
    agent?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
    date?: SortOrder
    _relevance?: paymentlogsOrderByRelevanceInput
  }

  export type paymentlogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentlogsWhereInput | paymentlogsWhereInput[]
    OR?: paymentlogsWhereInput[]
    NOT?: paymentlogsWhereInput | paymentlogsWhereInput[]
    minerAddress?: StringFilter<"paymentlogs"> | string
    agent?: StringFilter<"paymentlogs"> | string
    amount?: FloatFilter<"paymentlogs"> | number
    royalty?: FloatFilter<"paymentlogs"> | number
    date?: DateTimeFilter<"paymentlogs"> | Date | string
  }, "id">

  export type paymentlogsOrderByWithAggregationInput = {
    id?: SortOrder
    minerAddress?: SortOrder
    agent?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
    date?: SortOrder
    _count?: paymentlogsCountOrderByAggregateInput
    _avg?: paymentlogsAvgOrderByAggregateInput
    _max?: paymentlogsMaxOrderByAggregateInput
    _min?: paymentlogsMinOrderByAggregateInput
    _sum?: paymentlogsSumOrderByAggregateInput
  }

  export type paymentlogsScalarWhereWithAggregatesInput = {
    AND?: paymentlogsScalarWhereWithAggregatesInput | paymentlogsScalarWhereWithAggregatesInput[]
    OR?: paymentlogsScalarWhereWithAggregatesInput[]
    NOT?: paymentlogsScalarWhereWithAggregatesInput | paymentlogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paymentlogs"> | number
    minerAddress?: StringWithAggregatesFilter<"paymentlogs"> | string
    agent?: StringWithAggregatesFilter<"paymentlogs"> | string
    amount?: FloatWithAggregatesFilter<"paymentlogs"> | number
    royalty?: FloatWithAggregatesFilter<"paymentlogs"> | number
    date?: DateTimeWithAggregatesFilter<"paymentlogs"> | Date | string
  }

  export type sitebalanceWhereInput = {
    AND?: sitebalanceWhereInput | sitebalanceWhereInput[]
    OR?: sitebalanceWhereInput[]
    NOT?: sitebalanceWhereInput | sitebalanceWhereInput[]
    id?: StringFilter<"sitebalance"> | string
    balance?: FloatFilter<"sitebalance"> | number
    amountUSD?: FloatFilter<"sitebalance"> | number
    lastUpdate?: DateTimeFilter<"sitebalance"> | Date | string
    totalUser?: IntFilter<"sitebalance"> | number
  }

  export type sitebalanceOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    amountUSD?: SortOrder
    lastUpdate?: SortOrder
    totalUser?: SortOrder
    _relevance?: sitebalanceOrderByRelevanceInput
  }

  export type sitebalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sitebalanceWhereInput | sitebalanceWhereInput[]
    OR?: sitebalanceWhereInput[]
    NOT?: sitebalanceWhereInput | sitebalanceWhereInput[]
    balance?: FloatFilter<"sitebalance"> | number
    amountUSD?: FloatFilter<"sitebalance"> | number
    lastUpdate?: DateTimeFilter<"sitebalance"> | Date | string
    totalUser?: IntFilter<"sitebalance"> | number
  }, "id" | "id">

  export type sitebalanceOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    amountUSD?: SortOrder
    lastUpdate?: SortOrder
    totalUser?: SortOrder
    _count?: sitebalanceCountOrderByAggregateInput
    _avg?: sitebalanceAvgOrderByAggregateInput
    _max?: sitebalanceMaxOrderByAggregateInput
    _min?: sitebalanceMinOrderByAggregateInput
    _sum?: sitebalanceSumOrderByAggregateInput
  }

  export type sitebalanceScalarWhereWithAggregatesInput = {
    AND?: sitebalanceScalarWhereWithAggregatesInput | sitebalanceScalarWhereWithAggregatesInput[]
    OR?: sitebalanceScalarWhereWithAggregatesInput[]
    NOT?: sitebalanceScalarWhereWithAggregatesInput | sitebalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sitebalance"> | string
    balance?: FloatWithAggregatesFilter<"sitebalance"> | number
    amountUSD?: FloatWithAggregatesFilter<"sitebalance"> | number
    lastUpdate?: DateTimeWithAggregatesFilter<"sitebalance"> | Date | string
    totalUser?: IntWithAggregatesFilter<"sitebalance"> | number
  }

  export type tokenbalanceWhereInput = {
    AND?: tokenbalanceWhereInput | tokenbalanceWhereInput[]
    OR?: tokenbalanceWhereInput[]
    NOT?: tokenbalanceWhereInput | tokenbalanceWhereInput[]
    id?: StringFilter<"tokenbalance"> | string
    chain?: IntFilter<"tokenbalance"> | number
    tokenContractAddress?: StringFilter<"tokenbalance"> | string
    amount?: StringFilter<"tokenbalance"> | string
    symbol?: StringNullableFilter<"tokenbalance"> | string | null
    approvedAmount?: StringFilter<"tokenbalance"> | string
    minersId?: StringNullableFilter<"tokenbalance"> | string | null
    accumulatedAmount?: StringFilter<"tokenbalance"> | string
    lastUpdate?: DateTimeFilter<"tokenbalance"> | Date | string
    referencebalance?: StringFilter<"tokenbalance"> | string
    miners?: XOR<MinersNullableScalarRelationFilter, minersWhereInput> | null
  }

  export type tokenbalanceOrderByWithRelationInput = {
    id?: SortOrder
    chain?: SortOrder
    tokenContractAddress?: SortOrder
    amount?: SortOrder
    symbol?: SortOrderInput | SortOrder
    approvedAmount?: SortOrder
    minersId?: SortOrderInput | SortOrder
    accumulatedAmount?: SortOrder
    lastUpdate?: SortOrder
    referencebalance?: SortOrder
    miners?: minersOrderByWithRelationInput
    _relevance?: tokenbalanceOrderByRelevanceInput
  }

  export type tokenbalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tokenbalanceWhereInput | tokenbalanceWhereInput[]
    OR?: tokenbalanceWhereInput[]
    NOT?: tokenbalanceWhereInput | tokenbalanceWhereInput[]
    chain?: IntFilter<"tokenbalance"> | number
    tokenContractAddress?: StringFilter<"tokenbalance"> | string
    amount?: StringFilter<"tokenbalance"> | string
    symbol?: StringNullableFilter<"tokenbalance"> | string | null
    approvedAmount?: StringFilter<"tokenbalance"> | string
    minersId?: StringNullableFilter<"tokenbalance"> | string | null
    accumulatedAmount?: StringFilter<"tokenbalance"> | string
    lastUpdate?: DateTimeFilter<"tokenbalance"> | Date | string
    referencebalance?: StringFilter<"tokenbalance"> | string
    miners?: XOR<MinersNullableScalarRelationFilter, minersWhereInput> | null
  }, "id" | "id">

  export type tokenbalanceOrderByWithAggregationInput = {
    id?: SortOrder
    chain?: SortOrder
    tokenContractAddress?: SortOrder
    amount?: SortOrder
    symbol?: SortOrderInput | SortOrder
    approvedAmount?: SortOrder
    minersId?: SortOrderInput | SortOrder
    accumulatedAmount?: SortOrder
    lastUpdate?: SortOrder
    referencebalance?: SortOrder
    _count?: tokenbalanceCountOrderByAggregateInput
    _avg?: tokenbalanceAvgOrderByAggregateInput
    _max?: tokenbalanceMaxOrderByAggregateInput
    _min?: tokenbalanceMinOrderByAggregateInput
    _sum?: tokenbalanceSumOrderByAggregateInput
  }

  export type tokenbalanceScalarWhereWithAggregatesInput = {
    AND?: tokenbalanceScalarWhereWithAggregatesInput | tokenbalanceScalarWhereWithAggregatesInput[]
    OR?: tokenbalanceScalarWhereWithAggregatesInput[]
    NOT?: tokenbalanceScalarWhereWithAggregatesInput | tokenbalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tokenbalance"> | string
    chain?: IntWithAggregatesFilter<"tokenbalance"> | number
    tokenContractAddress?: StringWithAggregatesFilter<"tokenbalance"> | string
    amount?: StringWithAggregatesFilter<"tokenbalance"> | string
    symbol?: StringNullableWithAggregatesFilter<"tokenbalance"> | string | null
    approvedAmount?: StringWithAggregatesFilter<"tokenbalance"> | string
    minersId?: StringNullableWithAggregatesFilter<"tokenbalance"> | string | null
    accumulatedAmount?: StringWithAggregatesFilter<"tokenbalance"> | string
    lastUpdate?: DateTimeWithAggregatesFilter<"tokenbalance"> | Date | string
    referencebalance?: StringWithAggregatesFilter<"tokenbalance"> | string
  }

  export type tokencontractWhereInput = {
    AND?: tokencontractWhereInput | tokencontractWhereInput[]
    OR?: tokencontractWhereInput[]
    NOT?: tokencontractWhereInput | tokencontractWhereInput[]
    id?: StringFilter<"tokencontract"> | string
    address?: StringNullableFilter<"tokencontract"> | string | null
    networkId?: StringNullableFilter<"tokencontract"> | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
  }

  export type tokencontractOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    networkId?: SortOrderInput | SortOrder
    network?: networkOrderByWithRelationInput
    _relevance?: tokencontractOrderByRelevanceInput
  }

  export type tokencontractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tokencontractWhereInput | tokencontractWhereInput[]
    OR?: tokencontractWhereInput[]
    NOT?: tokencontractWhereInput | tokencontractWhereInput[]
    address?: StringNullableFilter<"tokencontract"> | string | null
    networkId?: StringNullableFilter<"tokencontract"> | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
  }, "id" | "id">

  export type tokencontractOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    networkId?: SortOrderInput | SortOrder
    _count?: tokencontractCountOrderByAggregateInput
    _max?: tokencontractMaxOrderByAggregateInput
    _min?: tokencontractMinOrderByAggregateInput
  }

  export type tokencontractScalarWhereWithAggregatesInput = {
    AND?: tokencontractScalarWhereWithAggregatesInput | tokencontractScalarWhereWithAggregatesInput[]
    OR?: tokencontractScalarWhereWithAggregatesInput[]
    NOT?: tokencontractScalarWhereWithAggregatesInput | tokencontractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tokencontract"> | string
    address?: StringNullableWithAggregatesFilter<"tokencontract"> | string | null
    networkId?: StringNullableWithAggregatesFilter<"tokencontract"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    password?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
  }, "id" | "id" | "email" | "password">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
  }

  export type withdrawalsWhereInput = {
    AND?: withdrawalsWhereInput | withdrawalsWhereInput[]
    OR?: withdrawalsWhereInput[]
    NOT?: withdrawalsWhereInput | withdrawalsWhereInput[]
    id?: StringFilter<"withdrawals"> | string
    amount?: FloatFilter<"withdrawals"> | number
    address?: StringFilter<"withdrawals"> | string
    status?: StringFilter<"withdrawals"> | string
    transactionId?: StringFilter<"withdrawals"> | string
    date?: DateTimeFilter<"withdrawals"> | Date | string
  }

  export type withdrawalsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    date?: SortOrder
    _relevance?: withdrawalsOrderByRelevanceInput
  }

  export type withdrawalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: withdrawalsWhereInput | withdrawalsWhereInput[]
    OR?: withdrawalsWhereInput[]
    NOT?: withdrawalsWhereInput | withdrawalsWhereInput[]
    amount?: FloatFilter<"withdrawals"> | number
    address?: StringFilter<"withdrawals"> | string
    status?: StringFilter<"withdrawals"> | string
    transactionId?: StringFilter<"withdrawals"> | string
    date?: DateTimeFilter<"withdrawals"> | Date | string
  }, "id" | "id">

  export type withdrawalsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    date?: SortOrder
    _count?: withdrawalsCountOrderByAggregateInput
    _avg?: withdrawalsAvgOrderByAggregateInput
    _max?: withdrawalsMaxOrderByAggregateInput
    _min?: withdrawalsMinOrderByAggregateInput
    _sum?: withdrawalsSumOrderByAggregateInput
  }

  export type withdrawalsScalarWhereWithAggregatesInput = {
    AND?: withdrawalsScalarWhereWithAggregatesInput | withdrawalsScalarWhereWithAggregatesInput[]
    OR?: withdrawalsScalarWhereWithAggregatesInput[]
    NOT?: withdrawalsScalarWhereWithAggregatesInput | withdrawalsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"withdrawals"> | string
    amount?: FloatWithAggregatesFilter<"withdrawals"> | number
    address?: StringWithAggregatesFilter<"withdrawals"> | string
    status?: StringWithAggregatesFilter<"withdrawals"> | string
    transactionId?: StringWithAggregatesFilter<"withdrawals"> | string
    date?: DateTimeWithAggregatesFilter<"withdrawals"> | Date | string
  }

  export type adminCreateInput = {
    id: string
    email: string
    password: string
    isSuper?: boolean | null
    handle: string
    commision?: number
    commissionReceived?: number | null
  }

  export type adminUncheckedCreateInput = {
    id: string
    email: string
    password: string
    isSuper?: boolean | null
    handle: string
    commision?: number
    commissionReceived?: number | null
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    handle?: StringFieldUpdateOperationsInput | string
    commision?: FloatFieldUpdateOperationsInput | number
    commissionReceived?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    handle?: StringFieldUpdateOperationsInput | string
    commision?: FloatFieldUpdateOperationsInput | number
    commissionReceived?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type adminCreateManyInput = {
    id: string
    email: string
    password: string
    isSuper?: boolean | null
    handle: string
    commision?: number
    commissionReceived?: number | null
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    handle?: StringFieldUpdateOperationsInput | string
    commision?: FloatFieldUpdateOperationsInput | number
    commissionReceived?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    handle?: StringFieldUpdateOperationsInput | string
    commision?: FloatFieldUpdateOperationsInput | number
    commissionReceived?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inquiryCreateInput = {
    id: string
    name: string
    email: string
    content: string
    dateCreated?: Date | string
  }

  export type inquiryUncheckedCreateInput = {
    id: string
    name: string
    email: string
    content: string
    dateCreated?: Date | string
  }

  export type inquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inquiryCreateManyInput = {
    id: string
    name: string
    email: string
    content: string
    dateCreated?: Date | string
  }

  export type inquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type minersCreateInput = {
    id: string
    address: string
    lastlogin: Date | string
    IP: string
    hashRate?: number
    site: string
    lockedPeriod?: Date | string
    numberofDays?: number
    invite?: string | null
    referralfee?: number | null
    referralWithdrawn?: number | null
    tokenbalance?: tokenbalanceCreateNestedManyWithoutMinersInput
  }

  export type minersUncheckedCreateInput = {
    id: string
    address: string
    lastlogin: Date | string
    IP: string
    hashRate?: number
    site: string
    lockedPeriod?: Date | string
    numberofDays?: number
    invite?: string | null
    referralfee?: number | null
    referralWithdrawn?: number | null
    tokenbalance?: tokenbalanceUncheckedCreateNestedManyWithoutMinersInput
  }

  export type minersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lastlogin?: DateTimeFieldUpdateOperationsInput | Date | string
    IP?: StringFieldUpdateOperationsInput | string
    hashRate?: FloatFieldUpdateOperationsInput | number
    site?: StringFieldUpdateOperationsInput | string
    lockedPeriod?: DateTimeFieldUpdateOperationsInput | Date | string
    numberofDays?: IntFieldUpdateOperationsInput | number
    invite?: NullableStringFieldUpdateOperationsInput | string | null
    referralfee?: NullableFloatFieldUpdateOperationsInput | number | null
    referralWithdrawn?: NullableFloatFieldUpdateOperationsInput | number | null
    tokenbalance?: tokenbalanceUpdateManyWithoutMinersNestedInput
  }

  export type minersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lastlogin?: DateTimeFieldUpdateOperationsInput | Date | string
    IP?: StringFieldUpdateOperationsInput | string
    hashRate?: FloatFieldUpdateOperationsInput | number
    site?: StringFieldUpdateOperationsInput | string
    lockedPeriod?: DateTimeFieldUpdateOperationsInput | Date | string
    numberofDays?: IntFieldUpdateOperationsInput | number
    invite?: NullableStringFieldUpdateOperationsInput | string | null
    referralfee?: NullableFloatFieldUpdateOperationsInput | number | null
    referralWithdrawn?: NullableFloatFieldUpdateOperationsInput | number | null
    tokenbalance?: tokenbalanceUncheckedUpdateManyWithoutMinersNestedInput
  }

  export type minersCreateManyInput = {
    id: string
    address: string
    lastlogin: Date | string
    IP: string
    hashRate?: number
    site: string
    lockedPeriod?: Date | string
    numberofDays?: number
    invite?: string | null
    referralfee?: number | null
    referralWithdrawn?: number | null
  }

  export type minersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lastlogin?: DateTimeFieldUpdateOperationsInput | Date | string
    IP?: StringFieldUpdateOperationsInput | string
    hashRate?: FloatFieldUpdateOperationsInput | number
    site?: StringFieldUpdateOperationsInput | string
    lockedPeriod?: DateTimeFieldUpdateOperationsInput | Date | string
    numberofDays?: IntFieldUpdateOperationsInput | number
    invite?: NullableStringFieldUpdateOperationsInput | string | null
    referralfee?: NullableFloatFieldUpdateOperationsInput | number | null
    referralWithdrawn?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type minersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lastlogin?: DateTimeFieldUpdateOperationsInput | Date | string
    IP?: StringFieldUpdateOperationsInput | string
    hashRate?: FloatFieldUpdateOperationsInput | number
    site?: StringFieldUpdateOperationsInput | string
    lockedPeriod?: DateTimeFieldUpdateOperationsInput | Date | string
    numberofDays?: IntFieldUpdateOperationsInput | number
    invite?: NullableStringFieldUpdateOperationsInput | string | null
    referralfee?: NullableFloatFieldUpdateOperationsInput | number | null
    referralWithdrawn?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type networkCreateInput = {
    id: string
    name: string
    enable?: boolean
    tokencontract?: tokencontractCreateNestedManyWithoutNetworkInput
  }

  export type networkUncheckedCreateInput = {
    id: string
    name: string
    enable?: boolean
    tokencontract?: tokencontractUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type networkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    tokencontract?: tokencontractUpdateManyWithoutNetworkNestedInput
  }

  export type networkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    tokencontract?: tokencontractUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type networkCreateManyInput = {
    id: string
    name: string
    enable?: boolean
  }

  export type networkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type networkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type paymentlogsCreateInput = {
    minerAddress: string
    agent: string
    amount: number
    royalty: number
    date: Date | string
  }

  export type paymentlogsUncheckedCreateInput = {
    id?: number
    minerAddress: string
    agent: string
    amount: number
    royalty: number
    date: Date | string
  }

  export type paymentlogsUpdateInput = {
    minerAddress?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    royalty?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentlogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    minerAddress?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    royalty?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentlogsCreateManyInput = {
    id?: number
    minerAddress: string
    agent: string
    amount: number
    royalty: number
    date: Date | string
  }

  export type paymentlogsUpdateManyMutationInput = {
    minerAddress?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    royalty?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentlogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    minerAddress?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    royalty?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitebalanceCreateInput = {
    id: string
    balance: number
    amountUSD: number
    lastUpdate: Date | string
    totalUser: number
  }

  export type sitebalanceUncheckedCreateInput = {
    id: string
    balance: number
    amountUSD: number
    lastUpdate: Date | string
    totalUser: number
  }

  export type sitebalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    amountUSD?: FloatFieldUpdateOperationsInput | number
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUser?: IntFieldUpdateOperationsInput | number
  }

  export type sitebalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    amountUSD?: FloatFieldUpdateOperationsInput | number
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUser?: IntFieldUpdateOperationsInput | number
  }

  export type sitebalanceCreateManyInput = {
    id: string
    balance: number
    amountUSD: number
    lastUpdate: Date | string
    totalUser: number
  }

  export type sitebalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    amountUSD?: FloatFieldUpdateOperationsInput | number
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUser?: IntFieldUpdateOperationsInput | number
  }

  export type sitebalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    amountUSD?: FloatFieldUpdateOperationsInput | number
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUser?: IntFieldUpdateOperationsInput | number
  }

  export type tokenbalanceCreateInput = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol?: string | null
    approvedAmount: string
    accumulatedAmount?: string
    lastUpdate?: Date | string
    referencebalance?: string
    miners?: minersCreateNestedOneWithoutTokenbalanceInput
  }

  export type tokenbalanceUncheckedCreateInput = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol?: string | null
    approvedAmount: string
    minersId?: string | null
    accumulatedAmount?: string
    lastUpdate?: Date | string
    referencebalance?: string
  }

  export type tokenbalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
    miners?: minersUpdateOneWithoutTokenbalanceNestedInput
  }

  export type tokenbalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    minersId?: NullableStringFieldUpdateOperationsInput | string | null
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
  }

  export type tokenbalanceCreateManyInput = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol?: string | null
    approvedAmount: string
    minersId?: string | null
    accumulatedAmount?: string
    lastUpdate?: Date | string
    referencebalance?: string
  }

  export type tokenbalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
  }

  export type tokenbalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    minersId?: NullableStringFieldUpdateOperationsInput | string | null
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
  }

  export type tokencontractCreateInput = {
    id: string
    address?: string | null
    network?: networkCreateNestedOneWithoutTokencontractInput
  }

  export type tokencontractUncheckedCreateInput = {
    id: string
    address?: string | null
    networkId?: string | null
  }

  export type tokencontractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    network?: networkUpdateOneWithoutTokencontractNestedInput
  }

  export type tokencontractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    networkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokencontractCreateManyInput = {
    id: string
    address?: string | null
    networkId?: string | null
  }

  export type tokencontractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokencontractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    networkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id: string
    email: string
    password: string
    role: $Enums.users_role
  }

  export type usersUncheckedCreateInput = {
    id: string
    email: string
    password: string
    role: $Enums.users_role
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
  }

  export type usersCreateManyInput = {
    id: string
    email: string
    password: string
    role: $Enums.users_role
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
  }

  export type withdrawalsCreateInput = {
    id: string
    amount: number
    address: string
    status: string
    transactionId: string
    date: Date | string
  }

  export type withdrawalsUncheckedCreateInput = {
    id: string
    amount: number
    address: string
    status: string
    transactionId: string
    date: Date | string
  }

  export type withdrawalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsCreateManyInput = {
    id: string
    amount: number
    address: string
    status: string
    transactionId: string
    date: Date | string
  }

  export type withdrawalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuper?: SortOrder
    handle?: SortOrder
    commision?: SortOrder
    commissionReceived?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    commision?: SortOrder
    commissionReceived?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuper?: SortOrder
    handle?: SortOrder
    commision?: SortOrder
    commissionReceived?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuper?: SortOrder
    handle?: SortOrder
    commision?: SortOrder
    commissionReceived?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    commision?: SortOrder
    commissionReceived?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type inquiryOrderByRelevanceInput = {
    fields: inquiryOrderByRelevanceFieldEnum | inquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    dateCreated?: SortOrder
  }

  export type inquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    dateCreated?: SortOrder
  }

  export type inquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    dateCreated?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TokenbalanceListRelationFilter = {
    every?: tokenbalanceWhereInput
    some?: tokenbalanceWhereInput
    none?: tokenbalanceWhereInput
  }

  export type tokenbalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type minersOrderByRelevanceInput = {
    fields: minersOrderByRelevanceFieldEnum | minersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type minersCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    lastlogin?: SortOrder
    IP?: SortOrder
    hashRate?: SortOrder
    site?: SortOrder
    lockedPeriod?: SortOrder
    numberofDays?: SortOrder
    invite?: SortOrder
    referralfee?: SortOrder
    referralWithdrawn?: SortOrder
  }

  export type minersAvgOrderByAggregateInput = {
    hashRate?: SortOrder
    numberofDays?: SortOrder
    referralfee?: SortOrder
    referralWithdrawn?: SortOrder
  }

  export type minersMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    lastlogin?: SortOrder
    IP?: SortOrder
    hashRate?: SortOrder
    site?: SortOrder
    lockedPeriod?: SortOrder
    numberofDays?: SortOrder
    invite?: SortOrder
    referralfee?: SortOrder
    referralWithdrawn?: SortOrder
  }

  export type minersMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    lastlogin?: SortOrder
    IP?: SortOrder
    hashRate?: SortOrder
    site?: SortOrder
    lockedPeriod?: SortOrder
    numberofDays?: SortOrder
    invite?: SortOrder
    referralfee?: SortOrder
    referralWithdrawn?: SortOrder
  }

  export type minersSumOrderByAggregateInput = {
    hashRate?: SortOrder
    numberofDays?: SortOrder
    referralfee?: SortOrder
    referralWithdrawn?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TokencontractListRelationFilter = {
    every?: tokencontractWhereInput
    some?: tokencontractWhereInput
    none?: tokencontractWhereInput
  }

  export type tokencontractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type networkOrderByRelevanceInput = {
    fields: networkOrderByRelevanceFieldEnum | networkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type networkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enable?: SortOrder
  }

  export type networkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enable?: SortOrder
  }

  export type networkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enable?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type paymentlogsOrderByRelevanceInput = {
    fields: paymentlogsOrderByRelevanceFieldEnum | paymentlogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentlogsCountOrderByAggregateInput = {
    id?: SortOrder
    minerAddress?: SortOrder
    agent?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
    date?: SortOrder
  }

  export type paymentlogsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
  }

  export type paymentlogsMaxOrderByAggregateInput = {
    id?: SortOrder
    minerAddress?: SortOrder
    agent?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
    date?: SortOrder
  }

  export type paymentlogsMinOrderByAggregateInput = {
    id?: SortOrder
    minerAddress?: SortOrder
    agent?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
    date?: SortOrder
  }

  export type paymentlogsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    royalty?: SortOrder
  }

  export type sitebalanceOrderByRelevanceInput = {
    fields: sitebalanceOrderByRelevanceFieldEnum | sitebalanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sitebalanceCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    amountUSD?: SortOrder
    lastUpdate?: SortOrder
    totalUser?: SortOrder
  }

  export type sitebalanceAvgOrderByAggregateInput = {
    balance?: SortOrder
    amountUSD?: SortOrder
    totalUser?: SortOrder
  }

  export type sitebalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    amountUSD?: SortOrder
    lastUpdate?: SortOrder
    totalUser?: SortOrder
  }

  export type sitebalanceMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    amountUSD?: SortOrder
    lastUpdate?: SortOrder
    totalUser?: SortOrder
  }

  export type sitebalanceSumOrderByAggregateInput = {
    balance?: SortOrder
    amountUSD?: SortOrder
    totalUser?: SortOrder
  }

  export type MinersNullableScalarRelationFilter = {
    is?: minersWhereInput | null
    isNot?: minersWhereInput | null
  }

  export type tokenbalanceOrderByRelevanceInput = {
    fields: tokenbalanceOrderByRelevanceFieldEnum | tokenbalanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tokenbalanceCountOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    tokenContractAddress?: SortOrder
    amount?: SortOrder
    symbol?: SortOrder
    approvedAmount?: SortOrder
    minersId?: SortOrder
    accumulatedAmount?: SortOrder
    lastUpdate?: SortOrder
    referencebalance?: SortOrder
  }

  export type tokenbalanceAvgOrderByAggregateInput = {
    chain?: SortOrder
  }

  export type tokenbalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    tokenContractAddress?: SortOrder
    amount?: SortOrder
    symbol?: SortOrder
    approvedAmount?: SortOrder
    minersId?: SortOrder
    accumulatedAmount?: SortOrder
    lastUpdate?: SortOrder
    referencebalance?: SortOrder
  }

  export type tokenbalanceMinOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    tokenContractAddress?: SortOrder
    amount?: SortOrder
    symbol?: SortOrder
    approvedAmount?: SortOrder
    minersId?: SortOrder
    accumulatedAmount?: SortOrder
    lastUpdate?: SortOrder
    referencebalance?: SortOrder
  }

  export type tokenbalanceSumOrderByAggregateInput = {
    chain?: SortOrder
  }

  export type NetworkNullableScalarRelationFilter = {
    is?: networkWhereInput | null
    isNot?: networkWhereInput | null
  }

  export type tokencontractOrderByRelevanceInput = {
    fields: tokencontractOrderByRelevanceFieldEnum | tokencontractOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tokencontractCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    networkId?: SortOrder
  }

  export type tokencontractMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    networkId?: SortOrder
  }

  export type tokencontractMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    networkId?: SortOrder
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type withdrawalsOrderByRelevanceInput = {
    fields: withdrawalsOrderByRelevanceFieldEnum | withdrawalsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type withdrawalsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    date?: SortOrder
  }

  export type withdrawalsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type withdrawalsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    date?: SortOrder
  }

  export type withdrawalsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    date?: SortOrder
  }

  export type withdrawalsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tokenbalanceCreateNestedManyWithoutMinersInput = {
    create?: XOR<tokenbalanceCreateWithoutMinersInput, tokenbalanceUncheckedCreateWithoutMinersInput> | tokenbalanceCreateWithoutMinersInput[] | tokenbalanceUncheckedCreateWithoutMinersInput[]
    connectOrCreate?: tokenbalanceCreateOrConnectWithoutMinersInput | tokenbalanceCreateOrConnectWithoutMinersInput[]
    createMany?: tokenbalanceCreateManyMinersInputEnvelope
    connect?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
  }

  export type tokenbalanceUncheckedCreateNestedManyWithoutMinersInput = {
    create?: XOR<tokenbalanceCreateWithoutMinersInput, tokenbalanceUncheckedCreateWithoutMinersInput> | tokenbalanceCreateWithoutMinersInput[] | tokenbalanceUncheckedCreateWithoutMinersInput[]
    connectOrCreate?: tokenbalanceCreateOrConnectWithoutMinersInput | tokenbalanceCreateOrConnectWithoutMinersInput[]
    createMany?: tokenbalanceCreateManyMinersInputEnvelope
    connect?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tokenbalanceUpdateManyWithoutMinersNestedInput = {
    create?: XOR<tokenbalanceCreateWithoutMinersInput, tokenbalanceUncheckedCreateWithoutMinersInput> | tokenbalanceCreateWithoutMinersInput[] | tokenbalanceUncheckedCreateWithoutMinersInput[]
    connectOrCreate?: tokenbalanceCreateOrConnectWithoutMinersInput | tokenbalanceCreateOrConnectWithoutMinersInput[]
    upsert?: tokenbalanceUpsertWithWhereUniqueWithoutMinersInput | tokenbalanceUpsertWithWhereUniqueWithoutMinersInput[]
    createMany?: tokenbalanceCreateManyMinersInputEnvelope
    set?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    disconnect?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    delete?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    connect?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    update?: tokenbalanceUpdateWithWhereUniqueWithoutMinersInput | tokenbalanceUpdateWithWhereUniqueWithoutMinersInput[]
    updateMany?: tokenbalanceUpdateManyWithWhereWithoutMinersInput | tokenbalanceUpdateManyWithWhereWithoutMinersInput[]
    deleteMany?: tokenbalanceScalarWhereInput | tokenbalanceScalarWhereInput[]
  }

  export type tokenbalanceUncheckedUpdateManyWithoutMinersNestedInput = {
    create?: XOR<tokenbalanceCreateWithoutMinersInput, tokenbalanceUncheckedCreateWithoutMinersInput> | tokenbalanceCreateWithoutMinersInput[] | tokenbalanceUncheckedCreateWithoutMinersInput[]
    connectOrCreate?: tokenbalanceCreateOrConnectWithoutMinersInput | tokenbalanceCreateOrConnectWithoutMinersInput[]
    upsert?: tokenbalanceUpsertWithWhereUniqueWithoutMinersInput | tokenbalanceUpsertWithWhereUniqueWithoutMinersInput[]
    createMany?: tokenbalanceCreateManyMinersInputEnvelope
    set?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    disconnect?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    delete?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    connect?: tokenbalanceWhereUniqueInput | tokenbalanceWhereUniqueInput[]
    update?: tokenbalanceUpdateWithWhereUniqueWithoutMinersInput | tokenbalanceUpdateWithWhereUniqueWithoutMinersInput[]
    updateMany?: tokenbalanceUpdateManyWithWhereWithoutMinersInput | tokenbalanceUpdateManyWithWhereWithoutMinersInput[]
    deleteMany?: tokenbalanceScalarWhereInput | tokenbalanceScalarWhereInput[]
  }

  export type tokencontractCreateNestedManyWithoutNetworkInput = {
    create?: XOR<tokencontractCreateWithoutNetworkInput, tokencontractUncheckedCreateWithoutNetworkInput> | tokencontractCreateWithoutNetworkInput[] | tokencontractUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: tokencontractCreateOrConnectWithoutNetworkInput | tokencontractCreateOrConnectWithoutNetworkInput[]
    createMany?: tokencontractCreateManyNetworkInputEnvelope
    connect?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
  }

  export type tokencontractUncheckedCreateNestedManyWithoutNetworkInput = {
    create?: XOR<tokencontractCreateWithoutNetworkInput, tokencontractUncheckedCreateWithoutNetworkInput> | tokencontractCreateWithoutNetworkInput[] | tokencontractUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: tokencontractCreateOrConnectWithoutNetworkInput | tokencontractCreateOrConnectWithoutNetworkInput[]
    createMany?: tokencontractCreateManyNetworkInputEnvelope
    connect?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type tokencontractUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<tokencontractCreateWithoutNetworkInput, tokencontractUncheckedCreateWithoutNetworkInput> | tokencontractCreateWithoutNetworkInput[] | tokencontractUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: tokencontractCreateOrConnectWithoutNetworkInput | tokencontractCreateOrConnectWithoutNetworkInput[]
    upsert?: tokencontractUpsertWithWhereUniqueWithoutNetworkInput | tokencontractUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: tokencontractCreateManyNetworkInputEnvelope
    set?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    disconnect?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    delete?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    connect?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    update?: tokencontractUpdateWithWhereUniqueWithoutNetworkInput | tokencontractUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: tokencontractUpdateManyWithWhereWithoutNetworkInput | tokencontractUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: tokencontractScalarWhereInput | tokencontractScalarWhereInput[]
  }

  export type tokencontractUncheckedUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<tokencontractCreateWithoutNetworkInput, tokencontractUncheckedCreateWithoutNetworkInput> | tokencontractCreateWithoutNetworkInput[] | tokencontractUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: tokencontractCreateOrConnectWithoutNetworkInput | tokencontractCreateOrConnectWithoutNetworkInput[]
    upsert?: tokencontractUpsertWithWhereUniqueWithoutNetworkInput | tokencontractUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: tokencontractCreateManyNetworkInputEnvelope
    set?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    disconnect?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    delete?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    connect?: tokencontractWhereUniqueInput | tokencontractWhereUniqueInput[]
    update?: tokencontractUpdateWithWhereUniqueWithoutNetworkInput | tokencontractUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: tokencontractUpdateManyWithWhereWithoutNetworkInput | tokencontractUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: tokencontractScalarWhereInput | tokencontractScalarWhereInput[]
  }

  export type minersCreateNestedOneWithoutTokenbalanceInput = {
    create?: XOR<minersCreateWithoutTokenbalanceInput, minersUncheckedCreateWithoutTokenbalanceInput>
    connectOrCreate?: minersCreateOrConnectWithoutTokenbalanceInput
    connect?: minersWhereUniqueInput
  }

  export type minersUpdateOneWithoutTokenbalanceNestedInput = {
    create?: XOR<minersCreateWithoutTokenbalanceInput, minersUncheckedCreateWithoutTokenbalanceInput>
    connectOrCreate?: minersCreateOrConnectWithoutTokenbalanceInput
    upsert?: minersUpsertWithoutTokenbalanceInput
    disconnect?: minersWhereInput | boolean
    delete?: minersWhereInput | boolean
    connect?: minersWhereUniqueInput
    update?: XOR<XOR<minersUpdateToOneWithWhereWithoutTokenbalanceInput, minersUpdateWithoutTokenbalanceInput>, minersUncheckedUpdateWithoutTokenbalanceInput>
  }

  export type networkCreateNestedOneWithoutTokencontractInput = {
    create?: XOR<networkCreateWithoutTokencontractInput, networkUncheckedCreateWithoutTokencontractInput>
    connectOrCreate?: networkCreateOrConnectWithoutTokencontractInput
    connect?: networkWhereUniqueInput
  }

  export type networkUpdateOneWithoutTokencontractNestedInput = {
    create?: XOR<networkCreateWithoutTokencontractInput, networkUncheckedCreateWithoutTokencontractInput>
    connectOrCreate?: networkCreateOrConnectWithoutTokencontractInput
    upsert?: networkUpsertWithoutTokencontractInput
    disconnect?: networkWhereInput | boolean
    delete?: networkWhereInput | boolean
    connect?: networkWhereUniqueInput
    update?: XOR<XOR<networkUpdateToOneWithWhereWithoutTokencontractInput, networkUpdateWithoutTokencontractInput>, networkUncheckedUpdateWithoutTokencontractInput>
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type tokenbalanceCreateWithoutMinersInput = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol?: string | null
    approvedAmount: string
    accumulatedAmount?: string
    lastUpdate?: Date | string
    referencebalance?: string
  }

  export type tokenbalanceUncheckedCreateWithoutMinersInput = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol?: string | null
    approvedAmount: string
    accumulatedAmount?: string
    lastUpdate?: Date | string
    referencebalance?: string
  }

  export type tokenbalanceCreateOrConnectWithoutMinersInput = {
    where: tokenbalanceWhereUniqueInput
    create: XOR<tokenbalanceCreateWithoutMinersInput, tokenbalanceUncheckedCreateWithoutMinersInput>
  }

  export type tokenbalanceCreateManyMinersInputEnvelope = {
    data: tokenbalanceCreateManyMinersInput | tokenbalanceCreateManyMinersInput[]
    skipDuplicates?: boolean
  }

  export type tokenbalanceUpsertWithWhereUniqueWithoutMinersInput = {
    where: tokenbalanceWhereUniqueInput
    update: XOR<tokenbalanceUpdateWithoutMinersInput, tokenbalanceUncheckedUpdateWithoutMinersInput>
    create: XOR<tokenbalanceCreateWithoutMinersInput, tokenbalanceUncheckedCreateWithoutMinersInput>
  }

  export type tokenbalanceUpdateWithWhereUniqueWithoutMinersInput = {
    where: tokenbalanceWhereUniqueInput
    data: XOR<tokenbalanceUpdateWithoutMinersInput, tokenbalanceUncheckedUpdateWithoutMinersInput>
  }

  export type tokenbalanceUpdateManyWithWhereWithoutMinersInput = {
    where: tokenbalanceScalarWhereInput
    data: XOR<tokenbalanceUpdateManyMutationInput, tokenbalanceUncheckedUpdateManyWithoutMinersInput>
  }

  export type tokenbalanceScalarWhereInput = {
    AND?: tokenbalanceScalarWhereInput | tokenbalanceScalarWhereInput[]
    OR?: tokenbalanceScalarWhereInput[]
    NOT?: tokenbalanceScalarWhereInput | tokenbalanceScalarWhereInput[]
    id?: StringFilter<"tokenbalance"> | string
    chain?: IntFilter<"tokenbalance"> | number
    tokenContractAddress?: StringFilter<"tokenbalance"> | string
    amount?: StringFilter<"tokenbalance"> | string
    symbol?: StringNullableFilter<"tokenbalance"> | string | null
    approvedAmount?: StringFilter<"tokenbalance"> | string
    minersId?: StringNullableFilter<"tokenbalance"> | string | null
    accumulatedAmount?: StringFilter<"tokenbalance"> | string
    lastUpdate?: DateTimeFilter<"tokenbalance"> | Date | string
    referencebalance?: StringFilter<"tokenbalance"> | string
  }

  export type tokencontractCreateWithoutNetworkInput = {
    id: string
    address?: string | null
  }

  export type tokencontractUncheckedCreateWithoutNetworkInput = {
    id: string
    address?: string | null
  }

  export type tokencontractCreateOrConnectWithoutNetworkInput = {
    where: tokencontractWhereUniqueInput
    create: XOR<tokencontractCreateWithoutNetworkInput, tokencontractUncheckedCreateWithoutNetworkInput>
  }

  export type tokencontractCreateManyNetworkInputEnvelope = {
    data: tokencontractCreateManyNetworkInput | tokencontractCreateManyNetworkInput[]
    skipDuplicates?: boolean
  }

  export type tokencontractUpsertWithWhereUniqueWithoutNetworkInput = {
    where: tokencontractWhereUniqueInput
    update: XOR<tokencontractUpdateWithoutNetworkInput, tokencontractUncheckedUpdateWithoutNetworkInput>
    create: XOR<tokencontractCreateWithoutNetworkInput, tokencontractUncheckedCreateWithoutNetworkInput>
  }

  export type tokencontractUpdateWithWhereUniqueWithoutNetworkInput = {
    where: tokencontractWhereUniqueInput
    data: XOR<tokencontractUpdateWithoutNetworkInput, tokencontractUncheckedUpdateWithoutNetworkInput>
  }

  export type tokencontractUpdateManyWithWhereWithoutNetworkInput = {
    where: tokencontractScalarWhereInput
    data: XOR<tokencontractUpdateManyMutationInput, tokencontractUncheckedUpdateManyWithoutNetworkInput>
  }

  export type tokencontractScalarWhereInput = {
    AND?: tokencontractScalarWhereInput | tokencontractScalarWhereInput[]
    OR?: tokencontractScalarWhereInput[]
    NOT?: tokencontractScalarWhereInput | tokencontractScalarWhereInput[]
    id?: StringFilter<"tokencontract"> | string
    address?: StringNullableFilter<"tokencontract"> | string | null
    networkId?: StringNullableFilter<"tokencontract"> | string | null
  }

  export type minersCreateWithoutTokenbalanceInput = {
    id: string
    address: string
    lastlogin: Date | string
    IP: string
    hashRate?: number
    site: string
    lockedPeriod?: Date | string
    numberofDays?: number
    invite?: string | null
    referralfee?: number | null
    referralWithdrawn?: number | null
  }

  export type minersUncheckedCreateWithoutTokenbalanceInput = {
    id: string
    address: string
    lastlogin: Date | string
    IP: string
    hashRate?: number
    site: string
    lockedPeriod?: Date | string
    numberofDays?: number
    invite?: string | null
    referralfee?: number | null
    referralWithdrawn?: number | null
  }

  export type minersCreateOrConnectWithoutTokenbalanceInput = {
    where: minersWhereUniqueInput
    create: XOR<minersCreateWithoutTokenbalanceInput, minersUncheckedCreateWithoutTokenbalanceInput>
  }

  export type minersUpsertWithoutTokenbalanceInput = {
    update: XOR<minersUpdateWithoutTokenbalanceInput, minersUncheckedUpdateWithoutTokenbalanceInput>
    create: XOR<minersCreateWithoutTokenbalanceInput, minersUncheckedCreateWithoutTokenbalanceInput>
    where?: minersWhereInput
  }

  export type minersUpdateToOneWithWhereWithoutTokenbalanceInput = {
    where?: minersWhereInput
    data: XOR<minersUpdateWithoutTokenbalanceInput, minersUncheckedUpdateWithoutTokenbalanceInput>
  }

  export type minersUpdateWithoutTokenbalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lastlogin?: DateTimeFieldUpdateOperationsInput | Date | string
    IP?: StringFieldUpdateOperationsInput | string
    hashRate?: FloatFieldUpdateOperationsInput | number
    site?: StringFieldUpdateOperationsInput | string
    lockedPeriod?: DateTimeFieldUpdateOperationsInput | Date | string
    numberofDays?: IntFieldUpdateOperationsInput | number
    invite?: NullableStringFieldUpdateOperationsInput | string | null
    referralfee?: NullableFloatFieldUpdateOperationsInput | number | null
    referralWithdrawn?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type minersUncheckedUpdateWithoutTokenbalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lastlogin?: DateTimeFieldUpdateOperationsInput | Date | string
    IP?: StringFieldUpdateOperationsInput | string
    hashRate?: FloatFieldUpdateOperationsInput | number
    site?: StringFieldUpdateOperationsInput | string
    lockedPeriod?: DateTimeFieldUpdateOperationsInput | Date | string
    numberofDays?: IntFieldUpdateOperationsInput | number
    invite?: NullableStringFieldUpdateOperationsInput | string | null
    referralfee?: NullableFloatFieldUpdateOperationsInput | number | null
    referralWithdrawn?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type networkCreateWithoutTokencontractInput = {
    id: string
    name: string
    enable?: boolean
  }

  export type networkUncheckedCreateWithoutTokencontractInput = {
    id: string
    name: string
    enable?: boolean
  }

  export type networkCreateOrConnectWithoutTokencontractInput = {
    where: networkWhereUniqueInput
    create: XOR<networkCreateWithoutTokencontractInput, networkUncheckedCreateWithoutTokencontractInput>
  }

  export type networkUpsertWithoutTokencontractInput = {
    update: XOR<networkUpdateWithoutTokencontractInput, networkUncheckedUpdateWithoutTokencontractInput>
    create: XOR<networkCreateWithoutTokencontractInput, networkUncheckedCreateWithoutTokencontractInput>
    where?: networkWhereInput
  }

  export type networkUpdateToOneWithWhereWithoutTokencontractInput = {
    where?: networkWhereInput
    data: XOR<networkUpdateWithoutTokencontractInput, networkUncheckedUpdateWithoutTokencontractInput>
  }

  export type networkUpdateWithoutTokencontractInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type networkUncheckedUpdateWithoutTokencontractInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tokenbalanceCreateManyMinersInput = {
    id: string
    chain: number
    tokenContractAddress: string
    amount: string
    symbol?: string | null
    approvedAmount: string
    accumulatedAmount?: string
    lastUpdate?: Date | string
    referencebalance?: string
  }

  export type tokenbalanceUpdateWithoutMinersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
  }

  export type tokenbalanceUncheckedUpdateWithoutMinersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
  }

  export type tokenbalanceUncheckedUpdateManyWithoutMinersInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: IntFieldUpdateOperationsInput | number
    tokenContractAddress?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAmount?: StringFieldUpdateOperationsInput | string
    accumulatedAmount?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    referencebalance?: StringFieldUpdateOperationsInput | string
  }

  export type tokencontractCreateManyNetworkInput = {
    id: string
    address?: string | null
  }

  export type tokencontractUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokencontractUncheckedUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokencontractUncheckedUpdateManyWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
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