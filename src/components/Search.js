import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="col-span-3 py-8 max-md:col-span-1 max-sm:pb-0">
      <input
        type="text"
        placeholder="Search coins..."
        className="bg-zinc-800 py-2 px-4 shadow-sm rounded-3xl w-full border-2 border-zinc-600 outline-none"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;