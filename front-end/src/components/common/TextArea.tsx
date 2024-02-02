import React, { ChangeEvent } from "react";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="relative max-w-full flex flex-col gap-[8px] mb-[20px]">
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <textarea
          id={id}
          placeholder={placeholder ?? ""}
          value={value}
          onChange={onChange}
          className="py-[13px] px-[16px] text-primary text-md font-[400] w-full rounded-[8px] border border-primary resize-none h-[150px]"
        />
      </div>
    </div>
  );
};
