/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    ListingAttester: {
      address: "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IEAS",
              name: "eas",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "listingSchemaUID",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidEAS",
          type: "error",
        },
        {
          inputs: [],
          name: "_eas",
          outputs: [
            {
              internalType: "contract IEAS",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_listingSchemaUID",
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
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "listingName",
              type: "string",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
          ],
          name: "attestListing",
          outputs: [
            {
              internalType: "bytes32",
              name: "attestationUID",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    ListingConnectionAttester: {
      address: "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IEAS",
              name: "eas",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "listingConnectionSchemaUID",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidEAS",
          type: "error",
        },
        {
          inputs: [],
          name: "_eas",
          outputs: [
            {
              internalType: "contract IEAS",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_listingConnectionSchemaUID",
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
              internalType: "uint256",
              name: "listingConnectionId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              internalType: "address",
              name: "buyer",
              type: "address",
            },
          ],
          name: "attestListingConnection",
          outputs: [
            {
              internalType: "bytes32",
              name: "attestationUID",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    Listings: {
      address: "0x9E545E3C0baAB3E08CdfD552C960A1050f373042",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "listingAttester",
              type: "address",
            },
            {
              internalType: "address",
              name: "listingConnectionAttester",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
          ],
          name: "Listings__BuyerAlreadyConnected",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
          ],
          name: "Listings__InvalidSeller",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
          ],
          name: "Listings__NotExistedListingId",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
          ],
          name: "AddListing",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
          ],
          name: "CreateListingConnection",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
          ],
          name: "DeleteListing",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "listingId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newName",
              type: "string",
            },
          ],
          name: "UpdateListing",
          type: "event",
        },
        {
          inputs: [],
          name: "_listingAttester",
          outputs: [
            {
              internalType: "contract ListingAttester",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_listingConnectionAttester",
          outputs: [
            {
              internalType: "contract ListingConnectionAttester",
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
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "beds",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "cid",
              type: "string",
            },
          ],
          name: "addListing",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "connectedBuyers",
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
              name: "listingId",
              type: "uint256",
            },
          ],
          name: "createListingConnection",
          outputs: [
            {
              internalType: "bytes32",
              name: "attestationUID",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "deleteListing",
          outputs: [],
          stateMutability: "nonpayable",
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
          name: "existingIds",
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
          name: "getAllListings",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "seller",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "attestationUID",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "beds",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "cid",
                  type: "string",
                },
              ],
              internalType: "struct Listings.Listing[]",
              name: "allListings",
              type: "tuple[]",
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
          name: "idToIndex",
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
              name: "",
              type: "uint256",
            },
          ],
          name: "listings",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "attestationUID",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "beds",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "cid",
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
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "beds",
              type: "uint256",
            },
          ],
          name: "updateListing",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
