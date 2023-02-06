export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};

export type AddCrewToBucket = {
  __typename?: 'AddCrewToBucket';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  bucketIndex: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type AddCrewToBucket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddCrewToBucket_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex_lt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_lte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<AddCrewToBucket_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AddCrewToBucket_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  bucketIndex = 'bucketIndex',
  crewId = 'crewId',
  id = 'id',
  transactionHash = 'transactionHash'
}

export type AddItemToInventory = {
  __typename?: 'AddItemToInventory';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemId: Scalars['BigInt'];
  itemIndexInInventory: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AddItemToInventory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddItemToInventory_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemId?: InputMaybe<Scalars['BigInt']>;
  itemId_gt?: InputMaybe<Scalars['BigInt']>;
  itemId_gte?: InputMaybe<Scalars['BigInt']>;
  itemId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemId_lt?: InputMaybe<Scalars['BigInt']>;
  itemId_lte?: InputMaybe<Scalars['BigInt']>;
  itemId_not?: InputMaybe<Scalars['BigInt']>;
  itemId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemIndexInInventory?: InputMaybe<Scalars['BigInt']>;
  itemIndexInInventory_gt?: InputMaybe<Scalars['BigInt']>;
  itemIndexInInventory_gte?: InputMaybe<Scalars['BigInt']>;
  itemIndexInInventory_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemIndexInInventory_lt?: InputMaybe<Scalars['BigInt']>;
  itemIndexInInventory_lte?: InputMaybe<Scalars['BigInt']>;
  itemIndexInInventory_not?: InputMaybe<Scalars['BigInt']>;
  itemIndexInInventory_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<AddItemToInventory_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AddItemToInventory_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  itemId = 'itemId',
  itemIndexInInventory = 'itemIndexInInventory',
  transactionHash = 'transactionHash'
}

export type AddRoboToCrew = {
  __typename?: 'AddRoboToCrew';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  roboId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AddRoboToCrew_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddRoboToCrew_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<AddRoboToCrew_Filter>>>;
  roboId?: InputMaybe<Scalars['BigInt']>;
  roboId_gt?: InputMaybe<Scalars['BigInt']>;
  roboId_gte?: InputMaybe<Scalars['BigInt']>;
  roboId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roboId_lt?: InputMaybe<Scalars['BigInt']>;
  roboId_lte?: InputMaybe<Scalars['BigInt']>;
  roboId_not?: InputMaybe<Scalars['BigInt']>;
  roboId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AddRoboToCrew_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  roboId = 'roboId',
  transactionHash = 'transactionHash'
}

export type Approval = {
  __typename?: 'Approval';
  approved: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll = {
  __typename?: 'ApprovalForAll';
  approved: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ApprovalForAll_OrderBy {
  approved = 'approved',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  operator = 'operator',
  owner = 'owner',
  transactionHash = 'transactionHash'
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  approved?: InputMaybe<Scalars['Bytes']>;
  approved_contains?: InputMaybe<Scalars['Bytes']>;
  approved_gt?: InputMaybe<Scalars['Bytes']>;
  approved_gte?: InputMaybe<Scalars['Bytes']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_lt?: InputMaybe<Scalars['Bytes']>;
  approved_lte?: InputMaybe<Scalars['Bytes']>;
  approved_not?: InputMaybe<Scalars['Bytes']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Approval_OrderBy {
  approved = 'approved',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  owner = 'owner',
  tokenId = 'tokenId',
  transactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BoxInitialized = {
  __typename?: 'BoxInitialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type BoxInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BoxInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<BoxInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum BoxInitialized_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  transactionHash = 'transactionHash',
  version = 'version'
}

export type BoxOpened = {
  __typename?: 'BoxOpened';
  NTWon: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemsWon: Array<Scalars['BigInt']>;
  newSlotState: Scalars['Int'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type BoxOpened_Filter = {
  NTWon?: InputMaybe<Scalars['BigInt']>;
  NTWon_gt?: InputMaybe<Scalars['BigInt']>;
  NTWon_gte?: InputMaybe<Scalars['BigInt']>;
  NTWon_in?: InputMaybe<Array<Scalars['BigInt']>>;
  NTWon_lt?: InputMaybe<Scalars['BigInt']>;
  NTWon_lte?: InputMaybe<Scalars['BigInt']>;
  NTWon_not?: InputMaybe<Scalars['BigInt']>;
  NTWon_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BoxOpened_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemsWon?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_not?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  newSlotState?: InputMaybe<Scalars['Int']>;
  newSlotState_gt?: InputMaybe<Scalars['Int']>;
  newSlotState_gte?: InputMaybe<Scalars['Int']>;
  newSlotState_in?: InputMaybe<Array<Scalars['Int']>>;
  newSlotState_lt?: InputMaybe<Scalars['Int']>;
  newSlotState_lte?: InputMaybe<Scalars['Int']>;
  newSlotState_not?: InputMaybe<Scalars['Int']>;
  newSlotState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<BoxOpened_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BoxOpened_OrderBy {
  NTWon = 'NTWon',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  itemsWon = 'itemsWon',
  newSlotState = 'newSlotState',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

export type BoxRoleAdminChanged = {
  __typename?: 'BoxRoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type BoxRoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BoxRoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<BoxRoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BoxRoleAdminChanged_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newAdminRole = 'newAdminRole',
  previousAdminRole = 'previousAdminRole',
  role = 'role',
  transactionHash = 'transactionHash'
}

export type BoxRoleGranted = {
  __typename?: 'BoxRoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type BoxRoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<BoxRoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<BoxRoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BoxRoleGranted_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type BoxRoleRevoked = {
  __typename?: 'BoxRoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type BoxRoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<BoxRoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<BoxRoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BoxRoleRevoked_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type BoxSlot = {
  __typename?: 'BoxSlot';
  babyOogaCharge?: Maybe<Scalars['BigInt']>;
  box_createdAt?: Maybe<Scalars['BigInt']>;
  box_level?: Maybe<Scalars['BigInt']>;
  box_rarity?: Maybe<Scalars['Int']>;
  crew?: Maybe<Crew>;
  id: Scalars['String'];
  index?: Maybe<Scalars['BigInt']>;
  stakedBabyOoga?: Maybe<Ooga>;
  state?: Maybe<Scalars['Int']>;
};

export type BoxSlot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BoxSlot_Filter>>>;
  babyOogaCharge?: InputMaybe<Scalars['BigInt']>;
  babyOogaCharge_gt?: InputMaybe<Scalars['BigInt']>;
  babyOogaCharge_gte?: InputMaybe<Scalars['BigInt']>;
  babyOogaCharge_in?: InputMaybe<Array<Scalars['BigInt']>>;
  babyOogaCharge_lt?: InputMaybe<Scalars['BigInt']>;
  babyOogaCharge_lte?: InputMaybe<Scalars['BigInt']>;
  babyOogaCharge_not?: InputMaybe<Scalars['BigInt']>;
  babyOogaCharge_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_createdAt?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_not?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_level?: InputMaybe<Scalars['BigInt']>;
  box_level_gt?: InputMaybe<Scalars['BigInt']>;
  box_level_gte?: InputMaybe<Scalars['BigInt']>;
  box_level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_level_lt?: InputMaybe<Scalars['BigInt']>;
  box_level_lte?: InputMaybe<Scalars['BigInt']>;
  box_level_not?: InputMaybe<Scalars['BigInt']>;
  box_level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_rarity?: InputMaybe<Scalars['Int']>;
  box_rarity_gt?: InputMaybe<Scalars['Int']>;
  box_rarity_gte?: InputMaybe<Scalars['Int']>;
  box_rarity_in?: InputMaybe<Array<Scalars['Int']>>;
  box_rarity_lt?: InputMaybe<Scalars['Int']>;
  box_rarity_lte?: InputMaybe<Scalars['Int']>;
  box_rarity_not?: InputMaybe<Scalars['Int']>;
  box_rarity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  crew?: InputMaybe<Scalars['String']>;
  crew_?: InputMaybe<Crew_Filter>;
  crew_contains?: InputMaybe<Scalars['String']>;
  crew_contains_nocase?: InputMaybe<Scalars['String']>;
  crew_ends_with?: InputMaybe<Scalars['String']>;
  crew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  crew_gt?: InputMaybe<Scalars['String']>;
  crew_gte?: InputMaybe<Scalars['String']>;
  crew_in?: InputMaybe<Array<Scalars['String']>>;
  crew_lt?: InputMaybe<Scalars['String']>;
  crew_lte?: InputMaybe<Scalars['String']>;
  crew_not?: InputMaybe<Scalars['String']>;
  crew_not_contains?: InputMaybe<Scalars['String']>;
  crew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  crew_not_ends_with?: InputMaybe<Scalars['String']>;
  crew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  crew_not_in?: InputMaybe<Array<Scalars['String']>>;
  crew_not_starts_with?: InputMaybe<Scalars['String']>;
  crew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  crew_starts_with?: InputMaybe<Scalars['String']>;
  crew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<BoxSlot_Filter>>>;
  stakedBabyOoga?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_?: InputMaybe<Ooga_Filter>;
  stakedBabyOoga_contains?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_contains_nocase?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_ends_with?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_gt?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_gte?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_in?: InputMaybe<Array<Scalars['String']>>;
  stakedBabyOoga_lt?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_lte?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not_contains?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not_ends_with?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not_in?: InputMaybe<Array<Scalars['String']>>;
  stakedBabyOoga_not_starts_with?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_starts_with?: InputMaybe<Scalars['String']>;
  stakedBabyOoga_starts_with_nocase?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['Int']>;
  state_gt?: InputMaybe<Scalars['Int']>;
  state_gte?: InputMaybe<Scalars['Int']>;
  state_in?: InputMaybe<Array<Scalars['Int']>>;
  state_lt?: InputMaybe<Scalars['Int']>;
  state_lte?: InputMaybe<Scalars['Int']>;
  state_not?: InputMaybe<Scalars['Int']>;
  state_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum BoxSlot_OrderBy {
  babyOogaCharge = 'babyOogaCharge',
  box_createdAt = 'box_createdAt',
  box_level = 'box_level',
  box_rarity = 'box_rarity',
  crew = 'crew',
  id = 'id',
  index = 'index',
  stakedBabyOoga = 'stakedBabyOoga',
  state = 'state'
}

export type BoxUpgraded = {
  __typename?: 'BoxUpgraded';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newRarity: Scalars['Int'];
  newSlotState: Scalars['Int'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type BoxUpgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BoxUpgraded_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newRarity?: InputMaybe<Scalars['Int']>;
  newRarity_gt?: InputMaybe<Scalars['Int']>;
  newRarity_gte?: InputMaybe<Scalars['Int']>;
  newRarity_in?: InputMaybe<Array<Scalars['Int']>>;
  newRarity_lt?: InputMaybe<Scalars['Int']>;
  newRarity_lte?: InputMaybe<Scalars['Int']>;
  newRarity_not?: InputMaybe<Scalars['Int']>;
  newRarity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  newSlotState?: InputMaybe<Scalars['Int']>;
  newSlotState_gt?: InputMaybe<Scalars['Int']>;
  newSlotState_gte?: InputMaybe<Scalars['Int']>;
  newSlotState_in?: InputMaybe<Array<Scalars['Int']>>;
  newSlotState_lt?: InputMaybe<Scalars['Int']>;
  newSlotState_lte?: InputMaybe<Scalars['Int']>;
  newSlotState_not?: InputMaybe<Scalars['Int']>;
  newSlotState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<BoxUpgraded_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BoxUpgraded_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newRarity = 'newRarity',
  newSlotState = 'newSlotState',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

export type Bucket = {
  __typename?: 'Bucket';
  createdAt?: Maybe<Scalars['BigInt']>;
  crewIds?: Maybe<Array<CrewInBucket>>;
  id: Scalars['String'];
  randomSeed?: Maybe<Scalars['BigInt']>;
  resolvedMatches: Array<Match>;
  state?: Maybe<Scalars['Int']>;
};


export type BucketCrewIdsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewInBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CrewInBucket_Filter>;
};


export type BucketResolvedMatchesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Match_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Match_Filter>;
};

export type Bucket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bucket_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewIds?: InputMaybe<Array<Scalars['String']>>;
  crewIds_?: InputMaybe<CrewInBucket_Filter>;
  crewIds_contains?: InputMaybe<Array<Scalars['String']>>;
  crewIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  crewIds_not?: InputMaybe<Array<Scalars['String']>>;
  crewIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  crewIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Bucket_Filter>>>;
  randomSeed?: InputMaybe<Scalars['BigInt']>;
  randomSeed_gt?: InputMaybe<Scalars['BigInt']>;
  randomSeed_gte?: InputMaybe<Scalars['BigInt']>;
  randomSeed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  randomSeed_lt?: InputMaybe<Scalars['BigInt']>;
  randomSeed_lte?: InputMaybe<Scalars['BigInt']>;
  randomSeed_not?: InputMaybe<Scalars['BigInt']>;
  randomSeed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolvedMatches_?: InputMaybe<Match_Filter>;
  state?: InputMaybe<Scalars['Int']>;
  state_gt?: InputMaybe<Scalars['Int']>;
  state_gte?: InputMaybe<Scalars['Int']>;
  state_in?: InputMaybe<Array<Scalars['Int']>>;
  state_lt?: InputMaybe<Scalars['Int']>;
  state_lte?: InputMaybe<Scalars['Int']>;
  state_not?: InputMaybe<Scalars['Int']>;
  state_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Bucket_OrderBy {
  createdAt = 'createdAt',
  crewIds = 'crewIds',
  id = 'id',
  randomSeed = 'randomSeed',
  resolvedMatches = 'resolvedMatches',
  state = 'state'
}

export type BuyMysteryBox = {
  __typename?: 'BuyMysteryBox';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  level: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type BuyMysteryBox_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BuyMysteryBox_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  level?: InputMaybe<Scalars['BigInt']>;
  level_gt?: InputMaybe<Scalars['BigInt']>;
  level_gte?: InputMaybe<Scalars['BigInt']>;
  level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  level_lt?: InputMaybe<Scalars['BigInt']>;
  level_lte?: InputMaybe<Scalars['BigInt']>;
  level_not?: InputMaybe<Scalars['BigInt']>;
  level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<BuyMysteryBox_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BuyMysteryBox_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  level = 'level',
  transactionHash = 'transactionHash'
}

export type ChangeBucketState = {
  __typename?: 'ChangeBucketState';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  bucketIndex: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newBucketState: Scalars['Int'];
  transactionHash: Scalars['Bytes'];
};

export type ChangeBucketState_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChangeBucketState_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex_lt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_lte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newBucketState?: InputMaybe<Scalars['Int']>;
  newBucketState_gt?: InputMaybe<Scalars['Int']>;
  newBucketState_gte?: InputMaybe<Scalars['Int']>;
  newBucketState_in?: InputMaybe<Array<Scalars['Int']>>;
  newBucketState_lt?: InputMaybe<Scalars['Int']>;
  newBucketState_lte?: InputMaybe<Scalars['Int']>;
  newBucketState_not?: InputMaybe<Scalars['Int']>;
  newBucketState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<ChangeBucketState_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ChangeBucketState_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  bucketIndex = 'bucketIndex',
  id = 'id',
  newBucketState = 'newBucketState',
  transactionHash = 'transactionHash'
}

export type ContractParameter = {
  __typename?: 'ContractParameter';
  box_babyOogaChargeNeededForUpgrade?: Maybe<Scalars['BigInt']>;
  box_boxWaitingTime?: Maybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice?: Maybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount?: Maybe<Scalars['BigInt']>;
  crews_crewStartDurability?: Maybe<Scalars['BigInt']>;
  id: Scalars['String'];
  matchmaking_durabilityDecrease?: Maybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize?: Maybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff?: Maybe<Scalars['BigInt']>;
  matchmaking_minBucketSize?: Maybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset?: Maybe<Scalars['BigInt']>;
};

export type ContractParameter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContractParameter_Filter>>>;
  box_babyOogaChargeNeededForUpgrade?: InputMaybe<Scalars['BigInt']>;
  box_babyOogaChargeNeededForUpgrade_gt?: InputMaybe<Scalars['BigInt']>;
  box_babyOogaChargeNeededForUpgrade_gte?: InputMaybe<Scalars['BigInt']>;
  box_babyOogaChargeNeededForUpgrade_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_babyOogaChargeNeededForUpgrade_lt?: InputMaybe<Scalars['BigInt']>;
  box_babyOogaChargeNeededForUpgrade_lte?: InputMaybe<Scalars['BigInt']>;
  box_babyOogaChargeNeededForUpgrade_not?: InputMaybe<Scalars['BigInt']>;
  box_babyOogaChargeNeededForUpgrade_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_boxWaitingTime?: InputMaybe<Scalars['BigInt']>;
  box_boxWaitingTime_gt?: InputMaybe<Scalars['BigInt']>;
  box_boxWaitingTime_gte?: InputMaybe<Scalars['BigInt']>;
  box_boxWaitingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_boxWaitingTime_lt?: InputMaybe<Scalars['BigInt']>;
  box_boxWaitingTime_lte?: InputMaybe<Scalars['BigInt']>;
  box_boxWaitingTime_not?: InputMaybe<Scalars['BigInt']>;
  box_boxWaitingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_instantOpenBoxPrice?: InputMaybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice_gt?: InputMaybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice_gte?: InputMaybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_instantOpenBoxPrice_lt?: InputMaybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice_lte?: InputMaybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice_not?: InputMaybe<Scalars['BigInt']>;
  box_instantOpenBoxPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crews_burnInventoryItemNTAmount?: InputMaybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount_gt?: InputMaybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount_gte?: InputMaybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crews_burnInventoryItemNTAmount_lt?: InputMaybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount_lte?: InputMaybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount_not?: InputMaybe<Scalars['BigInt']>;
  crews_burnInventoryItemNTAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crews_crewStartDurability?: InputMaybe<Scalars['BigInt']>;
  crews_crewStartDurability_gt?: InputMaybe<Scalars['BigInt']>;
  crews_crewStartDurability_gte?: InputMaybe<Scalars['BigInt']>;
  crews_crewStartDurability_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crews_crewStartDurability_lt?: InputMaybe<Scalars['BigInt']>;
  crews_crewStartDurability_lte?: InputMaybe<Scalars['BigInt']>;
  crews_crewStartDurability_not?: InputMaybe<Scalars['BigInt']>;
  crews_crewStartDurability_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  matchmaking_durabilityDecrease?: InputMaybe<Scalars['BigInt']>;
  matchmaking_durabilityDecrease_gt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_durabilityDecrease_gte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_durabilityDecrease_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_durabilityDecrease_lt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_durabilityDecrease_lte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_durabilityDecrease_not?: InputMaybe<Scalars['BigInt']>;
  matchmaking_durabilityDecrease_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_maxBucketSize?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize_gt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize_gte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_maxBucketSize_lt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize_lte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize_not?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxBucketSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_maxRatingDiff?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff_gt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff_gte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_maxRatingDiff_lt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff_lte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff_not?: InputMaybe<Scalars['BigInt']>;
  matchmaking_maxRatingDiff_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_minBucketSize?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minBucketSize_gt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minBucketSize_gte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minBucketSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_minBucketSize_lt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minBucketSize_lte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minBucketSize_not?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minBucketSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_minTimeOffset?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset_gt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset_gte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset_in?: InputMaybe<Array<Scalars['BigInt']>>;
  matchmaking_minTimeOffset_lt?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset_lte?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset_not?: InputMaybe<Scalars['BigInt']>;
  matchmaking_minTimeOffset_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ContractParameter_Filter>>>;
};

export enum ContractParameter_OrderBy {
  box_babyOogaChargeNeededForUpgrade = 'box_babyOogaChargeNeededForUpgrade',
  box_boxWaitingTime = 'box_boxWaitingTime',
  box_instantOpenBoxPrice = 'box_instantOpenBoxPrice',
  crews_burnInventoryItemNTAmount = 'crews_burnInventoryItemNTAmount',
  crews_crewStartDurability = 'crews_crewStartDurability',
  id = 'id',
  matchmaking_durabilityDecrease = 'matchmaking_durabilityDecrease',
  matchmaking_maxBucketSize = 'matchmaking_maxBucketSize',
  matchmaking_maxRatingDiff = 'matchmaking_maxRatingDiff',
  matchmaking_minBucketSize = 'matchmaking_minBucketSize',
  matchmaking_minTimeOffset = 'matchmaking_minTimeOffset'
}

export type Crew = {
  __typename?: 'Crew';
  active: Scalars['Boolean'];
  boxSlots: Array<BoxSlot>;
  currentlyInBucket?: Maybe<Bucket>;
  durability: Scalars['BigInt'];
  firstTeam: Array<Ooga>;
  id: Scalars['String'];
  inventory?: Maybe<Array<InventoryItem>>;
  level?: Maybe<Scalars['BigInt']>;
  mekaLeader: Ooga;
  ntAmount?: Maybe<Scalars['BigInt']>;
  oogasInCrew?: Maybe<Array<Ooga>>;
  owner: User;
  rating: Scalars['BigInt'];
};


export type CrewBoxSlotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxSlot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxSlot_Filter>;
};


export type CrewFirstTeamArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ooga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ooga_Filter>;
};


export type CrewInventoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InventoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryItem_Filter>;
};


export type CrewOogasInCrewArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ooga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ooga_Filter>;
};

export type CrewInBucket = {
  __typename?: 'CrewInBucket';
  bucket?: Maybe<Bucket>;
  crew?: Maybe<Crew>;
  firstTeam: Array<Ooga>;
  id: Scalars['String'];
};


export type CrewInBucketFirstTeamArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ooga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ooga_Filter>;
};

export type CrewInBucket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CrewInBucket_Filter>>>;
  bucket?: InputMaybe<Scalars['String']>;
  bucket_?: InputMaybe<Bucket_Filter>;
  bucket_contains?: InputMaybe<Scalars['String']>;
  bucket_contains_nocase?: InputMaybe<Scalars['String']>;
  bucket_ends_with?: InputMaybe<Scalars['String']>;
  bucket_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bucket_gt?: InputMaybe<Scalars['String']>;
  bucket_gte?: InputMaybe<Scalars['String']>;
  bucket_in?: InputMaybe<Array<Scalars['String']>>;
  bucket_lt?: InputMaybe<Scalars['String']>;
  bucket_lte?: InputMaybe<Scalars['String']>;
  bucket_not?: InputMaybe<Scalars['String']>;
  bucket_not_contains?: InputMaybe<Scalars['String']>;
  bucket_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bucket_not_ends_with?: InputMaybe<Scalars['String']>;
  bucket_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bucket_not_in?: InputMaybe<Array<Scalars['String']>>;
  bucket_not_starts_with?: InputMaybe<Scalars['String']>;
  bucket_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bucket_starts_with?: InputMaybe<Scalars['String']>;
  bucket_starts_with_nocase?: InputMaybe<Scalars['String']>;
  crew?: InputMaybe<Scalars['String']>;
  crew_?: InputMaybe<Crew_Filter>;
  crew_contains?: InputMaybe<Scalars['String']>;
  crew_contains_nocase?: InputMaybe<Scalars['String']>;
  crew_ends_with?: InputMaybe<Scalars['String']>;
  crew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  crew_gt?: InputMaybe<Scalars['String']>;
  crew_gte?: InputMaybe<Scalars['String']>;
  crew_in?: InputMaybe<Array<Scalars['String']>>;
  crew_lt?: InputMaybe<Scalars['String']>;
  crew_lte?: InputMaybe<Scalars['String']>;
  crew_not?: InputMaybe<Scalars['String']>;
  crew_not_contains?: InputMaybe<Scalars['String']>;
  crew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  crew_not_ends_with?: InputMaybe<Scalars['String']>;
  crew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  crew_not_in?: InputMaybe<Array<Scalars['String']>>;
  crew_not_starts_with?: InputMaybe<Scalars['String']>;
  crew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  crew_starts_with?: InputMaybe<Scalars['String']>;
  crew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstTeam?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_?: InputMaybe<Ooga_Filter>;
  firstTeam_contains?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_not?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_not_contains?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<CrewInBucket_Filter>>>;
};

