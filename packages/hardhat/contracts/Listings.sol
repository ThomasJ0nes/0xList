// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import { ListingAttester } from "./ListingAttester.sol";
import { ListingConnectionAttester } from "./ListingConnectionAttester.sol";
import { ListingPaymentAttester } from "./ListingPaymentAttester.sol";

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

	struct ListingConnection {
		uint256 listingId;
		address connectedUser;
		bytes32 attestationUID;
	}

	struct ListingPayment {
		uint256 listingId;
		address buyer;
		bytes32 attestationUID;
	}

	uint256 private currentId;
	mapping(uint256 => bool) public existingIds;
	Listing[] public listings;
	mapping(uint256 => uint256) public idToIndex;
	ListingAttester public immutable _listingAttester;

	mapping(uint256 => mapping(address => bool)) public connectedUsers;
	ListingConnectionAttester public immutable _listingConnectionAttester;
	ListingConnection[] public listingConnections;

	mapping(uint256 => address) public buyers;
	ListingPaymentAttester public immutable _listingPaymentAttester;
	ListingPayment[] public listingPayments;

	event AddListing(address indexed seller, uint256 listingId);
	event UpdateListing(
		address indexed seller,
		uint256 listingId,
		string newName
	);
	event DeleteListing(address indexed seller, uint256 listingId);
	event BuyListing(address indexed buyer, uint256 listingId);
	event CreateListingConnection(
		address indexed connectedUser,
		uint256 listingId
	);

	error Listings__NotExistedListingId(uint256 listingId);
	error Listings__InvalidSeller(address seller);
	error Listings__SellerCannotSelfConnected(
		address connectedUser,
		uint256 listingId
	);
	error Listings_ListingUnavailableForBuying(uint256 listingId);
	error Listings__UserAlreadyConnected(
		address connectedUser,
		uint256 listingId
	);
	error Listings__InvalidConnectedUser(address connectedUser);
	error Listings__UnequalAmountOfETHAndPrice(
		uint256 amountOfETH,
		uint256 price
	);
	error FailedTodSendEther();

	modifier checkExistedListingId(uint256 id) {
		if (!existingIds[id]) {
			revert Listings__NotExistedListingId(id);
		}
		_;
	}

	modifier isSeller(uint256 listingId) {
		uint256 index = idToIndex[listingId];
		if (msg.sender != listings[index].seller) {
			revert Listings__InvalidSeller(msg.sender);
		}
		_;
	}

	modifier isListingAvailableForBuying(uint256 listingId) {
		if (buyers[listingId] != address(0)) {
			revert Listings_ListingUnavailableForBuying(listingId);
		}
		_;
	}

	modifier isValidConnectedUser(uint256 listingId) {
		if (!connectedUsers[listingId][msg.sender]) {
			revert Listings__InvalidConnectedUser(msg.sender);
		}
		_;
	}

	constructor(
		address listingAttester,
		address listingConnectionAttester,
		address listingPaymentAttester
	) {
		_listingAttester = ListingAttester(listingAttester);
		_listingConnectionAttester = ListingConnectionAttester(
			listingConnectionAttester
		);
		_listingPaymentAttester = ListingPaymentAttester(
			listingPaymentAttester
		);
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

		existingIds[currentId] = true;
		idToIndex[listing.id] = listings.length - 1;
		currentId++;

		emit AddListing(msg.sender, listing.id);
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

	function createListingConnection(
		uint256 listingId
	)
		public
		checkExistedListingId(listingId)
		isListingAvailableForBuying(listingId)
		returns (bytes32 attestationUID)
	{
		uint256 index = idToIndex[listingId];

		if (msg.sender == listings[index].seller) {
			revert Listings__SellerCannotSelfConnected(msg.sender, listingId);
		}

		if (connectedUsers[listingId][msg.sender]) {
			revert Listings__UserAlreadyConnected(msg.sender, listingId);
		}

		connectedUsers[listingId][msg.sender] = true;
		attestationUID = _listingConnectionAttester.attestListingConnection(
			listingId,
			msg.sender
		);
		ListingConnection memory listingConnection = ListingConnection(
			listingId,
			msg.sender,
			attestationUID
		);
		listingConnections.push(listingConnection);

		emit CreateListingConnection(msg.sender, listingId);
	}

	function buyListing(
		uint256 id
	)
		public
		payable
		checkExistedListingId(id)
		isListingAvailableForBuying(id)
		isValidConnectedUser(id)
	{
		uint256 index = idToIndex[id];

		if (msg.value != listings[index].price) {
			revert Listings__UnequalAmountOfETHAndPrice(
				msg.value,
				listings[index].price
			);
		}

		buyers[id] = msg.sender;

		bytes32 attestationUID = _listingPaymentAttester.attestListingPayment(
			id,
			msg.sender
		);
		ListingPayment memory listingPayment = ListingPayment(
			id,
			msg.sender,
			attestationUID
		);
		listingPayments.push(listingPayment);

		(bool success, ) = listings[index].seller.call{ value: msg.value }("");
		if (!success) {
			revert FailedTodSendEther();
		}

		emit BuyListing(msg.sender, id);
	}

	function getAllListings()
		public
		view
		returns (Listing[] memory allListings)
	{
		return listings;
	}

	function getAllListingConnections()
		public
		view
		returns (ListingConnection[] memory allListingConnections)
	{
		return listingConnections;
	}

	function getAllListingPayments()
		public
		view
		returns (ListingPayment[] memory allListingPayments)
	{
		return listingPayments;
	}
}
