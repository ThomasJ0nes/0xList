"use client";

import React from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const ListingsList = () => {
  // Fetch all listings from the contract
  const {
    data: listings,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListings",
  });

  const { address } = useAccount();

  const { writeContractAsync, isMining } = useScaffoldWriteContract("Listings");

  const handleMintToContact = async (listingId: number) => {
    try {
      await writeContractAsync({
        functionName: "createListingConnection",
        args: [BigInt(listingId)],
      });
      alert("Successfully created a connection!");
    } catch (err) {
      console.error("Error creating listing connection:", err);
      alert("Failed to create a connection. See console for details.");
    }
  };

  // Render loading state
  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading all listings...</div>;
  }

  // Render error state
  if (error) {
    return <div className="flex justify-center items-center h-full">Error loading listings: {error.message}</div>;
  }

  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="w-full max-w-7xl overflow-hidden rounded-m shadow">
        <ul role="list" className="divide-y divide-gray-200">
          {listings?.map((listing: any, index: number) => (
            <li key={index} className="px-6 py-6 flex items-center space-x-6">
              {/* Property Picture */}
              <div className="w-1/3 h-100 ">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={`https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${listing.cid}`}
                  alt={listing.name}
                />
              </div>

              {/* Property Details */}
              <div className="w-2/3 flex flex-col justify-between space-y-2">
                <div>
                  <h2 className="text-xl font-bold">{listing.name}</h2>
                  <p className="text-lg">
                    Location: <strong>{listing.location}</strong>
                  </p>
                </div>
                <p className="text-base ">
                  Price: {listing.price.toString()} | Beds: {listing.beds.toString()}
                </p>
                <div className="flex justify-end">
                  <button
                    className={`btn btn-primary px-4 py-2 text-base font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isMining ? "loading" : ""
                    }`}
                    onClick={() => handleMintToContact(listing.id)}
                    disabled={isMining || address === listing.seller}
                  >
                    {isMining ? "Minting..." : "Mint to contact the owner"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingsList;
