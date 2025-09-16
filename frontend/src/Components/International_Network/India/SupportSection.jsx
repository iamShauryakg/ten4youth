import React from 'react'
import HEIC from "../../../assets/HEIC.avif"
import icon2 from "../../../assets/icon2.avif"
import donate from "../../../assets/donate.png"
import user_icon from "../../../assets/user_icon.avif"
import collborative from "../../../assets/collborative.avif"
import { Link } from "react-router-dom";

const SupportSection = () => {
    return (
        <div className="lla-section mb-8 p-4">
            <h2 className="font-semibold text-3xl mb-8 mt-15 text-gray-700 text-center">SUPPORT TEN4YOUTH INDIA</h2>
            <div className="flex flex-row text-start items-center gap-15 mb-10 max-w-[850px] my-[10px] mx-auto">
                <div className="flex flex-col gap-2 mb-4 text-start">
                    <div className="items-center flex flex-row gap-2 text-start max-w-[850px] text-[17px] leading-1.6">
                        <h2 className="text-4xl text-gray-500">BECOME A PARTNER</h2>
                        <img src={icon2} alt="icon2" className="w-20 h-20" />
                    </div>
                    <div className="max-w-[500px] mx-auto text-[16px]">
                        <p>The sustainable inclusion of marginalized young adults depends on the commitment of a whole ecosystem supporting their development. To support LP4Y in The Philippines, you can:</p>
                        <ul className='mt-5 list-disc list-outside pl-6'>
                            <li><strong>Get directly involved</strong> with the Youths (by offering interview practice, themed training sessions, company visits)</li>
                            <li><strong>Participate in LP4Y events</strong> such as the Youth Inclusion International Forum</li>
                            <li><strong>Make a financial contribution</strong></li>
                            <li><strong>Mobilize your ecosystem,</strong> raising the voice of the young excluded Youths</li>
                        </ul>
                    </div>
                </div>
                <img src={HEIC} alt="HEIC" />
            </div>
            <Link to="/">
                <div className="bg-orange-400 max-w-[270px] mb-18 text-center uppercase myt-[40px] mx-auto rounded-[25px] text-[20px] text-white font-bold py-[2px] px-[20px]">
                    SUPPORT INCLUSION
                </div>
            </Link>
            <div className="flex flex-col max-w-[850px] my-[10px] mx-auto items-center justify-center">
                <div className="flex flex-row justify-center items-center mb-4">
                    <h2 className="text-3xl text-gray-500 mb-2">DONATION</h2>
                    <img src={donate} alt="donate us" className="w-25 h-22 mb-4" />
                </div>
                <h2 className="text-xl items-center text-center justify-center">You can donate online via <strong>GPay, Apple<br /> Pay or credit / debit card</strong> using our secure<br /> website:</h2>

                <div className="flex flex-col lg:flex-row justify-center mb-10 items-center lg:items-stretch gap-8 px-4 py-12">
                    <div className="flex-1 p-6 text-center flex flex-col items-center justify-center">
                        <Link to="/">
                            <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-1.5 px-15 rounded-full transition duration-300">
                                DONATE NOW
                            </div>
                        </Link>
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
                <img src={collborative} alt="collborative" />
            </div>
            <Link to="/">
                <div className="bg-orange-400 max-w-[250px] mb-18 text-center uppercase myt-[40px] mx-auto rounded-[25px] text-[20px] text-white font-bold py-[2px] px-[20px]">
                    BECOME A CATALYST
                </div>
            </Link>
        </div>
    )
}

export default SupportSection
