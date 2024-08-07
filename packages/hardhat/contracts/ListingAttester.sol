// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

contract ListingAttester {
	IEAS public immutable _eas;
	bytes32 public immutable _listingSchemaUID;

	error InvalidEAS();

	constructor(IEAS eas, bytes32 listingSchemaUID) {
		if (address(eas) == address(0)) {
			revert InvalidEAS();
		}

		_eas = eas;
		_listingSchemaUID = listingSchemaUID;
	}

	function attestListing(
		uint256 listingId,
		string memory listingName,
		address seller
	) external returns (bytes32 attestationUID) {
		// return
		// 	_eas.attest(
		// 		AttestationRequest({
		// 			schema: _listingSchemaUID,
		// 			data: AttestationRequestData({
		// 				recipient: seller,
		// 				expirationTime: NO_EXPIRATION_TIME, // No expiration time
		// 				revocable: true,
		// 				refUID: EMPTY_UID, // No references UI
		// 				data: abi.encode(listingId, listingName, seller),
		// 				value: 0 // No value/ETH
		// 			})
		// 		})
		// 	);
        return 0x0d455486a3dadeacfba5f340fe5bf84d1f6678b2e2af53536acc8a4274626f82;  // Return sample value for local testing
	}
}