import { useState, ChangeEvent } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

export type PasswordInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassowordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full p-2 border-2 border-gray-400 outline-none rounded-[4px]"
        onChange={onChange}
        value={value}
      />
      <button
        className="ml-[-30px] cursor-pointer"
        onClick={togglePassowordVisibility}
      >
        {showPassword ? (
          <IoEye size={23} color="#a9a9a9" />
        ) : (
          <IoEyeOff size={23} color="#a9a9a9" />
        )}
      </button>
    </div>
  );
};
