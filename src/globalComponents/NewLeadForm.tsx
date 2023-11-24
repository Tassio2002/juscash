import { FormContainer } from "./FormContainer";
import { IoClose } from "react-icons/io5";
import { FormLabel } from "./FormLabel";
import { FormInput } from "./FormInput";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
type NewLeadFormProps = {
  onCLickEvent: () => void;
};

export const NewLeadForm = ({ onCLickEvent }: NewLeadFormProps) => {
  return (
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
            <FormLabel text="Nome Completo" color="gray" isRequired={true} />
            <FormInput type="text" />
            <FormLabel text="E-mail" color="gray" isRequired={true} />
            <FormInput type="email" />
            <FormLabel text="Telefone" color="gray" isRequired={true} />
            <FormInput type="tel" />
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
          <Button variants="cancel" />
          <Button variants="save" />
        </footer>
      </div>
    </FormContainer>
  );
};