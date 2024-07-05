import React from "react";
import NewCards from "../components/NewCards";
import Navbar from "../components/Navbar";

const News = () => {
  return (
    <div className="w-full flex max-md:flex-col text-white">
      <Navbar />
      <div className="w-full max-w-[80%] mx-auto py-8">
        <NewCards searchQuery="Crypto" count={60} layout={3} />
      </div>
    </div>
  );
};

export default News;
