import { ChangeEvent } from "react";

export type FormInputProps = {
  type: "text" | "email" | "tel";
  isDisabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  type,
  isDisabled,
  value,
  onChange,
}: FormInputProps) => {
  const disabledStyle = "bg-gray-300";
  return (
    <input
      type={type}
      disabled={isDisabled}
      className={`${
        isDisabled ? disabledStyle : null
      } w-full p-2 border border-gray-900 outline-none rounded-[4px]`}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
