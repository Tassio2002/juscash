import { ReactNode } from "react";

type ModalContainerProps = {
  isOpen: boolean;
  children: ReactNode;
};
export const ModalContainer = ({ isOpen, children }: ModalContainerProps) => {
  let display = "hidden";
  if (isOpen) {
    display = "flex";
  }
  return (
    <div
      className={`${display} w-screen h-screen justify-center items-center bg-gray-900`}
    >
      {children}
    </div>
  );
};
