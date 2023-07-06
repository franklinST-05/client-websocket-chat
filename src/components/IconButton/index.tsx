"use client";
import React, { ButtonHTMLAttributes, ElementType } from "react";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

const IconButton: React.FC<IconProps> = ({ icon: Icon, className, ...props }) => {
  return (
    <button {...props} className={`flex flex-shrink-0 items-center outline-none justify-center w-12 h-12 bg-container rounded overflow-hidden text-gray-200 ${className}`}>
      <Icon />
    </button>
  );
};

export default IconButton;