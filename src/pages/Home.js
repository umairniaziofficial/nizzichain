import React from "react";
import CryptoDetails from "../components/CryptoDetails";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex max-md:flex-col text-white">
      <Navbar />
      <CryptoDetails layout="home" />
    </div>
  );
}
