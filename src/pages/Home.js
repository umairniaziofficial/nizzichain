import React from "react";
import Navbar from "../components/Navbar";
import CryptoDetails from "../components/CryptoDetails";

export default function Home() {
  return (
    <div className="w-full flex max-sm:flex-col  text-white">
        <Navbar />
        <CryptoDetails/>
    </div>
  );
}
