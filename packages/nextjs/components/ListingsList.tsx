"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

// Skeleton Loader Component
const SkeletonLoader = () => {
  return (
    <li className="px-6 py-6 flex items-center space-x-6 animate-pulse">
      <div className="w-1/3 h-32 bg-gray-300 rounded-md"></div>
      <div className="w-2/3 flex flex-col space-y-2">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="mt-auto flex justify-end">
          <div className="h-10 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </li>
  );
};

export const ListingsList = () => {
  const { address } = useAccount();

  // Fetch all listings from the contract
  const {
    data: listings,
    isLoading: isLoadingListings,
    error: listingsError,
  } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListings",
  });

  // Fetch all listing connections from the contract
  const {
    data: connections,
    isLoading: isLoadingConnections,
    error: connectionsError,
  } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListingConnections",
  });

  const { writeContractAsync, isMining } = useScaffoldWriteContract("Listings");

  const [connectedListings, setConnectedListings] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (connections && address) {
      const userConnectedListings = connections
        .filter(
          (connection: any) =>
            connection.connectedUser && connection.connectedUser.toLowerCase() === address.toLowerCase(),
        )
        .map((connection: any) => connection.listingId);
      setConnectedListings(new Set(userConnectedListings));
    }
  }, [connections, address]);

  const handleMintToContact = async (listingId: number) => {
    try {
      await writeContractAsync({
        functionName: "createListingConnection",
        args: [BigInt(listingId)],
      });
      alert("Successfully created a connection!");
      setConnectedListings(prev => new Set(prev).add(listingId));
    } catch (err) {
      console.error("Error creating listing connection:", err);
      alert("Failed to create a connection. See console for details.");
    }
  };

  if (isLoadingListings || isLoadingConnections) {
    return (
      <div className="flex justify-center mt-12 px-4">
        <div className="w-full max-w-7xl overflow-hidden rounded-m shadow">
          <ul role="list" className="divide-y divide-gray-200">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
          </ul>
        </div>
      </div>
    );
  }

  if (listingsError || connectionsError) {
    return (
      <div className="flex justify-center items-center h-full">
        Error loading data: {listingsError?.message || connectionsError?.message}
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="w-full max-w-7xl overflow-hidden rounded-m shadow">
        <ul role="list" className="divide-y divide-gray-200">
          {listings?.map((listing: any, index: number) => (
            <li key={index} className="px-6 py-6 flex items-center space-x-6">
              <div className="w-1/3 h-100">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={`https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${listing.cid}`}
                  alt={listing.name}
                />
              </div>

              <div className="w-2/3 flex flex-col justify-between space-y-2">
                <div>
                  <h2 className="text-xl font-bold">{listing.name}</h2>
                  <p className="text-lg">
                    Location: <strong>{listing.location}</strong>
                  </p>
                </div>
                <p className="text-base">{listing.description}</p>
                <p className="text-base mt-2">
                  Price: {listing.price.toString()} | Beds: {listing.beds.toString()}
                </p>
                {connectedListings.has(listing.id) ? (
                  <p className="text-red-500 font-semibold">You have already connected with this listing.</p>
                ) : (
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
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingsList;
