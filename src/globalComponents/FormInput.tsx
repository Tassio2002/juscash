import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

type Props = {
  type: "text" | "email" | "password" | "tel";
  isPassword: boolean;
};

const FormInput = ({ type, isPassword }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassowrdVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {isPassword && (
        <div className="w-full flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border-2 border-gray-400 outline-none rounded-[4px]"
          />
          <button
            className="ml-[-30px] cursor-pointer"
            onClick={togglePassowrdVisibility}
          >
            {showPassword ? (
              <IoEye size={23} color="#a9a9a9" />
            ) : (
              <IoEyeOff size={23} color="#a9a9a9" />
            )}
          </button>
        </div>
      )}
      {!isPassword && (
        <input
          type={type}
          className="w-full p-2 border-2 border-gray-400 outline-none rounded-[4px]"
        />
      )}
    </>
  );
};

export default FormInput;
