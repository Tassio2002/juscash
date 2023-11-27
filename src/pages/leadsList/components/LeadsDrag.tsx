import { useState } from "react";

type LeadsDragProps = {
  name: string;
  onClickEvent: () => void;
};

export const LeadsDrag = ({ name, onClickEvent }: LeadsDragProps) => {
  const [spanPosition, setSpanPosition] = useState(0);

  const handleDivClick = (index: number) => {
    if (spanPosition === 1 && index === 0) {
      setSpanPosition(1);
    } else if (spanPosition === 2 && (index === 0 || index === 1)) {
      setSpanPosition(2);
    } else if (spanPosition === 0 && index === 2) {
      setSpanPosition(0);
    } else {
      setSpanPosition(index);
    }
  };

  return (
    <div className="flex">
      <div
        className={`flex-1 p-4 cursor-pointer hover:bg-slate-200 ${
          spanPosition === 0 ? "bg-gray-300" : ""
        }`}
        onClick={() => handleDivClick(0)}
      >
        {spanPosition === 0 && (
          <span className="w-2 mx-auto hover:underline" onClick={onClickEvent}>
            {name}
          </span>
        )}
      </div>
      <div
        className={`flex-1 p-4 cursor-pointer hover:bg-slate-200 ${
          spanPosition === 1 ? "bg-gray-300" : ""
        }`}
        onClick={() => handleDivClick(1)}
      >
        {spanPosition === 1 && (
          <span className="w-2 mx-auto hover:underline" onClick={onClickEvent}>
            {name}
          </span>
        )}
      </div>
      <div
        className={`flex-1 p-4 cursor-pointer hover:bg-slate-200 ${
          spanPosition === 2 ? "bg-gray-300" : ""
        }`}
        onClick={() => handleDivClick(2)}
      >
        {spanPosition === 2 && (
          <span className="w-2 mx-auto hover:underline" onClick={onClickEvent}>
            {name}
          </span>
        )}
      </div>
    </div>
  );
};
