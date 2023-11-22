type Props = {
  text: string;
  color: "blue" | "gray";
  isRequired: boolean
};

export const FormLabel = ({ text, color, isRequired }: Props) => {
  const colorSelected = color === "blue" ? "text-[#112047]" : "text-[#504e4f]";
  const labelText = isRequired ? `${text}: *` : text
  return <label className={`${colorSelected}`}>{labelText}</label>;
};
