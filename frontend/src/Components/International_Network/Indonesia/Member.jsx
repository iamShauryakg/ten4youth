import { useState } from "react";
import { IndonesiaImg3, IndonesiaImg4 } from "../../../assets/index.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Member = () => {
  const slides = [
    {
      img: IndonesiaImg3,
      text: "Training & Development Center Jakarta",
    },
    {
      img: IndonesiaImg4,
      text: "Training & Development Center Surabaya",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-full">
      {/* Image */}
      <img
        src={slides[currentIndex].img}
        alt="Team"
        className="w-full  "
      />

      {/* Text Box - Center */}
      <div className="absolute inset-15 flex items-end justify-center">
        <div className="bg-white px-10 py-4 shadow-lg">
          <h2 className="text-black text-base font-sm">
            {slides[currentIndex].text}
          </h2>
        </div>
      </div>

      {/* Left Arrow */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 text-black p-2 rounded-full shadow hover:bg-white"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {currentIndex < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 text-black p-2 rounded-full shadow hover:bg-white"
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Member;
