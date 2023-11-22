import { FlexContainer } from "../../globalComponents/FlexContainer";
import { FormContainer } from "../../globalComponents/FormContainer";
import Logo from "../../assets/img/logo.svg";
import FormLabelInput from "../../globalComponents/FormLabelInput";

export function SignupPage() {
  return (
    <FlexContainer>
      <FormContainer>
        <img
          src={Logo}
          width={220}
          alt="Logo da jus cash, contendo um relógio analógico verde com um cifrão e o nome: jus cash"
        />
        <div className="w-full">
          <FormLabelInput
            formInputProps={{ type: "text", isPassword: false }}
            formLabelProps={{
              text: "Seu nome completo",
              color: "blue",
              isRequired: true,
            }}
          />
          <FormLabelInput
            formInputProps={{ type: "email", isPassword: false }}
            formLabelProps={{
              text: "E-mail",
              color: "blue",
              isRequired: true,
            }}
          />
          <FormLabelInput
            formInputProps={{ type: "password", isPassword: true }}
            formLabelProps={{
              text: "Senha",
              color: "blue",
              isRequired: true,
            }}
          />
          <FormLabelInput
            formInputProps={{ type: "password", isPassword: true }}
            formLabelProps={{
              text: "Confirme sua senha",
              color: "blue",
              isRequired: true,
            }}
          />
        </div>
      </FormContainer>
    </FlexContainer>
  );
}
