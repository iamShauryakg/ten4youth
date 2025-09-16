import React, { useState } from 'react';
import dorothee from "../../../assets/dorothee.avif";
import Doutriaux from "../../../assets/Doutriaux.avif";
import Wehry from "../../../assets/Wehry.avif";
import teamIcon from "../../../assets/teamIcon.png";

const teamPages = [
    [
        {
            name: 'Dorothee Rambourg',
            role: 'President',
            description: 'Dorothee is a finance and investor relations leader with 20+ years of experience at global companies including Dior, LVMH, and GSK, across London, Hong Kong, and New York. After transitioning into impact investing recruitment, she now supports LP4Y’s mission in London.',
            img: dorothee,
        },
        {
            name: 'Edouard Doutriaux',
            role: 'Treasurer',
            description: 'Edouard is a director in a large IT company and is passionate about TEN4Youth mission. He joined LP4Y England and the board as Treasurer in 2019, leveraging his leadership and analytical skills.',
            img: Doutriaux,
        },
        {
            name: 'Maude Wehry',
            role: 'Point of contact Partnerships',
            description: 'Maude was inspired to join the board of LP4Y England in 2018 after hearing a Catalyst share her moving story. She is involved in a number of charities all focusing on the 17-26 age group. She is a freelance project manager and a lawyer by training. Maude lived in the Far East for most of her childhood and has lived in London for 20 years.',
            img: Wehry,
        },
    ],

];

const Carousell = () => {
    const [pageIndex, setPageIndex] = useState(0);

    const prev = () => {
        setPageIndex((prev) => (prev === 0 ? teamPages.length - 1 : prev - 1));
    };

    const next = () => {
        setPageIndex((prev) => (prev === teamPages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-gray-100 py-12 text-center lla-section mb-12">
            <div className="flex flex-row justify-center items-center mb-8 mt-15 gap-5">
                <h2 className="text-3xl mb-2">THE TEAM</h2>
                <img src={teamIcon} alt="Team Icon" className="w-25 h-22 mb-4" />
            </div>

            <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4">

               


                <div className="flex flex-row justify-center gap-35 w-full">
                    {teamPages[pageIndex].map((member, i) => (
                        <div key={i} className="text-center">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-52 h-60 object-cover rounded-t-full mx-auto shadow-md"
                            />
                            <p className="mt-4 font-medium text-lg">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.role}</p>
                            <p className="text-sm text-gray-500">{member.description}</p>

                        </div>
                    ))}
                </div>
                
            </div>


            <div className="mt-6 mb-15 flex justify-center gap-2">
                {teamPages.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setPageIndex(idx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition ${pageIndex === idx ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};


export default Carousell;
