import React from "react";

const FormInput = ({ name, label, type, placeholder, handleInputChange }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-5">
      <label  htmlFor={name}>{label}</label>
      <input 
        onChange={(e) => {
          handleInputChange(e.target.name, e.target.value);
        }}
        placeholder={placeholder}
        name={name}
        type={type}
        className="border rounded-md p-2     "
      />

    </div>
  );
};

export default FormInput;
