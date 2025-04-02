
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
 * Model reminders
 * 
 */
export type reminders = $Result.DefaultSelection<Prisma.$remindersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reminders
 * const reminders = await prisma.reminders.findMany()
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
   * // Fetch zero or more Reminders
   * const reminders = await prisma.reminders.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.reminders`: Exposes CRUD operations for the **reminders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminders.findMany()
    * ```
    */
  get reminders(): Prisma.remindersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    reminders: 'reminders'
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
      modelProps: "reminders"
      txIsolationLevel: never
    }
    model: {
      reminders: {
        payload: Prisma.$remindersPayload<ExtArgs>
        fields: Prisma.remindersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.remindersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.remindersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          findFirst: {
            args: Prisma.remindersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.remindersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          findMany: {
            args: Prisma.remindersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          create: {
            args: Prisma.remindersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          createMany: {
            args: Prisma.remindersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.remindersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          update: {
            args: Prisma.remindersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          deleteMany: {
            args: Prisma.remindersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.remindersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.remindersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          aggregate: {
            args: Prisma.RemindersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminders>
          }
          groupBy: {
            args: Prisma.remindersGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemindersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.remindersFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.remindersAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.remindersCountArgs<ExtArgs>
            result: $Utils.Optional<RemindersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    reminders?: remindersOmit
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
   * Models
   */

  /**
   * Model reminders
   */

  export type AggregateReminders = {
    _count: RemindersCountAggregateOutputType | null
    _avg: RemindersAvgAggregateOutputType | null
    _sum: RemindersSumAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  export type RemindersAvgAggregateOutputType = {
    delay_to_notify: number | null
  }

  export type RemindersSumAggregateOutputType = {
    delay_to_notify: number | null
  }

  export type RemindersMinAggregateOutputType = {
    id: string | null
    title: string | null
    date_to_remind: Date | null
    delay_to_notify: number | null
    completed: boolean | null
    extra_information: string | null
  }

  export type RemindersMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date_to_remind: Date | null
    delay_to_notify: number | null
    completed: boolean | null
    extra_information: string | null
  }

  export type RemindersCountAggregateOutputType = {
    id: number
    title: number
    date_to_remind: number
    delay_to_notify: number
    repeat_on: number
    completed: number
    extra_information: number
    _all: number
  }


  export type RemindersAvgAggregateInputType = {
    delay_to_notify?: true
  }

  export type RemindersSumAggregateInputType = {
    delay_to_notify?: true
  }

  export type RemindersMinAggregateInputType = {
    id?: true
    title?: true
    date_to_remind?: true
    delay_to_notify?: true
    completed?: true
    extra_information?: true
  }

  export type RemindersMaxAggregateInputType = {
    id?: true
    title?: true
    date_to_remind?: true
    delay_to_notify?: true
    completed?: true
    extra_information?: true
  }

  export type RemindersCountAggregateInputType = {
    id?: true
    title?: true
    date_to_remind?: true
    delay_to_notify?: true
    repeat_on?: true
    completed?: true
    extra_information?: true
    _all?: true
  }

  export type RemindersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to aggregate.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reminders
    **/
    _count?: true | RemindersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemindersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemindersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemindersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemindersMaxAggregateInputType
  }

  export type GetRemindersAggregateType<T extends RemindersAggregateArgs> = {
        [P in keyof T & keyof AggregateReminders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminders[P]>
      : GetScalarType<T[P], AggregateReminders[P]>
  }




  export type remindersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: remindersWhereInput
    orderBy?: remindersOrderByWithAggregationInput | remindersOrderByWithAggregationInput[]
    by: RemindersScalarFieldEnum[] | RemindersScalarFieldEnum
    having?: remindersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemindersCountAggregateInputType | true
    _avg?: RemindersAvgAggregateInputType
    _sum?: RemindersSumAggregateInputType
    _min?: RemindersMinAggregateInputType
    _max?: RemindersMaxAggregateInputType
  }

  export type RemindersGroupByOutputType = {
    id: string
    title: string
    date_to_remind: Date
    delay_to_notify: number
    repeat_on: string[]
    completed: boolean
    extra_information: string
    _count: RemindersCountAggregateOutputType | null
    _avg: RemindersAvgAggregateOutputType | null
    _sum: RemindersSumAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  type GetRemindersGroupByPayload<T extends remindersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemindersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemindersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemindersGroupByOutputType[P]>
            : GetScalarType<T[P], RemindersGroupByOutputType[P]>
        }
      >
    >


  export type remindersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date_to_remind?: boolean
    delay_to_notify?: boolean
    repeat_on?: boolean
    completed?: boolean
    extra_information?: boolean
  }, ExtArgs["result"]["reminders"]>



  export type remindersSelectScalar = {
    id?: boolean
    title?: boolean
    date_to_remind?: boolean
    delay_to_notify?: boolean
    repeat_on?: boolean
    completed?: boolean
    extra_information?: boolean
  }

  export type remindersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date_to_remind" | "delay_to_notify" | "repeat_on" | "completed" | "extra_information", ExtArgs["result"]["reminders"]>

  export type $remindersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reminders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date_to_remind: Date
      delay_to_notify: number
      repeat_on: string[]
      completed: boolean
      extra_information: string
    }, ExtArgs["result"]["reminders"]>
    composites: {}
  }

  type remindersGetPayload<S extends boolean | null | undefined | remindersDefaultArgs> = $Result.GetResult<Prisma.$remindersPayload, S>

  type remindersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<remindersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemindersCountAggregateInputType | true
    }

  export interface remindersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reminders'], meta: { name: 'reminders' } }
    /**
     * Find zero or one Reminders that matches the filter.
     * @param {remindersFindUniqueArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends remindersFindUniqueArgs>(args: SelectSubset<T, remindersFindUniqueArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {remindersFindUniqueOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends remindersFindUniqueOrThrowArgs>(args: SelectSubset<T, remindersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends remindersFindFirstArgs>(args?: SelectSubset<T, remindersFindFirstArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends remindersFindFirstOrThrowArgs>(args?: SelectSubset<T, remindersFindFirstOrThrowArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminders.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remindersWithIdOnly = await prisma.reminders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends remindersFindManyArgs>(args?: SelectSubset<T, remindersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminders.
     * @param {remindersCreateArgs} args - Arguments to create a Reminders.
     * @example
     * // Create one Reminders
     * const Reminders = await prisma.reminders.create({
     *   data: {
     *     // ... data to create a Reminders
     *   }
     * })
     * 
     */
    create<T extends remindersCreateArgs>(args: SelectSubset<T, remindersCreateArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {remindersCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends remindersCreateManyArgs>(args?: SelectSubset<T, remindersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reminders.
     * @param {remindersDeleteArgs} args - Arguments to delete one Reminders.
     * @example
     * // Delete one Reminders
     * const Reminders = await prisma.reminders.delete({
     *   where: {
     *     // ... filter to delete one Reminders
     *   }
     * })
     * 
     */
    delete<T extends remindersDeleteArgs>(args: SelectSubset<T, remindersDeleteArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminders.
     * @param {remindersUpdateArgs} args - Arguments to update one Reminders.
     * @example
     * // Update one Reminders
     * const reminders = await prisma.reminders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends remindersUpdateArgs>(args: SelectSubset<T, remindersUpdateArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {remindersDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends remindersDeleteManyArgs>(args?: SelectSubset<T, remindersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends remindersUpdateManyArgs>(args: SelectSubset<T, remindersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminders.
     * @param {remindersUpsertArgs} args - Arguments to update or create a Reminders.
     * @example
     * // Update or create a Reminders
     * const reminders = await prisma.reminders.upsert({
     *   create: {
     *     // ... data to create a Reminders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminders we want to update
     *   }
     * })
     */
    upsert<T extends remindersUpsertArgs>(args: SelectSubset<T, remindersUpsertArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * @param {remindersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reminders = await prisma.reminders.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: remindersFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Reminders.
     * @param {remindersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reminders = await prisma.reminders.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: remindersAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminders.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends remindersCountArgs>(
      args?: Subset<T, remindersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemindersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemindersAggregateArgs>(args: Subset<T, RemindersAggregateArgs>): Prisma.PrismaPromise<GetRemindersAggregateType<T>>

    /**
     * Group by Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersGroupByArgs} args - Group by arguments.
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
      T extends remindersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: remindersGroupByArgs['orderBy'] }
        : { orderBy?: remindersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, remindersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemindersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reminders model
   */
  readonly fields: remindersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__remindersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the reminders model
   */ 
  interface remindersFieldRefs {
    readonly id: FieldRef<"reminders", 'String'>
    readonly title: FieldRef<"reminders", 'String'>
    readonly date_to_remind: FieldRef<"reminders", 'DateTime'>
    readonly delay_to_notify: FieldRef<"reminders", 'Int'>
    readonly repeat_on: FieldRef<"reminders", 'String[]'>
    readonly completed: FieldRef<"reminders", 'Boolean'>
    readonly extra_information: FieldRef<"reminders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reminders findUnique
   */
  export type remindersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders findUniqueOrThrow
   */
  export type remindersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders findFirst
   */
  export type remindersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders findFirstOrThrow
   */
  export type remindersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders findMany
   */
  export type remindersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders create
   */
  export type remindersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The data needed to create a reminders.
     */
    data: XOR<remindersCreateInput, remindersUncheckedCreateInput>
  }

  /**
   * reminders createMany
   */
  export type remindersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[]
  }

  /**
   * reminders update
   */
  export type remindersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The data needed to update a reminders.
     */
    data: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>
    /**
     * Choose, which reminders to update.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders updateMany
   */
  export type remindersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reminders.
     */
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyInput>
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to update.
     */
    limit?: number
  }

  /**
   * reminders upsert
   */
  export type remindersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The filter to search for the reminders to update in case it exists.
     */
    where: remindersWhereUniqueInput
    /**
     * In case the reminders found by the `where` argument doesn't exist, create a new reminders with this data.
     */
    create: XOR<remindersCreateInput, remindersUncheckedCreateInput>
    /**
     * In case the reminders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>
  }

  /**
   * reminders delete
   */
  export type remindersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Filter which reminders to delete.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders deleteMany
   */
  export type remindersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to delete
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to delete.
     */
    limit?: number
  }

  /**
   * reminders findRaw
   */
  export type remindersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * reminders aggregateRaw
   */
  export type remindersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * reminders without action
   */
  export type remindersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const RemindersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date_to_remind: 'date_to_remind',
    delay_to_notify: 'delay_to_notify',
    repeat_on: 'repeat_on',
    completed: 'completed',
    extra_information: 'extra_information'
  };

  export type RemindersScalarFieldEnum = (typeof RemindersScalarFieldEnum)[keyof typeof RemindersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type remindersWhereInput = {
    AND?: remindersWhereInput | remindersWhereInput[]
    OR?: remindersWhereInput[]
    NOT?: remindersWhereInput | remindersWhereInput[]
    id?: StringFilter<"reminders"> | string
    title?: StringFilter<"reminders"> | string
    date_to_remind?: DateTimeFilter<"reminders"> | Date | string
    delay_to_notify?: IntFilter<"reminders"> | number
    repeat_on?: StringNullableListFilter<"reminders">
    completed?: BoolFilter<"reminders"> | boolean
    extra_information?: StringFilter<"reminders"> | string
  }

  export type remindersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date_to_remind?: SortOrder
    delay_to_notify?: SortOrder
    repeat_on?: SortOrder
    completed?: SortOrder
    extra_information?: SortOrder
  }

  export type remindersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: remindersWhereInput | remindersWhereInput[]
    OR?: remindersWhereInput[]
    NOT?: remindersWhereInput | remindersWhereInput[]
    title?: StringFilter<"reminders"> | string
    date_to_remind?: DateTimeFilter<"reminders"> | Date | string
    delay_to_notify?: IntFilter<"reminders"> | number
    repeat_on?: StringNullableListFilter<"reminders">
    completed?: BoolFilter<"reminders"> | boolean
    extra_information?: StringFilter<"reminders"> | string
  }, "id">

  export type remindersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date_to_remind?: SortOrder
    delay_to_notify?: SortOrder
    repeat_on?: SortOrder
    completed?: SortOrder
    extra_information?: SortOrder
    _count?: remindersCountOrderByAggregateInput
    _avg?: remindersAvgOrderByAggregateInput
    _max?: remindersMaxOrderByAggregateInput
    _min?: remindersMinOrderByAggregateInput
    _sum?: remindersSumOrderByAggregateInput
  }

  export type remindersScalarWhereWithAggregatesInput = {
    AND?: remindersScalarWhereWithAggregatesInput | remindersScalarWhereWithAggregatesInput[]
    OR?: remindersScalarWhereWithAggregatesInput[]
    NOT?: remindersScalarWhereWithAggregatesInput | remindersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reminders"> | string
    title?: StringWithAggregatesFilter<"reminders"> | string
    date_to_remind?: DateTimeWithAggregatesFilter<"reminders"> | Date | string
    delay_to_notify?: IntWithAggregatesFilter<"reminders"> | number
    repeat_on?: StringNullableListFilter<"reminders">
    completed?: BoolWithAggregatesFilter<"reminders"> | boolean
    extra_information?: StringWithAggregatesFilter<"reminders"> | string
  }

  export type remindersCreateInput = {
    id?: string
    title: string
    date_to_remind: Date | string
    delay_to_notify?: number
    repeat_on?: remindersCreaterepeat_onInput | string[]
    completed?: boolean
    extra_information?: string
  }

  export type remindersUncheckedCreateInput = {
    id?: string
    title: string
    date_to_remind: Date | string
    delay_to_notify?: number
    repeat_on?: remindersCreaterepeat_onInput | string[]
    completed?: boolean
    extra_information?: string
  }

  export type remindersUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date_to_remind?: DateTimeFieldUpdateOperationsInput | Date | string
    delay_to_notify?: IntFieldUpdateOperationsInput | number
    repeat_on?: remindersUpdaterepeat_onInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    extra_information?: StringFieldUpdateOperationsInput | string
  }

  export type remindersUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date_to_remind?: DateTimeFieldUpdateOperationsInput | Date | string
    delay_to_notify?: IntFieldUpdateOperationsInput | number
    repeat_on?: remindersUpdaterepeat_onInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    extra_information?: StringFieldUpdateOperationsInput | string
  }

  export type remindersCreateManyInput = {
    id?: string
    title: string
    date_to_remind: Date | string
    delay_to_notify?: number
    repeat_on?: remindersCreaterepeat_onInput | string[]
    completed?: boolean
    extra_information?: string
  }

  export type remindersUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date_to_remind?: DateTimeFieldUpdateOperationsInput | Date | string
    delay_to_notify?: IntFieldUpdateOperationsInput | number
    repeat_on?: remindersUpdaterepeat_onInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    extra_information?: StringFieldUpdateOperationsInput | string
  }

  export type remindersUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    date_to_remind?: DateTimeFieldUpdateOperationsInput | Date | string
    delay_to_notify?: IntFieldUpdateOperationsInput | number
    repeat_on?: remindersUpdaterepeat_onInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    extra_information?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type remindersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date_to_remind?: SortOrder
    delay_to_notify?: SortOrder
    repeat_on?: SortOrder
    completed?: SortOrder
    extra_information?: SortOrder
  }

  export type remindersAvgOrderByAggregateInput = {
    delay_to_notify?: SortOrder
  }

  export type remindersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date_to_remind?: SortOrder
    delay_to_notify?: SortOrder
    completed?: SortOrder
    extra_information?: SortOrder
  }

  export type remindersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date_to_remind?: SortOrder
    delay_to_notify?: SortOrder
    completed?: SortOrder
    extra_information?: SortOrder
  }

  export type remindersSumOrderByAggregateInput = {
    delay_to_notify?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type remindersCreaterepeat_onInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type remindersUpdaterepeat_onInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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