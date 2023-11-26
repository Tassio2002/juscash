import { ChangeEvent } from "react";
import FormInput from "../../../globalComponents/FormInput";
import { FormLabel } from "../../../globalComponents/FormLabel";
import { PasswordInput } from "../../../globalComponents/PasswordInput";

type InputListProps = {
  email: string;
  password: string;
  onInputChange: (name: string, value: string) => void;
};
export const InputList = ({
  email,
  password,
  onInputChange,
}: InputListProps) => {
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("email", event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("password", event.target.value);
  };
  return (
    <div className="flex flex-col gap-2">
      <FormLabel text="E-mail" color="blue" isRequired={true} />
      <FormInput type="email" value={email} onChange={handleEmailChange} />
      <FormLabel text="Senha" color="blue" isRequired={true} />
      <PasswordInput value={password} onChange={handlePasswordChange} />
    </div>
  );
};
