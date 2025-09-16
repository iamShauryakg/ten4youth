import React from "react";
const StoriesSection = () => {
  return (
    <section className="bg-white">
      {/* Main container */}
      <div className="max-w-8x1 mx-auto py-12 flex flex-col lg:flex-row items-center justify-center gap-10 ">
        {/* Left Side - GIF
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/stories.gif" // from public folder
            alt="LP4Y Stories"
            className="w-full h-auto object-contain rounded-2xl shadow-md"
          />
        </div> */}

        {/* Gray background box for bottom part */}
        <div className="w-full bg-gray-100 text-center py-10">
          <p className="text-lg font-medium text-orange-400 mb-3">
            LP4Y Stories: inspiring LP4Y voices
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
            Through LP4Y Stories newsletter and website, Youths, Stars,
            Catalysts, and Partners share their vision of Inclusion.{" "}
            <span className="font-semibold">
              Dive into the daily lives of young people fighting to escape poverty,
            </span>{" "}
            and discover stories that will inspire you to take action.
          </p>
          <button className="mt-6 bg-orange-400 hover:bg-orange-300 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
            READ THE STORIES
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
