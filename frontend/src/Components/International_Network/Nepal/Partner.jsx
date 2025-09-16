import React from 'react'
import icon2 from "../../../assets/icon2.avif"
import marganized from "../../../assets/marganized.avif"
import awareness from "../../../assets/awareness.avif"
import donate from "../../../assets/donate.png";
import user_icon from "../../../assets/user_icon.avif";
import { Link } from "react-router-dom";


const Partner = () => {
    return (
        <div className="lla-section mb-8 p-4">
            <h2 className="font-semibold text-3xl mb-8 mt-8 text-gray-700 text-center">SUPPORT TEN4YOUTH THE NEPAL</h2>
            <div className="flex flex-row text-start items-center justify_center mb-10 max-w-[850px] my-[10px] mx-auto">
                <div className="flex flex-col gap-2 mb-4 text-start">
                    <div className="items-center flex flex-row text-start max-w-[850px] text-[17px] leading-1.6">
                        <h2 className="text-4xl text-gray-500">BECOME A PARTNER</h2>
                        <img src={icon2} alt="icon2" className="w-16 h-16" />
                    </div>
                    <div className="max-w-[450px] mx-auto text-[16px]">
                        <p>The sustainable inclusion of marginalized young adults is only possible with the adoption of <strong>a holistic approach </strong> to inclusion: involving as many actors as possible, whether individual, business, civil society organizations or government. Together we can change the standard of decent employment and vocational training. To support LP4Y in Nepal, you can:</p>
                        <ul className="mt-5">
                            <li><strong>Get directly involved</strong> with the Youths (by offering interview practice, themed training sessions, company visits)</li>
                            <li><strong>Participate in LP4Y events</strong> such as the Youth Inclusion International Forum</li>
                            <li><strong>Make a financial contribution</strong></li>
                            <li><strong>Mobilize your ecosystem,</strong> raising the voice of the young excluded Youths</li>
                        </ul>
                    </div>
                </div>
                <img src={awareness} alt="awareness" />
            </div>
            <Link to="/">
                <div className="bg-orange-400 max-w-[300px] mb-18 text-center uppercase myt-[40px] mx-auto rounded-[25px] text-[20px] text-white font-bold py-[7px] px-[20px]">
                    SUPPORT INCLUSION
                </div>
            </Link>
            <div className="flex flex-col max-w-[850px] my-[10px] mx-auto items-center justify-center">
                <div className="flex flex-row justify-center items-center mb-4 gap-5">
                    <h2 className="text-3xl text-gray-500 mb-2">DONATION</h2>
                    <img src={donate} alt="donate us" className="w-15 h-15 mb-4 rounded-full" />
                </div>
                <h2 className="text-2xl font-semibold">I donate online, by credit card</h2>

                <div className="flex flex-col lg:flex-row justify-center mb-10 items-center lg:items-stretch gap-8 px-4 py-12">

                    <div className="flex-1 p-6 text-center flex flex-col items-center">
                        <h3 className="text-sm font-serif mb-10">STEP 1: I fill in the form online <strong>to claim the tax deduction​</strong></h3>
                        <Link to="/">
                            <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-1.5 px-15 rounded-full transition duration-300">
                                FILL IN THE FORM
                            </div>
                        </Link>
                    </div>


                    <div className="flex-1 p-6 text-center flex flex-col items-center">
                        <h3 className="text-sm font-serif mb-4">STEP 2: <strong>Donation by bank transfer</strong></h3>
                        <p>Life Project 4 Youth Foundation Inc. BDO

                            Bank, Better Living, Parañaque City, The Philippines.

                            PHP - Peso Philippin : 002 400 059 930

                            EUR - Euro : 302 400 095 503

                            USD - Dollar des Etats-Unis : 102 400 074 719

                            City Swift code : BNORPHMM</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row text-start items-center gap-15 mb-12 max-w-[850px] my-[10px] mx-auto">
                <div className="flex flex-col gap-2 mb-4 text-start">
                    <div className="items-center flex flex-row text-start max-w-[850px] text-[17px] leading-1.6">
                        <h2 className="text-4xl text-gray-500">BECOME A CATALYST</h2>
                        <img src={user_icon} alt="user_icon" className="w-35 h-20" />
                    </div>
                    <div className="max-w-[500px] mx-auto text-[16px]">
                        <p>Become a Catalyst in the Philippines and put your skills to use, working for <strong>the inclusion of marginalized Youth!</strong></p> <br />
                        <p>As a volunteer, you will bring positive energy to the Youth, their communities and partners, while evolving in <strong>an international and collaborative framework.</strong></p>
                    </div>
                </div>
                <img src={marganized} alt="marganized" />
            </div>
            <Link to="/">
                <div className="bg-orange-400 max-w-[250px] mb-18 text-center uppercase myt-[40px] mx-auto rounded-[25px] text-[20px] text-white font-bold py-[2px] px-[20px]">
                    BECOME A CATALYST
                </div>
            </Link>
        </div>
    )
}

export default Partner
