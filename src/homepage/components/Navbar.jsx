import React from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useStore } from "zustand";
import { themeStore } from "../../common/Store";
const Navbar = ({ searchTerm, setSearchTerm }) => {
  const {theme,toggle}=useStore(themeStore)
const st1 = `text-lg     transition-all
       ease-in hover:decoration-blue-700 bg-gradient-to-l from-blue-500 to-purple-600 rounded-lg 
       hover:opacity-90 duration-300 px-[1px] py-[1px]`
  return (
    <div className="px-4 py-2 flex gap-5 items-center justify-between   ">
     <div>
     <img
        className=" leading-10 max-h-20 border rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BSQ7_Nl49CIKx0ZzWDfDProNY-c0JnPpCg&s"
        alt=""
      />
     </div>
     
     <div className="px-4 py-2 flex gap-5 items-center justify-end   "> <a className={st1 } href="#">Home</a>
     <button className={st1 } onClick={() => {
               toggle()
                // setTheme(prevState => prevState === "light" ? "dark" : "light")
            }}>{theme === "light" ? "Activate dark theme" : "Activate light theme"}</button>
      <a className={st1 } href="#">Contact</a>
      <a className={st1 } href="about">About</a>
      <a className={st1 } href="#">Bonus</a>
     
    
      <div className="text-lg     transition-all
       ease-in hover:decoration-blue-700 bg-gradient-to-l from-blue-500 to-purple-600 rounded-lg 
       hover:opacity-90 duration-300   leading-7 px-[1px] py-[1px] flex felx-row gap-1 items-center hover:text-red-600  ">
      <p >Cart</p>
      <FontAwesomeIcon icon={faCartShopping} size="2x" className="text-black-400 h-5" />
      </div>
      <a className={st1 }  href="/login">Login</a>
      <a className={st1 }  href="/register">Register</a>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div>
      
    </div>
  );
};

export default Navbar;
