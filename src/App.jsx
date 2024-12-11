import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import Homepage from "./homepage/Homepage";
import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

const App = () => {
  const [theme,setTheme]=useState("light")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Homepage/>
    </ThemeContext.Provider>
  );
};

export default App;
