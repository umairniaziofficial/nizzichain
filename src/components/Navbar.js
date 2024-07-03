import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-[#222222] text-white flex flex-col gap-5 py-6  border-r border-[#5a5a5a] sm:w-[15%]">
      <div className="flex justify-center items-center pb-6">
        <img src={Logo} className="w-12 h-12" alt="Logo" />
      </div>
      <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:gap-5 sm:px-6">
        <div className="flex gap-5 max-sm:px-6 max-sm:border-b max-sm:border-zinc-600 overflow-x-auto sm:overflow-visible sm:flex-col">
          <div
            className={`cursor-pointer py-1 px-4 ${
              selectedItem === "home" ? "bg-[#55fff5] text-zinc-900" : ""
            }`}
            onClick={() => handleItemClick("home")}
          >
            Home
          </div>
          <div
            className={`cursor-pointer py-1 px-4 ${
              selectedItem === "cryptocurrencies"
                ? "bg-[#55fff5] text-zinc-900"
                : ""
            }`}
            onClick={() => handleItemClick("cryptocurrencies")}
          >
            Cryptocurrencies
          </div>
          <div
            className={`cursor-pointer py-1 px-4 ${
              selectedItem === "exchanges" ? "bg-[#55fff5] text-zinc-900" : ""
            }`}
            onClick={() => handleItemClick("exchanges")}
          >
            Exchanges
          </div>
          <div
            className={`cursor-pointer py-1 px-4 ${
              selectedItem === "news" ? "bg-[#55fff5] text-zinc-900" : ""
            }`}
            onClick={() => handleItemClick("news")}
          >
            News
          </div>
        </div>
      </div>
    </div>
  );
}
