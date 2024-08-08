"use client";

import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { pinata } from "~~/utils/config";

interface FormData {
  title: string;
  location: string;
  description: string;
  price: bigint;
  beds: bigint;
  image: File | null;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    location: "",
    description: "",
    price: BigInt(0),
    beds: BigInt(0),
    image: null,
  });
  const [showToast, setShowToast] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const { writeContractAsync, isMining } = useScaffoldWriteContract("Listings");
  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: name === "price" || name === "beds" ? BigInt(value) : value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData(prevState => ({
        ...prevState,
        image: files[0],
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    setUploading(true);

    try {
      // Upload image to IPFS
      const keyRequest = await fetch("/api/key", {
        method: "GET",
      });
      const keyData = await keyRequest.json();
      const upload = await pinata.upload.file(formData.image).key(keyData.JWT);

      // Get the CID of the uploaded image
      const cid = upload.IpfsHash;

      // Call the smart contract's addListing function with CID
      await writeContractAsync({
        functionName: "addListing",
        args: [formData.title, formData.location, formData.description, formData.price, formData.beds, cid],
      });

      setShowToast(true);

      // Clear form data
      setFormData({
        title: "",
        location: "",
        description: "",
        price: BigInt(0),
        beds: BigInt(0),
        image: null,
      });
      setUploading(false);
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Failed to create listing. See console for details.");
      setUploading(false);
    }
  };

  return (
    <>
      <div className="px-20 py-8 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-3/5 shadow-md rounded-lg">
          <h2 className="text-4xl font-semibold mb-8">List your property Onchain ⛓️</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-semibold ml-2">Title</span>
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
                  <span className="label-text text-base font-semibold ml-2">Location</span>
                </div>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="UK, London"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-semibold ml-2">Upload Images</span>
                </div>
                <input
                  type="file"
                  name="image"
                  ref={inputFile}
                  onChange={handleFileChange} // Use the new handleFileChange function
                  className="file-input file-input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-base font-semibold ml-2">Description</span>
                </div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </label>
            </div>

            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-semibold ml-2">Price</span>
                </div>
                <input
                  type="number"
                  name="price"
                  value={formData.price.toString()}
                  onChange={handleChange}
                  placeholder="Enter Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-semibold ml-2">Number of Beds</span>
                </div>
                <input
                  type="number"
                  name="beds"
                  value={formData.beds.toString()}
                  onChange={handleChange}
                  placeholder="Enter Number of Beds"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <button
                type="submit"
                className={`btn bg-red-500 w-full text-white ${uploading || isMining ? "loading" : ""}`}
                disabled={uploading || isMining}
              >
                {uploading ? "Uploading..." : isMining ? "Listing..." : "List Property"}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-2/5 p-10 rounded-lg">
          <h2 className="text-3xl font-semibold mb-8">Uploaded Images</h2>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full h-96">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span>Congratulations! Your property has been listed onchain successfully.</span>
          </div>
        </div>
      )}
    </>
  );
}