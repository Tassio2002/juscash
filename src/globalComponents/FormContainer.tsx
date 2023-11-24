import { ChildrenJSX } from "../@types/types";

export const FormContainer = ({ children }: ChildrenJSX) => {
  return (
    <div className={`w-1/3 min-w-[450px] p-8 bg-white flex flex-col justify-center`}>
      {children}
    </div>
  );
};
