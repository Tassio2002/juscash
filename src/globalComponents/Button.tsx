type ButtonProps = {
  variants: "signup" | "login" | "newLead" | "save" | "cancel";
};

export const Button = ({ variants }: ButtonProps) => {
  const buttonsConfig = {
    signup: {
      text: "Criar conta",
      style: "bg-green-500 text-white font-bold",
    },
    login: {
      text: "Entrar",
      style: "bg-green-500 text-white font-bold",
    },
    newLead: {
      text: "Novo Lead",
      style: "bg-blue-400 text-white",
    },
    save: {
      text: "Salvar",
      style: "bg-blue-400 text-white",
    },
    cancel: {
      text: "Cancelar",
      style: "bg-transparent text-gray-500 border-1 border-gray-500",
    },
  };
  let chosedButtonStyle;
  let chosedButtonText;

  if (variants === "signup") {
    chosedButtonStyle = buttonsConfig.signup.style;
    chosedButtonText = buttonsConfig.signup.text;
  } else if (variants === "login") {
    chosedButtonStyle = buttonsConfig.login.style;
    chosedButtonText = buttonsConfig.login.text;
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
    <button className={`${chosedButtonStyle} px-6 py-2 rounded-md`}>
      {chosedButtonText}
    </button>
  );
};
