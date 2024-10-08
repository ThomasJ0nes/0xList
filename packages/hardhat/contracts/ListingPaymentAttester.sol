// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

contract ListingPaymentAttester {
	IEAS public immutable _eas;
	bytes32 public immutable _listingPaymentSchemaUID;

	error InvalidEAS();

	constructor(IEAS eas, bytes32 listingPaymentSchemaUID) {
		if (address(eas) == address(0)) {
			revert InvalidEAS();
		}

		_eas = eas;
		_listingPaymentSchemaUID = listingPaymentSchemaUID;
	}

	function attestListingPayment(
		uint256 listingId,
		address buyer
	) external returns (bytes32 attestationUID) {
		return
			_eas.attest(
				AttestationRequest({
					schema: _listingPaymentSchemaUID,
					data: AttestationRequestData({
						recipient: buyer,
						expirationTime: NO_EXPIRATION_TIME,
						revocable: true,
						refUID: EMPTY_UID,
						data: abi.encode(listingId, buyer),
						value: 0
					})
				})
			);
	}
}
