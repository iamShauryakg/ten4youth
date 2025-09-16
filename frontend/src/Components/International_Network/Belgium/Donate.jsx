import React from "react";

const Donate = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {/* Left Section */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            I donate by bank transfer
          </h2>
          <h3 className="text-sm md:text-base font-medium mb-4">
            ONE-OFF OR REGULAR
          </h3>
          <p className="text-sm mb-3">
            STEP 1: Fill out the online form to benefit from the tax deduction
          </p>
          <a
            href="#"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition mb-3"
          >
            FILL THE FORM
          </a>
          <p className="text-sm mb-3">
            OR Download the support voucher and send it by email at contact
            TEN4YOUTH.org or by mail to TEN4YOUTH – Avenue docteur Decroly 28,
            1180 Uccle, Belgium
          </p>
          <p className="text-sm whitespace-pre-line mb-3">
            STEP 2: Donation by bank transfer{"\n"}
            Life Project 4 Youth BNP Fort Jaco, 1180 Uccle{"\n"}
            IBAN: BE03 0019 3101 6584{"\n"}
            BIC: GEBABEBB
          </p>
          <p className="text-xs text-gray-500">
            NB: Prefer donations by bank transfer to avoid commission charges.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            I donate online via Debit Card, Apple Pay or Google Pay
          </h2>
          <a
            href="#"
            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            DONATE NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
