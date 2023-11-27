import { useState } from "react";

type LeadsDragProps = {
  name: string;
  index: number;
  onClickEvent: () => void;
};

export const LeadsDrag = ({ name, index, onClickEvent }: LeadsDragProps) => {
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

  const setItemStyle = (index: number): string => {
    console.log("🚀 ~ file: LeadsDrag.tsx:25 ~ setItemStyle ~ index:", index);
    return `flex border border-slate-300 ${
      index % 2 === 0 ? "bg-gray-200" : "bg-white"
    }`;
  };
  return (
    <div className={setItemStyle(index)}>
      <div
        className={`flex-1 p-4 cursor-pointer ${
          spanPosition !== 0 ? "hover:bg-slate-300" : ""
        }`}
        onClick={() => handleDivClick(0)}
      >
        {spanPosition === 0 && (
          <span
            className="w-2 mx-auto hover:underline text-sm text-gray-800 font-semibold"
            onClick={onClickEvent}
          >
            {name}
          </span>
        )}
      </div>
      <div
        className={`flex-1 p-4 cursor-pointer ${
          spanPosition !== 1 ? "hover:bg-slate-300" : ""
        }`}
        onClick={() => handleDivClick(1)}
      >
        {spanPosition === 1 && (
          <span
            className="w-2 mx-auto hover:underline text-sm text-gray-800 font-semibold"
            onClick={onClickEvent}
          >
            {name}
          </span>
        )}
      </div>
      <div
        className={`flex-1 p-4 cursor-pointer ${
          spanPosition !== 2 ? "hover:bg-slate-300" : ""
        }`}
        onClick={() => handleDivClick(2)}
      >
        {spanPosition === 2 && (
          <span
            className="w-2 mx-auto hover:underline text-sm text-gray-800 font-semibold"
            onClick={onClickEvent}
          >
            {name}
          </span>
        )}
      </div>
    </div>
  );
};
