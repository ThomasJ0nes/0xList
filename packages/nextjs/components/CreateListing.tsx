"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface FormData {
  title: string;
}

const CreateListing: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ title: "" });
  const [showToast, setShowToast] = useState<boolean>(false);

  // Setup write contract using the scaffold hook
  const { writeContractAsync, isMining } = useScaffoldWriteContract("Listings");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ title: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call the smart contract's addItem function without needing to pass an ID
      await writeContractAsync({
        functionName: "addItem",
        args: [formData.title], // Only pass the title as argument
      });

      setShowToast(true);

      // Hide the toast after 10 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 10000);

      // Clear the title after submission
      setFormData({ title: "" });
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Failed to create listing. See console for details.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:space-x-4 mb-8">
        {/* Image Upload Placeholder */}
        <div className="flex-1 lg:flex-[0.25] relative h-64 bg-gray-200 flex items-center justify-center text-black text-center font-bold">
          <div className="absolute inset-0 flex items-center justify-center">Upload Image</div>
        </div>

        {/* Form Inputs and Button */}
        <div className="flex-1 lg:flex-[0.75] flex flex-col space-y-4 relative">
          {/* Enter Property Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Property Title"
            className="input input-bordered w-full max-w-xs h-12 text-sm px-4 py-2"
          />

          {/* Empty Line */}

          {/* Other Inputs (Static for Now) */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Select City"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
            <input
              type="text"
              placeholder="Select Country"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
          </div>

          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter Property Type"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
            <input
              type="date"
              placeholder="Select Date"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
            <input
              type="number"
              placeholder="Select No. of beds"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
          </div>

          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter Price"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered flex-1 max-w-xs h-12 text-sm px-4 py-2"
            />
          </div>

          {/* Button aligned with the input fields */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className={`btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-md ${
                isMining ? "loading" : ""
              }`}
            >
              {isMining ? "Listing..." : "List Onchain"}
              {isMining ? (
                <span className="loading loading-ring loading-sm"></span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-pickaxe"
                >
                  <path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
                  <path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" />
                  <path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
                  <path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </form>
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span>Congratulations! Your property has been listed onchain successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateListing;
