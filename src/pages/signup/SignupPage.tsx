import { useState } from "react";
import { FlexContainer } from "../../globalComponents/FlexContainer";
import { FormContainer } from "../../globalComponents/FormContainer";
import Logo from "../../assets/img/logo.svg";
import { InputList } from "./components/InputList";
import { FormQuestion } from "../../globalComponents/FormQuestion";
import { Button } from "../../globalComponents/Button";
import validatePassword from "../../services/validatePassword";
import validateConfirmPassword from "../../services/validateConfirmPassword";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignupPage() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const isValidPassword = validatePassword(formData.password);
    const isValidConfirmPassword = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );
    if (isValidPassword && isValidConfirmPassword) {
      localStorage.setItem("userData", JSON.stringify(formData));
    }
    console.error("Invalid confirm password");
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
            username={formData.username}
            email={formData.email}
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end mt-2">
            <FormQuestion type="signup" />
          </div>
        </main>
        <footer className="flex justify-center mt-8">
          <Button variants="signup" onCLickEvent={handleSubmit} />
        </footer>
      </FormContainer>
    </FlexContainer>
  );
}
