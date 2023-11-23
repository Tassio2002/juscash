type FormProps = {
  type: "signup" | "login";
};

export const FormQuestion = ({ type }: FormProps) => {
  const texts = {
    signup: {
      question: "Já possui uma conta?",
      linkText: "Fazer o login",
    },
    login: {
      question: "Ainda não possui uma conta?",
      linkText: "Cadastre-se",
    },
  };
  let question;
  let linkText;
  if (type === "signup") {
    question = texts.signup.question;
    linkText = texts.signup.linkText;
  } else if (type === "login") {
    question = texts.login.question;
    linkText = texts.login.linkText;
  }
  return (
    <div className="flex gap-1 text-xs text-[#112047]">
      <span>{question}</span>
      <a href="/login">{linkText}</a>
    </div>
  );
};
