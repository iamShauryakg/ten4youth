import React from "react";
import { Heart } from "lucide-react"; 

const SupportSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 mb-7">
          SUPPORT YOUTH INCLUSION
        </h2>

        {/* Icon */}
        {/* <div className="flex justify-center mb-6">
          <Heart className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
        </div> */}

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
          Life Project 4 Youth relies on support from businesses, institutions,
          and philanthropists to sustain and expand its impact.{" "}
          <span className="font-semibold">
            90% of all contributions go directly to supporting marginalized Youth
          </span>{" "}
          in the field, while 4% is allocated to administration, 5% to events and
          fundraising, and 1% to communication and advocacy.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
          Your donation, big or small, can transform a young adult's life. From
          €100 to support the first month of sustainable inclusion of one Youth
          to €120,000 to open a new center, every contribution makes a tangible
          impact!
        </p>

        {/* Button */}
        <button className="bg-orange-400 hover:bg-orange-300 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
          SEND A DONATION
        </button>
      </div>
    </section>
  );
};

export default SupportSection;
