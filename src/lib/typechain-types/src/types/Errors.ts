/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ErrorsInterface extends utils.Interface {
  functions: {
    "E1()": FunctionFragment;
    "E10()": FunctionFragment;
    "E11()": FunctionFragment;
    "E12()": FunctionFragment;
    "E13()": FunctionFragment;
    "E14()": FunctionFragment;
    "E15()": FunctionFragment;
    "E16()": FunctionFragment;
    "E2()": FunctionFragment;
    "E3()": FunctionFragment;
    "E4()": FunctionFragment;
    "E5()": FunctionFragment;
    "E6()": FunctionFragment;
    "E7()": FunctionFragment;
    "E8()": FunctionFragment;
    "E9()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "E1"
      | "E10"
      | "E11"
      | "E12"
      | "E13"
      | "E14"
      | "E15"
      | "E16"
      | "E2"
      | "E3"
      | "E4"
      | "E5"
      | "E6"
      | "E7"
      | "E8"
      | "E9"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "E1", values?: undefined): string;
  encodeFunctionData(functionFragment: "E10", values?: undefined): string;
  encodeFunctionData(functionFragment: "E11", values?: undefined): string;
  encodeFunctionData(functionFragment: "E12", values?: undefined): string;
  encodeFunctionData(functionFragment: "E13", values?: undefined): string;
  encodeFunctionData(functionFragment: "E14", values?: undefined): string;
  encodeFunctionData(functionFragment: "E15", values?: undefined): string;
  encodeFunctionData(functionFragment: "E16", values?: undefined): string;
  encodeFunctionData(functionFragment: "E2", values?: undefined): string;
  encodeFunctionData(functionFragment: "E3", values?: undefined): string;
  encodeFunctionData(functionFragment: "E4", values?: undefined): string;
  encodeFunctionData(functionFragment: "E5", values?: undefined): string;
  encodeFunctionData(functionFragment: "E6", values?: undefined): string;
  encodeFunctionData(functionFragment: "E7", values?: undefined): string;
  encodeFunctionData(functionFragment: "E8", values?: undefined): string;
  encodeFunctionData(functionFragment: "E9", values?: undefined): string;

  decodeFunctionResult(functionFragment: "E1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E10", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E11", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E12", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E13", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E14", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E15", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E16", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E5", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E6", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E7", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "E9", data: BytesLike): Result;

  events: {};
}

export interface Errors extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ErrorsInterface;

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
    E1(overrides?: CallOverrides): Promise<[string]>;

    E10(overrides?: CallOverrides): Promise<[string]>;

    E11(overrides?: CallOverrides): Promise<[string]>;

    E12(overrides?: CallOverrides): Promise<[string]>;

    E13(overrides?: CallOverrides): Promise<[string]>;

    E14(overrides?: CallOverrides): Promise<[string]>;

    E15(overrides?: CallOverrides): Promise<[string]>;

    E16(overrides?: CallOverrides): Promise<[string]>;

    E2(overrides?: CallOverrides): Promise<[string]>;

    E3(overrides?: CallOverrides): Promise<[string]>;

    E4(overrides?: CallOverrides): Promise<[string]>;

    E5(overrides?: CallOverrides): Promise<[string]>;

    E6(overrides?: CallOverrides): Promise<[string]>;

    E7(overrides?: CallOverrides): Promise<[string]>;

    E8(overrides?: CallOverrides): Promise<[string]>;

    E9(overrides?: CallOverrides): Promise<[string]>;
  };

  E1(overrides?: CallOverrides): Promise<string>;

  E10(overrides?: CallOverrides): Promise<string>;

  E11(overrides?: CallOverrides): Promise<string>;

  E12(overrides?: CallOverrides): Promise<string>;

  E13(overrides?: CallOverrides): Promise<string>;

  E14(overrides?: CallOverrides): Promise<string>;

  E15(overrides?: CallOverrides): Promise<string>;

  E16(overrides?: CallOverrides): Promise<string>;

  E2(overrides?: CallOverrides): Promise<string>;

  E3(overrides?: CallOverrides): Promise<string>;

  E4(overrides?: CallOverrides): Promise<string>;

  E5(overrides?: CallOverrides): Promise<string>;

  E6(overrides?: CallOverrides): Promise<string>;

  E7(overrides?: CallOverrides): Promise<string>;

  E8(overrides?: CallOverrides): Promise<string>;

  E9(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    E1(overrides?: CallOverrides): Promise<string>;

    E10(overrides?: CallOverrides): Promise<string>;

    E11(overrides?: CallOverrides): Promise<string>;

    E12(overrides?: CallOverrides): Promise<string>;

    E13(overrides?: CallOverrides): Promise<string>;

    E14(overrides?: CallOverrides): Promise<string>;

    E15(overrides?: CallOverrides): Promise<string>;

    E16(overrides?: CallOverrides): Promise<string>;

    E2(overrides?: CallOverrides): Promise<string>;

    E3(overrides?: CallOverrides): Promise<string>;

    E4(overrides?: CallOverrides): Promise<string>;

    E5(overrides?: CallOverrides): Promise<string>;

    E6(overrides?: CallOverrides): Promise<string>;

    E7(overrides?: CallOverrides): Promise<string>;

    E8(overrides?: CallOverrides): Promise<string>;

    E9(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    E1(overrides?: CallOverrides): Promise<BigNumber>;

    E10(overrides?: CallOverrides): Promise<BigNumber>;

    E11(overrides?: CallOverrides): Promise<BigNumber>;

    E12(overrides?: CallOverrides): Promise<BigNumber>;

    E13(overrides?: CallOverrides): Promise<BigNumber>;

    E14(overrides?: CallOverrides): Promise<BigNumber>;

    E15(overrides?: CallOverrides): Promise<BigNumber>;

    E16(overrides?: CallOverrides): Promise<BigNumber>;

    E2(overrides?: CallOverrides): Promise<BigNumber>;

    E3(overrides?: CallOverrides): Promise<BigNumber>;

    E4(overrides?: CallOverrides): Promise<BigNumber>;

    E5(overrides?: CallOverrides): Promise<BigNumber>;

    E6(overrides?: CallOverrides): Promise<BigNumber>;

    E7(overrides?: CallOverrides): Promise<BigNumber>;

    E8(overrides?: CallOverrides): Promise<BigNumber>;

    E9(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    E1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E10(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E11(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E12(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E13(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E14(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E15(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E16(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E6(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E7(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E8(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    E9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
