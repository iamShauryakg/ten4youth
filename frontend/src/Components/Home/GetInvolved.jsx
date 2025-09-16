import React from "react"
import Become from "../../assets/Become.avif";
import philippines from "../../assets/philippines.avif";


const GetInvolved = () => {
  return (
    <section className="bg-white py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl fontweight-200 text-gray-400 flex items-center justify-center gap-2">
          GET INVOLVED WITH LP4Y
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Join Team */}
        <div className="relative overflow-hidden shadow-lg group">
          <img
            src={philippines}
            alt="philippines"
            className="w-full h-80  object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-x1 md:text-2xl font-weight-bold">
              JOIN THE LP4Y TEAMS
            </h3>
          </div>
        </div>

        {/* Become a Partner */}
        <div className="relative overflow-hidden shadow-lg group">
          <img
            src={Become}
            alt="Become"
            className="w-full h-80  object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl md:text-2xl font-weight-bold">
              BECOME A PARTNER
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInvolved;
