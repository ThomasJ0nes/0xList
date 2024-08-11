"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const RecentBookings = () => {
  const { address } = useAccount();

  // Fetch all listing payments (buyers) from the contract
  const {
    data: payments,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListingPayments",
  });

  const { data: listings } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListings",
  });

  const [userPayments, setUserPayments] = useState<any[]>([]);

  useEffect(() => {
    if (payments && listings && address) {
      const filteredPayments = payments
        .filter((payment: any) => payment.buyer.toLowerCase() === address.toLowerCase())
        .map((payment: any) => {
          const listing = listings.find((listing: any) => listing.id === payment.listingId);
          return {
            ...payment,
            name: listing?.name,
            cid: listing?.cid,
            price: listing?.price,
          };
        });
      setUserPayments(filteredPayments);
    }
  }, [payments, listings, address]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading payments: {error.message}</div>;
  }

  if (userPayments.length === 0) {
    return <div>No recent bookings found.</div>;
  }

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        {userPayments.map((payment: any, index: number) => (
          <div key={index} className="col-span-1">
            <div className="border p-4 rounded-lg shadow-md">
              <img
                className="h-full w-full object-cover"
                src={`https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${payment.cid}`}
                alt={`Booking for ${payment.name}`}
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">Listing: {payment.name}</h3>
                <p>Price: {payment.price.toString()} WEI</p>
                <p>Buyer: {payment.buyer}</p>
                <p className="text-sm">Attestation UID: {payment.attestationUID}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;
