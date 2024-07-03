import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-[#222222]">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
