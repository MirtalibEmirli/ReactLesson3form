import React from "react";
import { useContext } from "react";
import {useStore} from "zustand"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center justify-center  py-5 gap-1 group ">
      {/* <h3 className="font-medium leading-9"> Search:</h3> */}
      <input
        className="border-2  border-orange-300 ease-in  rounded-lg p-2 leading-3 group-hover:border-purple-500  transition-all
        duration-200
         "
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
