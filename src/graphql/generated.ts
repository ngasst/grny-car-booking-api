import type { GraphQLResolveInfo } from "graphql";
import type { MercuriusContext } from "mercurius";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import("mercurius-codegen").DeepPartial<TResult>>
  | import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Booking = {
  __typename?: "Booking";
  id: Scalars["ID"];
  kind?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["String"]>;
  end?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  car?: Maybe<Car>;
  status?: Maybe<Scalars["String"]>;
  office?: Maybe<Office>;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Car = {
  __typename?: "Car";
  id: Scalars["ID"];
  model?: Maybe<Scalars["String"]>;
  make?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  year?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<Scalars["String"]>>>;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars["Int"]>;
  size?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
};

export type BookingFilterInput = {
  officeId?: InputMaybe<Scalars["String"]>;
  carId?: InputMaybe<Scalars["ID"]>;
  userId?: InputMaybe<Scalars["ID"]>;
  startDate?: InputMaybe<Scalars["String"]>;
  endDate?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  kind?: InputMaybe<Scalars["String"]>;
  age?: InputMaybe<Scalars["Int"]>;
};

export type BookingsApiResult = {
  __typename?: "BookingsApiResult";
  bookings?: Maybe<Array<Maybe<Booking>>>;
  total?: Maybe<Scalars["Int"]>;
  ok?: Maybe<Scalars["Boolean"]>;
  error?: Maybe<Scalars["String"]>;
};

export type BookingApiResult = {
  __typename?: "BookingApiResult";
  booking?: Maybe<Booking>;
  ok?: Maybe<Scalars["Boolean"]>;
  error?: Maybe<Scalars["String"]>;
};

export type OfficesApiResult = {
  __typename?: "OfficesApiResult";
  offices?: Maybe<Array<Maybe<Office>>>;
  ok?: Maybe<Scalars["Boolean"]>;
  total?: Maybe<Scalars["Int"]>;
  error?: Maybe<Scalars["String"]>;
};

export type OfficeApiResult = {
  __typename?: "OfficeApiResult";
  office?: Maybe<Office>;
  ok?: Maybe<Scalars["Boolean"]>;
  error?: Maybe<Scalars["String"]>;
};

export type CarsApiResult = {
  __typename?: "CarsApiResult";
  cars?: Maybe<Array<Maybe<Car>>>;
  ok?: Maybe<Scalars["Boolean"]>;
  total?: Maybe<Scalars["Int"]>;
  error?: Maybe<Scalars["String"]>;
};

export type CarApiResult = {
  __typename?: "CarApiResult";
  car?: Maybe<Car>;
  ok?: Maybe<Scalars["Boolean"]>;
  error?: Maybe<Scalars["String"]>;
};

export type UsersApiResult = {
  __typename?: "UsersApiResult";
  users?: Maybe<Array<Maybe<User>>>;
  ok?: Maybe<Scalars["Boolean"]>;
  total?: Maybe<Scalars["Int"]>;
  error?: Maybe<Scalars["String"]>;
};

export type UserApiResult = {
  __typename?: "UserApiResult";
  user?: Maybe<User>;
  ok?: Maybe<Scalars["Boolean"]>;
  error?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  makeReservation?: Maybe<Booking>;
  updateBooking?: Maybe<Booking>;
  deleteBooking?: Maybe<Booking>;
};

export type MutationmakeReservationArgs = {
  kind?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["String"]>;
  end?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["ID"]>;
  car?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<Scalars["String"]>;
  office?: InputMaybe<Scalars["ID"]>;
};

export type MutationupdateBookingArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  kind?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["String"]>;
  end?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["ID"]>;
  car?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<Scalars["String"]>;
  office?: InputMaybe<Scalars["ID"]>;
};

export type MutationdeleteBookingArgs = {
  id: Scalars["ID"];
};

export type Office = {
  __typename?: "Office";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  bookings?: Maybe<BookingsApiResult>;
  booking?: Maybe<BookingApiResult>;
  me?: Maybe<UserApiResult>;
  offices?: Maybe<OfficesApiResult>;
  office?: Maybe<OfficeApiResult>;
  cars?: Maybe<CarsApiResult>;
  car?: Maybe<CarApiResult>;
};

