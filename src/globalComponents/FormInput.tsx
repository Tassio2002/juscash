export type FormInputProps = {
  type: "text" | "email" | "tel";
  isDisabled?: boolean;
};

export const FormInput = ({ type, isDisabled }: FormInputProps) => {
  const disabledStyle = "bg-gray-300";
  return (
    <input
      type={type}
      disabled={isDisabled}
      className={`${
        isDisabled ? disabledStyle : null
      } w-full p-2 border border-gray-900 outline-none rounded-[4px]`}
    />
  );
};

export default FormInput;
