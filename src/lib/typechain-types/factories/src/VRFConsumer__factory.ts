/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { VRFConsumer, VRFConsumerInterface } from '../../src/VRFConsumer';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: 'randomWords',
        type: 'uint256[]',
      },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vrf_callbackGasLimit',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vrf_coordinator',
    outputs: [
      {
        internalType: 'contract VRFCoordinatorV2Interface',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vrf_keyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vrf_requestConfirmations',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vrf_subscriptionId',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class VRFConsumer__factory {
  static readonly abi = _abi;
  static createInterface(): VRFConsumerInterface {
    return new utils.Interface(_abi) as VRFConsumerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VRFConsumer {
    return new Contract(address, _abi, signerOrProvider) as VRFConsumer;
  }
}
