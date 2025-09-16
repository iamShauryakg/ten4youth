import React from "react";
import img1 from "../../../assets/france_page.avif";
import img2 from "../../../assets/france_page2.avif";
import img3 from "../../../assets/france_page3.avif";

function MainEvent() {
  const imageData = [
    {
      id: 1,
      image: img1,
      title: "TRAINING OF CATALYSTS",
      description:
        "Before joining LP4Y in the field, Catalysts follow a training in France, preparing them for the mission they are undertaking.",
    },
    {
      id: 2,
      image: img2,
      title: "TOGETHER WE ART",
      description:
        "The Together We Art exhibition is a fundraising initiative in support of LP4Y.Art is used here as a means of raising awareness of the need for marginalised young people to have access to decent work opportunities.",
    },
    {
      id: 3,
      image: img3,
      title: "YOUTH INCLUSION INTERNATIONAL FORUM",
      description:
        "Event that aims at bringing together the various actors involved in Youth inclusion (companies, non-profits, teachers, philanthropists, volunteers, etc.).",
    },
  ];
  return (
    <div className=" font-sans">
      <div className="flex flex-col items-center justify-center mt-30">
        <h1 className="text-4xl font-light mb-10">MAIN EVENTS</h1>
        <div className="flex flex-row items-start justify-center">
          {imageData.map((item) => (
            <div
              key={item.id}
              className="w-1/3 flex flex-col items-center justify-center  "
            >
              <div className="w-full h-[100vh] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="relative w-[70%] h-[300px] -top-80 left-16 right-6 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
                  <h2 className="text-3xl font-bold mb-2 text-orange-400 font-mono">
                    {item.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainEvent;
