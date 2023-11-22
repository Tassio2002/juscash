import { FaBeer } from "react-icons/fa";

type Props = {
  type: "text" | "email" | "password" | "tel";
  isPassword: boolean;
};

const FormInput = ({ type, isPassword }: Props) => {
  const setEye = isPassword ? "true" : "false";
  setEye;
  return (
    <div className="flex items-center">
      <input
        type={type}
        className="w-full p-2 border-2 border-gray-400 outline-none rounded-[4px]"
      />

      <FaBeer className="ml-[-30px]"/>
    </div>
  );
};

export default FormInput;
