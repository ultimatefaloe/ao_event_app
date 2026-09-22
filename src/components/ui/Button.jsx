import React from "react";

const Button = ({
  onClick,
  children,
  type = "button",
  variant = "default",
  className = "",
}) => {
  const baseClassName =
    "cursor-pointer flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-border)] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default:
      "bg-indigo-600 text-white rounded-md hover:bg-blue-600",

    add: "bg-indigo-600 text-white rounded-md hover:opacity-90",

    ghost:
      "bg-transparent text-indigo-400 rounded-md hover:bg-indigo-600",

    danger:
      "bg-red-600 text-white rounded-md hover:bg-red-700",

    "rounded-full":
      "rounded-full px-5 text-sm text-indigo-400 border border-indigo-400 bg-indigo-700/30 hover:bg-indigo-700 hover:text-white",
  };

  const variantClassName = variants[variant] || variants.default;

  return (
    <button
      className={`${baseClassName} ${variantClassName} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;