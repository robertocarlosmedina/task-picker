import { ChangeEventHandler } from "react";

interface Option {
  id: number;
  value: string | number;
}

interface SelectInputProps {
  label: string;
  name: string;
  placeholder: string;
  options: Option[] | undefined;
  valueAttribute: keyof Option;
  value: number | string | undefined;
  touched: boolean | undefined;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  validationErrors: string | undefined;
}

export default function SelectInput({
  label,
  name,
  placeholder,
  options,
  valueAttribute,
  value,
  touched,
  handleChange,
  validationErrors,
}: SelectInputProps) {
  return (
    <div className="flex flex-col my-3 text-left">
      <label htmlFor={name} className="text-primary-black">
        {label}
      </label>
      <select
        name={name}
        className="block py-4 px-4 w-full text-sm text-white rounded-lg bg-primary-midnightBlack border-[0.05rem] border-primary-stormyGray focus:outline-none focus:ring-0 peer"
        value={value ?? ""}
        onChange={handleChange}
      >
        <option
          value=""
          disabled
          hidden
          className="text-prussianBlue/[0.05] p-10"
        >
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.id} value={`${option[valueAttribute]}`}>
            {option.value}
          </option>
        ))}
      </select>
      {validationErrors && touched && (
        <p className="text-red-500 text-sm">{validationErrors}</p>
      )}
    </div>
  );
}
