import React from 'react'
import icon_msg from "../../../assets/icon_msg.avif"
import Aman from "../../../assets/Aman.avif"
import Seema from "../../../assets/Seema.avif"
import { Link } from "react-router-dom";


const YouthsTestimonials = () => {
    return (

        <div className="p-2 mb-8">
            <div className="flex flex-row justify-center mb-15 items-cenetr gap-8">
                <h2 className="text-gray-500 mb-2 text-4xl font:bold">YOUTHS' TESTIMONIES</h2>
                <img src={icon_msg} alt="icon_msg" />
            </div>
            <div className="mb-15 max-w-[850px] my-[10px] mx-auto text-start flex flex-row gap-10 text-[16px] leading-1.6">
                <img src={Aman} alt="Jha" className="rounded-full" />
                <p><strong>Aman Jha, Training & Development Center Sangam Vihar</strong> <br />
                    "Hello, I am Aman and I live in Sangam Vihar in New Delhi. Before LP4Y when I went for the interview I felt hesitation and nervousness and my goal was not clear. I have an educational background but LP4Y helped me develop my skills. First I will pass my BBA degree then I want to work in human resources."</p>
            </div>

            <div className="mb-8 max-w-[850px] my-[10px] mx-auto text-start flex flex-row gap-10 text-[16px] leading-1.6">
                <p><strong>Seema, Training & Developement Center Bangalore </strong> <br />
                    “I joined LP4Y in December 2018. Before that, I didn't know what professional life is like. After my training, I worked for 3 months in the LAA and around 3 years for the company Jobzters. I left the job because I had no insurance, and joined Country Delight as a Customer Care Executive of the Quality Team. My husband is disabled and I am also a mother of three, so it is very important that I keep working. My salary is two times bigger than my husband’s. LP4Y is a good opportunity for young mothers to build our professional life.”</p>
                <img src={Seema} alt="Seema_Banglore" className="rounded-full" />
            </div>


            <div className='max-w-[850px] my-[10px] mx-auto mt-20'>
                <Link to="/">
                    <div className="bg-orange-400 max-w-[270px] mb-18 text-center uppercase myt-[40px] mx-auto rounded-[25px] text-[20px] text-white font-bold py-[2px] px-[20px]">
                        READ MORE STORIES
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default YouthsTestimonials
