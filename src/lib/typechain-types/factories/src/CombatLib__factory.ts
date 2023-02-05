/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { CombatLib, CombatLibInterface } from "../../src/CombatLib";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum OogaType",
            name: "oogaType",
            type: "OogaType",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "teamId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apeId",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "health",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "speed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDead",
            type: "bool",
          },
        ],
        internalType: "struct Ooga",
        name: "attacker",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum OogaType",
            name: "oogaType",
            type: "OogaType",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "teamId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apeId",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "health",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "speed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDead",
            type: "bool",
          },
        ],
        internalType: "struct Ooga",
        name: "defender",
        type: "tuple",
      },
    ],
    name: "calculateDamage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum OogaType",
            name: "oogaType",
            type: "OogaType",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "teamId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apeId",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "health",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "speed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDead",
            type: "bool",
          },
        ],
        internalType: "struct Ooga[]",
        name: "oogas",
        type: "tuple[]",
      },
    ],
    name: "getOogaById",
    outputs: [
      {
        components: [
          {
            internalType: "enum OogaType",
            name: "oogaType",
            type: "OogaType",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "teamId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apeId",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "health",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "speed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDead",
            type: "bool",
          },
        ],
        internalType: "struct Ooga",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6107dc610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80634d20e2411461004557806359addc2014610075575b600080fd5b61005f600480360381019061005a91906103f8565b6100a5565b60405161006c9190610449565b60405180910390f35b61008f600480360381019061008a9190610533565b6100b4565b60405161009c91906106e4565b60405180910390f35b60008260a00151905092915050565b6100bc61012b565b60005b825181101561012357838382815181106100dc576100db610700565b5b6020026020010151606001510361011057828181518110610100576100ff610700565b5b6020026020010151915050610125565b808061011b9061075e565b9150506100bf565b505b92915050565b6040518061010001604052806000600181111561014b5761014a61058f565b5b8152602001600060ff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6101e9826101a0565b810181811067ffffffffffffffff82111715610208576102076101b1565b5b80604052505050565b600061021b610187565b905061022782826101e0565b919050565b6002811061023957600080fd5b50565b60008135905061024b8161022c565b92915050565b600060ff82169050919050565b61026781610251565b811461027257600080fd5b50565b6000813590506102848161025e565b92915050565b6000819050919050565b61029d8161028a565b81146102a857600080fd5b50565b6000813590506102ba81610294565b92915050565b6000819050919050565b6102d3816102c0565b81146102de57600080fd5b50565b6000813590506102f0816102ca565b92915050565b60008115159050919050565b61030b816102f6565b811461031657600080fd5b50565b60008135905061032881610302565b92915050565b600061010082840312156103455761034461019b565b5b610350610100610211565b905060006103608482850161023c565b600083015250602061037484828501610275565b6020830152506040610388848285016102ab565b604083015250606061039c848285016102ab565b60608301525060806103b0848285016102e1565b60808301525060a06103c4848285016102ab565b60a08301525060c06103d8848285016102ab565b60c08301525060e06103ec84828501610319565b60e08301525092915050565b60008061020083850312156104105761040f610191565b5b600061041e8582860161032e565b9250506101006104308582860161032e565b9150509250929050565b6104438161028a565b82525050565b600060208201905061045e600083018461043a565b92915050565b600080fd5b600067ffffffffffffffff821115610484576104836101b1565b5b602082029050602081019050919050565b600080fd5b60006104ad6104a884610469565b610211565b90508083825260208201905061010084028301858111156104d1576104d0610495565b5b835b818110156104fb57806104e6888261032e565b845260208401935050610100810190506104d3565b5050509392505050565b600082601f83011261051a57610519610464565b5b813561052a84826020860161049a565b91505092915050565b6000806040838503121561054a57610549610191565b5b6000610558858286016102ab565b925050602083013567ffffffffffffffff81111561057957610578610196565b5b61058585828601610505565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106105cf576105ce61058f565b5b50565b60008190506105e0826105be565b919050565b60006105f0826105d2565b9050919050565b610600816105e5565b82525050565b61060f81610251565b82525050565b61061e8161028a565b82525050565b61062d816102c0565b82525050565b61063c816102f6565b82525050565b6101008201600082015161065960008501826105f7565b50602082015161066c6020850182610606565b50604082015161067f6040850182610615565b5060608201516106926060850182610615565b5060808201516106a56080850182610624565b5060a08201516106b860a0850182610615565b5060c08201516106cb60c0850182610615565b5060e08201516106de60e0850182610633565b50505050565b6000610100820190506106fa6000830184610642565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107698261028a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361079b5761079a61072f565b5b60018201905091905056fea2646970667358221220af2250899ae508680568f90390266a5ff6912a1c43f592c24f0bd0b455afb74e64736f6c634300080e0033";

type CombatLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CombatLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CombatLib__factory extends ContractFactory {
  constructor(...args: CombatLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CombatLib> {
    return super.deploy(overrides || {}) as Promise<CombatLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CombatLib {
    return super.attach(address) as CombatLib;
  }
  override connect(signer: Signer): CombatLib__factory {
    return super.connect(signer) as CombatLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CombatLibInterface {
    return new utils.Interface(_abi) as CombatLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CombatLib {
    return new Contract(address, _abi, signerOrProvider) as CombatLib;
  }
}
