import React from "react";

const Section = ({ title, subtitle, image, buttonText, bulletPoints, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } justify-center items-center gap-6 md:gap-20 py-10 border-b border-gray-300 text-center md:text-left`}
    >
      <div className="md:w-1/2 flex flex-col gap-4 items-center md:items-start">
        <h3 className="text-3xl font-semibold text-[#444] leading-tight">{title}</h3>
        {Array.isArray(subtitle) ? (
  <ul className="list-disc list-inside text-[#333] text-[17px] space-y-2 text-left">
    {subtitle.map((point, idx) => (
      <li key={idx}>{point}</li>
    ))}
  </ul>
) : (
  <p className="text-[#333] text-[17px] leading-relaxed">{subtitle}</p>
)}

        {bulletPoints && (
          <ul className="list-disc list-inside text-[#333] text-[17px] space-y-2 text-left">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {buttonText && (
          <button className="mt-4 w-[228px] h-[35px] bg-[#F39200] text-white font-bold text-[15px] rounded-full">
            {buttonText}
          </button>
        )}
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={image} alt={title} className="max-h-48 object-contain" />
      </div>
    </div>
  );
};

export default Section;
