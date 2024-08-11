import React from "react";
import MyAccount from "./MyAccount";
import MyListings from "./MyListings";
import RecentBookings from "./RecentBookings";
import { Gauge } from "lucide-react";

const TabNav = () => {
  return (
    <div className="py-10">
      <header>
        <div className=" max-w-8xl px-20">
          <h1 className="text-4xl font-bold leading-tight tracking-tight ">
            Dashboard <Gauge className="inline " />
          </h1>
          <div role="tablist" className="tabs tabs-lifted mt-10">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg font-semibold py-4 px-6" // Increased font size, padding for larger tabs
              aria-label="My Account "
            />

            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <MyAccount />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg font-semibold py-4 px-6" // Increased font size, padding for larger tabs
              aria-label="Your Listings"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <MyListings />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg font-semibold py-4 px-6" // Increased font size, padding for larger tabs
              aria-label="Your Purchases"
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <RecentBookings />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TabNav;
