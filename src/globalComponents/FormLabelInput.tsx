import { FormInput, FormInputProps } from "./FormInput";
import { FormLabel, FormLabelProps } from "./FormLabel";

type FormLabelInputProps = {
  formInputProps: FormInputProps;
  formLabelProps: FormLabelProps;
};

const FormLabelInput = ({
  formInputProps,
  formLabelProps,
}: FormLabelInputProps) => {
  const { type, isPassword } = formInputProps;
  const { text, color, isRequired } = formLabelProps;
  return (
    <div>
      <div className="w-full mt-4 flex flex-col">
        <FormLabel color={color} text={text} isRequired={isRequired} />
        <FormInput type={type} isPassword={isPassword} />
      </div>
    </div>
  );
};

export default FormLabelInput;
