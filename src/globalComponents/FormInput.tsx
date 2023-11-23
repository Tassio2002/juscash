export type FormInputProps = {
  type: "text" | "email" | "tel";
};

export const FormInput = ({ type }: FormInputProps) => {
  return (
    <input
      type={type}
      className="w-full p-2 border-2 border-gray-400 outline-none rounded-[4px]"
    />
  );
};

export default FormInput;