export enum CrewInBucket_OrderBy {
  bucket = 'bucket',
  crew = 'crew',
  firstTeam = 'firstTeam',
  id = 'id'
}

export type Crew_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  and?: InputMaybe<Array<InputMaybe<Crew_Filter>>>;
  boxSlots_?: InputMaybe<BoxSlot_Filter>;
  currentlyInBucket?: InputMaybe<Scalars['String']>;
  currentlyInBucket_?: InputMaybe<Bucket_Filter>;
  currentlyInBucket_contains?: InputMaybe<Scalars['String']>;
  currentlyInBucket_contains_nocase?: InputMaybe<Scalars['String']>;
  currentlyInBucket_ends_with?: InputMaybe<Scalars['String']>;
  currentlyInBucket_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentlyInBucket_gt?: InputMaybe<Scalars['String']>;
  currentlyInBucket_gte?: InputMaybe<Scalars['String']>;
  currentlyInBucket_in?: InputMaybe<Array<Scalars['String']>>;
  currentlyInBucket_lt?: InputMaybe<Scalars['String']>;
  currentlyInBucket_lte?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not_contains?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not_ends_with?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentlyInBucket_not_starts_with?: InputMaybe<Scalars['String']>;
  currentlyInBucket_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentlyInBucket_starts_with?: InputMaybe<Scalars['String']>;
  currentlyInBucket_starts_with_nocase?: InputMaybe<Scalars['String']>;
  durability?: InputMaybe<Scalars['BigInt']>;
  durability_gt?: InputMaybe<Scalars['BigInt']>;
  durability_gte?: InputMaybe<Scalars['BigInt']>;
  durability_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durability_lt?: InputMaybe<Scalars['BigInt']>;
  durability_lte?: InputMaybe<Scalars['BigInt']>;
  durability_not?: InputMaybe<Scalars['BigInt']>;
  durability_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  firstTeam?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_?: InputMaybe<Ooga_Filter>;
  firstTeam_contains?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_not?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_not_contains?: InputMaybe<Array<Scalars['String']>>;
  firstTeam_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inventory_?: InputMaybe<InventoryItem_Filter>;
  level?: InputMaybe<Scalars['BigInt']>;
  level_gt?: InputMaybe<Scalars['BigInt']>;
  level_gte?: InputMaybe<Scalars['BigInt']>;
  level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  level_lt?: InputMaybe<Scalars['BigInt']>;
  level_lte?: InputMaybe<Scalars['BigInt']>;
  level_not?: InputMaybe<Scalars['BigInt']>;
  level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mekaLeader?: InputMaybe<Scalars['String']>;
  mekaLeader_?: InputMaybe<Ooga_Filter>;
  mekaLeader_contains?: InputMaybe<Scalars['String']>;
  mekaLeader_contains_nocase?: InputMaybe<Scalars['String']>;
  mekaLeader_ends_with?: InputMaybe<Scalars['String']>;
  mekaLeader_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mekaLeader_gt?: InputMaybe<Scalars['String']>;
  mekaLeader_gte?: InputMaybe<Scalars['String']>;
  mekaLeader_in?: InputMaybe<Array<Scalars['String']>>;
  mekaLeader_lt?: InputMaybe<Scalars['String']>;
  mekaLeader_lte?: InputMaybe<Scalars['String']>;
  mekaLeader_not?: InputMaybe<Scalars['String']>;
  mekaLeader_not_contains?: InputMaybe<Scalars['String']>;
  mekaLeader_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mekaLeader_not_ends_with?: InputMaybe<Scalars['String']>;
  mekaLeader_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mekaLeader_not_in?: InputMaybe<Array<Scalars['String']>>;
  mekaLeader_not_starts_with?: InputMaybe<Scalars['String']>;
  mekaLeader_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mekaLeader_starts_with?: InputMaybe<Scalars['String']>;
  mekaLeader_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ntAmount?: InputMaybe<Scalars['BigInt']>;
  ntAmount_gt?: InputMaybe<Scalars['BigInt']>;
  ntAmount_gte?: InputMaybe<Scalars['BigInt']>;
  ntAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ntAmount_lt?: InputMaybe<Scalars['BigInt']>;
  ntAmount_lte?: InputMaybe<Scalars['BigInt']>;
  ntAmount_not?: InputMaybe<Scalars['BigInt']>;
  ntAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogasInCrew_?: InputMaybe<Ooga_Filter>;
  or?: InputMaybe<Array<InputMaybe<Crew_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['BigInt']>;
  rating_gt?: InputMaybe<Scalars['BigInt']>;
  rating_gte?: InputMaybe<Scalars['BigInt']>;
  rating_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rating_lt?: InputMaybe<Scalars['BigInt']>;
  rating_lte?: InputMaybe<Scalars['BigInt']>;
  rating_not?: InputMaybe<Scalars['BigInt']>;
  rating_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Crew_OrderBy {
  active = 'active',
  boxSlots = 'boxSlots',
  currentlyInBucket = 'currentlyInBucket',
  durability = 'durability',
  firstTeam = 'firstTeam',
  id = 'id',
  inventory = 'inventory',
  level = 'level',
  mekaLeader = 'mekaLeader',
  ntAmount = 'ntAmount',
  oogasInCrew = 'oogasInCrew',
  owner = 'owner',
  rating = 'rating'
}

export type CrewsInitialized = {
  __typename?: 'CrewsInitialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type CrewsInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CrewsInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<CrewsInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum CrewsInitialized_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  transactionHash = 'transactionHash',
  version = 'version'
}

export type CrewsRoleAdminChanged = {
  __typename?: 'CrewsRoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type CrewsRoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CrewsRoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<CrewsRoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CrewsRoleAdminChanged_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newAdminRole = 'newAdminRole',
  previousAdminRole = 'previousAdminRole',
  role = 'role',
  transactionHash = 'transactionHash'
}

export type CrewsRoleGranted = {
  __typename?: 'CrewsRoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type CrewsRoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<CrewsRoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<CrewsRoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CrewsRoleGranted_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type CrewsRoleRevoked = {
  __typename?: 'CrewsRoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type CrewsRoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<CrewsRoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<CrewsRoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CrewsRoleRevoked_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type DeleteItemToInventory = {
  __typename?: 'DeleteItemToInventory';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type DeleteItemToInventory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DeleteItemToInventory_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemIndex?: InputMaybe<Scalars['BigInt']>;
  itemIndex_gt?: InputMaybe<Scalars['BigInt']>;
  itemIndex_gte?: InputMaybe<Scalars['BigInt']>;
  itemIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemIndex_lt?: InputMaybe<Scalars['BigInt']>;
  itemIndex_lte?: InputMaybe<Scalars['BigInt']>;
  itemIndex_not?: InputMaybe<Scalars['BigInt']>;
  itemIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<DeleteItemToInventory_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum DeleteItemToInventory_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  itemIndex = 'itemIndex',
  transactionHash = 'transactionHash'
}

