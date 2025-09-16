const Textcontent = ({ data }) => {
  const { first, second, heading, missions } = data;

  return (
    <div className="container flex flex-col m-15 items-center px-5 md:px-10 lg:px-15 w-full md:w-[90%] lg:w-[70%] mx-auto">
      {/* First paragraph */}
      <div className="first">
        <p className="text-center text-sm md:text-base lg:text-lg leading-relaxed">
          {first}
        </p>
      </div>

      {/* Second paragraphs */}
      <div className="second my-5 space-y-4">
        {second.map((para, index) => (
          <p key={index} className="text-center text-sm md:text-base lg:text-lg leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Heading and missions */}
      <div className="third">
        <h1 className="text-center my-6 md:my-10 text-lg md:text-xl lg:text-2xl font-semibold">
          {heading}
        </h1>
        <div className="circle">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl md:text-3xl font-bold">
                  {mission.content}
                </div>
                <h3 className="mt-4 md:mt-6 font-semibold text-base md:text-lg text-center">
                  {mission.title}
                </h3>
                <p className="mt-2 md:mt-3 text-gray-600 text-center text-sm md:text-base">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textcontent;
