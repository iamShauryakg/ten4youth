import React from 'react';
import { Link } from "react-router-dom";
import star from "../../../assets/star.png";

const SocialNetwork = () => {
    return (
        <div className="mx-auto bg-gray-100 min-h-[100px] lla-section flex flex-col justify-between mb-12">

            <div className="flex flex-col lg:flex-row justify-center mt-15 mb-20 items-center lg:items-stretch gap-4 px-4 py-12">

                <div className="flex-1 p-6 text-center flex flex-col items-center">
                    <h3 className="text-xl mb-20">Donate to LP4Y UK by <strong>Apple Pay, Google Pay,<br /> Debit / Credit Card or Direct Debit:</strong></h3>
                    <Link to="/">
                        <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-1.5 px-15 rounded-full transition duration-300">
                            SUPPORT TEN4YOUTH UK
                        </div>
                    </Link>
                </div>




               
            </div>


            <footer className="text-center mb-15">
                <div className="flex justify-center items-center gap-3">
                    <h2 className="text-2xl text-gray-500">SOCIAL NETWORKS</h2>
                    <img src={star} alt="social icon" className="w-10 h-10" />
                </div>
            </footer>
        </div>
    );
};

export default SocialNetwork;
