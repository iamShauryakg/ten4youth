import React from 'react'
import icon_msg from "../../../assets/icon_msg.avif"
import Youth_testimonie from "../../../assets/Youth_testimonie.avif"
import Neupane from "../../../assets/Neupane.avif"
import { Link } from "react-router-dom";


const Godawari = () => {
    return (
        <div className="p-4 mb-8">
            <div className="flex flex-row justify-center items-cenetr gap-8">
                <h2 className="text-gray-500 mb-2 text-4xl font:bold">YOUTHS' TESTIMONIES</h2>
                <img src={icon_msg} alt="icon_msg" />
            </div>
            <div className="mb-15 max-w-[850px] my-[4px] mx-auto text-start flex flex-row gap-10 text-[16px] leading-1.6">
                <img src={Youth_testimonie} alt="Youth_testimonie" className="rounded-full" />
                <p><strong>Astar Pakhrin, STAR, Green Village Godawari</strong> <br />
                    "I am from Hetauda in Nepal. Now I am working in online office. I grew up in a poor family but now by working on myself (how to speak, solve problems, learn, think, save time and money, etc.),  I have been able to keep myself and my family happy. I now have self-esteem, I have been able to live confidently and independently. Now it is very easy for me to work. Many things have changed in my life. I have overcome all challenges and moved forward."</p>
            </div>

            <div className="mb-8 max-w-[850px] my-[5px] wixui-rich-text__text mx-auto text-start flex flex-row gap-10 text-[16px] leading-1.6">
                <p><strong>Saraswati Neupane, STAR, Training and Development Center Kathmandu </strong> <br />
                    "Before joining TDC, I was afraid to talk to people because everyone would laugh at me. My speech was like a child's. And I would go home, close the door and cry. I was nothing. Now this training has changed me. Now I am not afraid to talk to people. Now I like to learn new things every day and I like to work with others. My main objective is to find a decent job as a cashier, because my long term goal is to be a banker. Now, I think I can do something in my life."</p>
                <img src={Neupane} alt="Neupane" className="rounded-full" />
            </div>

            <Link to="/">
                <div className="bg-orange-400 max-w-[300px] mt-18 mb-18 text-center uppercase myt-[40px] mx-auto rounded-[25px] text-[20px] text-white font-bold py-[7px] px-[20px]">
                    READ MORE STORIES
                </div>
            </Link>
        </div>
    )
}

export default Godawari
