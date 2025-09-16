import { FaBrain } from 'react-icons/fa'

function TrainingCenter() {
    return (
        <>
          <section className="bg-[#efefef] py-[40px] px-[20px] text-center font-sans">
                    <h2 className="text-[20px] mb-[20px]  mx-auto">
                        TEN4YOUTH TRAINING CENTERS
                    </h2>
                    <p className="max-w-[750px] my-[10px] mx-auto text-[14px]">
                        In Asia and the Middle East, TEN4YOUTH creates training centers where young adults design their life projects and develop professional and social skills
                        <strong> through experience,</strong> enabling them to achieve full and sustainable integration.
                    </p>
                    <p className="max-w-[750px] my-[10px] mx-auto text-[14px]">
                        On completion of these training programs, <strong>73% of Youth find decent employment.</strong>
                    </p>
                    <div className="mt-[50px]">
                        <div className=" flex justify-center items-start gap-[50px] flex-wrap mb-[40px]   text-left ">
                            <div className="w-[25%]  min-h-[400px]  bg-white p-[20px] rounded-[20px] shadow-md mb-[20px] ">
                                <img src="https://tse1.mm.bing.net/th/id/OIP.6Ckm4MGXRjZgWQyRkjDDPgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="image here" className="w-[100%] h-auto mb-[20px] rounded-[10px]" />
                                <h2 className="text-[15px] text-[#fa0] font-semibold"> TRAINING & DEVELOPMENT CENTER</h2>
                                <ul className="text-[12px] list-disc pl-[8px]">
                                    <li>Urban area, near slums</li>
                                    <li>1,000 hours of training (6 months)</li>
                                    <li>30-45 Youths +2/3 Coaches</li>
                                    <li>1 micro-company serving the needs of the community</li>
                                    <li>2-week internship</li>
                                    <li>1 month dedication of job search</li>
                                    <li>3-month support for job search after training</li>
                                </ul>
                            </div>
                            <div className="w-[25%] min-h-[400px] bg-white p-[20px] rounded-[20px] shadow-md mb-[20px]">
                                <img src="https://tse1.mm.bing.net/th/id/OIP.6Ckm4MGXRjZgWQyRkjDDPgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="image here" className="w-[100%] h-auto mb-[20px] rounded-[10px]" />
                                <h2 className="text-[15px] text-[#fa0] font-semibold"> TRAINING & DEVELOPMENT CENTER</h2>
                                <ul className="text-[12px] list-disc pl-[8px]">
                                    <li>Rural area</li>
                                    <li>600 hours of training, residential (3 months)</li>
                                    <li>40-60 Youths + 2/3 Coaches</li>
                                    <li>4-6 micro-companies to manage the daily life of the Green Village and serve the needs of the community, with an enphasis on sustainable development </li>
                                    <li>3 weeks dedicated to job search</li>
                                    <li>3-month support for job search after training</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="w-[800px] p-[20px] mt-[-30px] mx-auto">
                        <div className ="text-left text-[12px] text-[#fff] bg-orange-400 rounded-[10px] p-[10px] flex flex-col w-[80%] mx-auto">
                            <div className=" flex items-center font-semibold mb-[5px]">
                                <FaBrain className="text-[17px] ml-[6px]"/>
                                <span className="text-[17px] ml-[10px]  "> MAIN SKILLS DEVELOPED    </span>
                            </div>
                            <div className= "flex">

                                <div className="w-[49%]">
                                    <h3 className="text-[15px]  font-semibold">Soft skills</h3>
                                    <p className="text-1.6 ">
                                        Leadership, teamwork, time management ,critical thinking, public speaking, creativity
                                    </p>
                                </div>

                                <div className="w-[0.3%]  bg-[#fff]" />

                                <div className="w-[49%] ml-[5px]">
                                    <h3 className="text-[15px] font-semibold">Hard skills</h3>
                                    <p className="text-1.6 ">
                                        English, IT, communication tools
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


            </section>
        </>
    )
}
export default TrainingCenter;