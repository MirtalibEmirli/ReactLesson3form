import React, { act } from "react";
import Form from "../common/form";
import { useContext } from "react";
import { useStore } from "zustand";
import {themeStore} from "../common/Store"
const Login = () => {
  const {theme,toggle}=useStore(themeStore)
  const formItems = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email here",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter a pssword here",
    },
  ];
  
  const buttons = [
    {
      title: "Login",
      style: "bg-blue-600 text-white py-3 rounded-md w-[150px]",
      action: () => {},
    },
    {
      title: "Dont have an account?",
      style: "",
      action: () => {},
    },
    {title:"Forgot password",
      style:"text-red-600",
      action:()=>{}
    }
  ];
  
  return (
    <div className={`w-full h-screen ${theme==='light' ? 'bg-white':'bg-zinc-400'}`}>
      <Form formItems={formItems} buttons={buttons}  />
    </div>
  )
};

export default Login;
