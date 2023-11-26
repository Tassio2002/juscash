import { ChangeEvent } from "react";
import FormInput from "../../../globalComponents/FormInput";
import { FormLabel } from "../../../globalComponents/FormLabel";
import { PasswordInput } from "../../../globalComponents/PasswordInput";

type InputListProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  onInputChange: (name: string, value: string) => void;
};

export const InputList = ({
  username,
  email,
  password,
  confirmPassword,
  onInputChange,
}: InputListProps) => {
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("username", event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("email", event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("password", event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    onInputChange("confirmPassword", event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <FormLabel text="Seu nome completo" color="blue" isRequired={true} />
      <FormInput type="text" value={username} onChange={handleUsernameChange} />
      <FormLabel text="E-mail" color="blue" isRequired={true} />
      <FormInput type="email" value={email} onChange={handleEmailChange} />
      <FormLabel text="Senha" color="blue" isRequired={true} />
      <PasswordInput value={password} onChange={handlePasswordChange} />
      <FormLabel text="Confirme sua senha" color="blue" isRequired={true} />
      <PasswordInput
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
    </div>
  );
};