export type DepositPouch = {
  __typename?: 'DepositPouch';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  pouchId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type DepositPouch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<DepositPouch_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<DepositPouch_Filter>>>;
  pouchId?: InputMaybe<Scalars['BigInt']>;
  pouchId_gt?: InputMaybe<Scalars['BigInt']>;
  pouchId_gte?: InputMaybe<Scalars['BigInt']>;
  pouchId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pouchId_lt?: InputMaybe<Scalars['BigInt']>;
  pouchId_lte?: InputMaybe<Scalars['BigInt']>;
  pouchId_not?: InputMaybe<Scalars['BigInt']>;
  pouchId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum DepositPouch_OrderBy {
  amount = 'amount',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  pouchId = 'pouchId',
  transactionHash = 'transactionHash'
}

export type DurabilityChange = {
  __typename?: 'DurabilityChange';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newDurability: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type DurabilityChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DurabilityChange_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newDurability?: InputMaybe<Scalars['BigInt']>;
  newDurability_gt?: InputMaybe<Scalars['BigInt']>;
  newDurability_gte?: InputMaybe<Scalars['BigInt']>;
  newDurability_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newDurability_lt?: InputMaybe<Scalars['BigInt']>;
  newDurability_lte?: InputMaybe<Scalars['BigInt']>;
  newDurability_not?: InputMaybe<Scalars['BigInt']>;
  newDurability_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<DurabilityChange_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum DurabilityChange_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newDurability = 'newDurability',
  transactionHash = 'transactionHash'
}

export type EquipItemToOoga = {
  __typename?: 'EquipItemToOoga';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemIndex: Scalars['BigInt'];
  oogaId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type EquipItemToOoga_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EquipItemToOoga_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemIndex?: InputMaybe<Scalars['BigInt']>;
  itemIndex_gt?: InputMaybe<Scalars['BigInt']>;
  itemIndex_gte?: InputMaybe<Scalars['BigInt']>;
  itemIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemIndex_lt?: InputMaybe<Scalars['BigInt']>;
  itemIndex_lte?: InputMaybe<Scalars['BigInt']>;
  itemIndex_not?: InputMaybe<Scalars['BigInt']>;
  itemIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId?: InputMaybe<Scalars['BigInt']>;
  oogaId_gt?: InputMaybe<Scalars['BigInt']>;
  oogaId_gte?: InputMaybe<Scalars['BigInt']>;
  oogaId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId_lt?: InputMaybe<Scalars['BigInt']>;
  oogaId_lte?: InputMaybe<Scalars['BigInt']>;
  oogaId_not?: InputMaybe<Scalars['BigInt']>;
  oogaId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<EquipItemToOoga_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum EquipItemToOoga_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  itemIndex = 'itemIndex',
  oogaId = 'oogaId',
  transactionHash = 'transactionHash'
}

export type EquipSpecialItem = {
  __typename?: 'EquipSpecialItem';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemIndex: Scalars['BigInt'];
  oogaId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type EquipSpecialItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EquipSpecialItem_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemIndex?: InputMaybe<Scalars['BigInt']>;
  itemIndex_gt?: InputMaybe<Scalars['BigInt']>;
  itemIndex_gte?: InputMaybe<Scalars['BigInt']>;
  itemIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemIndex_lt?: InputMaybe<Scalars['BigInt']>;
  itemIndex_lte?: InputMaybe<Scalars['BigInt']>;
  itemIndex_not?: InputMaybe<Scalars['BigInt']>;
  itemIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId?: InputMaybe<Scalars['BigInt']>;
  oogaId_gt?: InputMaybe<Scalars['BigInt']>;
  oogaId_gte?: InputMaybe<Scalars['BigInt']>;
  oogaId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId_lt?: InputMaybe<Scalars['BigInt']>;
  oogaId_lte?: InputMaybe<Scalars['BigInt']>;
  oogaId_not?: InputMaybe<Scalars['BigInt']>;
  oogaId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<EquipSpecialItem_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum EquipSpecialItem_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  itemIndex = 'itemIndex',
  oogaId = 'oogaId',
  transactionHash = 'transactionHash'
}

export type Initialized = {
  __typename?: 'Initialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type Initialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Initialized_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  transactionHash = 'transactionHash',
  version = 'version'
}

export type InventoryItem = {
  __typename?: 'InventoryItem';
  active: Scalars['Boolean'];
  attributes?: Maybe<Item>;
  charge?: Maybe<Scalars['BigInt']>;
  equipedToOoga?: Maybe<Ooga>;
  id: Scalars['String'];
  inCrew?: Maybe<Crew>;
  index: Scalars['Int'];
};

export type InventoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  and?: InputMaybe<Array<InputMaybe<InventoryItem_Filter>>>;
  attributes?: InputMaybe<Scalars['String']>;
  attributes_?: InputMaybe<Item_Filter>;
  attributes_contains?: InputMaybe<Scalars['String']>;
  attributes_contains_nocase?: InputMaybe<Scalars['String']>;
  attributes_ends_with?: InputMaybe<Scalars['String']>;
  attributes_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attributes_gt?: InputMaybe<Scalars['String']>;
  attributes_gte?: InputMaybe<Scalars['String']>;
  attributes_in?: InputMaybe<Array<Scalars['String']>>;
  attributes_lt?: InputMaybe<Scalars['String']>;
  attributes_lte?: InputMaybe<Scalars['String']>;
  attributes_not?: InputMaybe<Scalars['String']>;
  attributes_not_contains?: InputMaybe<Scalars['String']>;
  attributes_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attributes_not_ends_with?: InputMaybe<Scalars['String']>;
  attributes_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attributes_not_in?: InputMaybe<Array<Scalars['String']>>;
  attributes_not_starts_with?: InputMaybe<Scalars['String']>;
  attributes_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attributes_starts_with?: InputMaybe<Scalars['String']>;
  attributes_starts_with_nocase?: InputMaybe<Scalars['String']>;
  charge?: InputMaybe<Scalars['BigInt']>;
  charge_gt?: InputMaybe<Scalars['BigInt']>;
  charge_gte?: InputMaybe<Scalars['BigInt']>;
  charge_in?: InputMaybe<Array<Scalars['BigInt']>>;
  charge_lt?: InputMaybe<Scalars['BigInt']>;
  charge_lte?: InputMaybe<Scalars['BigInt']>;
  charge_not?: InputMaybe<Scalars['BigInt']>;
  charge_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equipedToOoga?: InputMaybe<Scalars['String']>;
  equipedToOoga_?: InputMaybe<Ooga_Filter>;
  equipedToOoga_contains?: InputMaybe<Scalars['String']>;
  equipedToOoga_contains_nocase?: InputMaybe<Scalars['String']>;
  equipedToOoga_ends_with?: InputMaybe<Scalars['String']>;
  equipedToOoga_ends_with_nocase?: InputMaybe<Scalars['String']>;
  equipedToOoga_gt?: InputMaybe<Scalars['String']>;
  equipedToOoga_gte?: InputMaybe<Scalars['String']>;
  equipedToOoga_in?: InputMaybe<Array<Scalars['String']>>;
  equipedToOoga_lt?: InputMaybe<Scalars['String']>;
  equipedToOoga_lte?: InputMaybe<Scalars['String']>;
  equipedToOoga_not?: InputMaybe<Scalars['String']>;
  equipedToOoga_not_contains?: InputMaybe<Scalars['String']>;
  equipedToOoga_not_contains_nocase?: InputMaybe<Scalars['String']>;
  equipedToOoga_not_ends_with?: InputMaybe<Scalars['String']>;
  equipedToOoga_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  equipedToOoga_not_in?: InputMaybe<Array<Scalars['String']>>;
  equipedToOoga_not_starts_with?: InputMaybe<Scalars['String']>;
  equipedToOoga_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  equipedToOoga_starts_with?: InputMaybe<Scalars['String']>;
  equipedToOoga_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew?: InputMaybe<Scalars['String']>;
  inCrew_?: InputMaybe<Crew_Filter>;
  inCrew_contains?: InputMaybe<Scalars['String']>;
  inCrew_contains_nocase?: InputMaybe<Scalars['String']>;
  inCrew_ends_with?: InputMaybe<Scalars['String']>;
  inCrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew_gt?: InputMaybe<Scalars['String']>;
  inCrew_gte?: InputMaybe<Scalars['String']>;
  inCrew_in?: InputMaybe<Array<Scalars['String']>>;
  inCrew_lt?: InputMaybe<Scalars['String']>;
  inCrew_lte?: InputMaybe<Scalars['String']>;
  inCrew_not?: InputMaybe<Scalars['String']>;
  inCrew_not_contains?: InputMaybe<Scalars['String']>;
  inCrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  inCrew_not_ends_with?: InputMaybe<Scalars['String']>;
  inCrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  inCrew_not_starts_with?: InputMaybe<Scalars['String']>;
  inCrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew_starts_with?: InputMaybe<Scalars['String']>;
  inCrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  index_gt?: InputMaybe<Scalars['Int']>;
  index_gte?: InputMaybe<Scalars['Int']>;
  index_in?: InputMaybe<Array<Scalars['Int']>>;
  index_lt?: InputMaybe<Scalars['Int']>;
  index_lte?: InputMaybe<Scalars['Int']>;
  index_not?: InputMaybe<Scalars['Int']>;
  index_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<InventoryItem_Filter>>>;
};

export enum InventoryItem_OrderBy {
  active = 'active',
  attributes = 'attributes',
  charge = 'charge',
  equipedToOoga = 'equipedToOoga',
  id = 'id',
  inCrew = 'inCrew',
  index = 'index'
}

export type Item = {
  __typename?: 'Item';
  abilities: Array<Maybe<Scalars['Int']>>;
  attack: Scalars['BigInt'];
  health: Scalars['BigInt'];
  id: Scalars['String'];
  itemType: Scalars['Int'];
  level: Scalars['BigInt'];
  season: Scalars['BigInt'];
  uri?: Maybe<Scalars['String']>;
};

export type Item_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  abilities?: InputMaybe<Array<Scalars['Int']>>;
  abilities_contains?: InputMaybe<Array<Scalars['Int']>>;
  abilities_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  abilities_not?: InputMaybe<Array<Scalars['Int']>>;
  abilities_not_contains?: InputMaybe<Array<Scalars['Int']>>;
  abilities_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  and?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  attack?: InputMaybe<Scalars['BigInt']>;
  attack_gt?: InputMaybe<Scalars['BigInt']>;
  attack_gte?: InputMaybe<Scalars['BigInt']>;
  attack_in?: InputMaybe<Array<Scalars['BigInt']>>;
  attack_lt?: InputMaybe<Scalars['BigInt']>;
  attack_lte?: InputMaybe<Scalars['BigInt']>;
  attack_not?: InputMaybe<Scalars['BigInt']>;
  attack_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  health?: InputMaybe<Scalars['BigInt']>;
  health_gt?: InputMaybe<Scalars['BigInt']>;
  health_gte?: InputMaybe<Scalars['BigInt']>;
  health_in?: InputMaybe<Array<Scalars['BigInt']>>;
  health_lt?: InputMaybe<Scalars['BigInt']>;
  health_lte?: InputMaybe<Scalars['BigInt']>;
  health_not?: InputMaybe<Scalars['BigInt']>;
  health_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  itemType?: InputMaybe<Scalars['Int']>;
  itemType_gt?: InputMaybe<Scalars['Int']>;
  itemType_gte?: InputMaybe<Scalars['Int']>;
  itemType_in?: InputMaybe<Array<Scalars['Int']>>;
  itemType_lt?: InputMaybe<Scalars['Int']>;
  itemType_lte?: InputMaybe<Scalars['Int']>;
  itemType_not?: InputMaybe<Scalars['Int']>;
  itemType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  level?: InputMaybe<Scalars['BigInt']>;
  level_gt?: InputMaybe<Scalars['BigInt']>;
  level_gte?: InputMaybe<Scalars['BigInt']>;
  level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  level_lt?: InputMaybe<Scalars['BigInt']>;
  level_lte?: InputMaybe<Scalars['BigInt']>;
  level_not?: InputMaybe<Scalars['BigInt']>;
  level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  season?: InputMaybe<Scalars['BigInt']>;
  season_gt?: InputMaybe<Scalars['BigInt']>;
  season_gte?: InputMaybe<Scalars['BigInt']>;
  season_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season_lt?: InputMaybe<Scalars['BigInt']>;
  season_lte?: InputMaybe<Scalars['BigInt']>;
  season_not?: InputMaybe<Scalars['BigInt']>;
  season_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Item_OrderBy {
  abilities = 'abilities',
  attack = 'attack',
  health = 'health',
  id = 'id',
  itemType = 'itemType',
  level = 'level',
  season = 'season',
  uri = 'uri'
}

export type LevelChange = {
  __typename?: 'LevelChange';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newLevel: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type LevelChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LevelChange_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newLevel?: InputMaybe<Scalars['BigInt']>;
  newLevel_gt?: InputMaybe<Scalars['BigInt']>;
  newLevel_gte?: InputMaybe<Scalars['BigInt']>;
  newLevel_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newLevel_lt?: InputMaybe<Scalars['BigInt']>;
  newLevel_lte?: InputMaybe<Scalars['BigInt']>;
  newLevel_not?: InputMaybe<Scalars['BigInt']>;
  newLevel_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<LevelChange_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum LevelChange_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newLevel = 'newLevel',
  transactionHash = 'transactionHash'
}

export type MakeNewCrew = {
  __typename?: 'MakeNewCrew';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  durability: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mekaApeId: Scalars['BigInt'];
  rating: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  user: Scalars['Bytes'];
};

export type MakeNewCrew_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MakeNewCrew_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durability?: InputMaybe<Scalars['BigInt']>;
  durability_gt?: InputMaybe<Scalars['BigInt']>;
  durability_gte?: InputMaybe<Scalars['BigInt']>;
  durability_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durability_lt?: InputMaybe<Scalars['BigInt']>;
  durability_lte?: InputMaybe<Scalars['BigInt']>;
  durability_not?: InputMaybe<Scalars['BigInt']>;
  durability_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mekaApeId?: InputMaybe<Scalars['BigInt']>;
  mekaApeId_gt?: InputMaybe<Scalars['BigInt']>;
  mekaApeId_gte?: InputMaybe<Scalars['BigInt']>;
  mekaApeId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mekaApeId_lt?: InputMaybe<Scalars['BigInt']>;
  mekaApeId_lte?: InputMaybe<Scalars['BigInt']>;
  mekaApeId_not?: InputMaybe<Scalars['BigInt']>;
  mekaApeId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<MakeNewCrew_Filter>>>;
  rating?: InputMaybe<Scalars['BigInt']>;
  rating_gt?: InputMaybe<Scalars['BigInt']>;
  rating_gte?: InputMaybe<Scalars['BigInt']>;
  rating_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rating_lt?: InputMaybe<Scalars['BigInt']>;
  rating_lte?: InputMaybe<Scalars['BigInt']>;
  rating_not?: InputMaybe<Scalars['BigInt']>;
  rating_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MakeNewCrew_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  durability = 'durability',
  id = 'id',
  mekaApeId = 'mekaApeId',
  rating = 'rating',
  transactionHash = 'transactionHash',
  user = 'user'
}

export type Match = {
  __typename?: 'Match';
  bucket?: Maybe<Bucket>;
  firstCrew?: Maybe<CrewInBucket>;
  id: Scalars['String'];
  secondCrew?: Maybe<CrewInBucket>;
  wonCrewId?: Maybe<Scalars['String']>;
};

