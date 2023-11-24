import { useState } from "react";

type CheckboxProps = {
  text: string;
};

export const Checkbox = ({ text }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex gap-1">
      <input
        type="checkbox"
        id={text}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{text}</label>
    </div>
  );
};
