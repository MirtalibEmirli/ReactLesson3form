import React from 'react'
import Form from '../common/form'
const Register = () => {
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
    <Form formItems={formItems} buttons={buttons}/>
  )
}

export default Register