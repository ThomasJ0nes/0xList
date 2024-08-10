import React from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const RecentListings = () => {
  const {
    data: listings,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListings",
  });

  // Get the three most recent listings
  const recentListings = listings?.slice(-3).reverse();

  if (isLoading) {
    return <div>Loading recent listings...</div>;
  }

  if (error) {
    return <div>Error loading listings: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-12 px-4">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-8">Recent On Chain Listings</h2>
      </div>
      <div className="flex justify-center  px-4">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentListings?.map((listing, index) => (
            <div key={index} className="flex flex-col p-4 rounded-lg shadow-md">
              <img
                className="w-full h-48 rounded-md object-cover"
                src={`https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${listing.cid}`}
                alt={listing.name}
              />
              <div className="mt-4 text-left">
                <h2 className="text-xl font-bold">{listing.name}</h2>
                <p className="text-lg">
                  Location: <strong>{listing.location}</strong>
                </p>
                <p className="text-base">{listing.description}</p>
                <p className="text-base mt-2">
                  Price: {listing.price.toString()} | Beds: {listing.beds.toString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentListings;
