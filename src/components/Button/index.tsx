"use client";
import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button 
      {...props}
      className="flex items-center justify-center w-full h-12 bg-primary rounded overflow-hidden px-4 outline-none text-sm uppercase font-medium"
    />
  );
};

export default Button;