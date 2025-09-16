import React from "react";
import {
  IndonesiaImg8,
  IndonesiaImg9,
  IndonesiaImg10,
  IndonesiaImg11,
  IndonesiaImg12,
} from "../../../assets/index.js";

const Support = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-light text-center tracking-wide text-gray-700 uppercase py-10">
        <span className="font-semibold">SUPPORT TEN4YOUTH INDONESIA</span>
      </h1>

      {/* Become a Partner */}
      <section className="bg-[#f3f3f3] py-16 px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
          <div className="left max-w-xl text-center lg:text-left">
            <h1 className="text-3xl font-light text-gray-800 mb-6 flex items-center justify-center lg:justify-start gap-3">
              BECOME A PARTNER
              <img src={IndonesiaImg8} alt="" className="w-12 h-12" />
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              The sustainable inclusion of marginalized Young adults depends on
              the commitment of a whole ecosystem supporting their development.
              To support TEN4YOUTH in Indonesia, you can:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm">
              <li>
                <b className="font-semibold">Get directly involved</b> with the
                Youths (by offering interview practice, themed training
                sessions, company visits, by spreading the word)
              </li>
              <li>
                <b className="font-semibold">Participate in TEN4YOUTH events</b>{" "}
                such as the Youth Inclusion International Forum
              </li>
              <li>
                <b className="font-semibold">Make a financial contribution</b>
              </li>
              <li>
                <b className="font-semibold">Mobilize your ecosystem,</b>{" "}
                raising the voice of the young excluded Youths
              </li>
            </ul>
          </div>

          <div className="right w-full max-w-md">
            <img
              src={IndonesiaImg9}
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#EC9000] text-white font-semibold px-8 py-2 rounded-full hover:bg-orange-600 transition">
            READ TEN4YOUTH STORIES
          </button>
        </div>
      </section>

      {/* Donation */}
      <section className="bg-white shadow-md py-16 px-6 lg:px-10">
        <h1 className="text-center text-3xl font-light text-gray-800 mb-6 flex items-center justify-center gap-3">
          DONATION <img src={IndonesiaImg10} alt="" className="w-12 h-12" />
        </h1>

        <p className="text-center font-semibold text-lg text-gray-900 mb-10">
          I donate online, by credit card
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 max-w-5xl mx-auto text-center lg:text-left">
          <div className="left flex-1 space-y-6">
            <p className="text-gray-800">
              STEP 1: Fill in the form online{" "}
              <b className="font-semibold">to claim the tax deduction</b>
            </p>
            <button className="bg-[#EC9000] text-white font-semibold px-8 py-2 rounded-full hover:bg-orange-600 transition">
              FILL IN THE FORM
            </button>
          </div>

          <div className="right flex-1 text-sm leading-relaxed text-gray-800">
            <p className="mb-2">
              STEP 2: <b className="font-semibold">Donation by bank transfer</b>
            </p>
            <p>
              TEN4YOUTH Indonesia (Yayasan Inklusi Generasi Muda) <br />
              BCA KCP KREMBANGAN, Jalan Krembangan Barat No 26B, <br />
              Krembangan, Surabaya, Jawa Timur 60175, Indonesia <br />
              Bank Central Asia <br />
              Code bank: 14 <br />
              Account N° 7223333445 <br />
              Owner account: Yayasan Inklusi Generasi Muda <br />
              Owner address: Jalan Swadaya II Blok F No. 259 Semper Timur,{" "}
              <br />
              Cilincing, Jakarta Utara, 14130, Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Become a Catalyst */}
      <section className="bg-[#f3f3f3] py-16 px-6 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 max-w-7xl mx-auto">
          <div className="left max-w-xl text-center lg:text-left">
            <h1 className="text-3xl font-light text-gray-800 mb-6 flex items-center justify-center lg:justify-start gap-3">
              BECOME A CATALYST{" "}
              <img src={IndonesiaImg12} alt="" className="h-12" />
            </h1>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Become a Catalyst in Indonesia and put your skills to use working
              for{" "}
              <b className="font-semibold">
                the inclusion of marginalized Youth!
              </b>
            </p>
            <p className="text-gray-800 leading-relaxed">
              As a volunteer, you will bring positive energy to the Youth, their
              communities and partners, while evolving in{" "}
              <b className="font-semibold">
                an international and collaborative framework
              </b>
            </p>
          </div>

          <div className="right w-full max-w-md">
            <img
              src={IndonesiaImg11}
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#EC9000] text-white font-semibold px-8 py-2 rounded-full hover:bg-orange-600 transition">
            BECOME A CATALYST
          </button>
        </div>
      </section>
    </div>
  );
};

export default Support;
