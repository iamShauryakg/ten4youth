import React from 'react';
import { Link } from "react-router-dom";
import star from "../../../assets/star.png";

const DonationandSocials = () => {
    return (
        <div className="mx-auto bg-gray-100 min-h-[100px] lla-section flex flex-col justify-between mb-12">

            <div className="flex flex-col lg:flex-row justify-center mt-15 mb-20 items-center lg:items-stretch gap-8 px-4 py-12">

                <div className="flex-1 p-6 text-center flex flex-col items-center">
                    <h3 className="text-xl font-bold text-black mb-20">I donate by credit/debit <br />card</h3>
                    <Link to="/">
                        <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-1.5 px-15 rounded-full transition duration-300">
                            SUPPORT TEN4YOUTH US
                        </div>
                    </Link>
                </div>


                <div className="flex-1 p-6 text-center flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-8 text-black">I donate by bank transfer</h3>
                    <p className="text-gray-800 text-sm text-center mb-8">
                        STEP 1: Fill in the online <br />form to <strong>claim the tax <br /> deduction</strong><br />
                        For all donations over $500, <br />please make a direct transfer <br />to the Life Project 4 Youth <br />bank account.
                    </p>
                    <Link to="/">
                        <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-1.5 px-17 rounded-full mb-8 transition duration-300">
                            FILL IN THE FORM
                        </div>
                    </Link>
                    <p className="text-gray-800 text-sm text-center">
                        STEP 2: <strong>Donate by bank transfer</strong><br /><br />
                        NAME: Bank of America<br />
                        Name Account: LIFE PROJECT 4 YOUTH INC<br />
                        Account: 4830 7718 4707<br />
                        Swift: BOFAUS3N
                    </p>
                </div>


                <div className="flex-1 p-6 text-center flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-8 text-black">I donate by check</h3>
                    <p className="text-gray-800 text-sm mb-8">
                        STEP 1: Fill in the <br />online form to <strong>claim the tax <br />deduction</strong>
                    </p>
                    <Link to="/">
                        <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-1.5 px-17 rounded-full mb-8 transition duration-300">
                            FILL IN THE FORM
                        </div>
                    </Link>
                    <p className="text-gray-800 text-sm text-center">
                        STEP 2: <strong>Donate by check</strong><br /><br />
                        Please make your donation<br /> payable to "TEN4YOUTH US" and<br /> return it to:
                        804 Oakwood<br /> Road, 10543 Mamaroneck,<br /> United States,
                        together with<br /> the donation form.
                    </p>
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

export default DonationandSocials;
