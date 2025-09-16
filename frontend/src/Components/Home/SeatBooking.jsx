
import delaportePoster from '../../assets/delaporte.avif';
import React from "react";

const SeatBooking = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-l grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        
        {/* Poster Image */}
        <div className="flex justify-center">
          <img
            src={delaportePoster} 
            alt="I am the Future Poster"
            className="rounded-lg shadow-lg w-80"
          />
        </div>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold cursive mb-6 bg-gradient-to-r from-green-400 via-purple-500 to-orange-500 text-transparent bg-clip-text">
            I am the Future
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
            Synopsis From France, Indonesia, India and Lebanon, four young adults reflect 
            on the future and place in the community. These crossed destinies 
            converge in New York, where they share their experiences of poverty 
            at the United Nations. Through writing, dance, photography and 
            drawing, the protagonists take a powerful look at our major 
            contemporary challenges.
          </p>

          <button className="bg-[#f89d13] hover:bg-[#f8c313] text-[16px]/[28px] hover:text-[17px] text-[#fff] font-bold border-none mb-[40px] w-[250px]  py-22px px-3px rounded-[20px] hover:rounded-[5px] cursor-pointer transition-all duration-399 ease ">
              BOOK YOUR SEAT
            </button>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
