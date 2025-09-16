import { useState } from 'react';

import solution_wellbeing from '../../assets/solution_wellbeing.avif';
import solution_enviroment from '../../assets/solution_enviroment.avif';
import solution_citizenship from '../../assets/solution_citizenship.avif';
import icon6 from '../../assets/icon6.avif';

function Inclusion() {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const data = [
        {
            img: solution_wellbeing,
            title: 'wellbeing',
            description: 'Encouraging physical activity, promoting a balanced diet and a healthy lifestyle to foster physical and mental wellbeing'
        },
        {
            img: solution_enviroment,
            title: 'wellbeing',
            description: 'Encouraging physical activity, promoting a balanced diet and a healthy lifestyle to foster physical and mental wellbeing'
        },
        {
            img: solution_citizenship,
            title: 'wellbeing',
            description: 'Encouraging physical activity, promoting a balanced diet and a healthy lifestyle to foster physical and mental wellbeing'
        },
    ]
    
    return (
        <section>
            <div className='flex  justify-center  '>
            <div className='flex flex-col justify-center text-center max-w-[900px] items-center py-20'>
            <div className="flex items-center pb-4">
            <h2 className='text-[30px] font-semibold uppercase '>Comprehensive Inclusion</h2> 
            <img src={icon6} alt="icon" className='h-[100px]' />
            </div>
            <p>
                To ensure sustainable Youth inclusion and to make young adults drivers of change, a holistic approach is necessary.
                TEN4YOUTH has chosen to enrich Youth training through an approach based on 3 transversal axes that are vital to comprehensive Youth inclusion:
            </p>
            </div>
            </div>


          <div className="flex justify-center gap-6 flex-wrap pb-30">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative w-[280px] h-[380px] overflow-hidden rounded-xl group shadow-lg pb-"
        >
          <div className="w-full h-full overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-y-10"
            />
          </div>
          <div className="absolute bottom-0 w-full bg-white text-center py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20px]">
            <h3 className="text-orange-500 font-semibold uppercase tracking-wide text-[20px]">
              {item.title}
            </h3>
            
            {item.description && (
              <p className="text-gray-600 mt-1 text-sm px-2">{item.description}</p>
            )}
          </div>
        </div>
      ))}

            </div>
        </section>
    )
}

export default Inclusion;