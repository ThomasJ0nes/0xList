import React from "react";
import { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/6953962/pexels-photo-6953962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero Image"
        />
        <div>
          <h1 className="text-5xl font-bold">0xList</h1>
          <p className="py-6">
            World’s First Onchain Listing Marketplace
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;