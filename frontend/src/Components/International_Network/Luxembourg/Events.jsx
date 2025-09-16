import { useState } from "react";

const Events = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container m-10 flex flex-col items-center px-5 md:px-10 lg:px-15 mx-auto">
      <h1 className="text-2xl md:text-3xl mb-4 text-gray-500 flex flex-col md:flex-row items-center gap-2">
        {data.heading}
        <img
          src={data.headingIcon}
          alt="event Icon"
          className="h-14 md:h-20 pb-3 md:mb-0"
        />
      </h1>

      <p className="w-[80%] text-center text-sm md:text-base lg:text-lg leading-relaxed mb-10">
        {data.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-center cardContainer">
        {data.cards.map((card, index) => (
          <div key={index} className="w-64 h-80 mx-auto relative group">
            {/* Large screen (Hover Flip) */}
            <div className="hidden md:block flip-card w-full h-full">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full bg-orange-100 text-gray-800 rounded-xl shadow-lg p-4 flex flex-col justify-center items-center backface-hidden rotate-y-180">
                  <h2 className="text-lg md:text-xl font-bold text-center mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-center">{card.description}</p>
                </div>
              </div>
            </div>

            {/* Small screen (Tap to Expand Overlay) */}
            <div
              className="md:hidden relative w-full h-full rounded-xl overflow-hidden shadow-lg"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute bottom-0 w-full flex flex-col justify-end items-center text-white p-4 transition-all duration-500 ${
                  openIndex === index
                    ? "bg-orange-600/90 h-full"
                    : "bg-gradient-to-b from-orange-500/90 via-orange-400/70 to-transparent h-[30%]"
                }`}
              >
                <h2 className="text-lg font-bold text-center">{card.title}</h2>
                {openIndex === index ? (
                  <p className="text-sm text-center mt-2">{card.description}</p>
                ) : (
                  <span className="text-xs italic opacity-80 mt-1">
                    Tap to see more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
