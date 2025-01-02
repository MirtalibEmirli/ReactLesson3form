import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import Homepage from "./homepage/Homepage";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./homepage/components/About";
import { useStore } from "zustand";
import { themeStore } from "./common/Store";
import NotFound from "./common/NotFound";
import { ToastContainer, toast } from "react-toastify";
export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("light");
  const { accesToken, them } = useStore(themeStore); //protected root elave edmek
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          {accesToken && <Route path="/" element={<Homepage />} />}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeContext.Provider>
  );
};

export default App;
