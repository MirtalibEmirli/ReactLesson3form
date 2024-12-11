import React from "react";
import { useContext } from "react";
import {useStore} from "zustand"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center justify-center  py-5 gap-1">
      {/* <h3 className="font-medium leading-9"> Search:</h3> */}
      <input
        className="border  border-black  rounded-lg p-2 leading-3"
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
