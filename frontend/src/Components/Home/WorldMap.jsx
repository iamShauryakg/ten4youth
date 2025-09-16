import React, { useState } from "react";
import worldMap from "../../assets/world_map.png";
import sticLog from "../../assets/stic-log.png";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


const countryData = [
  { name: "USA", top: "26%", left: "24%", path: '/usa' },
  { name: "ENGLAND", top: "14%", left: "35%", path: '/england' },
  { name: "FRANCE", top: "25%", left: "39%", path: '/france' },
  { name: "BELGIUM", top: "17%", left: "45%", path: '/belgium' },
  { name: "LUXEMBOURG", top: "25%", left: "47%", path: '/luxembourg' },
  { name: "LEBANON", top: "32%", left: "48%", path: '/lebanon' },
  { name: "NEPAL", top: "32%", left: "61%", path: '/nepal' },
  { name: "BANGLADESH", top: "38%", left: "63%", path: '/bangladesh' },
  { name: "MYANMAR", top: "45%", left: "64%", path: '/myanmar' },
  { name: "INDIA", top: "44%", left: "56%", path: '/india' },
  { name: "INDONESIA", top: "60%", left: "64%", path: '/indonesia' },
  { name: "THE PHILIPPINES", top: "49%", left: "74%", path: '/philippines' },
];
function WorldMap() {
  const [selected, setSelected] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);



  return (
    <div className="items-center">
      <div className="flex items-center justify-center space-x-2 mt-4">
        <h1 className="text-[oklch(0.6_0.01_55.04)] font-wixui text-3xl">
          INTERNATIONAL NETWORK
        </h1>
        <img
          src={sticLog}
          alt=""
          className="w-25 h-16 px-2"
        />
      </div>


      <div className="relative w-120 mt-8 pl-46">
        <div
          className="border-b border-black py-2 cursor-pointer flex justify-between items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-sm">{selected || "COUNTRY"}</span>
          <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            {dropdownOpen ? (
              <RiArrowDropUpLine className="text-3xl text-gray-500" />
            ) : (
              <RiArrowDropDownLine className="text-3xl text-gray-500" />
            )}

          </div>
        </div>

        {dropdownOpen && (
          <ul className="absolute z-10 mt-1 w-76 max-h-60 overflow-y-auto border border-gray-200 bg-white shadow-md rounded text-sm">
            {countryData.map((country) => (
              <li
                key={country.name}
                onClick={() => {
                  setSelected(country.name);
                  setDropdownOpen(false);
                }}
                className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              >
                <Link to={country.path}>
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>



      <div className="relative w-full pl-45 pr-50 mt-8 ml-2">
        <img src={worldMap} alt="World Map" className="w-full height-[500px] width-[850px]" />

        {countryData.map((country) => (
          <Link to={country.path}
            key={country.name}
            className={`absolute text-white px-7 py-0.5 rounded-full text-sm bg-orange-400 shadow transition-transform ${selected === country.name ? "scale-110 ring-2 ring-yellow-300" : ""
              }`}
            style={{ top: country.top, left: country.left }}
          >
            {country.name}
          </Link>
        ))}

      </div>
    </div>
  );
}
export default WorldMap;