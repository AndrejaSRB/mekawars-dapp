/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MekawarsItemsERC721,
  MekawarsItemsERC721Interface,
} from "../../src/MekawarsItemsERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "burnForInventory",
    outputs: [
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "season",
            type: "uint256",
          },
        ],
        internalType: "struct Item",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "enum ItemType",
        name: "itemType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "strength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "season",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastItemId",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506133d4806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636352211e116100c3578063a22cb4651161007c578063a22cb465146103b0578063b88d4fde146103cc578063bfb231d2146103e8578063c87b56dd1461041a578063d547741f1461044a578063e985e9c5146104665761014d565b80636352211e146102da57806370a082311461030a5780638129fc1c1461033a57806391d148541461034457806395d89b4114610374578063a217fddf146103925761014d565b8063248a9ca311610115578063248a9ca3146102085780632f2ff15d1461023857806336568abe146102545780633fd04d201461027057806342842e0e1461028e5780635c2a41dc146102aa5761014d565b806301ffc9a71461015257806306fdde0314610182578063081812fc146101a0578063095ea7b3146101d057806323b872dd146101ec575b600080fd5b61016c600480360381019061016791906121a3565b610496565b60405161017991906121eb565b60405180910390f35b61018a6104a8565b604051610197919061229f565b60405180910390f35b6101ba60048036038101906101b591906122f7565b61053a565b6040516101c79190612365565b60405180910390f35b6101ea60048036038101906101e591906123ac565b610580565b005b610206600480360381019061020191906123ec565b610697565b005b610222600480360381019061021d9190612475565b6106f7565b60405161022f91906124b1565b60405180910390f35b610252600480360381019061024d91906124cc565b610717565b005b61026e600480360381019061026991906124cc565b610738565b005b6102786107bb565b604051610285919061251b565b60405180910390f35b6102a860048036038101906102a391906123ec565b6107c1565b005b6102c460048036038101906102bf91906123ac565b6107e1565b6040516102d191906125fe565b60405180910390f35b6102f460048036038101906102ef91906122f7565b61091c565b6040516103019190612365565b60405180910390f35b610324600480360381019061031f9190612619565b6109a2565b604051610331919061251b565b60405180910390f35b610342610a59565b005b61035e600480360381019061035991906124cc565b610b97565b60405161036b91906121eb565b60405180910390f35b61037c610c02565b604051610389919061229f565b60405180910390f35b61039a610c94565b6040516103a791906124b1565b60405180910390f35b6103ca60048036038101906103c59190612672565b610c9b565b005b6103e660048036038101906103e191906127e7565b610cb1565b005b61040260048036038101906103fd91906122f7565b610d13565b60405161041193929190612879565b60405180910390f35b610434600480360381019061042f91906122f7565b610d4a565b604051610441919061229f565b60405180910390f35b610464600480360381019061045f91906124cc565b610db2565b005b610480600480360381019061047b91906128b0565b610dd3565b60405161048d91906121eb565b60405180910390f35b60006104a182610e67565b9050919050565b6060606580546104b79061291f565b80601f01602080910402602001604051908101604052809291908181526020018280546104e39061291f565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600061054582610ee1565b6069600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061058b8261091c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f2906129c2565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661061a610f2c565b73ffffffffffffffffffffffffffffffffffffffff161480610649575061064881610643610f2c565b610dd3565b5b610688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f90612a54565b60405180910390fd5b6106928383610f34565b505050565b6106a86106a2610f2c565b82610fed565b6106e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106de90612ae6565b60405180910390fd5b6106f2838383611082565b505050565b600060976000838152602001908152602001600020600101549050919050565b610720826106f7565b61072981611377565b610733838361138b565b505050565b610740610f2c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a490612b78565b60405180910390fd5b6107b7828261146c565b5050565b60c95481565b6107dc83838360405180602001604052806000815250610cb1565b505050565b6107e9612104565b8273ffffffffffffffffffffffffffffffffffffffff166108098361091c565b73ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600181526020017f390000000000000000000000000000000000000000000000000000000000000081525090610897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088e919061229f565b60405180910390fd5b50600060ca60008481526020019081526020016000206040518060600160405290816000820160009054906101000a900460ff1660048111156108dd576108dc612536565b5b60048111156108ef576108ee612536565b5b81526020016001820154815260200160028201548152505090506109128361154e565b8091505092915050565b60008061092883611698565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099090612be4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0990612c76565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060019054906101000a900460ff16159050808015610a8a5750600160008054906101000a900460ff1660ff16105b80610ab75750610a99306116d5565b158015610ab65750600160008054906101000a900460ff1660ff16145b5b610af6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aed90612d08565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610b33576001600060016101000a81548160ff0219169083151502179055505b600060c9819055508015610b945760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610b8b9190612d7a565b60405180910390a15b50565b60006097600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060668054610c119061291f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3d9061291f565b8015610c8a5780601f10610c5f57610100808354040283529160200191610c8a565b820191906000526020600020905b815481529060010190602001808311610c6d57829003601f168201915b5050505050905090565b6000801b81565b610cad610ca6610f2c565b83836116f8565b5050565b610cc2610cbc610f2c565b83610fed565b610d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf890612ae6565b60405180910390fd5b610d0d84848484611864565b50505050565b60ca6020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b6060610d5582610ee1565b6000610d5f6118c0565b90506000815111610d7f5760405180602001604052806000815250610daa565b80610d89846118d7565b604051602001610d9a929190612dd1565b6040516020818303038152906040525b915050919050565b610dbb826106f7565b610dc481611377565b610dce838361146c565b505050565b6000606a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610eda5750610ed9826119a5565b5b9050919050565b610eea81611a87565b610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090612be4565b60405180910390fd5b50565b600033905090565b816069600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fa78361091c565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ff98361091c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061103b575061103a8185610dd3565b5b8061107957508373ffffffffffffffffffffffffffffffffffffffff166110618461053a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110a28261091c565b73ffffffffffffffffffffffffffffffffffffffff16146110f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ef90612e67565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115e90612ef9565b60405180910390fd5b611172838383611ac8565b8273ffffffffffffffffffffffffffffffffffffffff166111928261091c565b73ffffffffffffffffffffffffffffffffffffffff16146111e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111df90612e67565b60405180910390fd5b6069600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611372838383611acd565b505050565b61138881611383610f2c565b611ad2565b50565b6113958282610b97565b6114685760016097600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061140d610f2c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6114768282610b97565b1561154a5760006097600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506114ef610f2c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006115598261091c565b905061156781600084611ac8565b6115708261091c565b90506069600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506067600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461169481600084611acd565b5050565b60006067600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175d90612f65565b60405180910390fd5b80606a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161185791906121eb565b60405180910390a3505050565b61186f848484611082565b61187b84848484611b57565b6118ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b190612ff7565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600060016118e684611cde565b01905060008167ffffffffffffffff811115611905576119046126bc565b5b6040519080825280601f01601f1916602001820160405280156119375781602001600182028036833780820191505090505b509050600082602001820190505b60011561199a578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161198e5761198d613017565b5b04945060008503611945575b819350505050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611a7057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611a805750611a7f82611e31565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611aa983611698565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b611adc8282610b97565b611b5357611ae981611e9b565b611af78360001c6020611ec8565b604051602001611b089291906130de565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4a919061229f565b60405180910390fd5b5050565b6000611b788473ffffffffffffffffffffffffffffffffffffffff166116d5565b15611cd1578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ba1610f2c565b8786866040518563ffffffff1660e01b8152600401611bc3949392919061316d565b6020604051808303816000875af1925050508015611bff57506040513d601f19601f82011682018060405250810190611bfc91906131ce565b60015b611c81573d8060008114611c2f576040519150601f19603f3d011682016040523d82523d6000602084013e611c34565b606091505b506000815103611c79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c7090612ff7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611cd6565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611d3c577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611d3257611d31613017565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611d79576d04ee2d6d415b85acef81000000008381611d6f57611d6e613017565b5b0492506020810190505b662386f26fc100008310611da857662386f26fc100008381611d9e57611d9d613017565b5b0492506010810190505b6305f5e1008310611dd1576305f5e1008381611dc757611dc6613017565b5b0492506008810190505b6127108310611df6576127108381611dec57611deb613017565b5b0492506004810190505b60648310611e195760648381611e0f57611e0e613017565b5b0492506002810190505b600a8310611e28576001810190505b80915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060611ec18273ffffffffffffffffffffffffffffffffffffffff16601460ff16611ec8565b9050919050565b606060006002836002611edb919061322a565b611ee59190613284565b67ffffffffffffffff811115611efe57611efd6126bc565b5b6040519080825280601f01601f191660200182016040528015611f305781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611f6857611f676132da565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611fcc57611fcb6132da565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261200c919061322a565b6120169190613284565b90505b60018111156120b6577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110612058576120576132da565b5b1a60f81b82828151811061206f5761206e6132da565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806120af90613309565b9050612019565b50600084146120fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f19061337e565b60405180910390fd5b8091505092915050565b60405180606001604052806000600481111561212357612122612536565b5b815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6121808161214b565b811461218b57600080fd5b50565b60008135905061219d81612177565b92915050565b6000602082840312156121b9576121b8612141565b5b60006121c78482850161218e565b91505092915050565b60008115159050919050565b6121e5816121d0565b82525050565b600060208201905061220060008301846121dc565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612240578082015181840152602081019050612225565b8381111561224f576000848401525b50505050565b6000601f19601f8301169050919050565b600061227182612206565b61227b8185612211565b935061228b818560208601612222565b61229481612255565b840191505092915050565b600060208201905081810360008301526122b98184612266565b905092915050565b6000819050919050565b6122d4816122c1565b81146122df57600080fd5b50565b6000813590506122f1816122cb565b92915050565b60006020828403121561230d5761230c612141565b5b600061231b848285016122e2565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061234f82612324565b9050919050565b61235f81612344565b82525050565b600060208201905061237a6000830184612356565b92915050565b61238981612344565b811461239457600080fd5b50565b6000813590506123a681612380565b92915050565b600080604083850312156123c3576123c2612141565b5b60006123d185828601612397565b92505060206123e2858286016122e2565b9150509250929050565b60008060006060848603121561240557612404612141565b5b600061241386828701612397565b935050602061242486828701612397565b9250506040612435868287016122e2565b9150509250925092565b6000819050919050565b6124528161243f565b811461245d57600080fd5b50565b60008135905061246f81612449565b92915050565b60006020828403121561248b5761248a612141565b5b600061249984828501612460565b91505092915050565b6124ab8161243f565b82525050565b60006020820190506124c660008301846124a2565b92915050565b600080604083850312156124e3576124e2612141565b5b60006124f185828601612460565b925050602061250285828601612397565b9150509250929050565b612515816122c1565b82525050565b6000602082019050612530600083018461250c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005811061257657612575612536565b5b50565b600081905061258782612565565b919050565b600061259782612579565b9050919050565b6125a78161258c565b82525050565b6125b6816122c1565b82525050565b6060820160008201516125d2600085018261259e565b5060208201516125e560208501826125ad565b5060408201516125f860408501826125ad565b50505050565b600060608201905061261360008301846125bc565b92915050565b60006020828403121561262f5761262e612141565b5b600061263d84828501612397565b91505092915050565b61264f816121d0565b811461265a57600080fd5b50565b60008135905061266c81612646565b92915050565b6000806040838503121561268957612688612141565b5b600061269785828601612397565b92505060206126a88582860161265d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6126f482612255565b810181811067ffffffffffffffff82111715612713576127126126bc565b5b80604052505050565b6000612726612137565b905061273282826126eb565b919050565b600067ffffffffffffffff821115612752576127516126bc565b5b61275b82612255565b9050602081019050919050565b82818337600083830152505050565b600061278a61278584612737565b61271c565b9050828152602081018484840111156127a6576127a56126b7565b5b6127b1848285612768565b509392505050565b600082601f8301126127ce576127cd6126b2565b5b81356127de848260208601612777565b91505092915050565b6000806000806080858703121561280157612800612141565b5b600061280f87828801612397565b945050602061282087828801612397565b9350506040612831878288016122e2565b925050606085013567ffffffffffffffff81111561285257612851612146565b5b61285e878288016127b9565b91505092959194509250565b6128738161258c565b82525050565b600060608201905061288e600083018661286a565b61289b602083018561250c565b6128a8604083018461250c565b949350505050565b600080604083850312156128c7576128c6612141565b5b60006128d585828601612397565b92505060206128e685828601612397565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061293757607f821691505b60208210810361294a576129496128f0565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006129ac602183612211565b91506129b782612950565b604082019050919050565b600060208201905081810360008301526129db8161299f565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612a3e603d83612211565b9150612a49826129e2565b604082019050919050565b60006020820190508181036000830152612a6d81612a31565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612ad0602d83612211565b9150612adb82612a74565b604082019050919050565b60006020820190508181036000830152612aff81612ac3565b9050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000612b62602f83612211565b9150612b6d82612b06565b604082019050919050565b60006020820190508181036000830152612b9181612b55565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612bce601883612211565b9150612bd982612b98565b602082019050919050565b60006020820190508181036000830152612bfd81612bc1565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612c60602983612211565b9150612c6b82612c04565b604082019050919050565b60006020820190508181036000830152612c8f81612c53565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612cf2602e83612211565b9150612cfd82612c96565b604082019050919050565b60006020820190508181036000830152612d2181612ce5565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b6000612d64612d5f612d5a84612d28565b612d3f565b612d32565b9050919050565b612d7481612d49565b82525050565b6000602082019050612d8f6000830184612d6b565b92915050565b600081905092915050565b6000612dab82612206565b612db58185612d95565b9350612dc5818560208601612222565b80840191505092915050565b6000612ddd8285612da0565b9150612de98284612da0565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612e51602583612211565b9150612e5c82612df5565b604082019050919050565b60006020820190508181036000830152612e8081612e44565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612ee3602483612211565b9150612eee82612e87565b604082019050919050565b60006020820190508181036000830152612f1281612ed6565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612f4f601983612211565b9150612f5a82612f19565b602082019050919050565b60006020820190508181036000830152612f7e81612f42565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612fe1603283612211565b9150612fec82612f85565b604082019050919050565b6000602082019050818103600083015261301081612fd4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061307c601783612d95565b915061308782613046565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006130c8601183612d95565b91506130d382613092565b601182019050919050565b60006130e98261306f565b91506130f58285612da0565b9150613100826130bb565b915061310c8284612da0565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b600061313f82613118565b6131498185613123565b9350613159818560208601612222565b61316281612255565b840191505092915050565b60006080820190506131826000830187612356565b61318f6020830186612356565b61319c604083018561250c565b81810360608301526131ae8184613134565b905095945050505050565b6000815190506131c881612177565b92915050565b6000602082840312156131e4576131e3612141565b5b60006131f2848285016131b9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613235826122c1565b9150613240836122c1565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613279576132786131fb565b5b828202905092915050565b600061328f826122c1565b915061329a836122c1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156132cf576132ce6131fb565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613314826122c1565b915060008203613327576133266131fb565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000613368602083612211565b915061337382613332565b602082019050919050565b600060208201905081810360008301526133978161335b565b905091905056fea264697066735822122098cd504f3ba3b9bd8d4bb8399a95788e2b0e2e7dc25296ae8954d4f35db97a1d64736f6c634300080e0033";

type MekawarsItemsERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MekawarsItemsERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MekawarsItemsERC721__factory extends ContractFactory {
  constructor(...args: MekawarsItemsERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MekawarsItemsERC721> {
    return super.deploy(overrides || {}) as Promise<MekawarsItemsERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MekawarsItemsERC721 {
    return super.attach(address) as MekawarsItemsERC721;
  }
  override connect(signer: Signer): MekawarsItemsERC721__factory {
    return super.connect(signer) as MekawarsItemsERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MekawarsItemsERC721Interface {
    return new utils.Interface(_abi) as MekawarsItemsERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MekawarsItemsERC721 {
    return new Contract(address, _abi, signerOrProvider) as MekawarsItemsERC721;
  }
}
