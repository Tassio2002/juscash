import { useState } from "react";

type CheckboxProps = {
  text: string;
  isDisabled?: boolean;
};

export const Checkbox = ({ text, isDisabled }: CheckboxProps) => {
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
        disabled={isDisabled}
      />
      <label>{text}</label>
    </div>
  );
};
