import React, { useState, ChangeEvent } from "react";

import { TextFieldType } from "../../types";

import passwordHiddenIcon from "../../assets/password-hidden.svg";
import passwordOpenedIcon from "../../assets/password-opened.svg";
interface TextFieldProps {
  type?: TextFieldType;
  label?: string;
  placeholder?: string;
  id: string;
  value?: string;
  isPasswordVisible?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  label,
  placeholder,
  id,
  value,
  onChange,
  isPasswordVisible = false,
}) => {
  const [inputType, setInputType] = useState<TextFieldType>(type);

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div className="relative max-w-full flex flex-col gap-[8px]">
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <div className="relative w-full mb-[20px]">
        <input
          type={inputType}
          id={id}
          placeholder={placeholder ? placeholder : ""}
          value={value}
          onChange={onChange}
          className="py-[13px] pr-[70px] pl-[16px] text-primary text-md font-[400] w-full rounded-[8px] border border-primary"
        />
        {Boolean(isPasswordVisible) && (
          <button
            type="button"
            onClick={toggleInputType}
            className="absolute border-none cursor-pointer background-inherit right-[5px] top-[calc(50%-15px)]"
          >
            <img
              src={
                inputType === "text" ? passwordOpenedIcon : passwordHiddenIcon
              }
              alt={inputType === "text" ? "Hide Password" : "Show Password"}
              width={30}
              height={30}
            />
          </button>
        )}
      </div>
    </div>
  );
};
