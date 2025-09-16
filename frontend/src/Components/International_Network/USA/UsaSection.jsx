import React from 'react';
import main from "../../../assets/main.png";
import Head3 from '../../Head3';

const UsaSection = () => {
    return (
        <>
            <Head3 bgimg={main} main_text="TEN4YOUTH  USA" />
        <div className="w-full min-h-screen flex flex-col justify-center items-center mt-[-100px] ">
            <div className="mb-8 max-w-[850px] my-[8px] mx-auto text-center text-[16px] leading-1.6">
                <p>
                    For nearly 15 years, LP4Y USA has played <strong>a major role in the global fundraising </strong> of training centers for young excluded people.

                    Thanks to its ECOSOC status with the United Nations, LP4Y USA is able to mobilize a whole community around the theme of professional and social <strong>inclusion of young people, </strong> both in a global and local context, through partnership development, advocacy and the sharing of integration solutions.
                </p>
                <br />
                <p>
                    Each year, the various events organized by the team help <strong>to finance the training and full integration of more than 1 in 4 young people supported by LP4Y.</strong> These funds offer Youths who have no access to education and who are excluded from the labour market the opportunity to develop their professional skills, define a life project, become agents of change in their communities, understand the world of decent work and integrate into it, thereby lifting them out of poverty in the long term.
                </p>
                <p className="max-w-[850px] my-[10px] mx-auto mt-6 text-center justify-center text-[16px] leading-1.6 ">In 2024, LP4Y USA counts:</p>
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
        </>
    )
}

export default UsaSection;