export type Match_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Match_Filter>>>;
  bucket?: InputMaybe<Scalars['String']>;
  bucket_?: InputMaybe<Bucket_Filter>;
  bucket_contains?: InputMaybe<Scalars['String']>;
  bucket_contains_nocase?: InputMaybe<Scalars['String']>;
  bucket_ends_with?: InputMaybe<Scalars['String']>;
  bucket_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bucket_gt?: InputMaybe<Scalars['String']>;
  bucket_gte?: InputMaybe<Scalars['String']>;
  bucket_in?: InputMaybe<Array<Scalars['String']>>;
  bucket_lt?: InputMaybe<Scalars['String']>;
  bucket_lte?: InputMaybe<Scalars['String']>;
  bucket_not?: InputMaybe<Scalars['String']>;
  bucket_not_contains?: InputMaybe<Scalars['String']>;
  bucket_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bucket_not_ends_with?: InputMaybe<Scalars['String']>;
  bucket_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bucket_not_in?: InputMaybe<Array<Scalars['String']>>;
  bucket_not_starts_with?: InputMaybe<Scalars['String']>;
  bucket_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bucket_starts_with?: InputMaybe<Scalars['String']>;
  bucket_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstCrew?: InputMaybe<Scalars['String']>;
  firstCrew_?: InputMaybe<CrewInBucket_Filter>;
  firstCrew_contains?: InputMaybe<Scalars['String']>;
  firstCrew_contains_nocase?: InputMaybe<Scalars['String']>;
  firstCrew_ends_with?: InputMaybe<Scalars['String']>;
  firstCrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  firstCrew_gt?: InputMaybe<Scalars['String']>;
  firstCrew_gte?: InputMaybe<Scalars['String']>;
  firstCrew_in?: InputMaybe<Array<Scalars['String']>>;
  firstCrew_lt?: InputMaybe<Scalars['String']>;
  firstCrew_lte?: InputMaybe<Scalars['String']>;
  firstCrew_not?: InputMaybe<Scalars['String']>;
  firstCrew_not_contains?: InputMaybe<Scalars['String']>;
  firstCrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  firstCrew_not_ends_with?: InputMaybe<Scalars['String']>;
  firstCrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  firstCrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  firstCrew_not_starts_with?: InputMaybe<Scalars['String']>;
  firstCrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstCrew_starts_with?: InputMaybe<Scalars['String']>;
  firstCrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Match_Filter>>>;
  secondCrew?: InputMaybe<Scalars['String']>;
  secondCrew_?: InputMaybe<CrewInBucket_Filter>;
  secondCrew_contains?: InputMaybe<Scalars['String']>;
  secondCrew_contains_nocase?: InputMaybe<Scalars['String']>;
  secondCrew_ends_with?: InputMaybe<Scalars['String']>;
  secondCrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  secondCrew_gt?: InputMaybe<Scalars['String']>;
  secondCrew_gte?: InputMaybe<Scalars['String']>;
  secondCrew_in?: InputMaybe<Array<Scalars['String']>>;
  secondCrew_lt?: InputMaybe<Scalars['String']>;
  secondCrew_lte?: InputMaybe<Scalars['String']>;
  secondCrew_not?: InputMaybe<Scalars['String']>;
  secondCrew_not_contains?: InputMaybe<Scalars['String']>;
  secondCrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  secondCrew_not_ends_with?: InputMaybe<Scalars['String']>;
  secondCrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  secondCrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  secondCrew_not_starts_with?: InputMaybe<Scalars['String']>;
  secondCrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  secondCrew_starts_with?: InputMaybe<Scalars['String']>;
  secondCrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wonCrewId?: InputMaybe<Scalars['String']>;
  wonCrewId_contains?: InputMaybe<Scalars['String']>;
  wonCrewId_contains_nocase?: InputMaybe<Scalars['String']>;
  wonCrewId_ends_with?: InputMaybe<Scalars['String']>;
  wonCrewId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wonCrewId_gt?: InputMaybe<Scalars['String']>;
  wonCrewId_gte?: InputMaybe<Scalars['String']>;
  wonCrewId_in?: InputMaybe<Array<Scalars['String']>>;
  wonCrewId_lt?: InputMaybe<Scalars['String']>;
  wonCrewId_lte?: InputMaybe<Scalars['String']>;
  wonCrewId_not?: InputMaybe<Scalars['String']>;
  wonCrewId_not_contains?: InputMaybe<Scalars['String']>;
  wonCrewId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  wonCrewId_not_ends_with?: InputMaybe<Scalars['String']>;
  wonCrewId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wonCrewId_not_in?: InputMaybe<Array<Scalars['String']>>;
  wonCrewId_not_starts_with?: InputMaybe<Scalars['String']>;
  wonCrewId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wonCrewId_starts_with?: InputMaybe<Scalars['String']>;
  wonCrewId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Match_OrderBy {
  bucket = 'bucket',
  firstCrew = 'firstCrew',
  id = 'id',
  secondCrew = 'secondCrew',
  wonCrewId = 'wonCrewId'
}

export type MatchmakingInitialized = {
  __typename?: 'MatchmakingInitialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type MatchmakingInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MatchmakingInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MatchmakingInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum MatchmakingInitialized_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  transactionHash = 'transactionHash',
  version = 'version'
}

export type MatchmakingRoleAdminChanged = {
  __typename?: 'MatchmakingRoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MatchmakingRoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MatchmakingRoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MatchmakingRoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MatchmakingRoleAdminChanged_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newAdminRole = 'newAdminRole',
  previousAdminRole = 'previousAdminRole',
  role = 'role',
  transactionHash = 'transactionHash'
}

