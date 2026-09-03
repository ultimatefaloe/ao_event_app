import React from "react";

const Button = ({ onClick, children, type = "button" }) => {

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
