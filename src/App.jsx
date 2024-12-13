import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import Homepage from "./homepage/Homepage";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./homepage/components/About";
export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
