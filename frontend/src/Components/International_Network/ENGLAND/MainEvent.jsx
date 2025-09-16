import pix2 from "../../../assets/pix2.png";
import React from 'react'

const MainEvents = () => {
    return (
        <div className="p-4">
            <div className="flex flex-row justify-center items-center gap-8">
                <h2 className="text-3xl mb-2">MAIN EVENTS</h2>
                <img src={pix2} alt="pix2" className="w-30 h-25 mb-4" />
            </div>
            <div className="mb-4 max-w-[900px] my-[10px] mx-auto text-center text-[16px] leading-1.6">
                <p>
                    LP4Y England has always been focused on i<strong>ntegrating young adults,</strong> from inviting LP4Y Youth to participate in the first galas to share their experiences, through Atlantic sailing, or by placing the Green Village Calauan (The Philippines) at the center of the first “Together We Art” in London in 2023 (Architect of One’s life).
                    If you would like to find out more about LP4Y, please join us at our next UK event!
                </p>
            </div>
        </div>
    )
}

export default MainEvents;
