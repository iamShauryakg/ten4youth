import React from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/pagenotfound.png";

const PageNotFound = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Part  */}

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 text-center p-12">
        <h1 className="text-5xl md:text-6xl font-bold text-[#EC9000] mb-4">
          Oops! This Page <br /> Went Off the Map.
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          It is Off the radar. <br />
          Let's get you to the right place
        </p>
        <Link
          to="/"
          className="bg-gray-700 hover:bg-gray-900 text-white px-5 py-3  text-base"
        >
          Back to Home
        </Link>
      </div>
      {/* Right Part */}
      <div className="w-full md:w-1/2">
        <img
          className="w- full h-full object-cover"
          src={pagenotfound}
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
