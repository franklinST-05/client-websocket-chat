"use client";
import React, { ElementType, InputHTMLAttributes, Ref, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ElementType;
}

const InputField: React.ForwardRefRenderFunction<HTMLInputElement, InputFieldProps> = (
  { icon: Icon, className, ...props },
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div {...ref} className={`flex items-center w-full h-12 bg-container rounded overflow-hidden ${className}`}>
      {Icon && <Icon className="w-8 h-12 p-4 !pr-0 flex-shrink-0" />}
      <input {...props} ref={ref} className="w-full h-full bg-transparent px-4 outline-none text-sm" />
    </div>
  );
};

export default forwardRef(InputField);