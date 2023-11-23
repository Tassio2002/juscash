import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

export type PasswordInputProps = {
  passwordType: "password" | "confirmPassword";
};

export const PasswordInput = ({ passwordType }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  console.log(
    "🚀 ~ file: PasswordInput.tsx:9 ~ PasswordInput ~ password:",
    password
  );
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log(
    "🚀 ~ file: PasswordInput.tsx:11 ~ PasswordInput ~ confirmPassword:",
    confirmPassword
  );

  const togglePassowordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newPassword = event.currentTarget.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = event.currentTarget.value;
    setConfirmPassword(newConfirmPassword);
  };
  return (
    <div className="w-full flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full p-2 border-2 border-gray-400 outline-none rounded-[4px]"
        onChange={
          passwordType === "password"
            ? handlePasswordChange
            : handleConfirmPasswordChange
        }
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
