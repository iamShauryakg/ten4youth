import { Link } from "react-router-dom";

const Member = ({ data }) => {
  const { heading, headingImg, paragraphs, missions, button } = data;

  return (
    <div className="container flex mb-10 flex-col items-center px-4 md:px-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl mb-4 text-gray-500 flex flex-col md:flex-row items-center gap-2 text-center">
        {heading}
        <img
          src={headingImg}
          alt="user Icon"
          className="h-16 md:h-20 mt-2 md:mt-0"
        />
      </h1>

      {paragraphs.map((para, index) => (
        <p
          key={index}
          className={`text-center mb-4 md:mb-5 w-full md:w-[70%] text-sm md:text-base leading-relaxed ${
            index === paragraphs.length - 1 ? "pb-10" : ""
          }`}
        >
          {para}
        </p>
      ))}

      <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-6xl w-full mb-8">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-64"
          >
            {/* Circle */}
            <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-orange-100 mb-4">
              <img
                src={mission.img}
                alt=""
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg md:text-xl mt-0">
              {mission.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mt-2">
              {mission.description}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-[#EC9000] text-white font-semibold px-6 md:px-8 py-2 rounded-full hover:bg-orange-600 transition text-sm md:text-base">
        <Link to={button.link}>{button.text}</Link>
      </button>
    </div>
  );
};

export default Member;
