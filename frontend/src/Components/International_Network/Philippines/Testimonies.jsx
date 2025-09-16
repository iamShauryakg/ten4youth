import React from 'react'
import icon_msg from "../../../assets/icon_msg.avif";
import Mayven from "../../../assets/Mayven.jpg";
import CieloBeraga from "../../../assets/CieloBeraga.jpeg";

const Testimonies = () => {
    return (
        <div className="p-4 mb-8">
            <div className="flex flex-row justify-center items-cenetr gap-8">
                <h2 className="text-gray-500 mb-2 text-4xl font:bold">YOUTHS' TESTIMONIES</h2>
                <img src={icon_msg} alt="icon_msg" />
            </div>
            <div className="mb-15 max-w-[850px] my-[10px] mx-auto text-start flex flex-row gap-10 text-[17px] leading-1.6">
                <img src={Mayven} alt="Mayven" className="rounded-full" />
                <p><strong>Mayvelyn Atregenio, STAR, Training and Development Center Taguig</strong> <br />
                    "My name is Mayvelyn Atregenio from Sitio Maliwanag, I joined LP4Y in 2016. At that time, I was extremely shy and found it difficult to speak with my Coaches because I wasn't confident with my English. However, LP4Y provided a supportive community and invaluable skills that reshaped my future. I completed my training in 2017 and shortly after, I began my career at CGI. Today, I work as an HR professional. Thanks to LP4Y, I am now able to support my family and build a better life for us."</p>
            </div>

            <div className="mb-8 max-w-[850px] my-[10px] mx-auto text-start flex flex-row gap-10 text-[17px] leading-1.6">
                <p><strong>Cielo Baraga, Training and Development Center Taguig </strong> <br />
                "I am Cielo, a senior high school graduate in the Philippines, I had a dream of becoming a translator but stopped due to financial constraints and low confidence. However, I discovered LP4Y's six-month free training program, which included mock interviews and company visits. With the help of LP4Y, I gained confidence in my computer skills and introduced LP4Y to visiting companies. Also with the help of LPP, I am now planning the steps needed to achieve my dream of becoming a translator."</p>
                <img src={CieloBeraga} alt="CieloBeraga" className="rounded-full" />
            </div>

        </div>
    )
}

export default Testimonies
