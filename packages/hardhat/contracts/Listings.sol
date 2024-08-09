// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./ListingAttester.sol";

contract Listings {
	struct Listing {
		uint256 id;
		string name;
		address seller;
		bytes32 attestationUID;
		string location;
		string description;
		uint256 price;
		uint256 beds;
		string cid;
	}

	uint256 private currentId;
	mapping(uint256 => bool) public existingIds;
	Listing[] public listings;
	mapping(uint256 => uint256) public idToIndex;
	ListingAttester public _listingAttester;

	event AddListing(address indexed seller, uint256 listingId);
	event UpdateListing(
		address indexed seller,
		uint256 listingId,
		string newName
	);
	event DeleteListing(address indexed seller, uint256 listingId);

	error Listings__NotExistedListingId(uint256 listingId);
	error Listings__InvalidSeller(address seller);

	modifier checkExistedListingId(uint256 id) {
		if (!existingIds[id]) {
			revert Listings__NotExistedListingId(id);
		}
		_;
	}

	modifier isSeller(uint256 id) {
		uint256 index = idToIndex[id];
		if (msg.sender != listings[index].seller) {
			revert Listings__InvalidSeller(msg.sender);
		}
		_;
	}

	constructor(address listingAttester) {
		_listingAttester = ListingAttester(listingAttester);
	}

	function addListing(
		string calldata name,
		string calldata location,
		string calldata description,
		uint256 price,
		uint256 beds,
		string calldata cid
	) public {
		bytes32 attestationUID = _listingAttester.attestListing(
			currentId,
			name,
			msg.sender
		);

		Listing memory listing = Listing(
			currentId,
			name,
			msg.sender,
			attestationUID,
			location,
			description,
			price,
			beds,
			cid
		);
		listings.push(listing);

		existingIds[currentId] = true; // Set the currentId as existing before incrementing it
		idToIndex[listing.id] = listings.length - 1;
		emit AddListing(msg.sender, listing.id);

		currentId++;
	}

	function updateListing(
		uint256 id,
		string calldata name,
		string calldata location,
		string calldata description,
		uint256 price,
		uint256 beds
	) public checkExistedListingId(id) isSeller(id) {
		uint256 index = idToIndex[id];

		// Only update fields that are not empty or zero
		if (bytes(name).length > 0) {
			listings[index].name = name;
		}
		if (bytes(location).length > 0) {
			listings[index].location = location;
		}
		if (bytes(description).length > 0) {
			listings[index].description = description;
		}
		if (price > 0) {
			listings[index].price = price;
		}
		if (beds > 0) {
			listings[index].beds = beds;
		}

		emit UpdateListing(msg.sender, id, name);
	}

	function deleteListing(
		uint256 id
	) public checkExistedListingId(id) isSeller(id) {
		uint256 index = idToIndex[id];

		for (uint256 i = index; i < listings.length - 1; i++) {
			listings[i] = listings[i + 1];
			idToIndex[listings[i].id] = i;
		}
		listings.pop();

		delete existingIds[id];
		delete idToIndex[id];

		emit DeleteListing(msg.sender, id);
	}

	function getAllListings()
		public
		view
		returns (Listing[] memory allListings)
	{
		return listings;
	}
}
