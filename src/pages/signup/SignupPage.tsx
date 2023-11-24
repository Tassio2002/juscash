import { FlexContainer } from "../../globalComponents/FlexContainer";
import { FormContainer } from "../../globalComponents/FormContainer";
import Logo from "../../assets/img/logo.svg";
import { InputList } from "./components/InputList";
import { FormQuestion } from "../../globalComponents/FormQuestion";
import { Button } from "../../globalComponents/Button";

export function SignupPage() {
  return (
    <FlexContainer>
      <FormContainer >
        <header className="w-full flex justify-center mb-8">
          <img
            src={Logo}
            width={220}
            alt="Logo da jus cash, contendo um relógio analógico verde com um cifrão e o nome: jus cash"
          />
        </header>

        <main>
          <InputList />
          <div className="flex justify-end mt-2">
            <FormQuestion type="signup" />
          </div>
        </main>
        <footer className="flex justify-center mt-8">
          <Button variants="signup" />
        </footer>
      </FormContainer>
    </FlexContainer>
  );
}
