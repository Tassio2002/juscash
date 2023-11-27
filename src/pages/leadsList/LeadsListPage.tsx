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
import uuid from "react-uuid";
interface FormData {
  id: string;
  username: string;
  email: string;
  tel: string;
}

export const LeadsListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: "",
    username: "",
    email: "",
    tel: "",
  });
  const [leadData, setLeadData] = useState<FormData>({
    id: "",
    username: "",
    email: "",
    tel: "",
  });

  const [leadsArr, setLeadsArr] = useState<FormData[]>([]);
  const getLeads = localStorage.getItem("leadData");
  let leadsList;
  if (getLeads) {
    leadsList = JSON.parse(getLeads);
  } else {
    leadsList = [];
  }

  let modalIsOpen;
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleOpenViewModal = (id: string) => {
    const actualLead = leadsArr.filter((lead) => lead.id === id);
    const actualLeadData: FormData = {
      id: actualLead[0].id,
      username: actualLead[0].username,
      email: actualLead[0].email,
      tel: actualLead[0].tel,
    };
    setLeadData(actualLeadData);
    setIsOpenView(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleCloseViewModal = () => {
    setIsOpenView(false);
  };
  isOpen || isOpenView ? (modalIsOpen = "hidden") : (modalIsOpen = "false");

  const handleInputChange = (name: string, value: string) => {
    const newUuid = uuid();
    setFormData({
      ...formData,
      id: newUuid,
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
      setLeadsArr([...leadsArr, formData]);
      localStorage.setItem("leadData", JSON.stringify([...leadsArr, formData]));
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
      <ModalContainer isOpen={isOpenView}>
        <NewLeadForm
          onCLickEvent={handleCloseViewModal}
          cancelCLickEvent={handleCloseViewModal}
          variants={"disabled"}
          onInputChange={handleInputChange}
          username={leadData.username}
          email={leadData.email}
          tel={leadData.tel}
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
            <div className="flex flex-col gap-1">
              {leadsList.map((lead: FormData, index: number) => (
                <LeadsDrag
                  name={lead.username}
                  index={index}
                  onClickEvent={() => handleOpenViewModal(lead.id)}
                />
              ))}
            </div>
          </main>
        </Container>
      </FlexContainer>
    </>
  );
};
