import logo from "../assets/logo.png";
import youth from "../assets/youth.avif";
import { IoIosArrowDropright } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#EC9000] text-white py-12 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left */}
        <div className="flex-1 text-sm space-y-4">
          <img className="h-16" src={logo} alt="logo" />
          <p>
            TEN4YOUTH is a founding member of the{" "}
            <a href="#" className="underline">
              Youth 4 Change Network
            </a>{" "}
            (100+ CSO in 40+ countries) and founder of the{" "}
            <a href="#" className="underline">
              Youth Inclusion Network
            </a>{" "}
            (60+ International Companies). <br />
            TEN4YOUTH holds a special consultative status with the United
            Nations Economic and Social Council.
          </p>
        </div>

        {/* Middle line */}
        <div className="hidden md:block w-px bg-white/70 h-40"></div>

        {/* Right */}
        <div className="flex-1 flex flex-col md:flex-row justify-center gap-12 items-center">
          {/* Center */}
          <div className="text-center space-y-2">
            <h3 className="font-semibold tracking-wide">FOLLOW TEN4YOUTH</h3>
            <div className="flex space-x-3 text-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaFacebookF className="cursor-pointer" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaInstagram className="cursor-pointer" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaLinkedinIn className="cursor-pointer" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="text-center space-y-2">
            <img src={youth} alt="youth" className="h-10 mx-auto" />
            <div className="flex space-x-3 text-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaFacebookF className="cursor-pointer" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaInstagram className="cursor-pointer" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-500">
                <FaLinkedinIn className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 space-y-6 text-center">
        {/* Contact */}
        <div className="flex justify-center items-center gap-2 font-semibold">
          <h3>CONTACT TEN4YOUTH</h3>
          <IoIosArrowDropright className="text-xl" />
        </div>

        {/* Countries */}
        <p className="max-w-4xl mx-auto text-sm">
          <Link to="belgium">Belgium</Link> –{" "}
          <Link to="/bangladesh">Bangladesh</Link> –{" "}
          <Link to="/egypt">Egypt</Link> – <Link to="/england">England</Link> –{" "}
          <Link to="/france">France</Link> – <Link to="/india">India</Link> –{" "}
          <Link to="/indonesia">Indonesia</Link> –
          <Link to="/lebanon">Lebanon</Link> –{" "}
          <Link to="/luxembourg">Luxembourg</Link> –{" "}
          <Link to="/myanmar">Myanmar</Link> – <Link to="/nepal">Nepal</Link> –{" "}
          <Link to="/philippines">Philippines</Link> –{" "}
          <Link to="/usa">USA</Link>
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs">
          <a href="#" className="hover:underline">
            ©TEN4YOUTH 2025
          </a>
          <a href="#" className="hover:underline">
            Impact report
          </a>
          <a href="#" className="hover:underline">
            Publications
          </a>
          <a href="#" className="hover:underline">
            Impact report
          </a>
          <a href="#" className="hover:underline">
            Data protection policy
          </a>
          <a href="#" className="hover:underline">
            Legal documents
          </a>
          <a href="#" className="hover:underline">
            Legal Notice
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
