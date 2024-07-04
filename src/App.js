import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-[#222222]">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
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
        ></Route>
      </Routes>
    </div>
  );
}
