import React from 'react';
import engld from "../../../assets/engld.avif";
import Head3 from '../../Head3';

const EnglandSection = () => {
    return (
        <>
            <Head3 bgimg={engld} main_text="TEN4YOUTH  ENGLAND" />
            <div className="w-full min-h-screen flex flex-col justify-center items-center mt-[-100px] ">
                <div className="mb-15 max-w-[850px] mt-25 my-[8px] mx-auto text-center text-[16px] leading-1.6">
                    <p>
                        TEN4YOUTH England’s mission is to contribute to TEN4YOUTH impact by <strong>increasing advocacy</strong> across London multicultural community, <strong>raising funds</strong> from individuals through friendly gathering, Together We Art exhibition and sportive events, <strong>building partnerships</strong> with corporates and foundations, and <strong>triggering new human and corporate inclusion initiatives.</strong>
                    </p>
                    <br />
                    <p>
                        In 2024, it counts:
                    </p>
                </div>
                <div className="flex gap-10 md:gap-20 px-4 justify-center mt-8 text-center">
                    <div className="text-center group cursor-pointer">
                        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 transform scale-100 group-hover:scale-95 mx-auto">
                            <span className="text-6xl font-bold text-orange-600 transition-transform duration-300">
                                5
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
                            <span className="text-5xl font-bold text-orange-600 transition-transform duration-300">
                                680
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
                            <span className="text-5xl font-bold text-orange-600 transition-transform duration-300">
                                40
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
        </>
    )
}

export default EnglandSection;