import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center justify-center border-b border-zinc-500 py-5 gap-4">
      <h3> Search:</h3>
      <input
        className="border border-zinc-400 p-2"
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search for items"
      />
    </div>
  );
};

export default SearchBar;
