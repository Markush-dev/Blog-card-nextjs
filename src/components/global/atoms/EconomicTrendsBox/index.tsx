import { FC } from "react";

interface IProps {
  text: string;
  bgColor?: string;
}

const EconomicTrendsBox: FC<IProps> = ({ text, bgColor }) => {
  return (
    <div
      className={`w-[200px] h-[150px] p-4 text-blue-1000 rounded-2xl flex-center heading-xl ${
        bgColor || "bg-white"
      }`}
    >
      {text}
    </div>
  );
};

export default EconomicTrendsBox;
