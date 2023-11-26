import { Link } from "wouter";
import { GoPlus } from "react-icons/go";

type ButtonProps = {
  variants: "signup" | "login" | "newLead" | "save" | "cancel";
  shouldNavigate?: boolean;
  onCLickEvent?: () => void;
};

export const Button = ({
  variants,
  shouldNavigate,
  onCLickEvent,
}: ButtonProps) => {
  const buttonsConfig = {
    signup: {
      text: "Criar conta",
      style: "bg-green-500 text-white font-bold",
      actualHref: "/",
      hrefToNavigate: "/login",
    },
    login: {
      text: "Entrar",
      style: "bg-green-500 text-white font-bold",
      actualHref: "/login",
      hrefToNavigate: "/leads",
    },
    newLead: {
      text: "Novo Lead",
      style: "bg-[#39b3c9] text-white",
    },
    save: {
      text: "Salvar",
      style: "bg-blue-400 text-white",
    },
    cancel: {
      text: "Cancelar",
      style: "bg-transparent text-gray-500 border border-gray-500",
    },
  };
  let chosedButtonStyle;
  let chosedButtonText;
  let href = "";

  const shouldNavigateVerify = (actualHref: string, hrefToNavigate: string) => {
    if (shouldNavigate === false) {
      href = actualHref;
    } else {
      href = hrefToNavigate;
    }
  };

  if (variants === "signup") {
    chosedButtonStyle = buttonsConfig.signup.style;
    chosedButtonText = buttonsConfig.signup.text;
    shouldNavigateVerify(
      buttonsConfig.signup.actualHref,
      buttonsConfig.signup.hrefToNavigate
    );
  } else if (variants === "login") {
    chosedButtonStyle = buttonsConfig.login.style;
    chosedButtonText = buttonsConfig.login.text;
    shouldNavigateVerify(
      buttonsConfig.login.actualHref,
      buttonsConfig.login.hrefToNavigate
    );
  } else if (variants === "newLead") {
    chosedButtonStyle = buttonsConfig.newLead.style;
    chosedButtonText = buttonsConfig.newLead.text;
  } else if (variants === "save") {
    chosedButtonStyle = buttonsConfig.save.style;
    chosedButtonText = buttonsConfig.save.text;
  } else if (variants === "cancel") {
    chosedButtonStyle = buttonsConfig.cancel.style;
    chosedButtonText = buttonsConfig.cancel.text;
  }

  return (
    <>
      {variants === "newLead" ? (
        <div
          className={`${chosedButtonStyle} px-6 py-2 rounded-md flex justify-center items-center gap-1 cursor-pointer`}
          onClick={onCLickEvent}
        >
          <GoPlus />
          <Link href={href}>{chosedButtonText}</Link>
        </div>
      ) : (
        <Link
          href={href}
          className={`${chosedButtonStyle} px-6 py-2 rounded-md cursor-pointer`}
          onClick={onCLickEvent}
        >
          {chosedButtonText}
        </Link>
      )}
    </>
  );
};
