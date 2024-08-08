import React from "react";
import Image from "next/image";

const PropertyForm: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 p-4 mt-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-8 mt-12">
        {/* Property Picture */}
        <div className="flex-1 lg:flex-[0.25] relative h-64 bg-gray-200">
          <Image width={300} height={300} src="/frame-1.png" alt="Property" className="w-full h-full object-cover" />
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
          <Image width={300} height={300} src="/frame-1.png" alt="Property" className="w-full h-full object-cover" />
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