export type QuerybookingsArgs = {
  filter?: InputMaybe<BookingFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerybookingArgs = {
  id: Scalars["ID"];
};

export type QueryofficesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryofficeArgs = {
  id: Scalars["ID"];
};

export type QuerycarsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerycarArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Booking: ResolverTypeWrapper<Booking>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Car: ResolverTypeWrapper<Car>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  PaginationInput: PaginationInput;
  BookingFilterInput: BookingFilterInput;
  BookingsApiResult: ResolverTypeWrapper<BookingsApiResult>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  BookingApiResult: ResolverTypeWrapper<BookingApiResult>;
  OfficesApiResult: ResolverTypeWrapper<OfficesApiResult>;
  OfficeApiResult: ResolverTypeWrapper<OfficeApiResult>;
  CarsApiResult: ResolverTypeWrapper<CarsApiResult>;
  CarApiResult: ResolverTypeWrapper<CarApiResult>;
  UsersApiResult: ResolverTypeWrapper<UsersApiResult>;
  UserApiResult: ResolverTypeWrapper<UserApiResult>;
  Mutation: ResolverTypeWrapper<{}>;
  Office: ResolverTypeWrapper<Office>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Booking: Booking;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Car: Car;
  Int: Scalars["Int"];
  PaginationInput: PaginationInput;
  BookingFilterInput: BookingFilterInput;
  BookingsApiResult: BookingsApiResult;
  Boolean: Scalars["Boolean"];
  BookingApiResult: BookingApiResult;
  OfficesApiResult: OfficesApiResult;
  OfficeApiResult: OfficeApiResult;
  CarsApiResult: CarsApiResult;
  CarApiResult: CarApiResult;
  UsersApiResult: UsersApiResult;
  UserApiResult: UserApiResult;
  Mutation: {};
  Office: Office;
  Float: Scalars["Float"];
  Query: {};
  User: User;
};

