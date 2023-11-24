import { ChildrenJSX } from "../../../@types/types";

export const Container = ({ children }: ChildrenJSX) => {
  return <main className="w-1/2 py-10 bg-white flex flex-col justify-center">{children}</main>;
};
