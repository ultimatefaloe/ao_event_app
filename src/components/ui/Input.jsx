import React from "react";

const Input = ({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  autoComplete,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="w-full text-left">
      {label ? (
        <label htmlFor={id} className="block mb-1 text-sm text-gray-300">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default Input;
