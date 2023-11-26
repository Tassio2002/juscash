import { useState } from "react";
import { FlexContainer } from "../../globalComponents/FlexContainer";
import { FormContainer } from "../../globalComponents/FormContainer";
import Logo from "../../assets/img/logo.svg";
import { InputList } from "./components/InputList";
import { FormQuestion } from "../../globalComponents/FormQuestion";
import { Button } from "../../globalComponents/Button";
import validateLogin from "../../services/validateLogin";

interface FormData {
  email: string;
  password: string;
}
export function LoginPage() {
  const [loginFormData, setLoginFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const loginValidate = () => {
    const userData = localStorage.getItem("userData");
    const userDataObject = JSON.parse(userData!);
    const signupEmail = userDataObject.email;
    const signupPassword = userDataObject.password;
    const loginEmail = loginFormData.email;
    const loginPassword = loginFormData.password;

    const userExists = validateLogin(
      signupEmail,
      loginEmail,
      signupPassword,
      loginPassword
    );

    if (userExists) {
      alert("sim");
    }
    alert("Não");
  };

  const handleInputChange = (name: string, value: string) => {
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };
  return (
    <FlexContainer>
      <FormContainer>
        <header className="w-full flex justify-center mb-8">
          <img
            src={Logo}
            width={220}
            alt="Logo da jus cash, contendo um relógio analógico verde com um cifrão e o nome: jus cash"
          />
        </header>

        <main>
          <InputList
            email={loginFormData.email}
            password={loginFormData.password}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end mt-2">
            <FormQuestion type="login" />
          </div>
        </main>
        <footer className="flex justify-center mt-8">
          <Button
            variants="login"
            onCLickEvent={loginValidate}
            shouldNavigate={false}
          ></Button>
        </footer>
      </FormContainer>
    </FlexContainer>
  );
}
