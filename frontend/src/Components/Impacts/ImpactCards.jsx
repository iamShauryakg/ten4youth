import React from 'react';
import { FaGlobe, FaUniversity, FaUsers, FaHandshake, FaFlask } from "react-icons/fa";
import image4 from "../../assets/image4.png";


const impactData = [
  { number: "14", label: "Countries", icon: <FaGlobe /> },
  { number: "22", label: "Centers", icon: <FaUniversity /> },
  { number: "100+", label: "Youth 4 Change Network Members", icon: <FaUsers /> },
  { number: "60+", label: "Youth Inclusion Network Members", icon: <FaUsers /> },
  { number: "1", label: "Catalyst Co.", icon: <FaHandshake /> },
  { number: "1", label: "YouthLab", icon: <FaFlask /> },
];

const ImpactCards = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
  
      <div className="flex flex-nowrap justify-center items-center gap-2 p-4 w-full max-w-6xl mx-auto mt-6">
        {impactData.map((item, index) => (
          <div
            key={index}
            className={`w-[170px] h-[220px] shrink-0 relative text-white p-4 flex flex-col items-center justify-center group transition-transform duration-300 hover:-translate-y-3 cursor-pointer ${index % 2 === 0 ? "bg-amber-500" : "bg-gray-700"
              }`}
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-13 flex flex-col items-center">
              <div className="text-3xl font-bold item-center text-yellow-200">{item.number}</div>
              <div className="text-sm flex flex-col text-center text-white/80 group-hover:text-white transition-colors duration-300">
                {item.label}
              </div>
            </div>

            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-12">
              {React.cloneElement(item.icon, { className: "text-white text-3xl" })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactCards;
