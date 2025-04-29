
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LocalGoogleCredential
 * 
 */
export type LocalGoogleCredential = $Result.DefaultSelection<Prisma.$LocalGoogleCredentialPayload>
/**
 * Model DiscordWebhook
 * 
 */
export type DiscordWebhook = $Result.DefaultSelection<Prisma.$DiscordWebhookPayload>
/**
 * Model Slack
 * 
 */
export type Slack = $Result.DefaultSelection<Prisma.$SlackPayload>
/**
 * Model Notion
 * 
 */
export type Notion = $Result.DefaultSelection<Prisma.$NotionPayload>
/**
 * Model Connections
 * 
 */
export type Connections = $Result.DefaultSelection<Prisma.$ConnectionsPayload>
/**
 * Model Workflows
 * 
 */
export type Workflows = $Result.DefaultSelection<Prisma.$WorkflowsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localGoogleCredential`: Exposes CRUD operations for the **LocalGoogleCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocalGoogleCredentials
    * const localGoogleCredentials = await prisma.localGoogleCredential.findMany()
    * ```
    */
  get localGoogleCredential(): Prisma.LocalGoogleCredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordWebhook`: Exposes CRUD operations for the **DiscordWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordWebhooks
    * const discordWebhooks = await prisma.discordWebhook.findMany()
    * ```
    */
  get discordWebhook(): Prisma.DiscordWebhookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slack`: Exposes CRUD operations for the **Slack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slacks
    * const slacks = await prisma.slack.findMany()
    * ```
    */
  get slack(): Prisma.SlackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notion`: Exposes CRUD operations for the **Notion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notions
    * const notions = await prisma.notion.findMany()
    * ```
    */
  get notion(): Prisma.NotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connections`: Exposes CRUD operations for the **Connections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connections.findMany()
    * ```
    */
  get connections(): Prisma.ConnectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflows`: Exposes CRUD operations for the **Workflows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflows.findMany()
    * ```
    */
  get workflows(): Prisma.WorkflowsDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    LocalGoogleCredential: 'LocalGoogleCredential',
    DiscordWebhook: 'DiscordWebhook',
    Slack: 'Slack',
    Notion: 'Notion',
    Connections: 'Connections',
    Workflows: 'Workflows'
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
      modelProps: "user" | "localGoogleCredential" | "discordWebhook" | "slack" | "notion" | "connections" | "workflows"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LocalGoogleCredential: {
        payload: Prisma.$LocalGoogleCredentialPayload<ExtArgs>
        fields: Prisma.LocalGoogleCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalGoogleCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalGoogleCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>
          }
          findFirst: {
            args: Prisma.LocalGoogleCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalGoogleCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>
          }
          findMany: {
            args: Prisma.LocalGoogleCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>[]
          }
          create: {
            args: Prisma.LocalGoogleCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>
          }
          createMany: {
            args: Prisma.LocalGoogleCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalGoogleCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>[]
          }
          delete: {
            args: Prisma.LocalGoogleCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>
          }
          update: {
            args: Prisma.LocalGoogleCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>
          }
          deleteMany: {
            args: Prisma.LocalGoogleCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalGoogleCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalGoogleCredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>[]
          }
          upsert: {
            args: Prisma.LocalGoogleCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalGoogleCredentialPayload>
          }
          aggregate: {
            args: Prisma.LocalGoogleCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalGoogleCredential>
          }
          groupBy: {
            args: Prisma.LocalGoogleCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalGoogleCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalGoogleCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<LocalGoogleCredentialCountAggregateOutputType> | number
          }
        }
      }
      DiscordWebhook: {
        payload: Prisma.$DiscordWebhookPayload<ExtArgs>
        fields: Prisma.DiscordWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordWebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordWebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>
          }
          findFirst: {
            args: Prisma.DiscordWebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordWebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>
          }
          findMany: {
            args: Prisma.DiscordWebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>[]
          }
          create: {
            args: Prisma.DiscordWebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>
          }
          createMany: {
            args: Prisma.DiscordWebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordWebhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>[]
          }
          delete: {
            args: Prisma.DiscordWebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>
          }
          update: {
            args: Prisma.DiscordWebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>
          }
          deleteMany: {
            args: Prisma.DiscordWebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordWebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordWebhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>[]
          }
          upsert: {
            args: Prisma.DiscordWebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordWebhookPayload>
          }
          aggregate: {
            args: Prisma.DiscordWebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordWebhook>
          }
          groupBy: {
            args: Prisma.DiscordWebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordWebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordWebhookCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordWebhookCountAggregateOutputType> | number
          }
        }
      }
      Slack: {
        payload: Prisma.$SlackPayload<ExtArgs>
        fields: Prisma.SlackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>
          }
          findFirst: {
            args: Prisma.SlackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>
          }
          findMany: {
            args: Prisma.SlackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>[]
          }
          create: {
            args: Prisma.SlackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>
          }
          createMany: {
            args: Prisma.SlackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>[]
          }
          delete: {
            args: Prisma.SlackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>
          }
          update: {
            args: Prisma.SlackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>
          }
          deleteMany: {
            args: Prisma.SlackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>[]
          }
          upsert: {
            args: Prisma.SlackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlackPayload>
          }
          aggregate: {
            args: Prisma.SlackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlack>
          }
          groupBy: {
            args: Prisma.SlackGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlackGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlackCountArgs<ExtArgs>
            result: $Utils.Optional<SlackCountAggregateOutputType> | number
          }
        }
      }
      Notion: {
        payload: Prisma.$NotionPayload<ExtArgs>
        fields: Prisma.NotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>
          }
          findFirst: {
            args: Prisma.NotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>
          }
          findMany: {
            args: Prisma.NotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>[]
          }
          create: {
            args: Prisma.NotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>
          }
          createMany: {
            args: Prisma.NotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>[]
          }
          delete: {
            args: Prisma.NotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>
          }
          update: {
            args: Prisma.NotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>
          }
          deleteMany: {
            args: Prisma.NotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>[]
          }
          upsert: {
            args: Prisma.NotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotionPayload>
          }
          aggregate: {
            args: Prisma.NotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotion>
          }
          groupBy: {
            args: Prisma.NotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotionCountArgs<ExtArgs>
            result: $Utils.Optional<NotionCountAggregateOutputType> | number
          }
        }
      }
      Connections: {
        payload: Prisma.$ConnectionsPayload<ExtArgs>
        fields: Prisma.ConnectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          findFirst: {
            args: Prisma.ConnectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          findMany: {
            args: Prisma.ConnectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>[]
          }
          create: {
            args: Prisma.ConnectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          createMany: {
            args: Prisma.ConnectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>[]
          }
          delete: {
            args: Prisma.ConnectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          update: {
            args: Prisma.ConnectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          aggregate: {
            args: Prisma.ConnectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnections>
          }
          groupBy: {
            args: Prisma.ConnectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionsCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionsCountAggregateOutputType> | number
          }
        }
      }
      Workflows: {
        payload: Prisma.$WorkflowsPayload<ExtArgs>
        fields: Prisma.WorkflowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>
          }
          findFirst: {
            args: Prisma.WorkflowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>
          }
          findMany: {
            args: Prisma.WorkflowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>[]
          }
          create: {
            args: Prisma.WorkflowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>
          }
          createMany: {
            args: Prisma.WorkflowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>[]
          }
          delete: {
            args: Prisma.WorkflowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>
          }
          update: {
            args: Prisma.WorkflowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowsPayload>
          }
          aggregate: {
            args: Prisma.WorkflowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflows>
          }
          groupBy: {
            args: Prisma.WorkflowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowsCountAggregateOutputType> | number
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
    user?: UserOmit
    localGoogleCredential?: LocalGoogleCredentialOmit
    discordWebhook?: DiscordWebhookOmit
    slack?: SlackOmit
    notion?: NotionOmit
    connections?: ConnectionsOmit
    workflows?: WorkflowsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    DiscordWebhook: number
    Notion: number
    Slack: number
    connections: number
    workflows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordWebhook?: boolean | UserCountOutputTypeCountDiscordWebhookArgs
    Notion?: boolean | UserCountOutputTypeCountNotionArgs
    Slack?: boolean | UserCountOutputTypeCountSlackArgs
    connections?: boolean | UserCountOutputTypeCountConnectionsArgs
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiscordWebhookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordWebhookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowsWhereInput
  }


  /**
   * Count Type DiscordWebhookCountOutputType
   */

  export type DiscordWebhookCountOutputType = {
    connections: number
  }

  export type DiscordWebhookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | DiscordWebhookCountOutputTypeCountConnectionsArgs
  }

  // Custom InputTypes
  /**
   * DiscordWebhookCountOutputType without action
   */
  export type DiscordWebhookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhookCountOutputType
     */
    select?: DiscordWebhookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordWebhookCountOutputType without action
   */
  export type DiscordWebhookCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
  }


  /**
   * Count Type SlackCountOutputType
   */

  export type SlackCountOutputType = {
    connections: number
  }

  export type SlackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | SlackCountOutputTypeCountConnectionsArgs
  }

  // Custom InputTypes
  /**
   * SlackCountOutputType without action
   */
  export type SlackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlackCountOutputType
     */
    select?: SlackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlackCountOutputType without action
   */
  export type SlackCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
  }


  /**
   * Count Type NotionCountOutputType
   */

  export type NotionCountOutputType = {
    connections: number
  }

  export type NotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | NotionCountOutputTypeCountConnectionsArgs
  }

  // Custom InputTypes
  /**
   * NotionCountOutputType without action
   */
  export type NotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionCountOutputType
     */
    select?: NotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotionCountOutputType without action
   */
  export type NotionCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    email: string | null
    profileImage: string | null
    tier: string | null
    credits: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localGoogleId: string | null
    googleResourceId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    email: string | null
    profileImage: string | null
    tier: string | null
    credits: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localGoogleId: string | null
    googleResourceId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    profileImage: number
    tier: number
    credits: number
    createdAt: number
    updatedAt: number
    localGoogleId: number
    googleResourceId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    profileImage?: true
    tier?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
    localGoogleId?: true
    googleResourceId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    profileImage?: true
    tier?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
    localGoogleId?: true
    googleResourceId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    profileImage?: true
    tier?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
    localGoogleId?: true
    googleResourceId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    clerkId: string
    name: string | null
    email: string
    profileImage: string | null
    tier: string | null
    credits: string | null
    createdAt: Date
    updatedAt: Date
    localGoogleId: string | null
    googleResourceId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    tier?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localGoogleId?: boolean
    googleResourceId?: boolean
    LocalGoogleCredential?: boolean | User$LocalGoogleCredentialArgs<ExtArgs>
    DiscordWebhook?: boolean | User$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | User$NotionArgs<ExtArgs>
    Slack?: boolean | User$SlackArgs<ExtArgs>
    connections?: boolean | User$connectionsArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    tier?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localGoogleId?: boolean
    googleResourceId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    tier?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localGoogleId?: boolean
    googleResourceId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    tier?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localGoogleId?: boolean
    googleResourceId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "profileImage" | "tier" | "credits" | "createdAt" | "updatedAt" | "localGoogleId" | "googleResourceId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LocalGoogleCredential?: boolean | User$LocalGoogleCredentialArgs<ExtArgs>
    DiscordWebhook?: boolean | User$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | User$NotionArgs<ExtArgs>
    Slack?: boolean | User$SlackArgs<ExtArgs>
    connections?: boolean | User$connectionsArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      LocalGoogleCredential: Prisma.$LocalGoogleCredentialPayload<ExtArgs> | null
      DiscordWebhook: Prisma.$DiscordWebhookPayload<ExtArgs>[]
      Notion: Prisma.$NotionPayload<ExtArgs>[]
      Slack: Prisma.$SlackPayload<ExtArgs>[]
      connections: Prisma.$ConnectionsPayload<ExtArgs>[]
      workflows: Prisma.$WorkflowsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      name: string | null
      email: string
      profileImage: string | null
      tier: string | null
      credits: string | null
      createdAt: Date
      updatedAt: Date
      localGoogleId: string | null
      googleResourceId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LocalGoogleCredential<T extends User$LocalGoogleCredentialArgs<ExtArgs> = {}>(args?: Subset<T, User$LocalGoogleCredentialArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DiscordWebhook<T extends User$DiscordWebhookArgs<ExtArgs> = {}>(args?: Subset<T, User$DiscordWebhookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notion<T extends User$NotionArgs<ExtArgs> = {}>(args?: Subset<T, User$NotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Slack<T extends User$SlackArgs<ExtArgs> = {}>(args?: Subset<T, User$SlackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connections<T extends User$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly tier: FieldRef<"User", 'String'>
    readonly credits: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly localGoogleId: FieldRef<"User", 'String'>
    readonly googleResourceId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.LocalGoogleCredential
   */
  export type User$LocalGoogleCredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    where?: LocalGoogleCredentialWhereInput
  }

  /**
   * User.DiscordWebhook
   */
  export type User$DiscordWebhookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    where?: DiscordWebhookWhereInput
    orderBy?: DiscordWebhookOrderByWithRelationInput | DiscordWebhookOrderByWithRelationInput[]
    cursor?: DiscordWebhookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordWebhookScalarFieldEnum | DiscordWebhookScalarFieldEnum[]
  }

  /**
   * User.Notion
   */
  export type User$NotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    where?: NotionWhereInput
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    cursor?: NotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }

  /**
   * User.Slack
   */
  export type User$SlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    where?: SlackWhereInput
    orderBy?: SlackOrderByWithRelationInput | SlackOrderByWithRelationInput[]
    cursor?: SlackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlackScalarFieldEnum | SlackScalarFieldEnum[]
  }

  /**
   * User.connections
   */
  export type User$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    cursor?: ConnectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    where?: WorkflowsWhereInput
    orderBy?: WorkflowsOrderByWithRelationInput | WorkflowsOrderByWithRelationInput[]
    cursor?: WorkflowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowsScalarFieldEnum | WorkflowsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LocalGoogleCredential
   */

  export type AggregateLocalGoogleCredential = {
    _count: LocalGoogleCredentialCountAggregateOutputType | null
    _avg: LocalGoogleCredentialAvgAggregateOutputType | null
    _sum: LocalGoogleCredentialSumAggregateOutputType | null
    _min: LocalGoogleCredentialMinAggregateOutputType | null
    _max: LocalGoogleCredentialMaxAggregateOutputType | null
  }

  export type LocalGoogleCredentialAvgAggregateOutputType = {
    userId: number | null
  }

  export type LocalGoogleCredentialSumAggregateOutputType = {
    userId: number | null
  }

  export type LocalGoogleCredentialMinAggregateOutputType = {
    id: string | null
    accessToken: string | null
    folderId: string | null
    pageToken: string | null
    channelId: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type LocalGoogleCredentialMaxAggregateOutputType = {
    id: string | null
    accessToken: string | null
    folderId: string | null
    pageToken: string | null
    channelId: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type LocalGoogleCredentialCountAggregateOutputType = {
    id: number
    accessToken: number
    folderId: number
    pageToken: number
    channelId: number
    subscribed: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type LocalGoogleCredentialAvgAggregateInputType = {
    userId?: true
  }

  export type LocalGoogleCredentialSumAggregateInputType = {
    userId?: true
  }

  export type LocalGoogleCredentialMinAggregateInputType = {
    id?: true
    accessToken?: true
    folderId?: true
    pageToken?: true
    channelId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type LocalGoogleCredentialMaxAggregateInputType = {
    id?: true
    accessToken?: true
    folderId?: true
    pageToken?: true
    channelId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type LocalGoogleCredentialCountAggregateInputType = {
    id?: true
    accessToken?: true
    folderId?: true
    pageToken?: true
    channelId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type LocalGoogleCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalGoogleCredential to aggregate.
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalGoogleCredentials to fetch.
     */
    orderBy?: LocalGoogleCredentialOrderByWithRelationInput | LocalGoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalGoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalGoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalGoogleCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocalGoogleCredentials
    **/
    _count?: true | LocalGoogleCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalGoogleCredentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalGoogleCredentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalGoogleCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalGoogleCredentialMaxAggregateInputType
  }

  export type GetLocalGoogleCredentialAggregateType<T extends LocalGoogleCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalGoogleCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalGoogleCredential[P]>
      : GetScalarType<T[P], AggregateLocalGoogleCredential[P]>
  }




  export type LocalGoogleCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalGoogleCredentialWhereInput
    orderBy?: LocalGoogleCredentialOrderByWithAggregationInput | LocalGoogleCredentialOrderByWithAggregationInput[]
    by: LocalGoogleCredentialScalarFieldEnum[] | LocalGoogleCredentialScalarFieldEnum
    having?: LocalGoogleCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalGoogleCredentialCountAggregateInputType | true
    _avg?: LocalGoogleCredentialAvgAggregateInputType
    _sum?: LocalGoogleCredentialSumAggregateInputType
    _min?: LocalGoogleCredentialMinAggregateInputType
    _max?: LocalGoogleCredentialMaxAggregateInputType
  }

  export type LocalGoogleCredentialGroupByOutputType = {
    id: string
    accessToken: string
    folderId: string | null
    pageToken: string | null
    channelId: string
    subscribed: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: LocalGoogleCredentialCountAggregateOutputType | null
    _avg: LocalGoogleCredentialAvgAggregateOutputType | null
    _sum: LocalGoogleCredentialSumAggregateOutputType | null
    _min: LocalGoogleCredentialMinAggregateOutputType | null
    _max: LocalGoogleCredentialMaxAggregateOutputType | null
  }

  type GetLocalGoogleCredentialGroupByPayload<T extends LocalGoogleCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalGoogleCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalGoogleCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalGoogleCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], LocalGoogleCredentialGroupByOutputType[P]>
        }
      >
    >


  export type LocalGoogleCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    folderId?: boolean
    pageToken?: boolean
    channelId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localGoogleCredential"]>

  export type LocalGoogleCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    folderId?: boolean
    pageToken?: boolean
    channelId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localGoogleCredential"]>

  export type LocalGoogleCredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    folderId?: boolean
    pageToken?: boolean
    channelId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localGoogleCredential"]>

  export type LocalGoogleCredentialSelectScalar = {
    id?: boolean
    accessToken?: boolean
    folderId?: boolean
    pageToken?: boolean
    channelId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type LocalGoogleCredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessToken" | "folderId" | "pageToken" | "channelId" | "subscribed" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["localGoogleCredential"]>
  export type LocalGoogleCredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocalGoogleCredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocalGoogleCredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LocalGoogleCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocalGoogleCredential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accessToken: string
      folderId: string | null
      pageToken: string | null
      channelId: string
      subscribed: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["localGoogleCredential"]>
    composites: {}
  }

  type LocalGoogleCredentialGetPayload<S extends boolean | null | undefined | LocalGoogleCredentialDefaultArgs> = $Result.GetResult<Prisma.$LocalGoogleCredentialPayload, S>

  type LocalGoogleCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalGoogleCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalGoogleCredentialCountAggregateInputType | true
    }

  export interface LocalGoogleCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocalGoogleCredential'], meta: { name: 'LocalGoogleCredential' } }
    /**
     * Find zero or one LocalGoogleCredential that matches the filter.
     * @param {LocalGoogleCredentialFindUniqueArgs} args - Arguments to find a LocalGoogleCredential
     * @example
     * // Get one LocalGoogleCredential
     * const localGoogleCredential = await prisma.localGoogleCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalGoogleCredentialFindUniqueArgs>(args: SelectSubset<T, LocalGoogleCredentialFindUniqueArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocalGoogleCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalGoogleCredentialFindUniqueOrThrowArgs} args - Arguments to find a LocalGoogleCredential
     * @example
     * // Get one LocalGoogleCredential
     * const localGoogleCredential = await prisma.localGoogleCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalGoogleCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalGoogleCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalGoogleCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialFindFirstArgs} args - Arguments to find a LocalGoogleCredential
     * @example
     * // Get one LocalGoogleCredential
     * const localGoogleCredential = await prisma.localGoogleCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalGoogleCredentialFindFirstArgs>(args?: SelectSubset<T, LocalGoogleCredentialFindFirstArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalGoogleCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialFindFirstOrThrowArgs} args - Arguments to find a LocalGoogleCredential
     * @example
     * // Get one LocalGoogleCredential
     * const localGoogleCredential = await prisma.localGoogleCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalGoogleCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalGoogleCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocalGoogleCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocalGoogleCredentials
     * const localGoogleCredentials = await prisma.localGoogleCredential.findMany()
     * 
     * // Get first 10 LocalGoogleCredentials
     * const localGoogleCredentials = await prisma.localGoogleCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localGoogleCredentialWithIdOnly = await prisma.localGoogleCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalGoogleCredentialFindManyArgs>(args?: SelectSubset<T, LocalGoogleCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocalGoogleCredential.
     * @param {LocalGoogleCredentialCreateArgs} args - Arguments to create a LocalGoogleCredential.
     * @example
     * // Create one LocalGoogleCredential
     * const LocalGoogleCredential = await prisma.localGoogleCredential.create({
     *   data: {
     *     // ... data to create a LocalGoogleCredential
     *   }
     * })
     * 
     */
    create<T extends LocalGoogleCredentialCreateArgs>(args: SelectSubset<T, LocalGoogleCredentialCreateArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocalGoogleCredentials.
     * @param {LocalGoogleCredentialCreateManyArgs} args - Arguments to create many LocalGoogleCredentials.
     * @example
     * // Create many LocalGoogleCredentials
     * const localGoogleCredential = await prisma.localGoogleCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalGoogleCredentialCreateManyArgs>(args?: SelectSubset<T, LocalGoogleCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocalGoogleCredentials and returns the data saved in the database.
     * @param {LocalGoogleCredentialCreateManyAndReturnArgs} args - Arguments to create many LocalGoogleCredentials.
     * @example
     * // Create many LocalGoogleCredentials
     * const localGoogleCredential = await prisma.localGoogleCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocalGoogleCredentials and only return the `id`
     * const localGoogleCredentialWithIdOnly = await prisma.localGoogleCredential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalGoogleCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalGoogleCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocalGoogleCredential.
     * @param {LocalGoogleCredentialDeleteArgs} args - Arguments to delete one LocalGoogleCredential.
     * @example
     * // Delete one LocalGoogleCredential
     * const LocalGoogleCredential = await prisma.localGoogleCredential.delete({
     *   where: {
     *     // ... filter to delete one LocalGoogleCredential
     *   }
     * })
     * 
     */
    delete<T extends LocalGoogleCredentialDeleteArgs>(args: SelectSubset<T, LocalGoogleCredentialDeleteArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocalGoogleCredential.
     * @param {LocalGoogleCredentialUpdateArgs} args - Arguments to update one LocalGoogleCredential.
     * @example
     * // Update one LocalGoogleCredential
     * const localGoogleCredential = await prisma.localGoogleCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalGoogleCredentialUpdateArgs>(args: SelectSubset<T, LocalGoogleCredentialUpdateArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocalGoogleCredentials.
     * @param {LocalGoogleCredentialDeleteManyArgs} args - Arguments to filter LocalGoogleCredentials to delete.
     * @example
     * // Delete a few LocalGoogleCredentials
     * const { count } = await prisma.localGoogleCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalGoogleCredentialDeleteManyArgs>(args?: SelectSubset<T, LocalGoogleCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalGoogleCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocalGoogleCredentials
     * const localGoogleCredential = await prisma.localGoogleCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalGoogleCredentialUpdateManyArgs>(args: SelectSubset<T, LocalGoogleCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalGoogleCredentials and returns the data updated in the database.
     * @param {LocalGoogleCredentialUpdateManyAndReturnArgs} args - Arguments to update many LocalGoogleCredentials.
     * @example
     * // Update many LocalGoogleCredentials
     * const localGoogleCredential = await prisma.localGoogleCredential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocalGoogleCredentials and only return the `id`
     * const localGoogleCredentialWithIdOnly = await prisma.localGoogleCredential.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalGoogleCredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalGoogleCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocalGoogleCredential.
     * @param {LocalGoogleCredentialUpsertArgs} args - Arguments to update or create a LocalGoogleCredential.
     * @example
     * // Update or create a LocalGoogleCredential
     * const localGoogleCredential = await prisma.localGoogleCredential.upsert({
     *   create: {
     *     // ... data to create a LocalGoogleCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocalGoogleCredential we want to update
     *   }
     * })
     */
    upsert<T extends LocalGoogleCredentialUpsertArgs>(args: SelectSubset<T, LocalGoogleCredentialUpsertArgs<ExtArgs>>): Prisma__LocalGoogleCredentialClient<$Result.GetResult<Prisma.$LocalGoogleCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocalGoogleCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialCountArgs} args - Arguments to filter LocalGoogleCredentials to count.
     * @example
     * // Count the number of LocalGoogleCredentials
     * const count = await prisma.localGoogleCredential.count({
     *   where: {
     *     // ... the filter for the LocalGoogleCredentials we want to count
     *   }
     * })
    **/
    count<T extends LocalGoogleCredentialCountArgs>(
      args?: Subset<T, LocalGoogleCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalGoogleCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocalGoogleCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalGoogleCredentialAggregateArgs>(args: Subset<T, LocalGoogleCredentialAggregateArgs>): Prisma.PrismaPromise<GetLocalGoogleCredentialAggregateType<T>>

    /**
     * Group by LocalGoogleCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGoogleCredentialGroupByArgs} args - Group by arguments.
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
      T extends LocalGoogleCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalGoogleCredentialGroupByArgs['orderBy'] }
        : { orderBy?: LocalGoogleCredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalGoogleCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalGoogleCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocalGoogleCredential model
   */
  readonly fields: LocalGoogleCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocalGoogleCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalGoogleCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LocalGoogleCredential model
   */
  interface LocalGoogleCredentialFieldRefs {
    readonly id: FieldRef<"LocalGoogleCredential", 'String'>
    readonly accessToken: FieldRef<"LocalGoogleCredential", 'String'>
    readonly folderId: FieldRef<"LocalGoogleCredential", 'String'>
    readonly pageToken: FieldRef<"LocalGoogleCredential", 'String'>
    readonly channelId: FieldRef<"LocalGoogleCredential", 'String'>
    readonly subscribed: FieldRef<"LocalGoogleCredential", 'Boolean'>
    readonly createdAt: FieldRef<"LocalGoogleCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"LocalGoogleCredential", 'DateTime'>
    readonly userId: FieldRef<"LocalGoogleCredential", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LocalGoogleCredential findUnique
   */
  export type LocalGoogleCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which LocalGoogleCredential to fetch.
     */
    where: LocalGoogleCredentialWhereUniqueInput
  }

  /**
   * LocalGoogleCredential findUniqueOrThrow
   */
  export type LocalGoogleCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which LocalGoogleCredential to fetch.
     */
    where: LocalGoogleCredentialWhereUniqueInput
  }

  /**
   * LocalGoogleCredential findFirst
   */
  export type LocalGoogleCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which LocalGoogleCredential to fetch.
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalGoogleCredentials to fetch.
     */
    orderBy?: LocalGoogleCredentialOrderByWithRelationInput | LocalGoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalGoogleCredentials.
     */
    cursor?: LocalGoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalGoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalGoogleCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalGoogleCredentials.
     */
    distinct?: LocalGoogleCredentialScalarFieldEnum | LocalGoogleCredentialScalarFieldEnum[]
  }

  /**
   * LocalGoogleCredential findFirstOrThrow
   */
  export type LocalGoogleCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which LocalGoogleCredential to fetch.
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalGoogleCredentials to fetch.
     */
    orderBy?: LocalGoogleCredentialOrderByWithRelationInput | LocalGoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalGoogleCredentials.
     */
    cursor?: LocalGoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalGoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalGoogleCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalGoogleCredentials.
     */
    distinct?: LocalGoogleCredentialScalarFieldEnum | LocalGoogleCredentialScalarFieldEnum[]
  }

  /**
   * LocalGoogleCredential findMany
   */
  export type LocalGoogleCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which LocalGoogleCredentials to fetch.
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalGoogleCredentials to fetch.
     */
    orderBy?: LocalGoogleCredentialOrderByWithRelationInput | LocalGoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocalGoogleCredentials.
     */
    cursor?: LocalGoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalGoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalGoogleCredentials.
     */
    skip?: number
    distinct?: LocalGoogleCredentialScalarFieldEnum | LocalGoogleCredentialScalarFieldEnum[]
  }

  /**
   * LocalGoogleCredential create
   */
  export type LocalGoogleCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a LocalGoogleCredential.
     */
    data: XOR<LocalGoogleCredentialCreateInput, LocalGoogleCredentialUncheckedCreateInput>
  }

  /**
   * LocalGoogleCredential createMany
   */
  export type LocalGoogleCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocalGoogleCredentials.
     */
    data: LocalGoogleCredentialCreateManyInput | LocalGoogleCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocalGoogleCredential createManyAndReturn
   */
  export type LocalGoogleCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * The data used to create many LocalGoogleCredentials.
     */
    data: LocalGoogleCredentialCreateManyInput | LocalGoogleCredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocalGoogleCredential update
   */
  export type LocalGoogleCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a LocalGoogleCredential.
     */
    data: XOR<LocalGoogleCredentialUpdateInput, LocalGoogleCredentialUncheckedUpdateInput>
    /**
     * Choose, which LocalGoogleCredential to update.
     */
    where: LocalGoogleCredentialWhereUniqueInput
  }

  /**
   * LocalGoogleCredential updateMany
   */
  export type LocalGoogleCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocalGoogleCredentials.
     */
    data: XOR<LocalGoogleCredentialUpdateManyMutationInput, LocalGoogleCredentialUncheckedUpdateManyInput>
    /**
     * Filter which LocalGoogleCredentials to update
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * Limit how many LocalGoogleCredentials to update.
     */
    limit?: number
  }

  /**
   * LocalGoogleCredential updateManyAndReturn
   */
  export type LocalGoogleCredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * The data used to update LocalGoogleCredentials.
     */
    data: XOR<LocalGoogleCredentialUpdateManyMutationInput, LocalGoogleCredentialUncheckedUpdateManyInput>
    /**
     * Filter which LocalGoogleCredentials to update
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * Limit how many LocalGoogleCredentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocalGoogleCredential upsert
   */
  export type LocalGoogleCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the LocalGoogleCredential to update in case it exists.
     */
    where: LocalGoogleCredentialWhereUniqueInput
    /**
     * In case the LocalGoogleCredential found by the `where` argument doesn't exist, create a new LocalGoogleCredential with this data.
     */
    create: XOR<LocalGoogleCredentialCreateInput, LocalGoogleCredentialUncheckedCreateInput>
    /**
     * In case the LocalGoogleCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalGoogleCredentialUpdateInput, LocalGoogleCredentialUncheckedUpdateInput>
  }

  /**
   * LocalGoogleCredential delete
   */
  export type LocalGoogleCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter which LocalGoogleCredential to delete.
     */
    where: LocalGoogleCredentialWhereUniqueInput
  }

  /**
   * LocalGoogleCredential deleteMany
   */
  export type LocalGoogleCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalGoogleCredentials to delete
     */
    where?: LocalGoogleCredentialWhereInput
    /**
     * Limit how many LocalGoogleCredentials to delete.
     */
    limit?: number
  }

  /**
   * LocalGoogleCredential without action
   */
  export type LocalGoogleCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalGoogleCredential
     */
    select?: LocalGoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalGoogleCredential
     */
    omit?: LocalGoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalGoogleCredentialInclude<ExtArgs> | null
  }


  /**
   * Model DiscordWebhook
   */

  export type AggregateDiscordWebhook = {
    _count: DiscordWebhookCountAggregateOutputType | null
    _min: DiscordWebhookMinAggregateOutputType | null
    _max: DiscordWebhookMaxAggregateOutputType | null
  }

  export type DiscordWebhookMinAggregateOutputType = {
    id: string | null
    webhookId: string | null
    url: string | null
    name: string | null
    guildName: string | null
    guildId: string | null
    channelId: string | null
    userId: string | null
  }

  export type DiscordWebhookMaxAggregateOutputType = {
    id: string | null
    webhookId: string | null
    url: string | null
    name: string | null
    guildName: string | null
    guildId: string | null
    channelId: string | null
    userId: string | null
  }

  export type DiscordWebhookCountAggregateOutputType = {
    id: number
    webhookId: number
    url: number
    name: number
    guildName: number
    guildId: number
    channelId: number
    userId: number
    _all: number
  }


  export type DiscordWebhookMinAggregateInputType = {
    id?: true
    webhookId?: true
    url?: true
    name?: true
    guildName?: true
    guildId?: true
    channelId?: true
    userId?: true
  }

  export type DiscordWebhookMaxAggregateInputType = {
    id?: true
    webhookId?: true
    url?: true
    name?: true
    guildName?: true
    guildId?: true
    channelId?: true
    userId?: true
  }

  export type DiscordWebhookCountAggregateInputType = {
    id?: true
    webhookId?: true
    url?: true
    name?: true
    guildName?: true
    guildId?: true
    channelId?: true
    userId?: true
    _all?: true
  }

  export type DiscordWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordWebhook to aggregate.
     */
    where?: DiscordWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordWebhooks to fetch.
     */
    orderBy?: DiscordWebhookOrderByWithRelationInput | DiscordWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordWebhooks
    **/
    _count?: true | DiscordWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordWebhookMaxAggregateInputType
  }

  export type GetDiscordWebhookAggregateType<T extends DiscordWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordWebhook[P]>
      : GetScalarType<T[P], AggregateDiscordWebhook[P]>
  }




  export type DiscordWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordWebhookWhereInput
    orderBy?: DiscordWebhookOrderByWithAggregationInput | DiscordWebhookOrderByWithAggregationInput[]
    by: DiscordWebhookScalarFieldEnum[] | DiscordWebhookScalarFieldEnum
    having?: DiscordWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordWebhookCountAggregateInputType | true
    _min?: DiscordWebhookMinAggregateInputType
    _max?: DiscordWebhookMaxAggregateInputType
  }

  export type DiscordWebhookGroupByOutputType = {
    id: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    userId: string
    _count: DiscordWebhookCountAggregateOutputType | null
    _min: DiscordWebhookMinAggregateOutputType | null
    _max: DiscordWebhookMaxAggregateOutputType | null
  }

  type GetDiscordWebhookGroupByPayload<T extends DiscordWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordWebhookGroupByOutputType[P]>
        }
      >
    >


  export type DiscordWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    url?: boolean
    name?: boolean
    guildName?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connections?: boolean | DiscordWebhook$connectionsArgs<ExtArgs>
    _count?: boolean | DiscordWebhookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordWebhook"]>

  export type DiscordWebhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    url?: boolean
    name?: boolean
    guildName?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordWebhook"]>

  export type DiscordWebhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    url?: boolean
    name?: boolean
    guildName?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordWebhook"]>

  export type DiscordWebhookSelectScalar = {
    id?: boolean
    webhookId?: boolean
    url?: boolean
    name?: boolean
    guildName?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
  }

  export type DiscordWebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webhookId" | "url" | "name" | "guildName" | "guildId" | "channelId" | "userId", ExtArgs["result"]["discordWebhook"]>
  export type DiscordWebhookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connections?: boolean | DiscordWebhook$connectionsArgs<ExtArgs>
    _count?: boolean | DiscordWebhookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordWebhookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiscordWebhookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiscordWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordWebhook"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connections: Prisma.$ConnectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webhookId: string
      url: string
      name: string
      guildName: string
      guildId: string
      channelId: string
      userId: string
    }, ExtArgs["result"]["discordWebhook"]>
    composites: {}
  }

  type DiscordWebhookGetPayload<S extends boolean | null | undefined | DiscordWebhookDefaultArgs> = $Result.GetResult<Prisma.$DiscordWebhookPayload, S>

  type DiscordWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordWebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordWebhookCountAggregateInputType | true
    }

  export interface DiscordWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordWebhook'], meta: { name: 'DiscordWebhook' } }
    /**
     * Find zero or one DiscordWebhook that matches the filter.
     * @param {DiscordWebhookFindUniqueArgs} args - Arguments to find a DiscordWebhook
     * @example
     * // Get one DiscordWebhook
     * const discordWebhook = await prisma.discordWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordWebhookFindUniqueArgs>(args: SelectSubset<T, DiscordWebhookFindUniqueArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordWebhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordWebhookFindUniqueOrThrowArgs} args - Arguments to find a DiscordWebhook
     * @example
     * // Get one DiscordWebhook
     * const discordWebhook = await prisma.discordWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordWebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordWebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookFindFirstArgs} args - Arguments to find a DiscordWebhook
     * @example
     * // Get one DiscordWebhook
     * const discordWebhook = await prisma.discordWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordWebhookFindFirstArgs>(args?: SelectSubset<T, DiscordWebhookFindFirstArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookFindFirstOrThrowArgs} args - Arguments to find a DiscordWebhook
     * @example
     * // Get one DiscordWebhook
     * const discordWebhook = await prisma.discordWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordWebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordWebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordWebhooks
     * const discordWebhooks = await prisma.discordWebhook.findMany()
     * 
     * // Get first 10 DiscordWebhooks
     * const discordWebhooks = await prisma.discordWebhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordWebhookWithIdOnly = await prisma.discordWebhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordWebhookFindManyArgs>(args?: SelectSubset<T, DiscordWebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordWebhook.
     * @param {DiscordWebhookCreateArgs} args - Arguments to create a DiscordWebhook.
     * @example
     * // Create one DiscordWebhook
     * const DiscordWebhook = await prisma.discordWebhook.create({
     *   data: {
     *     // ... data to create a DiscordWebhook
     *   }
     * })
     * 
     */
    create<T extends DiscordWebhookCreateArgs>(args: SelectSubset<T, DiscordWebhookCreateArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordWebhooks.
     * @param {DiscordWebhookCreateManyArgs} args - Arguments to create many DiscordWebhooks.
     * @example
     * // Create many DiscordWebhooks
     * const discordWebhook = await prisma.discordWebhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordWebhookCreateManyArgs>(args?: SelectSubset<T, DiscordWebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordWebhooks and returns the data saved in the database.
     * @param {DiscordWebhookCreateManyAndReturnArgs} args - Arguments to create many DiscordWebhooks.
     * @example
     * // Create many DiscordWebhooks
     * const discordWebhook = await prisma.discordWebhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordWebhooks and only return the `id`
     * const discordWebhookWithIdOnly = await prisma.discordWebhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordWebhookCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordWebhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordWebhook.
     * @param {DiscordWebhookDeleteArgs} args - Arguments to delete one DiscordWebhook.
     * @example
     * // Delete one DiscordWebhook
     * const DiscordWebhook = await prisma.discordWebhook.delete({
     *   where: {
     *     // ... filter to delete one DiscordWebhook
     *   }
     * })
     * 
     */
    delete<T extends DiscordWebhookDeleteArgs>(args: SelectSubset<T, DiscordWebhookDeleteArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordWebhook.
     * @param {DiscordWebhookUpdateArgs} args - Arguments to update one DiscordWebhook.
     * @example
     * // Update one DiscordWebhook
     * const discordWebhook = await prisma.discordWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordWebhookUpdateArgs>(args: SelectSubset<T, DiscordWebhookUpdateArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordWebhooks.
     * @param {DiscordWebhookDeleteManyArgs} args - Arguments to filter DiscordWebhooks to delete.
     * @example
     * // Delete a few DiscordWebhooks
     * const { count } = await prisma.discordWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordWebhookDeleteManyArgs>(args?: SelectSubset<T, DiscordWebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordWebhooks
     * const discordWebhook = await prisma.discordWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordWebhookUpdateManyArgs>(args: SelectSubset<T, DiscordWebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordWebhooks and returns the data updated in the database.
     * @param {DiscordWebhookUpdateManyAndReturnArgs} args - Arguments to update many DiscordWebhooks.
     * @example
     * // Update many DiscordWebhooks
     * const discordWebhook = await prisma.discordWebhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordWebhooks and only return the `id`
     * const discordWebhookWithIdOnly = await prisma.discordWebhook.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscordWebhookUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordWebhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordWebhook.
     * @param {DiscordWebhookUpsertArgs} args - Arguments to update or create a DiscordWebhook.
     * @example
     * // Update or create a DiscordWebhook
     * const discordWebhook = await prisma.discordWebhook.upsert({
     *   create: {
     *     // ... data to create a DiscordWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordWebhook we want to update
     *   }
     * })
     */
    upsert<T extends DiscordWebhookUpsertArgs>(args: SelectSubset<T, DiscordWebhookUpsertArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookCountArgs} args - Arguments to filter DiscordWebhooks to count.
     * @example
     * // Count the number of DiscordWebhooks
     * const count = await prisma.discordWebhook.count({
     *   where: {
     *     // ... the filter for the DiscordWebhooks we want to count
     *   }
     * })
    **/
    count<T extends DiscordWebhookCountArgs>(
      args?: Subset<T, DiscordWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordWebhookAggregateArgs>(args: Subset<T, DiscordWebhookAggregateArgs>): Prisma.PrismaPromise<GetDiscordWebhookAggregateType<T>>

    /**
     * Group by DiscordWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordWebhookGroupByArgs} args - Group by arguments.
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
      T extends DiscordWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordWebhookGroupByArgs['orderBy'] }
        : { orderBy?: DiscordWebhookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscordWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordWebhook model
   */
  readonly fields: DiscordWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connections<T extends DiscordWebhook$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordWebhook$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiscordWebhook model
   */
  interface DiscordWebhookFieldRefs {
    readonly id: FieldRef<"DiscordWebhook", 'String'>
    readonly webhookId: FieldRef<"DiscordWebhook", 'String'>
    readonly url: FieldRef<"DiscordWebhook", 'String'>
    readonly name: FieldRef<"DiscordWebhook", 'String'>
    readonly guildName: FieldRef<"DiscordWebhook", 'String'>
    readonly guildId: FieldRef<"DiscordWebhook", 'String'>
    readonly channelId: FieldRef<"DiscordWebhook", 'String'>
    readonly userId: FieldRef<"DiscordWebhook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscordWebhook findUnique
   */
  export type DiscordWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DiscordWebhook to fetch.
     */
    where: DiscordWebhookWhereUniqueInput
  }

  /**
   * DiscordWebhook findUniqueOrThrow
   */
  export type DiscordWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DiscordWebhook to fetch.
     */
    where: DiscordWebhookWhereUniqueInput
  }

  /**
   * DiscordWebhook findFirst
   */
  export type DiscordWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DiscordWebhook to fetch.
     */
    where?: DiscordWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordWebhooks to fetch.
     */
    orderBy?: DiscordWebhookOrderByWithRelationInput | DiscordWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordWebhooks.
     */
    cursor?: DiscordWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordWebhooks.
     */
    distinct?: DiscordWebhookScalarFieldEnum | DiscordWebhookScalarFieldEnum[]
  }

  /**
   * DiscordWebhook findFirstOrThrow
   */
  export type DiscordWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DiscordWebhook to fetch.
     */
    where?: DiscordWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordWebhooks to fetch.
     */
    orderBy?: DiscordWebhookOrderByWithRelationInput | DiscordWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordWebhooks.
     */
    cursor?: DiscordWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordWebhooks.
     */
    distinct?: DiscordWebhookScalarFieldEnum | DiscordWebhookScalarFieldEnum[]
  }

  /**
   * DiscordWebhook findMany
   */
  export type DiscordWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * Filter, which DiscordWebhooks to fetch.
     */
    where?: DiscordWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordWebhooks to fetch.
     */
    orderBy?: DiscordWebhookOrderByWithRelationInput | DiscordWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordWebhooks.
     */
    cursor?: DiscordWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordWebhooks.
     */
    skip?: number
    distinct?: DiscordWebhookScalarFieldEnum | DiscordWebhookScalarFieldEnum[]
  }

  /**
   * DiscordWebhook create
   */
  export type DiscordWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordWebhook.
     */
    data: XOR<DiscordWebhookCreateInput, DiscordWebhookUncheckedCreateInput>
  }

  /**
   * DiscordWebhook createMany
   */
  export type DiscordWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordWebhooks.
     */
    data: DiscordWebhookCreateManyInput | DiscordWebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordWebhook createManyAndReturn
   */
  export type DiscordWebhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordWebhooks.
     */
    data: DiscordWebhookCreateManyInput | DiscordWebhookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordWebhook update
   */
  export type DiscordWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordWebhook.
     */
    data: XOR<DiscordWebhookUpdateInput, DiscordWebhookUncheckedUpdateInput>
    /**
     * Choose, which DiscordWebhook to update.
     */
    where: DiscordWebhookWhereUniqueInput
  }

  /**
   * DiscordWebhook updateMany
   */
  export type DiscordWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordWebhooks.
     */
    data: XOR<DiscordWebhookUpdateManyMutationInput, DiscordWebhookUncheckedUpdateManyInput>
    /**
     * Filter which DiscordWebhooks to update
     */
    where?: DiscordWebhookWhereInput
    /**
     * Limit how many DiscordWebhooks to update.
     */
    limit?: number
  }

  /**
   * DiscordWebhook updateManyAndReturn
   */
  export type DiscordWebhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * The data used to update DiscordWebhooks.
     */
    data: XOR<DiscordWebhookUpdateManyMutationInput, DiscordWebhookUncheckedUpdateManyInput>
    /**
     * Filter which DiscordWebhooks to update
     */
    where?: DiscordWebhookWhereInput
    /**
     * Limit how many DiscordWebhooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordWebhook upsert
   */
  export type DiscordWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordWebhook to update in case it exists.
     */
    where: DiscordWebhookWhereUniqueInput
    /**
     * In case the DiscordWebhook found by the `where` argument doesn't exist, create a new DiscordWebhook with this data.
     */
    create: XOR<DiscordWebhookCreateInput, DiscordWebhookUncheckedCreateInput>
    /**
     * In case the DiscordWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordWebhookUpdateInput, DiscordWebhookUncheckedUpdateInput>
  }

  /**
   * DiscordWebhook delete
   */
  export type DiscordWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    /**
     * Filter which DiscordWebhook to delete.
     */
    where: DiscordWebhookWhereUniqueInput
  }

  /**
   * DiscordWebhook deleteMany
   */
  export type DiscordWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordWebhooks to delete
     */
    where?: DiscordWebhookWhereInput
    /**
     * Limit how many DiscordWebhooks to delete.
     */
    limit?: number
  }

  /**
   * DiscordWebhook.connections
   */
  export type DiscordWebhook$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    cursor?: ConnectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * DiscordWebhook without action
   */
  export type DiscordWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
  }


  /**
   * Model Slack
   */

  export type AggregateSlack = {
    _count: SlackCountAggregateOutputType | null
    _min: SlackMinAggregateOutputType | null
    _max: SlackMaxAggregateOutputType | null
  }

  export type SlackMinAggregateOutputType = {
    id: string | null
    appId: string | null
    authedUserId: string | null
    authedUserToken: string | null
    slackAccessToken: string | null
    botUserId: string | null
    teamId: string | null
    teamName: string | null
    userId: string | null
  }

  export type SlackMaxAggregateOutputType = {
    id: string | null
    appId: string | null
    authedUserId: string | null
    authedUserToken: string | null
    slackAccessToken: string | null
    botUserId: string | null
    teamId: string | null
    teamName: string | null
    userId: string | null
  }

  export type SlackCountAggregateOutputType = {
    id: number
    appId: number
    authedUserId: number
    authedUserToken: number
    slackAccessToken: number
    botUserId: number
    teamId: number
    teamName: number
    userId: number
    _all: number
  }


  export type SlackMinAggregateInputType = {
    id?: true
    appId?: true
    authedUserId?: true
    authedUserToken?: true
    slackAccessToken?: true
    botUserId?: true
    teamId?: true
    teamName?: true
    userId?: true
  }

  export type SlackMaxAggregateInputType = {
    id?: true
    appId?: true
    authedUserId?: true
    authedUserToken?: true
    slackAccessToken?: true
    botUserId?: true
    teamId?: true
    teamName?: true
    userId?: true
  }

  export type SlackCountAggregateInputType = {
    id?: true
    appId?: true
    authedUserId?: true
    authedUserToken?: true
    slackAccessToken?: true
    botUserId?: true
    teamId?: true
    teamName?: true
    userId?: true
    _all?: true
  }

  export type SlackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slack to aggregate.
     */
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     */
    orderBy?: SlackOrderByWithRelationInput | SlackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slacks
    **/
    _count?: true | SlackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlackMaxAggregateInputType
  }

  export type GetSlackAggregateType<T extends SlackAggregateArgs> = {
        [P in keyof T & keyof AggregateSlack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlack[P]>
      : GetScalarType<T[P], AggregateSlack[P]>
  }




  export type SlackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlackWhereInput
    orderBy?: SlackOrderByWithAggregationInput | SlackOrderByWithAggregationInput[]
    by: SlackScalarFieldEnum[] | SlackScalarFieldEnum
    having?: SlackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlackCountAggregateInputType | true
    _min?: SlackMinAggregateInputType
    _max?: SlackMaxAggregateInputType
  }

  export type SlackGroupByOutputType = {
    id: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    userId: string
    _count: SlackCountAggregateOutputType | null
    _min: SlackMinAggregateOutputType | null
    _max: SlackMaxAggregateOutputType | null
  }

  type GetSlackGroupByPayload<T extends SlackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlackGroupByOutputType[P]>
            : GetScalarType<T[P], SlackGroupByOutputType[P]>
        }
      >
    >


  export type SlackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    authedUserId?: boolean
    authedUserToken?: boolean
    slackAccessToken?: boolean
    botUserId?: boolean
    teamId?: boolean
    teamName?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    connections?: boolean | Slack$connectionsArgs<ExtArgs>
    _count?: boolean | SlackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slack"]>

  export type SlackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    authedUserId?: boolean
    authedUserToken?: boolean
    slackAccessToken?: boolean
    botUserId?: boolean
    teamId?: boolean
    teamName?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slack"]>

  export type SlackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    authedUserId?: boolean
    authedUserToken?: boolean
    slackAccessToken?: boolean
    botUserId?: boolean
    teamId?: boolean
    teamName?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slack"]>

  export type SlackSelectScalar = {
    id?: boolean
    appId?: boolean
    authedUserId?: boolean
    authedUserToken?: boolean
    slackAccessToken?: boolean
    botUserId?: boolean
    teamId?: boolean
    teamName?: boolean
    userId?: boolean
  }

  export type SlackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appId" | "authedUserId" | "authedUserToken" | "slackAccessToken" | "botUserId" | "teamId" | "teamName" | "userId", ExtArgs["result"]["slack"]>
  export type SlackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    connections?: boolean | Slack$connectionsArgs<ExtArgs>
    _count?: boolean | SlackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SlackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SlackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SlackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slack"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      connections: Prisma.$ConnectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appId: string
      authedUserId: string
      authedUserToken: string
      slackAccessToken: string
      botUserId: string
      teamId: string
      teamName: string
      userId: string
    }, ExtArgs["result"]["slack"]>
    composites: {}
  }

  type SlackGetPayload<S extends boolean | null | undefined | SlackDefaultArgs> = $Result.GetResult<Prisma.$SlackPayload, S>

  type SlackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlackCountAggregateInputType | true
    }

  export interface SlackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slack'], meta: { name: 'Slack' } }
    /**
     * Find zero or one Slack that matches the filter.
     * @param {SlackFindUniqueArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlackFindUniqueArgs>(args: SelectSubset<T, SlackFindUniqueArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Slack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlackFindUniqueOrThrowArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlackFindUniqueOrThrowArgs>(args: SelectSubset<T, SlackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackFindFirstArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlackFindFirstArgs>(args?: SelectSubset<T, SlackFindFirstArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackFindFirstOrThrowArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlackFindFirstOrThrowArgs>(args?: SelectSubset<T, SlackFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Slacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slacks
     * const slacks = await prisma.slack.findMany()
     * 
     * // Get first 10 Slacks
     * const slacks = await prisma.slack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slackWithIdOnly = await prisma.slack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlackFindManyArgs>(args?: SelectSubset<T, SlackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Slack.
     * @param {SlackCreateArgs} args - Arguments to create a Slack.
     * @example
     * // Create one Slack
     * const Slack = await prisma.slack.create({
     *   data: {
     *     // ... data to create a Slack
     *   }
     * })
     * 
     */
    create<T extends SlackCreateArgs>(args: SelectSubset<T, SlackCreateArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Slacks.
     * @param {SlackCreateManyArgs} args - Arguments to create many Slacks.
     * @example
     * // Create many Slacks
     * const slack = await prisma.slack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlackCreateManyArgs>(args?: SelectSubset<T, SlackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slacks and returns the data saved in the database.
     * @param {SlackCreateManyAndReturnArgs} args - Arguments to create many Slacks.
     * @example
     * // Create many Slacks
     * const slack = await prisma.slack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slacks and only return the `id`
     * const slackWithIdOnly = await prisma.slack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlackCreateManyAndReturnArgs>(args?: SelectSubset<T, SlackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Slack.
     * @param {SlackDeleteArgs} args - Arguments to delete one Slack.
     * @example
     * // Delete one Slack
     * const Slack = await prisma.slack.delete({
     *   where: {
     *     // ... filter to delete one Slack
     *   }
     * })
     * 
     */
    delete<T extends SlackDeleteArgs>(args: SelectSubset<T, SlackDeleteArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Slack.
     * @param {SlackUpdateArgs} args - Arguments to update one Slack.
     * @example
     * // Update one Slack
     * const slack = await prisma.slack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlackUpdateArgs>(args: SelectSubset<T, SlackUpdateArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Slacks.
     * @param {SlackDeleteManyArgs} args - Arguments to filter Slacks to delete.
     * @example
     * // Delete a few Slacks
     * const { count } = await prisma.slack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlackDeleteManyArgs>(args?: SelectSubset<T, SlackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slacks
     * const slack = await prisma.slack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlackUpdateManyArgs>(args: SelectSubset<T, SlackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slacks and returns the data updated in the database.
     * @param {SlackUpdateManyAndReturnArgs} args - Arguments to update many Slacks.
     * @example
     * // Update many Slacks
     * const slack = await prisma.slack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Slacks and only return the `id`
     * const slackWithIdOnly = await prisma.slack.updateManyAndReturn({
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
    updateManyAndReturn<T extends SlackUpdateManyAndReturnArgs>(args: SelectSubset<T, SlackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Slack.
     * @param {SlackUpsertArgs} args - Arguments to update or create a Slack.
     * @example
     * // Update or create a Slack
     * const slack = await prisma.slack.upsert({
     *   create: {
     *     // ... data to create a Slack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slack we want to update
     *   }
     * })
     */
    upsert<T extends SlackUpsertArgs>(args: SelectSubset<T, SlackUpsertArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Slacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackCountArgs} args - Arguments to filter Slacks to count.
     * @example
     * // Count the number of Slacks
     * const count = await prisma.slack.count({
     *   where: {
     *     // ... the filter for the Slacks we want to count
     *   }
     * })
    **/
    count<T extends SlackCountArgs>(
      args?: Subset<T, SlackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlackAggregateArgs>(args: Subset<T, SlackAggregateArgs>): Prisma.PrismaPromise<GetSlackAggregateType<T>>

    /**
     * Group by Slack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackGroupByArgs} args - Group by arguments.
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
      T extends SlackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlackGroupByArgs['orderBy'] }
        : { orderBy?: SlackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slack model
   */
  readonly fields: SlackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connections<T extends Slack$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, Slack$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Slack model
   */
  interface SlackFieldRefs {
    readonly id: FieldRef<"Slack", 'String'>
    readonly appId: FieldRef<"Slack", 'String'>
    readonly authedUserId: FieldRef<"Slack", 'String'>
    readonly authedUserToken: FieldRef<"Slack", 'String'>
    readonly slackAccessToken: FieldRef<"Slack", 'String'>
    readonly botUserId: FieldRef<"Slack", 'String'>
    readonly teamId: FieldRef<"Slack", 'String'>
    readonly teamName: FieldRef<"Slack", 'String'>
    readonly userId: FieldRef<"Slack", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Slack findUnique
   */
  export type SlackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * Filter, which Slack to fetch.
     */
    where: SlackWhereUniqueInput
  }

  /**
   * Slack findUniqueOrThrow
   */
  export type SlackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * Filter, which Slack to fetch.
     */
    where: SlackWhereUniqueInput
  }

  /**
   * Slack findFirst
   */
  export type SlackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * Filter, which Slack to fetch.
     */
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     */
    orderBy?: SlackOrderByWithRelationInput | SlackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slacks.
     */
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slacks.
     */
    distinct?: SlackScalarFieldEnum | SlackScalarFieldEnum[]
  }

  /**
   * Slack findFirstOrThrow
   */
  export type SlackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * Filter, which Slack to fetch.
     */
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     */
    orderBy?: SlackOrderByWithRelationInput | SlackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slacks.
     */
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slacks.
     */
    distinct?: SlackScalarFieldEnum | SlackScalarFieldEnum[]
  }

  /**
   * Slack findMany
   */
  export type SlackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * Filter, which Slacks to fetch.
     */
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     */
    orderBy?: SlackOrderByWithRelationInput | SlackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slacks.
     */
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     */
    skip?: number
    distinct?: SlackScalarFieldEnum | SlackScalarFieldEnum[]
  }

  /**
   * Slack create
   */
  export type SlackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * The data needed to create a Slack.
     */
    data: XOR<SlackCreateInput, SlackUncheckedCreateInput>
  }

  /**
   * Slack createMany
   */
  export type SlackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slacks.
     */
    data: SlackCreateManyInput | SlackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slack createManyAndReturn
   */
  export type SlackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * The data used to create many Slacks.
     */
    data: SlackCreateManyInput | SlackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Slack update
   */
  export type SlackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * The data needed to update a Slack.
     */
    data: XOR<SlackUpdateInput, SlackUncheckedUpdateInput>
    /**
     * Choose, which Slack to update.
     */
    where: SlackWhereUniqueInput
  }

  /**
   * Slack updateMany
   */
  export type SlackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slacks.
     */
    data: XOR<SlackUpdateManyMutationInput, SlackUncheckedUpdateManyInput>
    /**
     * Filter which Slacks to update
     */
    where?: SlackWhereInput
    /**
     * Limit how many Slacks to update.
     */
    limit?: number
  }

  /**
   * Slack updateManyAndReturn
   */
  export type SlackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * The data used to update Slacks.
     */
    data: XOR<SlackUpdateManyMutationInput, SlackUncheckedUpdateManyInput>
    /**
     * Filter which Slacks to update
     */
    where?: SlackWhereInput
    /**
     * Limit how many Slacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Slack upsert
   */
  export type SlackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * The filter to search for the Slack to update in case it exists.
     */
    where: SlackWhereUniqueInput
    /**
     * In case the Slack found by the `where` argument doesn't exist, create a new Slack with this data.
     */
    create: XOR<SlackCreateInput, SlackUncheckedCreateInput>
    /**
     * In case the Slack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlackUpdateInput, SlackUncheckedUpdateInput>
  }

  /**
   * Slack delete
   */
  export type SlackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    /**
     * Filter which Slack to delete.
     */
    where: SlackWhereUniqueInput
  }

  /**
   * Slack deleteMany
   */
  export type SlackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slacks to delete
     */
    where?: SlackWhereInput
    /**
     * Limit how many Slacks to delete.
     */
    limit?: number
  }

  /**
   * Slack.connections
   */
  export type Slack$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    cursor?: ConnectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Slack without action
   */
  export type SlackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
  }


  /**
   * Model Notion
   */

  export type AggregateNotion = {
    _count: NotionCountAggregateOutputType | null
    _min: NotionMinAggregateOutputType | null
    _max: NotionMaxAggregateOutputType | null
  }

  export type NotionMinAggregateOutputType = {
    id: string | null
    accessToken: string | null
    workspaceId: string | null
    databaseId: string | null
    workspaceName: string | null
    workspaceIcon: string | null
    userId: string | null
  }

  export type NotionMaxAggregateOutputType = {
    id: string | null
    accessToken: string | null
    workspaceId: string | null
    databaseId: string | null
    workspaceName: string | null
    workspaceIcon: string | null
    userId: string | null
  }

  export type NotionCountAggregateOutputType = {
    id: number
    accessToken: number
    workspaceId: number
    databaseId: number
    workspaceName: number
    workspaceIcon: number
    userId: number
    _all: number
  }


  export type NotionMinAggregateInputType = {
    id?: true
    accessToken?: true
    workspaceId?: true
    databaseId?: true
    workspaceName?: true
    workspaceIcon?: true
    userId?: true
  }

  export type NotionMaxAggregateInputType = {
    id?: true
    accessToken?: true
    workspaceId?: true
    databaseId?: true
    workspaceName?: true
    workspaceIcon?: true
    userId?: true
  }

  export type NotionCountAggregateInputType = {
    id?: true
    accessToken?: true
    workspaceId?: true
    databaseId?: true
    workspaceName?: true
    workspaceIcon?: true
    userId?: true
    _all?: true
  }

  export type NotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notion to aggregate.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notions
    **/
    _count?: true | NotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotionMaxAggregateInputType
  }

  export type GetNotionAggregateType<T extends NotionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotion[P]>
      : GetScalarType<T[P], AggregateNotion[P]>
  }




  export type NotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotionWhereInput
    orderBy?: NotionOrderByWithAggregationInput | NotionOrderByWithAggregationInput[]
    by: NotionScalarFieldEnum[] | NotionScalarFieldEnum
    having?: NotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotionCountAggregateInputType | true
    _min?: NotionMinAggregateInputType
    _max?: NotionMaxAggregateInputType
  }

  export type NotionGroupByOutputType = {
    id: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    userId: string
    _count: NotionCountAggregateOutputType | null
    _min: NotionMinAggregateOutputType | null
    _max: NotionMaxAggregateOutputType | null
  }

  type GetNotionGroupByPayload<T extends NotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotionGroupByOutputType[P]>
            : GetScalarType<T[P], NotionGroupByOutputType[P]>
        }
      >
    >


  export type NotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    workspaceId?: boolean
    databaseId?: boolean
    workspaceName?: boolean
    workspaceIcon?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    connections?: boolean | Notion$connectionsArgs<ExtArgs>
    _count?: boolean | NotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notion"]>

  export type NotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    workspaceId?: boolean
    databaseId?: boolean
    workspaceName?: boolean
    workspaceIcon?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notion"]>

  export type NotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    workspaceId?: boolean
    databaseId?: boolean
    workspaceName?: boolean
    workspaceIcon?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notion"]>

  export type NotionSelectScalar = {
    id?: boolean
    accessToken?: boolean
    workspaceId?: boolean
    databaseId?: boolean
    workspaceName?: boolean
    workspaceIcon?: boolean
    userId?: boolean
  }

  export type NotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessToken" | "workspaceId" | "databaseId" | "workspaceName" | "workspaceIcon" | "userId", ExtArgs["result"]["notion"]>
  export type NotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    connections?: boolean | Notion$connectionsArgs<ExtArgs>
    _count?: boolean | NotionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notion"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      connections: Prisma.$ConnectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accessToken: string
      workspaceId: string
      databaseId: string
      workspaceName: string
      workspaceIcon: string
      userId: string
    }, ExtArgs["result"]["notion"]>
    composites: {}
  }

  type NotionGetPayload<S extends boolean | null | undefined | NotionDefaultArgs> = $Result.GetResult<Prisma.$NotionPayload, S>

  type NotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotionCountAggregateInputType | true
    }

  export interface NotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notion'], meta: { name: 'Notion' } }
    /**
     * Find zero or one Notion that matches the filter.
     * @param {NotionFindUniqueArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotionFindUniqueArgs>(args: SelectSubset<T, NotionFindUniqueArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotionFindUniqueOrThrowArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotionFindUniqueOrThrowArgs>(args: SelectSubset<T, NotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionFindFirstArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotionFindFirstArgs>(args?: SelectSubset<T, NotionFindFirstArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionFindFirstOrThrowArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotionFindFirstOrThrowArgs>(args?: SelectSubset<T, NotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notions
     * const notions = await prisma.notion.findMany()
     * 
     * // Get first 10 Notions
     * const notions = await prisma.notion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notionWithIdOnly = await prisma.notion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotionFindManyArgs>(args?: SelectSubset<T, NotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notion.
     * @param {NotionCreateArgs} args - Arguments to create a Notion.
     * @example
     * // Create one Notion
     * const Notion = await prisma.notion.create({
     *   data: {
     *     // ... data to create a Notion
     *   }
     * })
     * 
     */
    create<T extends NotionCreateArgs>(args: SelectSubset<T, NotionCreateArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notions.
     * @param {NotionCreateManyArgs} args - Arguments to create many Notions.
     * @example
     * // Create many Notions
     * const notion = await prisma.notion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotionCreateManyArgs>(args?: SelectSubset<T, NotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notions and returns the data saved in the database.
     * @param {NotionCreateManyAndReturnArgs} args - Arguments to create many Notions.
     * @example
     * // Create many Notions
     * const notion = await prisma.notion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notions and only return the `id`
     * const notionWithIdOnly = await prisma.notion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotionCreateManyAndReturnArgs>(args?: SelectSubset<T, NotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notion.
     * @param {NotionDeleteArgs} args - Arguments to delete one Notion.
     * @example
     * // Delete one Notion
     * const Notion = await prisma.notion.delete({
     *   where: {
     *     // ... filter to delete one Notion
     *   }
     * })
     * 
     */
    delete<T extends NotionDeleteArgs>(args: SelectSubset<T, NotionDeleteArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notion.
     * @param {NotionUpdateArgs} args - Arguments to update one Notion.
     * @example
     * // Update one Notion
     * const notion = await prisma.notion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotionUpdateArgs>(args: SelectSubset<T, NotionUpdateArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notions.
     * @param {NotionDeleteManyArgs} args - Arguments to filter Notions to delete.
     * @example
     * // Delete a few Notions
     * const { count } = await prisma.notion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotionDeleteManyArgs>(args?: SelectSubset<T, NotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notions
     * const notion = await prisma.notion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotionUpdateManyArgs>(args: SelectSubset<T, NotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notions and returns the data updated in the database.
     * @param {NotionUpdateManyAndReturnArgs} args - Arguments to update many Notions.
     * @example
     * // Update many Notions
     * const notion = await prisma.notion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notions and only return the `id`
     * const notionWithIdOnly = await prisma.notion.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotionUpdateManyAndReturnArgs>(args: SelectSubset<T, NotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notion.
     * @param {NotionUpsertArgs} args - Arguments to update or create a Notion.
     * @example
     * // Update or create a Notion
     * const notion = await prisma.notion.upsert({
     *   create: {
     *     // ... data to create a Notion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notion we want to update
     *   }
     * })
     */
    upsert<T extends NotionUpsertArgs>(args: SelectSubset<T, NotionUpsertArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionCountArgs} args - Arguments to filter Notions to count.
     * @example
     * // Count the number of Notions
     * const count = await prisma.notion.count({
     *   where: {
     *     // ... the filter for the Notions we want to count
     *   }
     * })
    **/
    count<T extends NotionCountArgs>(
      args?: Subset<T, NotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotionAggregateArgs>(args: Subset<T, NotionAggregateArgs>): Prisma.PrismaPromise<GetNotionAggregateType<T>>

    /**
     * Group by Notion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionGroupByArgs} args - Group by arguments.
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
      T extends NotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotionGroupByArgs['orderBy'] }
        : { orderBy?: NotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notion model
   */
  readonly fields: NotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connections<T extends Notion$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, Notion$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Notion model
   */
  interface NotionFieldRefs {
    readonly id: FieldRef<"Notion", 'String'>
    readonly accessToken: FieldRef<"Notion", 'String'>
    readonly workspaceId: FieldRef<"Notion", 'String'>
    readonly databaseId: FieldRef<"Notion", 'String'>
    readonly workspaceName: FieldRef<"Notion", 'String'>
    readonly workspaceIcon: FieldRef<"Notion", 'String'>
    readonly userId: FieldRef<"Notion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notion findUnique
   */
  export type NotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where: NotionWhereUniqueInput
  }

  /**
   * Notion findUniqueOrThrow
   */
  export type NotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where: NotionWhereUniqueInput
  }

  /**
   * Notion findFirst
   */
  export type NotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notions.
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notions.
     */
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }

  /**
   * Notion findFirstOrThrow
   */
  export type NotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notions.
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notions.
     */
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }

  /**
   * Notion findMany
   */
  export type NotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notions to fetch.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notions.
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }

  /**
   * Notion create
   */
  export type NotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Notion.
     */
    data: XOR<NotionCreateInput, NotionUncheckedCreateInput>
  }

  /**
   * Notion createMany
   */
  export type NotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notions.
     */
    data: NotionCreateManyInput | NotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notion createManyAndReturn
   */
  export type NotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * The data used to create many Notions.
     */
    data: NotionCreateManyInput | NotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notion update
   */
  export type NotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Notion.
     */
    data: XOR<NotionUpdateInput, NotionUncheckedUpdateInput>
    /**
     * Choose, which Notion to update.
     */
    where: NotionWhereUniqueInput
  }

  /**
   * Notion updateMany
   */
  export type NotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notions.
     */
    data: XOR<NotionUpdateManyMutationInput, NotionUncheckedUpdateManyInput>
    /**
     * Filter which Notions to update
     */
    where?: NotionWhereInput
    /**
     * Limit how many Notions to update.
     */
    limit?: number
  }

  /**
   * Notion updateManyAndReturn
   */
  export type NotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * The data used to update Notions.
     */
    data: XOR<NotionUpdateManyMutationInput, NotionUncheckedUpdateManyInput>
    /**
     * Filter which Notions to update
     */
    where?: NotionWhereInput
    /**
     * Limit how many Notions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notion upsert
   */
  export type NotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Notion to update in case it exists.
     */
    where: NotionWhereUniqueInput
    /**
     * In case the Notion found by the `where` argument doesn't exist, create a new Notion with this data.
     */
    create: XOR<NotionCreateInput, NotionUncheckedCreateInput>
    /**
     * In case the Notion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotionUpdateInput, NotionUncheckedUpdateInput>
  }

  /**
   * Notion delete
   */
  export type NotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter which Notion to delete.
     */
    where: NotionWhereUniqueInput
  }

  /**
   * Notion deleteMany
   */
  export type NotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notions to delete
     */
    where?: NotionWhereInput
    /**
     * Limit how many Notions to delete.
     */
    limit?: number
  }

  /**
   * Notion.connections
   */
  export type Notion$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    cursor?: ConnectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Notion without action
   */
  export type NotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
  }


  /**
   * Model Connections
   */

  export type AggregateConnections = {
    _count: ConnectionsCountAggregateOutputType | null
    _min: ConnectionsMinAggregateOutputType | null
    _max: ConnectionsMaxAggregateOutputType | null
  }

  export type ConnectionsMinAggregateOutputType = {
    id: string | null
    type: string | null
    discordWebhookId: string | null
    notionId: string | null
    userId: string | null
    slackId: string | null
  }

  export type ConnectionsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    discordWebhookId: string | null
    notionId: string | null
    userId: string | null
    slackId: string | null
  }

  export type ConnectionsCountAggregateOutputType = {
    id: number
    type: number
    discordWebhookId: number
    notionId: number
    userId: number
    slackId: number
    _all: number
  }


  export type ConnectionsMinAggregateInputType = {
    id?: true
    type?: true
    discordWebhookId?: true
    notionId?: true
    userId?: true
    slackId?: true
  }

  export type ConnectionsMaxAggregateInputType = {
    id?: true
    type?: true
    discordWebhookId?: true
    notionId?: true
    userId?: true
    slackId?: true
  }

  export type ConnectionsCountAggregateInputType = {
    id?: true
    type?: true
    discordWebhookId?: true
    notionId?: true
    userId?: true
    slackId?: true
    _all?: true
  }

  export type ConnectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to aggregate.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionsMaxAggregateInputType
  }

  export type GetConnectionsAggregateType<T extends ConnectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateConnections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnections[P]>
      : GetScalarType<T[P], AggregateConnections[P]>
  }




  export type ConnectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithAggregationInput | ConnectionsOrderByWithAggregationInput[]
    by: ConnectionsScalarFieldEnum[] | ConnectionsScalarFieldEnum
    having?: ConnectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionsCountAggregateInputType | true
    _min?: ConnectionsMinAggregateInputType
    _max?: ConnectionsMaxAggregateInputType
  }

  export type ConnectionsGroupByOutputType = {
    id: string
    type: string
    discordWebhookId: string | null
    notionId: string | null
    userId: string | null
    slackId: string | null
    _count: ConnectionsCountAggregateOutputType | null
    _min: ConnectionsMinAggregateOutputType | null
    _max: ConnectionsMaxAggregateOutputType | null
  }

  type GetConnectionsGroupByPayload<T extends ConnectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionsGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionsGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    discordWebhookId?: boolean
    notionId?: boolean
    userId?: boolean
    slackId?: boolean
    DiscordWebhook?: boolean | Connections$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | Connections$NotionArgs<ExtArgs>
    User?: boolean | Connections$UserArgs<ExtArgs>
    Slack?: boolean | Connections$SlackArgs<ExtArgs>
  }, ExtArgs["result"]["connections"]>

  export type ConnectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    discordWebhookId?: boolean
    notionId?: boolean
    userId?: boolean
    slackId?: boolean
    DiscordWebhook?: boolean | Connections$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | Connections$NotionArgs<ExtArgs>
    User?: boolean | Connections$UserArgs<ExtArgs>
    Slack?: boolean | Connections$SlackArgs<ExtArgs>
  }, ExtArgs["result"]["connections"]>

  export type ConnectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    discordWebhookId?: boolean
    notionId?: boolean
    userId?: boolean
    slackId?: boolean
    DiscordWebhook?: boolean | Connections$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | Connections$NotionArgs<ExtArgs>
    User?: boolean | Connections$UserArgs<ExtArgs>
    Slack?: boolean | Connections$SlackArgs<ExtArgs>
  }, ExtArgs["result"]["connections"]>

  export type ConnectionsSelectScalar = {
    id?: boolean
    type?: boolean
    discordWebhookId?: boolean
    notionId?: boolean
    userId?: boolean
    slackId?: boolean
  }

  export type ConnectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "discordWebhookId" | "notionId" | "userId" | "slackId", ExtArgs["result"]["connections"]>
  export type ConnectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordWebhook?: boolean | Connections$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | Connections$NotionArgs<ExtArgs>
    User?: boolean | Connections$UserArgs<ExtArgs>
    Slack?: boolean | Connections$SlackArgs<ExtArgs>
  }
  export type ConnectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordWebhook?: boolean | Connections$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | Connections$NotionArgs<ExtArgs>
    User?: boolean | Connections$UserArgs<ExtArgs>
    Slack?: boolean | Connections$SlackArgs<ExtArgs>
  }
  export type ConnectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordWebhook?: boolean | Connections$DiscordWebhookArgs<ExtArgs>
    Notion?: boolean | Connections$NotionArgs<ExtArgs>
    User?: boolean | Connections$UserArgs<ExtArgs>
    Slack?: boolean | Connections$SlackArgs<ExtArgs>
  }

  export type $ConnectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connections"
    objects: {
      DiscordWebhook: Prisma.$DiscordWebhookPayload<ExtArgs> | null
      Notion: Prisma.$NotionPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
      Slack: Prisma.$SlackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      discordWebhookId: string | null
      notionId: string | null
      userId: string | null
      slackId: string | null
    }, ExtArgs["result"]["connections"]>
    composites: {}
  }

  type ConnectionsGetPayload<S extends boolean | null | undefined | ConnectionsDefaultArgs> = $Result.GetResult<Prisma.$ConnectionsPayload, S>

  type ConnectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionsCountAggregateInputType | true
    }

  export interface ConnectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connections'], meta: { name: 'Connections' } }
    /**
     * Find zero or one Connections that matches the filter.
     * @param {ConnectionsFindUniqueArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionsFindUniqueArgs>(args: SelectSubset<T, ConnectionsFindUniqueArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionsFindUniqueOrThrowArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsFindFirstArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionsFindFirstArgs>(args?: SelectSubset<T, ConnectionsFindFirstArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsFindFirstOrThrowArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connections.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionsWithIdOnly = await prisma.connections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionsFindManyArgs>(args?: SelectSubset<T, ConnectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connections.
     * @param {ConnectionsCreateArgs} args - Arguments to create a Connections.
     * @example
     * // Create one Connections
     * const Connections = await prisma.connections.create({
     *   data: {
     *     // ... data to create a Connections
     *   }
     * })
     * 
     */
    create<T extends ConnectionsCreateArgs>(args: SelectSubset<T, ConnectionsCreateArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionsCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connections = await prisma.connections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionsCreateManyArgs>(args?: SelectSubset<T, ConnectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionsCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connections = await prisma.connections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionsWithIdOnly = await prisma.connections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connections.
     * @param {ConnectionsDeleteArgs} args - Arguments to delete one Connections.
     * @example
     * // Delete one Connections
     * const Connections = await prisma.connections.delete({
     *   where: {
     *     // ... filter to delete one Connections
     *   }
     * })
     * 
     */
    delete<T extends ConnectionsDeleteArgs>(args: SelectSubset<T, ConnectionsDeleteArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connections.
     * @param {ConnectionsUpdateArgs} args - Arguments to update one Connections.
     * @example
     * // Update one Connections
     * const connections = await prisma.connections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionsUpdateArgs>(args: SelectSubset<T, ConnectionsUpdateArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionsDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionsDeleteManyArgs>(args?: SelectSubset<T, ConnectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connections = await prisma.connections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionsUpdateManyArgs>(args: SelectSubset<T, ConnectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionsUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connections = await prisma.connections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionsWithIdOnly = await prisma.connections.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConnectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connections.
     * @param {ConnectionsUpsertArgs} args - Arguments to update or create a Connections.
     * @example
     * // Update or create a Connections
     * const connections = await prisma.connections.upsert({
     *   create: {
     *     // ... data to create a Connections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connections we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionsUpsertArgs>(args: SelectSubset<T, ConnectionsUpsertArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connections.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionsCountArgs>(
      args?: Subset<T, ConnectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionsAggregateArgs>(args: Subset<T, ConnectionsAggregateArgs>): Prisma.PrismaPromise<GetConnectionsAggregateType<T>>

    /**
     * Group by Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsGroupByArgs} args - Group by arguments.
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
      T extends ConnectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionsGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connections model
   */
  readonly fields: ConnectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiscordWebhook<T extends Connections$DiscordWebhookArgs<ExtArgs> = {}>(args?: Subset<T, Connections$DiscordWebhookArgs<ExtArgs>>): Prisma__DiscordWebhookClient<$Result.GetResult<Prisma.$DiscordWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Notion<T extends Connections$NotionArgs<ExtArgs> = {}>(args?: Subset<T, Connections$NotionArgs<ExtArgs>>): Prisma__NotionClient<$Result.GetResult<Prisma.$NotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends Connections$UserArgs<ExtArgs> = {}>(args?: Subset<T, Connections$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Slack<T extends Connections$SlackArgs<ExtArgs> = {}>(args?: Subset<T, Connections$SlackArgs<ExtArgs>>): Prisma__SlackClient<$Result.GetResult<Prisma.$SlackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Connections model
   */
  interface ConnectionsFieldRefs {
    readonly id: FieldRef<"Connections", 'String'>
    readonly type: FieldRef<"Connections", 'String'>
    readonly discordWebhookId: FieldRef<"Connections", 'String'>
    readonly notionId: FieldRef<"Connections", 'String'>
    readonly userId: FieldRef<"Connections", 'String'>
    readonly slackId: FieldRef<"Connections", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Connections findUnique
   */
  export type ConnectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections findUniqueOrThrow
   */
  export type ConnectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections findFirst
   */
  export type ConnectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Connections findFirstOrThrow
   */
  export type ConnectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Connections findMany
   */
  export type ConnectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Connections create
   */
  export type ConnectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Connections.
     */
    data: XOR<ConnectionsCreateInput, ConnectionsUncheckedCreateInput>
  }

  /**
   * Connections createMany
   */
  export type ConnectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionsCreateManyInput | ConnectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connections createManyAndReturn
   */
  export type ConnectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionsCreateManyInput | ConnectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connections update
   */
  export type ConnectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Connections.
     */
    data: XOR<ConnectionsUpdateInput, ConnectionsUncheckedUpdateInput>
    /**
     * Choose, which Connections to update.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections updateMany
   */
  export type ConnectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionsWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connections updateManyAndReturn
   */
  export type ConnectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionsWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connections upsert
   */
  export type ConnectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Connections to update in case it exists.
     */
    where: ConnectionsWhereUniqueInput
    /**
     * In case the Connections found by the `where` argument doesn't exist, create a new Connections with this data.
     */
    create: XOR<ConnectionsCreateInput, ConnectionsUncheckedCreateInput>
    /**
     * In case the Connections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionsUpdateInput, ConnectionsUncheckedUpdateInput>
  }

  /**
   * Connections delete
   */
  export type ConnectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter which Connections to delete.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections deleteMany
   */
  export type ConnectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionsWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connections.DiscordWebhook
   */
  export type Connections$DiscordWebhookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordWebhook
     */
    select?: DiscordWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordWebhook
     */
    omit?: DiscordWebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordWebhookInclude<ExtArgs> | null
    where?: DiscordWebhookWhereInput
  }

  /**
   * Connections.Notion
   */
  export type Connections$NotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notion
     */
    omit?: NotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotionInclude<ExtArgs> | null
    where?: NotionWhereInput
  }

  /**
   * Connections.User
   */
  export type Connections$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Connections.Slack
   */
  export type Connections$SlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slack
     */
    select?: SlackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slack
     */
    omit?: SlackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlackInclude<ExtArgs> | null
    where?: SlackWhereInput
  }

  /**
   * Connections without action
   */
  export type ConnectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
  }


  /**
   * Model Workflows
   */

  export type AggregateWorkflows = {
    _count: WorkflowsCountAggregateOutputType | null
    _min: WorkflowsMinAggregateOutputType | null
    _max: WorkflowsMaxAggregateOutputType | null
  }

  export type WorkflowsMinAggregateOutputType = {
    id: string | null
    nodes: string | null
    edges: string | null
    name: string | null
    discordTemplate: string | null
    notionTemplate: string | null
    slackTemplate: string | null
    slackAccessToken: string | null
    notionAccessToken: string | null
    notionDbId: string | null
    flowPath: string | null
    cronPath: string | null
    publish: boolean | null
    description: string | null
    userId: string | null
  }

  export type WorkflowsMaxAggregateOutputType = {
    id: string | null
    nodes: string | null
    edges: string | null
    name: string | null
    discordTemplate: string | null
    notionTemplate: string | null
    slackTemplate: string | null
    slackAccessToken: string | null
    notionAccessToken: string | null
    notionDbId: string | null
    flowPath: string | null
    cronPath: string | null
    publish: boolean | null
    description: string | null
    userId: string | null
  }

  export type WorkflowsCountAggregateOutputType = {
    id: number
    nodes: number
    edges: number
    name: number
    discordTemplate: number
    notionTemplate: number
    slackTemplate: number
    slackChannels: number
    slackAccessToken: number
    notionAccessToken: number
    notionDbId: number
    flowPath: number
    cronPath: number
    publish: number
    description: number
    userId: number
    _all: number
  }


  export type WorkflowsMinAggregateInputType = {
    id?: true
    nodes?: true
    edges?: true
    name?: true
    discordTemplate?: true
    notionTemplate?: true
    slackTemplate?: true
    slackAccessToken?: true
    notionAccessToken?: true
    notionDbId?: true
    flowPath?: true
    cronPath?: true
    publish?: true
    description?: true
    userId?: true
  }

  export type WorkflowsMaxAggregateInputType = {
    id?: true
    nodes?: true
    edges?: true
    name?: true
    discordTemplate?: true
    notionTemplate?: true
    slackTemplate?: true
    slackAccessToken?: true
    notionAccessToken?: true
    notionDbId?: true
    flowPath?: true
    cronPath?: true
    publish?: true
    description?: true
    userId?: true
  }

  export type WorkflowsCountAggregateInputType = {
    id?: true
    nodes?: true
    edges?: true
    name?: true
    discordTemplate?: true
    notionTemplate?: true
    slackTemplate?: true
    slackChannels?: true
    slackAccessToken?: true
    notionAccessToken?: true
    notionDbId?: true
    flowPath?: true
    cronPath?: true
    publish?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type WorkflowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to aggregate.
     */
    where?: WorkflowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowsOrderByWithRelationInput | WorkflowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowsMaxAggregateInputType
  }

  export type GetWorkflowsAggregateType<T extends WorkflowsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflows[P]>
      : GetScalarType<T[P], AggregateWorkflows[P]>
  }




  export type WorkflowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowsWhereInput
    orderBy?: WorkflowsOrderByWithAggregationInput | WorkflowsOrderByWithAggregationInput[]
    by: WorkflowsScalarFieldEnum[] | WorkflowsScalarFieldEnum
    having?: WorkflowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowsCountAggregateInputType | true
    _min?: WorkflowsMinAggregateInputType
    _max?: WorkflowsMaxAggregateInputType
  }

  export type WorkflowsGroupByOutputType = {
    id: string
    nodes: string | null
    edges: string | null
    name: string
    discordTemplate: string | null
    notionTemplate: string | null
    slackTemplate: string | null
    slackChannels: string[]
    slackAccessToken: string | null
    notionAccessToken: string | null
    notionDbId: string | null
    flowPath: string | null
    cronPath: string | null
    publish: boolean | null
    description: string
    userId: string
    _count: WorkflowsCountAggregateOutputType | null
    _min: WorkflowsMinAggregateOutputType | null
    _max: WorkflowsMaxAggregateOutputType | null
  }

  type GetWorkflowsGroupByPayload<T extends WorkflowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowsGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nodes?: boolean
    edges?: boolean
    name?: boolean
    discordTemplate?: boolean
    notionTemplate?: boolean
    slackTemplate?: boolean
    slackChannels?: boolean
    slackAccessToken?: boolean
    notionAccessToken?: boolean
    notionDbId?: boolean
    flowPath?: boolean
    cronPath?: boolean
    publish?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflows"]>

  export type WorkflowsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nodes?: boolean
    edges?: boolean
    name?: boolean
    discordTemplate?: boolean
    notionTemplate?: boolean
    slackTemplate?: boolean
    slackChannels?: boolean
    slackAccessToken?: boolean
    notionAccessToken?: boolean
    notionDbId?: boolean
    flowPath?: boolean
    cronPath?: boolean
    publish?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflows"]>

  export type WorkflowsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nodes?: boolean
    edges?: boolean
    name?: boolean
    discordTemplate?: boolean
    notionTemplate?: boolean
    slackTemplate?: boolean
    slackChannels?: boolean
    slackAccessToken?: boolean
    notionAccessToken?: boolean
    notionDbId?: boolean
    flowPath?: boolean
    cronPath?: boolean
    publish?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflows"]>

  export type WorkflowsSelectScalar = {
    id?: boolean
    nodes?: boolean
    edges?: boolean
    name?: boolean
    discordTemplate?: boolean
    notionTemplate?: boolean
    slackTemplate?: boolean
    slackChannels?: boolean
    slackAccessToken?: boolean
    notionAccessToken?: boolean
    notionDbId?: boolean
    flowPath?: boolean
    cronPath?: boolean
    publish?: boolean
    description?: boolean
    userId?: boolean
  }

  export type WorkflowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nodes" | "edges" | "name" | "discordTemplate" | "notionTemplate" | "slackTemplate" | "slackChannels" | "slackAccessToken" | "notionAccessToken" | "notionDbId" | "flowPath" | "cronPath" | "publish" | "description" | "userId", ExtArgs["result"]["workflows"]>
  export type WorkflowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflows"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nodes: string | null
      edges: string | null
      name: string
      discordTemplate: string | null
      notionTemplate: string | null
      slackTemplate: string | null
      slackChannels: string[]
      slackAccessToken: string | null
      notionAccessToken: string | null
      notionDbId: string | null
      flowPath: string | null
      cronPath: string | null
      publish: boolean | null
      description: string
      userId: string
    }, ExtArgs["result"]["workflows"]>
    composites: {}
  }

  type WorkflowsGetPayload<S extends boolean | null | undefined | WorkflowsDefaultArgs> = $Result.GetResult<Prisma.$WorkflowsPayload, S>

  type WorkflowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowsCountAggregateInputType | true
    }

  export interface WorkflowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflows'], meta: { name: 'Workflows' } }
    /**
     * Find zero or one Workflows that matches the filter.
     * @param {WorkflowsFindUniqueArgs} args - Arguments to find a Workflows
     * @example
     * // Get one Workflows
     * const workflows = await prisma.workflows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowsFindUniqueArgs>(args: SelectSubset<T, WorkflowsFindUniqueArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowsFindUniqueOrThrowArgs} args - Arguments to find a Workflows
     * @example
     * // Get one Workflows
     * const workflows = await prisma.workflows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowsFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsFindFirstArgs} args - Arguments to find a Workflows
     * @example
     * // Get one Workflows
     * const workflows = await prisma.workflows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowsFindFirstArgs>(args?: SelectSubset<T, WorkflowsFindFirstArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsFindFirstOrThrowArgs} args - Arguments to find a Workflows
     * @example
     * // Get one Workflows
     * const workflows = await prisma.workflows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowsFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflows.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowsWithIdOnly = await prisma.workflows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowsFindManyArgs>(args?: SelectSubset<T, WorkflowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflows.
     * @param {WorkflowsCreateArgs} args - Arguments to create a Workflows.
     * @example
     * // Create one Workflows
     * const Workflows = await prisma.workflows.create({
     *   data: {
     *     // ... data to create a Workflows
     *   }
     * })
     * 
     */
    create<T extends WorkflowsCreateArgs>(args: SelectSubset<T, WorkflowsCreateArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowsCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflows = await prisma.workflows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowsCreateManyArgs>(args?: SelectSubset<T, WorkflowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowsCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflows = await prisma.workflows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowsWithIdOnly = await prisma.workflows.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowsCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflows.
     * @param {WorkflowsDeleteArgs} args - Arguments to delete one Workflows.
     * @example
     * // Delete one Workflows
     * const Workflows = await prisma.workflows.delete({
     *   where: {
     *     // ... filter to delete one Workflows
     *   }
     * })
     * 
     */
    delete<T extends WorkflowsDeleteArgs>(args: SelectSubset<T, WorkflowsDeleteArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflows.
     * @param {WorkflowsUpdateArgs} args - Arguments to update one Workflows.
     * @example
     * // Update one Workflows
     * const workflows = await prisma.workflows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowsUpdateArgs>(args: SelectSubset<T, WorkflowsUpdateArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowsDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowsDeleteManyArgs>(args?: SelectSubset<T, WorkflowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflows = await prisma.workflows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowsUpdateManyArgs>(args: SelectSubset<T, WorkflowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowsUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflows = await prisma.workflows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowsWithIdOnly = await prisma.workflows.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkflowsUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflows.
     * @param {WorkflowsUpsertArgs} args - Arguments to update or create a Workflows.
     * @example
     * // Update or create a Workflows
     * const workflows = await prisma.workflows.upsert({
     *   create: {
     *     // ... data to create a Workflows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflows we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowsUpsertArgs>(args: SelectSubset<T, WorkflowsUpsertArgs<ExtArgs>>): Prisma__WorkflowsClient<$Result.GetResult<Prisma.$WorkflowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflows.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowsCountArgs>(
      args?: Subset<T, WorkflowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowsAggregateArgs>(args: Subset<T, WorkflowsAggregateArgs>): Prisma.PrismaPromise<GetWorkflowsAggregateType<T>>

    /**
     * Group by Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowsGroupByArgs} args - Group by arguments.
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
      T extends WorkflowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowsGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflows model
   */
  readonly fields: WorkflowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Workflows model
   */
  interface WorkflowsFieldRefs {
    readonly id: FieldRef<"Workflows", 'String'>
    readonly nodes: FieldRef<"Workflows", 'String'>
    readonly edges: FieldRef<"Workflows", 'String'>
    readonly name: FieldRef<"Workflows", 'String'>
    readonly discordTemplate: FieldRef<"Workflows", 'String'>
    readonly notionTemplate: FieldRef<"Workflows", 'String'>
    readonly slackTemplate: FieldRef<"Workflows", 'String'>
    readonly slackChannels: FieldRef<"Workflows", 'String[]'>
    readonly slackAccessToken: FieldRef<"Workflows", 'String'>
    readonly notionAccessToken: FieldRef<"Workflows", 'String'>
    readonly notionDbId: FieldRef<"Workflows", 'String'>
    readonly flowPath: FieldRef<"Workflows", 'String'>
    readonly cronPath: FieldRef<"Workflows", 'String'>
    readonly publish: FieldRef<"Workflows", 'Boolean'>
    readonly description: FieldRef<"Workflows", 'String'>
    readonly userId: FieldRef<"Workflows", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workflows findUnique
   */
  export type WorkflowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where: WorkflowsWhereUniqueInput
  }

  /**
   * Workflows findUniqueOrThrow
   */
  export type WorkflowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where: WorkflowsWhereUniqueInput
  }

  /**
   * Workflows findFirst
   */
  export type WorkflowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowsOrderByWithRelationInput | WorkflowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowsScalarFieldEnum | WorkflowsScalarFieldEnum[]
  }

  /**
   * Workflows findFirstOrThrow
   */
  export type WorkflowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowsOrderByWithRelationInput | WorkflowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowsScalarFieldEnum | WorkflowsScalarFieldEnum[]
  }

  /**
   * Workflows findMany
   */
  export type WorkflowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowsOrderByWithRelationInput | WorkflowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowsScalarFieldEnum | WorkflowsScalarFieldEnum[]
  }

  /**
   * Workflows create
   */
  export type WorkflowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflows.
     */
    data: XOR<WorkflowsCreateInput, WorkflowsUncheckedCreateInput>
  }

  /**
   * Workflows createMany
   */
  export type WorkflowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowsCreateManyInput | WorkflowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflows createManyAndReturn
   */
  export type WorkflowsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowsCreateManyInput | WorkflowsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflows update
   */
  export type WorkflowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflows.
     */
    data: XOR<WorkflowsUpdateInput, WorkflowsUncheckedUpdateInput>
    /**
     * Choose, which Workflows to update.
     */
    where: WorkflowsWhereUniqueInput
  }

  /**
   * Workflows updateMany
   */
  export type WorkflowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowsUpdateManyMutationInput, WorkflowsUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowsWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflows updateManyAndReturn
   */
  export type WorkflowsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowsUpdateManyMutationInput, WorkflowsUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowsWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflows upsert
   */
  export type WorkflowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflows to update in case it exists.
     */
    where: WorkflowsWhereUniqueInput
    /**
     * In case the Workflows found by the `where` argument doesn't exist, create a new Workflows with this data.
     */
    create: XOR<WorkflowsCreateInput, WorkflowsUncheckedCreateInput>
    /**
     * In case the Workflows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowsUpdateInput, WorkflowsUncheckedUpdateInput>
  }

  /**
   * Workflows delete
   */
  export type WorkflowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
    /**
     * Filter which Workflows to delete.
     */
    where: WorkflowsWhereUniqueInput
  }

  /**
   * Workflows deleteMany
   */
  export type WorkflowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowsWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflows without action
   */
  export type WorkflowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflows
     */
    select?: WorkflowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflows
     */
    omit?: WorkflowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    profileImage: 'profileImage',
    tier: 'tier',
    credits: 'credits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    localGoogleId: 'localGoogleId',
    googleResourceId: 'googleResourceId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocalGoogleCredentialScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    folderId: 'folderId',
    pageToken: 'pageToken',
    channelId: 'channelId',
    subscribed: 'subscribed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type LocalGoogleCredentialScalarFieldEnum = (typeof LocalGoogleCredentialScalarFieldEnum)[keyof typeof LocalGoogleCredentialScalarFieldEnum]


  export const DiscordWebhookScalarFieldEnum: {
    id: 'id',
    webhookId: 'webhookId',
    url: 'url',
    name: 'name',
    guildName: 'guildName',
    guildId: 'guildId',
    channelId: 'channelId',
    userId: 'userId'
  };

  export type DiscordWebhookScalarFieldEnum = (typeof DiscordWebhookScalarFieldEnum)[keyof typeof DiscordWebhookScalarFieldEnum]


  export const SlackScalarFieldEnum: {
    id: 'id',
    appId: 'appId',
    authedUserId: 'authedUserId',
    authedUserToken: 'authedUserToken',
    slackAccessToken: 'slackAccessToken',
    botUserId: 'botUserId',
    teamId: 'teamId',
    teamName: 'teamName',
    userId: 'userId'
  };

  export type SlackScalarFieldEnum = (typeof SlackScalarFieldEnum)[keyof typeof SlackScalarFieldEnum]


  export const NotionScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    workspaceId: 'workspaceId',
    databaseId: 'databaseId',
    workspaceName: 'workspaceName',
    workspaceIcon: 'workspaceIcon',
    userId: 'userId'
  };

  export type NotionScalarFieldEnum = (typeof NotionScalarFieldEnum)[keyof typeof NotionScalarFieldEnum]


  export const ConnectionsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    discordWebhookId: 'discordWebhookId',
    notionId: 'notionId',
    userId: 'userId',
    slackId: 'slackId'
  };

  export type ConnectionsScalarFieldEnum = (typeof ConnectionsScalarFieldEnum)[keyof typeof ConnectionsScalarFieldEnum]


  export const WorkflowsScalarFieldEnum: {
    id: 'id',
    nodes: 'nodes',
    edges: 'edges',
    name: 'name',
    discordTemplate: 'discordTemplate',
    notionTemplate: 'notionTemplate',
    slackTemplate: 'slackTemplate',
    slackChannels: 'slackChannels',
    slackAccessToken: 'slackAccessToken',
    notionAccessToken: 'notionAccessToken',
    notionDbId: 'notionDbId',
    flowPath: 'flowPath',
    cronPath: 'cronPath',
    publish: 'publish',
    description: 'description',
    userId: 'userId'
  };

  export type WorkflowsScalarFieldEnum = (typeof WorkflowsScalarFieldEnum)[keyof typeof WorkflowsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    clerkId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    tier?: StringNullableFilter<"User"> | string | null
    credits?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    localGoogleId?: StringNullableFilter<"User"> | string | null
    googleResourceId?: StringNullableFilter<"User"> | string | null
    LocalGoogleCredential?: XOR<LocalGoogleCredentialNullableScalarRelationFilter, LocalGoogleCredentialWhereInput> | null
    DiscordWebhook?: DiscordWebhookListRelationFilter
    Notion?: NotionListRelationFilter
    Slack?: SlackListRelationFilter
    connections?: ConnectionsListRelationFilter
    workflows?: WorkflowsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localGoogleId?: SortOrderInput | SortOrder
    googleResourceId?: SortOrderInput | SortOrder
    LocalGoogleCredential?: LocalGoogleCredentialOrderByWithRelationInput
    DiscordWebhook?: DiscordWebhookOrderByRelationAggregateInput
    Notion?: NotionOrderByRelationAggregateInput
    Slack?: SlackOrderByRelationAggregateInput
    connections?: ConnectionsOrderByRelationAggregateInput
    workflows?: WorkflowsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId?: string
    email?: string
    localGoogleId?: string
    googleResourceId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    tier?: StringNullableFilter<"User"> | string | null
    credits?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    LocalGoogleCredential?: XOR<LocalGoogleCredentialNullableScalarRelationFilter, LocalGoogleCredentialWhereInput> | null
    DiscordWebhook?: DiscordWebhookListRelationFilter
    Notion?: NotionListRelationFilter
    Slack?: SlackListRelationFilter
    connections?: ConnectionsListRelationFilter
    workflows?: WorkflowsListRelationFilter
  }, "id" | "clerkId" | "email" | "localGoogleId" | "googleResourceId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localGoogleId?: SortOrderInput | SortOrder
    googleResourceId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    clerkId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    tier?: StringNullableWithAggregatesFilter<"User"> | string | null
    credits?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    localGoogleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleResourceId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type LocalGoogleCredentialWhereInput = {
    AND?: LocalGoogleCredentialWhereInput | LocalGoogleCredentialWhereInput[]
    OR?: LocalGoogleCredentialWhereInput[]
    NOT?: LocalGoogleCredentialWhereInput | LocalGoogleCredentialWhereInput[]
    id?: StringFilter<"LocalGoogleCredential"> | string
    accessToken?: StringFilter<"LocalGoogleCredential"> | string
    folderId?: StringNullableFilter<"LocalGoogleCredential"> | string | null
    pageToken?: StringNullableFilter<"LocalGoogleCredential"> | string | null
    channelId?: StringFilter<"LocalGoogleCredential"> | string
    subscribed?: BoolFilter<"LocalGoogleCredential"> | boolean
    createdAt?: DateTimeFilter<"LocalGoogleCredential"> | Date | string
    updatedAt?: DateTimeFilter<"LocalGoogleCredential"> | Date | string
    userId?: IntFilter<"LocalGoogleCredential"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LocalGoogleCredentialOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    folderId?: SortOrderInput | SortOrder
    pageToken?: SortOrderInput | SortOrder
    channelId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LocalGoogleCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessToken?: string
    channelId?: string
    userId?: number
    AND?: LocalGoogleCredentialWhereInput | LocalGoogleCredentialWhereInput[]
    OR?: LocalGoogleCredentialWhereInput[]
    NOT?: LocalGoogleCredentialWhereInput | LocalGoogleCredentialWhereInput[]
    folderId?: StringNullableFilter<"LocalGoogleCredential"> | string | null
    pageToken?: StringNullableFilter<"LocalGoogleCredential"> | string | null
    subscribed?: BoolFilter<"LocalGoogleCredential"> | boolean
    createdAt?: DateTimeFilter<"LocalGoogleCredential"> | Date | string
    updatedAt?: DateTimeFilter<"LocalGoogleCredential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "accessToken" | "channelId" | "userId">

  export type LocalGoogleCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    folderId?: SortOrderInput | SortOrder
    pageToken?: SortOrderInput | SortOrder
    channelId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: LocalGoogleCredentialCountOrderByAggregateInput
    _avg?: LocalGoogleCredentialAvgOrderByAggregateInput
    _max?: LocalGoogleCredentialMaxOrderByAggregateInput
    _min?: LocalGoogleCredentialMinOrderByAggregateInput
    _sum?: LocalGoogleCredentialSumOrderByAggregateInput
  }

  export type LocalGoogleCredentialScalarWhereWithAggregatesInput = {
    AND?: LocalGoogleCredentialScalarWhereWithAggregatesInput | LocalGoogleCredentialScalarWhereWithAggregatesInput[]
    OR?: LocalGoogleCredentialScalarWhereWithAggregatesInput[]
    NOT?: LocalGoogleCredentialScalarWhereWithAggregatesInput | LocalGoogleCredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocalGoogleCredential"> | string
    accessToken?: StringWithAggregatesFilter<"LocalGoogleCredential"> | string
    folderId?: StringNullableWithAggregatesFilter<"LocalGoogleCredential"> | string | null
    pageToken?: StringNullableWithAggregatesFilter<"LocalGoogleCredential"> | string | null
    channelId?: StringWithAggregatesFilter<"LocalGoogleCredential"> | string
    subscribed?: BoolWithAggregatesFilter<"LocalGoogleCredential"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LocalGoogleCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LocalGoogleCredential"> | Date | string
    userId?: IntWithAggregatesFilter<"LocalGoogleCredential"> | number
  }

  export type DiscordWebhookWhereInput = {
    AND?: DiscordWebhookWhereInput | DiscordWebhookWhereInput[]
    OR?: DiscordWebhookWhereInput[]
    NOT?: DiscordWebhookWhereInput | DiscordWebhookWhereInput[]
    id?: StringFilter<"DiscordWebhook"> | string
    webhookId?: StringFilter<"DiscordWebhook"> | string
    url?: StringFilter<"DiscordWebhook"> | string
    name?: StringFilter<"DiscordWebhook"> | string
    guildName?: StringFilter<"DiscordWebhook"> | string
    guildId?: StringFilter<"DiscordWebhook"> | string
    channelId?: StringFilter<"DiscordWebhook"> | string
    userId?: StringFilter<"DiscordWebhook"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connections?: ConnectionsListRelationFilter
  }

  export type DiscordWebhookOrderByWithRelationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    guildName?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    connections?: ConnectionsOrderByRelationAggregateInput
  }

  export type DiscordWebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    webhookId?: string
    url?: string
    channelId?: string
    AND?: DiscordWebhookWhereInput | DiscordWebhookWhereInput[]
    OR?: DiscordWebhookWhereInput[]
    NOT?: DiscordWebhookWhereInput | DiscordWebhookWhereInput[]
    name?: StringFilter<"DiscordWebhook"> | string
    guildName?: StringFilter<"DiscordWebhook"> | string
    guildId?: StringFilter<"DiscordWebhook"> | string
    userId?: StringFilter<"DiscordWebhook"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connections?: ConnectionsListRelationFilter
  }, "id" | "webhookId" | "url" | "channelId">

  export type DiscordWebhookOrderByWithAggregationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    guildName?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    _count?: DiscordWebhookCountOrderByAggregateInput
    _max?: DiscordWebhookMaxOrderByAggregateInput
    _min?: DiscordWebhookMinOrderByAggregateInput
  }

  export type DiscordWebhookScalarWhereWithAggregatesInput = {
    AND?: DiscordWebhookScalarWhereWithAggregatesInput | DiscordWebhookScalarWhereWithAggregatesInput[]
    OR?: DiscordWebhookScalarWhereWithAggregatesInput[]
    NOT?: DiscordWebhookScalarWhereWithAggregatesInput | DiscordWebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    webhookId?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    url?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    name?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    guildName?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    guildId?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    channelId?: StringWithAggregatesFilter<"DiscordWebhook"> | string
    userId?: StringWithAggregatesFilter<"DiscordWebhook"> | string
  }

  export type SlackWhereInput = {
    AND?: SlackWhereInput | SlackWhereInput[]
    OR?: SlackWhereInput[]
    NOT?: SlackWhereInput | SlackWhereInput[]
    id?: StringFilter<"Slack"> | string
    appId?: StringFilter<"Slack"> | string
    authedUserId?: StringFilter<"Slack"> | string
    authedUserToken?: StringFilter<"Slack"> | string
    slackAccessToken?: StringFilter<"Slack"> | string
    botUserId?: StringFilter<"Slack"> | string
    teamId?: StringFilter<"Slack"> | string
    teamName?: StringFilter<"Slack"> | string
    userId?: StringFilter<"Slack"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    connections?: ConnectionsListRelationFilter
  }

  export type SlackOrderByWithRelationInput = {
    id?: SortOrder
    appId?: SortOrder
    authedUserId?: SortOrder
    authedUserToken?: SortOrder
    slackAccessToken?: SortOrder
    botUserId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    connections?: ConnectionsOrderByRelationAggregateInput
  }

  export type SlackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authedUserToken?: string
    slackAccessToken?: string
    AND?: SlackWhereInput | SlackWhereInput[]
    OR?: SlackWhereInput[]
    NOT?: SlackWhereInput | SlackWhereInput[]
    appId?: StringFilter<"Slack"> | string
    authedUserId?: StringFilter<"Slack"> | string
    botUserId?: StringFilter<"Slack"> | string
    teamId?: StringFilter<"Slack"> | string
    teamName?: StringFilter<"Slack"> | string
    userId?: StringFilter<"Slack"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    connections?: ConnectionsListRelationFilter
  }, "id" | "authedUserToken" | "slackAccessToken">

  export type SlackOrderByWithAggregationInput = {
    id?: SortOrder
    appId?: SortOrder
    authedUserId?: SortOrder
    authedUserToken?: SortOrder
    slackAccessToken?: SortOrder
    botUserId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userId?: SortOrder
    _count?: SlackCountOrderByAggregateInput
    _max?: SlackMaxOrderByAggregateInput
    _min?: SlackMinOrderByAggregateInput
  }

  export type SlackScalarWhereWithAggregatesInput = {
    AND?: SlackScalarWhereWithAggregatesInput | SlackScalarWhereWithAggregatesInput[]
    OR?: SlackScalarWhereWithAggregatesInput[]
    NOT?: SlackScalarWhereWithAggregatesInput | SlackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Slack"> | string
    appId?: StringWithAggregatesFilter<"Slack"> | string
    authedUserId?: StringWithAggregatesFilter<"Slack"> | string
    authedUserToken?: StringWithAggregatesFilter<"Slack"> | string
    slackAccessToken?: StringWithAggregatesFilter<"Slack"> | string
    botUserId?: StringWithAggregatesFilter<"Slack"> | string
    teamId?: StringWithAggregatesFilter<"Slack"> | string
    teamName?: StringWithAggregatesFilter<"Slack"> | string
    userId?: StringWithAggregatesFilter<"Slack"> | string
  }

  export type NotionWhereInput = {
    AND?: NotionWhereInput | NotionWhereInput[]
    OR?: NotionWhereInput[]
    NOT?: NotionWhereInput | NotionWhereInput[]
    id?: StringFilter<"Notion"> | string
    accessToken?: StringFilter<"Notion"> | string
    workspaceId?: StringFilter<"Notion"> | string
    databaseId?: StringFilter<"Notion"> | string
    workspaceName?: StringFilter<"Notion"> | string
    workspaceIcon?: StringFilter<"Notion"> | string
    userId?: StringFilter<"Notion"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    connections?: ConnectionsListRelationFilter
  }

  export type NotionOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    databaseId?: SortOrder
    workspaceName?: SortOrder
    workspaceIcon?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    connections?: ConnectionsOrderByRelationAggregateInput
  }

  export type NotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessToken?: string
    workspaceId?: string
    databaseId?: string
    AND?: NotionWhereInput | NotionWhereInput[]
    OR?: NotionWhereInput[]
    NOT?: NotionWhereInput | NotionWhereInput[]
    workspaceName?: StringFilter<"Notion"> | string
    workspaceIcon?: StringFilter<"Notion"> | string
    userId?: StringFilter<"Notion"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    connections?: ConnectionsListRelationFilter
  }, "id" | "accessToken" | "workspaceId" | "databaseId">

  export type NotionOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    databaseId?: SortOrder
    workspaceName?: SortOrder
    workspaceIcon?: SortOrder
    userId?: SortOrder
    _count?: NotionCountOrderByAggregateInput
    _max?: NotionMaxOrderByAggregateInput
    _min?: NotionMinOrderByAggregateInput
  }

  export type NotionScalarWhereWithAggregatesInput = {
    AND?: NotionScalarWhereWithAggregatesInput | NotionScalarWhereWithAggregatesInput[]
    OR?: NotionScalarWhereWithAggregatesInput[]
    NOT?: NotionScalarWhereWithAggregatesInput | NotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notion"> | string
    accessToken?: StringWithAggregatesFilter<"Notion"> | string
    workspaceId?: StringWithAggregatesFilter<"Notion"> | string
    databaseId?: StringWithAggregatesFilter<"Notion"> | string
    workspaceName?: StringWithAggregatesFilter<"Notion"> | string
    workspaceIcon?: StringWithAggregatesFilter<"Notion"> | string
    userId?: StringWithAggregatesFilter<"Notion"> | string
  }

  export type ConnectionsWhereInput = {
    AND?: ConnectionsWhereInput | ConnectionsWhereInput[]
    OR?: ConnectionsWhereInput[]
    NOT?: ConnectionsWhereInput | ConnectionsWhereInput[]
    id?: StringFilter<"Connections"> | string
    type?: StringFilter<"Connections"> | string
    discordWebhookId?: StringNullableFilter<"Connections"> | string | null
    notionId?: StringNullableFilter<"Connections"> | string | null
    userId?: StringNullableFilter<"Connections"> | string | null
    slackId?: StringNullableFilter<"Connections"> | string | null
    DiscordWebhook?: XOR<DiscordWebhookNullableScalarRelationFilter, DiscordWebhookWhereInput> | null
    Notion?: XOR<NotionNullableScalarRelationFilter, NotionWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Slack?: XOR<SlackNullableScalarRelationFilter, SlackWhereInput> | null
  }

  export type ConnectionsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    discordWebhookId?: SortOrderInput | SortOrder
    notionId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    slackId?: SortOrderInput | SortOrder
    DiscordWebhook?: DiscordWebhookOrderByWithRelationInput
    Notion?: NotionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Slack?: SlackOrderByWithRelationInput
  }

  export type ConnectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type?: string
    AND?: ConnectionsWhereInput | ConnectionsWhereInput[]
    OR?: ConnectionsWhereInput[]
    NOT?: ConnectionsWhereInput | ConnectionsWhereInput[]
    discordWebhookId?: StringNullableFilter<"Connections"> | string | null
    notionId?: StringNullableFilter<"Connections"> | string | null
    userId?: StringNullableFilter<"Connections"> | string | null
    slackId?: StringNullableFilter<"Connections"> | string | null
    DiscordWebhook?: XOR<DiscordWebhookNullableScalarRelationFilter, DiscordWebhookWhereInput> | null
    Notion?: XOR<NotionNullableScalarRelationFilter, NotionWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Slack?: XOR<SlackNullableScalarRelationFilter, SlackWhereInput> | null
  }, "id" | "type">

  export type ConnectionsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    discordWebhookId?: SortOrderInput | SortOrder
    notionId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    slackId?: SortOrderInput | SortOrder
    _count?: ConnectionsCountOrderByAggregateInput
    _max?: ConnectionsMaxOrderByAggregateInput
    _min?: ConnectionsMinOrderByAggregateInput
  }

  export type ConnectionsScalarWhereWithAggregatesInput = {
    AND?: ConnectionsScalarWhereWithAggregatesInput | ConnectionsScalarWhereWithAggregatesInput[]
    OR?: ConnectionsScalarWhereWithAggregatesInput[]
    NOT?: ConnectionsScalarWhereWithAggregatesInput | ConnectionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connections"> | string
    type?: StringWithAggregatesFilter<"Connections"> | string
    discordWebhookId?: StringNullableWithAggregatesFilter<"Connections"> | string | null
    notionId?: StringNullableWithAggregatesFilter<"Connections"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Connections"> | string | null
    slackId?: StringNullableWithAggregatesFilter<"Connections"> | string | null
  }

  export type WorkflowsWhereInput = {
    AND?: WorkflowsWhereInput | WorkflowsWhereInput[]
    OR?: WorkflowsWhereInput[]
    NOT?: WorkflowsWhereInput | WorkflowsWhereInput[]
    id?: StringFilter<"Workflows"> | string
    nodes?: StringNullableFilter<"Workflows"> | string | null
    edges?: StringNullableFilter<"Workflows"> | string | null
    name?: StringFilter<"Workflows"> | string
    discordTemplate?: StringNullableFilter<"Workflows"> | string | null
    notionTemplate?: StringNullableFilter<"Workflows"> | string | null
    slackTemplate?: StringNullableFilter<"Workflows"> | string | null
    slackChannels?: StringNullableListFilter<"Workflows">
    slackAccessToken?: StringNullableFilter<"Workflows"> | string | null
    notionAccessToken?: StringNullableFilter<"Workflows"> | string | null
    notionDbId?: StringNullableFilter<"Workflows"> | string | null
    flowPath?: StringNullableFilter<"Workflows"> | string | null
    cronPath?: StringNullableFilter<"Workflows"> | string | null
    publish?: BoolNullableFilter<"Workflows"> | boolean | null
    description?: StringFilter<"Workflows"> | string
    userId?: StringFilter<"Workflows"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkflowsOrderByWithRelationInput = {
    id?: SortOrder
    nodes?: SortOrderInput | SortOrder
    edges?: SortOrderInput | SortOrder
    name?: SortOrder
    discordTemplate?: SortOrderInput | SortOrder
    notionTemplate?: SortOrderInput | SortOrder
    slackTemplate?: SortOrderInput | SortOrder
    slackChannels?: SortOrder
    slackAccessToken?: SortOrderInput | SortOrder
    notionAccessToken?: SortOrderInput | SortOrder
    notionDbId?: SortOrderInput | SortOrder
    flowPath?: SortOrderInput | SortOrder
    cronPath?: SortOrderInput | SortOrder
    publish?: SortOrderInput | SortOrder
    description?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type WorkflowsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowsWhereInput | WorkflowsWhereInput[]
    OR?: WorkflowsWhereInput[]
    NOT?: WorkflowsWhereInput | WorkflowsWhereInput[]
    nodes?: StringNullableFilter<"Workflows"> | string | null
    edges?: StringNullableFilter<"Workflows"> | string | null
    name?: StringFilter<"Workflows"> | string
    discordTemplate?: StringNullableFilter<"Workflows"> | string | null
    notionTemplate?: StringNullableFilter<"Workflows"> | string | null
    slackTemplate?: StringNullableFilter<"Workflows"> | string | null
    slackChannels?: StringNullableListFilter<"Workflows">
    slackAccessToken?: StringNullableFilter<"Workflows"> | string | null
    notionAccessToken?: StringNullableFilter<"Workflows"> | string | null
    notionDbId?: StringNullableFilter<"Workflows"> | string | null
    flowPath?: StringNullableFilter<"Workflows"> | string | null
    cronPath?: StringNullableFilter<"Workflows"> | string | null
    publish?: BoolNullableFilter<"Workflows"> | boolean | null
    description?: StringFilter<"Workflows"> | string
    userId?: StringFilter<"Workflows"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkflowsOrderByWithAggregationInput = {
    id?: SortOrder
    nodes?: SortOrderInput | SortOrder
    edges?: SortOrderInput | SortOrder
    name?: SortOrder
    discordTemplate?: SortOrderInput | SortOrder
    notionTemplate?: SortOrderInput | SortOrder
    slackTemplate?: SortOrderInput | SortOrder
    slackChannels?: SortOrder
    slackAccessToken?: SortOrderInput | SortOrder
    notionAccessToken?: SortOrderInput | SortOrder
    notionDbId?: SortOrderInput | SortOrder
    flowPath?: SortOrderInput | SortOrder
    cronPath?: SortOrderInput | SortOrder
    publish?: SortOrderInput | SortOrder
    description?: SortOrder
    userId?: SortOrder
    _count?: WorkflowsCountOrderByAggregateInput
    _max?: WorkflowsMaxOrderByAggregateInput
    _min?: WorkflowsMinOrderByAggregateInput
  }

  export type WorkflowsScalarWhereWithAggregatesInput = {
    AND?: WorkflowsScalarWhereWithAggregatesInput | WorkflowsScalarWhereWithAggregatesInput[]
    OR?: WorkflowsScalarWhereWithAggregatesInput[]
    NOT?: WorkflowsScalarWhereWithAggregatesInput | WorkflowsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflows"> | string
    nodes?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    edges?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    name?: StringWithAggregatesFilter<"Workflows"> | string
    discordTemplate?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    notionTemplate?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    slackTemplate?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    slackChannels?: StringNullableListFilter<"Workflows">
    slackAccessToken?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    notionAccessToken?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    notionDbId?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    flowPath?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    cronPath?: StringNullableWithAggregatesFilter<"Workflows"> | string | null
    publish?: BoolNullableWithAggregatesFilter<"Workflows"> | boolean | null
    description?: StringWithAggregatesFilter<"Workflows"> | string
    userId?: StringWithAggregatesFilter<"Workflows"> | string
  }

  export type UserCreateInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookCreateNestedManyWithoutUserInput
    Notion?: NotionCreateNestedManyWithoutUserInput
    Slack?: SlackCreateNestedManyWithoutUserInput
    connections?: ConnectionsCreateNestedManyWithoutUserInput
    workflows?: WorkflowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookUncheckedCreateNestedManyWithoutUserInput
    Notion?: NotionUncheckedCreateNestedManyWithoutUserInput
    Slack?: SlackUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionsUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUpdateManyWithoutUserNestedInput
    Notion?: NotionUpdateManyWithoutUserNestedInput
    Slack?: SlackUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput
    Notion?: NotionUncheckedUpdateManyWithoutUserNestedInput
    Slack?: SlackUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalGoogleCredentialCreateInput = {
    id?: string
    accessToken: string
    folderId?: string | null
    pageToken?: string | null
    channelId?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLocalGoogleCredentialInput
  }

  export type LocalGoogleCredentialUncheckedCreateInput = {
    id?: string
    accessToken: string
    folderId?: string | null
    pageToken?: string | null
    channelId?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type LocalGoogleCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    pageToken?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocalGoogleCredentialNestedInput
  }

  export type LocalGoogleCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    pageToken?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LocalGoogleCredentialCreateManyInput = {
    id?: string
    accessToken: string
    folderId?: string | null
    pageToken?: string | null
    channelId?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type LocalGoogleCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    pageToken?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalGoogleCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    pageToken?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DiscordWebhookCreateInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    user: UserCreateNestedOneWithoutDiscordWebhookInput
    connections?: ConnectionsCreateNestedManyWithoutDiscordWebhookInput
  }

  export type DiscordWebhookUncheckedCreateInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    userId: string
    connections?: ConnectionsUncheckedCreateNestedManyWithoutDiscordWebhookInput
  }

  export type DiscordWebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDiscordWebhookNestedInput
    connections?: ConnectionsUpdateManyWithoutDiscordWebhookNestedInput
  }

  export type DiscordWebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUncheckedUpdateManyWithoutDiscordWebhookNestedInput
  }

  export type DiscordWebhookCreateManyInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    userId: string
  }

  export type DiscordWebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordWebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SlackCreateInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    User: UserCreateNestedOneWithoutSlackInput
    connections?: ConnectionsCreateNestedManyWithoutSlackInput
  }

  export type SlackUncheckedCreateInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    userId: string
    connections?: ConnectionsUncheckedCreateNestedManyWithoutSlackInput
  }

  export type SlackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutSlackNestedInput
    connections?: ConnectionsUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUncheckedUpdateManyWithoutSlackNestedInput
  }

  export type SlackCreateManyInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    userId: string
  }

  export type SlackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
  }

  export type SlackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionCreateInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    User: UserCreateNestedOneWithoutNotionInput
    connections?: ConnectionsCreateNestedManyWithoutNotionInput
  }

  export type NotionUncheckedCreateInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    userId: string
    connections?: ConnectionsUncheckedCreateNestedManyWithoutNotionInput
  }

  export type NotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutNotionNestedInput
    connections?: ConnectionsUpdateManyWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUncheckedUpdateManyWithoutNotionNestedInput
  }

  export type NotionCreateManyInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    userId: string
  }

  export type NotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionsCreateInput = {
    id?: string
    type: string
    DiscordWebhook?: DiscordWebhookCreateNestedOneWithoutConnectionsInput
    Notion?: NotionCreateNestedOneWithoutConnectionsInput
    User?: UserCreateNestedOneWithoutConnectionsInput
    Slack?: SlackCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionsUncheckedCreateInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    notionId?: string | null
    userId?: string | null
    slackId?: string | null
  }

  export type ConnectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    DiscordWebhook?: DiscordWebhookUpdateOneWithoutConnectionsNestedInput
    Notion?: NotionUpdateOneWithoutConnectionsNestedInput
    User?: UserUpdateOneWithoutConnectionsNestedInput
    Slack?: SlackUpdateOneWithoutConnectionsNestedInput
  }

  export type ConnectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsCreateManyInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    notionId?: string | null
    userId?: string | null
    slackId?: string | null
  }

  export type ConnectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowsCreateInput = {
    id?: string
    nodes?: string | null
    edges?: string | null
    name: string
    discordTemplate?: string | null
    notionTemplate?: string | null
    slackTemplate?: string | null
    slackChannels?: WorkflowsCreateslackChannelsInput | string[]
    slackAccessToken?: string | null
    notionAccessToken?: string | null
    notionDbId?: string | null
    flowPath?: string | null
    cronPath?: string | null
    publish?: boolean | null
    description: string
    User: UserCreateNestedOneWithoutWorkflowsInput
  }

  export type WorkflowsUncheckedCreateInput = {
    id?: string
    nodes?: string | null
    edges?: string | null
    name: string
    discordTemplate?: string | null
    notionTemplate?: string | null
    slackTemplate?: string | null
    slackChannels?: WorkflowsCreateslackChannelsInput | string[]
    slackAccessToken?: string | null
    notionAccessToken?: string | null
    notionDbId?: string | null
    flowPath?: string | null
    cronPath?: string | null
    publish?: boolean | null
    description: string
    userId: string
  }

  export type WorkflowsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type WorkflowsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowsCreateManyInput = {
    id?: string
    nodes?: string | null
    edges?: string | null
    name: string
    discordTemplate?: string | null
    notionTemplate?: string | null
    slackTemplate?: string | null
    slackChannels?: WorkflowsCreateslackChannelsInput | string[]
    slackAccessToken?: string | null
    notionAccessToken?: string | null
    notionDbId?: string | null
    flowPath?: string | null
    cronPath?: string | null
    publish?: boolean | null
    description: string
    userId: string
  }

  export type WorkflowsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type LocalGoogleCredentialNullableScalarRelationFilter = {
    is?: LocalGoogleCredentialWhereInput | null
    isNot?: LocalGoogleCredentialWhereInput | null
  }

  export type DiscordWebhookListRelationFilter = {
    every?: DiscordWebhookWhereInput
    some?: DiscordWebhookWhereInput
    none?: DiscordWebhookWhereInput
  }

  export type NotionListRelationFilter = {
    every?: NotionWhereInput
    some?: NotionWhereInput
    none?: NotionWhereInput
  }

  export type SlackListRelationFilter = {
    every?: SlackWhereInput
    some?: SlackWhereInput
    none?: SlackWhereInput
  }

  export type ConnectionsListRelationFilter = {
    every?: ConnectionsWhereInput
    some?: ConnectionsWhereInput
    none?: ConnectionsWhereInput
  }

  export type WorkflowsListRelationFilter = {
    every?: WorkflowsWhereInput
    some?: WorkflowsWhereInput
    none?: WorkflowsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiscordWebhookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localGoogleId?: SortOrder
    googleResourceId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localGoogleId?: SortOrder
    googleResourceId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localGoogleId?: SortOrder
    googleResourceId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LocalGoogleCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    folderId?: SortOrder
    pageToken?: SortOrder
    channelId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LocalGoogleCredentialAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type LocalGoogleCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    folderId?: SortOrder
    pageToken?: SortOrder
    channelId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LocalGoogleCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    folderId?: SortOrder
    pageToken?: SortOrder
    channelId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LocalGoogleCredentialSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DiscordWebhookCountOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    guildName?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
  }

  export type DiscordWebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    guildName?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
  }

  export type DiscordWebhookMinOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    guildName?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
  }

  export type SlackCountOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    authedUserId?: SortOrder
    authedUserToken?: SortOrder
    slackAccessToken?: SortOrder
    botUserId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userId?: SortOrder
  }

  export type SlackMaxOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    authedUserId?: SortOrder
    authedUserToken?: SortOrder
    slackAccessToken?: SortOrder
    botUserId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userId?: SortOrder
  }

  export type SlackMinOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    authedUserId?: SortOrder
    authedUserToken?: SortOrder
    slackAccessToken?: SortOrder
    botUserId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userId?: SortOrder
  }

  export type NotionCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    databaseId?: SortOrder
    workspaceName?: SortOrder
    workspaceIcon?: SortOrder
    userId?: SortOrder
  }

  export type NotionMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    databaseId?: SortOrder
    workspaceName?: SortOrder
    workspaceIcon?: SortOrder
    userId?: SortOrder
  }

  export type NotionMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    databaseId?: SortOrder
    workspaceName?: SortOrder
    workspaceIcon?: SortOrder
    userId?: SortOrder
  }

  export type DiscordWebhookNullableScalarRelationFilter = {
    is?: DiscordWebhookWhereInput | null
    isNot?: DiscordWebhookWhereInput | null
  }

  export type NotionNullableScalarRelationFilter = {
    is?: NotionWhereInput | null
    isNot?: NotionWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SlackNullableScalarRelationFilter = {
    is?: SlackWhereInput | null
    isNot?: SlackWhereInput | null
  }

  export type ConnectionsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    discordWebhookId?: SortOrder
    notionId?: SortOrder
    userId?: SortOrder
    slackId?: SortOrder
  }

  export type ConnectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    discordWebhookId?: SortOrder
    notionId?: SortOrder
    userId?: SortOrder
    slackId?: SortOrder
  }

  export type ConnectionsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    discordWebhookId?: SortOrder
    notionId?: SortOrder
    userId?: SortOrder
    slackId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type WorkflowsCountOrderByAggregateInput = {
    id?: SortOrder
    nodes?: SortOrder
    edges?: SortOrder
    name?: SortOrder
    discordTemplate?: SortOrder
    notionTemplate?: SortOrder
    slackTemplate?: SortOrder
    slackChannels?: SortOrder
    slackAccessToken?: SortOrder
    notionAccessToken?: SortOrder
    notionDbId?: SortOrder
    flowPath?: SortOrder
    cronPath?: SortOrder
    publish?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type WorkflowsMaxOrderByAggregateInput = {
    id?: SortOrder
    nodes?: SortOrder
    edges?: SortOrder
    name?: SortOrder
    discordTemplate?: SortOrder
    notionTemplate?: SortOrder
    slackTemplate?: SortOrder
    slackAccessToken?: SortOrder
    notionAccessToken?: SortOrder
    notionDbId?: SortOrder
    flowPath?: SortOrder
    cronPath?: SortOrder
    publish?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type WorkflowsMinOrderByAggregateInput = {
    id?: SortOrder
    nodes?: SortOrder
    edges?: SortOrder
    name?: SortOrder
    discordTemplate?: SortOrder
    notionTemplate?: SortOrder
    slackTemplate?: SortOrder
    slackAccessToken?: SortOrder
    notionAccessToken?: SortOrder
    notionDbId?: SortOrder
    flowPath?: SortOrder
    cronPath?: SortOrder
    publish?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LocalGoogleCredentialCreateNestedOneWithoutUserInput = {
    create?: XOR<LocalGoogleCredentialCreateWithoutUserInput, LocalGoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalGoogleCredentialCreateOrConnectWithoutUserInput
    connect?: LocalGoogleCredentialWhereUniqueInput
  }

  export type DiscordWebhookCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscordWebhookCreateWithoutUserInput, DiscordWebhookUncheckedCreateWithoutUserInput> | DiscordWebhookCreateWithoutUserInput[] | DiscordWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordWebhookCreateOrConnectWithoutUserInput | DiscordWebhookCreateOrConnectWithoutUserInput[]
    createMany?: DiscordWebhookCreateManyUserInputEnvelope
    connect?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
  }

  export type NotionCreateNestedManyWithoutUserInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput> | NotionCreateWithoutUserInput[] | NotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput | NotionCreateOrConnectWithoutUserInput[]
    createMany?: NotionCreateManyUserInputEnvelope
    connect?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
  }

  export type SlackCreateNestedManyWithoutUserInput = {
    create?: XOR<SlackCreateWithoutUserInput, SlackUncheckedCreateWithoutUserInput> | SlackCreateWithoutUserInput[] | SlackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SlackCreateOrConnectWithoutUserInput | SlackCreateOrConnectWithoutUserInput[]
    createMany?: SlackCreateManyUserInputEnvelope
    connect?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
  }

  export type ConnectionsCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionsCreateWithoutUserInput, ConnectionsUncheckedCreateWithoutUserInput> | ConnectionsCreateWithoutUserInput[] | ConnectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutUserInput | ConnectionsCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionsCreateManyUserInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type WorkflowsCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowsCreateWithoutUserInput, WorkflowsUncheckedCreateWithoutUserInput> | WorkflowsCreateWithoutUserInput[] | WorkflowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowsCreateOrConnectWithoutUserInput | WorkflowsCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowsCreateManyUserInputEnvelope
    connect?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
  }

  export type LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LocalGoogleCredentialCreateWithoutUserInput, LocalGoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalGoogleCredentialCreateOrConnectWithoutUserInput
    connect?: LocalGoogleCredentialWhereUniqueInput
  }

  export type DiscordWebhookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscordWebhookCreateWithoutUserInput, DiscordWebhookUncheckedCreateWithoutUserInput> | DiscordWebhookCreateWithoutUserInput[] | DiscordWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordWebhookCreateOrConnectWithoutUserInput | DiscordWebhookCreateOrConnectWithoutUserInput[]
    createMany?: DiscordWebhookCreateManyUserInputEnvelope
    connect?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
  }

  export type NotionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput> | NotionCreateWithoutUserInput[] | NotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput | NotionCreateOrConnectWithoutUserInput[]
    createMany?: NotionCreateManyUserInputEnvelope
    connect?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
  }

  export type SlackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SlackCreateWithoutUserInput, SlackUncheckedCreateWithoutUserInput> | SlackCreateWithoutUserInput[] | SlackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SlackCreateOrConnectWithoutUserInput | SlackCreateOrConnectWithoutUserInput[]
    createMany?: SlackCreateManyUserInputEnvelope
    connect?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
  }

  export type ConnectionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionsCreateWithoutUserInput, ConnectionsUncheckedCreateWithoutUserInput> | ConnectionsCreateWithoutUserInput[] | ConnectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutUserInput | ConnectionsCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionsCreateManyUserInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type WorkflowsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowsCreateWithoutUserInput, WorkflowsUncheckedCreateWithoutUserInput> | WorkflowsCreateWithoutUserInput[] | WorkflowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowsCreateOrConnectWithoutUserInput | WorkflowsCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowsCreateManyUserInputEnvelope
    connect?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocalGoogleCredentialUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocalGoogleCredentialCreateWithoutUserInput, LocalGoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalGoogleCredentialCreateOrConnectWithoutUserInput
    upsert?: LocalGoogleCredentialUpsertWithoutUserInput
    disconnect?: LocalGoogleCredentialWhereInput | boolean
    delete?: LocalGoogleCredentialWhereInput | boolean
    connect?: LocalGoogleCredentialWhereUniqueInput
    update?: XOR<XOR<LocalGoogleCredentialUpdateToOneWithWhereWithoutUserInput, LocalGoogleCredentialUpdateWithoutUserInput>, LocalGoogleCredentialUncheckedUpdateWithoutUserInput>
  }

  export type DiscordWebhookUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscordWebhookCreateWithoutUserInput, DiscordWebhookUncheckedCreateWithoutUserInput> | DiscordWebhookCreateWithoutUserInput[] | DiscordWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordWebhookCreateOrConnectWithoutUserInput | DiscordWebhookCreateOrConnectWithoutUserInput[]
    upsert?: DiscordWebhookUpsertWithWhereUniqueWithoutUserInput | DiscordWebhookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscordWebhookCreateManyUserInputEnvelope
    set?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    disconnect?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    delete?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    connect?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    update?: DiscordWebhookUpdateWithWhereUniqueWithoutUserInput | DiscordWebhookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscordWebhookUpdateManyWithWhereWithoutUserInput | DiscordWebhookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscordWebhookScalarWhereInput | DiscordWebhookScalarWhereInput[]
  }

  export type NotionUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput> | NotionCreateWithoutUserInput[] | NotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput | NotionCreateOrConnectWithoutUserInput[]
    upsert?: NotionUpsertWithWhereUniqueWithoutUserInput | NotionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotionCreateManyUserInputEnvelope
    set?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    disconnect?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    delete?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    connect?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    update?: NotionUpdateWithWhereUniqueWithoutUserInput | NotionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotionUpdateManyWithWhereWithoutUserInput | NotionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotionScalarWhereInput | NotionScalarWhereInput[]
  }

  export type SlackUpdateManyWithoutUserNestedInput = {
    create?: XOR<SlackCreateWithoutUserInput, SlackUncheckedCreateWithoutUserInput> | SlackCreateWithoutUserInput[] | SlackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SlackCreateOrConnectWithoutUserInput | SlackCreateOrConnectWithoutUserInput[]
    upsert?: SlackUpsertWithWhereUniqueWithoutUserInput | SlackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SlackCreateManyUserInputEnvelope
    set?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    disconnect?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    delete?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    connect?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    update?: SlackUpdateWithWhereUniqueWithoutUserInput | SlackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SlackUpdateManyWithWhereWithoutUserInput | SlackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SlackScalarWhereInput | SlackScalarWhereInput[]
  }

  export type ConnectionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionsCreateWithoutUserInput, ConnectionsUncheckedCreateWithoutUserInput> | ConnectionsCreateWithoutUserInput[] | ConnectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutUserInput | ConnectionsCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutUserInput | ConnectionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionsCreateManyUserInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutUserInput | ConnectionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutUserInput | ConnectionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type WorkflowsUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowsCreateWithoutUserInput, WorkflowsUncheckedCreateWithoutUserInput> | WorkflowsCreateWithoutUserInput[] | WorkflowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowsCreateOrConnectWithoutUserInput | WorkflowsCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowsUpsertWithWhereUniqueWithoutUserInput | WorkflowsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowsCreateManyUserInputEnvelope
    set?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    disconnect?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    delete?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    connect?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    update?: WorkflowsUpdateWithWhereUniqueWithoutUserInput | WorkflowsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowsUpdateManyWithWhereWithoutUserInput | WorkflowsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowsScalarWhereInput | WorkflowsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocalGoogleCredentialCreateWithoutUserInput, LocalGoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalGoogleCredentialCreateOrConnectWithoutUserInput
    upsert?: LocalGoogleCredentialUpsertWithoutUserInput
    disconnect?: LocalGoogleCredentialWhereInput | boolean
    delete?: LocalGoogleCredentialWhereInput | boolean
    connect?: LocalGoogleCredentialWhereUniqueInput
    update?: XOR<XOR<LocalGoogleCredentialUpdateToOneWithWhereWithoutUserInput, LocalGoogleCredentialUpdateWithoutUserInput>, LocalGoogleCredentialUncheckedUpdateWithoutUserInput>
  }

  export type DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscordWebhookCreateWithoutUserInput, DiscordWebhookUncheckedCreateWithoutUserInput> | DiscordWebhookCreateWithoutUserInput[] | DiscordWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordWebhookCreateOrConnectWithoutUserInput | DiscordWebhookCreateOrConnectWithoutUserInput[]
    upsert?: DiscordWebhookUpsertWithWhereUniqueWithoutUserInput | DiscordWebhookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscordWebhookCreateManyUserInputEnvelope
    set?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    disconnect?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    delete?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    connect?: DiscordWebhookWhereUniqueInput | DiscordWebhookWhereUniqueInput[]
    update?: DiscordWebhookUpdateWithWhereUniqueWithoutUserInput | DiscordWebhookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscordWebhookUpdateManyWithWhereWithoutUserInput | DiscordWebhookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscordWebhookScalarWhereInput | DiscordWebhookScalarWhereInput[]
  }

  export type NotionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput> | NotionCreateWithoutUserInput[] | NotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput | NotionCreateOrConnectWithoutUserInput[]
    upsert?: NotionUpsertWithWhereUniqueWithoutUserInput | NotionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotionCreateManyUserInputEnvelope
    set?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    disconnect?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    delete?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    connect?: NotionWhereUniqueInput | NotionWhereUniqueInput[]
    update?: NotionUpdateWithWhereUniqueWithoutUserInput | NotionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotionUpdateManyWithWhereWithoutUserInput | NotionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotionScalarWhereInput | NotionScalarWhereInput[]
  }

  export type SlackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SlackCreateWithoutUserInput, SlackUncheckedCreateWithoutUserInput> | SlackCreateWithoutUserInput[] | SlackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SlackCreateOrConnectWithoutUserInput | SlackCreateOrConnectWithoutUserInput[]
    upsert?: SlackUpsertWithWhereUniqueWithoutUserInput | SlackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SlackCreateManyUserInputEnvelope
    set?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    disconnect?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    delete?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    connect?: SlackWhereUniqueInput | SlackWhereUniqueInput[]
    update?: SlackUpdateWithWhereUniqueWithoutUserInput | SlackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SlackUpdateManyWithWhereWithoutUserInput | SlackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SlackScalarWhereInput | SlackScalarWhereInput[]
  }

  export type ConnectionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionsCreateWithoutUserInput, ConnectionsUncheckedCreateWithoutUserInput> | ConnectionsCreateWithoutUserInput[] | ConnectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutUserInput | ConnectionsCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutUserInput | ConnectionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionsCreateManyUserInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutUserInput | ConnectionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutUserInput | ConnectionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type WorkflowsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowsCreateWithoutUserInput, WorkflowsUncheckedCreateWithoutUserInput> | WorkflowsCreateWithoutUserInput[] | WorkflowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowsCreateOrConnectWithoutUserInput | WorkflowsCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowsUpsertWithWhereUniqueWithoutUserInput | WorkflowsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowsCreateManyUserInputEnvelope
    set?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    disconnect?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    delete?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    connect?: WorkflowsWhereUniqueInput | WorkflowsWhereUniqueInput[]
    update?: WorkflowsUpdateWithWhereUniqueWithoutUserInput | WorkflowsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowsUpdateManyWithWhereWithoutUserInput | WorkflowsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowsScalarWhereInput | WorkflowsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLocalGoogleCredentialInput = {
    create?: XOR<UserCreateWithoutLocalGoogleCredentialInput, UserUncheckedCreateWithoutLocalGoogleCredentialInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocalGoogleCredentialInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLocalGoogleCredentialNestedInput = {
    create?: XOR<UserCreateWithoutLocalGoogleCredentialInput, UserUncheckedCreateWithoutLocalGoogleCredentialInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocalGoogleCredentialInput
    upsert?: UserUpsertWithoutLocalGoogleCredentialInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocalGoogleCredentialInput, UserUpdateWithoutLocalGoogleCredentialInput>, UserUncheckedUpdateWithoutLocalGoogleCredentialInput>
  }

  export type UserCreateNestedOneWithoutDiscordWebhookInput = {
    create?: XOR<UserCreateWithoutDiscordWebhookInput, UserUncheckedCreateWithoutDiscordWebhookInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscordWebhookInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionsCreateNestedManyWithoutDiscordWebhookInput = {
    create?: XOR<ConnectionsCreateWithoutDiscordWebhookInput, ConnectionsUncheckedCreateWithoutDiscordWebhookInput> | ConnectionsCreateWithoutDiscordWebhookInput[] | ConnectionsUncheckedCreateWithoutDiscordWebhookInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutDiscordWebhookInput | ConnectionsCreateOrConnectWithoutDiscordWebhookInput[]
    createMany?: ConnectionsCreateManyDiscordWebhookInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type ConnectionsUncheckedCreateNestedManyWithoutDiscordWebhookInput = {
    create?: XOR<ConnectionsCreateWithoutDiscordWebhookInput, ConnectionsUncheckedCreateWithoutDiscordWebhookInput> | ConnectionsCreateWithoutDiscordWebhookInput[] | ConnectionsUncheckedCreateWithoutDiscordWebhookInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutDiscordWebhookInput | ConnectionsCreateOrConnectWithoutDiscordWebhookInput[]
    createMany?: ConnectionsCreateManyDiscordWebhookInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDiscordWebhookNestedInput = {
    create?: XOR<UserCreateWithoutDiscordWebhookInput, UserUncheckedCreateWithoutDiscordWebhookInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscordWebhookInput
    upsert?: UserUpsertWithoutDiscordWebhookInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiscordWebhookInput, UserUpdateWithoutDiscordWebhookInput>, UserUncheckedUpdateWithoutDiscordWebhookInput>
  }

  export type ConnectionsUpdateManyWithoutDiscordWebhookNestedInput = {
    create?: XOR<ConnectionsCreateWithoutDiscordWebhookInput, ConnectionsUncheckedCreateWithoutDiscordWebhookInput> | ConnectionsCreateWithoutDiscordWebhookInput[] | ConnectionsUncheckedCreateWithoutDiscordWebhookInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutDiscordWebhookInput | ConnectionsCreateOrConnectWithoutDiscordWebhookInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutDiscordWebhookInput | ConnectionsUpsertWithWhereUniqueWithoutDiscordWebhookInput[]
    createMany?: ConnectionsCreateManyDiscordWebhookInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutDiscordWebhookInput | ConnectionsUpdateWithWhereUniqueWithoutDiscordWebhookInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutDiscordWebhookInput | ConnectionsUpdateManyWithWhereWithoutDiscordWebhookInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type ConnectionsUncheckedUpdateManyWithoutDiscordWebhookNestedInput = {
    create?: XOR<ConnectionsCreateWithoutDiscordWebhookInput, ConnectionsUncheckedCreateWithoutDiscordWebhookInput> | ConnectionsCreateWithoutDiscordWebhookInput[] | ConnectionsUncheckedCreateWithoutDiscordWebhookInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutDiscordWebhookInput | ConnectionsCreateOrConnectWithoutDiscordWebhookInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutDiscordWebhookInput | ConnectionsUpsertWithWhereUniqueWithoutDiscordWebhookInput[]
    createMany?: ConnectionsCreateManyDiscordWebhookInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutDiscordWebhookInput | ConnectionsUpdateWithWhereUniqueWithoutDiscordWebhookInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutDiscordWebhookInput | ConnectionsUpdateManyWithWhereWithoutDiscordWebhookInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSlackInput = {
    create?: XOR<UserCreateWithoutSlackInput, UserUncheckedCreateWithoutSlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutSlackInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionsCreateNestedManyWithoutSlackInput = {
    create?: XOR<ConnectionsCreateWithoutSlackInput, ConnectionsUncheckedCreateWithoutSlackInput> | ConnectionsCreateWithoutSlackInput[] | ConnectionsUncheckedCreateWithoutSlackInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutSlackInput | ConnectionsCreateOrConnectWithoutSlackInput[]
    createMany?: ConnectionsCreateManySlackInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type ConnectionsUncheckedCreateNestedManyWithoutSlackInput = {
    create?: XOR<ConnectionsCreateWithoutSlackInput, ConnectionsUncheckedCreateWithoutSlackInput> | ConnectionsCreateWithoutSlackInput[] | ConnectionsUncheckedCreateWithoutSlackInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutSlackInput | ConnectionsCreateOrConnectWithoutSlackInput[]
    createMany?: ConnectionsCreateManySlackInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSlackNestedInput = {
    create?: XOR<UserCreateWithoutSlackInput, UserUncheckedCreateWithoutSlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutSlackInput
    upsert?: UserUpsertWithoutSlackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSlackInput, UserUpdateWithoutSlackInput>, UserUncheckedUpdateWithoutSlackInput>
  }

  export type ConnectionsUpdateManyWithoutSlackNestedInput = {
    create?: XOR<ConnectionsCreateWithoutSlackInput, ConnectionsUncheckedCreateWithoutSlackInput> | ConnectionsCreateWithoutSlackInput[] | ConnectionsUncheckedCreateWithoutSlackInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutSlackInput | ConnectionsCreateOrConnectWithoutSlackInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutSlackInput | ConnectionsUpsertWithWhereUniqueWithoutSlackInput[]
    createMany?: ConnectionsCreateManySlackInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutSlackInput | ConnectionsUpdateWithWhereUniqueWithoutSlackInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutSlackInput | ConnectionsUpdateManyWithWhereWithoutSlackInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type ConnectionsUncheckedUpdateManyWithoutSlackNestedInput = {
    create?: XOR<ConnectionsCreateWithoutSlackInput, ConnectionsUncheckedCreateWithoutSlackInput> | ConnectionsCreateWithoutSlackInput[] | ConnectionsUncheckedCreateWithoutSlackInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutSlackInput | ConnectionsCreateOrConnectWithoutSlackInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutSlackInput | ConnectionsUpsertWithWhereUniqueWithoutSlackInput[]
    createMany?: ConnectionsCreateManySlackInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutSlackInput | ConnectionsUpdateWithWhereUniqueWithoutSlackInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutSlackInput | ConnectionsUpdateManyWithWhereWithoutSlackInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotionInput = {
    create?: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotionInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionsCreateNestedManyWithoutNotionInput = {
    create?: XOR<ConnectionsCreateWithoutNotionInput, ConnectionsUncheckedCreateWithoutNotionInput> | ConnectionsCreateWithoutNotionInput[] | ConnectionsUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutNotionInput | ConnectionsCreateOrConnectWithoutNotionInput[]
    createMany?: ConnectionsCreateManyNotionInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type ConnectionsUncheckedCreateNestedManyWithoutNotionInput = {
    create?: XOR<ConnectionsCreateWithoutNotionInput, ConnectionsUncheckedCreateWithoutNotionInput> | ConnectionsCreateWithoutNotionInput[] | ConnectionsUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutNotionInput | ConnectionsCreateOrConnectWithoutNotionInput[]
    createMany?: ConnectionsCreateManyNotionInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutNotionNestedInput = {
    create?: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotionInput
    upsert?: UserUpsertWithoutNotionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotionInput, UserUpdateWithoutNotionInput>, UserUncheckedUpdateWithoutNotionInput>
  }

  export type ConnectionsUpdateManyWithoutNotionNestedInput = {
    create?: XOR<ConnectionsCreateWithoutNotionInput, ConnectionsUncheckedCreateWithoutNotionInput> | ConnectionsCreateWithoutNotionInput[] | ConnectionsUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutNotionInput | ConnectionsCreateOrConnectWithoutNotionInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutNotionInput | ConnectionsUpsertWithWhereUniqueWithoutNotionInput[]
    createMany?: ConnectionsCreateManyNotionInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutNotionInput | ConnectionsUpdateWithWhereUniqueWithoutNotionInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutNotionInput | ConnectionsUpdateManyWithWhereWithoutNotionInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type ConnectionsUncheckedUpdateManyWithoutNotionNestedInput = {
    create?: XOR<ConnectionsCreateWithoutNotionInput, ConnectionsUncheckedCreateWithoutNotionInput> | ConnectionsCreateWithoutNotionInput[] | ConnectionsUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutNotionInput | ConnectionsCreateOrConnectWithoutNotionInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutNotionInput | ConnectionsUpsertWithWhereUniqueWithoutNotionInput[]
    createMany?: ConnectionsCreateManyNotionInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutNotionInput | ConnectionsUpdateWithWhereUniqueWithoutNotionInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutNotionInput | ConnectionsUpdateManyWithWhereWithoutNotionInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type DiscordWebhookCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<DiscordWebhookCreateWithoutConnectionsInput, DiscordWebhookUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: DiscordWebhookCreateOrConnectWithoutConnectionsInput
    connect?: DiscordWebhookWhereUniqueInput
  }

  export type NotionCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<NotionCreateWithoutConnectionsInput, NotionUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: NotionCreateOrConnectWithoutConnectionsInput
    connect?: NotionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type SlackCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<SlackCreateWithoutConnectionsInput, SlackUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: SlackCreateOrConnectWithoutConnectionsInput
    connect?: SlackWhereUniqueInput
  }

  export type DiscordWebhookUpdateOneWithoutConnectionsNestedInput = {
    create?: XOR<DiscordWebhookCreateWithoutConnectionsInput, DiscordWebhookUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: DiscordWebhookCreateOrConnectWithoutConnectionsInput
    upsert?: DiscordWebhookUpsertWithoutConnectionsInput
    disconnect?: DiscordWebhookWhereInput | boolean
    delete?: DiscordWebhookWhereInput | boolean
    connect?: DiscordWebhookWhereUniqueInput
    update?: XOR<XOR<DiscordWebhookUpdateToOneWithWhereWithoutConnectionsInput, DiscordWebhookUpdateWithoutConnectionsInput>, DiscordWebhookUncheckedUpdateWithoutConnectionsInput>
  }

  export type NotionUpdateOneWithoutConnectionsNestedInput = {
    create?: XOR<NotionCreateWithoutConnectionsInput, NotionUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: NotionCreateOrConnectWithoutConnectionsInput
    upsert?: NotionUpsertWithoutConnectionsInput
    disconnect?: NotionWhereInput | boolean
    delete?: NotionWhereInput | boolean
    connect?: NotionWhereUniqueInput
    update?: XOR<XOR<NotionUpdateToOneWithWhereWithoutConnectionsInput, NotionUpdateWithoutConnectionsInput>, NotionUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserUpdateOneWithoutConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    upsert?: UserUpsertWithoutConnectionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConnectionsInput, UserUpdateWithoutConnectionsInput>, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type SlackUpdateOneWithoutConnectionsNestedInput = {
    create?: XOR<SlackCreateWithoutConnectionsInput, SlackUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: SlackCreateOrConnectWithoutConnectionsInput
    upsert?: SlackUpsertWithoutConnectionsInput
    disconnect?: SlackWhereInput | boolean
    delete?: SlackWhereInput | boolean
    connect?: SlackWhereUniqueInput
    update?: XOR<XOR<SlackUpdateToOneWithWhereWithoutConnectionsInput, SlackUpdateWithoutConnectionsInput>, SlackUncheckedUpdateWithoutConnectionsInput>
  }

  export type WorkflowsCreateslackChannelsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowsUpdateslackChannelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LocalGoogleCredentialCreateWithoutUserInput = {
    id?: string
    accessToken: string
    folderId?: string | null
    pageToken?: string | null
    channelId?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalGoogleCredentialUncheckedCreateWithoutUserInput = {
    id?: string
    accessToken: string
    folderId?: string | null
    pageToken?: string | null
    channelId?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalGoogleCredentialCreateOrConnectWithoutUserInput = {
    where: LocalGoogleCredentialWhereUniqueInput
    create: XOR<LocalGoogleCredentialCreateWithoutUserInput, LocalGoogleCredentialUncheckedCreateWithoutUserInput>
  }

  export type DiscordWebhookCreateWithoutUserInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    connections?: ConnectionsCreateNestedManyWithoutDiscordWebhookInput
  }

  export type DiscordWebhookUncheckedCreateWithoutUserInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    connections?: ConnectionsUncheckedCreateNestedManyWithoutDiscordWebhookInput
  }

  export type DiscordWebhookCreateOrConnectWithoutUserInput = {
    where: DiscordWebhookWhereUniqueInput
    create: XOR<DiscordWebhookCreateWithoutUserInput, DiscordWebhookUncheckedCreateWithoutUserInput>
  }

  export type DiscordWebhookCreateManyUserInputEnvelope = {
    data: DiscordWebhookCreateManyUserInput | DiscordWebhookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotionCreateWithoutUserInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    connections?: ConnectionsCreateNestedManyWithoutNotionInput
  }

  export type NotionUncheckedCreateWithoutUserInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    connections?: ConnectionsUncheckedCreateNestedManyWithoutNotionInput
  }

  export type NotionCreateOrConnectWithoutUserInput = {
    where: NotionWhereUniqueInput
    create: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
  }

  export type NotionCreateManyUserInputEnvelope = {
    data: NotionCreateManyUserInput | NotionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SlackCreateWithoutUserInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    connections?: ConnectionsCreateNestedManyWithoutSlackInput
  }

  export type SlackUncheckedCreateWithoutUserInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    connections?: ConnectionsUncheckedCreateNestedManyWithoutSlackInput
  }

  export type SlackCreateOrConnectWithoutUserInput = {
    where: SlackWhereUniqueInput
    create: XOR<SlackCreateWithoutUserInput, SlackUncheckedCreateWithoutUserInput>
  }

  export type SlackCreateManyUserInputEnvelope = {
    data: SlackCreateManyUserInput | SlackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionsCreateWithoutUserInput = {
    id?: string
    type: string
    DiscordWebhook?: DiscordWebhookCreateNestedOneWithoutConnectionsInput
    Notion?: NotionCreateNestedOneWithoutConnectionsInput
    Slack?: SlackCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionsUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    notionId?: string | null
    slackId?: string | null
  }

  export type ConnectionsCreateOrConnectWithoutUserInput = {
    where: ConnectionsWhereUniqueInput
    create: XOR<ConnectionsCreateWithoutUserInput, ConnectionsUncheckedCreateWithoutUserInput>
  }

  export type ConnectionsCreateManyUserInputEnvelope = {
    data: ConnectionsCreateManyUserInput | ConnectionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowsCreateWithoutUserInput = {
    id?: string
    nodes?: string | null
    edges?: string | null
    name: string
    discordTemplate?: string | null
    notionTemplate?: string | null
    slackTemplate?: string | null
    slackChannels?: WorkflowsCreateslackChannelsInput | string[]
    slackAccessToken?: string | null
    notionAccessToken?: string | null
    notionDbId?: string | null
    flowPath?: string | null
    cronPath?: string | null
    publish?: boolean | null
    description: string
  }

  export type WorkflowsUncheckedCreateWithoutUserInput = {
    id?: string
    nodes?: string | null
    edges?: string | null
    name: string
    discordTemplate?: string | null
    notionTemplate?: string | null
    slackTemplate?: string | null
    slackChannels?: WorkflowsCreateslackChannelsInput | string[]
    slackAccessToken?: string | null
    notionAccessToken?: string | null
    notionDbId?: string | null
    flowPath?: string | null
    cronPath?: string | null
    publish?: boolean | null
    description: string
  }

  export type WorkflowsCreateOrConnectWithoutUserInput = {
    where: WorkflowsWhereUniqueInput
    create: XOR<WorkflowsCreateWithoutUserInput, WorkflowsUncheckedCreateWithoutUserInput>
  }

  export type WorkflowsCreateManyUserInputEnvelope = {
    data: WorkflowsCreateManyUserInput | WorkflowsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LocalGoogleCredentialUpsertWithoutUserInput = {
    update: XOR<LocalGoogleCredentialUpdateWithoutUserInput, LocalGoogleCredentialUncheckedUpdateWithoutUserInput>
    create: XOR<LocalGoogleCredentialCreateWithoutUserInput, LocalGoogleCredentialUncheckedCreateWithoutUserInput>
    where?: LocalGoogleCredentialWhereInput
  }

  export type LocalGoogleCredentialUpdateToOneWithWhereWithoutUserInput = {
    where?: LocalGoogleCredentialWhereInput
    data: XOR<LocalGoogleCredentialUpdateWithoutUserInput, LocalGoogleCredentialUncheckedUpdateWithoutUserInput>
  }

  export type LocalGoogleCredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    pageToken?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalGoogleCredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    pageToken?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordWebhookUpsertWithWhereUniqueWithoutUserInput = {
    where: DiscordWebhookWhereUniqueInput
    update: XOR<DiscordWebhookUpdateWithoutUserInput, DiscordWebhookUncheckedUpdateWithoutUserInput>
    create: XOR<DiscordWebhookCreateWithoutUserInput, DiscordWebhookUncheckedCreateWithoutUserInput>
  }

  export type DiscordWebhookUpdateWithWhereUniqueWithoutUserInput = {
    where: DiscordWebhookWhereUniqueInput
    data: XOR<DiscordWebhookUpdateWithoutUserInput, DiscordWebhookUncheckedUpdateWithoutUserInput>
  }

  export type DiscordWebhookUpdateManyWithWhereWithoutUserInput = {
    where: DiscordWebhookScalarWhereInput
    data: XOR<DiscordWebhookUpdateManyMutationInput, DiscordWebhookUncheckedUpdateManyWithoutUserInput>
  }

  export type DiscordWebhookScalarWhereInput = {
    AND?: DiscordWebhookScalarWhereInput | DiscordWebhookScalarWhereInput[]
    OR?: DiscordWebhookScalarWhereInput[]
    NOT?: DiscordWebhookScalarWhereInput | DiscordWebhookScalarWhereInput[]
    id?: StringFilter<"DiscordWebhook"> | string
    webhookId?: StringFilter<"DiscordWebhook"> | string
    url?: StringFilter<"DiscordWebhook"> | string
    name?: StringFilter<"DiscordWebhook"> | string
    guildName?: StringFilter<"DiscordWebhook"> | string
    guildId?: StringFilter<"DiscordWebhook"> | string
    channelId?: StringFilter<"DiscordWebhook"> | string
    userId?: StringFilter<"DiscordWebhook"> | string
  }

  export type NotionUpsertWithWhereUniqueWithoutUserInput = {
    where: NotionWhereUniqueInput
    update: XOR<NotionUpdateWithoutUserInput, NotionUncheckedUpdateWithoutUserInput>
    create: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
  }

  export type NotionUpdateWithWhereUniqueWithoutUserInput = {
    where: NotionWhereUniqueInput
    data: XOR<NotionUpdateWithoutUserInput, NotionUncheckedUpdateWithoutUserInput>
  }

  export type NotionUpdateManyWithWhereWithoutUserInput = {
    where: NotionScalarWhereInput
    data: XOR<NotionUpdateManyMutationInput, NotionUncheckedUpdateManyWithoutUserInput>
  }

  export type NotionScalarWhereInput = {
    AND?: NotionScalarWhereInput | NotionScalarWhereInput[]
    OR?: NotionScalarWhereInput[]
    NOT?: NotionScalarWhereInput | NotionScalarWhereInput[]
    id?: StringFilter<"Notion"> | string
    accessToken?: StringFilter<"Notion"> | string
    workspaceId?: StringFilter<"Notion"> | string
    databaseId?: StringFilter<"Notion"> | string
    workspaceName?: StringFilter<"Notion"> | string
    workspaceIcon?: StringFilter<"Notion"> | string
    userId?: StringFilter<"Notion"> | string
  }

  export type SlackUpsertWithWhereUniqueWithoutUserInput = {
    where: SlackWhereUniqueInput
    update: XOR<SlackUpdateWithoutUserInput, SlackUncheckedUpdateWithoutUserInput>
    create: XOR<SlackCreateWithoutUserInput, SlackUncheckedCreateWithoutUserInput>
  }

  export type SlackUpdateWithWhereUniqueWithoutUserInput = {
    where: SlackWhereUniqueInput
    data: XOR<SlackUpdateWithoutUserInput, SlackUncheckedUpdateWithoutUserInput>
  }

  export type SlackUpdateManyWithWhereWithoutUserInput = {
    where: SlackScalarWhereInput
    data: XOR<SlackUpdateManyMutationInput, SlackUncheckedUpdateManyWithoutUserInput>
  }

  export type SlackScalarWhereInput = {
    AND?: SlackScalarWhereInput | SlackScalarWhereInput[]
    OR?: SlackScalarWhereInput[]
    NOT?: SlackScalarWhereInput | SlackScalarWhereInput[]
    id?: StringFilter<"Slack"> | string
    appId?: StringFilter<"Slack"> | string
    authedUserId?: StringFilter<"Slack"> | string
    authedUserToken?: StringFilter<"Slack"> | string
    slackAccessToken?: StringFilter<"Slack"> | string
    botUserId?: StringFilter<"Slack"> | string
    teamId?: StringFilter<"Slack"> | string
    teamName?: StringFilter<"Slack"> | string
    userId?: StringFilter<"Slack"> | string
  }

  export type ConnectionsUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectionsWhereUniqueInput
    update: XOR<ConnectionsUpdateWithoutUserInput, ConnectionsUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectionsCreateWithoutUserInput, ConnectionsUncheckedCreateWithoutUserInput>
  }

  export type ConnectionsUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectionsWhereUniqueInput
    data: XOR<ConnectionsUpdateWithoutUserInput, ConnectionsUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionsUpdateManyWithWhereWithoutUserInput = {
    where: ConnectionsScalarWhereInput
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyWithoutUserInput>
  }

  export type ConnectionsScalarWhereInput = {
    AND?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
    OR?: ConnectionsScalarWhereInput[]
    NOT?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
    id?: StringFilter<"Connections"> | string
    type?: StringFilter<"Connections"> | string
    discordWebhookId?: StringNullableFilter<"Connections"> | string | null
    notionId?: StringNullableFilter<"Connections"> | string | null
    userId?: StringNullableFilter<"Connections"> | string | null
    slackId?: StringNullableFilter<"Connections"> | string | null
  }

  export type WorkflowsUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowsWhereUniqueInput
    update: XOR<WorkflowsUpdateWithoutUserInput, WorkflowsUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowsCreateWithoutUserInput, WorkflowsUncheckedCreateWithoutUserInput>
  }

  export type WorkflowsUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowsWhereUniqueInput
    data: XOR<WorkflowsUpdateWithoutUserInput, WorkflowsUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowsUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowsScalarWhereInput
    data: XOR<WorkflowsUpdateManyMutationInput, WorkflowsUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowsScalarWhereInput = {
    AND?: WorkflowsScalarWhereInput | WorkflowsScalarWhereInput[]
    OR?: WorkflowsScalarWhereInput[]
    NOT?: WorkflowsScalarWhereInput | WorkflowsScalarWhereInput[]
    id?: StringFilter<"Workflows"> | string
    nodes?: StringNullableFilter<"Workflows"> | string | null
    edges?: StringNullableFilter<"Workflows"> | string | null
    name?: StringFilter<"Workflows"> | string
    discordTemplate?: StringNullableFilter<"Workflows"> | string | null
    notionTemplate?: StringNullableFilter<"Workflows"> | string | null
    slackTemplate?: StringNullableFilter<"Workflows"> | string | null
    slackChannels?: StringNullableListFilter<"Workflows">
    slackAccessToken?: StringNullableFilter<"Workflows"> | string | null
    notionAccessToken?: StringNullableFilter<"Workflows"> | string | null
    notionDbId?: StringNullableFilter<"Workflows"> | string | null
    flowPath?: StringNullableFilter<"Workflows"> | string | null
    cronPath?: StringNullableFilter<"Workflows"> | string | null
    publish?: BoolNullableFilter<"Workflows"> | boolean | null
    description?: StringFilter<"Workflows"> | string
    userId?: StringFilter<"Workflows"> | string
  }

  export type UserCreateWithoutLocalGoogleCredentialInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    DiscordWebhook?: DiscordWebhookCreateNestedManyWithoutUserInput
    Notion?: NotionCreateNestedManyWithoutUserInput
    Slack?: SlackCreateNestedManyWithoutUserInput
    connections?: ConnectionsCreateNestedManyWithoutUserInput
    workflows?: WorkflowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocalGoogleCredentialInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    DiscordWebhook?: DiscordWebhookUncheckedCreateNestedManyWithoutUserInput
    Notion?: NotionUncheckedCreateNestedManyWithoutUserInput
    Slack?: SlackUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionsUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocalGoogleCredentialInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocalGoogleCredentialInput, UserUncheckedCreateWithoutLocalGoogleCredentialInput>
  }

  export type UserUpsertWithoutLocalGoogleCredentialInput = {
    update: XOR<UserUpdateWithoutLocalGoogleCredentialInput, UserUncheckedUpdateWithoutLocalGoogleCredentialInput>
    create: XOR<UserCreateWithoutLocalGoogleCredentialInput, UserUncheckedCreateWithoutLocalGoogleCredentialInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocalGoogleCredentialInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocalGoogleCredentialInput, UserUncheckedUpdateWithoutLocalGoogleCredentialInput>
  }

  export type UserUpdateWithoutLocalGoogleCredentialInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordWebhook?: DiscordWebhookUpdateManyWithoutUserNestedInput
    Notion?: NotionUpdateManyWithoutUserNestedInput
    Slack?: SlackUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocalGoogleCredentialInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordWebhook?: DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput
    Notion?: NotionUncheckedUpdateManyWithoutUserNestedInput
    Slack?: SlackUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDiscordWebhookInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialCreateNestedOneWithoutUserInput
    Notion?: NotionCreateNestedManyWithoutUserInput
    Slack?: SlackCreateNestedManyWithoutUserInput
    connections?: ConnectionsCreateNestedManyWithoutUserInput
    workflows?: WorkflowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiscordWebhookInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    Notion?: NotionUncheckedCreateNestedManyWithoutUserInput
    Slack?: SlackUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionsUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiscordWebhookInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiscordWebhookInput, UserUncheckedCreateWithoutDiscordWebhookInput>
  }

  export type ConnectionsCreateWithoutDiscordWebhookInput = {
    id?: string
    type: string
    Notion?: NotionCreateNestedOneWithoutConnectionsInput
    User?: UserCreateNestedOneWithoutConnectionsInput
    Slack?: SlackCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionsUncheckedCreateWithoutDiscordWebhookInput = {
    id?: string
    type: string
    notionId?: string | null
    userId?: string | null
    slackId?: string | null
  }

  export type ConnectionsCreateOrConnectWithoutDiscordWebhookInput = {
    where: ConnectionsWhereUniqueInput
    create: XOR<ConnectionsCreateWithoutDiscordWebhookInput, ConnectionsUncheckedCreateWithoutDiscordWebhookInput>
  }

  export type ConnectionsCreateManyDiscordWebhookInputEnvelope = {
    data: ConnectionsCreateManyDiscordWebhookInput | ConnectionsCreateManyDiscordWebhookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDiscordWebhookInput = {
    update: XOR<UserUpdateWithoutDiscordWebhookInput, UserUncheckedUpdateWithoutDiscordWebhookInput>
    create: XOR<UserCreateWithoutDiscordWebhookInput, UserUncheckedCreateWithoutDiscordWebhookInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiscordWebhookInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiscordWebhookInput, UserUncheckedUpdateWithoutDiscordWebhookInput>
  }

  export type UserUpdateWithoutDiscordWebhookInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUpdateOneWithoutUserNestedInput
    Notion?: NotionUpdateManyWithoutUserNestedInput
    Slack?: SlackUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiscordWebhookInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    Notion?: NotionUncheckedUpdateManyWithoutUserNestedInput
    Slack?: SlackUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectionsUpsertWithWhereUniqueWithoutDiscordWebhookInput = {
    where: ConnectionsWhereUniqueInput
    update: XOR<ConnectionsUpdateWithoutDiscordWebhookInput, ConnectionsUncheckedUpdateWithoutDiscordWebhookInput>
    create: XOR<ConnectionsCreateWithoutDiscordWebhookInput, ConnectionsUncheckedCreateWithoutDiscordWebhookInput>
  }

  export type ConnectionsUpdateWithWhereUniqueWithoutDiscordWebhookInput = {
    where: ConnectionsWhereUniqueInput
    data: XOR<ConnectionsUpdateWithoutDiscordWebhookInput, ConnectionsUncheckedUpdateWithoutDiscordWebhookInput>
  }

  export type ConnectionsUpdateManyWithWhereWithoutDiscordWebhookInput = {
    where: ConnectionsScalarWhereInput
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyWithoutDiscordWebhookInput>
  }

  export type UserCreateWithoutSlackInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookCreateNestedManyWithoutUserInput
    Notion?: NotionCreateNestedManyWithoutUserInput
    connections?: ConnectionsCreateNestedManyWithoutUserInput
    workflows?: WorkflowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSlackInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookUncheckedCreateNestedManyWithoutUserInput
    Notion?: NotionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionsUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSlackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSlackInput, UserUncheckedCreateWithoutSlackInput>
  }

  export type ConnectionsCreateWithoutSlackInput = {
    id?: string
    type: string
    DiscordWebhook?: DiscordWebhookCreateNestedOneWithoutConnectionsInput
    Notion?: NotionCreateNestedOneWithoutConnectionsInput
    User?: UserCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionsUncheckedCreateWithoutSlackInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    notionId?: string | null
    userId?: string | null
  }

  export type ConnectionsCreateOrConnectWithoutSlackInput = {
    where: ConnectionsWhereUniqueInput
    create: XOR<ConnectionsCreateWithoutSlackInput, ConnectionsUncheckedCreateWithoutSlackInput>
  }

  export type ConnectionsCreateManySlackInputEnvelope = {
    data: ConnectionsCreateManySlackInput | ConnectionsCreateManySlackInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSlackInput = {
    update: XOR<UserUpdateWithoutSlackInput, UserUncheckedUpdateWithoutSlackInput>
    create: XOR<UserCreateWithoutSlackInput, UserUncheckedCreateWithoutSlackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSlackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSlackInput, UserUncheckedUpdateWithoutSlackInput>
  }

  export type UserUpdateWithoutSlackInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUpdateManyWithoutUserNestedInput
    Notion?: NotionUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSlackInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput
    Notion?: NotionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectionsUpsertWithWhereUniqueWithoutSlackInput = {
    where: ConnectionsWhereUniqueInput
    update: XOR<ConnectionsUpdateWithoutSlackInput, ConnectionsUncheckedUpdateWithoutSlackInput>
    create: XOR<ConnectionsCreateWithoutSlackInput, ConnectionsUncheckedCreateWithoutSlackInput>
  }

  export type ConnectionsUpdateWithWhereUniqueWithoutSlackInput = {
    where: ConnectionsWhereUniqueInput
    data: XOR<ConnectionsUpdateWithoutSlackInput, ConnectionsUncheckedUpdateWithoutSlackInput>
  }

  export type ConnectionsUpdateManyWithWhereWithoutSlackInput = {
    where: ConnectionsScalarWhereInput
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyWithoutSlackInput>
  }

  export type UserCreateWithoutNotionInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookCreateNestedManyWithoutUserInput
    Slack?: SlackCreateNestedManyWithoutUserInput
    connections?: ConnectionsCreateNestedManyWithoutUserInput
    workflows?: WorkflowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotionInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookUncheckedCreateNestedManyWithoutUserInput
    Slack?: SlackUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionsUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
  }

  export type ConnectionsCreateWithoutNotionInput = {
    id?: string
    type: string
    DiscordWebhook?: DiscordWebhookCreateNestedOneWithoutConnectionsInput
    User?: UserCreateNestedOneWithoutConnectionsInput
    Slack?: SlackCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionsUncheckedCreateWithoutNotionInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    userId?: string | null
    slackId?: string | null
  }

  export type ConnectionsCreateOrConnectWithoutNotionInput = {
    where: ConnectionsWhereUniqueInput
    create: XOR<ConnectionsCreateWithoutNotionInput, ConnectionsUncheckedCreateWithoutNotionInput>
  }

  export type ConnectionsCreateManyNotionInputEnvelope = {
    data: ConnectionsCreateManyNotionInput | ConnectionsCreateManyNotionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotionInput = {
    update: XOR<UserUpdateWithoutNotionInput, UserUncheckedUpdateWithoutNotionInput>
    create: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotionInput, UserUncheckedUpdateWithoutNotionInput>
  }

  export type UserUpdateWithoutNotionInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUpdateManyWithoutUserNestedInput
    Slack?: SlackUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotionInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput
    Slack?: SlackUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectionsUpsertWithWhereUniqueWithoutNotionInput = {
    where: ConnectionsWhereUniqueInput
    update: XOR<ConnectionsUpdateWithoutNotionInput, ConnectionsUncheckedUpdateWithoutNotionInput>
    create: XOR<ConnectionsCreateWithoutNotionInput, ConnectionsUncheckedCreateWithoutNotionInput>
  }

  export type ConnectionsUpdateWithWhereUniqueWithoutNotionInput = {
    where: ConnectionsWhereUniqueInput
    data: XOR<ConnectionsUpdateWithoutNotionInput, ConnectionsUncheckedUpdateWithoutNotionInput>
  }

  export type ConnectionsUpdateManyWithWhereWithoutNotionInput = {
    where: ConnectionsScalarWhereInput
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyWithoutNotionInput>
  }

  export type DiscordWebhookCreateWithoutConnectionsInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    user: UserCreateNestedOneWithoutDiscordWebhookInput
  }

  export type DiscordWebhookUncheckedCreateWithoutConnectionsInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
    userId: string
  }

  export type DiscordWebhookCreateOrConnectWithoutConnectionsInput = {
    where: DiscordWebhookWhereUniqueInput
    create: XOR<DiscordWebhookCreateWithoutConnectionsInput, DiscordWebhookUncheckedCreateWithoutConnectionsInput>
  }

  export type NotionCreateWithoutConnectionsInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    User: UserCreateNestedOneWithoutNotionInput
  }

  export type NotionUncheckedCreateWithoutConnectionsInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
    userId: string
  }

  export type NotionCreateOrConnectWithoutConnectionsInput = {
    where: NotionWhereUniqueInput
    create: XOR<NotionCreateWithoutConnectionsInput, NotionUncheckedCreateWithoutConnectionsInput>
  }

  export type UserCreateWithoutConnectionsInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookCreateNestedManyWithoutUserInput
    Notion?: NotionCreateNestedManyWithoutUserInput
    Slack?: SlackCreateNestedManyWithoutUserInput
    workflows?: WorkflowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConnectionsInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookUncheckedCreateNestedManyWithoutUserInput
    Notion?: NotionUncheckedCreateNestedManyWithoutUserInput
    Slack?: SlackUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
  }

  export type SlackCreateWithoutConnectionsInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    User: UserCreateNestedOneWithoutSlackInput
  }

  export type SlackUncheckedCreateWithoutConnectionsInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    userId: string
  }

  export type SlackCreateOrConnectWithoutConnectionsInput = {
    where: SlackWhereUniqueInput
    create: XOR<SlackCreateWithoutConnectionsInput, SlackUncheckedCreateWithoutConnectionsInput>
  }

  export type DiscordWebhookUpsertWithoutConnectionsInput = {
    update: XOR<DiscordWebhookUpdateWithoutConnectionsInput, DiscordWebhookUncheckedUpdateWithoutConnectionsInput>
    create: XOR<DiscordWebhookCreateWithoutConnectionsInput, DiscordWebhookUncheckedCreateWithoutConnectionsInput>
    where?: DiscordWebhookWhereInput
  }

  export type DiscordWebhookUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: DiscordWebhookWhereInput
    data: XOR<DiscordWebhookUpdateWithoutConnectionsInput, DiscordWebhookUncheckedUpdateWithoutConnectionsInput>
  }

  export type DiscordWebhookUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDiscordWebhookNestedInput
  }

  export type DiscordWebhookUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUpsertWithoutConnectionsInput = {
    update: XOR<NotionUpdateWithoutConnectionsInput, NotionUncheckedUpdateWithoutConnectionsInput>
    create: XOR<NotionCreateWithoutConnectionsInput, NotionUncheckedCreateWithoutConnectionsInput>
    where?: NotionWhereInput
  }

  export type NotionUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: NotionWhereInput
    data: XOR<NotionUpdateWithoutConnectionsInput, NotionUncheckedUpdateWithoutConnectionsInput>
  }

  export type NotionUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutConnectionsInput = {
    update: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserUpdateWithoutConnectionsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUpdateManyWithoutUserNestedInput
    Notion?: NotionUpdateManyWithoutUserNestedInput
    Slack?: SlackUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput
    Notion?: NotionUncheckedUpdateManyWithoutUserNestedInput
    Slack?: SlackUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SlackUpsertWithoutConnectionsInput = {
    update: XOR<SlackUpdateWithoutConnectionsInput, SlackUncheckedUpdateWithoutConnectionsInput>
    create: XOR<SlackCreateWithoutConnectionsInput, SlackUncheckedCreateWithoutConnectionsInput>
    where?: SlackWhereInput
  }

  export type SlackUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: SlackWhereInput
    data: XOR<SlackUpdateWithoutConnectionsInput, SlackUncheckedUpdateWithoutConnectionsInput>
  }

  export type SlackUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutWorkflowsInput = {
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookCreateNestedManyWithoutUserInput
    Notion?: NotionCreateNestedManyWithoutUserInput
    Slack?: SlackCreateNestedManyWithoutUserInput
    connections?: ConnectionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: number
    clerkId: string
    name?: string | null
    email: string
    profileImage?: string | null
    tier?: string | null
    credits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localGoogleId?: string | null
    googleResourceId?: string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    DiscordWebhook?: DiscordWebhookUncheckedCreateNestedManyWithoutUserInput
    Notion?: NotionUncheckedCreateNestedManyWithoutUserInput
    Slack?: SlackUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUpdateManyWithoutUserNestedInput
    Notion?: NotionUpdateManyWithoutUserNestedInput
    Slack?: SlackUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localGoogleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleResourceId?: NullableStringFieldUpdateOperationsInput | string | null
    LocalGoogleCredential?: LocalGoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    DiscordWebhook?: DiscordWebhookUncheckedUpdateManyWithoutUserNestedInput
    Notion?: NotionUncheckedUpdateManyWithoutUserNestedInput
    Slack?: SlackUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiscordWebhookCreateManyUserInput = {
    id?: string
    webhookId: string
    url: string
    name: string
    guildName: string
    guildId: string
    channelId: string
  }

  export type NotionCreateManyUserInput = {
    id?: string
    accessToken: string
    workspaceId: string
    databaseId: string
    workspaceName: string
    workspaceIcon: string
  }

  export type SlackCreateManyUserInput = {
    id?: string
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
  }

  export type ConnectionsCreateManyUserInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    notionId?: string | null
    slackId?: string | null
  }

  export type WorkflowsCreateManyUserInput = {
    id?: string
    nodes?: string | null
    edges?: string | null
    name: string
    discordTemplate?: string | null
    notionTemplate?: string | null
    slackTemplate?: string | null
    slackChannels?: WorkflowsCreateslackChannelsInput | string[]
    slackAccessToken?: string | null
    notionAccessToken?: string | null
    notionDbId?: string | null
    flowPath?: string | null
    cronPath?: string | null
    publish?: boolean | null
    description: string
  }

  export type DiscordWebhookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUpdateManyWithoutDiscordWebhookNestedInput
  }

  export type DiscordWebhookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUncheckedUpdateManyWithoutDiscordWebhookNestedInput
  }

  export type DiscordWebhookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUpdateManyWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUncheckedUpdateManyWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    databaseId?: StringFieldUpdateOperationsInput | string
    workspaceName?: StringFieldUpdateOperationsInput | string
    workspaceIcon?: StringFieldUpdateOperationsInput | string
  }

  export type SlackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionsUncheckedUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authedUserId?: StringFieldUpdateOperationsInput | string
    authedUserToken?: StringFieldUpdateOperationsInput | string
    slackAccessToken?: StringFieldUpdateOperationsInput | string
    botUserId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    DiscordWebhook?: DiscordWebhookUpdateOneWithoutConnectionsNestedInput
    Notion?: NotionUpdateOneWithoutConnectionsNestedInput
    Slack?: SlackUpdateOneWithoutConnectionsNestedInput
  }

  export type ConnectionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodes?: NullableStringFieldUpdateOperationsInput | string | null
    edges?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    discordTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    notionTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    slackChannels?: WorkflowsUpdateslackChannelsInput | string[]
    slackAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    notionDbId?: NullableStringFieldUpdateOperationsInput | string | null
    flowPath?: NullableStringFieldUpdateOperationsInput | string | null
    cronPath?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionsCreateManyDiscordWebhookInput = {
    id?: string
    type: string
    notionId?: string | null
    userId?: string | null
    slackId?: string | null
  }

  export type ConnectionsUpdateWithoutDiscordWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Notion?: NotionUpdateOneWithoutConnectionsNestedInput
    User?: UserUpdateOneWithoutConnectionsNestedInput
    Slack?: SlackUpdateOneWithoutConnectionsNestedInput
  }

  export type ConnectionsUncheckedUpdateWithoutDiscordWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsUncheckedUpdateManyWithoutDiscordWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsCreateManySlackInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    notionId?: string | null
    userId?: string | null
  }

  export type ConnectionsUpdateWithoutSlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    DiscordWebhook?: DiscordWebhookUpdateOneWithoutConnectionsNestedInput
    Notion?: NotionUpdateOneWithoutConnectionsNestedInput
    User?: UserUpdateOneWithoutConnectionsNestedInput
  }

  export type ConnectionsUncheckedUpdateWithoutSlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsUncheckedUpdateManyWithoutSlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsCreateManyNotionInput = {
    id?: string
    type: string
    discordWebhookId?: string | null
    userId?: string | null
    slackId?: string | null
  }

  export type ConnectionsUpdateWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    DiscordWebhook?: DiscordWebhookUpdateOneWithoutConnectionsNestedInput
    User?: UserUpdateOneWithoutConnectionsNestedInput
    Slack?: SlackUpdateOneWithoutConnectionsNestedInput
  }

  export type ConnectionsUncheckedUpdateWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsUncheckedUpdateManyWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    discordWebhookId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    slackId?: NullableStringFieldUpdateOperationsInput | string | null
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