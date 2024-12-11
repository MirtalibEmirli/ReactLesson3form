import React from 'react'
import Form from '../common/form'
import { useStore } from 'zustand'
import {themeStore} from"../common/Store"

const Register = () => {
  const {theme,toggle}=useStore(themeStore)
  const formItems =[{
    name:"firstname",
    label:"Firstname",
    type:"text",
    placeholder:"Enter your firstname"
  }
,{
  name:"lastname",
  label:"Lastname",
  type:"text",
  placeholder:"Enter your lastname"
},{
  name:"email",
  label:"Email",
  type:"email",
  placeholder:"Enter your email"
},{
  name:"password",
  label:"Password",
  type:"password",
  placeholder:"Enter a password"
}
]
const buttons = [
  {
    title:"Register",
    style:"bg-green-600 text-white py-4 rounded-md w-[150px]",
    action:()=>{}
  },
  {
    title: "Already have an account?",
    style: "",
    action: () => {}
},
]
  return (
   <div className={`w-full h-screen  ${theme==="light"?"bg-wh1ite":"bg-black"}`}> <Form formItems={formItems} buttons={buttons}/></div>
  )
}

export default Register