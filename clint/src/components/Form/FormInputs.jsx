import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FormInputs = ({ register, name, type, placeholder, errors }) => {
  console.log(errors[name]?.message);

  return (
    <div className="mb-2">
      <Label className="capitalize mb-2" htmlFor={name}>
        {name}
      </Label>
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${errors[name] && "border-red-500"} `}
      />
      {
        errors[name] && (<p className="text-red-500 text-sm">{errors[name].message}</p>)
      }
    </div>
  );
};

export default FormInputs;
