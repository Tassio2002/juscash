import { ChangeEvent } from "react";
import { FormContainer } from "./FormContainer";
import { IoClose } from "react-icons/io5";
import { FormLabel } from "./FormLabel";
import { FormInput } from "./FormInput";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
type NewLeadFormProps = {
  variants: "enabled" | "disabled";
  username: string;
  email: string;
  tel: string;
  onCLickEvent: () => void;
  saveCLickEvent: () => void;
  cancelCLickEvent: () => void;
  onInputChange: (name: string, value: string) => void;
};

export const NewLeadForm = ({
  variants,
  username,
  email,
  tel,
  onCLickEvent,
  saveCLickEvent,
  cancelCLickEvent,
  onInputChange,
}: NewLeadFormProps) => {
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("username", event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("email", event.target.value);
  };
  const handleTelChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange("tel", event.target.value);
  };

  return (
    <>
      {variants === "enabled" ? (
        <FormContainer>
          <div className="w-full flex flex-col">
            <header className="flex justify-between">
              <h1>Novo Lead</h1>
              <IoClose
                width={24}
                onClick={onCLickEvent}
                className="cursor-pointer"
              />
            </header>
            <main className="flex flex-col">
              <h2>Dados do Lead</h2>
              <div>
                <FormLabel
                  text="Nome Completo"
                  color="gray"
                  isRequired={true}
                />
                <FormInput
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <FormLabel text="E-mail" color="gray" isRequired={true} />
                <FormInput
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <FormLabel text="Telefone" color="gray" isRequired={true} />
                <FormInput type="tel" value={tel} onChange={handleTelChange} />
              </div>
              <div>
                <h2>Oportunidades</h2>
                <Checkbox text="Todos" />
                <Checkbox text="Honorários Sucumbenciais" />
                <Checkbox text="Honorários Contratuais" />
                <Checkbox text="Honorários Dativos" />
                <Checkbox text="Crédito do autor" />
              </div>
            </main>
            <footer className="flex justify-end gap-2">
              <Button variants="cancel" onCLickEvent={cancelCLickEvent} />
              <Button variants="save" onCLickEvent={saveCLickEvent} />
            </footer>
          </div>
        </FormContainer>
      ) : (
        <FormContainer>
          <div className="w-full flex flex-col">
            <header className="flex justify-between">
              <h1>Novo Lead</h1>
              <IoClose
                width={24}
                onClick={onCLickEvent}
                className="cursor-pointer"
              />
            </header>
            <main className="flex flex-col">
              <h2>Dados do Lead</h2>
              <div>
                <FormLabel
                  text="Nome Completo"
                  color="gray"
                  isRequired={true}
                />
                <FormInput type="text" isDisabled={true} />
                <FormLabel text="E-mail" color="gray" isRequired={true} />
                <FormInput type="email" isDisabled={true} />
                <FormLabel text="Telefone" color="gray" isRequired={true} />
                <FormInput type="tel" isDisabled={true} />
              </div>
              <div>
                <h2>Oportunidades</h2>
                <Checkbox text="Todos" isDisabled={true} />
                <Checkbox text="Honorários Sucumbenciais" isDisabled={true} />
                <Checkbox text="Honorários Contratuais" isDisabled={true} />
                <Checkbox text="Honorários Dativos" isDisabled={true} />
                <Checkbox text="Crédito do autor" isDisabled={true} />
              </div>
            </main>
            <footer className="flex justify-end gap-2">
              <Button variants="cancel" onCLickEvent={onCLickEvent} />
              <Button variants="save" />
            </footer>
          </div>
        </FormContainer>
      )}
    </>
  );
};
