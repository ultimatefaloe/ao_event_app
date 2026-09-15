import React from "react";

const Button = ({ onClick, children, type = "button", className }) => {

  const buttonClassName = "bg-indigo-600 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer flex items-center gap-2 px-4 ";

  return (
    <button
      className={`${buttonClassName} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
