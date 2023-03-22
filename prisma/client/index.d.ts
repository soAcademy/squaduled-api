
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Building
 * 
 */
export type Building = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Facility
 * 
 */
export type Facility = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Room
 * 
 */
export type Room = {
  id: number
  name: string
  buildingId: number
  floor: string
  capacityMax: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model roomToFacility
 * 
 */
export type roomToFacility = {
  id: number
  roomId: number
  facilityId: number
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  officerId: string
  firstName: string
  lastName: string
  phone: string
  email: string
  userName: string
  password: string
  role: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model OfficeHour1
 * 
 */
export type OfficeHour1 = {
  id: number
  day: string
  isOpen: boolean
  openTime: string
  closeTime: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model OfficeHour2
 * 
 */
export type OfficeHour2 = {
  id: number
  isOpenMonday: boolean
  openingTimeMonday: string
  closingTimeMonday: string
  isOpenTuesday: boolean
  openingTimeTuesday: string
  closingTimeTuesday: string
  isOpenWednesday: boolean
  openingTimeWednesday: string
  closingTimeWednesday: string
  isOpenThursday: boolean
  openingTimeThursday: string
  closingTimeThursday: string
  isOpenFriday: boolean
  openingTimeFriday: string
  closingTimeFriday: string
  isOpenSaturday: boolean
  openingTimeSaturday: string
  closingTimeSaturday: string
  isOpenSunday: boolean
  openingTimeSunday: string
  closingTimeSunday: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Booking
 * 
 */
export type Booking = {
  id: number
  startDatetime: Date
  endDatetime: Date
  roomId: number
  userId: number
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
 * // Fetch zero or more Buildings
 * const buildings = await prisma.building.findMany()
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
   * // Fetch zero or more Buildings
   * const buildings = await prisma.building.findMany()
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
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<GlobalReject>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<GlobalReject>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<GlobalReject>;

  /**
   * `prisma.roomToFacility`: Exposes CRUD operations for the **roomToFacility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomToFacilities
    * const roomToFacilities = await prisma.roomToFacility.findMany()
    * ```
    */
  get roomToFacility(): Prisma.roomToFacilityDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.officeHour1`: Exposes CRUD operations for the **OfficeHour1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficeHour1s
    * const officeHour1s = await prisma.officeHour1.findMany()
    * ```
    */
  get officeHour1(): Prisma.OfficeHour1Delegate<GlobalReject>;

  /**
   * `prisma.officeHour2`: Exposes CRUD operations for the **OfficeHour2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficeHour2s
    * const officeHour2s = await prisma.officeHour2.findMany()
    * ```
    */
  get officeHour2(): Prisma.OfficeHour2Delegate<GlobalReject>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<GlobalReject>;
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
    Building: 'Building',
    Facility: 'Facility',
    Room: 'Room',
    roomToFacility: 'roomToFacility',
    User: 'User',
    OfficeHour1: 'OfficeHour1',
    OfficeHour2: 'OfficeHour2',
    Booking: 'Booking'
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
   * Count Type BuildingCountOutputType
   */


  export type BuildingCountOutputType = {
    room: number
  }

  export type BuildingCountOutputTypeSelect = {
    room?: boolean
  }

  export type BuildingCountOutputTypeGetPayload<S extends boolean | null | undefined | BuildingCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BuildingCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BuildingCountOutputTypeArgs)
    ? BuildingCountOutputType 
    : S extends { select: any } & (BuildingCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BuildingCountOutputType ? BuildingCountOutputType[P] : never
  } 
      : BuildingCountOutputType




  // Custom InputTypes

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     */
    select?: BuildingCountOutputTypeSelect | null
  }



  /**
   * Count Type FacilityCountOutputType
   */


  export type FacilityCountOutputType = {
    roomToFacility: number
  }

  export type FacilityCountOutputTypeSelect = {
    roomToFacility?: boolean
  }

  export type FacilityCountOutputTypeGetPayload<S extends boolean | null | undefined | FacilityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FacilityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FacilityCountOutputTypeArgs)
    ? FacilityCountOutputType 
    : S extends { select: any } & (FacilityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FacilityCountOutputType ? FacilityCountOutputType[P] : never
  } 
      : FacilityCountOutputType




  // Custom InputTypes

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomCountOutputType
   */


  export type RoomCountOutputType = {
    booking: number
    roomToFacility: number
  }

  export type RoomCountOutputTypeSelect = {
    booking?: boolean
    roomToFacility?: boolean
  }

  export type RoomCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomCountOutputTypeArgs)
    ? RoomCountOutputType 
    : S extends { select: any } & (RoomCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomCountOutputType ? RoomCountOutputType[P] : never
  } 
      : RoomCountOutputType




  // Custom InputTypes

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    booking: number
  }

  export type UserCountOutputTypeSelect = {
    booking?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Building
   */


  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    id: number | null
  }

  export type BuildingSumAggregateOutputType = {
    id: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    id?: true
  }

  export type BuildingSumAggregateInputType = {
    id?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildingAggregateArgs = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: Enumerable<BuildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs = {
    where?: BuildingWhereInput
    orderBy?: Enumerable<BuildingOrderByWithAggregationInput>
    by: BuildingScalarFieldEnum[]
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }


  export type BuildingGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | Building$roomArgs
    _count?: boolean | BuildingCountOutputTypeArgs
  }


  export type BuildingInclude = {
    room?: boolean | Building$roomArgs
    _count?: boolean | BuildingCountOutputTypeArgs
  }

  export type BuildingGetPayload<S extends boolean | null | undefined | BuildingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Building :
    S extends undefined ? never :
    S extends { include: any } & (BuildingArgs | BuildingFindManyArgs)
    ? Building  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? Array < RoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? BuildingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BuildingArgs | BuildingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? Array < RoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? BuildingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Building ? Building[P] : never
  } 
      : Building


  type BuildingCountArgs = 
    Omit<BuildingFindManyArgs, 'select' | 'include'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BuildingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BuildingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Building'> extends True ? Prisma__BuildingClient<BuildingGetPayload<T>> : Prisma__BuildingClient<BuildingGetPayload<T> | null, null>

    /**
     * Find one Building that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BuildingFindUniqueOrThrowArgs>
    ): Prisma__BuildingClient<BuildingGetPayload<T>>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BuildingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BuildingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Building'> extends True ? Prisma__BuildingClient<BuildingGetPayload<T>> : Prisma__BuildingClient<BuildingGetPayload<T> | null, null>

    /**
     * Find the first Building that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BuildingFindFirstOrThrowArgs>
    ): Prisma__BuildingClient<BuildingGetPayload<T>>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BuildingFindManyArgs>(
      args?: SelectSubset<T, BuildingFindManyArgs>
    ): Prisma.PrismaPromise<Array<BuildingGetPayload<T>>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
    **/
    create<T extends BuildingCreateArgs>(
      args: SelectSubset<T, BuildingCreateArgs>
    ): Prisma__BuildingClient<BuildingGetPayload<T>>

    /**
     * Create many Buildings.
     *     @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     *     @example
     *     // Create many Buildings
     *     const building = await prisma.building.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BuildingCreateManyArgs>(
      args?: SelectSubset<T, BuildingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
    **/
    delete<T extends BuildingDeleteArgs>(
      args: SelectSubset<T, BuildingDeleteArgs>
    ): Prisma__BuildingClient<BuildingGetPayload<T>>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BuildingUpdateArgs>(
      args: SelectSubset<T, BuildingUpdateArgs>
    ): Prisma__BuildingClient<BuildingGetPayload<T>>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BuildingDeleteManyArgs>(
      args?: SelectSubset<T, BuildingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BuildingUpdateManyArgs>(
      args: SelectSubset<T, BuildingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
    **/
    upsert<T extends BuildingUpsertArgs>(
      args: SelectSubset<T, BuildingUpsertArgs>
    ): Prisma__BuildingClient<BuildingGetPayload<T>>

    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
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
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BuildingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    room<T extends Building$roomArgs= {}>(args?: Subset<T, Building$roomArgs>): Prisma.PrismaPromise<Array<RoomGetPayload<T>>| Null>;

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
   * Building base type for findUnique actions
   */
  export type BuildingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUnique
   */
  export interface BuildingFindUniqueArgs extends BuildingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building base type for findFirst actions
   */
  export type BuildingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: Enumerable<BuildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: Enumerable<BuildingScalarFieldEnum>
  }

  /**
   * Building findFirst
   */
  export interface BuildingFindFirstArgs extends BuildingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: Enumerable<BuildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: Enumerable<BuildingScalarFieldEnum>
  }


  /**
   * Building findMany
   */
  export type BuildingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: Enumerable<BuildingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: Enumerable<BuildingScalarFieldEnum>
  }


  /**
   * Building create
   */
  export type BuildingCreateArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }


  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs = {
    /**
     * The data used to create many Buildings.
     */
    data: Enumerable<BuildingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Building update
   */
  export type BuildingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
  }


  /**
   * Building upsert
   */
  export type BuildingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }


  /**
   * Building delete
   */
  export type BuildingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
  }


  /**
   * Building.room
   */
  export type Building$roomArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Building without action
   */
  export type BuildingArgs = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude | null
  }



  /**
   * Model Facility
   */


  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs = {
    where?: FacilityWhereInput
    orderBy?: Enumerable<FacilityOrderByWithAggregationInput>
    by: FacilityScalarFieldEnum[]
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }


  export type FacilityGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomToFacility?: boolean | Facility$roomToFacilityArgs
    _count?: boolean | FacilityCountOutputTypeArgs
  }


  export type FacilityInclude = {
    roomToFacility?: boolean | Facility$roomToFacilityArgs
    _count?: boolean | FacilityCountOutputTypeArgs
  }

  export type FacilityGetPayload<S extends boolean | null | undefined | FacilityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Facility :
    S extends undefined ? never :
    S extends { include: any } & (FacilityArgs | FacilityFindManyArgs)
    ? Facility  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roomToFacility' ? Array < roomToFacilityGetPayload<S['include'][P]>>  :
        P extends '_count' ? FacilityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FacilityArgs | FacilityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roomToFacility' ? Array < roomToFacilityGetPayload<S['select'][P]>>  :
        P extends '_count' ? FacilityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Facility ? Facility[P] : never
  } 
      : Facility


  type FacilityCountArgs = 
    Omit<FacilityFindManyArgs, 'select' | 'include'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacilityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FacilityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Facility'> extends True ? Prisma__FacilityClient<FacilityGetPayload<T>> : Prisma__FacilityClient<FacilityGetPayload<T> | null, null>

    /**
     * Find one Facility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FacilityFindUniqueOrThrowArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacilityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FacilityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Facility'> extends True ? Prisma__FacilityClient<FacilityGetPayload<T>> : Prisma__FacilityClient<FacilityGetPayload<T> | null, null>

    /**
     * Find the first Facility that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacilityFindFirstOrThrowArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacilityFindManyArgs>(
      args?: SelectSubset<T, FacilityFindManyArgs>
    ): Prisma.PrismaPromise<Array<FacilityGetPayload<T>>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
    **/
    create<T extends FacilityCreateArgs>(
      args: SelectSubset<T, FacilityCreateArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Create many Facilities.
     *     @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     *     @example
     *     // Create many Facilities
     *     const facility = await prisma.facility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacilityCreateManyArgs>(
      args?: SelectSubset<T, FacilityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
    **/
    delete<T extends FacilityDeleteArgs>(
      args: SelectSubset<T, FacilityDeleteArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacilityUpdateArgs>(
      args: SelectSubset<T, FacilityUpdateArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacilityDeleteManyArgs>(
      args?: SelectSubset<T, FacilityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacilityUpdateManyArgs>(
      args: SelectSubset<T, FacilityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
    **/
    upsert<T extends FacilityUpsertArgs>(
      args: SelectSubset<T, FacilityUpsertArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FacilityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    roomToFacility<T extends Facility$roomToFacilityArgs= {}>(args?: Subset<T, Facility$roomToFacilityArgs>): Prisma.PrismaPromise<Array<roomToFacilityGetPayload<T>>| Null>;

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
   * Facility base type for findUnique actions
   */
  export type FacilityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUnique
   */
  export interface FacilityFindUniqueArgs extends FacilityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility base type for findFirst actions
   */
  export type FacilityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }

  /**
   * Facility findFirst
   */
  export interface FacilityFindFirstArgs extends FacilityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }


  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }


  /**
   * Facility create
   */
  export type FacilityCreateArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }


  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs = {
    /**
     * The data used to create many Facilities.
     */
    data: Enumerable<FacilityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Facility update
   */
  export type FacilityUpdateArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }


  /**
   * Facility delete
   */
  export type FacilityDeleteArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility.roomToFacility
   */
  export type Facility$roomToFacilityArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    where?: roomToFacilityWhereInput
    orderBy?: Enumerable<roomToFacilityOrderByWithRelationInput>
    cursor?: roomToFacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomToFacilityScalarFieldEnum>
  }


  /**
   * Facility without action
   */
  export type FacilityArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
  }



  /**
   * Model Room
   */


  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    buildingId: number | null
    capacityMax: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    buildingId: number | null
    capacityMax: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    buildingId: number | null
    floor: string | null
    capacityMax: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    buildingId: number | null
    floor: string | null
    capacityMax: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    buildingId: number
    floor: number
    capacityMax: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    buildingId?: true
    capacityMax?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    buildingId?: true
    capacityMax?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    buildingId?: true
    floor?: true
    capacityMax?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    buildingId?: true
    floor?: true
    capacityMax?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    buildingId?: true
    floor?: true
    capacityMax?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs = {
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithAggregationInput>
    by: RoomScalarFieldEnum[]
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }


  export type RoomGroupByOutputType = {
    id: number
    name: string
    buildingId: number
    floor: string
    capacityMax: number
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect = {
    id?: boolean
    name?: boolean
    building?: boolean | BuildingArgs
    buildingId?: boolean
    floor?: boolean
    capacityMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | Room$bookingArgs
    roomToFacility?: boolean | Room$roomToFacilityArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }


  export type RoomInclude = {
    building?: boolean | BuildingArgs
    booking?: boolean | Room$bookingArgs
    roomToFacility?: boolean | Room$roomToFacilityArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }

  export type RoomGetPayload<S extends boolean | null | undefined | RoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Room :
    S extends undefined ? never :
    S extends { include: any } & (RoomArgs | RoomFindManyArgs)
    ? Room  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'building' ? BuildingGetPayload<S['include'][P]> | null :
        P extends 'booking' ? Array < BookingGetPayload<S['include'][P]>>  :
        P extends 'roomToFacility' ? Array < roomToFacilityGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomArgs | RoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'building' ? BuildingGetPayload<S['select'][P]> | null :
        P extends 'booking' ? Array < BookingGetPayload<S['select'][P]>>  :
        P extends 'roomToFacility' ? Array < roomToFacilityGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Room ? Room[P] : never
  } 
      : Room


  type RoomCountArgs = 
    Omit<RoomFindManyArgs, 'select' | 'include'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find one Room that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomFindUniqueOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find the first Room that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomFindFirstOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoomFindManyArgs>(
      args?: SelectSubset<T, RoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoomGetPayload<T>>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
    **/
    create<T extends RoomCreateArgs>(
      args: SelectSubset<T, RoomCreateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Create many Rooms.
     *     @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const room = await prisma.room.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomCreateManyArgs>(
      args?: SelectSubset<T, RoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
    **/
    delete<T extends RoomDeleteArgs>(
      args: SelectSubset<T, RoomDeleteArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomUpdateArgs>(
      args: SelectSubset<T, RoomUpdateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomDeleteManyArgs>(
      args?: SelectSubset<T, RoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomUpdateManyArgs>(
      args: SelectSubset<T, RoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
    **/
    upsert<T extends RoomUpsertArgs>(
      args: SelectSubset<T, RoomUpsertArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    building<T extends BuildingArgs= {}>(args?: Subset<T, BuildingArgs>): Prisma__BuildingClient<BuildingGetPayload<T> | Null>;

    booking<T extends Room$bookingArgs= {}>(args?: Subset<T, Room$bookingArgs>): Prisma.PrismaPromise<Array<BookingGetPayload<T>>| Null>;

    roomToFacility<T extends Room$roomToFacilityArgs= {}>(args?: Subset<T, Room$roomToFacilityArgs>): Prisma.PrismaPromise<Array<roomToFacilityGetPayload<T>>| Null>;

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
   * Room base type for findUnique actions
   */
  export type RoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUnique
   */
  export interface RoomFindUniqueArgs extends RoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room base type for findFirst actions
   */
  export type RoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }

  /**
   * Room findFirst
   */
  export interface RoomFindFirstArgs extends RoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room findMany
   */
  export type RoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room create
   */
  export type RoomCreateArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }


  /**
   * Room createMany
   */
  export type RoomCreateManyArgs = {
    /**
     * The data used to create many Rooms.
     */
    data: Enumerable<RoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Room update
   */
  export type RoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }


  /**
   * Room upsert
   */
  export type RoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }


  /**
   * Room delete
   */
  export type RoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }


  /**
   * Room.booking
   */
  export type Room$bookingArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    where?: BookingWhereInput
    orderBy?: Enumerable<BookingOrderByWithRelationInput>
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookingScalarFieldEnum>
  }


  /**
   * Room.roomToFacility
   */
  export type Room$roomToFacilityArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    where?: roomToFacilityWhereInput
    orderBy?: Enumerable<roomToFacilityOrderByWithRelationInput>
    cursor?: roomToFacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomToFacilityScalarFieldEnum>
  }


  /**
   * Room without action
   */
  export type RoomArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
  }



  /**
   * Model roomToFacility
   */


  export type AggregateRoomToFacility = {
    _count: RoomToFacilityCountAggregateOutputType | null
    _avg: RoomToFacilityAvgAggregateOutputType | null
    _sum: RoomToFacilitySumAggregateOutputType | null
    _min: RoomToFacilityMinAggregateOutputType | null
    _max: RoomToFacilityMaxAggregateOutputType | null
  }

  export type RoomToFacilityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
  }

  export type RoomToFacilitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
  }

  export type RoomToFacilityMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
  }

  export type RoomToFacilityMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
  }

  export type RoomToFacilityCountAggregateOutputType = {
    id: number
    roomId: number
    facilityId: number
    _all: number
  }


  export type RoomToFacilityAvgAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
  }

  export type RoomToFacilitySumAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
  }

  export type RoomToFacilityMinAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
  }

  export type RoomToFacilityMaxAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
  }

  export type RoomToFacilityCountAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
    _all?: true
  }

  export type RoomToFacilityAggregateArgs = {
    /**
     * Filter which roomToFacility to aggregate.
     */
    where?: roomToFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roomToFacilities to fetch.
     */
    orderBy?: Enumerable<roomToFacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomToFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roomToFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roomToFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roomToFacilities
    **/
    _count?: true | RoomToFacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomToFacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomToFacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomToFacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomToFacilityMaxAggregateInputType
  }

  export type GetRoomToFacilityAggregateType<T extends RoomToFacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomToFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomToFacility[P]>
      : GetScalarType<T[P], AggregateRoomToFacility[P]>
  }




  export type RoomToFacilityGroupByArgs = {
    where?: roomToFacilityWhereInput
    orderBy?: Enumerable<roomToFacilityOrderByWithAggregationInput>
    by: RoomToFacilityScalarFieldEnum[]
    having?: roomToFacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomToFacilityCountAggregateInputType | true
    _avg?: RoomToFacilityAvgAggregateInputType
    _sum?: RoomToFacilitySumAggregateInputType
    _min?: RoomToFacilityMinAggregateInputType
    _max?: RoomToFacilityMaxAggregateInputType
  }


  export type RoomToFacilityGroupByOutputType = {
    id: number
    roomId: number
    facilityId: number
    _count: RoomToFacilityCountAggregateOutputType | null
    _avg: RoomToFacilityAvgAggregateOutputType | null
    _sum: RoomToFacilitySumAggregateOutputType | null
    _min: RoomToFacilityMinAggregateOutputType | null
    _max: RoomToFacilityMaxAggregateOutputType | null
  }

  type GetRoomToFacilityGroupByPayload<T extends RoomToFacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomToFacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomToFacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomToFacilityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomToFacilityGroupByOutputType[P]>
        }
      >
    >


  export type roomToFacilitySelect = {
    id?: boolean
    room?: boolean | RoomArgs
    roomId?: boolean
    facility?: boolean | FacilityArgs
    facilityId?: boolean
  }


  export type roomToFacilityInclude = {
    room?: boolean | RoomArgs
    facility?: boolean | FacilityArgs
  }

  export type roomToFacilityGetPayload<S extends boolean | null | undefined | roomToFacilityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? roomToFacility :
    S extends undefined ? never :
    S extends { include: any } & (roomToFacilityArgs | roomToFacilityFindManyArgs)
    ? roomToFacility  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> :
        P extends 'facility' ? FacilityGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (roomToFacilityArgs | roomToFacilityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> :
        P extends 'facility' ? FacilityGetPayload<S['select'][P]> :  P extends keyof roomToFacility ? roomToFacility[P] : never
  } 
      : roomToFacility


  type roomToFacilityCountArgs = 
    Omit<roomToFacilityFindManyArgs, 'select' | 'include'> & {
      select?: RoomToFacilityCountAggregateInputType | true
    }

  export interface roomToFacilityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoomToFacility that matches the filter.
     * @param {roomToFacilityFindUniqueArgs} args - Arguments to find a RoomToFacility
     * @example
     * // Get one RoomToFacility
     * const roomToFacility = await prisma.roomToFacility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends roomToFacilityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, roomToFacilityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'roomToFacility'> extends True ? Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>> : Prisma__roomToFacilityClient<roomToFacilityGetPayload<T> | null, null>

    /**
     * Find one RoomToFacility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {roomToFacilityFindUniqueOrThrowArgs} args - Arguments to find a RoomToFacility
     * @example
     * // Get one RoomToFacility
     * const roomToFacility = await prisma.roomToFacility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends roomToFacilityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, roomToFacilityFindUniqueOrThrowArgs>
    ): Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>>

    /**
     * Find the first RoomToFacility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomToFacilityFindFirstArgs} args - Arguments to find a RoomToFacility
     * @example
     * // Get one RoomToFacility
     * const roomToFacility = await prisma.roomToFacility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends roomToFacilityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, roomToFacilityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'roomToFacility'> extends True ? Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>> : Prisma__roomToFacilityClient<roomToFacilityGetPayload<T> | null, null>

    /**
     * Find the first RoomToFacility that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomToFacilityFindFirstOrThrowArgs} args - Arguments to find a RoomToFacility
     * @example
     * // Get one RoomToFacility
     * const roomToFacility = await prisma.roomToFacility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends roomToFacilityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, roomToFacilityFindFirstOrThrowArgs>
    ): Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>>

    /**
     * Find zero or more RoomToFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomToFacilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomToFacilities
     * const roomToFacilities = await prisma.roomToFacility.findMany()
     * 
     * // Get first 10 RoomToFacilities
     * const roomToFacilities = await prisma.roomToFacility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomToFacilityWithIdOnly = await prisma.roomToFacility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends roomToFacilityFindManyArgs>(
      args?: SelectSubset<T, roomToFacilityFindManyArgs>
    ): Prisma.PrismaPromise<Array<roomToFacilityGetPayload<T>>>

    /**
     * Create a RoomToFacility.
     * @param {roomToFacilityCreateArgs} args - Arguments to create a RoomToFacility.
     * @example
     * // Create one RoomToFacility
     * const RoomToFacility = await prisma.roomToFacility.create({
     *   data: {
     *     // ... data to create a RoomToFacility
     *   }
     * })
     * 
    **/
    create<T extends roomToFacilityCreateArgs>(
      args: SelectSubset<T, roomToFacilityCreateArgs>
    ): Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>>

    /**
     * Create many RoomToFacilities.
     *     @param {roomToFacilityCreateManyArgs} args - Arguments to create many RoomToFacilities.
     *     @example
     *     // Create many RoomToFacilities
     *     const roomToFacility = await prisma.roomToFacility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends roomToFacilityCreateManyArgs>(
      args?: SelectSubset<T, roomToFacilityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomToFacility.
     * @param {roomToFacilityDeleteArgs} args - Arguments to delete one RoomToFacility.
     * @example
     * // Delete one RoomToFacility
     * const RoomToFacility = await prisma.roomToFacility.delete({
     *   where: {
     *     // ... filter to delete one RoomToFacility
     *   }
     * })
     * 
    **/
    delete<T extends roomToFacilityDeleteArgs>(
      args: SelectSubset<T, roomToFacilityDeleteArgs>
    ): Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>>

    /**
     * Update one RoomToFacility.
     * @param {roomToFacilityUpdateArgs} args - Arguments to update one RoomToFacility.
     * @example
     * // Update one RoomToFacility
     * const roomToFacility = await prisma.roomToFacility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends roomToFacilityUpdateArgs>(
      args: SelectSubset<T, roomToFacilityUpdateArgs>
    ): Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>>

    /**
     * Delete zero or more RoomToFacilities.
     * @param {roomToFacilityDeleteManyArgs} args - Arguments to filter RoomToFacilities to delete.
     * @example
     * // Delete a few RoomToFacilities
     * const { count } = await prisma.roomToFacility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends roomToFacilityDeleteManyArgs>(
      args?: SelectSubset<T, roomToFacilityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomToFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomToFacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomToFacilities
     * const roomToFacility = await prisma.roomToFacility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends roomToFacilityUpdateManyArgs>(
      args: SelectSubset<T, roomToFacilityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomToFacility.
     * @param {roomToFacilityUpsertArgs} args - Arguments to update or create a RoomToFacility.
     * @example
     * // Update or create a RoomToFacility
     * const roomToFacility = await prisma.roomToFacility.upsert({
     *   create: {
     *     // ... data to create a RoomToFacility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomToFacility we want to update
     *   }
     * })
    **/
    upsert<T extends roomToFacilityUpsertArgs>(
      args: SelectSubset<T, roomToFacilityUpsertArgs>
    ): Prisma__roomToFacilityClient<roomToFacilityGetPayload<T>>

    /**
     * Count the number of RoomToFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomToFacilityCountArgs} args - Arguments to filter RoomToFacilities to count.
     * @example
     * // Count the number of RoomToFacilities
     * const count = await prisma.roomToFacility.count({
     *   where: {
     *     // ... the filter for the RoomToFacilities we want to count
     *   }
     * })
    **/
    count<T extends roomToFacilityCountArgs>(
      args?: Subset<T, roomToFacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomToFacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomToFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomToFacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomToFacilityAggregateArgs>(args: Subset<T, RoomToFacilityAggregateArgs>): Prisma.PrismaPromise<GetRoomToFacilityAggregateType<T>>

    /**
     * Group by RoomToFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomToFacilityGroupByArgs} args - Group by arguments.
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
      T extends RoomToFacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomToFacilityGroupByArgs['orderBy'] }
        : { orderBy?: RoomToFacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomToFacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomToFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for roomToFacility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__roomToFacilityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    facility<T extends FacilityArgs= {}>(args?: Subset<T, FacilityArgs>): Prisma__FacilityClient<FacilityGetPayload<T> | Null>;

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
   * roomToFacility base type for findUnique actions
   */
  export type roomToFacilityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * Filter, which roomToFacility to fetch.
     */
    where: roomToFacilityWhereUniqueInput
  }

  /**
   * roomToFacility findUnique
   */
  export interface roomToFacilityFindUniqueArgs extends roomToFacilityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * roomToFacility findUniqueOrThrow
   */
  export type roomToFacilityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * Filter, which roomToFacility to fetch.
     */
    where: roomToFacilityWhereUniqueInput
  }


  /**
   * roomToFacility base type for findFirst actions
   */
  export type roomToFacilityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * Filter, which roomToFacility to fetch.
     */
    where?: roomToFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roomToFacilities to fetch.
     */
    orderBy?: Enumerable<roomToFacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roomToFacilities.
     */
    cursor?: roomToFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roomToFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roomToFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roomToFacilities.
     */
    distinct?: Enumerable<RoomToFacilityScalarFieldEnum>
  }

  /**
   * roomToFacility findFirst
   */
  export interface roomToFacilityFindFirstArgs extends roomToFacilityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * roomToFacility findFirstOrThrow
   */
  export type roomToFacilityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * Filter, which roomToFacility to fetch.
     */
    where?: roomToFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roomToFacilities to fetch.
     */
    orderBy?: Enumerable<roomToFacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roomToFacilities.
     */
    cursor?: roomToFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roomToFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roomToFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roomToFacilities.
     */
    distinct?: Enumerable<RoomToFacilityScalarFieldEnum>
  }


  /**
   * roomToFacility findMany
   */
  export type roomToFacilityFindManyArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * Filter, which roomToFacilities to fetch.
     */
    where?: roomToFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roomToFacilities to fetch.
     */
    orderBy?: Enumerable<roomToFacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roomToFacilities.
     */
    cursor?: roomToFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roomToFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roomToFacilities.
     */
    skip?: number
    distinct?: Enumerable<RoomToFacilityScalarFieldEnum>
  }


  /**
   * roomToFacility create
   */
  export type roomToFacilityCreateArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * The data needed to create a roomToFacility.
     */
    data: XOR<roomToFacilityCreateInput, roomToFacilityUncheckedCreateInput>
  }


  /**
   * roomToFacility createMany
   */
  export type roomToFacilityCreateManyArgs = {
    /**
     * The data used to create many roomToFacilities.
     */
    data: Enumerable<roomToFacilityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * roomToFacility update
   */
  export type roomToFacilityUpdateArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * The data needed to update a roomToFacility.
     */
    data: XOR<roomToFacilityUpdateInput, roomToFacilityUncheckedUpdateInput>
    /**
     * Choose, which roomToFacility to update.
     */
    where: roomToFacilityWhereUniqueInput
  }


  /**
   * roomToFacility updateMany
   */
  export type roomToFacilityUpdateManyArgs = {
    /**
     * The data used to update roomToFacilities.
     */
    data: XOR<roomToFacilityUpdateManyMutationInput, roomToFacilityUncheckedUpdateManyInput>
    /**
     * Filter which roomToFacilities to update
     */
    where?: roomToFacilityWhereInput
  }


  /**
   * roomToFacility upsert
   */
  export type roomToFacilityUpsertArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * The filter to search for the roomToFacility to update in case it exists.
     */
    where: roomToFacilityWhereUniqueInput
    /**
     * In case the roomToFacility found by the `where` argument doesn't exist, create a new roomToFacility with this data.
     */
    create: XOR<roomToFacilityCreateInput, roomToFacilityUncheckedCreateInput>
    /**
     * In case the roomToFacility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomToFacilityUpdateInput, roomToFacilityUncheckedUpdateInput>
  }


  /**
   * roomToFacility delete
   */
  export type roomToFacilityDeleteArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
    /**
     * Filter which roomToFacility to delete.
     */
    where: roomToFacilityWhereUniqueInput
  }


  /**
   * roomToFacility deleteMany
   */
  export type roomToFacilityDeleteManyArgs = {
    /**
     * Filter which roomToFacilities to delete
     */
    where?: roomToFacilityWhereInput
  }


  /**
   * roomToFacility without action
   */
  export type roomToFacilityArgs = {
    /**
     * Select specific fields to fetch from the roomToFacility
     */
    select?: roomToFacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomToFacilityInclude | null
  }



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
    officerId: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    userName: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    officerId: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    userName: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    officerId: number
    firstName: number
    lastName: number
    phone: number
    email: number
    userName: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
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
    officerId?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    userName?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    officerId?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    userName?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    officerId?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    userName?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
    officerId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    userName: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    officerId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    userName?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | User$bookingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    booking?: boolean | User$bookingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'booking' ? Array < BookingGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'booking' ? Array < BookingGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
      T extends _Record<'select', any>
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    booking<T extends User$bookingArgs= {}>(args?: Subset<T, User$bookingArgs>): Prisma.PrismaPromise<Array<BookingGetPayload<T>>| Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.booking
   */
  export type User$bookingArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    where?: BookingWhereInput
    orderBy?: Enumerable<BookingOrderByWithRelationInput>
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookingScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model OfficeHour1
   */


  export type AggregateOfficeHour1 = {
    _count: OfficeHour1CountAggregateOutputType | null
    _avg: OfficeHour1AvgAggregateOutputType | null
    _sum: OfficeHour1SumAggregateOutputType | null
    _min: OfficeHour1MinAggregateOutputType | null
    _max: OfficeHour1MaxAggregateOutputType | null
  }

  export type OfficeHour1AvgAggregateOutputType = {
    id: number | null
  }

  export type OfficeHour1SumAggregateOutputType = {
    id: number | null
  }

  export type OfficeHour1MinAggregateOutputType = {
    id: number | null
    day: string | null
    isOpen: boolean | null
    openTime: string | null
    closeTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeHour1MaxAggregateOutputType = {
    id: number | null
    day: string | null
    isOpen: boolean | null
    openTime: string | null
    closeTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeHour1CountAggregateOutputType = {
    id: number
    day: number
    isOpen: number
    openTime: number
    closeTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfficeHour1AvgAggregateInputType = {
    id?: true
  }

  export type OfficeHour1SumAggregateInputType = {
    id?: true
  }

  export type OfficeHour1MinAggregateInputType = {
    id?: true
    day?: true
    isOpen?: true
    openTime?: true
    closeTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeHour1MaxAggregateInputType = {
    id?: true
    day?: true
    isOpen?: true
    openTime?: true
    closeTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeHour1CountAggregateInputType = {
    id?: true
    day?: true
    isOpen?: true
    openTime?: true
    closeTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfficeHour1AggregateArgs = {
    /**
     * Filter which OfficeHour1 to aggregate.
     */
    where?: OfficeHour1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour1s to fetch.
     */
    orderBy?: Enumerable<OfficeHour1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeHour1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficeHour1s
    **/
    _count?: true | OfficeHour1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficeHour1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficeHour1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeHour1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeHour1MaxAggregateInputType
  }

  export type GetOfficeHour1AggregateType<T extends OfficeHour1AggregateArgs> = {
        [P in keyof T & keyof AggregateOfficeHour1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficeHour1[P]>
      : GetScalarType<T[P], AggregateOfficeHour1[P]>
  }




  export type OfficeHour1GroupByArgs = {
    where?: OfficeHour1WhereInput
    orderBy?: Enumerable<OfficeHour1OrderByWithAggregationInput>
    by: OfficeHour1ScalarFieldEnum[]
    having?: OfficeHour1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeHour1CountAggregateInputType | true
    _avg?: OfficeHour1AvgAggregateInputType
    _sum?: OfficeHour1SumAggregateInputType
    _min?: OfficeHour1MinAggregateInputType
    _max?: OfficeHour1MaxAggregateInputType
  }


  export type OfficeHour1GroupByOutputType = {
    id: number
    day: string
    isOpen: boolean
    openTime: string
    closeTime: string
    createdAt: Date
    updatedAt: Date
    _count: OfficeHour1CountAggregateOutputType | null
    _avg: OfficeHour1AvgAggregateOutputType | null
    _sum: OfficeHour1SumAggregateOutputType | null
    _min: OfficeHour1MinAggregateOutputType | null
    _max: OfficeHour1MaxAggregateOutputType | null
  }

  type GetOfficeHour1GroupByPayload<T extends OfficeHour1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OfficeHour1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeHour1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeHour1GroupByOutputType[P]>
            : GetScalarType<T[P], OfficeHour1GroupByOutputType[P]>
        }
      >
    >


  export type OfficeHour1Select = {
    id?: boolean
    day?: boolean
    isOpen?: boolean
    openTime?: boolean
    closeTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type OfficeHour1GetPayload<S extends boolean | null | undefined | OfficeHour1Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OfficeHour1 :
    S extends undefined ? never :
    S extends { include: any } & (OfficeHour1Args | OfficeHour1FindManyArgs)
    ? OfficeHour1 
    : S extends { select: any } & (OfficeHour1Args | OfficeHour1FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OfficeHour1 ? OfficeHour1[P] : never
  } 
      : OfficeHour1


  type OfficeHour1CountArgs = 
    Omit<OfficeHour1FindManyArgs, 'select' | 'include'> & {
      select?: OfficeHour1CountAggregateInputType | true
    }

  export interface OfficeHour1Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OfficeHour1 that matches the filter.
     * @param {OfficeHour1FindUniqueArgs} args - Arguments to find a OfficeHour1
     * @example
     * // Get one OfficeHour1
     * const officeHour1 = await prisma.officeHour1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OfficeHour1FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OfficeHour1FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OfficeHour1'> extends True ? Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>> : Prisma__OfficeHour1Client<OfficeHour1GetPayload<T> | null, null>

    /**
     * Find one OfficeHour1 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OfficeHour1FindUniqueOrThrowArgs} args - Arguments to find a OfficeHour1
     * @example
     * // Get one OfficeHour1
     * const officeHour1 = await prisma.officeHour1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OfficeHour1FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OfficeHour1FindUniqueOrThrowArgs>
    ): Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>>

    /**
     * Find the first OfficeHour1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1FindFirstArgs} args - Arguments to find a OfficeHour1
     * @example
     * // Get one OfficeHour1
     * const officeHour1 = await prisma.officeHour1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OfficeHour1FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OfficeHour1FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OfficeHour1'> extends True ? Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>> : Prisma__OfficeHour1Client<OfficeHour1GetPayload<T> | null, null>

    /**
     * Find the first OfficeHour1 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1FindFirstOrThrowArgs} args - Arguments to find a OfficeHour1
     * @example
     * // Get one OfficeHour1
     * const officeHour1 = await prisma.officeHour1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OfficeHour1FindFirstOrThrowArgs>(
      args?: SelectSubset<T, OfficeHour1FindFirstOrThrowArgs>
    ): Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>>

    /**
     * Find zero or more OfficeHour1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficeHour1s
     * const officeHour1s = await prisma.officeHour1.findMany()
     * 
     * // Get first 10 OfficeHour1s
     * const officeHour1s = await prisma.officeHour1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeHour1WithIdOnly = await prisma.officeHour1.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OfficeHour1FindManyArgs>(
      args?: SelectSubset<T, OfficeHour1FindManyArgs>
    ): Prisma.PrismaPromise<Array<OfficeHour1GetPayload<T>>>

    /**
     * Create a OfficeHour1.
     * @param {OfficeHour1CreateArgs} args - Arguments to create a OfficeHour1.
     * @example
     * // Create one OfficeHour1
     * const OfficeHour1 = await prisma.officeHour1.create({
     *   data: {
     *     // ... data to create a OfficeHour1
     *   }
     * })
     * 
    **/
    create<T extends OfficeHour1CreateArgs>(
      args: SelectSubset<T, OfficeHour1CreateArgs>
    ): Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>>

    /**
     * Create many OfficeHour1s.
     *     @param {OfficeHour1CreateManyArgs} args - Arguments to create many OfficeHour1s.
     *     @example
     *     // Create many OfficeHour1s
     *     const officeHour1 = await prisma.officeHour1.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OfficeHour1CreateManyArgs>(
      args?: SelectSubset<T, OfficeHour1CreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OfficeHour1.
     * @param {OfficeHour1DeleteArgs} args - Arguments to delete one OfficeHour1.
     * @example
     * // Delete one OfficeHour1
     * const OfficeHour1 = await prisma.officeHour1.delete({
     *   where: {
     *     // ... filter to delete one OfficeHour1
     *   }
     * })
     * 
    **/
    delete<T extends OfficeHour1DeleteArgs>(
      args: SelectSubset<T, OfficeHour1DeleteArgs>
    ): Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>>

    /**
     * Update one OfficeHour1.
     * @param {OfficeHour1UpdateArgs} args - Arguments to update one OfficeHour1.
     * @example
     * // Update one OfficeHour1
     * const officeHour1 = await prisma.officeHour1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OfficeHour1UpdateArgs>(
      args: SelectSubset<T, OfficeHour1UpdateArgs>
    ): Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>>

    /**
     * Delete zero or more OfficeHour1s.
     * @param {OfficeHour1DeleteManyArgs} args - Arguments to filter OfficeHour1s to delete.
     * @example
     * // Delete a few OfficeHour1s
     * const { count } = await prisma.officeHour1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OfficeHour1DeleteManyArgs>(
      args?: SelectSubset<T, OfficeHour1DeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficeHour1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficeHour1s
     * const officeHour1 = await prisma.officeHour1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OfficeHour1UpdateManyArgs>(
      args: SelectSubset<T, OfficeHour1UpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfficeHour1.
     * @param {OfficeHour1UpsertArgs} args - Arguments to update or create a OfficeHour1.
     * @example
     * // Update or create a OfficeHour1
     * const officeHour1 = await prisma.officeHour1.upsert({
     *   create: {
     *     // ... data to create a OfficeHour1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficeHour1 we want to update
     *   }
     * })
    **/
    upsert<T extends OfficeHour1UpsertArgs>(
      args: SelectSubset<T, OfficeHour1UpsertArgs>
    ): Prisma__OfficeHour1Client<OfficeHour1GetPayload<T>>

    /**
     * Count the number of OfficeHour1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1CountArgs} args - Arguments to filter OfficeHour1s to count.
     * @example
     * // Count the number of OfficeHour1s
     * const count = await prisma.officeHour1.count({
     *   where: {
     *     // ... the filter for the OfficeHour1s we want to count
     *   }
     * })
    **/
    count<T extends OfficeHour1CountArgs>(
      args?: Subset<T, OfficeHour1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeHour1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficeHour1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficeHour1AggregateArgs>(args: Subset<T, OfficeHour1AggregateArgs>): Prisma.PrismaPromise<GetOfficeHour1AggregateType<T>>

    /**
     * Group by OfficeHour1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour1GroupByArgs} args - Group by arguments.
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
      T extends OfficeHour1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeHour1GroupByArgs['orderBy'] }
        : { orderBy?: OfficeHour1GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficeHour1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeHour1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficeHour1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OfficeHour1Client<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * OfficeHour1 base type for findUnique actions
   */
  export type OfficeHour1FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * Filter, which OfficeHour1 to fetch.
     */
    where: OfficeHour1WhereUniqueInput
  }

  /**
   * OfficeHour1 findUnique
   */
  export interface OfficeHour1FindUniqueArgs extends OfficeHour1FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OfficeHour1 findUniqueOrThrow
   */
  export type OfficeHour1FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * Filter, which OfficeHour1 to fetch.
     */
    where: OfficeHour1WhereUniqueInput
  }


  /**
   * OfficeHour1 base type for findFirst actions
   */
  export type OfficeHour1FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * Filter, which OfficeHour1 to fetch.
     */
    where?: OfficeHour1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour1s to fetch.
     */
    orderBy?: Enumerable<OfficeHour1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHour1s.
     */
    cursor?: OfficeHour1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHour1s.
     */
    distinct?: Enumerable<OfficeHour1ScalarFieldEnum>
  }

  /**
   * OfficeHour1 findFirst
   */
  export interface OfficeHour1FindFirstArgs extends OfficeHour1FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OfficeHour1 findFirstOrThrow
   */
  export type OfficeHour1FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * Filter, which OfficeHour1 to fetch.
     */
    where?: OfficeHour1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour1s to fetch.
     */
    orderBy?: Enumerable<OfficeHour1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHour1s.
     */
    cursor?: OfficeHour1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHour1s.
     */
    distinct?: Enumerable<OfficeHour1ScalarFieldEnum>
  }


  /**
   * OfficeHour1 findMany
   */
  export type OfficeHour1FindManyArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * Filter, which OfficeHour1s to fetch.
     */
    where?: OfficeHour1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour1s to fetch.
     */
    orderBy?: Enumerable<OfficeHour1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficeHour1s.
     */
    cursor?: OfficeHour1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour1s.
     */
    skip?: number
    distinct?: Enumerable<OfficeHour1ScalarFieldEnum>
  }


  /**
   * OfficeHour1 create
   */
  export type OfficeHour1CreateArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * The data needed to create a OfficeHour1.
     */
    data: XOR<OfficeHour1CreateInput, OfficeHour1UncheckedCreateInput>
  }


  /**
   * OfficeHour1 createMany
   */
  export type OfficeHour1CreateManyArgs = {
    /**
     * The data used to create many OfficeHour1s.
     */
    data: Enumerable<OfficeHour1CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OfficeHour1 update
   */
  export type OfficeHour1UpdateArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * The data needed to update a OfficeHour1.
     */
    data: XOR<OfficeHour1UpdateInput, OfficeHour1UncheckedUpdateInput>
    /**
     * Choose, which OfficeHour1 to update.
     */
    where: OfficeHour1WhereUniqueInput
  }


  /**
   * OfficeHour1 updateMany
   */
  export type OfficeHour1UpdateManyArgs = {
    /**
     * The data used to update OfficeHour1s.
     */
    data: XOR<OfficeHour1UpdateManyMutationInput, OfficeHour1UncheckedUpdateManyInput>
    /**
     * Filter which OfficeHour1s to update
     */
    where?: OfficeHour1WhereInput
  }


  /**
   * OfficeHour1 upsert
   */
  export type OfficeHour1UpsertArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * The filter to search for the OfficeHour1 to update in case it exists.
     */
    where: OfficeHour1WhereUniqueInput
    /**
     * In case the OfficeHour1 found by the `where` argument doesn't exist, create a new OfficeHour1 with this data.
     */
    create: XOR<OfficeHour1CreateInput, OfficeHour1UncheckedCreateInput>
    /**
     * In case the OfficeHour1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeHour1UpdateInput, OfficeHour1UncheckedUpdateInput>
  }


  /**
   * OfficeHour1 delete
   */
  export type OfficeHour1DeleteArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
    /**
     * Filter which OfficeHour1 to delete.
     */
    where: OfficeHour1WhereUniqueInput
  }


  /**
   * OfficeHour1 deleteMany
   */
  export type OfficeHour1DeleteManyArgs = {
    /**
     * Filter which OfficeHour1s to delete
     */
    where?: OfficeHour1WhereInput
  }


  /**
   * OfficeHour1 without action
   */
  export type OfficeHour1Args = {
    /**
     * Select specific fields to fetch from the OfficeHour1
     */
    select?: OfficeHour1Select | null
  }



  /**
   * Model OfficeHour2
   */


  export type AggregateOfficeHour2 = {
    _count: OfficeHour2CountAggregateOutputType | null
    _avg: OfficeHour2AvgAggregateOutputType | null
    _sum: OfficeHour2SumAggregateOutputType | null
    _min: OfficeHour2MinAggregateOutputType | null
    _max: OfficeHour2MaxAggregateOutputType | null
  }

  export type OfficeHour2AvgAggregateOutputType = {
    id: number | null
  }

  export type OfficeHour2SumAggregateOutputType = {
    id: number | null
  }

  export type OfficeHour2MinAggregateOutputType = {
    id: number | null
    isOpenMonday: boolean | null
    openingTimeMonday: string | null
    closingTimeMonday: string | null
    isOpenTuesday: boolean | null
    openingTimeTuesday: string | null
    closingTimeTuesday: string | null
    isOpenWednesday: boolean | null
    openingTimeWednesday: string | null
    closingTimeWednesday: string | null
    isOpenThursday: boolean | null
    openingTimeThursday: string | null
    closingTimeThursday: string | null
    isOpenFriday: boolean | null
    openingTimeFriday: string | null
    closingTimeFriday: string | null
    isOpenSaturday: boolean | null
    openingTimeSaturday: string | null
    closingTimeSaturday: string | null
    isOpenSunday: boolean | null
    openingTimeSunday: string | null
    closingTimeSunday: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeHour2MaxAggregateOutputType = {
    id: number | null
    isOpenMonday: boolean | null
    openingTimeMonday: string | null
    closingTimeMonday: string | null
    isOpenTuesday: boolean | null
    openingTimeTuesday: string | null
    closingTimeTuesday: string | null
    isOpenWednesday: boolean | null
    openingTimeWednesday: string | null
    closingTimeWednesday: string | null
    isOpenThursday: boolean | null
    openingTimeThursday: string | null
    closingTimeThursday: string | null
    isOpenFriday: boolean | null
    openingTimeFriday: string | null
    closingTimeFriday: string | null
    isOpenSaturday: boolean | null
    openingTimeSaturday: string | null
    closingTimeSaturday: string | null
    isOpenSunday: boolean | null
    openingTimeSunday: string | null
    closingTimeSunday: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeHour2CountAggregateOutputType = {
    id: number
    isOpenMonday: number
    openingTimeMonday: number
    closingTimeMonday: number
    isOpenTuesday: number
    openingTimeTuesday: number
    closingTimeTuesday: number
    isOpenWednesday: number
    openingTimeWednesday: number
    closingTimeWednesday: number
    isOpenThursday: number
    openingTimeThursday: number
    closingTimeThursday: number
    isOpenFriday: number
    openingTimeFriday: number
    closingTimeFriday: number
    isOpenSaturday: number
    openingTimeSaturday: number
    closingTimeSaturday: number
    isOpenSunday: number
    openingTimeSunday: number
    closingTimeSunday: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfficeHour2AvgAggregateInputType = {
    id?: true
  }

  export type OfficeHour2SumAggregateInputType = {
    id?: true
  }

  export type OfficeHour2MinAggregateInputType = {
    id?: true
    isOpenMonday?: true
    openingTimeMonday?: true
    closingTimeMonday?: true
    isOpenTuesday?: true
    openingTimeTuesday?: true
    closingTimeTuesday?: true
    isOpenWednesday?: true
    openingTimeWednesday?: true
    closingTimeWednesday?: true
    isOpenThursday?: true
    openingTimeThursday?: true
    closingTimeThursday?: true
    isOpenFriday?: true
    openingTimeFriday?: true
    closingTimeFriday?: true
    isOpenSaturday?: true
    openingTimeSaturday?: true
    closingTimeSaturday?: true
    isOpenSunday?: true
    openingTimeSunday?: true
    closingTimeSunday?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeHour2MaxAggregateInputType = {
    id?: true
    isOpenMonday?: true
    openingTimeMonday?: true
    closingTimeMonday?: true
    isOpenTuesday?: true
    openingTimeTuesday?: true
    closingTimeTuesday?: true
    isOpenWednesday?: true
    openingTimeWednesday?: true
    closingTimeWednesday?: true
    isOpenThursday?: true
    openingTimeThursday?: true
    closingTimeThursday?: true
    isOpenFriday?: true
    openingTimeFriday?: true
    closingTimeFriday?: true
    isOpenSaturday?: true
    openingTimeSaturday?: true
    closingTimeSaturday?: true
    isOpenSunday?: true
    openingTimeSunday?: true
    closingTimeSunday?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeHour2CountAggregateInputType = {
    id?: true
    isOpenMonday?: true
    openingTimeMonday?: true
    closingTimeMonday?: true
    isOpenTuesday?: true
    openingTimeTuesday?: true
    closingTimeTuesday?: true
    isOpenWednesday?: true
    openingTimeWednesday?: true
    closingTimeWednesday?: true
    isOpenThursday?: true
    openingTimeThursday?: true
    closingTimeThursday?: true
    isOpenFriday?: true
    openingTimeFriday?: true
    closingTimeFriday?: true
    isOpenSaturday?: true
    openingTimeSaturday?: true
    closingTimeSaturday?: true
    isOpenSunday?: true
    openingTimeSunday?: true
    closingTimeSunday?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfficeHour2AggregateArgs = {
    /**
     * Filter which OfficeHour2 to aggregate.
     */
    where?: OfficeHour2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour2s to fetch.
     */
    orderBy?: Enumerable<OfficeHour2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeHour2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficeHour2s
    **/
    _count?: true | OfficeHour2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficeHour2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficeHour2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeHour2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeHour2MaxAggregateInputType
  }

  export type GetOfficeHour2AggregateType<T extends OfficeHour2AggregateArgs> = {
        [P in keyof T & keyof AggregateOfficeHour2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficeHour2[P]>
      : GetScalarType<T[P], AggregateOfficeHour2[P]>
  }




  export type OfficeHour2GroupByArgs = {
    where?: OfficeHour2WhereInput
    orderBy?: Enumerable<OfficeHour2OrderByWithAggregationInput>
    by: OfficeHour2ScalarFieldEnum[]
    having?: OfficeHour2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeHour2CountAggregateInputType | true
    _avg?: OfficeHour2AvgAggregateInputType
    _sum?: OfficeHour2SumAggregateInputType
    _min?: OfficeHour2MinAggregateInputType
    _max?: OfficeHour2MaxAggregateInputType
  }


  export type OfficeHour2GroupByOutputType = {
    id: number
    isOpenMonday: boolean
    openingTimeMonday: string
    closingTimeMonday: string
    isOpenTuesday: boolean
    openingTimeTuesday: string
    closingTimeTuesday: string
    isOpenWednesday: boolean
    openingTimeWednesday: string
    closingTimeWednesday: string
    isOpenThursday: boolean
    openingTimeThursday: string
    closingTimeThursday: string
    isOpenFriday: boolean
    openingTimeFriday: string
    closingTimeFriday: string
    isOpenSaturday: boolean
    openingTimeSaturday: string
    closingTimeSaturday: string
    isOpenSunday: boolean
    openingTimeSunday: string
    closingTimeSunday: string
    createdAt: Date
    updatedAt: Date
    _count: OfficeHour2CountAggregateOutputType | null
    _avg: OfficeHour2AvgAggregateOutputType | null
    _sum: OfficeHour2SumAggregateOutputType | null
    _min: OfficeHour2MinAggregateOutputType | null
    _max: OfficeHour2MaxAggregateOutputType | null
  }

  type GetOfficeHour2GroupByPayload<T extends OfficeHour2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OfficeHour2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeHour2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeHour2GroupByOutputType[P]>
            : GetScalarType<T[P], OfficeHour2GroupByOutputType[P]>
        }
      >
    >


  export type OfficeHour2Select = {
    id?: boolean
    isOpenMonday?: boolean
    openingTimeMonday?: boolean
    closingTimeMonday?: boolean
    isOpenTuesday?: boolean
    openingTimeTuesday?: boolean
    closingTimeTuesday?: boolean
    isOpenWednesday?: boolean
    openingTimeWednesday?: boolean
    closingTimeWednesday?: boolean
    isOpenThursday?: boolean
    openingTimeThursday?: boolean
    closingTimeThursday?: boolean
    isOpenFriday?: boolean
    openingTimeFriday?: boolean
    closingTimeFriday?: boolean
    isOpenSaturday?: boolean
    openingTimeSaturday?: boolean
    closingTimeSaturday?: boolean
    isOpenSunday?: boolean
    openingTimeSunday?: boolean
    closingTimeSunday?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type OfficeHour2GetPayload<S extends boolean | null | undefined | OfficeHour2Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OfficeHour2 :
    S extends undefined ? never :
    S extends { include: any } & (OfficeHour2Args | OfficeHour2FindManyArgs)
    ? OfficeHour2 
    : S extends { select: any } & (OfficeHour2Args | OfficeHour2FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OfficeHour2 ? OfficeHour2[P] : never
  } 
      : OfficeHour2


  type OfficeHour2CountArgs = 
    Omit<OfficeHour2FindManyArgs, 'select' | 'include'> & {
      select?: OfficeHour2CountAggregateInputType | true
    }

  export interface OfficeHour2Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OfficeHour2 that matches the filter.
     * @param {OfficeHour2FindUniqueArgs} args - Arguments to find a OfficeHour2
     * @example
     * // Get one OfficeHour2
     * const officeHour2 = await prisma.officeHour2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OfficeHour2FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OfficeHour2FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OfficeHour2'> extends True ? Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>> : Prisma__OfficeHour2Client<OfficeHour2GetPayload<T> | null, null>

    /**
     * Find one OfficeHour2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OfficeHour2FindUniqueOrThrowArgs} args - Arguments to find a OfficeHour2
     * @example
     * // Get one OfficeHour2
     * const officeHour2 = await prisma.officeHour2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OfficeHour2FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OfficeHour2FindUniqueOrThrowArgs>
    ): Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>>

    /**
     * Find the first OfficeHour2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2FindFirstArgs} args - Arguments to find a OfficeHour2
     * @example
     * // Get one OfficeHour2
     * const officeHour2 = await prisma.officeHour2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OfficeHour2FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OfficeHour2FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OfficeHour2'> extends True ? Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>> : Prisma__OfficeHour2Client<OfficeHour2GetPayload<T> | null, null>

    /**
     * Find the first OfficeHour2 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2FindFirstOrThrowArgs} args - Arguments to find a OfficeHour2
     * @example
     * // Get one OfficeHour2
     * const officeHour2 = await prisma.officeHour2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OfficeHour2FindFirstOrThrowArgs>(
      args?: SelectSubset<T, OfficeHour2FindFirstOrThrowArgs>
    ): Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>>

    /**
     * Find zero or more OfficeHour2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficeHour2s
     * const officeHour2s = await prisma.officeHour2.findMany()
     * 
     * // Get first 10 OfficeHour2s
     * const officeHour2s = await prisma.officeHour2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeHour2WithIdOnly = await prisma.officeHour2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OfficeHour2FindManyArgs>(
      args?: SelectSubset<T, OfficeHour2FindManyArgs>
    ): Prisma.PrismaPromise<Array<OfficeHour2GetPayload<T>>>

    /**
     * Create a OfficeHour2.
     * @param {OfficeHour2CreateArgs} args - Arguments to create a OfficeHour2.
     * @example
     * // Create one OfficeHour2
     * const OfficeHour2 = await prisma.officeHour2.create({
     *   data: {
     *     // ... data to create a OfficeHour2
     *   }
     * })
     * 
    **/
    create<T extends OfficeHour2CreateArgs>(
      args: SelectSubset<T, OfficeHour2CreateArgs>
    ): Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>>

    /**
     * Create many OfficeHour2s.
     *     @param {OfficeHour2CreateManyArgs} args - Arguments to create many OfficeHour2s.
     *     @example
     *     // Create many OfficeHour2s
     *     const officeHour2 = await prisma.officeHour2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OfficeHour2CreateManyArgs>(
      args?: SelectSubset<T, OfficeHour2CreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OfficeHour2.
     * @param {OfficeHour2DeleteArgs} args - Arguments to delete one OfficeHour2.
     * @example
     * // Delete one OfficeHour2
     * const OfficeHour2 = await prisma.officeHour2.delete({
     *   where: {
     *     // ... filter to delete one OfficeHour2
     *   }
     * })
     * 
    **/
    delete<T extends OfficeHour2DeleteArgs>(
      args: SelectSubset<T, OfficeHour2DeleteArgs>
    ): Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>>

    /**
     * Update one OfficeHour2.
     * @param {OfficeHour2UpdateArgs} args - Arguments to update one OfficeHour2.
     * @example
     * // Update one OfficeHour2
     * const officeHour2 = await prisma.officeHour2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OfficeHour2UpdateArgs>(
      args: SelectSubset<T, OfficeHour2UpdateArgs>
    ): Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>>

    /**
     * Delete zero or more OfficeHour2s.
     * @param {OfficeHour2DeleteManyArgs} args - Arguments to filter OfficeHour2s to delete.
     * @example
     * // Delete a few OfficeHour2s
     * const { count } = await prisma.officeHour2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OfficeHour2DeleteManyArgs>(
      args?: SelectSubset<T, OfficeHour2DeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficeHour2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficeHour2s
     * const officeHour2 = await prisma.officeHour2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OfficeHour2UpdateManyArgs>(
      args: SelectSubset<T, OfficeHour2UpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfficeHour2.
     * @param {OfficeHour2UpsertArgs} args - Arguments to update or create a OfficeHour2.
     * @example
     * // Update or create a OfficeHour2
     * const officeHour2 = await prisma.officeHour2.upsert({
     *   create: {
     *     // ... data to create a OfficeHour2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficeHour2 we want to update
     *   }
     * })
    **/
    upsert<T extends OfficeHour2UpsertArgs>(
      args: SelectSubset<T, OfficeHour2UpsertArgs>
    ): Prisma__OfficeHour2Client<OfficeHour2GetPayload<T>>

    /**
     * Count the number of OfficeHour2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2CountArgs} args - Arguments to filter OfficeHour2s to count.
     * @example
     * // Count the number of OfficeHour2s
     * const count = await prisma.officeHour2.count({
     *   where: {
     *     // ... the filter for the OfficeHour2s we want to count
     *   }
     * })
    **/
    count<T extends OfficeHour2CountArgs>(
      args?: Subset<T, OfficeHour2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeHour2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficeHour2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficeHour2AggregateArgs>(args: Subset<T, OfficeHour2AggregateArgs>): Prisma.PrismaPromise<GetOfficeHour2AggregateType<T>>

    /**
     * Group by OfficeHour2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHour2GroupByArgs} args - Group by arguments.
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
      T extends OfficeHour2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeHour2GroupByArgs['orderBy'] }
        : { orderBy?: OfficeHour2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficeHour2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeHour2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficeHour2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OfficeHour2Client<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * OfficeHour2 base type for findUnique actions
   */
  export type OfficeHour2FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * Filter, which OfficeHour2 to fetch.
     */
    where: OfficeHour2WhereUniqueInput
  }

  /**
   * OfficeHour2 findUnique
   */
  export interface OfficeHour2FindUniqueArgs extends OfficeHour2FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OfficeHour2 findUniqueOrThrow
   */
  export type OfficeHour2FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * Filter, which OfficeHour2 to fetch.
     */
    where: OfficeHour2WhereUniqueInput
  }


  /**
   * OfficeHour2 base type for findFirst actions
   */
  export type OfficeHour2FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * Filter, which OfficeHour2 to fetch.
     */
    where?: OfficeHour2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour2s to fetch.
     */
    orderBy?: Enumerable<OfficeHour2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHour2s.
     */
    cursor?: OfficeHour2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHour2s.
     */
    distinct?: Enumerable<OfficeHour2ScalarFieldEnum>
  }

  /**
   * OfficeHour2 findFirst
   */
  export interface OfficeHour2FindFirstArgs extends OfficeHour2FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OfficeHour2 findFirstOrThrow
   */
  export type OfficeHour2FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * Filter, which OfficeHour2 to fetch.
     */
    where?: OfficeHour2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour2s to fetch.
     */
    orderBy?: Enumerable<OfficeHour2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHour2s.
     */
    cursor?: OfficeHour2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHour2s.
     */
    distinct?: Enumerable<OfficeHour2ScalarFieldEnum>
  }


  /**
   * OfficeHour2 findMany
   */
  export type OfficeHour2FindManyArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * Filter, which OfficeHour2s to fetch.
     */
    where?: OfficeHour2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHour2s to fetch.
     */
    orderBy?: Enumerable<OfficeHour2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficeHour2s.
     */
    cursor?: OfficeHour2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHour2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHour2s.
     */
    skip?: number
    distinct?: Enumerable<OfficeHour2ScalarFieldEnum>
  }


  /**
   * OfficeHour2 create
   */
  export type OfficeHour2CreateArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * The data needed to create a OfficeHour2.
     */
    data: XOR<OfficeHour2CreateInput, OfficeHour2UncheckedCreateInput>
  }


  /**
   * OfficeHour2 createMany
   */
  export type OfficeHour2CreateManyArgs = {
    /**
     * The data used to create many OfficeHour2s.
     */
    data: Enumerable<OfficeHour2CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OfficeHour2 update
   */
  export type OfficeHour2UpdateArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * The data needed to update a OfficeHour2.
     */
    data: XOR<OfficeHour2UpdateInput, OfficeHour2UncheckedUpdateInput>
    /**
     * Choose, which OfficeHour2 to update.
     */
    where: OfficeHour2WhereUniqueInput
  }


  /**
   * OfficeHour2 updateMany
   */
  export type OfficeHour2UpdateManyArgs = {
    /**
     * The data used to update OfficeHour2s.
     */
    data: XOR<OfficeHour2UpdateManyMutationInput, OfficeHour2UncheckedUpdateManyInput>
    /**
     * Filter which OfficeHour2s to update
     */
    where?: OfficeHour2WhereInput
  }


  /**
   * OfficeHour2 upsert
   */
  export type OfficeHour2UpsertArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * The filter to search for the OfficeHour2 to update in case it exists.
     */
    where: OfficeHour2WhereUniqueInput
    /**
     * In case the OfficeHour2 found by the `where` argument doesn't exist, create a new OfficeHour2 with this data.
     */
    create: XOR<OfficeHour2CreateInput, OfficeHour2UncheckedCreateInput>
    /**
     * In case the OfficeHour2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeHour2UpdateInput, OfficeHour2UncheckedUpdateInput>
  }


  /**
   * OfficeHour2 delete
   */
  export type OfficeHour2DeleteArgs = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
    /**
     * Filter which OfficeHour2 to delete.
     */
    where: OfficeHour2WhereUniqueInput
  }


  /**
   * OfficeHour2 deleteMany
   */
  export type OfficeHour2DeleteManyArgs = {
    /**
     * Filter which OfficeHour2s to delete
     */
    where?: OfficeHour2WhereInput
  }


  /**
   * OfficeHour2 without action
   */
  export type OfficeHour2Args = {
    /**
     * Select specific fields to fetch from the OfficeHour2
     */
    select?: OfficeHour2Select | null
  }



  /**
   * Model Booking
   */


  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    userId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    userId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    startDatetime: Date | null
    endDatetime: Date | null
    roomId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    startDatetime: Date | null
    endDatetime: Date | null
    roomId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    startDatetime: number
    endDatetime: number
    roomId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    startDatetime?: true
    endDatetime?: true
    roomId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    startDatetime?: true
    endDatetime?: true
    roomId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    startDatetime?: true
    endDatetime?: true
    roomId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: Enumerable<BookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs = {
    where?: BookingWhereInput
    orderBy?: Enumerable<BookingOrderByWithAggregationInput>
    by: BookingScalarFieldEnum[]
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }


  export type BookingGroupByOutputType = {
    id: number
    startDatetime: Date
    endDatetime: Date
    roomId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect = {
    id?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    room?: boolean | RoomArgs
    roomId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type BookingInclude = {
    room?: boolean | RoomArgs
    user?: boolean | UserArgs
  }

  export type BookingGetPayload<S extends boolean | null | undefined | BookingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Booking :
    S extends undefined ? never :
    S extends { include: any } & (BookingArgs | BookingFindManyArgs)
    ? Booking  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (BookingArgs | BookingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Booking ? Booking[P] : never
  } 
      : Booking


  type BookingCountArgs = 
    Omit<BookingFindManyArgs, 'select' | 'include'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Booking'> extends True ? Prisma__BookingClient<BookingGetPayload<T>> : Prisma__BookingClient<BookingGetPayload<T> | null, null>

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookingFindUniqueOrThrowArgs>
    ): Prisma__BookingClient<BookingGetPayload<T>>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Booking'> extends True ? Prisma__BookingClient<BookingGetPayload<T>> : Prisma__BookingClient<BookingGetPayload<T> | null, null>

    /**
     * Find the first Booking that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs>
    ): Prisma__BookingClient<BookingGetPayload<T>>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookingFindManyArgs>(
      args?: SelectSubset<T, BookingFindManyArgs>
    ): Prisma.PrismaPromise<Array<BookingGetPayload<T>>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
    **/
    create<T extends BookingCreateArgs>(
      args: SelectSubset<T, BookingCreateArgs>
    ): Prisma__BookingClient<BookingGetPayload<T>>

    /**
     * Create many Bookings.
     *     @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookingCreateManyArgs>(
      args?: SelectSubset<T, BookingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
    **/
    delete<T extends BookingDeleteArgs>(
      args: SelectSubset<T, BookingDeleteArgs>
    ): Prisma__BookingClient<BookingGetPayload<T>>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingUpdateArgs>(
      args: SelectSubset<T, BookingUpdateArgs>
    ): Prisma__BookingClient<BookingGetPayload<T>>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingDeleteManyArgs>(
      args?: SelectSubset<T, BookingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingUpdateManyArgs>(
      args: SelectSubset<T, BookingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
    **/
    upsert<T extends BookingUpsertArgs>(
      args: SelectSubset<T, BookingUpsertArgs>
    ): Prisma__BookingClient<BookingGetPayload<T>>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Booking base type for findUnique actions
   */
  export type BookingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUnique
   */
  export interface BookingFindUniqueArgs extends BookingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking base type for findFirst actions
   */
  export type BookingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: Enumerable<BookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: Enumerable<BookingScalarFieldEnum>
  }

  /**
   * Booking findFirst
   */
  export interface BookingFindFirstArgs extends BookingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: Enumerable<BookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: Enumerable<BookingScalarFieldEnum>
  }


  /**
   * Booking findMany
   */
  export type BookingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: Enumerable<BookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: Enumerable<BookingScalarFieldEnum>
  }


  /**
   * Booking create
   */
  export type BookingCreateArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }


  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs = {
    /**
     * The data used to create many Bookings.
     */
    data: Enumerable<BookingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Booking update
   */
  export type BookingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }


  /**
   * Booking upsert
   */
  export type BookingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }


  /**
   * Booking delete
   */
  export type BookingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }


  /**
   * Booking without action
   */
  export type BookingArgs = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BookingScalarFieldEnum: {
    id: 'id',
    startDatetime: 'startDatetime',
    endDatetime: 'endDatetime',
    roomId: 'roomId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const OfficeHour1ScalarFieldEnum: {
    id: 'id',
    day: 'day',
    isOpen: 'isOpen',
    openTime: 'openTime',
    closeTime: 'closeTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfficeHour1ScalarFieldEnum = (typeof OfficeHour1ScalarFieldEnum)[keyof typeof OfficeHour1ScalarFieldEnum]


  export const OfficeHour2ScalarFieldEnum: {
    id: 'id',
    isOpenMonday: 'isOpenMonday',
    openingTimeMonday: 'openingTimeMonday',
    closingTimeMonday: 'closingTimeMonday',
    isOpenTuesday: 'isOpenTuesday',
    openingTimeTuesday: 'openingTimeTuesday',
    closingTimeTuesday: 'closingTimeTuesday',
    isOpenWednesday: 'isOpenWednesday',
    openingTimeWednesday: 'openingTimeWednesday',
    closingTimeWednesday: 'closingTimeWednesday',
    isOpenThursday: 'isOpenThursday',
    openingTimeThursday: 'openingTimeThursday',
    closingTimeThursday: 'closingTimeThursday',
    isOpenFriday: 'isOpenFriday',
    openingTimeFriday: 'openingTimeFriday',
    closingTimeFriday: 'closingTimeFriday',
    isOpenSaturday: 'isOpenSaturday',
    openingTimeSaturday: 'openingTimeSaturday',
    closingTimeSaturday: 'closingTimeSaturday',
    isOpenSunday: 'isOpenSunday',
    openingTimeSunday: 'openingTimeSunday',
    closingTimeSunday: 'closingTimeSunday',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfficeHour2ScalarFieldEnum = (typeof OfficeHour2ScalarFieldEnum)[keyof typeof OfficeHour2ScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    buildingId: 'buildingId',
    floor: 'floor',
    capacityMax: 'capacityMax',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomToFacilityScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    facilityId: 'facilityId'
  };

  export type RoomToFacilityScalarFieldEnum = (typeof RoomToFacilityScalarFieldEnum)[keyof typeof RoomToFacilityScalarFieldEnum]


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


  export const UserScalarFieldEnum: {
    id: 'id',
    officerId: 'officerId',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    userName: 'userName',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type BuildingWhereInput = {
    AND?: Enumerable<BuildingWhereInput>
    OR?: Enumerable<BuildingWhereInput>
    NOT?: Enumerable<BuildingWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    room?: RoomListRelationFilter
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByRelationAggregateInput
  }

  export type BuildingWhereUniqueInput = {
    id?: number
  }

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BuildingScalarWhereWithAggregatesInput>
    OR?: Enumerable<BuildingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BuildingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FacilityWhereInput = {
    AND?: Enumerable<FacilityWhereInput>
    OR?: Enumerable<FacilityWhereInput>
    NOT?: Enumerable<FacilityWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roomToFacility?: RoomToFacilityListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomToFacility?: roomToFacilityOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = {
    id?: number
  }

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    OR?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoomWhereInput = {
    AND?: Enumerable<RoomWhereInput>
    OR?: Enumerable<RoomWhereInput>
    NOT?: Enumerable<RoomWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    building?: XOR<BuildingRelationFilter, BuildingWhereInput> | null
    buildingId?: IntFilter | number
    floor?: StringFilter | string
    capacityMax?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    booking?: BookingListRelationFilter
    roomToFacility?: RoomToFacilityListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    building?: BuildingOrderByWithRelationInput
    buildingId?: SortOrder
    floor?: SortOrder
    capacityMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByRelationAggregateInput
    roomToFacility?: roomToFacilityOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = {
    id?: number
  }

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    capacityMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    buildingId?: IntWithAggregatesFilter | number
    floor?: StringWithAggregatesFilter | string
    capacityMax?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type roomToFacilityWhereInput = {
    AND?: Enumerable<roomToFacilityWhereInput>
    OR?: Enumerable<roomToFacilityWhereInput>
    NOT?: Enumerable<roomToFacilityWhereInput>
    id?: IntFilter | number
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    roomId?: IntFilter | number
    facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    facilityId?: IntFilter | number
  }

  export type roomToFacilityOrderByWithRelationInput = {
    id?: SortOrder
    room?: RoomOrderByWithRelationInput
    roomId?: SortOrder
    facility?: FacilityOrderByWithRelationInput
    facilityId?: SortOrder
  }

  export type roomToFacilityWhereUniqueInput = {
    id?: number
  }

  export type roomToFacilityOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
    _count?: roomToFacilityCountOrderByAggregateInput
    _avg?: roomToFacilityAvgOrderByAggregateInput
    _max?: roomToFacilityMaxOrderByAggregateInput
    _min?: roomToFacilityMinOrderByAggregateInput
    _sum?: roomToFacilitySumOrderByAggregateInput
  }

  export type roomToFacilityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<roomToFacilityScalarWhereWithAggregatesInput>
    OR?: Enumerable<roomToFacilityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<roomToFacilityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roomId?: IntWithAggregatesFilter | number
    facilityId?: IntWithAggregatesFilter | number
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    officerId?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    phone?: StringFilter | string
    email?: StringFilter | string
    userName?: StringFilter | string
    password?: StringFilter | string
    role?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    booking?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    officerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    officerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    officerId?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    userName?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OfficeHour1WhereInput = {
    AND?: Enumerable<OfficeHour1WhereInput>
    OR?: Enumerable<OfficeHour1WhereInput>
    NOT?: Enumerable<OfficeHour1WhereInput>
    id?: IntFilter | number
    day?: StringFilter | string
    isOpen?: BoolFilter | boolean
    openTime?: StringFilter | string
    closeTime?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OfficeHour1OrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    isOpen?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour1WhereUniqueInput = {
    id?: number
  }

  export type OfficeHour1OrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    isOpen?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfficeHour1CountOrderByAggregateInput
    _avg?: OfficeHour1AvgOrderByAggregateInput
    _max?: OfficeHour1MaxOrderByAggregateInput
    _min?: OfficeHour1MinOrderByAggregateInput
    _sum?: OfficeHour1SumOrderByAggregateInput
  }

  export type OfficeHour1ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OfficeHour1ScalarWhereWithAggregatesInput>
    OR?: Enumerable<OfficeHour1ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OfficeHour1ScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    day?: StringWithAggregatesFilter | string
    isOpen?: BoolWithAggregatesFilter | boolean
    openTime?: StringWithAggregatesFilter | string
    closeTime?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OfficeHour2WhereInput = {
    AND?: Enumerable<OfficeHour2WhereInput>
    OR?: Enumerable<OfficeHour2WhereInput>
    NOT?: Enumerable<OfficeHour2WhereInput>
    id?: IntFilter | number
    isOpenMonday?: BoolFilter | boolean
    openingTimeMonday?: StringFilter | string
    closingTimeMonday?: StringFilter | string
    isOpenTuesday?: BoolFilter | boolean
    openingTimeTuesday?: StringFilter | string
    closingTimeTuesday?: StringFilter | string
    isOpenWednesday?: BoolFilter | boolean
    openingTimeWednesday?: StringFilter | string
    closingTimeWednesday?: StringFilter | string
    isOpenThursday?: BoolFilter | boolean
    openingTimeThursday?: StringFilter | string
    closingTimeThursday?: StringFilter | string
    isOpenFriday?: BoolFilter | boolean
    openingTimeFriday?: StringFilter | string
    closingTimeFriday?: StringFilter | string
    isOpenSaturday?: BoolFilter | boolean
    openingTimeSaturday?: StringFilter | string
    closingTimeSaturday?: StringFilter | string
    isOpenSunday?: BoolFilter | boolean
    openingTimeSunday?: StringFilter | string
    closingTimeSunday?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OfficeHour2OrderByWithRelationInput = {
    id?: SortOrder
    isOpenMonday?: SortOrder
    openingTimeMonday?: SortOrder
    closingTimeMonday?: SortOrder
    isOpenTuesday?: SortOrder
    openingTimeTuesday?: SortOrder
    closingTimeTuesday?: SortOrder
    isOpenWednesday?: SortOrder
    openingTimeWednesday?: SortOrder
    closingTimeWednesday?: SortOrder
    isOpenThursday?: SortOrder
    openingTimeThursday?: SortOrder
    closingTimeThursday?: SortOrder
    isOpenFriday?: SortOrder
    openingTimeFriday?: SortOrder
    closingTimeFriday?: SortOrder
    isOpenSaturday?: SortOrder
    openingTimeSaturday?: SortOrder
    closingTimeSaturday?: SortOrder
    isOpenSunday?: SortOrder
    openingTimeSunday?: SortOrder
    closingTimeSunday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour2WhereUniqueInput = {
    id?: number
  }

  export type OfficeHour2OrderByWithAggregationInput = {
    id?: SortOrder
    isOpenMonday?: SortOrder
    openingTimeMonday?: SortOrder
    closingTimeMonday?: SortOrder
    isOpenTuesday?: SortOrder
    openingTimeTuesday?: SortOrder
    closingTimeTuesday?: SortOrder
    isOpenWednesday?: SortOrder
    openingTimeWednesday?: SortOrder
    closingTimeWednesday?: SortOrder
    isOpenThursday?: SortOrder
    openingTimeThursday?: SortOrder
    closingTimeThursday?: SortOrder
    isOpenFriday?: SortOrder
    openingTimeFriday?: SortOrder
    closingTimeFriday?: SortOrder
    isOpenSaturday?: SortOrder
    openingTimeSaturday?: SortOrder
    closingTimeSaturday?: SortOrder
    isOpenSunday?: SortOrder
    openingTimeSunday?: SortOrder
    closingTimeSunday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfficeHour2CountOrderByAggregateInput
    _avg?: OfficeHour2AvgOrderByAggregateInput
    _max?: OfficeHour2MaxOrderByAggregateInput
    _min?: OfficeHour2MinOrderByAggregateInput
    _sum?: OfficeHour2SumOrderByAggregateInput
  }

  export type OfficeHour2ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OfficeHour2ScalarWhereWithAggregatesInput>
    OR?: Enumerable<OfficeHour2ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OfficeHour2ScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    isOpenMonday?: BoolWithAggregatesFilter | boolean
    openingTimeMonday?: StringWithAggregatesFilter | string
    closingTimeMonday?: StringWithAggregatesFilter | string
    isOpenTuesday?: BoolWithAggregatesFilter | boolean
    openingTimeTuesday?: StringWithAggregatesFilter | string
    closingTimeTuesday?: StringWithAggregatesFilter | string
    isOpenWednesday?: BoolWithAggregatesFilter | boolean
    openingTimeWednesday?: StringWithAggregatesFilter | string
    closingTimeWednesday?: StringWithAggregatesFilter | string
    isOpenThursday?: BoolWithAggregatesFilter | boolean
    openingTimeThursday?: StringWithAggregatesFilter | string
    closingTimeThursday?: StringWithAggregatesFilter | string
    isOpenFriday?: BoolWithAggregatesFilter | boolean
    openingTimeFriday?: StringWithAggregatesFilter | string
    closingTimeFriday?: StringWithAggregatesFilter | string
    isOpenSaturday?: BoolWithAggregatesFilter | boolean
    openingTimeSaturday?: StringWithAggregatesFilter | string
    closingTimeSaturday?: StringWithAggregatesFilter | string
    isOpenSunday?: BoolWithAggregatesFilter | boolean
    openingTimeSunday?: StringWithAggregatesFilter | string
    closingTimeSunday?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BookingWhereInput = {
    AND?: Enumerable<BookingWhereInput>
    OR?: Enumerable<BookingWhereInput>
    NOT?: Enumerable<BookingWhereInput>
    id?: IntFilter | number
    startDatetime?: DateTimeFilter | Date | string
    endDatetime?: DateTimeFilter | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput> | null
    roomId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    room?: RoomOrderByWithRelationInput
    roomId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingWhereUniqueInput = {
    id?: number
  }

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookingScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    startDatetime?: DateTimeWithAggregatesFilter | Date | string
    endDatetime?: DateTimeWithAggregatesFilter | Date | string
    roomId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BuildingCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomToFacility?: roomToFacilityCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomToFacility?: roomToFacilityUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomToFacility?: roomToFacilityUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomToFacility?: roomToFacilityUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    name: string
    building?: BuildingCreateNestedOneWithoutRoomInput
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedManyWithoutRoomInput
    roomToFacility?: roomToFacilityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    name: string
    buildingId: number
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutRoomInput
    roomToFacility?: roomToFacilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    building?: BuildingUpdateOneWithoutRoomNestedInput
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutRoomNestedInput
    roomToFacility?: roomToFacilityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    roomToFacility?: roomToFacilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    name: string
    buildingId: number
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomToFacilityCreateInput = {
    room: RoomCreateNestedOneWithoutRoomToFacilityInput
    facility: FacilityCreateNestedOneWithoutRoomToFacilityInput
  }

  export type roomToFacilityUncheckedCreateInput = {
    id?: number
    roomId: number
    facilityId: number
  }

  export type roomToFacilityUpdateInput = {
    room?: RoomUpdateOneRequiredWithoutRoomToFacilityNestedInput
    facility?: FacilityUpdateOneRequiredWithoutRoomToFacilityNestedInput
  }

  export type roomToFacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
  }

  export type roomToFacilityCreateManyInput = {
    id?: number
    roomId: number
    facilityId: number
  }

  export type roomToFacilityUpdateManyMutationInput = {

  }

  export type roomToFacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    officerId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    userName: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    officerId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    userName: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    officerId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    officerId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    officerId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    userName: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    officerId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    officerId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour1CreateInput = {
    day: string
    isOpen: boolean
    openTime: string
    closeTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHour1UncheckedCreateInput = {
    id?: number
    day: string
    isOpen: boolean
    openTime: string
    closeTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHour1UpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour1UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour1CreateManyInput = {
    id?: number
    day: string
    isOpen: boolean
    openTime: string
    closeTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHour1UpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour1UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour2CreateInput = {
    isOpenMonday: boolean
    openingTimeMonday: string
    closingTimeMonday: string
    isOpenTuesday: boolean
    openingTimeTuesday: string
    closingTimeTuesday: string
    isOpenWednesday: boolean
    openingTimeWednesday: string
    closingTimeWednesday: string
    isOpenThursday: boolean
    openingTimeThursday: string
    closingTimeThursday: string
    isOpenFriday: boolean
    openingTimeFriday: string
    closingTimeFriday: string
    isOpenSaturday: boolean
    openingTimeSaturday: string
    closingTimeSaturday: string
    isOpenSunday: boolean
    openingTimeSunday: string
    closingTimeSunday: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHour2UncheckedCreateInput = {
    id?: number
    isOpenMonday: boolean
    openingTimeMonday: string
    closingTimeMonday: string
    isOpenTuesday: boolean
    openingTimeTuesday: string
    closingTimeTuesday: string
    isOpenWednesday: boolean
    openingTimeWednesday: string
    closingTimeWednesday: string
    isOpenThursday: boolean
    openingTimeThursday: string
    closingTimeThursday: string
    isOpenFriday: boolean
    openingTimeFriday: string
    closingTimeFriday: string
    isOpenSaturday: boolean
    openingTimeSaturday: string
    closingTimeSaturday: string
    isOpenSunday: boolean
    openingTimeSunday: string
    closingTimeSunday: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHour2UpdateInput = {
    isOpenMonday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeMonday?: StringFieldUpdateOperationsInput | string
    closingTimeMonday?: StringFieldUpdateOperationsInput | string
    isOpenTuesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeTuesday?: StringFieldUpdateOperationsInput | string
    closingTimeTuesday?: StringFieldUpdateOperationsInput | string
    isOpenWednesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeWednesday?: StringFieldUpdateOperationsInput | string
    closingTimeWednesday?: StringFieldUpdateOperationsInput | string
    isOpenThursday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeThursday?: StringFieldUpdateOperationsInput | string
    closingTimeThursday?: StringFieldUpdateOperationsInput | string
    isOpenFriday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeFriday?: StringFieldUpdateOperationsInput | string
    closingTimeFriday?: StringFieldUpdateOperationsInput | string
    isOpenSaturday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSaturday?: StringFieldUpdateOperationsInput | string
    closingTimeSaturday?: StringFieldUpdateOperationsInput | string
    isOpenSunday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSunday?: StringFieldUpdateOperationsInput | string
    closingTimeSunday?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isOpenMonday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeMonday?: StringFieldUpdateOperationsInput | string
    closingTimeMonday?: StringFieldUpdateOperationsInput | string
    isOpenTuesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeTuesday?: StringFieldUpdateOperationsInput | string
    closingTimeTuesday?: StringFieldUpdateOperationsInput | string
    isOpenWednesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeWednesday?: StringFieldUpdateOperationsInput | string
    closingTimeWednesday?: StringFieldUpdateOperationsInput | string
    isOpenThursday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeThursday?: StringFieldUpdateOperationsInput | string
    closingTimeThursday?: StringFieldUpdateOperationsInput | string
    isOpenFriday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeFriday?: StringFieldUpdateOperationsInput | string
    closingTimeFriday?: StringFieldUpdateOperationsInput | string
    isOpenSaturday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSaturday?: StringFieldUpdateOperationsInput | string
    closingTimeSaturday?: StringFieldUpdateOperationsInput | string
    isOpenSunday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSunday?: StringFieldUpdateOperationsInput | string
    closingTimeSunday?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour2CreateManyInput = {
    id?: number
    isOpenMonday: boolean
    openingTimeMonday: string
    closingTimeMonday: string
    isOpenTuesday: boolean
    openingTimeTuesday: string
    closingTimeTuesday: string
    isOpenWednesday: boolean
    openingTimeWednesday: string
    closingTimeWednesday: string
    isOpenThursday: boolean
    openingTimeThursday: string
    closingTimeThursday: string
    isOpenFriday: boolean
    openingTimeFriday: string
    closingTimeFriday: string
    isOpenSaturday: boolean
    openingTimeSaturday: string
    closingTimeSaturday: string
    isOpenSunday: boolean
    openingTimeSunday: string
    closingTimeSunday: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHour2UpdateManyMutationInput = {
    isOpenMonday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeMonday?: StringFieldUpdateOperationsInput | string
    closingTimeMonday?: StringFieldUpdateOperationsInput | string
    isOpenTuesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeTuesday?: StringFieldUpdateOperationsInput | string
    closingTimeTuesday?: StringFieldUpdateOperationsInput | string
    isOpenWednesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeWednesday?: StringFieldUpdateOperationsInput | string
    closingTimeWednesday?: StringFieldUpdateOperationsInput | string
    isOpenThursday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeThursday?: StringFieldUpdateOperationsInput | string
    closingTimeThursday?: StringFieldUpdateOperationsInput | string
    isOpenFriday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeFriday?: StringFieldUpdateOperationsInput | string
    closingTimeFriday?: StringFieldUpdateOperationsInput | string
    isOpenSaturday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSaturday?: StringFieldUpdateOperationsInput | string
    closingTimeSaturday?: StringFieldUpdateOperationsInput | string
    isOpenSunday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSunday?: StringFieldUpdateOperationsInput | string
    closingTimeSunday?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHour2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isOpenMonday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeMonday?: StringFieldUpdateOperationsInput | string
    closingTimeMonday?: StringFieldUpdateOperationsInput | string
    isOpenTuesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeTuesday?: StringFieldUpdateOperationsInput | string
    closingTimeTuesday?: StringFieldUpdateOperationsInput | string
    isOpenWednesday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeWednesday?: StringFieldUpdateOperationsInput | string
    closingTimeWednesday?: StringFieldUpdateOperationsInput | string
    isOpenThursday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeThursday?: StringFieldUpdateOperationsInput | string
    closingTimeThursday?: StringFieldUpdateOperationsInput | string
    isOpenFriday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeFriday?: StringFieldUpdateOperationsInput | string
    closingTimeFriday?: StringFieldUpdateOperationsInput | string
    isOpenSaturday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSaturday?: StringFieldUpdateOperationsInput | string
    closingTimeSaturday?: StringFieldUpdateOperationsInput | string
    isOpenSunday?: BoolFieldUpdateOperationsInput | boolean
    openingTimeSunday?: StringFieldUpdateOperationsInput | string
    closingTimeSunday?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    startDatetime: Date | string
    endDatetime: Date | string
    room?: RoomCreateNestedOneWithoutBookingInput
    user?: UserCreateNestedOneWithoutBookingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    roomId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutBookingNestedInput
    user?: UserUpdateOneWithoutBookingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    roomId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
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

  export type RoomToFacilityListRelationFilter = {
    every?: roomToFacilityWhereInput
    some?: roomToFacilityWhereInput
    none?: roomToFacilityWhereInput
  }

  export type roomToFacilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuildingRelationFilter = {
    is?: BuildingWhereInput | null
    isNot?: BuildingWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    capacityMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    capacityMax?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    capacityMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    capacityMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    capacityMax?: SortOrder
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type FacilityRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type roomToFacilityCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type roomToFacilityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type roomToFacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type roomToFacilityMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type roomToFacilitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type OfficeHour1CountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    isOpen?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour1AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OfficeHour1MaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    isOpen?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour1MinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    isOpen?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour1SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type OfficeHour2CountOrderByAggregateInput = {
    id?: SortOrder
    isOpenMonday?: SortOrder
    openingTimeMonday?: SortOrder
    closingTimeMonday?: SortOrder
    isOpenTuesday?: SortOrder
    openingTimeTuesday?: SortOrder
    closingTimeTuesday?: SortOrder
    isOpenWednesday?: SortOrder
    openingTimeWednesday?: SortOrder
    closingTimeWednesday?: SortOrder
    isOpenThursday?: SortOrder
    openingTimeThursday?: SortOrder
    closingTimeThursday?: SortOrder
    isOpenFriday?: SortOrder
    openingTimeFriday?: SortOrder
    closingTimeFriday?: SortOrder
    isOpenSaturday?: SortOrder
    openingTimeSaturday?: SortOrder
    closingTimeSaturday?: SortOrder
    isOpenSunday?: SortOrder
    openingTimeSunday?: SortOrder
    closingTimeSunday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OfficeHour2MaxOrderByAggregateInput = {
    id?: SortOrder
    isOpenMonday?: SortOrder
    openingTimeMonday?: SortOrder
    closingTimeMonday?: SortOrder
    isOpenTuesday?: SortOrder
    openingTimeTuesday?: SortOrder
    closingTimeTuesday?: SortOrder
    isOpenWednesday?: SortOrder
    openingTimeWednesday?: SortOrder
    closingTimeWednesday?: SortOrder
    isOpenThursday?: SortOrder
    openingTimeThursday?: SortOrder
    closingTimeThursday?: SortOrder
    isOpenFriday?: SortOrder
    openingTimeFriday?: SortOrder
    closingTimeFriday?: SortOrder
    isOpenSaturday?: SortOrder
    openingTimeSaturday?: SortOrder
    closingTimeSaturday?: SortOrder
    isOpenSunday?: SortOrder
    openingTimeSunday?: SortOrder
    closingTimeSunday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour2MinOrderByAggregateInput = {
    id?: SortOrder
    isOpenMonday?: SortOrder
    openingTimeMonday?: SortOrder
    closingTimeMonday?: SortOrder
    isOpenTuesday?: SortOrder
    openingTimeTuesday?: SortOrder
    closingTimeTuesday?: SortOrder
    isOpenWednesday?: SortOrder
    openingTimeWednesday?: SortOrder
    closingTimeWednesday?: SortOrder
    isOpenThursday?: SortOrder
    openingTimeThursday?: SortOrder
    closingTimeThursday?: SortOrder
    isOpenFriday?: SortOrder
    openingTimeFriday?: SortOrder
    closingTimeFriday?: SortOrder
    isOpenSaturday?: SortOrder
    openingTimeSaturday?: SortOrder
    closingTimeSaturday?: SortOrder
    isOpenSunday?: SortOrder
    openingTimeSunday?: SortOrder
    closingTimeSunday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeHour2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
  }

  export type RoomCreateNestedManyWithoutBuildingInput = {
    create?: XOR<Enumerable<RoomCreateWithoutBuildingInput>, Enumerable<RoomUncheckedCreateWithoutBuildingInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutBuildingInput>
    createMany?: RoomCreateManyBuildingInputEnvelope
    connect?: Enumerable<RoomWhereUniqueInput>
  }

  export type RoomUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<Enumerable<RoomCreateWithoutBuildingInput>, Enumerable<RoomUncheckedCreateWithoutBuildingInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutBuildingInput>
    createMany?: RoomCreateManyBuildingInputEnvelope
    connect?: Enumerable<RoomWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<Enumerable<RoomCreateWithoutBuildingInput>, Enumerable<RoomUncheckedCreateWithoutBuildingInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutBuildingInput>
    upsert?: Enumerable<RoomUpsertWithWhereUniqueWithoutBuildingInput>
    createMany?: RoomCreateManyBuildingInputEnvelope
    set?: Enumerable<RoomWhereUniqueInput>
    disconnect?: Enumerable<RoomWhereUniqueInput>
    delete?: Enumerable<RoomWhereUniqueInput>
    connect?: Enumerable<RoomWhereUniqueInput>
    update?: Enumerable<RoomUpdateWithWhereUniqueWithoutBuildingInput>
    updateMany?: Enumerable<RoomUpdateManyWithWhereWithoutBuildingInput>
    deleteMany?: Enumerable<RoomScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<Enumerable<RoomCreateWithoutBuildingInput>, Enumerable<RoomUncheckedCreateWithoutBuildingInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutBuildingInput>
    upsert?: Enumerable<RoomUpsertWithWhereUniqueWithoutBuildingInput>
    createMany?: RoomCreateManyBuildingInputEnvelope
    set?: Enumerable<RoomWhereUniqueInput>
    disconnect?: Enumerable<RoomWhereUniqueInput>
    delete?: Enumerable<RoomWhereUniqueInput>
    connect?: Enumerable<RoomWhereUniqueInput>
    update?: Enumerable<RoomUpdateWithWhereUniqueWithoutBuildingInput>
    updateMany?: Enumerable<RoomUpdateManyWithWhereWithoutBuildingInput>
    deleteMany?: Enumerable<RoomScalarWhereInput>
  }

  export type roomToFacilityCreateNestedManyWithoutFacilityInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutFacilityInput>, Enumerable<roomToFacilityUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutFacilityInput>
    createMany?: roomToFacilityCreateManyFacilityInputEnvelope
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
  }

  export type roomToFacilityUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutFacilityInput>, Enumerable<roomToFacilityUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutFacilityInput>
    createMany?: roomToFacilityCreateManyFacilityInputEnvelope
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
  }

  export type roomToFacilityUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutFacilityInput>, Enumerable<roomToFacilityUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutFacilityInput>
    upsert?: Enumerable<roomToFacilityUpsertWithWhereUniqueWithoutFacilityInput>
    createMany?: roomToFacilityCreateManyFacilityInputEnvelope
    set?: Enumerable<roomToFacilityWhereUniqueInput>
    disconnect?: Enumerable<roomToFacilityWhereUniqueInput>
    delete?: Enumerable<roomToFacilityWhereUniqueInput>
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
    update?: Enumerable<roomToFacilityUpdateWithWhereUniqueWithoutFacilityInput>
    updateMany?: Enumerable<roomToFacilityUpdateManyWithWhereWithoutFacilityInput>
    deleteMany?: Enumerable<roomToFacilityScalarWhereInput>
  }

  export type roomToFacilityUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutFacilityInput>, Enumerable<roomToFacilityUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutFacilityInput>
    upsert?: Enumerable<roomToFacilityUpsertWithWhereUniqueWithoutFacilityInput>
    createMany?: roomToFacilityCreateManyFacilityInputEnvelope
    set?: Enumerable<roomToFacilityWhereUniqueInput>
    disconnect?: Enumerable<roomToFacilityWhereUniqueInput>
    delete?: Enumerable<roomToFacilityWhereUniqueInput>
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
    update?: Enumerable<roomToFacilityUpdateWithWhereUniqueWithoutFacilityInput>
    updateMany?: Enumerable<roomToFacilityUpdateManyWithWhereWithoutFacilityInput>
    deleteMany?: Enumerable<roomToFacilityScalarWhereInput>
  }

  export type BuildingCreateNestedOneWithoutRoomInput = {
    create?: XOR<BuildingCreateWithoutRoomInput, BuildingUncheckedCreateWithoutRoomInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutRoomInput
    connect?: BuildingWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BookingCreateWithoutRoomInput>, Enumerable<BookingUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutRoomInput>
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: Enumerable<BookingWhereUniqueInput>
  }

  export type roomToFacilityCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutRoomInput>, Enumerable<roomToFacilityUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutRoomInput>
    createMany?: roomToFacilityCreateManyRoomInputEnvelope
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BookingCreateWithoutRoomInput>, Enumerable<BookingUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutRoomInput>
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: Enumerable<BookingWhereUniqueInput>
  }

  export type roomToFacilityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutRoomInput>, Enumerable<roomToFacilityUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutRoomInput>
    createMany?: roomToFacilityCreateManyRoomInputEnvelope
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
  }

  export type BuildingUpdateOneWithoutRoomNestedInput = {
    create?: XOR<BuildingCreateWithoutRoomInput, BuildingUncheckedCreateWithoutRoomInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutRoomInput
    upsert?: BuildingUpsertWithoutRoomInput
    disconnect?: boolean
    delete?: boolean
    connect?: BuildingWhereUniqueInput
    update?: XOR<BuildingUpdateWithoutRoomInput, BuildingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BookingCreateWithoutRoomInput>, Enumerable<BookingUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BookingUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: Enumerable<BookingWhereUniqueInput>
    disconnect?: Enumerable<BookingWhereUniqueInput>
    delete?: Enumerable<BookingWhereUniqueInput>
    connect?: Enumerable<BookingWhereUniqueInput>
    update?: Enumerable<BookingUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BookingUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BookingScalarWhereInput>
  }

  export type roomToFacilityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutRoomInput>, Enumerable<roomToFacilityUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<roomToFacilityUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: roomToFacilityCreateManyRoomInputEnvelope
    set?: Enumerable<roomToFacilityWhereUniqueInput>
    disconnect?: Enumerable<roomToFacilityWhereUniqueInput>
    delete?: Enumerable<roomToFacilityWhereUniqueInput>
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
    update?: Enumerable<roomToFacilityUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<roomToFacilityUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<roomToFacilityScalarWhereInput>
  }

  export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BookingCreateWithoutRoomInput>, Enumerable<BookingUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BookingUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: Enumerable<BookingWhereUniqueInput>
    disconnect?: Enumerable<BookingWhereUniqueInput>
    delete?: Enumerable<BookingWhereUniqueInput>
    connect?: Enumerable<BookingWhereUniqueInput>
    update?: Enumerable<BookingUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BookingUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BookingScalarWhereInput>
  }

  export type roomToFacilityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<roomToFacilityCreateWithoutRoomInput>, Enumerable<roomToFacilityUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<roomToFacilityCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<roomToFacilityUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: roomToFacilityCreateManyRoomInputEnvelope
    set?: Enumerable<roomToFacilityWhereUniqueInput>
    disconnect?: Enumerable<roomToFacilityWhereUniqueInput>
    delete?: Enumerable<roomToFacilityWhereUniqueInput>
    connect?: Enumerable<roomToFacilityWhereUniqueInput>
    update?: Enumerable<roomToFacilityUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<roomToFacilityUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<roomToFacilityScalarWhereInput>
  }

  export type RoomCreateNestedOneWithoutRoomToFacilityInput = {
    create?: XOR<RoomCreateWithoutRoomToFacilityInput, RoomUncheckedCreateWithoutRoomToFacilityInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomToFacilityInput
    connect?: RoomWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutRoomToFacilityInput = {
    create?: XOR<FacilityCreateWithoutRoomToFacilityInput, FacilityUncheckedCreateWithoutRoomToFacilityInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutRoomToFacilityInput
    connect?: FacilityWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoomToFacilityNestedInput = {
    create?: XOR<RoomCreateWithoutRoomToFacilityInput, RoomUncheckedCreateWithoutRoomToFacilityInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomToFacilityInput
    upsert?: RoomUpsertWithoutRoomToFacilityInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutRoomToFacilityInput, RoomUncheckedUpdateWithoutRoomToFacilityInput>
  }

  export type FacilityUpdateOneRequiredWithoutRoomToFacilityNestedInput = {
    create?: XOR<FacilityCreateWithoutRoomToFacilityInput, FacilityUncheckedCreateWithoutRoomToFacilityInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutRoomToFacilityInput
    upsert?: FacilityUpsertWithoutRoomToFacilityInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<FacilityUpdateWithoutRoomToFacilityInput, FacilityUncheckedUpdateWithoutRoomToFacilityInput>
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BookingCreateWithoutUserInput>, Enumerable<BookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutUserInput>
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: Enumerable<BookingWhereUniqueInput>
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BookingCreateWithoutUserInput>, Enumerable<BookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutUserInput>
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: Enumerable<BookingWhereUniqueInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BookingCreateWithoutUserInput>, Enumerable<BookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BookingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BookingCreateManyUserInputEnvelope
    set?: Enumerable<BookingWhereUniqueInput>
    disconnect?: Enumerable<BookingWhereUniqueInput>
    delete?: Enumerable<BookingWhereUniqueInput>
    connect?: Enumerable<BookingWhereUniqueInput>
    update?: Enumerable<BookingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BookingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BookingScalarWhereInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BookingCreateWithoutUserInput>, Enumerable<BookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BookingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BookingCreateManyUserInputEnvelope
    set?: Enumerable<BookingWhereUniqueInput>
    disconnect?: Enumerable<BookingWhereUniqueInput>
    delete?: Enumerable<BookingWhereUniqueInput>
    connect?: Enumerable<BookingWhereUniqueInput>
    update?: Enumerable<BookingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BookingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BookingScalarWhereInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoomCreateNestedOneWithoutBookingInput = {
    create?: XOR<RoomCreateWithoutBookingInput, RoomUncheckedCreateWithoutBookingInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneWithoutBookingNestedInput = {
    create?: XOR<RoomCreateWithoutBookingInput, RoomUncheckedCreateWithoutBookingInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingInput
    upsert?: RoomUpsertWithoutBookingInput
    disconnect?: boolean
    delete?: boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutBookingInput, RoomUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateOneWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type RoomCreateWithoutBuildingInput = {
    name: string
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedManyWithoutRoomInput
    roomToFacility?: roomToFacilityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBuildingInput = {
    id?: number
    name: string
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutRoomInput
    roomToFacility?: roomToFacilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBuildingInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBuildingInput, RoomUncheckedCreateWithoutBuildingInput>
  }

  export type RoomCreateManyBuildingInputEnvelope = {
    data: Enumerable<RoomCreateManyBuildingInput>
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutBuildingInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutBuildingInput, RoomUncheckedUpdateWithoutBuildingInput>
    create: XOR<RoomCreateWithoutBuildingInput, RoomUncheckedCreateWithoutBuildingInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutBuildingInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutBuildingInput, RoomUncheckedUpdateWithoutBuildingInput>
  }

  export type RoomUpdateManyWithWhereWithoutBuildingInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomScalarWhereInput = {
    AND?: Enumerable<RoomScalarWhereInput>
    OR?: Enumerable<RoomScalarWhereInput>
    NOT?: Enumerable<RoomScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    buildingId?: IntFilter | number
    floor?: StringFilter | string
    capacityMax?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type roomToFacilityCreateWithoutFacilityInput = {
    room: RoomCreateNestedOneWithoutRoomToFacilityInput
  }

  export type roomToFacilityUncheckedCreateWithoutFacilityInput = {
    id?: number
    roomId: number
  }

  export type roomToFacilityCreateOrConnectWithoutFacilityInput = {
    where: roomToFacilityWhereUniqueInput
    create: XOR<roomToFacilityCreateWithoutFacilityInput, roomToFacilityUncheckedCreateWithoutFacilityInput>
  }

  export type roomToFacilityCreateManyFacilityInputEnvelope = {
    data: Enumerable<roomToFacilityCreateManyFacilityInput>
    skipDuplicates?: boolean
  }

  export type roomToFacilityUpsertWithWhereUniqueWithoutFacilityInput = {
    where: roomToFacilityWhereUniqueInput
    update: XOR<roomToFacilityUpdateWithoutFacilityInput, roomToFacilityUncheckedUpdateWithoutFacilityInput>
    create: XOR<roomToFacilityCreateWithoutFacilityInput, roomToFacilityUncheckedCreateWithoutFacilityInput>
  }

  export type roomToFacilityUpdateWithWhereUniqueWithoutFacilityInput = {
    where: roomToFacilityWhereUniqueInput
    data: XOR<roomToFacilityUpdateWithoutFacilityInput, roomToFacilityUncheckedUpdateWithoutFacilityInput>
  }

  export type roomToFacilityUpdateManyWithWhereWithoutFacilityInput = {
    where: roomToFacilityScalarWhereInput
    data: XOR<roomToFacilityUpdateManyMutationInput, roomToFacilityUncheckedUpdateManyWithoutRoomToFacilityInput>
  }

  export type roomToFacilityScalarWhereInput = {
    AND?: Enumerable<roomToFacilityScalarWhereInput>
    OR?: Enumerable<roomToFacilityScalarWhereInput>
    NOT?: Enumerable<roomToFacilityScalarWhereInput>
    id?: IntFilter | number
    roomId?: IntFilter | number
    facilityId?: IntFilter | number
  }

  export type BuildingCreateWithoutRoomInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUncheckedCreateWithoutRoomInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingCreateOrConnectWithoutRoomInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutRoomInput, BuildingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateWithoutRoomInput = {
    startDatetime: Date | string
    endDatetime: Date | string
    user?: UserCreateNestedOneWithoutBookingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutRoomInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateManyRoomInputEnvelope = {
    data: Enumerable<BookingCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type roomToFacilityCreateWithoutRoomInput = {
    facility: FacilityCreateNestedOneWithoutRoomToFacilityInput
  }

  export type roomToFacilityUncheckedCreateWithoutRoomInput = {
    id?: number
    facilityId: number
  }

  export type roomToFacilityCreateOrConnectWithoutRoomInput = {
    where: roomToFacilityWhereUniqueInput
    create: XOR<roomToFacilityCreateWithoutRoomInput, roomToFacilityUncheckedCreateWithoutRoomInput>
  }

  export type roomToFacilityCreateManyRoomInputEnvelope = {
    data: Enumerable<roomToFacilityCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type BuildingUpsertWithoutRoomInput = {
    update: XOR<BuildingUpdateWithoutRoomInput, BuildingUncheckedUpdateWithoutRoomInput>
    create: XOR<BuildingCreateWithoutRoomInput, BuildingUncheckedCreateWithoutRoomInput>
  }

  export type BuildingUpdateWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingScalarWhereInput = {
    AND?: Enumerable<BookingScalarWhereInput>
    OR?: Enumerable<BookingScalarWhereInput>
    NOT?: Enumerable<BookingScalarWhereInput>
    id?: IntFilter | number
    startDatetime?: DateTimeFilter | Date | string
    endDatetime?: DateTimeFilter | Date | string
    roomId?: IntFilter | number
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type roomToFacilityUpsertWithWhereUniqueWithoutRoomInput = {
    where: roomToFacilityWhereUniqueInput
    update: XOR<roomToFacilityUpdateWithoutRoomInput, roomToFacilityUncheckedUpdateWithoutRoomInput>
    create: XOR<roomToFacilityCreateWithoutRoomInput, roomToFacilityUncheckedCreateWithoutRoomInput>
  }

  export type roomToFacilityUpdateWithWhereUniqueWithoutRoomInput = {
    where: roomToFacilityWhereUniqueInput
    data: XOR<roomToFacilityUpdateWithoutRoomInput, roomToFacilityUncheckedUpdateWithoutRoomInput>
  }

  export type roomToFacilityUpdateManyWithWhereWithoutRoomInput = {
    where: roomToFacilityScalarWhereInput
    data: XOR<roomToFacilityUpdateManyMutationInput, roomToFacilityUncheckedUpdateManyWithoutRoomToFacilityInput>
  }

  export type RoomCreateWithoutRoomToFacilityInput = {
    name: string
    building?: BuildingCreateNestedOneWithoutRoomInput
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomToFacilityInput = {
    id?: number
    name: string
    buildingId: number
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomToFacilityInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomToFacilityInput, RoomUncheckedCreateWithoutRoomToFacilityInput>
  }

  export type FacilityCreateWithoutRoomToFacilityInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityUncheckedCreateWithoutRoomToFacilityInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityCreateOrConnectWithoutRoomToFacilityInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutRoomToFacilityInput, FacilityUncheckedCreateWithoutRoomToFacilityInput>
  }

  export type RoomUpsertWithoutRoomToFacilityInput = {
    update: XOR<RoomUpdateWithoutRoomToFacilityInput, RoomUncheckedUpdateWithoutRoomToFacilityInput>
    create: XOR<RoomCreateWithoutRoomToFacilityInput, RoomUncheckedCreateWithoutRoomToFacilityInput>
  }

  export type RoomUpdateWithoutRoomToFacilityInput = {
    name?: StringFieldUpdateOperationsInput | string
    building?: BuildingUpdateOneWithoutRoomNestedInput
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomToFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type FacilityUpsertWithoutRoomToFacilityInput = {
    update: XOR<FacilityUpdateWithoutRoomToFacilityInput, FacilityUncheckedUpdateWithoutRoomToFacilityInput>
    create: XOR<FacilityCreateWithoutRoomToFacilityInput, FacilityUncheckedCreateWithoutRoomToFacilityInput>
  }

  export type FacilityUpdateWithoutRoomToFacilityInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateWithoutRoomToFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutUserInput = {
    startDatetime: Date | string
    endDatetime: Date | string
    room?: RoomCreateNestedOneWithoutBookingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: Enumerable<BookingCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type RoomCreateWithoutBookingInput = {
    name: string
    building?: BuildingCreateNestedOneWithoutRoomInput
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roomToFacility?: roomToFacilityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingInput = {
    id?: number
    name: string
    buildingId: number
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roomToFacility?: roomToFacilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingInput, RoomUncheckedCreateWithoutBookingInput>
  }

  export type UserCreateWithoutBookingInput = {
    officerId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    userName: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: number
    officerId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    userName: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type RoomUpsertWithoutBookingInput = {
    update: XOR<RoomUpdateWithoutBookingInput, RoomUncheckedUpdateWithoutBookingInput>
    create: XOR<RoomCreateWithoutBookingInput, RoomUncheckedCreateWithoutBookingInput>
  }

  export type RoomUpdateWithoutBookingInput = {
    name?: StringFieldUpdateOperationsInput | string
    building?: BuildingUpdateOneWithoutRoomNestedInput
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomToFacility?: roomToFacilityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    buildingId?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomToFacility?: roomToFacilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    officerId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    officerId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyBuildingInput = {
    id?: number
    name: string
    floor: string
    capacityMax: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutBuildingInput = {
    name?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutRoomNestedInput
    roomToFacility?: roomToFacilityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBuildingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    roomToFacility?: roomToFacilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    capacityMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomToFacilityCreateManyFacilityInput = {
    id?: number
    roomId: number
  }

  export type roomToFacilityUpdateWithoutFacilityInput = {
    room?: RoomUpdateOneRequiredWithoutRoomToFacilityNestedInput
  }

  export type roomToFacilityUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type roomToFacilityUncheckedUpdateManyWithoutRoomToFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyRoomInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type roomToFacilityCreateManyRoomInput = {
    id?: number
    facilityId: number
  }

  export type BookingUpdateWithoutRoomInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutBookingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomToFacilityUpdateWithoutRoomInput = {
    facility?: FacilityUpdateOneRequiredWithoutRoomToFacilityNestedInput
  }

  export type roomToFacilityUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyUserInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    roomId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutBookingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
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