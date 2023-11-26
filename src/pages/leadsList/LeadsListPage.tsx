import { useState } from "react";
import { FlexContainer } from "../../globalComponents/FlexContainer";
import { Container } from "./components/Container";
import Logo from "../../assets/img/logo.svg";
import { Button } from "../../globalComponents/Button";
import { ListHeader } from "./components/ListHeader";
import { LeadsDrag } from "./components/LeadsDrag";
import { ModalContainer } from "../../globalComponents/ModalContainer";
import { NewLeadForm } from "../../globalComponents/NewLeadForm";
import validateUsername from "../../services/validateUsername";
import validateEmail from "../../services/validateEmail";
import validateTel from "../../services/validateTel";
interface FormData {
  username: string;
  email: string;
  tel: string;
}

export const LeadsListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    tel: "",
  });

  let modalIsOpen;
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  isOpen ? (modalIsOpen = "hidden") : (modalIsOpen = "false");

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formValidate = (): boolean => {
    const isValidUsername = validateUsername(formData.username);
    const isValidEmail = validateEmail(formData.email);
    const isValidTel = validateTel(formData.tel);

    const isAllInputsValid: boolean =
      isValidUsername && isValidEmail && isValidTel;
    if (isAllInputsValid) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (formValidate() === true) {
      localStorage.setItem("leadData", JSON.stringify(formData));
    } else {
      console.error("Invalid lead information");
    }
  };

  return (
    <>
      <ModalContainer isOpen={isOpen}>
        <NewLeadForm
          onCLickEvent={handleCloseModal}
          cancelCLickEvent={handleCloseModal}
          saveCLickEvent={handleSubmit}
          variants={"enabled"}
          onInputChange={handleInputChange}
          username={formData.username}
          email={formData.email}
          tel={formData.tel}
        />
      </ModalContainer>
      <FlexContainer display={modalIsOpen}>
        <Container>
          <header className="w-full flex justify-center mb-4">
            <img
              src={Logo}
              width={350}
              alt="Logo da jus cash, contendo um relógio analógico verde com um cifrão e o nome: jus cash"
            />
          </header>
          <main className="w-full px-4 mt-4 bg-slate-100">
            <div className="w-full my-4 flex justify-end">
              <Button variants="newLead" onCLickEvent={handleOpenModal} />
            </div>
            <ListHeader />
            <LeadsDrag />
          </main>
        </Container>
      </FlexContainer>
    </>
  );
};
