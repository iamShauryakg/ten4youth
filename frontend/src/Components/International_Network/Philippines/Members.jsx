import React, { useState } from 'react'
import dayao from "../../../assets/dayao.avif";
import delaporte from "../../../assets/delaporte.avif";
import denmark from "../../../assets/denmark.avif";
import Albane from "../../../assets/Albane.avif";
import usericon from "../../../assets/usericon.avif";
import Sally from "../../../assets/Sally.avif";


const teamPages = [
    [
        {
            name: 'John Delaporte',
            role: 'President',
            img: delaporte,
        },
        {
            name: 'Joemark Delima',
            role: 'Vice-president',
            img: denmark,
        },
        {
            name: 'Junita Dayao',
            role: 'Secretary',
            img: dayao,
        },
    ],
    [
        {
            name: 'Albane d’Harcourt',
            role: 'Treasurer',
            img: Albane,
        },
        {
            name: 'Sally Day',
            role: 'Country Coordinator',
            img: Sally,
        },
    ],
];


const Members = () => {

    const [pageIndex, setPageIndex] = useState(0);

    const prev = () => {
        setPageIndex((prev) => (prev === 0 ? teamPages.length - 1 : prev - 1));
    };

    const next = () => {
        setPageIndex((prev) => (prev === teamPages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <div className="py-12 text-center">
                <div className="flex flex-row justify-center items-center mb-15 gap-12">
                    <h2 className="text-3xl mb-2 text-gray-500">BOARD MEMBERS</h2>
                    <img src={usericon} alt="User Icon" className="w-12 h-8 mb-4" />
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
        </div>
    )
}

export default Members
