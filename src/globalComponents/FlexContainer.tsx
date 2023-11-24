import { ReactNode } from "react";

type FlexContainerProps = {
  display?: string;
  children: ReactNode;
};

export const FlexContainer = ({ display, children }: FlexContainerProps) => {
  return (
    <main
      className={`${display} w-screen h-screen flex justify-center items-center`}
    >
      {children}
    </main>
  );
};