export type MatchmakingRoleGranted = {
  __typename?: 'MatchmakingRoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MatchmakingRoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<MatchmakingRoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MatchmakingRoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MatchmakingRoleGranted_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type MatchmakingRoleRevoked = {
  __typename?: 'MatchmakingRoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MatchmakingRoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<MatchmakingRoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MatchmakingRoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MatchmakingRoleRevoked_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type MekawarsItemsApprovalForAll = {
  __typename?: 'MekawarsItemsApprovalForAll';
  account: Scalars['Bytes'];
  approved: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MekawarsItemsApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<MekawarsItemsApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MekawarsItemsApprovalForAll_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MekawarsItemsApprovalForAll_OrderBy {
  account = 'account',
  approved = 'approved',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  operator = 'operator',
  transactionHash = 'transactionHash'
}

export type MekawarsItemsInitialized = {
  __typename?: 'MekawarsItemsInitialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type MekawarsItemsInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MekawarsItemsInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MekawarsItemsInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum MekawarsItemsInitialized_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  transactionHash = 'transactionHash',
  version = 'version'
}

export type MekawarsItemsRoleAdminChanged = {
  __typename?: 'MekawarsItemsRoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MekawarsItemsRoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MekawarsItemsRoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MekawarsItemsRoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MekawarsItemsRoleAdminChanged_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newAdminRole = 'newAdminRole',
  previousAdminRole = 'previousAdminRole',
  role = 'role',
  transactionHash = 'transactionHash'
}

export type MekawarsItemsRoleGranted = {
  __typename?: 'MekawarsItemsRoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MekawarsItemsRoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<MekawarsItemsRoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MekawarsItemsRoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MekawarsItemsRoleGranted_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type MekawarsItemsRoleRevoked = {
  __typename?: 'MekawarsItemsRoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MekawarsItemsRoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<MekawarsItemsRoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MekawarsItemsRoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MekawarsItemsRoleRevoked_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type MysteryBoxOpened = {
  __typename?: 'MysteryBoxOpened';
  NTWon: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemsWon: Array<Scalars['BigInt']>;
  level: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type MysteryBoxOpened_Filter = {
  NTWon?: InputMaybe<Scalars['BigInt']>;
  NTWon_gt?: InputMaybe<Scalars['BigInt']>;
  NTWon_gte?: InputMaybe<Scalars['BigInt']>;
  NTWon_in?: InputMaybe<Array<Scalars['BigInt']>>;
  NTWon_lt?: InputMaybe<Scalars['BigInt']>;
  NTWon_lte?: InputMaybe<Scalars['BigInt']>;
  NTWon_not?: InputMaybe<Scalars['BigInt']>;
  NTWon_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MysteryBoxOpened_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemsWon?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_not?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  itemsWon_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  level?: InputMaybe<Scalars['BigInt']>;
  level_gt?: InputMaybe<Scalars['BigInt']>;
  level_gte?: InputMaybe<Scalars['BigInt']>;
  level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  level_lt?: InputMaybe<Scalars['BigInt']>;
  level_lte?: InputMaybe<Scalars['BigInt']>;
  level_not?: InputMaybe<Scalars['BigInt']>;
  level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<MysteryBoxOpened_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MysteryBoxOpened_OrderBy {
  NTWon = 'NTWon',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  itemsWon = 'itemsWon',
  level = 'level',
  transactionHash = 'transactionHash'
}

export type NtChange = {
  __typename?: 'NTChange';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  change: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newNTamount: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type NtChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NtChange_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  change?: InputMaybe<Scalars['BigInt']>;
  change_gt?: InputMaybe<Scalars['BigInt']>;
  change_gte?: InputMaybe<Scalars['BigInt']>;
  change_in?: InputMaybe<Array<Scalars['BigInt']>>;
  change_lt?: InputMaybe<Scalars['BigInt']>;
  change_lte?: InputMaybe<Scalars['BigInt']>;
  change_not?: InputMaybe<Scalars['BigInt']>;
  change_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newNTamount?: InputMaybe<Scalars['BigInt']>;
  newNTamount_gt?: InputMaybe<Scalars['BigInt']>;
  newNTamount_gte?: InputMaybe<Scalars['BigInt']>;
  newNTamount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newNTamount_lt?: InputMaybe<Scalars['BigInt']>;
  newNTamount_lte?: InputMaybe<Scalars['BigInt']>;
  newNTamount_not?: InputMaybe<Scalars['BigInt']>;
  newNTamount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<NtChange_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NtChange_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  change = 'change',
  crewId = 'crewId',
  id = 'id',
  newNTamount = 'newNTamount',
  transactionHash = 'transactionHash'
}

export type NtPouch = {
  __typename?: 'NTPouch';
  active: Scalars['Boolean'];
  amount: Scalars['BigInt'];
  id: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

export type NtPouchApprovalForAll = {
  __typename?: 'NTPouchApprovalForAll';
  account: Scalars['Bytes'];
  approved: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type NtPouchApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<NtPouchApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchApprovalForAll_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NtPouchApprovalForAll_OrderBy {
  account = 'account',
  approved = 'approved',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  operator = 'operator',
  transactionHash = 'transactionHash'
}

export type NtPouchInitialized = {
  __typename?: 'NTPouchInitialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type NtPouchInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NtPouchInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum NtPouchInitialized_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  transactionHash = 'transactionHash',
  version = 'version'
}

export type NtPouchRoleAdminChanged = {
  __typename?: 'NTPouchRoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type NtPouchRoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NtPouchRoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchRoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NtPouchRoleAdminChanged_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newAdminRole = 'newAdminRole',
  previousAdminRole = 'previousAdminRole',
  role = 'role',
  transactionHash = 'transactionHash'
}

export type NtPouchRoleGranted = {
  __typename?: 'NTPouchRoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type NtPouchRoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<NtPouchRoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchRoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NtPouchRoleGranted_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type NtPouchRoleRevoked = {
  __typename?: 'NTPouchRoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type NtPouchRoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<NtPouchRoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchRoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NtPouchRoleRevoked_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type NtPouchTransferBatch = {
  __typename?: 'NTPouchTransferBatch';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['Bytes'];
  ids: Array<Scalars['BigInt']>;
  operator: Scalars['Bytes'];
  to: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  values: Array<Scalars['BigInt']>;
};

export type NtPouchTransferBatch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NtPouchTransferBatch_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ids?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchTransferBatch_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum NtPouchTransferBatch_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  from = 'from',
  id = 'id',
  ids = 'ids',
  operator = 'operator',
  to = 'to',
  transactionHash = 'transactionHash',
  values = 'values'
}

export type NtPouchTransferSingle = {
  __typename?: 'NTPouchTransferSingle';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type NtPouchTransferSingle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NtPouchTransferSingle_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchTransferSingle_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum NtPouchTransferSingle_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  from = 'from',
  id = 'id',
  operator = 'operator',
  to = 'to',
  tokenId = 'tokenId',
  transactionHash = 'transactionHash',
  value = 'value'
}

export type NtPouchUri = {
  __typename?: 'NTPouchURI';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['String'];
};

export type NtPouchUri_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NtPouchUri_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NtPouchUri_Filter>>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum NtPouchUri_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  tokenId = 'tokenId',
  transactionHash = 'transactionHash',
  value = 'value'
}

export type NtPouch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<NtPouch_Filter>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<NtPouch_Filter>>>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum NtPouch_OrderBy {
  active = 'active',
  amount = 'amount',
  id = 'id',
  uri = 'uri'
}

export type NewBucket = {
  __typename?: 'NewBucket';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  bucketIndex: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type NewBucket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewBucket_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex_lt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_lte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<NewBucket_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NewBucket_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  bucketIndex = 'bucketIndex',
  createdAt = 'createdAt',
  id = 'id',
  transactionHash = 'transactionHash'
}

export type NewFirstTeam = {
  __typename?: 'NewFirstTeam';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newFirstTeam: Array<Scalars['BigInt']>;
  transactionHash: Scalars['Bytes'];
};

export type NewFirstTeam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewFirstTeam_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newFirstTeam?: InputMaybe<Array<Scalars['BigInt']>>;
  newFirstTeam_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  newFirstTeam_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  newFirstTeam_not?: InputMaybe<Array<Scalars['BigInt']>>;
  newFirstTeam_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  newFirstTeam_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<NewFirstTeam_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NewFirstTeam_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newFirstTeam = 'newFirstTeam',
  transactionHash = 'transactionHash'
}

export type Ooga = {
  __typename?: 'Ooga';
  attack?: Maybe<Scalars['BigInt']>;
  health?: Maybe<Scalars['BigInt']>;
  id: Scalars['String'];
  inCrew?: Maybe<Crew>;
  level?: Maybe<Scalars['Int']>;
  oogaType?: Maybe<Scalars['Int']>;
  orderIndexInFirstTeam?: Maybe<Scalars['Int']>;
  owner?: Maybe<User>;
};

export type Ooga_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Ooga_Filter>>>;
  attack?: InputMaybe<Scalars['BigInt']>;
  attack_gt?: InputMaybe<Scalars['BigInt']>;
  attack_gte?: InputMaybe<Scalars['BigInt']>;
  attack_in?: InputMaybe<Array<Scalars['BigInt']>>;
  attack_lt?: InputMaybe<Scalars['BigInt']>;
  attack_lte?: InputMaybe<Scalars['BigInt']>;
  attack_not?: InputMaybe<Scalars['BigInt']>;
  attack_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  health?: InputMaybe<Scalars['BigInt']>;
  health_gt?: InputMaybe<Scalars['BigInt']>;
  health_gte?: InputMaybe<Scalars['BigInt']>;
  health_in?: InputMaybe<Array<Scalars['BigInt']>>;
  health_lt?: InputMaybe<Scalars['BigInt']>;
  health_lte?: InputMaybe<Scalars['BigInt']>;
  health_not?: InputMaybe<Scalars['BigInt']>;
  health_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew?: InputMaybe<Scalars['String']>;
  inCrew_?: InputMaybe<Crew_Filter>;
  inCrew_contains?: InputMaybe<Scalars['String']>;
  inCrew_contains_nocase?: InputMaybe<Scalars['String']>;
  inCrew_ends_with?: InputMaybe<Scalars['String']>;
  inCrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew_gt?: InputMaybe<Scalars['String']>;
  inCrew_gte?: InputMaybe<Scalars['String']>;
  inCrew_in?: InputMaybe<Array<Scalars['String']>>;
  inCrew_lt?: InputMaybe<Scalars['String']>;
  inCrew_lte?: InputMaybe<Scalars['String']>;
  inCrew_not?: InputMaybe<Scalars['String']>;
  inCrew_not_contains?: InputMaybe<Scalars['String']>;
  inCrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  inCrew_not_ends_with?: InputMaybe<Scalars['String']>;
  inCrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  inCrew_not_starts_with?: InputMaybe<Scalars['String']>;
  inCrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inCrew_starts_with?: InputMaybe<Scalars['String']>;
  inCrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  level_gt?: InputMaybe<Scalars['Int']>;
  level_gte?: InputMaybe<Scalars['Int']>;
  level_in?: InputMaybe<Array<Scalars['Int']>>;
  level_lt?: InputMaybe<Scalars['Int']>;
  level_lte?: InputMaybe<Scalars['Int']>;
  level_not?: InputMaybe<Scalars['Int']>;
  level_not_in?: InputMaybe<Array<Scalars['Int']>>;
  oogaType?: InputMaybe<Scalars['Int']>;
  oogaType_gt?: InputMaybe<Scalars['Int']>;
  oogaType_gte?: InputMaybe<Scalars['Int']>;
  oogaType_in?: InputMaybe<Array<Scalars['Int']>>;
  oogaType_lt?: InputMaybe<Scalars['Int']>;
  oogaType_lte?: InputMaybe<Scalars['Int']>;
  oogaType_not?: InputMaybe<Scalars['Int']>;
  oogaType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<Ooga_Filter>>>;
  orderIndexInFirstTeam?: InputMaybe<Scalars['Int']>;
  orderIndexInFirstTeam_gt?: InputMaybe<Scalars['Int']>;
  orderIndexInFirstTeam_gte?: InputMaybe<Scalars['Int']>;
  orderIndexInFirstTeam_in?: InputMaybe<Array<Scalars['Int']>>;
  orderIndexInFirstTeam_lt?: InputMaybe<Scalars['Int']>;
  orderIndexInFirstTeam_lte?: InputMaybe<Scalars['Int']>;
  orderIndexInFirstTeam_not?: InputMaybe<Scalars['Int']>;
  orderIndexInFirstTeam_not_in?: InputMaybe<Array<Scalars['Int']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Ooga_OrderBy {
  attack = 'attack',
  health = 'health',
  id = 'id',
  inCrew = 'inCrew',
  level = 'level',
  oogaType = 'oogaType',
  orderIndexInFirstTeam = 'orderIndexInFirstTeam',
  owner = 'owner'
}

export type OpenBox = {
  __typename?: 'OpenBox';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newSlotState: Scalars['Int'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type OpenBox_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OpenBox_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newSlotState?: InputMaybe<Scalars['Int']>;
  newSlotState_gt?: InputMaybe<Scalars['Int']>;
  newSlotState_gte?: InputMaybe<Scalars['Int']>;
  newSlotState_in?: InputMaybe<Array<Scalars['Int']>>;
  newSlotState_lt?: InputMaybe<Scalars['Int']>;
  newSlotState_lte?: InputMaybe<Scalars['Int']>;
  newSlotState_not?: InputMaybe<Scalars['Int']>;
  newSlotState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<OpenBox_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum OpenBox_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newSlotState = 'newSlotState',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addCrewToBucket?: Maybe<AddCrewToBucket>;
  addCrewToBuckets: Array<AddCrewToBucket>;
  addItemToInventories: Array<AddItemToInventory>;
  addItemToInventory?: Maybe<AddItemToInventory>;
  addRoboToCrew?: Maybe<AddRoboToCrew>;
  addRoboToCrews: Array<AddRoboToCrew>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  boxInitialized?: Maybe<BoxInitialized>;
  boxInitializeds: Array<BoxInitialized>;
  boxOpened?: Maybe<BoxOpened>;
  boxOpeneds: Array<BoxOpened>;
  boxRoleAdminChanged?: Maybe<BoxRoleAdminChanged>;
  boxRoleAdminChangeds: Array<BoxRoleAdminChanged>;
  boxRoleGranted?: Maybe<BoxRoleGranted>;
  boxRoleGranteds: Array<BoxRoleGranted>;
  boxRoleRevoked?: Maybe<BoxRoleRevoked>;
  boxRoleRevokeds: Array<BoxRoleRevoked>;
  boxSlot?: Maybe<BoxSlot>;
  boxSlots: Array<BoxSlot>;
  boxUpgraded?: Maybe<BoxUpgraded>;
  boxUpgradeds: Array<BoxUpgraded>;
  bucket?: Maybe<Bucket>;
  buckets: Array<Bucket>;
  buyMysteryBox?: Maybe<BuyMysteryBox>;
  buyMysteryBoxes: Array<BuyMysteryBox>;
  changeBucketState?: Maybe<ChangeBucketState>;
  changeBucketStates: Array<ChangeBucketState>;
  contractParameter?: Maybe<ContractParameter>;
  contractParameters: Array<ContractParameter>;
  crew?: Maybe<Crew>;
  crewInBucket?: Maybe<CrewInBucket>;
  crewInBuckets: Array<CrewInBucket>;
  crews: Array<Crew>;
  crewsInitialized?: Maybe<CrewsInitialized>;
  crewsInitializeds: Array<CrewsInitialized>;
  crewsRoleAdminChanged?: Maybe<CrewsRoleAdminChanged>;
  crewsRoleAdminChangeds: Array<CrewsRoleAdminChanged>;
  crewsRoleGranted?: Maybe<CrewsRoleGranted>;
  crewsRoleGranteds: Array<CrewsRoleGranted>;
  crewsRoleRevoked?: Maybe<CrewsRoleRevoked>;
  crewsRoleRevokeds: Array<CrewsRoleRevoked>;
  deleteItemToInventories: Array<DeleteItemToInventory>;
  deleteItemToInventory?: Maybe<DeleteItemToInventory>;
  depositPouch?: Maybe<DepositPouch>;
  depositPouches: Array<DepositPouch>;
  durabilityChange?: Maybe<DurabilityChange>;
  durabilityChanges: Array<DurabilityChange>;
  equipItemToOoga?: Maybe<EquipItemToOoga>;
  equipItemToOogas: Array<EquipItemToOoga>;
  equipSpecialItem?: Maybe<EquipSpecialItem>;
  equipSpecialItems: Array<EquipSpecialItem>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  inventoryItem?: Maybe<InventoryItem>;
  inventoryItems: Array<InventoryItem>;
  item?: Maybe<Item>;
  items: Array<Item>;
  levelChange?: Maybe<LevelChange>;
  levelChanges: Array<LevelChange>;
  makeNewCrew?: Maybe<MakeNewCrew>;
  makeNewCrews: Array<MakeNewCrew>;
  match?: Maybe<Match>;
  matches: Array<Match>;
  matchmakingInitialized?: Maybe<MatchmakingInitialized>;
  matchmakingInitializeds: Array<MatchmakingInitialized>;
  matchmakingRoleAdminChanged?: Maybe<MatchmakingRoleAdminChanged>;
  matchmakingRoleAdminChangeds: Array<MatchmakingRoleAdminChanged>;
  matchmakingRoleGranted?: Maybe<MatchmakingRoleGranted>;
  matchmakingRoleGranteds: Array<MatchmakingRoleGranted>;
  matchmakingRoleRevoked?: Maybe<MatchmakingRoleRevoked>;
  matchmakingRoleRevokeds: Array<MatchmakingRoleRevoked>;
  mekawarsItemsApprovalForAll?: Maybe<MekawarsItemsApprovalForAll>;
  mekawarsItemsApprovalForAlls: Array<MekawarsItemsApprovalForAll>;
  mekawarsItemsInitialized?: Maybe<MekawarsItemsInitialized>;
  mekawarsItemsInitializeds: Array<MekawarsItemsInitialized>;
  mekawarsItemsRoleAdminChanged?: Maybe<MekawarsItemsRoleAdminChanged>;
  mekawarsItemsRoleAdminChangeds: Array<MekawarsItemsRoleAdminChanged>;
  mekawarsItemsRoleGranted?: Maybe<MekawarsItemsRoleGranted>;
  mekawarsItemsRoleGranteds: Array<MekawarsItemsRoleGranted>;
  mekawarsItemsRoleRevoked?: Maybe<MekawarsItemsRoleRevoked>;
  mekawarsItemsRoleRevokeds: Array<MekawarsItemsRoleRevoked>;
  mysteryBoxOpened?: Maybe<MysteryBoxOpened>;
  mysteryBoxOpeneds: Array<MysteryBoxOpened>;
  newBucket?: Maybe<NewBucket>;
  newBuckets: Array<NewBucket>;
  newFirstTeam?: Maybe<NewFirstTeam>;
  newFirstTeams: Array<NewFirstTeam>;
  ntchange?: Maybe<NtChange>;
  ntchanges: Array<NtChange>;
  ntpouch?: Maybe<NtPouch>;
  ntpouchApprovalForAll?: Maybe<NtPouchApprovalForAll>;
  ntpouchApprovalForAlls: Array<NtPouchApprovalForAll>;
  ntpouchInitialized?: Maybe<NtPouchInitialized>;
  ntpouchInitializeds: Array<NtPouchInitialized>;
  ntpouchRoleAdminChanged?: Maybe<NtPouchRoleAdminChanged>;
  ntpouchRoleAdminChangeds: Array<NtPouchRoleAdminChanged>;
  ntpouchRoleGranted?: Maybe<NtPouchRoleGranted>;
  ntpouchRoleGranteds: Array<NtPouchRoleGranted>;
  ntpouchRoleRevoked?: Maybe<NtPouchRoleRevoked>;
  ntpouchRoleRevokeds: Array<NtPouchRoleRevoked>;
  ntpouchTransferBatch?: Maybe<NtPouchTransferBatch>;
  ntpouchTransferBatches: Array<NtPouchTransferBatch>;
  ntpouchTransferSingle?: Maybe<NtPouchTransferSingle>;
  ntpouchTransferSingles: Array<NtPouchTransferSingle>;
  ntpouchURI?: Maybe<NtPouchUri>;
  ntpouchURIs: Array<NtPouchUri>;
  ntpouches: Array<NtPouch>;
  ooga?: Maybe<Ooga>;
  oogas: Array<Ooga>;
  openBox?: Maybe<OpenBox>;
  openBoxes: Array<OpenBox>;
  ratingChange?: Maybe<RatingChange>;
  ratingChanges: Array<RatingChange>;
  removeCrew?: Maybe<RemoveCrew>;
  removeCrewFromBucket?: Maybe<RemoveCrewFromBucket>;
  removeCrewFromBuckets: Array<RemoveCrewFromBucket>;
  removeCrews: Array<RemoveCrew>;
  removeRoboFromCrew?: Maybe<RemoveRoboFromCrew>;
  removeRoboFromCrews: Array<RemoveRoboFromCrew>;
  resolveMatch?: Maybe<ResolveMatch>;
  resolveMatches: Array<ResolveMatch>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  setBucketRandomSeed?: Maybe<SetBucketRandomSeed>;
  setBucketRandomSeeds: Array<SetBucketRandomSeed>;
  setItemAttribute?: Maybe<SetItemAttribute>;
  setItemAttributes: Array<SetItemAttribute>;
  setOogaAttribute?: Maybe<SetOogaAttribute>;
  setOogaAttributes: Array<SetOogaAttribute>;
  setPouchAttribute?: Maybe<SetPouchAttribute>;
  setPouchAttributes: Array<SetPouchAttribute>;
  stakeBabyOoga?: Maybe<StakeBabyOoga>;
  stakeBabyOogas: Array<StakeBabyOoga>;
  transfer?: Maybe<Transfer>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  transfers: Array<Transfer>;
  unstakeBabyOoga?: Maybe<UnstakeBabyOoga>;
  unstakeBabyOogas: Array<UnstakeBabyOoga>;
  upgradeBox?: Maybe<UpgradeBox>;
  upgradeBoxes: Array<UpgradeBox>;
  uri?: Maybe<Uri>;
  uris: Array<Uri>;
  user?: Maybe<User>;
  userItemAmount?: Maybe<UserItemAmount>;
  userItemAmounts: Array<UserItemAmount>;
  userNTPouchAmount?: Maybe<UserNtPouchAmount>;
  userNTPouchAmounts: Array<UserNtPouchAmount>;
  users: Array<User>;
  withdrawPouch?: Maybe<WithdrawPouch>;
  withdrawPouches: Array<WithdrawPouch>;
  wonBoxFromMatch?: Maybe<WonBoxFromMatch>;
  wonBoxFromMatches: Array<WonBoxFromMatch>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddCrewToBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddCrewToBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddCrewToBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddCrewToBucket_Filter>;
};


export type QueryAddItemToInventoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddItemToInventory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddItemToInventory_Filter>;
};


export type QueryAddItemToInventoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddRoboToCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddRoboToCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddRoboToCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddRoboToCrew_Filter>;
};


export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type QueryBoxInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxInitialized_Filter>;
};


export type QueryBoxOpenedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxOpenedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxOpened_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxOpened_Filter>;
};


export type QueryBoxRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxRoleAdminChanged_Filter>;
};


export type QueryBoxRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxRoleGranted_Filter>;
};


export type QueryBoxRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxRoleRevoked_Filter>;
};


export type QueryBoxSlotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxSlotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxSlot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxSlot_Filter>;
};


export type QueryBoxUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBoxUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxUpgraded_Filter>;
};


export type QueryBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bucket_Filter>;
};


export type QueryBuyMysteryBoxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBuyMysteryBoxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BuyMysteryBox_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BuyMysteryBox_Filter>;
};


export type QueryChangeBucketStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChangeBucketStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ChangeBucketState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChangeBucketState_Filter>;
};


export type QueryContractParameterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractParametersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractParameter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractParameter_Filter>;
};


export type QueryCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrewInBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrewInBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewInBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewInBucket_Filter>;
};


export type QueryCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Crew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Crew_Filter>;
};


export type QueryCrewsInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrewsInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsInitialized_Filter>;
};


export type QueryCrewsRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrewsRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsRoleAdminChanged_Filter>;
};


export type QueryCrewsRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrewsRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsRoleGranted_Filter>;
};


export type QueryCrewsRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrewsRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsRoleRevoked_Filter>;
};


export type QueryDeleteItemToInventoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeleteItemToInventory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeleteItemToInventory_Filter>;
};


export type QueryDeleteItemToInventoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositPouchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositPouchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositPouch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositPouch_Filter>;
};


export type QueryDurabilityChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDurabilityChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DurabilityChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DurabilityChange_Filter>;
};


export type QueryEquipItemToOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEquipItemToOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EquipItemToOoga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EquipItemToOoga_Filter>;
};


export type QueryEquipSpecialItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEquipSpecialItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EquipSpecialItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EquipSpecialItem_Filter>;
};


export type QueryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type QueryInventoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInventoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InventoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InventoryItem_Filter>;
};


export type QueryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};


export type QueryLevelChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLevelChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LevelChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LevelChange_Filter>;
};


export type QueryMakeNewCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMakeNewCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MakeNewCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MakeNewCrew_Filter>;
};


export type QueryMatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Match_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Match_Filter>;
};


export type QueryMatchmakingInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMatchmakingInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingInitialized_Filter>;
};


