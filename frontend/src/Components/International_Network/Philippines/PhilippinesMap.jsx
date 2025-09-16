import React from 'react'
import PhilMap from "../../../assets/PhilMap.avif";
import pin1 from "../../../assets/pin1.png";
import pin2 from "../../../assets/pin2.png";
import pin3 from "../../../assets/pin3.png";
import trainingimage from "../../../assets/trainingimage.avif";

const PhilippinesMap = () => {
    return (
        <div className="w-full flex flex-col items-center py-10">
            <div className="relative w-[850px] h-[480px]">
                <img
                    src={PhilMap}
                    className="w-full h-full object-contain max-w-4xl mx-auto bg-no-repeat bg-center bg-contain aspect-[3/4]"
                />
                <div className="flex">
                    <div className="absolute left-[385px] top-[-7px] flex flex-col items-center">
                        <div className="w-6 h-6">
                            <img
                                src={pin3} alt="pin3"
                            />
                        </div>
                        <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Cagayan De Oro</div>
                    </div>

                    <div className="absolute left-[350px] top-[106px] flex flex-row items-center">
                        <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Tondo</div>
                        <div className="w-6 h-6">
                            <img
                                src={pin1} alt="pin1"
                            />
                        </div>
                    </div>

                    <div className="absolute left-[400px] top-[100px] flex flex-row items-center">
                        <div className="w-6 h-6">
                            <img
                                src={pin3} alt="pin3"
                            />
                        </div>
                        <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Payatas</div>
                    </div>

                    <div className="absolute left-[340px] top-[124px] flex flex-row items-center">
                        <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Taguig</div>
                        <div className="w-6 h-6">
                            <img
                                src={pin3} alt="pin3"
                            />
                        </div>
                    </div>

                    <div className="absolute left-[400px] top-[120px] flex flex-row items-center">
                        <div className="w-6 h-6">
                            <img
                                src={pin2} alt="pin2"
                            />
                        </div>
                        <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Calauan</div>
                    </div>

                    <div className="absolute left-[472px] top-[235px] flex flex-row items-center">
                        <div className="w-6 h-6">
                            <img
                                src={pin3} alt="pin3"
                            />
                        </div>
                        <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Cebu</div>
                    </div>


                    <div className="absolute left-[488px] top-[297px] flex flex-row items-center">
                        <div className="w-8 h-8">
                            <img
                                src={pin3} alt="pin3"
                            />
                        </div>
                        <div className="bg-orange-500 text-white text-xs px-1 mt-4 rounded">Iligan</div>
                    </div>

                </div>
            </div>


            <div className="flex flex-col gap-2 mt-6 text-1sm ml-100">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-7 bg-orange-500"></div>
                    <div>Training & Development Center</div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-12 h-7 bg-green-500"></div>
                    <div>Green Villages</div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-12 h-7 bg-blue-500"></div>
                    <div>Little Angels Academy</div>
                </div>
            </div>

            <div className="w-full h-[135vh] mt-6 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative"
                style={{
                    backgroundImage: `url(${trainingimage})`
                }}
            >
                <div className="absolute inset-0"></div>
                <div className="z-10 mb-25">
                    <h1 className="bg-white/100 text-gray-500 text-center wixui-rich-text__text text-2xl px-8 py-2 shadow-md">
                        Training & Development Center <br />Taguig
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default PhilippinesMap
