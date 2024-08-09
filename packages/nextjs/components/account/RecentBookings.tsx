import React from "react";

const RecentBookings = () => {
  return (
    <div className="  container">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <img className="h-full w-full object-cover" src="/frame-1.png" alt="Large image" />
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div>
            <img className="h-full w-full object-cover" src="/frame-1.png" alt="Small image 1" />
          </div>
          <div>
            <img className="h-full w-full object-cover" src="/frame-1.png" alt="Small image 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBookings;
