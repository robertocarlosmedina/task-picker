import React from "react";

import { IInput } from "@/interfaces";

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  touched,
  linkComponent,
  handleChange,
  validationErrors,
}: IInput) {
  return (
    <div className="flex flex-col my-4">
      <div className="flex">
        <label htmlFor={name} className="text-base">
          {label}
        </label>
        <div className="flex-1"></div>
        {linkComponent && linkComponent}
      </div>
      <input
        autoFocus={false}
        autoComplete="off"
        className="mt-2 border-[0.05rem] rounded-lg p-4 h-12 border-primary-stormyGray/[0.7] bg-primary-midnightBlack focus:border-primary-purple/[0.8] text-primary-lightGray focus:text-primary-white focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {validationErrors && touched && (
        <p className="text-red-500 text-sm text-left">{validationErrors}</p>
      )}
    </div>
  );
}
