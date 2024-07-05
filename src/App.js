import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";
import CoinDetails from "./components/CoinDetails";


export default function App() {
  return (
    <div className="w-screen min-h-screen bg-[#222222]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/news" element={<News />} />
        <Route path="/coin/:coinId" element={<CoinDetails />} />
        <Route
          path="*"
          element={
            <>
              <h1 className="px-5 text-white font-semibold py-3 text-4xl">
                Error 404 Page not Found :/
              </h1>
              <h1 className="px-5 text-gray-100 font-semibold py-3 text-4xl hover:underline">
                <Link to="/">Click here to go back!</Link>
              </h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}