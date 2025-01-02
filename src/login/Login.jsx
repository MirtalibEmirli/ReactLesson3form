import React, { act, useState } from "react";
import Form from "../common/Form";
// import { useContext } from "react";
import { useStore } from "zustand";
import { ToastContainer, toast } from 'react-toastify';
import { themeStore } from "../common/Store";
import { useNavigate } from "react-router";
const Login = () => {
  // const { theme, toggle } = useStore(themeStore);
  const [formData,setFormData]=useState({})
  const {theme,addAccesToken,addRefreshToken}=useStore(themeStore)
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
  const navigate = useNavigate();
  const buttons = [
    {
      title: "Login",
      style: "bg-blue-600 text-white py-3 rounded-md w-[150px]",
      action: () => {login()},
    },
    {
      title: "Dont have an account?",
      style: "",
      action: () => {
        navigate("/register");
      },
    },
    { title: "Forgot password", style: "text-red-600", action: () => {} },
  ];

  const login = async () => {
    try {
      const repsonse = await fetch("http://localhost:3000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify(formData)


      });
      if(response.ok){
        addAccesToken(data.accesToken)
          addRefreshToken(data.refreshToken)
        navigate('/')
      }
   

const data =await response.json();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`w-full h-screen `}  >
      <Form  setFormData={setFormData}  formItems={formItems} buttons={buttons} />
    </div>
  );
};

export default Login;
