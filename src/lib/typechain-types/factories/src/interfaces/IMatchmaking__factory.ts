/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { IMatchmaking, IMatchmakingInterface } from '../../../src/interfaces/IMatchmaking';

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
        indexed: true,
        internalType: 'uint256',
        name: 'bucketIndex',
        type: 'uint256',
      },
    ],
    name: 'AddCrewToBucket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bucketIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum IMatchmaking.BucketState',
        name: 'newBucketState',
        type: 'uint8',
      },
    ],
    name: 'ChangeBucketState',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bucketIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'createdAt',
        type: 'uint256',
      },
    ],
    name: 'NewBucket',
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
        name: 'bucketIndex',
        type: 'uint256',
      },
    ],
    name: 'RemoveCrewFromBucket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bucketIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crewIdFirst',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crewIdSecond',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'winCrewId',
        type: 'uint256',
      },
    ],
    name: 'ResolveMatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bucketIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'randomSeed',
        type: 'uint256',
      },
    ],
    name: 'SetBucketRandomSeed',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crewId',
        type: 'uint256',
      },
    ],
    name: 'checkCrewWaitingForMatchResolve',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IMatchmaking__factory {
  static readonly abi = _abi;
  static createInterface(): IMatchmakingInterface {
    return new utils.Interface(_abi) as IMatchmakingInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMatchmaking {
    return new Contract(address, _abi, signerOrProvider) as IMatchmaking;
  }
}
