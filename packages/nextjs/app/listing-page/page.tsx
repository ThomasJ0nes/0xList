import React from 'react';

const PropertyForm: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 p-4 mt-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-8">
        {/* Image Upload Placeholder */}
        <div className="flex-1 lg:flex-[0.25] relative h-64 bg-gray-200 flex items-center justify-center text-black text-center font-bold">
          <div className="absolute inset-0 flex items-center justify-center">
            Upload Image
          </div>
        </div>
        
        {/* Form Inputs and Button */}
        <div className="flex-1 lg:flex-[0.75] flex flex-col space-y-4 relative">
          {/* Enter Property Title */}
          <input
            type="text"
            placeholder="Enter Property Title"
            className="input input-bordered w-full max-w-xs h-12 text-sm px-4 py-2"
          />

          {/* Empty Line */}
          <div className="h-4"></div>

          {/* Select City and Select Country */}
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

          {/* Enter Property Type, Select Date, Select No. of beds */}
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

          {/* Enter Price and Your Email */}
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
            <button className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              List Onchain
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-8 mt-12">
        {/* Property Picture */}
        <div className="flex-1 lg:flex-[0.25] relative h-64 bg-gray-200">
          <img
            src="https://via.placeholder.com/150"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Property Details */}
        <div className="flex-1 lg:flex-[0.75] flex flex-col space-y-4">
          {/* Headline */}
          <h2 className="text-xl font-bold mb-2">Available Properties</h2>

          {/* Property Details */}
          <div className="space-y-2">
            <p>Notting Hill, London</p>
            <p>Private | Date available: 02.07.2024 | Flat | 1 bed</p>
            <p>$50 Per Night</p>
            <p className="text-gray-500">Email: example@example.com</p>
          </div>

          {/* Mint to Contact the Owner Button */}
          <div className="flex justify-end mt-auto">
            <button className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Mint to contact the owner
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-8 mt-12">
        {/* Property Picture */}
        <div className="flex-1 lg:flex-[0.25] relative h-64 bg-gray-200">
          <img
            src="https://via.placeholder.com/150"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Property Details */}
        <div className="flex-1 lg:flex-[0.75] flex flex-col space-y-4">
          {/* Headline */}
          <h2 className="text-xl font-bold mb-2">Available Properties</h2>

          {/* Property Details */}
          <div className="space-y-2">
            <p>Notting Hill, London</p>
            <p>Private | Date available: 02.07.2024 | Flat | 1 bed</p>
            <p>$50 Per Night</p>
            <p className="text-gray-500">Email: example@example.com</p>
          </div>

          {/* Mint to Contact the Owner Button */}
          <div className="flex justify-end mt-auto">
            <button className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Mint to contact the owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;