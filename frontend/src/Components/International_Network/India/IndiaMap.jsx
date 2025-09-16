import React from 'react'
import india_map from "../../../assets/india_map.avif"
import pin1 from "../../../assets/pin1.png"
import pin2 from "../../../assets/pin2.png"
import pin3 from "../../../assets/pin3.png"
import howrah from "../../../assets/howrah.avif"

const IndiaMap = () => {
    return (
        <div>
            <div className="w-full flex flex-col items-center py-10">
                <div className="relative w-[1400px] h-[700px]">
                    <img
                        src={india_map}
                        className="w-full h-full object-contain max-w-4xl mx-auto bg-no-repeat bg-center bg-contain aspect-[3/4]"
                    />
                    <div className="flex">
                        <div className="absolute left-[580px] top-[200px] flex flex-col items-center">
                            <div className="w-6 h-6">
                                <img
                                    src={pin3} alt="pin3"
                                />
                            </div>
                            <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Delhi</div>
                        </div>

                        <div className="absolute left-[739px] top-[315px] flex flex-row items-center">
                            <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Kolkata</div>
                            <div className="w-6 h-6">
                                <img
                                    src={pin3} alt="pin3"
                                />
                            </div>
                        </div>

                        <div className="absolute left-[665px] top-[325px] flex flex-col gap-2 items-center">
                            <div className="w-6 h-6">
                                <img
                                    src={pin2} alt="pin2"
                                />
                            </div>
                            <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Rajpur</div>
                        </div>

                        <div className="absolute left-[455px] top-[380px] flex flex-row items-center">
                            <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Mumbai</div>
                            <div className="w-6 h-6">
                                <img
                                    src={pin3} alt="pin3"
                                />
                            </div>
                        </div>

                        <div className="absolute left-[570px] top-[500px] flex flex-col gap-2 items-center">
                            <div className="w-6 h-6">
                                <img
                                    src={pin3} alt="pin3"
                                />
                            </div>
                            <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Banglore</div>
                        </div>

                        <div className="absolute left-[639px] top-[495px] flex flex-row items-center">
                            <div className="w-6 h-6">
                                <img
                                    src={pin1} alt="pin1"
                                />
                            </div>
                            <div className="bg-orange-500 text-white text-xs px-1 mt-2 rounded">Chennai</div>
                        </div>


                    </div>
                </div>


                <div className="flex flex-col mt-[-95px] gap-2 text-1sm ml-120">
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

                <div className="w-full h-[135vh] mt-10 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative"
                    style={{
                        backgroundImage: `url(${howrah})`
                    }}
                >
                    <div className="absolute inset-0"></div>
                    <div className="z-10 mb-25">
                        <h1 className="bg-white/100 text-gray-500 text-center wixui-rich-text__text text-2xl px-8 py-2 shadow-md">
                            Training & Development Center <br />Howrah (Kolkata)
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndiaMap
