import { FlexContainer } from "../../globalComponents/FlexContainer";
import { Container } from "./components/Container";
import Logo from "../../assets/img/logo.svg";
import { Button } from "../../globalComponents/Button";
import { ListHeader } from "./components/ListHeader";
import { LeadsDrag } from "./components/LeadsDrag";

export const LeadsListPage = () => {
  return (
    <FlexContainer>
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
                <Button variants="newLead"/>
            </div>
            <ListHeader />
            <LeadsDrag />
        </main>
      </Container>
    </FlexContainer>
  );
};
