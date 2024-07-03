import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full pt-8 max-sm:pt-0">
      <input
        type="text"
        name=""
        placeholder="Search here..."
        className="bg-zinc-800 py-2 px-4 shadow-sm rounded-3xl w-full border-2 border-zinc-600 outline-none "
        id=""
      />
    </div>
  );
}
