import React, { useState } from 'react';
import julia from "../../../assets/julia.png";
import descam from "../../../assets/descam.png";
import danial from "../../../assets/danial.png";
import guil from "../../../assets/guil.png";
import ajmani from "../../../assets/ajmani.png";
import jeremy from "../../../assets/jeremy.png";
import teamIcon from "../../../assets/teamIcon.png";

const teamPages = [
    [
        {
            name: 'Ghislain Descamps',
            role: 'President',
            img: descam,
        },
        {
            name: 'Julia Lièvre',
            role: 'Vice-president',
            img: julia,
        },
        {
            name: 'Daniel Raguenez',
            role: 'Treasurer',
            img: danial,
        },
    ],
    [
        {
            name: 'Guillemette Gaullier',
            role: 'General Secretary',
            img: guil,
        },
        {
            name: 'Sonny Ajmani',
            role: 'Board member',
            img: ajmani,
        },
        {
            name: 'Jeremy Le Jan',
            role: 'Board member',
            img: jeremy,
        },
    ],
];

const Carousel = () => {
    const [pageIndex, setPageIndex] = useState(0);

    const prev = () => {
        setPageIndex((prev) => (prev === 0 ? teamPages.length - 1 : prev - 1));
    };

    const next = () => {
        setPageIndex((prev) => (prev === teamPages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-gray-100 py-12 text-center lla-section">
            <div className="flex flex-row justify-center items-center mb-4 gap-5">
                <h2 className="text-3xl mb-2">THE TEAM</h2>
                <img src={teamIcon} alt="Team Icon" className="w-25 h-22 mb-4" />
            </div>

            <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4">

                <button
                    onClick={prev}
                    className="text-5xl text-gray-600 hover:text-black transition"
                >
                    &#8249;
                </button>


                <div className="flex flex-wrap justify-center gap-35 w-full">
                    {teamPages[pageIndex].map((member, i) => (
                        <div key={i} className="text-center">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-52 h-60 object-cover rounded-t-full mx-auto shadow-md"
                            />
                            <p className="mt-4 font-medium text-lg">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={next}
                    className="text-5xl text-gray-600 hover:text-black transition"
                >
                    &#8250;
                </button>
            </div>


            <div className="mt-6 flex justify-center gap-2">
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


export default Carousel;
