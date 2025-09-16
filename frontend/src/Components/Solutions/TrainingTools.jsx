import { Link } from 'react-router-dom'

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.avif";
import icon3 from "../../assets/icon3.avif";
import icon4 from "../../assets/icon4.avif";
import icon5 from "../../assets/icon5.avif";



function TrainingTools() {
    const tools = [
        {
            icon: icon1,
            title: 'MICRO-COMPANY',
            description: 'Tailored to the needs of local communities, the micor-company offers weekly training in health, sports, IT, and access to decent employment. Managed by the Youth, it serves as a pedagogical toool for learning by doing, allowing them to gain positive first professional experience and essential interpersonal skills.'
        },
        {
            icon:  icon2,
            title: 'PROFESSIONAL EXPOSURE',
            description: 'TEN4YOUTH runs an ecosystem of partners that conducts various professional exposure activities (mock interviews, training sessions, company visits, etc.), enabling partners to assess the potential of Youth and Youth to prepare for entering the professional world.'
        },
        {
            icon: icon3,
            title: 'BUILDING A LIFE PROJECT',
            description: 'Individual and group coaching sessions support Youths in discovering their short and long-term goals, seeking decent employment, and pursuing both personal and professional development..'
        },
        {
            icon: icon4,
            title: 'LIFE PROJECT MONEY',
            description: 'Financial support that helps Youths meet their basic needs, allowing them to focus on their training. They learn to manage their money and independently budget expenses related to their life project (Life Project Plan).'
        },
    ];

    return (
        <section className="text-center segoe py-[60px] px-[40px] bg-white">
            <div className="flex gap-[60px] justify-center items-center mx-auto" >
            <h2 className='text-[28px] text-[#787272] uppercase tracking-wider '>Innovative Training Tools
                
            </h2>
             <img className="h-[70px]" src={icon5} alt="icon" />
            </div>
            
            
                <div className="flex justify-center gap-[40px] flex-wrap mb-[70px]">
                    {tools.map((tool, index) => (
                        <div key={index} className="max-w-[250px] text-center p-[10px]">
                            {typeof tool.icon === 'string' ? (
                                <img className="h-[100px] w-auto mx-auto" src={tool.icon} alt="{tool.title}" />
                            )
                        : (
                            
                            <div >{tool.icon}</div>
                        )}
                            <h3 className="text-[#fe9859] font-bold text-[20px] mb-[10px]">{tool.title}</h3>
                            <p className="text-[15px] text-[#333] text-1.6 ">{tool.description}</p>
                        </div>

                    ))}
                </div>
                <div className="bg-orange-400 max-w-[450px] myt-[40px] mx-auto rounded-[30px] text-[24px] text-white font-bold py-[5px] px-[20px]">
                    <Link to="/">
                        <div > 
                            GET INVOLVED WITH TEN4YOUTH
                        </div>
                    </Link>
                </div>
        </section>
    )
}
export default TrainingTools;