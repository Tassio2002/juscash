import FormInput from "../../../globalComponents/FormInput";
import { FormLabel } from "../../../globalComponents/FormLabel";
import { PasswordInput } from "../../../globalComponents/PasswordInput";

export const InputList = () => {
  return (
    <div className="flex flex-col gap-2">
      <FormLabel text="Seu nome completo" color="blue" isRequired={true} />
      <FormInput type="text" />
      <FormLabel text="E-mail" color="blue" isRequired={true} />
      <FormInput type="email" />
      <FormLabel text="Senha" color="blue" isRequired={true} />
      <PasswordInput passwordType="password" />
      <FormLabel text="Confirme sua senha" color="blue" isRequired={true} />
      <PasswordInput passwordType="confirmPassword" />
    </div>
  );
};
