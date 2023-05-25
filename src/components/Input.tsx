"use client";

import { ReactNode, useState, useMemo, useCallback } from "react";

import { Eye, EyeOff } from "lucide-react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required: boolean;
  icon?: ReactNode;
  isPassword?: boolean;
}

export function Input(props: inputProps) {
  const { label, required, type, icon, name } = props;
  const [isVisible, setIsVisible] = useState(false);
  const inputType = useMemo(
    () => (type === "password" ? (isVisible ? "text" : "password") : type),
    [isVisible]
  );

  const togglePassword = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <div className="mb-5 flex w-full items-center border-b-2 border-solid border-[#dfdfdf]">
      {icon}
      <input
        {...props}
        className="w-full border-0 p-2 outline-none"
        type={inputType}
        name={name}
        id={name}
        placeholder={label}
        required={required}
      />
      {type === "password" && (
        <button
          className="cursor-pointer bg-transparent"
          onClick={togglePassword}
          type="button"
        >
          {isVisible ? (
            <EyeOff className="text-[#aaa]" />
          ) : (
            <Eye className="text-[#aaa]" />
          )}
        </button>
      )}
    </div>
  );
}