export type QueryMatchmakingRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMatchmakingRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingRoleAdminChanged_Filter>;
};


export type QueryMatchmakingRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMatchmakingRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingRoleGranted_Filter>;
};


export type QueryMatchmakingRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMatchmakingRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingRoleRevoked_Filter>;
};


export type QueryMekawarsItemsApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMekawarsItemsApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsApprovalForAll_Filter>;
};


export type QueryMekawarsItemsInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMekawarsItemsInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsInitialized_Filter>;
};


export type QueryMekawarsItemsRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMekawarsItemsRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsRoleAdminChanged_Filter>;
};


export type QueryMekawarsItemsRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMekawarsItemsRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsRoleGranted_Filter>;
};


export type QueryMekawarsItemsRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMekawarsItemsRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsRoleRevoked_Filter>;
};


export type QueryMysteryBoxOpenedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMysteryBoxOpenedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MysteryBoxOpened_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MysteryBoxOpened_Filter>;
};


export type QueryNewBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewBucket_Filter>;
};


export type QueryNewFirstTeamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewFirstTeamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewFirstTeam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewFirstTeam_Filter>;
};


export type QueryNtchangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtchangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtChange_Filter>;
};


export type QueryNtpouchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchApprovalForAll_Filter>;
};


export type QueryNtpouchInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchInitialized_Filter>;
};


export type QueryNtpouchRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchRoleAdminChanged_Filter>;
};


export type QueryNtpouchRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchRoleGranted_Filter>;
};


export type QueryNtpouchRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchRoleRevoked_Filter>;
};


export type QueryNtpouchTransferBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchTransferBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchTransferBatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchTransferBatch_Filter>;
};


export type QueryNtpouchTransferSingleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchTransferSinglesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchTransferSingle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchTransferSingle_Filter>;
};


export type QueryNtpouchUriArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNtpouchUrIsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchUri_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchUri_Filter>;
};


export type QueryNtpouchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouch_Filter>;
};


export type QueryOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ooga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ooga_Filter>;
};


export type QueryOpenBoxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOpenBoxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenBox_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenBox_Filter>;
};


export type QueryRatingChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRatingChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RatingChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RatingChange_Filter>;
};


export type QueryRemoveCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveCrewFromBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveCrewFromBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveCrewFromBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveCrewFromBucket_Filter>;
};


export type QueryRemoveCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveCrew_Filter>;
};


export type QueryRemoveRoboFromCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveRoboFromCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveRoboFromCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveRoboFromCrew_Filter>;
};


export type QueryResolveMatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolveMatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolveMatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ResolveMatch_Filter>;
};


export type QueryRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type QueryRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type QueryRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type QuerySetBucketRandomSeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetBucketRandomSeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetBucketRandomSeed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetBucketRandomSeed_Filter>;
};


export type QuerySetItemAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetItemAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetItemAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetItemAttribute_Filter>;
};


export type QuerySetOogaAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetOogaAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetOogaAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetOogaAttribute_Filter>;
};


export type QuerySetPouchAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetPouchAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetPouchAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetPouchAttribute_Filter>;
};


export type QueryStakeBabyOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakeBabyOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeBabyOoga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakeBabyOoga_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferBatch_Filter>;
};


export type QueryTransferSingleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferSinglesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferSingle_Filter>;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryUnstakeBabyOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnstakeBabyOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnstakeBabyOoga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UnstakeBabyOoga_Filter>;
};


export type QueryUpgradeBoxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpgradeBoxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UpgradeBox_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UpgradeBox_Filter>;
};


export type QueryUriArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUrisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Uri_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Uri_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserItemAmountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserItemAmountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserItemAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserItemAmount_Filter>;
};


export type QueryUserNtPouchAmountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserNtPouchAmountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserNtPouchAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserNtPouchAmount_Filter>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type QueryWithdrawPouchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawPouchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WithdrawPouch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawPouch_Filter>;
};


export type QueryWonBoxFromMatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWonBoxFromMatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WonBoxFromMatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WonBoxFromMatch_Filter>;
};

export type RatingChange = {
  __typename?: 'RatingChange';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newRating: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RatingChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RatingChange_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newRating?: InputMaybe<Scalars['BigInt']>;
  newRating_gt?: InputMaybe<Scalars['BigInt']>;
  newRating_gte?: InputMaybe<Scalars['BigInt']>;
  newRating_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newRating_lt?: InputMaybe<Scalars['BigInt']>;
  newRating_lte?: InputMaybe<Scalars['BigInt']>;
  newRating_not?: InputMaybe<Scalars['BigInt']>;
  newRating_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<RatingChange_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RatingChange_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newRating = 'newRating',
  transactionHash = 'transactionHash'
}

export type RemoveCrew = {
  __typename?: 'RemoveCrew';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  user: Scalars['Bytes'];
};

export type RemoveCrewFromBucket = {
  __typename?: 'RemoveCrewFromBucket';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  bucketIndex: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RemoveCrewFromBucket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveCrewFromBucket_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex_lt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_lte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveCrewFromBucket_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RemoveCrewFromBucket_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  bucketIndex = 'bucketIndex',
  crewId = 'crewId',
  id = 'id',
  transactionHash = 'transactionHash'
}

export type RemoveCrew_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveCrew_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveCrew_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RemoveCrew_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  transactionHash = 'transactionHash',
  user = 'user'
}

export type RemoveRoboFromCrew = {
  __typename?: 'RemoveRoboFromCrew';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  roboId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RemoveRoboFromCrew_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveRoboFromCrew_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveRoboFromCrew_Filter>>>;
  roboId?: InputMaybe<Scalars['BigInt']>;
  roboId_gt?: InputMaybe<Scalars['BigInt']>;
  roboId_gte?: InputMaybe<Scalars['BigInt']>;
  roboId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roboId_lt?: InputMaybe<Scalars['BigInt']>;
  roboId_lte?: InputMaybe<Scalars['BigInt']>;
  roboId_not?: InputMaybe<Scalars['BigInt']>;
  roboId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RemoveRoboFromCrew_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  roboId = 'roboId',
  transactionHash = 'transactionHash'
}

export type ResolveMatch = {
  __typename?: 'ResolveMatch';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  bucketIndex: Scalars['BigInt'];
  crewIdFirst: Scalars['BigInt'];
  crewIdSecond: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  winCrewId: Scalars['BigInt'];
};

export type ResolveMatch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolveMatch_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex_lt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_lte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewIdFirst?: InputMaybe<Scalars['BigInt']>;
  crewIdFirst_gt?: InputMaybe<Scalars['BigInt']>;
  crewIdFirst_gte?: InputMaybe<Scalars['BigInt']>;
  crewIdFirst_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewIdFirst_lt?: InputMaybe<Scalars['BigInt']>;
  crewIdFirst_lte?: InputMaybe<Scalars['BigInt']>;
  crewIdFirst_not?: InputMaybe<Scalars['BigInt']>;
  crewIdFirst_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewIdSecond?: InputMaybe<Scalars['BigInt']>;
  crewIdSecond_gt?: InputMaybe<Scalars['BigInt']>;
  crewIdSecond_gte?: InputMaybe<Scalars['BigInt']>;
  crewIdSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewIdSecond_lt?: InputMaybe<Scalars['BigInt']>;
  crewIdSecond_lte?: InputMaybe<Scalars['BigInt']>;
  crewIdSecond_not?: InputMaybe<Scalars['BigInt']>;
  crewIdSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<ResolveMatch_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  winCrewId?: InputMaybe<Scalars['BigInt']>;
  winCrewId_gt?: InputMaybe<Scalars['BigInt']>;
  winCrewId_gte?: InputMaybe<Scalars['BigInt']>;
  winCrewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  winCrewId_lt?: InputMaybe<Scalars['BigInt']>;
  winCrewId_lte?: InputMaybe<Scalars['BigInt']>;
  winCrewId_not?: InputMaybe<Scalars['BigInt']>;
  winCrewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ResolveMatch_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  bucketIndex = 'bucketIndex',
  crewIdFirst = 'crewIdFirst',
  crewIdSecond = 'crewIdSecond',
  id = 'id',
  transactionHash = 'transactionHash',
  winCrewId = 'winCrewId'
}

export type RoleAdminChanged = {
  __typename?: 'RoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RoleAdminChanged_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newAdminRole = 'newAdminRole',
  previousAdminRole = 'previousAdminRole',
  role = 'role',
  transactionHash = 'transactionHash'
}

export type RoleGranted = {
  __typename?: 'RoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RoleGranted_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type RoleRevoked = {
  __typename?: 'RoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RoleRevoked_OrderBy {
  account = 'account',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  role = 'role',
  sender = 'sender',
  transactionHash = 'transactionHash'
}

export type SetBucketRandomSeed = {
  __typename?: 'SetBucketRandomSeed';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  bucketIndex: Scalars['BigInt'];
  id: Scalars['Bytes'];
  randomSeed: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SetBucketRandomSeed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetBucketRandomSeed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_gte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bucketIndex_lt?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_lte?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not?: InputMaybe<Scalars['BigInt']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<SetBucketRandomSeed_Filter>>>;
  randomSeed?: InputMaybe<Scalars['BigInt']>;
  randomSeed_gt?: InputMaybe<Scalars['BigInt']>;
  randomSeed_gte?: InputMaybe<Scalars['BigInt']>;
  randomSeed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  randomSeed_lt?: InputMaybe<Scalars['BigInt']>;
  randomSeed_lte?: InputMaybe<Scalars['BigInt']>;
  randomSeed_not?: InputMaybe<Scalars['BigInt']>;
  randomSeed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SetBucketRandomSeed_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  bucketIndex = 'bucketIndex',
  id = 'id',
  randomSeed = 'randomSeed',
  transactionHash = 'transactionHash'
}

export type SetItemAttribute = {
  __typename?: 'SetItemAttribute';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  itemId: Scalars['BigInt'];
  item_abilities: Array<Maybe<Scalars['Int']>>;
  item_attack: Scalars['BigInt'];
  item_health: Scalars['BigInt'];
  item_itemType: Scalars['Int'];
  item_level: Scalars['BigInt'];
  item_season: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SetItemAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetItemAttribute_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemId?: InputMaybe<Scalars['BigInt']>;
  itemId_gt?: InputMaybe<Scalars['BigInt']>;
  itemId_gte?: InputMaybe<Scalars['BigInt']>;
  itemId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  itemId_lt?: InputMaybe<Scalars['BigInt']>;
  itemId_lte?: InputMaybe<Scalars['BigInt']>;
  itemId_not?: InputMaybe<Scalars['BigInt']>;
  itemId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_abilities?: InputMaybe<Array<Scalars['Int']>>;
  item_abilities_contains?: InputMaybe<Array<Scalars['Int']>>;
  item_abilities_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  item_abilities_not?: InputMaybe<Array<Scalars['Int']>>;
  item_abilities_not_contains?: InputMaybe<Array<Scalars['Int']>>;
  item_abilities_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  item_attack?: InputMaybe<Scalars['BigInt']>;
  item_attack_gt?: InputMaybe<Scalars['BigInt']>;
  item_attack_gte?: InputMaybe<Scalars['BigInt']>;
  item_attack_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_attack_lt?: InputMaybe<Scalars['BigInt']>;
  item_attack_lte?: InputMaybe<Scalars['BigInt']>;
  item_attack_not?: InputMaybe<Scalars['BigInt']>;
  item_attack_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_health?: InputMaybe<Scalars['BigInt']>;
  item_health_gt?: InputMaybe<Scalars['BigInt']>;
  item_health_gte?: InputMaybe<Scalars['BigInt']>;
  item_health_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_health_lt?: InputMaybe<Scalars['BigInt']>;
  item_health_lte?: InputMaybe<Scalars['BigInt']>;
  item_health_not?: InputMaybe<Scalars['BigInt']>;
  item_health_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_itemType?: InputMaybe<Scalars['Int']>;
  item_itemType_gt?: InputMaybe<Scalars['Int']>;
  item_itemType_gte?: InputMaybe<Scalars['Int']>;
  item_itemType_in?: InputMaybe<Array<Scalars['Int']>>;
  item_itemType_lt?: InputMaybe<Scalars['Int']>;
  item_itemType_lte?: InputMaybe<Scalars['Int']>;
  item_itemType_not?: InputMaybe<Scalars['Int']>;
  item_itemType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  item_level?: InputMaybe<Scalars['BigInt']>;
  item_level_gt?: InputMaybe<Scalars['BigInt']>;
  item_level_gte?: InputMaybe<Scalars['BigInt']>;
  item_level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_level_lt?: InputMaybe<Scalars['BigInt']>;
  item_level_lte?: InputMaybe<Scalars['BigInt']>;
  item_level_not?: InputMaybe<Scalars['BigInt']>;
  item_level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_season?: InputMaybe<Scalars['BigInt']>;
  item_season_gt?: InputMaybe<Scalars['BigInt']>;
  item_season_gte?: InputMaybe<Scalars['BigInt']>;
  item_season_in?: InputMaybe<Array<Scalars['BigInt']>>;
  item_season_lt?: InputMaybe<Scalars['BigInt']>;
  item_season_lte?: InputMaybe<Scalars['BigInt']>;
  item_season_not?: InputMaybe<Scalars['BigInt']>;
  item_season_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<SetItemAttribute_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SetItemAttribute_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  itemId = 'itemId',
  item_abilities = 'item_abilities',
  item_attack = 'item_attack',
  item_health = 'item_health',
  item_itemType = 'item_itemType',
  item_level = 'item_level',
  item_season = 'item_season',
  transactionHash = 'transactionHash'
}

export type SetOogaAttribute = {
  __typename?: 'SetOogaAttribute';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  oogaId: Scalars['BigInt'];
  ooga_attack: Scalars['BigInt'];
  ooga_health: Scalars['BigInt'];
  ooga_level: Scalars['Int'];
  ooga_oogaType: Scalars['Int'];
  transactionHash: Scalars['Bytes'];
};

export type SetOogaAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetOogaAttribute_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oogaId?: InputMaybe<Scalars['BigInt']>;
  oogaId_gt?: InputMaybe<Scalars['BigInt']>;
  oogaId_gte?: InputMaybe<Scalars['BigInt']>;
  oogaId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId_lt?: InputMaybe<Scalars['BigInt']>;
  oogaId_lte?: InputMaybe<Scalars['BigInt']>;
  oogaId_not?: InputMaybe<Scalars['BigInt']>;
  oogaId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ooga_attack?: InputMaybe<Scalars['BigInt']>;
  ooga_attack_gt?: InputMaybe<Scalars['BigInt']>;
  ooga_attack_gte?: InputMaybe<Scalars['BigInt']>;
  ooga_attack_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ooga_attack_lt?: InputMaybe<Scalars['BigInt']>;
  ooga_attack_lte?: InputMaybe<Scalars['BigInt']>;
  ooga_attack_not?: InputMaybe<Scalars['BigInt']>;
  ooga_attack_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ooga_health?: InputMaybe<Scalars['BigInt']>;
  ooga_health_gt?: InputMaybe<Scalars['BigInt']>;
  ooga_health_gte?: InputMaybe<Scalars['BigInt']>;
  ooga_health_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ooga_health_lt?: InputMaybe<Scalars['BigInt']>;
  ooga_health_lte?: InputMaybe<Scalars['BigInt']>;
  ooga_health_not?: InputMaybe<Scalars['BigInt']>;
  ooga_health_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ooga_level?: InputMaybe<Scalars['Int']>;
  ooga_level_gt?: InputMaybe<Scalars['Int']>;
  ooga_level_gte?: InputMaybe<Scalars['Int']>;
  ooga_level_in?: InputMaybe<Array<Scalars['Int']>>;
  ooga_level_lt?: InputMaybe<Scalars['Int']>;
  ooga_level_lte?: InputMaybe<Scalars['Int']>;
  ooga_level_not?: InputMaybe<Scalars['Int']>;
  ooga_level_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ooga_oogaType?: InputMaybe<Scalars['Int']>;
  ooga_oogaType_gt?: InputMaybe<Scalars['Int']>;
  ooga_oogaType_gte?: InputMaybe<Scalars['Int']>;
  ooga_oogaType_in?: InputMaybe<Array<Scalars['Int']>>;
  ooga_oogaType_lt?: InputMaybe<Scalars['Int']>;
  ooga_oogaType_lte?: InputMaybe<Scalars['Int']>;
  ooga_oogaType_not?: InputMaybe<Scalars['Int']>;
  ooga_oogaType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<SetOogaAttribute_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SetOogaAttribute_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  oogaId = 'oogaId',
  ooga_attack = 'ooga_attack',
  ooga_health = 'ooga_health',
  ooga_level = 'ooga_level',
  ooga_oogaType = 'ooga_oogaType',
  transactionHash = 'transactionHash'
}

