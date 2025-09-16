import React from 'react'
import Head3 from '../../Head3';
import wing from '../../../assets/wing.avif';
import foundation from '../../../assets/foundation.avif';


const IndiaSection = () => {
    return (

        <>
            <Head3 bgimg={wing} main_text="TEN4YOUTH  INDIA" />
            <div className="w-full min-h-screen flex flex-col justify-center items-center">

                <div className='flex flex-row justify-center items-center max-w-[850px] my-[10px] mx-auto gap-10'>
                    <div className="max-w-[850px] my-[10px] mx-auto text-center mb-4 text-[16px] leading-1.6">
                        <p className="mt-10 text-center">
                            In India, LP4Y is <strong>the Youth Inclusion wing of <a href="https://tomorrowsfoundation.org.in/" target="_blank" className="underline ml-1">Tomorrow’s Foundation.</a></strong> Tomorrow’s Foundation is
                            an Indian non-governmental organization operating in the fields of education, child
                            and differently-abled welfare, skills and resource development.
                        </p>
                        <p className="mt-4 text-center">
                            With 7 centers across the country, LP4Y India is one of the biggest members of the LP4Y Alliance,
                            in terms of the number of Young adults and community members supported.
                        </p>
                    </div>

                    <div>
                        <img src={foundation} alt="foundation" className='w-70 h-30'/>
                    </div>


                </div>


                <div className="flex flex-row items-center justify-center max-w-[850px] my-[10px] mx-auto text-center">
                    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-30 px-6 py-10 md:px-12">
                        <div className="w-[300px] flex flex-col gap-4">
                            <div className="bg-orange-50 p-4 text-center">
                                <div className="text-4xl font-bold text-orange-500">3 221</div>
                                <div className="text-sm text-orange-500 mt-1">
                                    <strong>Youth supported </strong> <br />since 2015
                                </div>
                            </div>
                            <div className="bg-orange-50 p-4 text-center">
                                <div className="text-4xl font-bold text-orange-500">67%</div>
                                <div className="text-sm text-orange-500 mt-1">Youth intergration</div>
                            </div>
                            <div className="bg-orange-50 p-4 text-center">
                                <div className="text-4xl font-bold text-orange-500">2,680</div>
                                <div className="text-sm text-orange-500 mt-1"><strong>Members of the community</strong> <br />positively impacted by the training<br />
                                    sessions run by the Young People in 20244</div>
                            </div>
                        </div>

                        <div className="bg-orange-500 text-start text-white p-8 w-full md:w-1/2 h-[400px]">
                            <div className="text-5xl font-bold mb-4">7 <br />Centers</div>
                            <div className="flex flex-col gap-3 text-lg">
                                <div className="font-bold text-2xl">
                                    <span className="font-bold mr-2">6</span>Training & <br /><span className="text-start pl-6">Development Center </span>
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
        </>
    )
}

export default IndiaSection
