"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const MyListings = () => {
  const { address } = useAccount();
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    description: "",
  });

  // Fetch the listings for the user's address
  const {
    data: listings,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: "Listings",
    functionName: "getAllListings",
  });

  const { writeContractAsync } = useScaffoldWriteContract("Listings");

  // Filter listings by the current user's address
  const userSpecificListings = listings?.filter((listing: any) => listing.seller === address);

  const handleEditClick = (listing: any) => {
    setSelectedListing(listing);
    setFormData({
      title: listing.name,
      location: listing.location,
      price: listing.price.toString(),
      beds: listing.beds.toString(),
      description: listing.description,
    });
    (document.getElementById("edit_listing_modal") as HTMLDialogElement)?.showModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await writeContractAsync({
        functionName: "updateListing",
        args: [
          selectedListing.id,
          formData.title,
          formData.location,
          formData.description,
          BigInt(formData.price),
          BigInt(formData.beds),
        ],
      });

      (document.getElementById("edit_listing_modal") as HTMLDialogElement)?.close(); // Close the modal
      setSelectedListing(null); // Clear the selected listing
    } catch (error) {
      console.error("Error updating listing:", error);
      alert("Failed to update listing. See console for details.");
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading your listings...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">Error loading listings: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-20">
      {userSpecificListings?.map((listing: any, index: number) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={`https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${listing.cid}`} alt={listing.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{listing.name}</h2>
            <p>{listing.description}</p>
            <p>Location: {listing.location}</p>
            <p>Price: {listing.price.toString()}</p>
            <p>Beds: {listing.beds.toString()}</p>
            <div className="card-actions justify-end">
              {/* Edit Listing Modal */}
              <button className="btn btn-primary" onClick={() => handleEditClick(listing)}>
                Edit Listing
              </button>
              <dialog id="edit_listing_modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Edit Listing</h3>
                  <p>Edit your on-chain listing. Note this will cost a small gas fee.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">Title</span>
                          </div>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>

                      <div>
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">Location</span>
                          </div>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>

                      <div>
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">Price</span>
                          </div>
                          <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>

                      <div>
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">Number of beds</span>
                          </div>
                          <input
                            type="text"
                            name="beds"
                            value={formData.beds}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="mt-2">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text font-semibold">Description</span>
                        </div>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="textarea textarea-bordered h-24"
                          placeholder="Description"
                        ></textarea>
                      </label>
                    </div>

                    <div className="modal-action">
                      <button type="submit" className="btn btn-primary">
                        Update Listing
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => (document.getElementById("edit_listing_modal") as HTMLDialogElement)?.close()}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyListings;
