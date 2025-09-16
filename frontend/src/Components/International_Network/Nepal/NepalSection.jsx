import React from 'react'
import npal from "../../../assets/npal.png"
import Head3 from '../../Head3';

const NepalSection = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items=center">
            <Head3 bgimg={npal} main_text="TEN4YOUTH  NEPAL" />
            <div className="mb-8 max-w-[850px] my-[10px] mx-auto text-center text-[16px] leading-1.6">
                <p className="mt-8 text-center">
                    In Nepal, LP4Y operates as a <strong>non-profit organisation.</strong> Each year, the two training centers support 280 Young <br></br> women from extreme poverty (rural and urban) towards full integration.
                </p>
                <p className="mt-8 text-center mb-12">
                    Thanks to the support of 50 local partners, LP4Y Nepal is now developing the ENGAGE mission, allowing public<br></br> structures, schools and civil society organizations to set up initiatives for the integration of Young adults. For example, the opening of training centers applying LP4Y’s pedagogy, and the implementation of educational tools developed by LP4Y. LP4Y Nepal is a major player <strong>in developing the capacities of Young women.</strong>
                </p>
            </div>


            <div className="flex flex-row items-center justify-center mb-8 max-w-[850px] my-[10px] mx-auto text-center">
                <div className="w-full flex flex-col md:flex-row justify-center items-start gap-30 px-6 py-10 md:px-12">
                    <div className="w-[300px] flex flex-col gap-4">
                        <div className="bg-orange-50 p-4 text-center">
                            <div className="text-4xl font-bold text-orange-400">1026</div>
                            <div className="text-sm text-orange-400 mt-1">
                                <strong>Youth supported </strong> <br />since 2019
                            </div>
                        </div>
                        <div className="bg-orange-50 p-4 text-center">
                            <div className="text-4xl font-bold text-orange-400">80%</div>
                            <div className="text-sm text-orange-400 mt-1">Youth intergration</div>
                        </div>
                        <div className="bg-orange-50 p-4 text-center">
                            <div className="text-4xl font-bold text-orange-400">1936</div>
                            <div className="text-sm text-orange-400 mt-1"><strong>Members of the community</strong> <br />positively impacted by the training<br />
                                sessions run by the Youth in 2024</div>
                        </div>
                    </div>

                    <div className="bg-orange-400 text-start text-white p-8 w-full md:w-1/2 h-[400px]">
                        <div className="text-5xl font-bold mb-4">2 <br />Centers</div>
                        <div className="flex flex-col gap-3 text-lg">
                            <div className="font-bold text-2xl">
                                <span className="font-bold mr-2">1</span>Training & <br /><span className="text-start pl-6">Development Center </span>
                            </div>
                            <div className="font-bold text-2xl">
                                <span className="font-bold mr-2">1</span> Green Village
                            </div>
                            <div className="font-bold text-2xl">
                                <span className="font-bold mr-2">1</span> Little Angels <br /> <span className="text-start pl-7">Academy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NepalSection
