import React from 'react'
import frnce from "../../../assets/frnce.png";

const France = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="w-full h-[80vh] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center relative"
                style={{
                    backgroundImage: `url(${frnce})`,
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="z-10 text-center">
                    <h1 className="inline-block bg-orange-400 text-white wixui-rich-text__text font-bold text-5xl px-8 py-2 shadow-md">
                        TEN4YOUTH FRANCE
                    </h1>
                </div>
            </div>
            <br />
            <div className="mb-8 max-w-[850px] my-[10px] mx-auto text-center text-[16px] leading-1.6">
                <p>
                    The LP4Y France team relies on <strong>the commitment and skills of its members</strong> to develop fundraising and advocacy initiatives in France - particularly in Paris, Lille and the Côte d'Azur - for the professional and social inclusion of excluded young adults.
                </p>
                <p>
                    The <strong>YouthLAB Paris</strong>, in Seine-Saint-Denis, is a center for training and sharing expertise, an innovation laboratory for inclusion.
                </p>
                <p className="max-w-[850px] my-[10px] mx-auto mt-2 text-center justify-center text-[16px] leading-1.6 ">In 2024, it counts:</p>
            </div>
            <div className="flex gap-10 md:gap-20 px-4 justify-center mt-8 text-center">
                <div className="text-center group cursor-pointer">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 transform scale-100 group-hover:scale-95 mx-auto">
                        <span className="text-3xl font-bold text-orange-600 transition-transform duration-300">
                            16
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-center text-black">
                        <p>
                            <strong>Awareness campaigns</strong><br />
                            about Youth inclusion
                        </p>
                    </div>
                </div>
                <div className="text-center group cursor-pointer transition-transform duration-300">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 transform scale-100 group-hover:scale-95 mx-auto">
                        <span className="text-3xl font-bold text-orange-600 transition-transform duration-300">
                            787
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-center text-black">
                        <p>
                            <strong>People positively impacted</strong><br />
                            by awareness campaigns <br />regarding Youth inclusion
                        </p>
                    </div>
                </div>
                <div className="text-center group cursor-pointer transition-transform duration-300">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 transform scale-100 group-hover:scale-95 mx-auto">
                        <span className="text-3xl font-bold text-orange-600 transition-transform duration-300">
                            28
                        </span>
                    </div>
                    <div className="mt-5 text-sm text-center text-black">
                        <p>
                            <strong>Volunteers</strong><br />
                            including 68% of women
                        </p>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default France;
