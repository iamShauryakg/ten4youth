import React from 'react'
import nepalMapImage from "../../../assets/nepalMapImage.avif"
import pin1 from "../../../assets/pin1.png"
import pin2 from "../../../assets/pin2.png"
import phakrine from "../../../assets/phakrine.avif"


const NepalMap = () => {
    return (
        <div className="w-full flex flex-col items-center py-10">
            <div className="relative w-[600px] h-[350px]">
                <img
                    src={nepalMapImage}
                    className="w-full h-full object-contain"
                />
                <div className="flex">
                    <div className="absolute left-[376px] top-[180px] flex flex-row gap-3 items-center">
                        <div className="w-6 h-6">
                            <img
                                src={pin2} alt="pin2"
                            />
                        </div>
                        <div className="bg-orange-500 text-white text-xs px-2 py-1 mt-2 rounded">Budhanilkantha</div>
                    </div>


                    <div className="absolute left-[346px] top-[180px] flex flex-col items-center">
                        <div className="w-8 h-8">
                            <img
                                src={pin1} alt="pin1"
                            />
                        </div>
                        <div className="bg-orange-500  text-white text-xs px-2 py-1 mt-4 rounded">Kathmandu</div>
                    </div>

                </div>
            </div>



            <div className="flex flex-col gap-2 mt-20 text-sm ml-100">
                <div className="flex flex-col gap-2 mt-6 text-sm ml-100">
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
            </div>


            <div className="w-full h-[135vh] mt-20 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative"
                style={{
                    backgroundImage: `url(${phakrine})`
                }}
            >
                <div className="absolute inset-0"></div>
                <div className="z-10 mb-25">
                    <h1 className="bg-white/100 text-gray-400 text-center w-96 wixui-rich-text__text text-2xl px-8 py-2 shadow-md">
                        Green Village <br />Godawari
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default NepalMap
