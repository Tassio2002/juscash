import { FlexContainer } from "../../globalComponents/FlexContainer";
import { FormContainer } from "../../globalComponents/FormContainer";
import Logo from "../../assets/img/logo.svg";
import { FormLabel } from "../../globalComponents/FormLabel";
import FormInput from "../../globalComponents/FormInput";
export function SignupPage() {
  return (
    <FlexContainer>
      <FormContainer>
        <img
          src={Logo}
          width={220}
          alt="Logo da jus cash, contendo um relógio analógico verde com um cifrão e o nome: jus cash"
        />
        <div className="w-full mt-6 flex flex-col">
          <FormLabel color="blue" text="Seu nome Completo" isRequired={true}/>
        </div>
        <FormInput type="text" isPassword={false}/>
      </FormContainer>
    </FlexContainer>
  );
}
