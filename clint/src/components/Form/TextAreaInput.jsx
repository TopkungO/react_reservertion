import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({ register, name, type, placeholder, errors }) => {
  return (
    <div className="mb-2">
      <Label className="capitalize mb-2" htmlFor={name}>
        {name}
      </Label>
      <Textarea
        {...register(name)}
        type={type}
        placeholder={placeholder}
        row={50}
        className={`${errors[name] && "border-red-500"} `}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextAreaInput;
