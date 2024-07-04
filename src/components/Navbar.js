import React from "react";
import Logo from "../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useNavbar } from "../NavbarContext";

const Navbar = () => {
  const location = useLocation();
  const { navbarColor } = useNavbar();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`text-white flex flex-col gap-5 py-6 pb-3 mb-6 border-r max-md:border-b border-[#5a5a5a]`} style={{ backgroundColor: navbarColor }}>
      <div className="flex justify-center items-center pb-6">
        <img src={Logo} className="w-12 h-12" alt="Logo" />
      </div>
      <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:gap-5 sm:px-6">
        <div className="flex gap-5 max-sm:px-6 overflow-x-auto sm:overflow-visible sm:flex-col">
          <Link to="/" className="cursor-pointer">
            <div
              className={`py-1 px-4 ${
                isActive("/") ? "bg-[#55fff5] text-zinc-900" : ""
              }`}
            >
              Home
            </div>
          </Link>
          <Link to="/cryptocurrencies" className="cursor-pointer">
            <div
              className={`py-1 px-4 ${
                isActive("/cryptocurrencies") ? "bg-[#55fff5] text-zinc-900" : ""
              }`}
            >
              Cryptocurrencies
            </div>
          </Link>
          <Link to="/exchanges" className="cursor-pointer">
            <div
              className={`py-1 px-4 ${
                isActive("/exchanges") ? "bg-[#55fff5] text-zinc-900" : ""
              }`}
            >
              Exchanges
            </div>
          </Link>
          <Link to="/news" className="cursor-pointer">
            <div
              className={`py-1 px-4 ${
                isActive("/news") ? "bg-[#55fff5] text-zinc-900" : ""
              }`}
            >
              News
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;