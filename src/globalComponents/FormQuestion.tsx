import { Link } from "wouter";
type FormProps = {
  type: "signup" | "login";
};

export const FormQuestion = ({ type }: FormProps) => {
  const questionConfig = {
    signup: {
      question: "Já possui uma conta?",
      linkText: "Fazer o login",
      linkHref: "/login",
    },
    login: {
      question: "Ainda não possui uma conta?",
      linkText: "Cadastre-se",
      linkHref: "/",
    },
  };
  let question;
  let linkText;
  let linkHref = "";
  if (type === "signup") {
    question = questionConfig.signup.question;
    linkText = questionConfig.signup.linkText;
    linkHref = questionConfig.signup.linkHref;
  } else if (type === "login") {
    question = questionConfig.login.question;
    linkText = questionConfig.login.linkText;
    linkHref = questionConfig.login.linkHref;
  }
  return (
    <div className="flex gap-1 text-xs text-[#112047]">
      <span>{question}</span>
      <Link href={linkHref}>{linkText}</Link>
    </div>
  );
};
