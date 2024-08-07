/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { ICrews, ICrewsInterface } from '../../../src/interfaces/ICrews';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'itemId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'itemIndexInInventory',
        type: 'uint256',
      },
    ],
    name: 'AddItemToInventory',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'roboId',
        type: 'uint256',
      },
    ],
    name: 'AddRoboToCrew',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'itemIndex',
        type: 'uint256',
      },
    ],
    name: 'DeleteItemToInventory',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newDurability',
        type: 'uint256',
      },
    ],
    name: 'DurabilityChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'itemIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oogaId',
        type: 'uint256',
      },
    ],
    name: 'EquipItemToOoga',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'itemIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oogaId',
        type: 'uint256',
      },
    ],
    name: 'EquipSpecialItem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLevel',
        type: 'uint256',
      },
    ],
    name: 'LevelChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'mekaApeId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rating',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'durability',
        type: 'uint256',
      },
    ],
    name: 'MakeNewCrew',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newNTamount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'change',
        type: 'int256',
      },
    ],
    name: 'NTChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'newFirstTeam',
        type: 'uint256[]',
      },
    ],
    name: 'NewFirstTeam',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newRating',
        type: 'uint256',
      },
    ],
    name: 'RatingChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'RemoveCrew',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'roboId',
        type: 'uint256',
      },
    ],
    name: 'RemoveRoboFromCrew',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'winCrewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lostCrewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'winRatingIncrease',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loseRatingDecrease',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'durabilityDecrease',
        type: 'uint256',
      },
    ],
    name: 'aftermatchChanges',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'checkActiveCrewAndOwner',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'decreaseRating',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'getCombatTeam',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'crewId',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'enum OogaType',
                name: 'oogaType',
                type: 'uint8',
              },
              {
                internalType: 'bool',
                name: 'isDead',
                type: 'bool',
              },
              {
                internalType: 'enum ItemAbility[]',
                name: 'abilities',
                type: 'uint8[]',
              },
              {
                internalType: 'int256',
                name: 'health',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'attack',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'oogaId',
                type: 'uint256',
              },
            ],
            internalType: 'struct CombatOoga[]',
            name: 'oogas',
            type: 'tuple[]',
          },
          {
            internalType: 'enum ItemAbility[]',
            name: 'mekaSpecialAbilities',
            type: 'uint8[]',
          },
        ],
        internalType: 'struct CombatTeam',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'getCrewOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'getDurability',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'getLevel',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'getRating',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'increaseRating',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'payNT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'receiveNT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ICrews__factory {
  static readonly abi = _abi;
  static createInterface(): ICrewsInterface {
    return new utils.Interface(_abi) as ICrewsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICrews {
    return new Contract(address, _abi, signerOrProvider) as ICrews;
  }
}
