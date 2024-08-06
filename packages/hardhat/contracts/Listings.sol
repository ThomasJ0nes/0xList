// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Listings {
	struct Item {
		uint256 id;
		string name;
		address seller;
	}

	uint256 private currentId;
	mapping(uint256 => bool) public existingIds;
	Item[] public items;
	mapping(uint256 => uint256) public idToIndex;

	event AddItem(address indexed seller, uint256 itemId);
	event UpdateItem(address indexed seller, uint256 itemId, string newName);
	event DeleteItem(address indexed seller, uint256 itemId);

	error Listings__NotExistedItemId(uint256 itemId);
	error Listings__InvalidSellerAddress(address seller);

	modifier checkExistedItemId(uint256 id) {
		if (!existingIds[id]) {
			revert Listings__NotExistedItemId(id);
		}
		_;
	}

	modifier isSeller(uint256 id) {
		uint256 index = idToIndex[id];
		if (msg.sender != items[index].seller) {
			revert Listings__InvalidSellerAddress(msg.sender);
		}
		_;
	}

	function addItem(string calldata name) public {
		existingIds[currentId] = true;

		Item memory item = Item(currentId, name, msg.sender);
		items.push(item);
		currentId++;

		idToIndex[item.id] = items.length - 1;

		emit AddItem(msg.sender, item.id);
	}

	function updateItem(
		uint256 id,
		string calldata name
	) public checkExistedItemId(id) isSeller(id) {
		uint256 index = idToIndex[id];
		items[index].name = name;

		emit UpdateItem(msg.sender, id, name);
	}

	function deleteItem(uint256 id) public checkExistedItemId(id) isSeller(id) {
		uint256 index = idToIndex[id];

		for (uint256 i = index; i < items.length - 1; i++) {
			items[i] = items[i + 1];
			idToIndex[items[i].id] = i;
		}
		items.pop();

		delete existingIds[id];
		delete idToIndex[id];

		emit DeleteItem(msg.sender, id);
	}

	function getListings() public view returns (Item[] memory listings) {
		return items;
	}
}
