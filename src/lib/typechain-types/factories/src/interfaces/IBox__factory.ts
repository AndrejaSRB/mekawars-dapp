/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBox, IBoxInterface } from "../../../src/interfaces/IBox";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IBox.BoxSlotState",
        name: "newSlotState",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "NTWon",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "itemsWon",
        type: "uint256[]",
      },
    ],
    name: "BoxOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IBox.BoxRarity",
        name: "newRarity",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum IBox.BoxSlotState",
        name: "newSlotState",
        type: "uint8",
      },
    ],
    name: "BoxUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "BuyMysteryBox",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "NTWon",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "itemsWon",
        type: "uint256[]",
      },
    ],
    name: "MysteryBoxOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IBox.BoxSlotState",
        name: "newSlotState",
        type: "uint8",
      },
    ],
    name: "OpenBox",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "oogaId",
        type: "uint256",
      },
    ],
    name: "StakeBabyOoga",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "oogaId",
        type: "uint256",
      },
    ],
    name: "UnstakeBabyOoga",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBabyOogaCharge",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IBox.BoxSlotState",
        name: "newSlotState",
        type: "uint8",
      },
    ],
    name: "UpgradeBox",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBabyOogaCharge",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum IBox.BoxRarity",
            name: "rarity",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IBox.BoxStruct",
        name: "box",
        type: "tuple",
      },
    ],
    name: "WonBoxFromMatch",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "crewId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "randomSeed",
        type: "uint256",
      },
    ],
    name: "matchWonBox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBox__factory {
  static readonly abi = _abi;
  static createInterface(): IBoxInterface {
    return new utils.Interface(_abi) as IBoxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBox {
    return new Contract(address, _abi, signerOrProvider) as IBox;
  }
}
