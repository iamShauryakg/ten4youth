import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <section>
      {/* Top Bar */}
      <div className="flex justify-between md:justify-around items-center px-6 md:px-20 py-4">
        {/* Search */}
        <div className="border border-gray-400 flex items-center px-3 py-2 group focus-within:border-[#EC9000] focus-within:opacity-70">
          <i className="text-lg mr-2 scale-x-[-1] text-gray-500 group-hover:text-[#EC9000]">
            &#x1F50E;&#xFE0E;
          </i>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
          />
        </div>

        {/* Logo */}
        <Link to="/" className="mx-4">
          <img src={Logo} alt="logo" className="w-32 md:w-40" />
        </Link>

        {/* Donate button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded">
            DONATE
          </button>
        </div>


        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>


      {/* Desktop / Medium & Large */}
      <nav className="hidden md:flex bg-[#EC9000] w-full h-[40px] text-white text-md">

        <div className="flex-1 relative group text-center hover:bg-[#FFBB56] transition-all duration-500">
          <NavLink to="" className="">
            <div className="h-full flex items-center justify-center">
              TEN4YOUTH ALLIANCE
            </div>
          </NavLink>
          <div className="absolute top-full left-0 w-full bg-[#EC9000] text-white hidden group-hover:block z-50">
            <div className="p-2 hover:bg-[#FFBB56]">
              <Link to="/strategy">TEN4YOUTH STRATEGY</Link>
            </div>
            <div className="p-2 hover:bg-[#FFBB56]">
              <NavLink to="/accompaniedpage">YOUTH ACCOMPANIED</NavLink>
            </div>
          </div>
        </div>

        {/* ACTIONS with dropdown */}
        <div className="flex-1 relative group text-center hover:bg-[#FFBB56] transition duration-500">
          <NavLink to="/action" className="">
            <div className="h-full flex items-center justify-center">ACTIONS</div>
          </NavLink>
          <div className="absolute top-full left-0 w-full bg-[#EC9000] text-white hidden group-hover:block z-50">
            <div className="p-2 hover:bg-[#FFBB56]">
              <NavLink to="/solution">SOLUTIONS</NavLink>
            </div>
            <div className="p-2 hover:bg-[#FFBB56]">
              <NavLink to="/impact">IMPACT</NavLink>
            </div>
            <div className="p-2 hover:bg-[#FFBB56]">
              <NavLink to="/initiatives">TEN4YOUTH INITIATIVES</NavLink>
            </div>
          </div>
        </div>

        {/* Other Main Items */}
        <div className="flex-1 text-center hover:bg-[#FFBB56]">
          <Link to="/international-network" className="h-full flex items-center justify-center">
            INTERNATIONAL NETWORK
          </Link>
        </div>

        <div className="flex-1 relative group text-center hover:bg-[#FFBB56]">
          <div className="h-full flex items-center justify-center">
          <Link to="/get-involved" className="h-full flex items-center justify-center">
            GET INVOLVED WITH TEN4YOUTH
          </Link>
          </div>
          <div className="absolute top-full left-0 w-full bg-[#EC9000] text-white hidden group-hover:block z-50">
            <div className="p-2 hover:bg-[#FFBB56]">
              <NavLink to="/jointen4youth">JOIN THE TEN4YOUTH TEAM</NavLink>
            </div>
            <div className="p-2 hover:bg-[#FFBB56]">
              <NavLink to="">BECOME A MEMBER</NavLink>
            </div>
          </div>
        </div>

        <div className="flex-1 text-center hover:bg-[#FFBB56]">
          <Link to="/contact" className="h-full flex items-center justify-center">
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#EC9000] text-white">

          <div className="p-3 border-b border-[#FFBB56] hover:bg-[#FFBB56] activebg-[#FFBB56] transition">
            <NavLink to="/">HOME</NavLink>
          </div>
          <div className="p-3 border-b border-[#FFBB56] hover:bg-[#FFBB56] activebg-[#FFBB56] transition">
            <NavLink to="/action">ACTIONS</NavLink>
          </div>
          <div className="p-3 border-b border-[#FFBB56] hover:bg-[#FFBB56] activebg-[#FFBB56] transition">
            <NavLink to="/international-network">INTERNATIONAL NETWORK</NavLink>
          </div>
          <div className="p-3 border-b border-[#FFBB56] hover:bg-[#FFBB56] activebg-[#FFBB56] transition">
            <NavLink to="/">GET INVOLVED WITH TEN4YOUTH</NavLink>
          </div>
          <div className="p-3 border-b border-[#FFBB56] hover:bg-[#FFBB56] activebg-[#FFBB56] transition">
            <NavLink to="/contact">CONTACT</NavLink>
          </div>

          {/* More Button */}
          <div className="p-3 border-b border-[#FFBB56] cursor-pointer" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Hide More ▲" : "More ▼"}
          </div>

        
{showMore && (
  <div className="bg-[#EC9000]">
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <Link to="/strategy">TEN4YOUTH STRATEGY</Link>
    </div>
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <NavLink to="">YOUTH ACCOMPANIED</NavLink>
    </div>
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <NavLink to="/solution">SOLUTIONS</NavLink>
    </div>
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <NavLink to="/impact">IMPACT</NavLink>
    </div>
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <NavLink to="">TEN4YOUTH INITIATIVES</NavLink>
    </div>
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <NavLink to="/jointen4youth">JOIN THE TEAM</NavLink>
    </div>
    <div className="p-2 hover:bg-[#FFBB56] active:bg-[#FFBB56] transition">
      <NavLink to="">BECOME A MEMBER</NavLink>
    </div>
  </div>
)}

        </div>
      )}
    </section>
  );
}
