import React from 'react'
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"


const Action_page = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div
                className="w-full h-[80vh] bg-center bg-no-repeat bg-cover flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${image1})`,
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="z-10 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">
                        LP4Y ACTIONS
                    </h1>
                </div>
            </div>

            <section className="w-full bg-white text-center px-4 py-12"></section>
            <h2 className="inline-block bg-orange-400 text-white text-2xl font-bold italic px-6 py-2 rounded">
                SOLUTIONS
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-800 text-base leading-relaxed">
                Over the years, LP4Y has developed several solutions and educational tools
                to support the inclusion of marginalized Youth, enabling their sustainable
                integration. The effectiveness of these solutions and tools is recognized by
                numerous organizations, including the United Nations.
            </p>
            <br /> <br />
            <Link to="/">
                <div className="bg-orange-400 max-w-[450px] uppercase myt-[40px] mx-auto rounded-[25px] text-[24px] text-white font-bold py-[2px] px-[20px]">
                    DISCOVER OUR SOLUTIONS
                </div>
            </Link>
            <br /><br />
            <section className="w-full">
                <img src={image2} alt="Solution" className="w-full h-auto" />
            </section>
            <section className="w-full bg-white text-center px-4 py-12"></section>
            <h2 className="inline-block bg-orange-400 text-white text-2xl font-bold italic px-6 py-2 rounded">
                IMPACT
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-800 text-base leading-relaxed">
                LP4Y has developed Key Impact indicators(Kll) to measure the impact of its solutions. These indicator are used
                by the LP4Y coordination team to assess the strengths of the developed solutions and to identify ways to improve them.
            </p>
            <br /><br />
            <Link to="/">
                <div className="bg-orange-400 max-w-[450px] uppercase myt-[40px] mx-auto rounded-[25px] text-[24px] text-white font-bold py-[2px] px-[20px]">
                    CHECK OUR INDICATORS
                </div>
            </Link>
            <br /><br />
            <section className="w-full">
                <img src={image3} alt="Impact" className="w-full h-auto" />
            </section>
            <section className="w-full bg-white text-center px-4 py-12"></section>
            <h2 className="inline-block bg-orange-400 text-white text-2xl font-bold italic px-6 py-2 rounded">
                INITIATIVES
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-800 text-base leading-relaxed">
                In addition to developing solutions for young adults living in extreme poverty and suffering from
                exclusion, LP4Y initiates actions to bring together corporates, civil society organizations,
                institutions, and individuals, sharing and spreading best practices about inclusion.
            </p>
            <br /><br />
            <Link to="/">
                <div className="bg-orange-400 max-w-[450px] uppercase myt-[40px] mx-auto rounded-[25px] text-[24px] text-white font-bold py-[2px] px-[20px]">
                    DELVE INTO OUR INITIATIVES
                </div>
            </Link>
            <br /><br />
        </div>
    );
};

export default Action_page;
