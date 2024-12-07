import { useEffect, useState } from "react";
import FormInput from "../common/FormInput";
const Form = ({ formItems, buttons  }) => {
  const [formData, setFormData] = useState({});
  const handeInputChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
   <div className="justify-center items-center flex mt-7">
     <form className="flex flex-col gap-4 items-center bg-green-700 w-[450px]">
      {formItems.map((item) => (
        <FormInput
          handeInputChange={handeInputChange}
          name={item.name}
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
        /> //burda nie ikinci tag yoxdur baglamaga birde bu handle ne is gorur
      ))}
      {/* <div  style ={stylee}> */}
      
      {buttons.map(button=> <button onClick={button.action} className={button.style}>{button.title}</button>)}
      
      {/* </div> */}
    </form>
   </div>
  );
};

export default Form;
