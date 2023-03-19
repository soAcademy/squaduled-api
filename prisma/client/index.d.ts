
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model TriviaCategory
 * 
 */
export type TriviaCategory = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaQuiz
 * 
 */
export type TriviaQuiz = {
  id: number
  quiz: string
  categoryName: string
  createdAt: Date
  updatedAt: Date
  answerChoiceId: number
}

/**
 * Model TriviaChoice
 * 
 */
export type TriviaChoice = {
  id: number
  choice: string
  quizId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaRound
 * 
 */
export type TriviaRound = {
  id: number
  user: string
  categoryName: string
  score: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaRoundQuiz
 * 
 */
export type TriviaRoundQuiz = {
  id: number
  roundId: number
  quizId: number
  userChoiceId: number
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TriviaCategories
 * const triviaCategories = await prisma.triviaCategory.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TriviaCategories
   * const triviaCategories = await prisma.triviaCategory.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.triviaCategory`: Exposes CRUD operations for the **TriviaCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaCategories
    * const triviaCategories = await prisma.triviaCategory.findMany()
    * ```
    */
  get triviaCategory(): Prisma.TriviaCategoryDelegate<GlobalReject>;

  /**
   * `prisma.triviaQuiz`: Exposes CRUD operations for the **TriviaQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaQuizs
    * const triviaQuizs = await prisma.triviaQuiz.findMany()
    * ```
    */
  get triviaQuiz(): Prisma.TriviaQuizDelegate<GlobalReject>;

  /**
   * `prisma.triviaChoice`: Exposes CRUD operations for the **TriviaChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaChoices
    * const triviaChoices = await prisma.triviaChoice.findMany()
    * ```
    */
  get triviaChoice(): Prisma.TriviaChoiceDelegate<GlobalReject>;

  /**
   * `prisma.triviaRound`: Exposes CRUD operations for the **TriviaRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRounds
    * const triviaRounds = await prisma.triviaRound.findMany()
    * ```
    */
  get triviaRound(): Prisma.TriviaRoundDelegate<GlobalReject>;

  /**
   * `prisma.triviaRoundQuiz`: Exposes CRUD operations for the **TriviaRoundQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRoundQuizs
    * const triviaRoundQuizs = await prisma.triviaRoundQuiz.findMany()
    * ```
    */
  get triviaRoundQuiz(): Prisma.TriviaRoundQuizDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TriviaCategory: 'TriviaCategory',
    TriviaQuiz: 'TriviaQuiz',
    TriviaChoice: 'TriviaChoice',
    TriviaRound: 'TriviaRound',
    TriviaRoundQuiz: 'TriviaRoundQuiz'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TriviaCategoryCountOutputType
   */


  export type TriviaCategoryCountOutputType = {
    triviaQuizes: number
    rounds: number
  }

  export type TriviaCategoryCountOutputTypeSelect = {
    triviaQuizes?: boolean
    rounds?: boolean
  }

  export type TriviaCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaCategoryCountOutputTypeArgs)
    ? TriviaCategoryCountOutputType 
    : S extends { select: any } & (TriviaCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaCategoryCountOutputType ? TriviaCategoryCountOutputType[P] : never
  } 
      : TriviaCategoryCountOutputType




  // Custom InputTypes

  /**
   * TriviaCategoryCountOutputType without action
   */
  export type TriviaCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategoryCountOutputType
     */
    select?: TriviaCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaQuizCountOutputType
   */


  export type TriviaQuizCountOutputType = {
    choices: number
    roundQuizes: number
  }

  export type TriviaQuizCountOutputTypeSelect = {
    choices?: boolean
    roundQuizes?: boolean
  }

  export type TriviaQuizCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaQuizCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuizCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizCountOutputTypeArgs)
    ? TriviaQuizCountOutputType 
    : S extends { select: any } & (TriviaQuizCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaQuizCountOutputType ? TriviaQuizCountOutputType[P] : never
  } 
      : TriviaQuizCountOutputType




  // Custom InputTypes

  /**
   * TriviaQuizCountOutputType without action
   */
  export type TriviaQuizCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizCountOutputType
     */
    select?: TriviaQuizCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaChoiceCountOutputType
   */


  export type TriviaChoiceCountOutputType = {
    quizAnswers: number
    roundQuizes: number
  }

  export type TriviaChoiceCountOutputTypeSelect = {
    quizAnswers?: boolean
    roundQuizes?: boolean
  }

  export type TriviaChoiceCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaChoiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceCountOutputTypeArgs)
    ? TriviaChoiceCountOutputType 
    : S extends { select: any } & (TriviaChoiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaChoiceCountOutputType ? TriviaChoiceCountOutputType[P] : never
  } 
      : TriviaChoiceCountOutputType




  // Custom InputTypes

  /**
   * TriviaChoiceCountOutputType without action
   */
  export type TriviaChoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoiceCountOutputType
     */
    select?: TriviaChoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaRoundCountOutputType
   */


  export type TriviaRoundCountOutputType = {
    roundQuizes: number
  }

  export type TriviaRoundCountOutputTypeSelect = {
    roundQuizes?: boolean
  }

  export type TriviaRoundCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaRoundCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundCountOutputTypeArgs)
    ? TriviaRoundCountOutputType 
    : S extends { select: any } & (TriviaRoundCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaRoundCountOutputType ? TriviaRoundCountOutputType[P] : never
  } 
      : TriviaRoundCountOutputType




  // Custom InputTypes

  /**
   * TriviaRoundCountOutputType without action
   */
  export type TriviaRoundCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundCountOutputType
     */
    select?: TriviaRoundCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model TriviaCategory
   */


  export type AggregateTriviaCategory = {
    _count: TriviaCategoryCountAggregateOutputType | null
    _avg: TriviaCategoryAvgAggregateOutputType | null
    _sum: TriviaCategorySumAggregateOutputType | null
    _min: TriviaCategoryMinAggregateOutputType | null
    _max: TriviaCategoryMaxAggregateOutputType | null
  }

  export type TriviaCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type TriviaCategorySumAggregateOutputType = {
    id: number | null
  }

  export type TriviaCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaCategoryAvgAggregateInputType = {
    id?: true
  }

  export type TriviaCategorySumAggregateInputType = {
    id?: true
  }

  export type TriviaCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaCategoryAggregateArgs = {
    /**
     * Filter which TriviaCategory to aggregate.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaCategories
    **/
    _count?: true | TriviaCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaCategoryMaxAggregateInputType
  }

  export type GetTriviaCategoryAggregateType<T extends TriviaCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaCategory[P]>
      : GetScalarType<T[P], AggregateTriviaCategory[P]>
  }




  export type TriviaCategoryGroupByArgs = {
    where?: TriviaCategoryWhereInput
    orderBy?: Enumerable<TriviaCategoryOrderByWithAggregationInput>
    by: TriviaCategoryScalarFieldEnum[]
    having?: TriviaCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaCategoryCountAggregateInputType | true
    _avg?: TriviaCategoryAvgAggregateInputType
    _sum?: TriviaCategorySumAggregateInputType
    _min?: TriviaCategoryMinAggregateInputType
    _max?: TriviaCategoryMaxAggregateInputType
  }


  export type TriviaCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TriviaCategoryCountAggregateOutputType | null
    _avg: TriviaCategoryAvgAggregateOutputType | null
    _sum: TriviaCategorySumAggregateOutputType | null
    _min: TriviaCategoryMinAggregateOutputType | null
    _max: TriviaCategoryMaxAggregateOutputType | null
  }

  type GetTriviaCategoryGroupByPayload<T extends TriviaCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TriviaCategorySelect = {
    id?: boolean
    name?: boolean
    triviaQuizes?: boolean | TriviaCategory$triviaQuizesArgs
    createdAt?: boolean
    updatedAt?: boolean
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }


  export type TriviaCategoryInclude = {
    triviaQuizes?: boolean | TriviaCategory$triviaQuizesArgs
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }

  export type TriviaCategoryGetPayload<S extends boolean | null | undefined | TriviaCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaCategory :
    S extends undefined ? never :
    S extends { include: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
    ? TriviaCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'triviaQuizes' ? Array < TriviaQuizGetPayload<S['include'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'triviaQuizes' ? Array < TriviaQuizGetPayload<S['select'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaCategory ? TriviaCategory[P] : never
  } 
      : TriviaCategory


  type TriviaCategoryCountArgs = 
    Omit<TriviaCategoryFindManyArgs, 'select' | 'include'> & {
      select?: TriviaCategoryCountAggregateInputType | true
    }

  export interface TriviaCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaCategory that matches the filter.
     * @param {TriviaCategoryFindUniqueArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaCategory'> extends True ? Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>> : Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | null, null>

    /**
     * Find one TriviaCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaCategoryFindUniqueOrThrowArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaCategoryFindUniqueOrThrowArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Find the first TriviaCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryFindFirstArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaCategory'> extends True ? Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>> : Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | null, null>

    /**
     * Find the first TriviaCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryFindFirstOrThrowArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaCategoryFindFirstOrThrowArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Find zero or more TriviaCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaCategories
     * const triviaCategories = await prisma.triviaCategory.findMany()
     * 
     * // Get first 10 TriviaCategories
     * const triviaCategories = await prisma.triviaCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaCategoryWithIdOnly = await prisma.triviaCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaCategoryFindManyArgs>(
      args?: SelectSubset<T, TriviaCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaCategoryGetPayload<T>>>

    /**
     * Create a TriviaCategory.
     * @param {TriviaCategoryCreateArgs} args - Arguments to create a TriviaCategory.
     * @example
     * // Create one TriviaCategory
     * const TriviaCategory = await prisma.triviaCategory.create({
     *   data: {
     *     // ... data to create a TriviaCategory
     *   }
     * })
     * 
    **/
    create<T extends TriviaCategoryCreateArgs>(
      args: SelectSubset<T, TriviaCategoryCreateArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Create many TriviaCategories.
     *     @param {TriviaCategoryCreateManyArgs} args - Arguments to create many TriviaCategories.
     *     @example
     *     // Create many TriviaCategories
     *     const triviaCategory = await prisma.triviaCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaCategoryCreateManyArgs>(
      args?: SelectSubset<T, TriviaCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaCategory.
     * @param {TriviaCategoryDeleteArgs} args - Arguments to delete one TriviaCategory.
     * @example
     * // Delete one TriviaCategory
     * const TriviaCategory = await prisma.triviaCategory.delete({
     *   where: {
     *     // ... filter to delete one TriviaCategory
     *   }
     * })
     * 
    **/
    delete<T extends TriviaCategoryDeleteArgs>(
      args: SelectSubset<T, TriviaCategoryDeleteArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Update one TriviaCategory.
     * @param {TriviaCategoryUpdateArgs} args - Arguments to update one TriviaCategory.
     * @example
     * // Update one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaCategoryUpdateArgs>(
      args: SelectSubset<T, TriviaCategoryUpdateArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Delete zero or more TriviaCategories.
     * @param {TriviaCategoryDeleteManyArgs} args - Arguments to filter TriviaCategories to delete.
     * @example
     * // Delete a few TriviaCategories
     * const { count } = await prisma.triviaCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaCategoryDeleteManyArgs>(
      args?: SelectSubset<T, TriviaCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaCategories
     * const triviaCategory = await prisma.triviaCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaCategoryUpdateManyArgs>(
      args: SelectSubset<T, TriviaCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaCategory.
     * @param {TriviaCategoryUpsertArgs} args - Arguments to update or create a TriviaCategory.
     * @example
     * // Update or create a TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.upsert({
     *   create: {
     *     // ... data to create a TriviaCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaCategory we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaCategoryUpsertArgs>(
      args: SelectSubset<T, TriviaCategoryUpsertArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Count the number of TriviaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryCountArgs} args - Arguments to filter TriviaCategories to count.
     * @example
     * // Count the number of TriviaCategories
     * const count = await prisma.triviaCategory.count({
     *   where: {
     *     // ... the filter for the TriviaCategories we want to count
     *   }
     * })
    **/
    count<T extends TriviaCategoryCountArgs>(
      args?: Subset<T, TriviaCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaCategoryAggregateArgs>(args: Subset<T, TriviaCategoryAggregateArgs>): Prisma.PrismaPromise<GetTriviaCategoryAggregateType<T>>

    /**
     * Group by TriviaCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryGroupByArgs} args - Group by arguments.
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
      T extends TriviaCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TriviaCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TriviaCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    triviaQuizes<T extends TriviaCategory$triviaQuizesArgs= {}>(args?: Subset<T, TriviaCategory$triviaQuizesArgs>): Prisma.PrismaPromise<Array<TriviaQuizGetPayload<T>>| Null>;

    rounds<T extends TriviaCategory$roundsArgs= {}>(args?: Subset<T, TriviaCategory$roundsArgs>): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TriviaCategory base type for findUnique actions
   */
  export type TriviaCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where: TriviaCategoryWhereUniqueInput
  }

  /**
   * TriviaCategory findUnique
   */
  export interface TriviaCategoryFindUniqueArgs extends TriviaCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaCategory findUniqueOrThrow
   */
  export type TriviaCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where: TriviaCategoryWhereUniqueInput
  }


  /**
   * TriviaCategory base type for findFirst actions
   */
  export type TriviaCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaCategories.
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaCategories.
     */
    distinct?: Enumerable<TriviaCategoryScalarFieldEnum>
  }

  /**
   * TriviaCategory findFirst
   */
  export interface TriviaCategoryFindFirstArgs extends TriviaCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaCategory findFirstOrThrow
   */
  export type TriviaCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaCategories.
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaCategories.
     */
    distinct?: Enumerable<TriviaCategoryScalarFieldEnum>
  }


  /**
   * TriviaCategory findMany
   */
  export type TriviaCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategories to fetch.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaCategories.
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    distinct?: Enumerable<TriviaCategoryScalarFieldEnum>
  }


  /**
   * TriviaCategory create
   */
  export type TriviaCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * The data needed to create a TriviaCategory.
     */
    data: XOR<TriviaCategoryCreateInput, TriviaCategoryUncheckedCreateInput>
  }


  /**
   * TriviaCategory createMany
   */
  export type TriviaCategoryCreateManyArgs = {
    /**
     * The data used to create many TriviaCategories.
     */
    data: Enumerable<TriviaCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaCategory update
   */
  export type TriviaCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * The data needed to update a TriviaCategory.
     */
    data: XOR<TriviaCategoryUpdateInput, TriviaCategoryUncheckedUpdateInput>
    /**
     * Choose, which TriviaCategory to update.
     */
    where: TriviaCategoryWhereUniqueInput
  }


  /**
   * TriviaCategory updateMany
   */
  export type TriviaCategoryUpdateManyArgs = {
    /**
     * The data used to update TriviaCategories.
     */
    data: XOR<TriviaCategoryUpdateManyMutationInput, TriviaCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TriviaCategories to update
     */
    where?: TriviaCategoryWhereInput
  }


  /**
   * TriviaCategory upsert
   */
  export type TriviaCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * The filter to search for the TriviaCategory to update in case it exists.
     */
    where: TriviaCategoryWhereUniqueInput
    /**
     * In case the TriviaCategory found by the `where` argument doesn't exist, create a new TriviaCategory with this data.
     */
    create: XOR<TriviaCategoryCreateInput, TriviaCategoryUncheckedCreateInput>
    /**
     * In case the TriviaCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaCategoryUpdateInput, TriviaCategoryUncheckedUpdateInput>
  }


  /**
   * TriviaCategory delete
   */
  export type TriviaCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter which TriviaCategory to delete.
     */
    where: TriviaCategoryWhereUniqueInput
  }


  /**
   * TriviaCategory deleteMany
   */
  export type TriviaCategoryDeleteManyArgs = {
    /**
     * Filter which TriviaCategories to delete
     */
    where?: TriviaCategoryWhereInput
  }


  /**
   * TriviaCategory.triviaQuizes
   */
  export type TriviaCategory$triviaQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    where?: TriviaQuizWhereInput
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    cursor?: TriviaQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaCategory.rounds
   */
  export type TriviaCategory$roundsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    cursor?: TriviaRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaCategory without action
   */
  export type TriviaCategoryArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
  }



  /**
   * Model TriviaQuiz
   */


  export type AggregateTriviaQuiz = {
    _count: TriviaQuizCountAggregateOutputType | null
    _avg: TriviaQuizAvgAggregateOutputType | null
    _sum: TriviaQuizSumAggregateOutputType | null
    _min: TriviaQuizMinAggregateOutputType | null
    _max: TriviaQuizMaxAggregateOutputType | null
  }

  export type TriviaQuizAvgAggregateOutputType = {
    id: number | null
    answerChoiceId: number | null
  }

  export type TriviaQuizSumAggregateOutputType = {
    id: number | null
    answerChoiceId: number | null
  }

  export type TriviaQuizMinAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    answerChoiceId: number | null
  }

  export type TriviaQuizMaxAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    answerChoiceId: number | null
  }

  export type TriviaQuizCountAggregateOutputType = {
    id: number
    quiz: number
    categoryName: number
    createdAt: number
    updatedAt: number
    answerChoiceId: number
    _all: number
  }


  export type TriviaQuizAvgAggregateInputType = {
    id?: true
    answerChoiceId?: true
  }

  export type TriviaQuizSumAggregateInputType = {
    id?: true
    answerChoiceId?: true
  }

  export type TriviaQuizMinAggregateInputType = {
    id?: true
    quiz?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    answerChoiceId?: true
  }

  export type TriviaQuizMaxAggregateInputType = {
    id?: true
    quiz?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    answerChoiceId?: true
  }

  export type TriviaQuizCountAggregateInputType = {
    id?: true
    quiz?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    answerChoiceId?: true
    _all?: true
  }

  export type TriviaQuizAggregateArgs = {
    /**
     * Filter which TriviaQuiz to aggregate.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaQuizs
    **/
    _count?: true | TriviaQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaQuizMaxAggregateInputType
  }

  export type GetTriviaQuizAggregateType<T extends TriviaQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaQuiz[P]>
      : GetScalarType<T[P], AggregateTriviaQuiz[P]>
  }




  export type TriviaQuizGroupByArgs = {
    where?: TriviaQuizWhereInput
    orderBy?: Enumerable<TriviaQuizOrderByWithAggregationInput>
    by: TriviaQuizScalarFieldEnum[]
    having?: TriviaQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaQuizCountAggregateInputType | true
    _avg?: TriviaQuizAvgAggregateInputType
    _sum?: TriviaQuizSumAggregateInputType
    _min?: TriviaQuizMinAggregateInputType
    _max?: TriviaQuizMaxAggregateInputType
  }


  export type TriviaQuizGroupByOutputType = {
    id: number
    quiz: string
    categoryName: string
    createdAt: Date
    updatedAt: Date
    answerChoiceId: number
    _count: TriviaQuizCountAggregateOutputType | null
    _avg: TriviaQuizAvgAggregateOutputType | null
    _sum: TriviaQuizSumAggregateOutputType | null
    _min: TriviaQuizMinAggregateOutputType | null
    _max: TriviaQuizMaxAggregateOutputType | null
  }

  type GetTriviaQuizGroupByPayload<T extends TriviaQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaQuizGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaQuizGroupByOutputType[P]>
        }
      >
    >


  export type TriviaQuizSelect = {
    id?: boolean
    quiz?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    choices?: boolean | TriviaQuiz$choicesArgs
    answer?: boolean | TriviaChoiceArgs
    answerChoiceId?: boolean
    roundQuizes?: boolean | TriviaQuiz$roundQuizesArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }


  export type TriviaQuizInclude = {
    category?: boolean | TriviaCategoryArgs
    choices?: boolean | TriviaQuiz$choicesArgs
    answer?: boolean | TriviaChoiceArgs
    roundQuizes?: boolean | TriviaQuiz$roundQuizesArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }

  export type TriviaQuizGetPayload<S extends boolean | null | undefined | TriviaQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
    ? TriviaQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> | null :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['include'][P]>>  :
        P extends 'answer' ? TriviaChoiceGetPayload<S['include'][P]> :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaQuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> | null :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['select'][P]>>  :
        P extends 'answer' ? TriviaChoiceGetPayload<S['select'][P]> :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaQuizCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaQuiz ? TriviaQuiz[P] : never
  } 
      : TriviaQuiz


  type TriviaQuizCountArgs = 
    Omit<TriviaQuizFindManyArgs, 'select' | 'include'> & {
      select?: TriviaQuizCountAggregateInputType | true
    }

  export interface TriviaQuizDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaQuiz that matches the filter.
     * @param {TriviaQuizFindUniqueArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaQuizFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaQuizFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaQuiz'> extends True ? Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>> : Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | null, null>

    /**
     * Find one TriviaQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaQuizFindUniqueOrThrowArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaQuizFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuizFindUniqueOrThrowArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Find the first TriviaQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizFindFirstArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaQuizFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaQuizFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaQuiz'> extends True ? Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>> : Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | null, null>

    /**
     * Find the first TriviaQuiz that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizFindFirstOrThrowArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaQuizFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuizFindFirstOrThrowArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Find zero or more TriviaQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaQuizs
     * const triviaQuizs = await prisma.triviaQuiz.findMany()
     * 
     * // Get first 10 TriviaQuizs
     * const triviaQuizs = await prisma.triviaQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaQuizWithIdOnly = await prisma.triviaQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaQuizFindManyArgs>(
      args?: SelectSubset<T, TriviaQuizFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaQuizGetPayload<T>>>

    /**
     * Create a TriviaQuiz.
     * @param {TriviaQuizCreateArgs} args - Arguments to create a TriviaQuiz.
     * @example
     * // Create one TriviaQuiz
     * const TriviaQuiz = await prisma.triviaQuiz.create({
     *   data: {
     *     // ... data to create a TriviaQuiz
     *   }
     * })
     * 
    **/
    create<T extends TriviaQuizCreateArgs>(
      args: SelectSubset<T, TriviaQuizCreateArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Create many TriviaQuizs.
     *     @param {TriviaQuizCreateManyArgs} args - Arguments to create many TriviaQuizs.
     *     @example
     *     // Create many TriviaQuizs
     *     const triviaQuiz = await prisma.triviaQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaQuizCreateManyArgs>(
      args?: SelectSubset<T, TriviaQuizCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaQuiz.
     * @param {TriviaQuizDeleteArgs} args - Arguments to delete one TriviaQuiz.
     * @example
     * // Delete one TriviaQuiz
     * const TriviaQuiz = await prisma.triviaQuiz.delete({
     *   where: {
     *     // ... filter to delete one TriviaQuiz
     *   }
     * })
     * 
    **/
    delete<T extends TriviaQuizDeleteArgs>(
      args: SelectSubset<T, TriviaQuizDeleteArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Update one TriviaQuiz.
     * @param {TriviaQuizUpdateArgs} args - Arguments to update one TriviaQuiz.
     * @example
     * // Update one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaQuizUpdateArgs>(
      args: SelectSubset<T, TriviaQuizUpdateArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Delete zero or more TriviaQuizs.
     * @param {TriviaQuizDeleteManyArgs} args - Arguments to filter TriviaQuizs to delete.
     * @example
     * // Delete a few TriviaQuizs
     * const { count } = await prisma.triviaQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaQuizDeleteManyArgs>(
      args?: SelectSubset<T, TriviaQuizDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaQuizs
     * const triviaQuiz = await prisma.triviaQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaQuizUpdateManyArgs>(
      args: SelectSubset<T, TriviaQuizUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaQuiz.
     * @param {TriviaQuizUpsertArgs} args - Arguments to update or create a TriviaQuiz.
     * @example
     * // Update or create a TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.upsert({
     *   create: {
     *     // ... data to create a TriviaQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaQuizUpsertArgs>(
      args: SelectSubset<T, TriviaQuizUpsertArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Count the number of TriviaQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizCountArgs} args - Arguments to filter TriviaQuizs to count.
     * @example
     * // Count the number of TriviaQuizs
     * const count = await prisma.triviaQuiz.count({
     *   where: {
     *     // ... the filter for the TriviaQuizs we want to count
     *   }
     * })
    **/
    count<T extends TriviaQuizCountArgs>(
      args?: Subset<T, TriviaQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaQuizAggregateArgs>(args: Subset<T, TriviaQuizAggregateArgs>): Prisma.PrismaPromise<GetTriviaQuizAggregateType<T>>

    /**
     * Group by TriviaQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizGroupByArgs} args - Group by arguments.
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
      T extends TriviaQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaQuizGroupByArgs['orderBy'] }
        : { orderBy?: TriviaQuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TriviaQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaQuizClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

    choices<T extends TriviaQuiz$choicesArgs= {}>(args?: Subset<T, TriviaQuiz$choicesArgs>): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>| Null>;

    answer<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

    roundQuizes<T extends TriviaQuiz$roundQuizesArgs= {}>(args?: Subset<T, TriviaQuiz$roundQuizesArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TriviaQuiz base type for findUnique actions
   */
  export type TriviaQuizFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where: TriviaQuizWhereUniqueInput
  }

  /**
   * TriviaQuiz findUnique
   */
  export interface TriviaQuizFindUniqueArgs extends TriviaQuizFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuiz findUniqueOrThrow
   */
  export type TriviaQuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where: TriviaQuizWhereUniqueInput
  }


  /**
   * TriviaQuiz base type for findFirst actions
   */
  export type TriviaQuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuizs.
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuizs.
     */
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }

  /**
   * TriviaQuiz findFirst
   */
  export interface TriviaQuizFindFirstArgs extends TriviaQuizFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuiz findFirstOrThrow
   */
  export type TriviaQuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuizs.
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuizs.
     */
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaQuiz findMany
   */
  export type TriviaQuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuizs to fetch.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaQuizs.
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaQuiz create
   */
  export type TriviaQuizCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * The data needed to create a TriviaQuiz.
     */
    data: XOR<TriviaQuizCreateInput, TriviaQuizUncheckedCreateInput>
  }


  /**
   * TriviaQuiz createMany
   */
  export type TriviaQuizCreateManyArgs = {
    /**
     * The data used to create many TriviaQuizs.
     */
    data: Enumerable<TriviaQuizCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaQuiz update
   */
  export type TriviaQuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * The data needed to update a TriviaQuiz.
     */
    data: XOR<TriviaQuizUpdateInput, TriviaQuizUncheckedUpdateInput>
    /**
     * Choose, which TriviaQuiz to update.
     */
    where: TriviaQuizWhereUniqueInput
  }


  /**
   * TriviaQuiz updateMany
   */
  export type TriviaQuizUpdateManyArgs = {
    /**
     * The data used to update TriviaQuizs.
     */
    data: XOR<TriviaQuizUpdateManyMutationInput, TriviaQuizUncheckedUpdateManyInput>
    /**
     * Filter which TriviaQuizs to update
     */
    where?: TriviaQuizWhereInput
  }


  /**
   * TriviaQuiz upsert
   */
  export type TriviaQuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * The filter to search for the TriviaQuiz to update in case it exists.
     */
    where: TriviaQuizWhereUniqueInput
    /**
     * In case the TriviaQuiz found by the `where` argument doesn't exist, create a new TriviaQuiz with this data.
     */
    create: XOR<TriviaQuizCreateInput, TriviaQuizUncheckedCreateInput>
    /**
     * In case the TriviaQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaQuizUpdateInput, TriviaQuizUncheckedUpdateInput>
  }


  /**
   * TriviaQuiz delete
   */
  export type TriviaQuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter which TriviaQuiz to delete.
     */
    where: TriviaQuizWhereUniqueInput
  }


  /**
   * TriviaQuiz deleteMany
   */
  export type TriviaQuizDeleteManyArgs = {
    /**
     * Filter which TriviaQuizs to delete
     */
    where?: TriviaQuizWhereInput
  }


  /**
   * TriviaQuiz.choices
   */
  export type TriviaQuiz$choicesArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    where?: TriviaChoiceWhereInput
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    cursor?: TriviaChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }


  /**
   * TriviaQuiz.roundQuizes
   */
  export type TriviaQuiz$roundQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    cursor?: TriviaRoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaQuiz without action
   */
  export type TriviaQuizArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
  }



  /**
   * Model TriviaChoice
   */


  export type AggregateTriviaChoice = {
    _count: TriviaChoiceCountAggregateOutputType | null
    _avg: TriviaChoiceAvgAggregateOutputType | null
    _sum: TriviaChoiceSumAggregateOutputType | null
    _min: TriviaChoiceMinAggregateOutputType | null
    _max: TriviaChoiceMaxAggregateOutputType | null
  }

  export type TriviaChoiceAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaChoiceSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaChoiceMinAggregateOutputType = {
    id: number | null
    choice: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaChoiceMaxAggregateOutputType = {
    id: number | null
    choice: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaChoiceCountAggregateOutputType = {
    id: number
    choice: number
    quizId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaChoiceAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaChoiceSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaChoiceMinAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaChoiceMaxAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaChoiceCountAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaChoiceAggregateArgs = {
    /**
     * Filter which TriviaChoice to aggregate.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaChoices
    **/
    _count?: true | TriviaChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaChoiceMaxAggregateInputType
  }

  export type GetTriviaChoiceAggregateType<T extends TriviaChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaChoice[P]>
      : GetScalarType<T[P], AggregateTriviaChoice[P]>
  }




  export type TriviaChoiceGroupByArgs = {
    where?: TriviaChoiceWhereInput
    orderBy?: Enumerable<TriviaChoiceOrderByWithAggregationInput>
    by: TriviaChoiceScalarFieldEnum[]
    having?: TriviaChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaChoiceCountAggregateInputType | true
    _avg?: TriviaChoiceAvgAggregateInputType
    _sum?: TriviaChoiceSumAggregateInputType
    _min?: TriviaChoiceMinAggregateInputType
    _max?: TriviaChoiceMaxAggregateInputType
  }


  export type TriviaChoiceGroupByOutputType = {
    id: number
    choice: string
    quizId: number | null
    createdAt: Date
    updatedAt: Date
    _count: TriviaChoiceCountAggregateOutputType | null
    _avg: TriviaChoiceAvgAggregateOutputType | null
    _sum: TriviaChoiceSumAggregateOutputType | null
    _min: TriviaChoiceMinAggregateOutputType | null
    _max: TriviaChoiceMaxAggregateOutputType | null
  }

  type GetTriviaChoiceGroupByPayload<T extends TriviaChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaChoiceGroupByOutputType[P]>
        }
      >
    >


  export type TriviaChoiceSelect = {
    id?: boolean
    choice?: boolean
    quiz?: boolean | TriviaQuizArgs
    quizId?: boolean
    quizAnswers?: boolean | TriviaChoice$quizAnswersArgs
    createdAt?: boolean
    updatedAt?: boolean
    roundQuizes?: boolean | TriviaChoice$roundQuizesArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }


  export type TriviaChoiceInclude = {
    quiz?: boolean | TriviaQuizArgs
    quizAnswers?: boolean | TriviaChoice$quizAnswersArgs
    roundQuizes?: boolean | TriviaChoice$roundQuizesArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }

  export type TriviaChoiceGetPayload<S extends boolean | null | undefined | TriviaChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
    ? TriviaChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quiz' ? TriviaQuizGetPayload<S['include'][P]> | null :
        P extends 'quizAnswers' ? Array < TriviaQuizGetPayload<S['include'][P]>>  :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quiz' ? TriviaQuizGetPayload<S['select'][P]> | null :
        P extends 'quizAnswers' ? Array < TriviaQuizGetPayload<S['select'][P]>>  :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaChoice ? TriviaChoice[P] : never
  } 
      : TriviaChoice


  type TriviaChoiceCountArgs = 
    Omit<TriviaChoiceFindManyArgs, 'select' | 'include'> & {
      select?: TriviaChoiceCountAggregateInputType | true
    }

  export interface TriviaChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaChoice that matches the filter.
     * @param {TriviaChoiceFindUniqueArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaChoice'> extends True ? Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>> : Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | null, null>

    /**
     * Find one TriviaChoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaChoiceFindUniqueOrThrowArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaChoiceFindUniqueOrThrowArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Find the first TriviaChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceFindFirstArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaChoice'> extends True ? Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>> : Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | null, null>

    /**
     * Find the first TriviaChoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceFindFirstOrThrowArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaChoiceFindFirstOrThrowArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Find zero or more TriviaChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaChoices
     * const triviaChoices = await prisma.triviaChoice.findMany()
     * 
     * // Get first 10 TriviaChoices
     * const triviaChoices = await prisma.triviaChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaChoiceWithIdOnly = await prisma.triviaChoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaChoiceFindManyArgs>(
      args?: SelectSubset<T, TriviaChoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>>

    /**
     * Create a TriviaChoice.
     * @param {TriviaChoiceCreateArgs} args - Arguments to create a TriviaChoice.
     * @example
     * // Create one TriviaChoice
     * const TriviaChoice = await prisma.triviaChoice.create({
     *   data: {
     *     // ... data to create a TriviaChoice
     *   }
     * })
     * 
    **/
    create<T extends TriviaChoiceCreateArgs>(
      args: SelectSubset<T, TriviaChoiceCreateArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Create many TriviaChoices.
     *     @param {TriviaChoiceCreateManyArgs} args - Arguments to create many TriviaChoices.
     *     @example
     *     // Create many TriviaChoices
     *     const triviaChoice = await prisma.triviaChoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaChoiceCreateManyArgs>(
      args?: SelectSubset<T, TriviaChoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaChoice.
     * @param {TriviaChoiceDeleteArgs} args - Arguments to delete one TriviaChoice.
     * @example
     * // Delete one TriviaChoice
     * const TriviaChoice = await prisma.triviaChoice.delete({
     *   where: {
     *     // ... filter to delete one TriviaChoice
     *   }
     * })
     * 
    **/
    delete<T extends TriviaChoiceDeleteArgs>(
      args: SelectSubset<T, TriviaChoiceDeleteArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Update one TriviaChoice.
     * @param {TriviaChoiceUpdateArgs} args - Arguments to update one TriviaChoice.
     * @example
     * // Update one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaChoiceUpdateArgs>(
      args: SelectSubset<T, TriviaChoiceUpdateArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Delete zero or more TriviaChoices.
     * @param {TriviaChoiceDeleteManyArgs} args - Arguments to filter TriviaChoices to delete.
     * @example
     * // Delete a few TriviaChoices
     * const { count } = await prisma.triviaChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaChoiceDeleteManyArgs>(
      args?: SelectSubset<T, TriviaChoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaChoices
     * const triviaChoice = await prisma.triviaChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaChoiceUpdateManyArgs>(
      args: SelectSubset<T, TriviaChoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaChoice.
     * @param {TriviaChoiceUpsertArgs} args - Arguments to update or create a TriviaChoice.
     * @example
     * // Update or create a TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.upsert({
     *   create: {
     *     // ... data to create a TriviaChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaChoice we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaChoiceUpsertArgs>(
      args: SelectSubset<T, TriviaChoiceUpsertArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Count the number of TriviaChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceCountArgs} args - Arguments to filter TriviaChoices to count.
     * @example
     * // Count the number of TriviaChoices
     * const count = await prisma.triviaChoice.count({
     *   where: {
     *     // ... the filter for the TriviaChoices we want to count
     *   }
     * })
    **/
    count<T extends TriviaChoiceCountArgs>(
      args?: Subset<T, TriviaChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaChoiceAggregateArgs>(args: Subset<T, TriviaChoiceAggregateArgs>): Prisma.PrismaPromise<GetTriviaChoiceAggregateType<T>>

    /**
     * Group by TriviaChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceGroupByArgs} args - Group by arguments.
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
      T extends TriviaChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaChoiceGroupByArgs['orderBy'] }
        : { orderBy?: TriviaChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TriviaChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaChoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    quiz<T extends TriviaQuizArgs= {}>(args?: Subset<T, TriviaQuizArgs>): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | Null>;

    quizAnswers<T extends TriviaChoice$quizAnswersArgs= {}>(args?: Subset<T, TriviaChoice$quizAnswersArgs>): Prisma.PrismaPromise<Array<TriviaQuizGetPayload<T>>| Null>;

    roundQuizes<T extends TriviaChoice$roundQuizesArgs= {}>(args?: Subset<T, TriviaChoice$roundQuizesArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TriviaChoice base type for findUnique actions
   */
  export type TriviaChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where: TriviaChoiceWhereUniqueInput
  }

  /**
   * TriviaChoice findUnique
   */
  export interface TriviaChoiceFindUniqueArgs extends TriviaChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaChoice findUniqueOrThrow
   */
  export type TriviaChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where: TriviaChoiceWhereUniqueInput
  }


  /**
   * TriviaChoice base type for findFirst actions
   */
  export type TriviaChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaChoices.
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaChoices.
     */
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }

  /**
   * TriviaChoice findFirst
   */
  export interface TriviaChoiceFindFirstArgs extends TriviaChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaChoice findFirstOrThrow
   */
  export type TriviaChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaChoices.
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaChoices.
     */
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }


  /**
   * TriviaChoice findMany
   */
  export type TriviaChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoices to fetch.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaChoices.
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }


  /**
   * TriviaChoice create
   */
  export type TriviaChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * The data needed to create a TriviaChoice.
     */
    data: XOR<TriviaChoiceCreateInput, TriviaChoiceUncheckedCreateInput>
  }


  /**
   * TriviaChoice createMany
   */
  export type TriviaChoiceCreateManyArgs = {
    /**
     * The data used to create many TriviaChoices.
     */
    data: Enumerable<TriviaChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaChoice update
   */
  export type TriviaChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * The data needed to update a TriviaChoice.
     */
    data: XOR<TriviaChoiceUpdateInput, TriviaChoiceUncheckedUpdateInput>
    /**
     * Choose, which TriviaChoice to update.
     */
    where: TriviaChoiceWhereUniqueInput
  }


  /**
   * TriviaChoice updateMany
   */
  export type TriviaChoiceUpdateManyArgs = {
    /**
     * The data used to update TriviaChoices.
     */
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyInput>
    /**
     * Filter which TriviaChoices to update
     */
    where?: TriviaChoiceWhereInput
  }


  /**
   * TriviaChoice upsert
   */
  export type TriviaChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * The filter to search for the TriviaChoice to update in case it exists.
     */
    where: TriviaChoiceWhereUniqueInput
    /**
     * In case the TriviaChoice found by the `where` argument doesn't exist, create a new TriviaChoice with this data.
     */
    create: XOR<TriviaChoiceCreateInput, TriviaChoiceUncheckedCreateInput>
    /**
     * In case the TriviaChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaChoiceUpdateInput, TriviaChoiceUncheckedUpdateInput>
  }


  /**
   * TriviaChoice delete
   */
  export type TriviaChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter which TriviaChoice to delete.
     */
    where: TriviaChoiceWhereUniqueInput
  }


  /**
   * TriviaChoice deleteMany
   */
  export type TriviaChoiceDeleteManyArgs = {
    /**
     * Filter which TriviaChoices to delete
     */
    where?: TriviaChoiceWhereInput
  }


  /**
   * TriviaChoice.quizAnswers
   */
  export type TriviaChoice$quizAnswersArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    where?: TriviaQuizWhereInput
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    cursor?: TriviaQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaChoice.roundQuizes
   */
  export type TriviaChoice$roundQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    cursor?: TriviaRoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaChoice without action
   */
  export type TriviaChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
  }



  /**
   * Model TriviaRound
   */


  export type AggregateTriviaRound = {
    _count: TriviaRoundCountAggregateOutputType | null
    _avg: TriviaRoundAvgAggregateOutputType | null
    _sum: TriviaRoundSumAggregateOutputType | null
    _min: TriviaRoundMinAggregateOutputType | null
    _max: TriviaRoundMaxAggregateOutputType | null
  }

  export type TriviaRoundAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type TriviaRoundSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type TriviaRoundMinAggregateOutputType = {
    id: number | null
    user: string | null
    categoryName: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundMaxAggregateOutputType = {
    id: number | null
    user: string | null
    categoryName: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundCountAggregateOutputType = {
    id: number
    user: number
    categoryName: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type TriviaRoundSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type TriviaRoundMinAggregateInputType = {
    id?: true
    user?: true
    categoryName?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundMaxAggregateInputType = {
    id?: true
    user?: true
    categoryName?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundCountAggregateInputType = {
    id?: true
    user?: true
    categoryName?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaRoundAggregateArgs = {
    /**
     * Filter which TriviaRound to aggregate.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRounds
    **/
    _count?: true | TriviaRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundMaxAggregateInputType
  }

  export type GetTriviaRoundAggregateType<T extends TriviaRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRound[P]>
      : GetScalarType<T[P], AggregateTriviaRound[P]>
  }




  export type TriviaRoundGroupByArgs = {
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithAggregationInput>
    by: TriviaRoundScalarFieldEnum[]
    having?: TriviaRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundCountAggregateInputType | true
    _avg?: TriviaRoundAvgAggregateInputType
    _sum?: TriviaRoundSumAggregateInputType
    _min?: TriviaRoundMinAggregateInputType
    _max?: TriviaRoundMaxAggregateInputType
  }


  export type TriviaRoundGroupByOutputType = {
    id: number
    user: string
    categoryName: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaRoundCountAggregateOutputType | null
    _avg: TriviaRoundAvgAggregateOutputType | null
    _sum: TriviaRoundSumAggregateOutputType | null
    _min: TriviaRoundMinAggregateOutputType | null
    _max: TriviaRoundMaxAggregateOutputType | null
  }

  type GetTriviaRoundGroupByPayload<T extends TriviaRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundSelect = {
    id?: boolean
    user?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryName?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roundQuizes?: boolean | TriviaRound$roundQuizesArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }


  export type TriviaRoundInclude = {
    category?: boolean | TriviaCategoryArgs
    roundQuizes?: boolean | TriviaRound$roundQuizesArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }

  export type TriviaRoundGetPayload<S extends boolean | null | undefined | TriviaRoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRound :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
    ? TriviaRound  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> | null :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> | null :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaRound ? TriviaRound[P] : never
  } 
      : TriviaRound


  type TriviaRoundCountArgs = 
    Omit<TriviaRoundFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundCountAggregateInputType | true
    }

  export interface TriviaRoundDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRound that matches the filter.
     * @param {TriviaRoundFindUniqueArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRound'> extends True ? Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>> : Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | null, null>

    /**
     * Find one TriviaRound that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundFindUniqueOrThrowArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Find the first TriviaRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindFirstArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRound'> extends True ? Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>> : Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | null, null>

    /**
     * Find the first TriviaRound that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindFirstOrThrowArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Find zero or more TriviaRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRounds
     * const triviaRounds = await prisma.triviaRound.findMany()
     * 
     * // Get first 10 TriviaRounds
     * const triviaRounds = await prisma.triviaRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundWithIdOnly = await prisma.triviaRound.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>>

    /**
     * Create a TriviaRound.
     * @param {TriviaRoundCreateArgs} args - Arguments to create a TriviaRound.
     * @example
     * // Create one TriviaRound
     * const TriviaRound = await prisma.triviaRound.create({
     *   data: {
     *     // ... data to create a TriviaRound
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundCreateArgs>(
      args: SelectSubset<T, TriviaRoundCreateArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Create many TriviaRounds.
     *     @param {TriviaRoundCreateManyArgs} args - Arguments to create many TriviaRounds.
     *     @example
     *     // Create many TriviaRounds
     *     const triviaRound = await prisma.triviaRound.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRound.
     * @param {TriviaRoundDeleteArgs} args - Arguments to delete one TriviaRound.
     * @example
     * // Delete one TriviaRound
     * const TriviaRound = await prisma.triviaRound.delete({
     *   where: {
     *     // ... filter to delete one TriviaRound
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundDeleteArgs>(
      args: SelectSubset<T, TriviaRoundDeleteArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Update one TriviaRound.
     * @param {TriviaRoundUpdateArgs} args - Arguments to update one TriviaRound.
     * @example
     * // Update one TriviaRound
     * const triviaRound = await prisma.triviaRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundUpdateArgs>(
      args: SelectSubset<T, TriviaRoundUpdateArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Delete zero or more TriviaRounds.
     * @param {TriviaRoundDeleteManyArgs} args - Arguments to filter TriviaRounds to delete.
     * @example
     * // Delete a few TriviaRounds
     * const { count } = await prisma.triviaRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRounds
     * const triviaRound = await prisma.triviaRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRound.
     * @param {TriviaRoundUpsertArgs} args - Arguments to update or create a TriviaRound.
     * @example
     * // Update or create a TriviaRound
     * const triviaRound = await prisma.triviaRound.upsert({
     *   create: {
     *     // ... data to create a TriviaRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRound we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundUpsertArgs>(
      args: SelectSubset<T, TriviaRoundUpsertArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Count the number of TriviaRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundCountArgs} args - Arguments to filter TriviaRounds to count.
     * @example
     * // Count the number of TriviaRounds
     * const count = await prisma.triviaRound.count({
     *   where: {
     *     // ... the filter for the TriviaRounds we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundCountArgs>(
      args?: Subset<T, TriviaRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundAggregateArgs>(args: Subset<T, TriviaRoundAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundAggregateType<T>>

    /**
     * Group by TriviaRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TriviaRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

    roundQuizes<T extends TriviaRound$roundQuizesArgs= {}>(args?: Subset<T, TriviaRound$roundQuizesArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TriviaRound base type for findUnique actions
   */
  export type TriviaRoundFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where: TriviaRoundWhereUniqueInput
  }

  /**
   * TriviaRound findUnique
   */
  export interface TriviaRoundFindUniqueArgs extends TriviaRoundFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRound findUniqueOrThrow
   */
  export type TriviaRoundFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound base type for findFirst actions
   */
  export type TriviaRoundFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRounds.
     */
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }

  /**
   * TriviaRound findFirst
   */
  export interface TriviaRoundFindFirstArgs extends TriviaRoundFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRound findFirstOrThrow
   */
  export type TriviaRoundFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRounds.
     */
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaRound findMany
   */
  export type TriviaRoundFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRounds to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaRound create
   */
  export type TriviaRoundCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The data needed to create a TriviaRound.
     */
    data: XOR<TriviaRoundCreateInput, TriviaRoundUncheckedCreateInput>
  }


  /**
   * TriviaRound createMany
   */
  export type TriviaRoundCreateManyArgs = {
    /**
     * The data used to create many TriviaRounds.
     */
    data: Enumerable<TriviaRoundCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRound update
   */
  export type TriviaRoundUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The data needed to update a TriviaRound.
     */
    data: XOR<TriviaRoundUpdateInput, TriviaRoundUncheckedUpdateInput>
    /**
     * Choose, which TriviaRound to update.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound updateMany
   */
  export type TriviaRoundUpdateManyArgs = {
    /**
     * The data used to update TriviaRounds.
     */
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRounds to update
     */
    where?: TriviaRoundWhereInput
  }


  /**
   * TriviaRound upsert
   */
  export type TriviaRoundUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The filter to search for the TriviaRound to update in case it exists.
     */
    where: TriviaRoundWhereUniqueInput
    /**
     * In case the TriviaRound found by the `where` argument doesn't exist, create a new TriviaRound with this data.
     */
    create: XOR<TriviaRoundCreateInput, TriviaRoundUncheckedCreateInput>
    /**
     * In case the TriviaRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundUpdateInput, TriviaRoundUncheckedUpdateInput>
  }


  /**
   * TriviaRound delete
   */
  export type TriviaRoundDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter which TriviaRound to delete.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound deleteMany
   */
  export type TriviaRoundDeleteManyArgs = {
    /**
     * Filter which TriviaRounds to delete
     */
    where?: TriviaRoundWhereInput
  }


  /**
   * TriviaRound.roundQuizes
   */
  export type TriviaRound$roundQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    cursor?: TriviaRoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaRound without action
   */
  export type TriviaRoundArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
  }



  /**
   * Model TriviaRoundQuiz
   */


  export type AggregateTriviaRoundQuiz = {
    _count: TriviaRoundQuizCountAggregateOutputType | null
    _avg: TriviaRoundQuizAvgAggregateOutputType | null
    _sum: TriviaRoundQuizSumAggregateOutputType | null
    _min: TriviaRoundQuizMinAggregateOutputType | null
    _max: TriviaRoundQuizMaxAggregateOutputType | null
  }

  export type TriviaRoundQuizAvgAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
  }

  export type TriviaRoundQuizSumAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
  }

  export type TriviaRoundQuizMinAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizMaxAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizCountAggregateOutputType = {
    id: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundQuizAvgAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
  }

  export type TriviaRoundQuizSumAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
  }

  export type TriviaRoundQuizMinAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizMaxAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizCountAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaRoundQuizAggregateArgs = {
    /**
     * Filter which TriviaRoundQuiz to aggregate.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRoundQuizs
    **/
    _count?: true | TriviaRoundQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundQuizMaxAggregateInputType
  }

  export type GetTriviaRoundQuizAggregateType<T extends TriviaRoundQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRoundQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRoundQuiz[P]>
      : GetScalarType<T[P], AggregateTriviaRoundQuiz[P]>
  }




  export type TriviaRoundQuizGroupByArgs = {
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithAggregationInput>
    by: TriviaRoundQuizScalarFieldEnum[]
    having?: TriviaRoundQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundQuizCountAggregateInputType | true
    _avg?: TriviaRoundQuizAvgAggregateInputType
    _sum?: TriviaRoundQuizSumAggregateInputType
    _min?: TriviaRoundQuizMinAggregateInputType
    _max?: TriviaRoundQuizMaxAggregateInputType
  }


  export type TriviaRoundQuizGroupByOutputType = {
    id: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaRoundQuizCountAggregateOutputType | null
    _avg: TriviaRoundQuizAvgAggregateOutputType | null
    _sum: TriviaRoundQuizSumAggregateOutputType | null
    _min: TriviaRoundQuizMinAggregateOutputType | null
    _max: TriviaRoundQuizMaxAggregateOutputType | null
  }

  type GetTriviaRoundQuizGroupByPayload<T extends TriviaRoundQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundQuizGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundQuizGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundQuizSelect = {
    id?: boolean
    round?: boolean | TriviaRoundArgs
    roundId?: boolean
    quiz?: boolean | TriviaQuizArgs
    quizId?: boolean
    userChoice?: boolean | TriviaChoiceArgs
    userChoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TriviaRoundQuizInclude = {
    round?: boolean | TriviaRoundArgs
    quiz?: boolean | TriviaQuizArgs
    userChoice?: boolean | TriviaChoiceArgs
  }

  export type TriviaRoundQuizGetPayload<S extends boolean | null | undefined | TriviaRoundQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuizArgs | TriviaRoundQuizFindManyArgs)
    ? TriviaRoundQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'round' ? TriviaRoundGetPayload<S['include'][P]> | null :
        P extends 'quiz' ? TriviaQuizGetPayload<S['include'][P]> | null :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TriviaRoundQuizArgs | TriviaRoundQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'round' ? TriviaRoundGetPayload<S['select'][P]> | null :
        P extends 'quiz' ? TriviaQuizGetPayload<S['select'][P]> | null :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['select'][P]> | null :  P extends keyof TriviaRoundQuiz ? TriviaRoundQuiz[P] : never
  } 
      : TriviaRoundQuiz


  type TriviaRoundQuizCountArgs = 
    Omit<TriviaRoundQuizFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundQuizCountAggregateInputType | true
    }

  export interface TriviaRoundQuizDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRoundQuiz that matches the filter.
     * @param {TriviaRoundQuizFindUniqueArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundQuizFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundQuizFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRoundQuiz'> extends True ? Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>> : Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T> | null, null>

    /**
     * Find one TriviaRoundQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundQuizFindUniqueOrThrowArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundQuizFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuizFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Find the first TriviaRoundQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizFindFirstArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundQuizFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundQuizFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRoundQuiz'> extends True ? Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>> : Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T> | null, null>

    /**
     * Find the first TriviaRoundQuiz that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizFindFirstOrThrowArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundQuizFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuizFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Find zero or more TriviaRoundQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRoundQuizs
     * const triviaRoundQuizs = await prisma.triviaRoundQuiz.findMany()
     * 
     * // Get first 10 TriviaRoundQuizs
     * const triviaRoundQuizs = await prisma.triviaRoundQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundQuizWithIdOnly = await prisma.triviaRoundQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundQuizFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>>

    /**
     * Create a TriviaRoundQuiz.
     * @param {TriviaRoundQuizCreateArgs} args - Arguments to create a TriviaRoundQuiz.
     * @example
     * // Create one TriviaRoundQuiz
     * const TriviaRoundQuiz = await prisma.triviaRoundQuiz.create({
     *   data: {
     *     // ... data to create a TriviaRoundQuiz
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundQuizCreateArgs>(
      args: SelectSubset<T, TriviaRoundQuizCreateArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Create many TriviaRoundQuizs.
     *     @param {TriviaRoundQuizCreateManyArgs} args - Arguments to create many TriviaRoundQuizs.
     *     @example
     *     // Create many TriviaRoundQuizs
     *     const triviaRoundQuiz = await prisma.triviaRoundQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundQuizCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRoundQuiz.
     * @param {TriviaRoundQuizDeleteArgs} args - Arguments to delete one TriviaRoundQuiz.
     * @example
     * // Delete one TriviaRoundQuiz
     * const TriviaRoundQuiz = await prisma.triviaRoundQuiz.delete({
     *   where: {
     *     // ... filter to delete one TriviaRoundQuiz
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundQuizDeleteArgs>(
      args: SelectSubset<T, TriviaRoundQuizDeleteArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Update one TriviaRoundQuiz.
     * @param {TriviaRoundQuizUpdateArgs} args - Arguments to update one TriviaRoundQuiz.
     * @example
     * // Update one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundQuizUpdateArgs>(
      args: SelectSubset<T, TriviaRoundQuizUpdateArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Delete zero or more TriviaRoundQuizs.
     * @param {TriviaRoundQuizDeleteManyArgs} args - Arguments to filter TriviaRoundQuizs to delete.
     * @example
     * // Delete a few TriviaRoundQuizs
     * const { count } = await prisma.triviaRoundQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundQuizDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRoundQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRoundQuizs
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundQuizUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundQuizUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRoundQuiz.
     * @param {TriviaRoundQuizUpsertArgs} args - Arguments to update or create a TriviaRoundQuiz.
     * @example
     * // Update or create a TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.upsert({
     *   create: {
     *     // ... data to create a TriviaRoundQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRoundQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundQuizUpsertArgs>(
      args: SelectSubset<T, TriviaRoundQuizUpsertArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Count the number of TriviaRoundQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizCountArgs} args - Arguments to filter TriviaRoundQuizs to count.
     * @example
     * // Count the number of TriviaRoundQuizs
     * const count = await prisma.triviaRoundQuiz.count({
     *   where: {
     *     // ... the filter for the TriviaRoundQuizs we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundQuizCountArgs>(
      args?: Subset<T, TriviaRoundQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRoundQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundQuizAggregateArgs>(args: Subset<T, TriviaRoundQuizAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundQuizAggregateType<T>>

    /**
     * Group by TriviaRoundQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundQuizGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundQuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TriviaRoundQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRoundQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundQuizClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    round<T extends TriviaRoundArgs= {}>(args?: Subset<T, TriviaRoundArgs>): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | Null>;

    quiz<T extends TriviaQuizArgs= {}>(args?: Subset<T, TriviaQuizArgs>): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | Null>;

    userChoice<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TriviaRoundQuiz base type for findUnique actions
   */
  export type TriviaRoundQuizFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }

  /**
   * TriviaRoundQuiz findUnique
   */
  export interface TriviaRoundQuizFindUniqueArgs extends TriviaRoundQuizFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuiz findUniqueOrThrow
   */
  export type TriviaRoundQuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }


  /**
   * TriviaRoundQuiz base type for findFirst actions
   */
  export type TriviaRoundQuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuizs.
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuizs.
     */
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }

  /**
   * TriviaRoundQuiz findFirst
   */
  export interface TriviaRoundQuizFindFirstArgs extends TriviaRoundQuizFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuiz findFirstOrThrow
   */
  export type TriviaRoundQuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuizs.
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuizs.
     */
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaRoundQuiz findMany
   */
  export type TriviaRoundQuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuizs to fetch.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRoundQuizs.
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaRoundQuiz create
   */
  export type TriviaRoundQuizCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * The data needed to create a TriviaRoundQuiz.
     */
    data: XOR<TriviaRoundQuizCreateInput, TriviaRoundQuizUncheckedCreateInput>
  }


  /**
   * TriviaRoundQuiz createMany
   */
  export type TriviaRoundQuizCreateManyArgs = {
    /**
     * The data used to create many TriviaRoundQuizs.
     */
    data: Enumerable<TriviaRoundQuizCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRoundQuiz update
   */
  export type TriviaRoundQuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * The data needed to update a TriviaRoundQuiz.
     */
    data: XOR<TriviaRoundQuizUpdateInput, TriviaRoundQuizUncheckedUpdateInput>
    /**
     * Choose, which TriviaRoundQuiz to update.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }


  /**
   * TriviaRoundQuiz updateMany
   */
  export type TriviaRoundQuizUpdateManyArgs = {
    /**
     * The data used to update TriviaRoundQuizs.
     */
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRoundQuizs to update
     */
    where?: TriviaRoundQuizWhereInput
  }


  /**
   * TriviaRoundQuiz upsert
   */
  export type TriviaRoundQuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * The filter to search for the TriviaRoundQuiz to update in case it exists.
     */
    where: TriviaRoundQuizWhereUniqueInput
    /**
     * In case the TriviaRoundQuiz found by the `where` argument doesn't exist, create a new TriviaRoundQuiz with this data.
     */
    create: XOR<TriviaRoundQuizCreateInput, TriviaRoundQuizUncheckedCreateInput>
    /**
     * In case the TriviaRoundQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundQuizUpdateInput, TriviaRoundQuizUncheckedUpdateInput>
  }


  /**
   * TriviaRoundQuiz delete
   */
  export type TriviaRoundQuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter which TriviaRoundQuiz to delete.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }


  /**
   * TriviaRoundQuiz deleteMany
   */
  export type TriviaRoundQuizDeleteManyArgs = {
    /**
     * Filter which TriviaRoundQuizs to delete
     */
    where?: TriviaRoundQuizWhereInput
  }


  /**
   * TriviaRoundQuiz without action
   */
  export type TriviaRoundQuizArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TriviaCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaCategoryScalarFieldEnum = (typeof TriviaCategoryScalarFieldEnum)[keyof typeof TriviaCategoryScalarFieldEnum]


  export const TriviaChoiceScalarFieldEnum: {
    id: 'id',
    choice: 'choice',
    quizId: 'quizId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaChoiceScalarFieldEnum = (typeof TriviaChoiceScalarFieldEnum)[keyof typeof TriviaChoiceScalarFieldEnum]


  export const TriviaQuizScalarFieldEnum: {
    id: 'id',
    quiz: 'quiz',
    categoryName: 'categoryName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    answerChoiceId: 'answerChoiceId'
  };

  export type TriviaQuizScalarFieldEnum = (typeof TriviaQuizScalarFieldEnum)[keyof typeof TriviaQuizScalarFieldEnum]


  export const TriviaRoundQuizScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    quizId: 'quizId',
    userChoiceId: 'userChoiceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundQuizScalarFieldEnum = (typeof TriviaRoundQuizScalarFieldEnum)[keyof typeof TriviaRoundQuizScalarFieldEnum]


  export const TriviaRoundScalarFieldEnum: {
    id: 'id',
    user: 'user',
    categoryName: 'categoryName',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundScalarFieldEnum = (typeof TriviaRoundScalarFieldEnum)[keyof typeof TriviaRoundScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TriviaCategoryWhereInput = {
    AND?: Enumerable<TriviaCategoryWhereInput>
    OR?: Enumerable<TriviaCategoryWhereInput>
    NOT?: Enumerable<TriviaCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    triviaQuizes?: TriviaQuizListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    rounds?: TriviaRoundListRelationFilter
  }

  export type TriviaCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    triviaQuizes?: TriviaQuizOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rounds?: TriviaRoundOrderByRelationAggregateInput
  }

  export type TriviaCategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TriviaCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaCategoryCountOrderByAggregateInput
    _avg?: TriviaCategoryAvgOrderByAggregateInput
    _max?: TriviaCategoryMaxOrderByAggregateInput
    _min?: TriviaCategoryMinOrderByAggregateInput
    _sum?: TriviaCategorySumOrderByAggregateInput
  }

  export type TriviaCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaQuizWhereInput = {
    AND?: Enumerable<TriviaQuizWhereInput>
    OR?: Enumerable<TriviaQuizWhereInput>
    NOT?: Enumerable<TriviaQuizWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput> | null
    categoryName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    choices?: TriviaChoiceListRelationFilter
    answer?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput>
    answerChoiceId?: IntFilter | number
    roundQuizes?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaQuizOrderByWithRelationInput = {
    id?: SortOrder
    quiz?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    choices?: TriviaChoiceOrderByRelationAggregateInput
    answer?: TriviaChoiceOrderByWithRelationInput
    answerChoiceId?: SortOrder
    roundQuizes?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaQuizWhereUniqueInput = {
    id?: number
    answerChoiceId?: number
  }

  export type TriviaQuizOrderByWithAggregationInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerChoiceId?: SortOrder
    _count?: TriviaQuizCountOrderByAggregateInput
    _avg?: TriviaQuizAvgOrderByAggregateInput
    _max?: TriviaQuizMaxOrderByAggregateInput
    _min?: TriviaQuizMinOrderByAggregateInput
    _sum?: TriviaQuizSumOrderByAggregateInput
  }

  export type TriviaQuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaQuizScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaQuizScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaQuizScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quiz?: StringWithAggregatesFilter | string
    categoryName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    answerChoiceId?: IntWithAggregatesFilter | number
  }

  export type TriviaChoiceWhereInput = {
    AND?: Enumerable<TriviaChoiceWhereInput>
    OR?: Enumerable<TriviaChoiceWhereInput>
    NOT?: Enumerable<TriviaChoiceWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    quiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput> | null
    quizId?: IntNullableFilter | number | null
    quizAnswers?: TriviaQuizListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundQuizes?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choice?: SortOrder
    quiz?: TriviaQuizOrderByWithRelationInput
    quizId?: SortOrder
    quizAnswers?: TriviaQuizOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundQuizes?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaChoiceCountOrderByAggregateInput
    _avg?: TriviaChoiceAvgOrderByAggregateInput
    _max?: TriviaChoiceMaxOrderByAggregateInput
    _min?: TriviaChoiceMinOrderByAggregateInput
    _sum?: TriviaChoiceSumOrderByAggregateInput
  }

  export type TriviaChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    choice?: StringWithAggregatesFilter | string
    quizId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundWhereInput = {
    AND?: Enumerable<TriviaRoundWhereInput>
    OR?: Enumerable<TriviaRoundWhereInput>
    NOT?: Enumerable<TriviaRoundWhereInput>
    id?: IntFilter | number
    user?: StringFilter | string
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput> | null
    categoryName?: StringFilter | string
    score?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundQuizes?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaRoundOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundQuizes?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaRoundWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    categoryName?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaRoundCountOrderByAggregateInput
    _avg?: TriviaRoundAvgOrderByAggregateInput
    _max?: TriviaRoundMaxOrderByAggregateInput
    _min?: TriviaRoundMinOrderByAggregateInput
    _sum?: TriviaRoundSumOrderByAggregateInput
  }

  export type TriviaRoundScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user?: StringWithAggregatesFilter | string
    categoryName?: StringWithAggregatesFilter | string
    score?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundQuizWhereInput = {
    AND?: Enumerable<TriviaRoundQuizWhereInput>
    OR?: Enumerable<TriviaRoundQuizWhereInput>
    NOT?: Enumerable<TriviaRoundQuizWhereInput>
    id?: IntFilter | number
    round?: XOR<TriviaRoundRelationFilter, TriviaRoundWhereInput> | null
    roundId?: IntFilter | number
    quiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput> | null
    quizId?: IntFilter | number
    userChoice?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput> | null
    userChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaRoundQuizOrderByWithRelationInput = {
    id?: SortOrder
    round?: TriviaRoundOrderByWithRelationInput
    roundId?: SortOrder
    quiz?: TriviaQuizOrderByWithRelationInput
    quizId?: SortOrder
    userChoice?: TriviaChoiceOrderByWithRelationInput
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundQuizOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaRoundQuizCountOrderByAggregateInput
    _avg?: TriviaRoundQuizAvgOrderByAggregateInput
    _max?: TriviaRoundQuizMaxOrderByAggregateInput
    _min?: TriviaRoundQuizMinOrderByAggregateInput
    _sum?: TriviaRoundQuizSumOrderByAggregateInput
  }

  export type TriviaRoundQuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundQuizScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundQuizScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundQuizScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundId?: IntWithAggregatesFilter | number
    quizId?: IntWithAggregatesFilter | number
    userChoiceId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaCategoryCreateInput = {
    name: string
    triviaQuizes?: TriviaQuizCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateInput = {
    id?: number
    name: string
    triviaQuizes?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizCreateInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswersInput
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    answerChoiceId: number
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUpdateInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswersNestedInput
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    answerChoiceId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizCreateManyInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerChoiceId: number
  }

  export type TriviaQuizUpdateManyMutationInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerChoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceCreateInput = {
    choice: string
    quiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
    quizAnswers?: TriviaQuizCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateInput = {
    id?: number
    choice: string
    quizId?: number | null
    quizAnswers?: TriviaQuizUncheckedCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUpdateInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
    quizAnswers?: TriviaQuizUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswers?: TriviaQuizUncheckedUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceCreateManyInput = {
    id?: number
    choice: string
    quizId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceUpdateManyMutationInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundCreateInput = {
    user: string
    category?: TriviaCategoryCreateNestedOneWithoutRoundsInput
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateInput = {
    id?: number
    user: string
    categoryName: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutRoundsNestedInput
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundCreateManyInput = {
    id?: number
    user: string
    categoryName: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateInput = {
    round?: TriviaRoundCreateNestedOneWithoutRoundQuizesInput
    quiz?: TriviaQuizCreateNestedOneWithoutRoundQuizesInput
    userChoice?: TriviaChoiceCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateInput = {
    id?: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateInput = {
    round?: TriviaRoundUpdateOneWithoutRoundQuizesNestedInput
    quiz?: TriviaQuizUpdateOneWithoutRoundQuizesNestedInput
    userChoice?: TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateManyInput = {
    id?: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type TriviaQuizListRelationFilter = {
    every?: TriviaQuizWhereInput
    some?: TriviaQuizWhereInput
    none?: TriviaQuizWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TriviaRoundListRelationFilter = {
    every?: TriviaRoundWhereInput
    some?: TriviaRoundWhereInput
    none?: TriviaRoundWhereInput
  }

  export type TriviaQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TriviaCategoryRelationFilter = {
    is?: TriviaCategoryWhereInput | null
    isNot?: TriviaCategoryWhereInput | null
  }

  export type TriviaChoiceListRelationFilter = {
    every?: TriviaChoiceWhereInput
    some?: TriviaChoiceWhereInput
    none?: TriviaChoiceWhereInput
  }

  export type TriviaChoiceRelationFilter = {
    is?: TriviaChoiceWhereInput | null
    isNot?: TriviaChoiceWhereInput | null
  }

  export type TriviaRoundQuizListRelationFilter = {
    every?: TriviaRoundQuizWhereInput
    some?: TriviaRoundQuizWhereInput
    none?: TriviaRoundQuizWhereInput
  }

  export type TriviaChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuizCountOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerChoiceId?: SortOrder
  }

  export type TriviaQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    answerChoiceId?: SortOrder
  }

  export type TriviaQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerChoiceId?: SortOrder
  }

  export type TriviaQuizMinOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerChoiceId?: SortOrder
  }

  export type TriviaQuizSumOrderByAggregateInput = {
    id?: SortOrder
    answerChoiceId?: SortOrder
  }

  export type TriviaQuizRelationFilter = {
    is?: TriviaQuizWhereInput | null
    isNot?: TriviaQuizWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type TriviaChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TriviaRoundCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    categoryName?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type TriviaRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    categoryName?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    categoryName?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type TriviaRoundRelationFilter = {
    is?: TriviaRoundWhereInput | null
    isNot?: TriviaRoundWhereInput | null
  }

  export type TriviaRoundQuizCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
  }

  export type TriviaRoundQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizSumOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
  }

  export type TriviaQuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaRoundCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TriviaQuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuizUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizWhereUniqueInput>
    delete?: Enumerable<TriviaQuizWhereUniqueInput>
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
    update?: Enumerable<TriviaQuizUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuizUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuizScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TriviaRoundUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuizUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizWhereUniqueInput>
    delete?: Enumerable<TriviaQuizWhereUniqueInput>
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
    update?: Enumerable<TriviaQuizUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuizUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuizScalarWhereInput>
  }

  export type TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaChoiceCreateNestedOneWithoutQuizAnswersInput = {
    create?: XOR<TriviaChoiceCreateWithoutQuizAnswersInput, TriviaChoiceUncheckedCreateWithoutQuizAnswersInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutQuizAnswersInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaRoundQuizCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput
    upsert?: TriviaCategoryUpsertWithoutTriviaQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutTriviaQuizesInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput>
  }

  export type TriviaChoiceUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaChoiceUpdateOneRequiredWithoutQuizAnswersNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutQuizAnswersInput, TriviaChoiceUncheckedCreateWithoutQuizAnswersInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutQuizAnswersInput
    upsert?: TriviaChoiceUpsertWithoutQuizAnswersInput
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutQuizAnswersInput, TriviaChoiceUncheckedUpdateWithoutQuizAnswersInput>
  }

  export type TriviaRoundQuizUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaQuizCreateNestedOneWithoutChoicesInput = {
    create?: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutChoicesInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaQuizCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutAnswerInput>, Enumerable<TriviaQuizUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutAnswerInput>
    createMany?: TriviaQuizCreateManyAnswerInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaQuizUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutAnswerInput>, Enumerable<TriviaQuizUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutAnswerInput>
    createMany?: TriviaQuizCreateManyAnswerInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaQuizUpdateOneWithoutChoicesNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutChoicesInput
    upsert?: TriviaQuizUpsertWithoutChoicesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutChoicesInput, TriviaQuizUncheckedUpdateWithoutChoicesInput>
  }

  export type TriviaQuizUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutAnswerInput>, Enumerable<TriviaQuizUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<TriviaQuizUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: TriviaQuizCreateManyAnswerInputEnvelope
    set?: Enumerable<TriviaQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizWhereUniqueInput>
    delete?: Enumerable<TriviaQuizWhereUniqueInput>
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
    update?: Enumerable<TriviaQuizUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<TriviaQuizUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<TriviaQuizScalarWhereInput>
  }

  export type TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriviaQuizUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutAnswerInput>, Enumerable<TriviaQuizUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<TriviaQuizUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: TriviaQuizCreateManyAnswerInputEnvelope
    set?: Enumerable<TriviaQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizWhereUniqueInput>
    delete?: Enumerable<TriviaQuizWhereUniqueInput>
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
    update?: Enumerable<TriviaQuizUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<TriviaQuizUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<TriviaQuizScalarWhereInput>
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaRoundQuizCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneWithoutRoundsNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    upsert?: TriviaCategoryUpsertWithoutRoundsInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
  }

  export type TriviaRoundQuizUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaRoundCreateNestedOneWithoutRoundQuizesInput = {
    create?: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutRoundQuizesInput
    connect?: TriviaRoundWhereUniqueInput
  }

  export type TriviaQuizCreateNestedOneWithoutRoundQuizesInput = {
    create?: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutRoundQuizesInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedOneWithoutRoundQuizesInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuizesInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaRoundUpdateOneWithoutRoundQuizesNestedInput = {
    create?: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutRoundQuizesInput
    upsert?: TriviaRoundUpsertWithoutRoundQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaRoundWhereUniqueInput
    update?: XOR<TriviaRoundUpdateWithoutRoundQuizesInput, TriviaRoundUncheckedUpdateWithoutRoundQuizesInput>
  }

  export type TriviaQuizUpdateOneWithoutRoundQuizesNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutRoundQuizesInput
    upsert?: TriviaQuizUpsertWithoutRoundQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutRoundQuizesInput, TriviaQuizUncheckedUpdateWithoutRoundQuizesInput>
  }

  export type TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuizesInput
    upsert?: TriviaChoiceUpsertWithoutRoundQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutRoundQuizesInput, TriviaChoiceUncheckedUpdateWithoutRoundQuizesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type TriviaQuizCreateWithoutCategoryInput = {
    quiz: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswersInput
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    quiz: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    answerChoiceId: number
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutCategoryInput, TriviaQuizUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuizCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaQuizCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundCreateWithoutCategoryInput = {
    user: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    user: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundCreateOrConnectWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaRoundCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    update: XOR<TriviaQuizUpdateWithoutCategoryInput, TriviaQuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaQuizCreateWithoutCategoryInput, TriviaQuizUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    data: XOR<TriviaQuizUpdateWithoutCategoryInput, TriviaQuizUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaQuizUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaQuizScalarWhereInput
    data: XOR<TriviaQuizUpdateManyMutationInput, TriviaQuizUncheckedUpdateManyWithoutTriviaQuizesInput>
  }

  export type TriviaQuizScalarWhereInput = {
    AND?: Enumerable<TriviaQuizScalarWhereInput>
    OR?: Enumerable<TriviaQuizScalarWhereInput>
    NOT?: Enumerable<TriviaQuizScalarWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    categoryName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    answerChoiceId?: IntFilter | number
  }

  export type TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    update: XOR<TriviaRoundUpdateWithoutCategoryInput, TriviaRoundUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    data: XOR<TriviaRoundUpdateWithoutCategoryInput, TriviaRoundUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaRoundUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaRoundScalarWhereInput
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type TriviaRoundScalarWhereInput = {
    AND?: Enumerable<TriviaRoundScalarWhereInput>
    OR?: Enumerable<TriviaRoundScalarWhereInput>
    NOT?: Enumerable<TriviaRoundScalarWhereInput>
    id?: IntFilter | number
    user?: StringFilter | string
    categoryName?: StringFilter | string
    score?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaCategoryCreateWithoutTriviaQuizesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
  }

  export type TriviaChoiceCreateWithoutQuizInput = {
    choice: string
    quizAnswers?: TriviaQuizCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateWithoutQuizInput = {
    id?: number
    choice: string
    quizAnswers?: TriviaQuizUncheckedCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceCreateOrConnectWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutQuizInput, TriviaChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaChoiceCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaChoiceCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaChoiceCreateWithoutQuizAnswersInput = {
    choice: string
    quiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateWithoutQuizAnswersInput = {
    id?: number
    choice: string
    quizId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceCreateOrConnectWithoutQuizAnswersInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutQuizAnswersInput, TriviaChoiceUncheckedCreateWithoutQuizAnswersInput>
  }

  export type TriviaRoundQuizCreateWithoutQuizInput = {
    round?: TriviaRoundCreateNestedOneWithoutRoundQuizesInput
    userChoice?: TriviaChoiceCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutQuizInput = {
    id?: number
    roundId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutQuizInput, TriviaRoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type TriviaRoundQuizCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutTriviaQuizesInput = {
    update: XOR<TriviaCategoryUpdateWithoutTriviaQuizesInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput>
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
  }

  export type TriviaCategoryUpdateWithoutTriviaQuizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    update: XOR<TriviaChoiceUpdateWithoutQuizInput, TriviaChoiceUncheckedUpdateWithoutQuizInput>
    create: XOR<TriviaChoiceCreateWithoutQuizInput, TriviaChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    data: XOR<TriviaChoiceUpdateWithoutQuizInput, TriviaChoiceUncheckedUpdateWithoutQuizInput>
  }

  export type TriviaChoiceUpdateManyWithWhereWithoutQuizInput = {
    where: TriviaChoiceScalarWhereInput
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type TriviaChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereInput>
    OR?: Enumerable<TriviaChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    quizId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaChoiceUpsertWithoutQuizAnswersInput = {
    update: XOR<TriviaChoiceUpdateWithoutQuizAnswersInput, TriviaChoiceUncheckedUpdateWithoutQuizAnswersInput>
    create: XOR<TriviaChoiceCreateWithoutQuizAnswersInput, TriviaChoiceUncheckedCreateWithoutQuizAnswersInput>
  }

  export type TriviaChoiceUpdateWithoutQuizAnswersInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutQuizAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaRoundQuizUpsertWithWhereUniqueWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    update: XOR<TriviaRoundQuizUpdateWithoutQuizInput, TriviaRoundQuizUncheckedUpdateWithoutQuizInput>
    create: XOR<TriviaRoundQuizCreateWithoutQuizInput, TriviaRoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type TriviaRoundQuizUpdateWithWhereUniqueWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    data: XOR<TriviaRoundQuizUpdateWithoutQuizInput, TriviaRoundQuizUncheckedUpdateWithoutQuizInput>
  }

  export type TriviaRoundQuizUpdateManyWithWhereWithoutQuizInput = {
    where: TriviaRoundQuizScalarWhereInput
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput>
  }

  export type TriviaRoundQuizScalarWhereInput = {
    AND?: Enumerable<TriviaRoundQuizScalarWhereInput>
    OR?: Enumerable<TriviaRoundQuizScalarWhereInput>
    NOT?: Enumerable<TriviaRoundQuizScalarWhereInput>
    id?: IntFilter | number
    roundId?: IntFilter | number
    quizId?: IntFilter | number
    userChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaQuizCreateWithoutChoicesInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswersInput
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutChoicesInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerChoiceId: number
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutChoicesInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuizCreateWithoutAnswerInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutAnswerInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutAnswerInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
  }

  export type TriviaQuizCreateManyAnswerInputEnvelope = {
    data: Enumerable<TriviaQuizCreateManyAnswerInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundQuizCreateWithoutUserChoiceInput = {
    round?: TriviaRoundCreateNestedOneWithoutRoundQuizesInput
    quiz?: TriviaQuizCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput = {
    id?: number
    roundId: number
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutUserChoiceInput, TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuizCreateManyUserChoiceInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyUserChoiceInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuizUpsertWithoutChoicesInput = {
    update: XOR<TriviaQuizUpdateWithoutChoicesInput, TriviaQuizUncheckedUpdateWithoutChoicesInput>
    create: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuizUpdateWithoutChoicesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswersNestedInput
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerChoiceId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUpsertWithWhereUniqueWithoutAnswerInput = {
    where: TriviaQuizWhereUniqueInput
    update: XOR<TriviaQuizUpdateWithoutAnswerInput, TriviaQuizUncheckedUpdateWithoutAnswerInput>
    create: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
  }

  export type TriviaQuizUpdateWithWhereUniqueWithoutAnswerInput = {
    where: TriviaQuizWhereUniqueInput
    data: XOR<TriviaQuizUpdateWithoutAnswerInput, TriviaQuizUncheckedUpdateWithoutAnswerInput>
  }

  export type TriviaQuizUpdateManyWithWhereWithoutAnswerInput = {
    where: TriviaQuizScalarWhereInput
    data: XOR<TriviaQuizUpdateManyMutationInput, TriviaQuizUncheckedUpdateManyWithoutQuizAnswersInput>
  }

  export type TriviaRoundQuizUpsertWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    update: XOR<TriviaRoundQuizUpdateWithoutUserChoiceInput, TriviaRoundQuizUncheckedUpdateWithoutUserChoiceInput>
    create: XOR<TriviaRoundQuizCreateWithoutUserChoiceInput, TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuizUpdateWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    data: XOR<TriviaRoundQuizUpdateWithoutUserChoiceInput, TriviaRoundQuizUncheckedUpdateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuizUpdateManyWithWhereWithoutUserChoiceInput = {
    where: TriviaRoundQuizScalarWhereInput
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput>
  }

  export type TriviaCategoryCreateWithoutRoundsInput = {
    name: string
    triviaQuizes?: TriviaQuizCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaCategoryUncheckedCreateWithoutRoundsInput = {
    id?: number
    name: string
    triviaQuizes?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaCategoryCreateOrConnectWithoutRoundsInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaRoundQuizCreateWithoutRoundInput = {
    quiz?: TriviaQuizCreateNestedOneWithoutRoundQuizesInput
    userChoice?: TriviaChoiceCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutRoundInput = {
    id?: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutRoundInput, TriviaRoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuizCreateManyRoundInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutRoundsInput = {
    update: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaCategoryUpdateWithoutRoundsInput = {
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaCategoryUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUpsertWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    update: XOR<TriviaRoundQuizUpdateWithoutRoundInput, TriviaRoundQuizUncheckedUpdateWithoutRoundInput>
    create: XOR<TriviaRoundQuizCreateWithoutRoundInput, TriviaRoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuizUpdateWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    data: XOR<TriviaRoundQuizUpdateWithoutRoundInput, TriviaRoundQuizUncheckedUpdateWithoutRoundInput>
  }

  export type TriviaRoundQuizUpdateManyWithWhereWithoutRoundInput = {
    where: TriviaRoundQuizScalarWhereInput
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput>
  }

  export type TriviaRoundCreateWithoutRoundQuizesInput = {
    user: string
    category?: TriviaCategoryCreateNestedOneWithoutRoundsInput
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundUncheckedCreateWithoutRoundQuizesInput = {
    id?: number
    user: string
    categoryName: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundCreateOrConnectWithoutRoundQuizesInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaQuizCreateWithoutRoundQuizesInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswersInput
  }

  export type TriviaQuizUncheckedCreateWithoutRoundQuizesInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    answerChoiceId: number
  }

  export type TriviaQuizCreateOrConnectWithoutRoundQuizesInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaChoiceCreateWithoutRoundQuizesInput = {
    choice: string
    quiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
    quizAnswers?: TriviaQuizCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceUncheckedCreateWithoutRoundQuizesInput = {
    id?: number
    choice: string
    quizId?: number | null
    quizAnswers?: TriviaQuizUncheckedCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceCreateOrConnectWithoutRoundQuizesInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaRoundUpsertWithoutRoundQuizesInput = {
    update: XOR<TriviaRoundUpdateWithoutRoundQuizesInput, TriviaRoundUncheckedUpdateWithoutRoundQuizesInput>
    create: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaRoundUpdateWithoutRoundQuizesInput = {
    user?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutRoundsNestedInput
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizUpsertWithoutRoundQuizesInput = {
    update: XOR<TriviaQuizUpdateWithoutRoundQuizesInput, TriviaQuizUncheckedUpdateWithoutRoundQuizesInput>
    create: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaQuizUpdateWithoutRoundQuizesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswersNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    answerChoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceUpsertWithoutRoundQuizesInput = {
    update: XOR<TriviaChoiceUpdateWithoutRoundQuizesInput, TriviaChoiceUncheckedUpdateWithoutRoundQuizesInput>
    create: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaChoiceUpdateWithoutRoundQuizesInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
    quizAnswers?: TriviaQuizUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceUncheckedUpdateWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswers?: TriviaQuizUncheckedUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizCreateManyCategoryInput = {
    id?: number
    quiz: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerChoiceId: number
  }

  export type TriviaRoundCreateManyCategoryInput = {
    id?: number
    user: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizUpdateWithoutCategoryInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswersNestedInput
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    answerChoiceId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateManyWithoutTriviaQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerChoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundUpdateWithoutCategoryInput = {
    user?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceCreateManyQuizInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateManyQuizInput = {
    id?: number
    roundId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceUpdateWithoutQuizInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quizAnswers?: TriviaQuizUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizAnswers?: TriviaQuizUncheckedUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUpdateWithoutQuizInput = {
    round?: TriviaRoundUpdateOneWithoutRoundQuizesNestedInput
    userChoice?: TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizCreateManyAnswerInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateManyUserChoiceInput = {
    id?: number
    roundId: number
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizUpdateWithoutAnswerInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateManyWithoutQuizAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUpdateWithoutUserChoiceInput = {
    round?: TriviaRoundUpdateOneWithoutRoundQuizesNestedInput
    quiz?: TriviaQuizUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutUserChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateManyRoundInput = {
    id?: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateWithoutRoundInput = {
    quiz?: TriviaQuizUpdateOneWithoutRoundQuizesNestedInput
    userChoice?: TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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