export type BookingResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Booking"] = ResolversParentTypes["Booking"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  car?: Resolver<Maybe<ResolversTypes["Car"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes["Office"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Car"] = ResolversParentTypes["Car"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  make?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  images?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingsApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["BookingsApiResult"] = ResolversParentTypes["BookingsApiResult"]
> = {
  bookings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Booking"]>>>,
    ParentType,
    ContextType
  >;
  total?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["BookingApiResult"] = ResolversParentTypes["BookingApiResult"]
> = {
  booking?: Resolver<Maybe<ResolversTypes["Booking"]>, ParentType, ContextType>;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficesApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["OfficesApiResult"] = ResolversParentTypes["OfficesApiResult"]
> = {
  offices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Office"]>>>,
    ParentType,
    ContextType
  >;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["OfficeApiResult"] = ResolversParentTypes["OfficeApiResult"]
> = {
  office?: Resolver<Maybe<ResolversTypes["Office"]>, ParentType, ContextType>;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarsApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["CarsApiResult"] = ResolversParentTypes["CarsApiResult"]
> = {
  cars?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Car"]>>>,
    ParentType,
    ContextType
  >;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["CarApiResult"] = ResolversParentTypes["CarApiResult"]
> = {
  car?: Resolver<Maybe<ResolversTypes["Car"]>, ParentType, ContextType>;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["UsersApiResult"] = ResolversParentTypes["UsersApiResult"]
> = {
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserApiResultResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["UserApiResult"] = ResolversParentTypes["UserApiResult"]
> = {
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  ok?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  makeReservation?: Resolver<
    Maybe<ResolversTypes["Booking"]>,
    ParentType,
    ContextType,
    Partial<MutationmakeReservationArgs>
  >;
  updateBooking?: Resolver<
    Maybe<ResolversTypes["Booking"]>,
    ParentType,
    ContextType,
    Partial<MutationupdateBookingArgs>
  >;
  deleteBooking?: Resolver<
    Maybe<ResolversTypes["Booking"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteBookingArgs, "id">
  >;
};

export type OfficeResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Office"] = ResolversParentTypes["Office"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  latitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  bookings?: Resolver<
    Maybe<ResolversTypes["BookingsApiResult"]>,
    ParentType,
    ContextType,
    Partial<QuerybookingsArgs>
  >;
  booking?: Resolver<
    Maybe<ResolversTypes["BookingApiResult"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybookingArgs, "id">
  >;
  me?: Resolver<
    Maybe<ResolversTypes["UserApiResult"]>,
    ParentType,
    ContextType
  >;
  offices?: Resolver<
    Maybe<ResolversTypes["OfficesApiResult"]>,
    ParentType,
    ContextType,
    Partial<QueryofficesArgs>
  >;
  office?: Resolver<
    Maybe<ResolversTypes["OfficeApiResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryofficeArgs, "id">
  >;
  cars?: Resolver<
    Maybe<ResolversTypes["CarsApiResult"]>,
    ParentType,
    ContextType,
    Partial<QuerycarsArgs>
  >;
  car?: Resolver<
    Maybe<ResolversTypes["CarApiResult"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycarArgs, "id">
  >;
};

export type UserResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Booking?: BookingResolvers<ContextType>;
  Car?: CarResolvers<ContextType>;
  BookingsApiResult?: BookingsApiResultResolvers<ContextType>;
  BookingApiResult?: BookingApiResultResolvers<ContextType>;
  OfficesApiResult?: OfficesApiResultResolvers<ContextType>;
  OfficeApiResult?: OfficeApiResultResolvers<ContextType>;
  CarsApiResult?: CarsApiResultResolvers<ContextType>;
  CarApiResult?: CarApiResultResolvers<ContextType>;
  UsersApiResult?: UsersApiResultResolvers<ContextType>;
  UserApiResult?: UserApiResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Office?: OfficeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import("fastify").FastifyReply;
  }
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import("mercurius").MercuriusContext & {
    reply: import("fastify").FastifyReply;
  }
> {
  Booking?: {
    id?: LoaderResolver<Scalars["ID"], Booking, {}, TContext>;
    kind?: LoaderResolver<Maybe<Scalars["String"]>, Booking, {}, TContext>;
    start?: LoaderResolver<Maybe<Scalars["String"]>, Booking, {}, TContext>;
    end?: LoaderResolver<Maybe<Scalars["String"]>, Booking, {}, TContext>;
    user?: LoaderResolver<Maybe<User>, Booking, {}, TContext>;
    car?: LoaderResolver<Maybe<Car>, Booking, {}, TContext>;
    status?: LoaderResolver<Maybe<Scalars["String"]>, Booking, {}, TContext>;
    office?: LoaderResolver<Maybe<Office>, Booking, {}, TContext>;
    createdAt?: LoaderResolver<Maybe<Scalars["String"]>, Booking, {}, TContext>;
    updatedAt?: LoaderResolver<Maybe<Scalars["String"]>, Booking, {}, TContext>;
  };

  Car?: {
    id?: LoaderResolver<Scalars["ID"], Car, {}, TContext>;
    model?: LoaderResolver<Maybe<Scalars["String"]>, Car, {}, TContext>;
    make?: LoaderResolver<Maybe<Scalars["String"]>, Car, {}, TContext>;
    color?: LoaderResolver<Maybe<Scalars["String"]>, Car, {}, TContext>;
    year?: LoaderResolver<Maybe<Scalars["Int"]>, Car, {}, TContext>;
    price?: LoaderResolver<Maybe<Scalars["Int"]>, Car, {}, TContext>;
    description?: LoaderResolver<Maybe<Scalars["String"]>, Car, {}, TContext>;
    images?: LoaderResolver<
      Maybe<Array<Maybe<Scalars["String"]>>>,
      Car,
      {},
      TContext
    >;
    createdAt?: LoaderResolver<Maybe<Scalars["String"]>, Car, {}, TContext>;
    updatedAt?: LoaderResolver<Maybe<Scalars["String"]>, Car, {}, TContext>;
  };

  BookingsApiResult?: {
    bookings?: LoaderResolver<
      Maybe<Array<Maybe<Booking>>>,
      BookingsApiResult,
      {},
      TContext
    >;
    total?: LoaderResolver<
      Maybe<Scalars["Int"]>,
      BookingsApiResult,
      {},
      TContext
    >;
    ok?: LoaderResolver<
      Maybe<Scalars["Boolean"]>,
      BookingsApiResult,
      {},
      TContext
    >;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      BookingsApiResult,
      {},
      TContext
    >;
  };

  BookingApiResult?: {
    booking?: LoaderResolver<Maybe<Booking>, BookingApiResult, {}, TContext>;
    ok?: LoaderResolver<
      Maybe<Scalars["Boolean"]>,
      BookingApiResult,
      {},
      TContext
    >;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      BookingApiResult,
      {},
      TContext
    >;
  };

  OfficesApiResult?: {
    offices?: LoaderResolver<
      Maybe<Array<Maybe<Office>>>,
      OfficesApiResult,
      {},
      TContext
    >;
    ok?: LoaderResolver<
      Maybe<Scalars["Boolean"]>,
      OfficesApiResult,
      {},
      TContext
    >;
    total?: LoaderResolver<
      Maybe<Scalars["Int"]>,
      OfficesApiResult,
      {},
      TContext
    >;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      OfficesApiResult,
      {},
      TContext
    >;
  };

  OfficeApiResult?: {
    office?: LoaderResolver<Maybe<Office>, OfficeApiResult, {}, TContext>;
    ok?: LoaderResolver<
      Maybe<Scalars["Boolean"]>,
      OfficeApiResult,
      {},
      TContext
    >;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      OfficeApiResult,
      {},
      TContext
    >;
  };

  CarsApiResult?: {
    cars?: LoaderResolver<
      Maybe<Array<Maybe<Car>>>,
      CarsApiResult,
      {},
      TContext
    >;
    ok?: LoaderResolver<Maybe<Scalars["Boolean"]>, CarsApiResult, {}, TContext>;
    total?: LoaderResolver<Maybe<Scalars["Int"]>, CarsApiResult, {}, TContext>;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      CarsApiResult,
      {},
      TContext
    >;
  };

  CarApiResult?: {
    car?: LoaderResolver<Maybe<Car>, CarApiResult, {}, TContext>;
    ok?: LoaderResolver<Maybe<Scalars["Boolean"]>, CarApiResult, {}, TContext>;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      CarApiResult,
      {},
      TContext
    >;
  };

  UsersApiResult?: {
    users?: LoaderResolver<
      Maybe<Array<Maybe<User>>>,
      UsersApiResult,
      {},
      TContext
    >;
    ok?: LoaderResolver<
      Maybe<Scalars["Boolean"]>,
      UsersApiResult,
      {},
      TContext
    >;
    total?: LoaderResolver<Maybe<Scalars["Int"]>, UsersApiResult, {}, TContext>;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      UsersApiResult,
      {},
      TContext
    >;
  };

  UserApiResult?: {
    user?: LoaderResolver<Maybe<User>, UserApiResult, {}, TContext>;
    ok?: LoaderResolver<Maybe<Scalars["Boolean"]>, UserApiResult, {}, TContext>;
    error?: LoaderResolver<
      Maybe<Scalars["String"]>,
      UserApiResult,
      {},
      TContext
    >;
  };

  Office?: {
    id?: LoaderResolver<Scalars["ID"], Office, {}, TContext>;
    name?: LoaderResolver<Maybe<Scalars["String"]>, Office, {}, TContext>;
    address?: LoaderResolver<Maybe<Scalars["String"]>, Office, {}, TContext>;
    phone?: LoaderResolver<Maybe<Scalars["String"]>, Office, {}, TContext>;
    email?: LoaderResolver<Maybe<Scalars["String"]>, Office, {}, TContext>;
    images?: LoaderResolver<
      Maybe<Array<Maybe<Scalars["String"]>>>,
      Office,
      {},
      TContext
    >;
    description?: LoaderResolver<
      Maybe<Scalars["String"]>,
      Office,
      {},
      TContext
    >;
    latitude?: LoaderResolver<Maybe<Scalars["Float"]>, Office, {}, TContext>;
    longitude?: LoaderResolver<Maybe<Scalars["Float"]>, Office, {}, TContext>;
    createdAt?: LoaderResolver<Maybe<Scalars["String"]>, Office, {}, TContext>;
    updatedAt?: LoaderResolver<Maybe<Scalars["String"]>, Office, {}, TContext>;
  };

  User?: {
    id?: LoaderResolver<Scalars["ID"], User, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], User, {}, TContext>;
    email?: LoaderResolver<Scalars["String"], User, {}, TContext>;
    createdAt?: LoaderResolver<Maybe<Scalars["String"]>, User, {}, TContext>;
    updatedAt?: LoaderResolver<Maybe<Scalars["String"]>, User, {}, TContext>;
  };
}
export type bookingsQueryVariables = Exact<{
  filter?: InputMaybe<BookingFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type bookingsQuery = {
  __typename?: "Query";
  bookings?: {
    __typename?: "BookingsApiResult";
    total?: number | null;
    error?: string | null;
    ok?: boolean | null;
    bookings?: Array<{
      __typename?: "Booking";
      id: string;
      kind?: string | null;
      start?: string | null;
      end?: string | null;
      status?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        email: string;
      } | null;
      car?: {
        __typename?: "Car";
        id: string;
        model?: string | null;
        color?: string | null;
      } | null;
      office?: {
        __typename?: "Office";
        id: string;
        name?: string | null;
        latitude?: number | null;
        longitude?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type bookingQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type bookingQuery = {
  __typename?: "Query";
  booking?: {
    __typename?: "BookingApiResult";
    error?: string | null;
    ok?: boolean | null;
    booking?: {
      __typename?: "Booking";
      id: string;
      kind?: string | null;
      start?: string | null;
      end?: string | null;
      status?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      user?: {
        __typename?: "User";
        id: string;
        name: string;
        email: string;
      } | null;
      car?: {
        __typename?: "Car";
        id: string;
        model?: string | null;
        color?: string | null;
      } | null;
      office?: {
        __typename?: "Office";
        id: string;
        name?: string | null;
        latitude?: number | null;
        longitude?: number | null;
      } | null;
    } | null;
  } | null;
};

export type carsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;

export type carsQuery = {
  __typename?: "Query";
  cars?: {
    __typename?: "CarsApiResult";
    total?: number | null;
    ok?: boolean | null;
    error?: string | null;
    cars?: Array<{
      __typename?: "Car";
      id: string;
      price?: number | null;
      make?: string | null;
      model?: string | null;
      year?: number | null;
      color?: string | null;
      description?: string | null;
      images?: Array<string | null> | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null> | null;
  } | null;
};

export type officesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;

export type officesQuery = {
  __typename?: "Query";
  offices?: {
    __typename?: "OfficesApiResult";
    total?: number | null;
    ok?: boolean | null;
    error?: string | null;
    offices?: Array<{
      __typename?: "Office";
      id: string;
      name?: string | null;
      description?: string | null;
      address?: string | null;
      phone?: string | null;
      email?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null> | null;
  } | null;
};

export type meQueryVariables = Exact<{ [key: string]: never }>;

export type meQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UserApiResult";
    error?: string | null;
    ok?: boolean | null;
    user?: {
      __typename?: "User";
      id: string;
      name: string;
      email: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
  } | null;
};

export const bookingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "bookings" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "BookingFilterInput" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PaginationInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bookings" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                { kind: "Field", name: { kind: "Name", value: "error" } },
                { kind: "Field", name: { kind: "Name", value: "ok" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bookings" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "kind" } },
                      { kind: "Field", name: { kind: "Name", value: "start" } },
                      { kind: "Field", name: { kind: "Name", value: "end" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "car" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "color" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "office" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "latitude" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "longitude" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<bookingsQuery, bookingsQueryVariables>;
export const bookingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "booking" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "booking" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "booking" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "kind" } },
                      { kind: "Field", name: { kind: "Name", value: "start" } },
                      { kind: "Field", name: { kind: "Name", value: "end" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "car" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "color" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "office" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "latitude" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "longitude" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "error" } },
                { kind: "Field", name: { kind: "Name", value: "ok" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<bookingQuery, bookingQueryVariables>;
export const carsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cars" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PaginationInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cars" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cars" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      { kind: "Field", name: { kind: "Name", value: "make" } },
                      { kind: "Field", name: { kind: "Name", value: "model" } },
                      { kind: "Field", name: { kind: "Name", value: "year" } },
                      { kind: "Field", name: { kind: "Name", value: "color" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "images" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "total" } },
                { kind: "Field", name: { kind: "Name", value: "ok" } },
                { kind: "Field", name: { kind: "Name", value: "error" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<carsQuery, carsQueryVariables>;
export const officesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "offices" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PaginationInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "offices" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "offices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "phone" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "total" } },
                { kind: "Field", name: { kind: "Name", value: "ok" } },
                { kind: "Field", name: { kind: "Name", value: "error" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<officesQuery, officesQueryVariables>;
export const meDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "error" } },
                { kind: "Field", name: { kind: "Name", value: "ok" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<meQuery, meQueryVariables>;
declare module "mercurius" {
  interface IResolvers
    extends Resolvers<import("mercurius").MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
