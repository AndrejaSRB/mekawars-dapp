/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IMatchmakingInterface extends utils.Interface {
  functions: {
    "checkCrewWaitingForMatchResolve(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "checkCrewWaitingForMatchResolve"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkCrewWaitingForMatchResolve",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkCrewWaitingForMatchResolve",
    data: BytesLike
  ): Result;

  events: {
    "AddCrewToBucket(uint256,uint256)": EventFragment;
    "ChangeBucketState(uint256,uint8)": EventFragment;
    "NewBucket(uint256,uint256)": EventFragment;
    "RemoveCrewFromBucket(uint256,uint256)": EventFragment;
    "ResolveMatch(uint256,uint256,uint256,uint256)": EventFragment;
    "SetBucketRandomSeed(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCrewToBucket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeBucketState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBucket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveCrewFromBucket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResolveMatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetBucketRandomSeed"): EventFragment;
}

export interface AddCrewToBucketEventObject {
  crewId: BigNumber;
  bucketIndex: BigNumber;
}
export type AddCrewToBucketEvent = TypedEvent<
  [BigNumber, BigNumber],
  AddCrewToBucketEventObject
>;

export type AddCrewToBucketEventFilter = TypedEventFilter<AddCrewToBucketEvent>;

export interface ChangeBucketStateEventObject {
  bucketIndex: BigNumber;
  newBucketState: number;
}
export type ChangeBucketStateEvent = TypedEvent<
  [BigNumber, number],
  ChangeBucketStateEventObject
>;

export type ChangeBucketStateEventFilter =
  TypedEventFilter<ChangeBucketStateEvent>;

export interface NewBucketEventObject {
  bucketIndex: BigNumber;
  createdAt: BigNumber;
}
export type NewBucketEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewBucketEventObject
>;

export type NewBucketEventFilter = TypedEventFilter<NewBucketEvent>;

export interface RemoveCrewFromBucketEventObject {
  crewId: BigNumber;
  bucketIndex: BigNumber;
}
export type RemoveCrewFromBucketEvent = TypedEvent<
  [BigNumber, BigNumber],
  RemoveCrewFromBucketEventObject
>;

export type RemoveCrewFromBucketEventFilter =
  TypedEventFilter<RemoveCrewFromBucketEvent>;

export interface ResolveMatchEventObject {
  bucketIndex: BigNumber;
  crewIdFirst: BigNumber;
  crewIdSecond: BigNumber;
  winCrewId: BigNumber;
}
export type ResolveMatchEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  ResolveMatchEventObject
>;

export type ResolveMatchEventFilter = TypedEventFilter<ResolveMatchEvent>;

export interface SetBucketRandomSeedEventObject {
  bucketIndex: BigNumber;
  randomSeed: BigNumber;
}
export type SetBucketRandomSeedEvent = TypedEvent<
  [BigNumber, BigNumber],
  SetBucketRandomSeedEventObject
>;

export type SetBucketRandomSeedEventFilter =
  TypedEventFilter<SetBucketRandomSeedEvent>;

export interface IMatchmaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMatchmakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    checkCrewWaitingForMatchResolve(
      crewId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  checkCrewWaitingForMatchResolve(
    crewId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    checkCrewWaitingForMatchResolve(
      crewId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddCrewToBucket(uint256,uint256)"(
      crewId?: PromiseOrValue<BigNumberish> | null,
      bucketIndex?: PromiseOrValue<BigNumberish> | null
    ): AddCrewToBucketEventFilter;
    AddCrewToBucket(
      crewId?: PromiseOrValue<BigNumberish> | null,
      bucketIndex?: PromiseOrValue<BigNumberish> | null
    ): AddCrewToBucketEventFilter;

    "ChangeBucketState(uint256,uint8)"(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      newBucketState?: null
    ): ChangeBucketStateEventFilter;
    ChangeBucketState(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      newBucketState?: null
    ): ChangeBucketStateEventFilter;

    "NewBucket(uint256,uint256)"(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      createdAt?: null
    ): NewBucketEventFilter;
    NewBucket(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      createdAt?: null
    ): NewBucketEventFilter;

    "RemoveCrewFromBucket(uint256,uint256)"(
      crewId?: PromiseOrValue<BigNumberish> | null,
      bucketIndex?: PromiseOrValue<BigNumberish> | null
    ): RemoveCrewFromBucketEventFilter;
    RemoveCrewFromBucket(
      crewId?: PromiseOrValue<BigNumberish> | null,
      bucketIndex?: PromiseOrValue<BigNumberish> | null
    ): RemoveCrewFromBucketEventFilter;

    "ResolveMatch(uint256,uint256,uint256,uint256)"(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      crewIdFirst?: null,
      crewIdSecond?: null,
      winCrewId?: null
    ): ResolveMatchEventFilter;
    ResolveMatch(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      crewIdFirst?: null,
      crewIdSecond?: null,
      winCrewId?: null
    ): ResolveMatchEventFilter;

    "SetBucketRandomSeed(uint256,uint256)"(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      randomSeed?: null
    ): SetBucketRandomSeedEventFilter;
    SetBucketRandomSeed(
      bucketIndex?: PromiseOrValue<BigNumberish> | null,
      randomSeed?: null
    ): SetBucketRandomSeedEventFilter;
  };

  estimateGas: {
    checkCrewWaitingForMatchResolve(
      crewId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkCrewWaitingForMatchResolve(
      crewId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}