export type SetPouchAttribute = {
  __typename?: 'SetPouchAttribute';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  pouchAttributes_active: Scalars['Boolean'];
  pouchAttributes_amount: Scalars['BigInt'];
  pouchId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SetPouchAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetPouchAttribute_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<SetPouchAttribute_Filter>>>;
  pouchAttributes_active?: InputMaybe<Scalars['Boolean']>;
  pouchAttributes_active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  pouchAttributes_active_not?: InputMaybe<Scalars['Boolean']>;
  pouchAttributes_active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  pouchAttributes_amount?: InputMaybe<Scalars['BigInt']>;
  pouchAttributes_amount_gt?: InputMaybe<Scalars['BigInt']>;
  pouchAttributes_amount_gte?: InputMaybe<Scalars['BigInt']>;
  pouchAttributes_amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pouchAttributes_amount_lt?: InputMaybe<Scalars['BigInt']>;
  pouchAttributes_amount_lte?: InputMaybe<Scalars['BigInt']>;
  pouchAttributes_amount_not?: InputMaybe<Scalars['BigInt']>;
  pouchAttributes_amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pouchId?: InputMaybe<Scalars['BigInt']>;
  pouchId_gt?: InputMaybe<Scalars['BigInt']>;
  pouchId_gte?: InputMaybe<Scalars['BigInt']>;
  pouchId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pouchId_lt?: InputMaybe<Scalars['BigInt']>;
  pouchId_lte?: InputMaybe<Scalars['BigInt']>;
  pouchId_not?: InputMaybe<Scalars['BigInt']>;
  pouchId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SetPouchAttribute_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  pouchAttributes_active = 'pouchAttributes_active',
  pouchAttributes_amount = 'pouchAttributes_amount',
  pouchId = 'pouchId',
  transactionHash = 'transactionHash'
}

export type StakeBabyOoga = {
  __typename?: 'StakeBabyOoga';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  oogaId: Scalars['BigInt'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type StakeBabyOoga_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeBabyOoga_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oogaId?: InputMaybe<Scalars['BigInt']>;
  oogaId_gt?: InputMaybe<Scalars['BigInt']>;
  oogaId_gte?: InputMaybe<Scalars['BigInt']>;
  oogaId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId_lt?: InputMaybe<Scalars['BigInt']>;
  oogaId_lte?: InputMaybe<Scalars['BigInt']>;
  oogaId_not?: InputMaybe<Scalars['BigInt']>;
  oogaId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<StakeBabyOoga_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum StakeBabyOoga_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  oogaId = 'oogaId',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addCrewToBucket?: Maybe<AddCrewToBucket>;
  addCrewToBuckets: Array<AddCrewToBucket>;
  addItemToInventories: Array<AddItemToInventory>;
  addItemToInventory?: Maybe<AddItemToInventory>;
  addRoboToCrew?: Maybe<AddRoboToCrew>;
  addRoboToCrews: Array<AddRoboToCrew>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  boxInitialized?: Maybe<BoxInitialized>;
  boxInitializeds: Array<BoxInitialized>;
  boxOpened?: Maybe<BoxOpened>;
  boxOpeneds: Array<BoxOpened>;
  boxRoleAdminChanged?: Maybe<BoxRoleAdminChanged>;
  boxRoleAdminChangeds: Array<BoxRoleAdminChanged>;
  boxRoleGranted?: Maybe<BoxRoleGranted>;
  boxRoleGranteds: Array<BoxRoleGranted>;
  boxRoleRevoked?: Maybe<BoxRoleRevoked>;
  boxRoleRevokeds: Array<BoxRoleRevoked>;
  boxSlot?: Maybe<BoxSlot>;
  boxSlots: Array<BoxSlot>;
  boxUpgraded?: Maybe<BoxUpgraded>;
  boxUpgradeds: Array<BoxUpgraded>;
  bucket?: Maybe<Bucket>;
  buckets: Array<Bucket>;
  buyMysteryBox?: Maybe<BuyMysteryBox>;
  buyMysteryBoxes: Array<BuyMysteryBox>;
  changeBucketState?: Maybe<ChangeBucketState>;
  changeBucketStates: Array<ChangeBucketState>;
  contractParameter?: Maybe<ContractParameter>;
  contractParameters: Array<ContractParameter>;
  crew?: Maybe<Crew>;
  crewInBucket?: Maybe<CrewInBucket>;
  crewInBuckets: Array<CrewInBucket>;
  crews: Array<Crew>;
  crewsInitialized?: Maybe<CrewsInitialized>;
  crewsInitializeds: Array<CrewsInitialized>;
  crewsRoleAdminChanged?: Maybe<CrewsRoleAdminChanged>;
  crewsRoleAdminChangeds: Array<CrewsRoleAdminChanged>;
  crewsRoleGranted?: Maybe<CrewsRoleGranted>;
  crewsRoleGranteds: Array<CrewsRoleGranted>;
  crewsRoleRevoked?: Maybe<CrewsRoleRevoked>;
  crewsRoleRevokeds: Array<CrewsRoleRevoked>;
  deleteItemToInventories: Array<DeleteItemToInventory>;
  deleteItemToInventory?: Maybe<DeleteItemToInventory>;
  depositPouch?: Maybe<DepositPouch>;
  depositPouches: Array<DepositPouch>;
  durabilityChange?: Maybe<DurabilityChange>;
  durabilityChanges: Array<DurabilityChange>;
  equipItemToOoga?: Maybe<EquipItemToOoga>;
  equipItemToOogas: Array<EquipItemToOoga>;
  equipSpecialItem?: Maybe<EquipSpecialItem>;
  equipSpecialItems: Array<EquipSpecialItem>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  inventoryItem?: Maybe<InventoryItem>;
  inventoryItems: Array<InventoryItem>;
  item?: Maybe<Item>;
  items: Array<Item>;
  levelChange?: Maybe<LevelChange>;
  levelChanges: Array<LevelChange>;
  makeNewCrew?: Maybe<MakeNewCrew>;
  makeNewCrews: Array<MakeNewCrew>;
  match?: Maybe<Match>;
  matches: Array<Match>;
  matchmakingInitialized?: Maybe<MatchmakingInitialized>;
  matchmakingInitializeds: Array<MatchmakingInitialized>;
  matchmakingRoleAdminChanged?: Maybe<MatchmakingRoleAdminChanged>;
  matchmakingRoleAdminChangeds: Array<MatchmakingRoleAdminChanged>;
  matchmakingRoleGranted?: Maybe<MatchmakingRoleGranted>;
  matchmakingRoleGranteds: Array<MatchmakingRoleGranted>;
  matchmakingRoleRevoked?: Maybe<MatchmakingRoleRevoked>;
  matchmakingRoleRevokeds: Array<MatchmakingRoleRevoked>;
  mekawarsItemsApprovalForAll?: Maybe<MekawarsItemsApprovalForAll>;
  mekawarsItemsApprovalForAlls: Array<MekawarsItemsApprovalForAll>;
  mekawarsItemsInitialized?: Maybe<MekawarsItemsInitialized>;
  mekawarsItemsInitializeds: Array<MekawarsItemsInitialized>;
  mekawarsItemsRoleAdminChanged?: Maybe<MekawarsItemsRoleAdminChanged>;
  mekawarsItemsRoleAdminChangeds: Array<MekawarsItemsRoleAdminChanged>;
  mekawarsItemsRoleGranted?: Maybe<MekawarsItemsRoleGranted>;
  mekawarsItemsRoleGranteds: Array<MekawarsItemsRoleGranted>;
  mekawarsItemsRoleRevoked?: Maybe<MekawarsItemsRoleRevoked>;
  mekawarsItemsRoleRevokeds: Array<MekawarsItemsRoleRevoked>;
  mysteryBoxOpened?: Maybe<MysteryBoxOpened>;
  mysteryBoxOpeneds: Array<MysteryBoxOpened>;
  newBucket?: Maybe<NewBucket>;
  newBuckets: Array<NewBucket>;
  newFirstTeam?: Maybe<NewFirstTeam>;
  newFirstTeams: Array<NewFirstTeam>;
  ntchange?: Maybe<NtChange>;
  ntchanges: Array<NtChange>;
  ntpouch?: Maybe<NtPouch>;
  ntpouchApprovalForAll?: Maybe<NtPouchApprovalForAll>;
  ntpouchApprovalForAlls: Array<NtPouchApprovalForAll>;
  ntpouchInitialized?: Maybe<NtPouchInitialized>;
  ntpouchInitializeds: Array<NtPouchInitialized>;
  ntpouchRoleAdminChanged?: Maybe<NtPouchRoleAdminChanged>;
  ntpouchRoleAdminChangeds: Array<NtPouchRoleAdminChanged>;
  ntpouchRoleGranted?: Maybe<NtPouchRoleGranted>;
  ntpouchRoleGranteds: Array<NtPouchRoleGranted>;
  ntpouchRoleRevoked?: Maybe<NtPouchRoleRevoked>;
  ntpouchRoleRevokeds: Array<NtPouchRoleRevoked>;
  ntpouchTransferBatch?: Maybe<NtPouchTransferBatch>;
  ntpouchTransferBatches: Array<NtPouchTransferBatch>;
  ntpouchTransferSingle?: Maybe<NtPouchTransferSingle>;
  ntpouchTransferSingles: Array<NtPouchTransferSingle>;
  ntpouchURI?: Maybe<NtPouchUri>;
  ntpouchURIs: Array<NtPouchUri>;
  ntpouches: Array<NtPouch>;
  ooga?: Maybe<Ooga>;
  oogas: Array<Ooga>;
  openBox?: Maybe<OpenBox>;
  openBoxes: Array<OpenBox>;
  ratingChange?: Maybe<RatingChange>;
  ratingChanges: Array<RatingChange>;
  removeCrew?: Maybe<RemoveCrew>;
  removeCrewFromBucket?: Maybe<RemoveCrewFromBucket>;
  removeCrewFromBuckets: Array<RemoveCrewFromBucket>;
  removeCrews: Array<RemoveCrew>;
  removeRoboFromCrew?: Maybe<RemoveRoboFromCrew>;
  removeRoboFromCrews: Array<RemoveRoboFromCrew>;
  resolveMatch?: Maybe<ResolveMatch>;
  resolveMatches: Array<ResolveMatch>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  setBucketRandomSeed?: Maybe<SetBucketRandomSeed>;
  setBucketRandomSeeds: Array<SetBucketRandomSeed>;
  setItemAttribute?: Maybe<SetItemAttribute>;
  setItemAttributes: Array<SetItemAttribute>;
  setOogaAttribute?: Maybe<SetOogaAttribute>;
  setOogaAttributes: Array<SetOogaAttribute>;
  setPouchAttribute?: Maybe<SetPouchAttribute>;
  setPouchAttributes: Array<SetPouchAttribute>;
  stakeBabyOoga?: Maybe<StakeBabyOoga>;
  stakeBabyOogas: Array<StakeBabyOoga>;
  transfer?: Maybe<Transfer>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  transfers: Array<Transfer>;
  unstakeBabyOoga?: Maybe<UnstakeBabyOoga>;
  unstakeBabyOogas: Array<UnstakeBabyOoga>;
  upgradeBox?: Maybe<UpgradeBox>;
  upgradeBoxes: Array<UpgradeBox>;
  uri?: Maybe<Uri>;
  uris: Array<Uri>;
  user?: Maybe<User>;
  userItemAmount?: Maybe<UserItemAmount>;
  userItemAmounts: Array<UserItemAmount>;
  userNTPouchAmount?: Maybe<UserNtPouchAmount>;
  userNTPouchAmounts: Array<UserNtPouchAmount>;
  users: Array<User>;
  withdrawPouch?: Maybe<WithdrawPouch>;
  withdrawPouches: Array<WithdrawPouch>;
  wonBoxFromMatch?: Maybe<WonBoxFromMatch>;
  wonBoxFromMatches: Array<WonBoxFromMatch>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddCrewToBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddCrewToBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddCrewToBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddCrewToBucket_Filter>;
};


export type SubscriptionAddItemToInventoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddItemToInventory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddItemToInventory_Filter>;
};


export type SubscriptionAddItemToInventoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddRoboToCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddRoboToCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddRoboToCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddRoboToCrew_Filter>;
};


export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type SubscriptionBoxInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxInitialized_Filter>;
};


export type SubscriptionBoxOpenedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxOpenedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxOpened_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxOpened_Filter>;
};


export type SubscriptionBoxRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxRoleAdminChanged_Filter>;
};


export type SubscriptionBoxRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxRoleGranted_Filter>;
};


export type SubscriptionBoxRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxRoleRevoked_Filter>;
};


export type SubscriptionBoxSlotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxSlotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxSlot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxSlot_Filter>;
};


export type SubscriptionBoxUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBoxUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoxUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BoxUpgraded_Filter>;
};


export type SubscriptionBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bucket_Filter>;
};


export type SubscriptionBuyMysteryBoxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBuyMysteryBoxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BuyMysteryBox_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BuyMysteryBox_Filter>;
};


export type SubscriptionChangeBucketStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChangeBucketStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ChangeBucketState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChangeBucketState_Filter>;
};


export type SubscriptionContractParameterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractParametersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractParameter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractParameter_Filter>;
};


export type SubscriptionCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrewInBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrewInBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewInBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewInBucket_Filter>;
};


export type SubscriptionCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Crew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Crew_Filter>;
};


export type SubscriptionCrewsInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrewsInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsInitialized_Filter>;
};


export type SubscriptionCrewsRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrewsRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsRoleAdminChanged_Filter>;
};


export type SubscriptionCrewsRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrewsRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsRoleGranted_Filter>;
};


export type SubscriptionCrewsRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrewsRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CrewsRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CrewsRoleRevoked_Filter>;
};


export type SubscriptionDeleteItemToInventoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeleteItemToInventory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeleteItemToInventory_Filter>;
};


export type SubscriptionDeleteItemToInventoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositPouchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositPouchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositPouch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositPouch_Filter>;
};


export type SubscriptionDurabilityChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDurabilityChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DurabilityChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DurabilityChange_Filter>;
};


export type SubscriptionEquipItemToOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEquipItemToOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EquipItemToOoga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EquipItemToOoga_Filter>;
};


export type SubscriptionEquipSpecialItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEquipSpecialItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EquipSpecialItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EquipSpecialItem_Filter>;
};


export type SubscriptionInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type SubscriptionInventoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInventoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InventoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InventoryItem_Filter>;
};


export type SubscriptionItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};


export type SubscriptionLevelChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLevelChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LevelChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LevelChange_Filter>;
};


export type SubscriptionMakeNewCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMakeNewCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MakeNewCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MakeNewCrew_Filter>;
};


export type SubscriptionMatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Match_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Match_Filter>;
};


export type SubscriptionMatchmakingInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMatchmakingInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingInitialized_Filter>;
};


export type SubscriptionMatchmakingRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMatchmakingRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingRoleAdminChanged_Filter>;
};


export type SubscriptionMatchmakingRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMatchmakingRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingRoleGranted_Filter>;
};


export type SubscriptionMatchmakingRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMatchmakingRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MatchmakingRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MatchmakingRoleRevoked_Filter>;
};


export type SubscriptionMekawarsItemsApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMekawarsItemsApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsApprovalForAll_Filter>;
};


export type SubscriptionMekawarsItemsInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMekawarsItemsInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsInitialized_Filter>;
};


export type SubscriptionMekawarsItemsRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMekawarsItemsRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsRoleAdminChanged_Filter>;
};


export type SubscriptionMekawarsItemsRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMekawarsItemsRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsRoleGranted_Filter>;
};


export type SubscriptionMekawarsItemsRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMekawarsItemsRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MekawarsItemsRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MekawarsItemsRoleRevoked_Filter>;
};


export type SubscriptionMysteryBoxOpenedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMysteryBoxOpenedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MysteryBoxOpened_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MysteryBoxOpened_Filter>;
};


export type SubscriptionNewBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewBucket_Filter>;
};


export type SubscriptionNewFirstTeamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewFirstTeamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewFirstTeam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewFirstTeam_Filter>;
};


export type SubscriptionNtchangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtchangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtChange_Filter>;
};


export type SubscriptionNtpouchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchApprovalForAll_Filter>;
};


export type SubscriptionNtpouchInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchInitialized_Filter>;
};


export type SubscriptionNtpouchRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchRoleAdminChanged_Filter>;
};


export type SubscriptionNtpouchRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchRoleGranted_Filter>;
};


export type SubscriptionNtpouchRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchRoleRevoked_Filter>;
};


export type SubscriptionNtpouchTransferBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchTransferBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchTransferBatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchTransferBatch_Filter>;
};


export type SubscriptionNtpouchTransferSingleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchTransferSinglesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchTransferSingle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchTransferSingle_Filter>;
};


export type SubscriptionNtpouchUriArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNtpouchUrIsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouchUri_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouchUri_Filter>;
};


export type SubscriptionNtpouchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NtPouch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NtPouch_Filter>;
};


export type SubscriptionOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ooga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ooga_Filter>;
};


export type SubscriptionOpenBoxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOpenBoxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenBox_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenBox_Filter>;
};


export type SubscriptionRatingChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRatingChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RatingChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RatingChange_Filter>;
};


export type SubscriptionRemoveCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveCrewFromBucketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveCrewFromBucketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveCrewFromBucket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveCrewFromBucket_Filter>;
};


export type SubscriptionRemoveCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveCrew_Filter>;
};


export type SubscriptionRemoveRoboFromCrewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveRoboFromCrewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveRoboFromCrew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveRoboFromCrew_Filter>;
};


export type SubscriptionResolveMatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolveMatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolveMatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ResolveMatch_Filter>;
};


export type SubscriptionRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type SubscriptionRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type SubscriptionRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type SubscriptionSetBucketRandomSeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetBucketRandomSeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetBucketRandomSeed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetBucketRandomSeed_Filter>;
};


export type SubscriptionSetItemAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetItemAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetItemAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetItemAttribute_Filter>;
};


export type SubscriptionSetOogaAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetOogaAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetOogaAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetOogaAttribute_Filter>;
};


export type SubscriptionSetPouchAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetPouchAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetPouchAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetPouchAttribute_Filter>;
};


export type SubscriptionStakeBabyOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakeBabyOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeBabyOoga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakeBabyOoga_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferBatch_Filter>;
};


export type SubscriptionTransferSingleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferSinglesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferSingle_Filter>;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionUnstakeBabyOogaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnstakeBabyOogasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnstakeBabyOoga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UnstakeBabyOoga_Filter>;
};


export type SubscriptionUpgradeBoxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUpgradeBoxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UpgradeBox_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UpgradeBox_Filter>;
};


export type SubscriptionUriArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUrisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Uri_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Uri_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserItemAmountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserItemAmountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserItemAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserItemAmount_Filter>;
};


export type SubscriptionUserNtPouchAmountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserNtPouchAmountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserNtPouchAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserNtPouchAmount_Filter>;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type SubscriptionWithdrawPouchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWithdrawPouchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WithdrawPouch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawPouch_Filter>;
};


export type SubscriptionWonBoxFromMatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWonBoxFromMatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WonBoxFromMatch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WonBoxFromMatch_Filter>;
};

export type Transfer = {
  __typename?: 'Transfer';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TransferBatch = {
  __typename?: 'TransferBatch';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['Bytes'];
  ids: Array<Scalars['BigInt']>;
  operator: Scalars['Bytes'];
  to: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  values: Array<Scalars['BigInt']>;
};

export type TransferBatch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferBatch_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ids?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<TransferBatch_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TransferBatch_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  from = 'from',
  id = 'id',
  ids = 'ids',
  operator = 'operator',
  to = 'to',
  transactionHash = 'transactionHash',
  values = 'values'
}

export type TransferSingle = {
  __typename?: 'TransferSingle';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type TransferSingle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferSingle_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<TransferSingle_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TransferSingle_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  from = 'from',
  id = 'id',
  operator = 'operator',
  to = 'to',
  tokenId = 'tokenId',
  transactionHash = 'transactionHash',
  value = 'value'
}

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Transfer_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  from = 'from',
  id = 'id',
  to = 'to',
  tokenId = 'tokenId',
  transactionHash = 'transactionHash'
}

export type Uri = {
  __typename?: 'URI';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['String'];
};

export type Uri_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Uri_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Uri_Filter>>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Uri_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  tokenId = 'tokenId',
  transactionHash = 'transactionHash',
  value = 'value'
}

export type UnstakeBabyOoga = {
  __typename?: 'UnstakeBabyOoga';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  oogaId: Scalars['BigInt'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type UnstakeBabyOoga_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnstakeBabyOoga_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oogaId?: InputMaybe<Scalars['BigInt']>;
  oogaId_gt?: InputMaybe<Scalars['BigInt']>;
  oogaId_gte?: InputMaybe<Scalars['BigInt']>;
  oogaId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oogaId_lt?: InputMaybe<Scalars['BigInt']>;
  oogaId_lte?: InputMaybe<Scalars['BigInt']>;
  oogaId_not?: InputMaybe<Scalars['BigInt']>;
  oogaId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<UnstakeBabyOoga_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UnstakeBabyOoga_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  oogaId = 'oogaId',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

export type UpgradeBox = {
  __typename?: 'UpgradeBox';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newBabyOogaCharge: Scalars['BigInt'];
  newSlotState: Scalars['Int'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type UpgradeBox_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UpgradeBox_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newBabyOogaCharge?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_gt?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_gte?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newBabyOogaCharge_lt?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_lte?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_not?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newSlotState?: InputMaybe<Scalars['Int']>;
  newSlotState_gt?: InputMaybe<Scalars['Int']>;
  newSlotState_gte?: InputMaybe<Scalars['Int']>;
  newSlotState_in?: InputMaybe<Array<Scalars['Int']>>;
  newSlotState_lt?: InputMaybe<Scalars['Int']>;
  newSlotState_lte?: InputMaybe<Scalars['Int']>;
  newSlotState_not?: InputMaybe<Scalars['Int']>;
  newSlotState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<UpgradeBox_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UpgradeBox_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  newBabyOogaCharge = 'newBabyOogaCharge',
  newSlotState = 'newSlotState',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

export type User = {
  __typename?: 'User';
  crews: Array<Crew>;
  id: Scalars['Bytes'];
  itemAmounts: Array<UserItemAmount>;
  notStakedOogas: Array<Ooga>;
  ntPouchAmounts: Array<UserNtPouchAmount>;
};


export type UserCrewsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Crew_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Crew_Filter>;
};


export type UserItemAmountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserItemAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserItemAmount_Filter>;
};


export type UserNotStakedOogasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ooga_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ooga_Filter>;
};


export type UserNtPouchAmountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserNtPouchAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNtPouchAmount_Filter>;
};

export type UserItemAmount = {
  __typename?: 'UserItemAmount';
  amount?: Maybe<Scalars['BigInt']>;
  id: Scalars['Bytes'];
  item?: Maybe<Item>;
  user?: Maybe<User>;
};

export type UserItemAmount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<UserItemAmount_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  item?: InputMaybe<Scalars['String']>;
  item_?: InputMaybe<Item_Filter>;
  item_contains?: InputMaybe<Scalars['String']>;
  item_contains_nocase?: InputMaybe<Scalars['String']>;
  item_ends_with?: InputMaybe<Scalars['String']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_gt?: InputMaybe<Scalars['String']>;
  item_gte?: InputMaybe<Scalars['String']>;
  item_in?: InputMaybe<Array<Scalars['String']>>;
  item_lt?: InputMaybe<Scalars['String']>;
  item_lte?: InputMaybe<Scalars['String']>;
  item_not?: InputMaybe<Scalars['String']>;
  item_not_contains?: InputMaybe<Scalars['String']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']>;
  item_not_ends_with?: InputMaybe<Scalars['String']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_not_in?: InputMaybe<Array<Scalars['String']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  item_starts_with?: InputMaybe<Scalars['String']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<UserItemAmount_Filter>>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UserItemAmount_OrderBy {
  amount = 'amount',
  id = 'id',
  item = 'item',
  user = 'user'
}

export type UserNtPouchAmount = {
  __typename?: 'UserNTPouchAmount';
  amount?: Maybe<Scalars['BigInt']>;
  id: Scalars['Bytes'];
  ntPouch?: Maybe<NtPouch>;
  user?: Maybe<User>;
};

export type UserNtPouchAmount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<UserNtPouchAmount_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ntPouch?: InputMaybe<Scalars['String']>;
  ntPouch_?: InputMaybe<NtPouch_Filter>;
  ntPouch_contains?: InputMaybe<Scalars['String']>;
  ntPouch_contains_nocase?: InputMaybe<Scalars['String']>;
  ntPouch_ends_with?: InputMaybe<Scalars['String']>;
  ntPouch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ntPouch_gt?: InputMaybe<Scalars['String']>;
  ntPouch_gte?: InputMaybe<Scalars['String']>;
  ntPouch_in?: InputMaybe<Array<Scalars['String']>>;
  ntPouch_lt?: InputMaybe<Scalars['String']>;
  ntPouch_lte?: InputMaybe<Scalars['String']>;
  ntPouch_not?: InputMaybe<Scalars['String']>;
  ntPouch_not_contains?: InputMaybe<Scalars['String']>;
  ntPouch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ntPouch_not_ends_with?: InputMaybe<Scalars['String']>;
  ntPouch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ntPouch_not_in?: InputMaybe<Array<Scalars['String']>>;
  ntPouch_not_starts_with?: InputMaybe<Scalars['String']>;
  ntPouch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ntPouch_starts_with?: InputMaybe<Scalars['String']>;
  ntPouch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<UserNtPouchAmount_Filter>>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UserNtPouchAmount_OrderBy {
  amount = 'amount',
  id = 'id',
  ntPouch = 'ntPouch',
  user = 'user'
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  crews_?: InputMaybe<Crew_Filter>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemAmounts_?: InputMaybe<UserItemAmount_Filter>;
  notStakedOogas_?: InputMaybe<Ooga_Filter>;
  ntPouchAmounts_?: InputMaybe<UserNtPouchAmount_Filter>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
};

export enum User_OrderBy {
  crews = 'crews',
  id = 'id',
  itemAmounts = 'itemAmounts',
  notStakedOogas = 'notStakedOogas',
  ntPouchAmounts = 'ntPouchAmounts'
}

export type WithdrawPouch = {
  __typename?: 'WithdrawPouch';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  pouchId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type WithdrawPouch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<WithdrawPouch_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<WithdrawPouch_Filter>>>;
  pouchId?: InputMaybe<Scalars['BigInt']>;
  pouchId_gt?: InputMaybe<Scalars['BigInt']>;
  pouchId_gte?: InputMaybe<Scalars['BigInt']>;
  pouchId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pouchId_lt?: InputMaybe<Scalars['BigInt']>;
  pouchId_lte?: InputMaybe<Scalars['BigInt']>;
  pouchId_not?: InputMaybe<Scalars['BigInt']>;
  pouchId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum WithdrawPouch_OrderBy {
  amount = 'amount',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  crewId = 'crewId',
  id = 'id',
  pouchId = 'pouchId',
  transactionHash = 'transactionHash'
}

export type WonBoxFromMatch = {
  __typename?: 'WonBoxFromMatch';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  box_createdAt: Scalars['BigInt'];
  box_level: Scalars['BigInt'];
  box_rarity: Scalars['Int'];
  crewId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newBabyOogaCharge: Scalars['BigInt'];
  slotIndex: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type WonBoxFromMatch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WonBoxFromMatch_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_createdAt?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_not?: InputMaybe<Scalars['BigInt']>;
  box_createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_level?: InputMaybe<Scalars['BigInt']>;
  box_level_gt?: InputMaybe<Scalars['BigInt']>;
  box_level_gte?: InputMaybe<Scalars['BigInt']>;
  box_level_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_level_lt?: InputMaybe<Scalars['BigInt']>;
  box_level_lte?: InputMaybe<Scalars['BigInt']>;
  box_level_not?: InputMaybe<Scalars['BigInt']>;
  box_level_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  box_rarity?: InputMaybe<Scalars['Int']>;
  box_rarity_gt?: InputMaybe<Scalars['Int']>;
  box_rarity_gte?: InputMaybe<Scalars['Int']>;
  box_rarity_in?: InputMaybe<Array<Scalars['Int']>>;
  box_rarity_lt?: InputMaybe<Scalars['Int']>;
  box_rarity_lte?: InputMaybe<Scalars['Int']>;
  box_rarity_not?: InputMaybe<Scalars['Int']>;
  box_rarity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  crewId?: InputMaybe<Scalars['BigInt']>;
  crewId_gt?: InputMaybe<Scalars['BigInt']>;
  crewId_gte?: InputMaybe<Scalars['BigInt']>;
  crewId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crewId_lt?: InputMaybe<Scalars['BigInt']>;
  crewId_lte?: InputMaybe<Scalars['BigInt']>;
  crewId_not?: InputMaybe<Scalars['BigInt']>;
  crewId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newBabyOogaCharge?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_gt?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_gte?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newBabyOogaCharge_lt?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_lte?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_not?: InputMaybe<Scalars['BigInt']>;
  newBabyOogaCharge_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<WonBoxFromMatch_Filter>>>;
  slotIndex?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  slotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not?: InputMaybe<Scalars['BigInt']>;
  slotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum WonBoxFromMatch_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  box_createdAt = 'box_createdAt',
  box_level = 'box_level',
  box_rarity = 'box_rarity',
  crewId = 'crewId',
  id = 'id',
  newBabyOogaCharge = 'newBabyOogaCharge',
  slotIndex = 'slotIndex',
  transactionHash = 'transactionHash'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny'
}
