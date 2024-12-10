import React from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="px-4 py-2 flex gap-5 items-center justify-between   ">
     <div>
     <img
        className=" leading-10 max-h-20 border rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BSQ7_Nl49CIKx0ZzWDfDProNY-c0JnPpCg&s"
        alt=""
      />
     </div>
     
     <div className="px-4 py-2 flex gap-5 items-center justify-end   "> <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
      <a href="#">Bonus</a>
      <div className="leading-3 flex felx-row gap-1 items-center hover:text-red-600  ">
      <p>Cart</p>
      <FontAwesomeIcon icon={faCartShopping} size="2x" className="text-black-400 h-5" />
      </div>
      <a href="#">Home</a>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div>
    </div>
  );
};

export default Navbar;
