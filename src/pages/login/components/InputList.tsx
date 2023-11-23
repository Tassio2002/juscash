import FormInput from "../../../globalComponents/FormInput";
import { FormLabel } from "../../../globalComponents/FormLabel";
import { PasswordInput } from "../../../globalComponents/PasswordInput";

export const InputList = () => {
  return (
    <div className="flex flex-col gap-2">
      <FormLabel text="E-mail" color="blue" isRequired={true} />
      <FormInput type="email" />
      <FormLabel text="Senha" color="blue" isRequired={true} />
      <PasswordInput passwordType="password" />
    </div>
  );
};
