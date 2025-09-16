import { IndonesiaImg2 } from "../../../assets/index.js";
import pin from "../../../assets/pin3.png";

const Map = () => {
  return (
    <div className="relative flex items-center justify-center px-4 py-8">
      {/* Map image */}
      <img src={IndonesiaImg2} alt="Indonesia Map" className="w-full max-w-4xl h-auto" />

      {/* Jakarta Marker */}
      <div className="absolute top-[45%] left-[27%] md:top-[48%] md:left-[30%] flex flex-col items-center">
        <img src={pin} alt="Jakarta Pin" className="w-5 h-5 md:w-6 md:h-6" />
        <span className="bg-[#EC9000] text-white text-[10px] md:text-xs px-2 py-0.5 mt-1 rounded">
          Jakarta
        </span>
      </div>

      {/* Surabaya Marker */}
      <div className="absolute top-[55%] left-[38%] md:top-[58%] md:left-[40%] flex flex-col items-center">
        <img src={pin} alt="Surabaya Pin" className="w-5 h-5 md:w-6 md:h-6" />
        <span className="bg-[#EC9000] text-white text-[10px] md:text-xs px-2 py-0.5 mt-1 rounded">
          Surabaya
        </span>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-white bg-opacity-80 px-3 py-1 rounded shadow">
        <div className="w-5 h-4 bg-[#EC9000]"></div>
        <span className="text-sm text-gray-700 whitespace-nowrap">
          Training & Development Centers
        </span>
      </div>
    </div>
  );
};

export default Map;
