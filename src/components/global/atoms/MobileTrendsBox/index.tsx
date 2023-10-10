import { FC } from "react";

interface IProps {
  text: string;
  bgColor?: string;
}

const MobileTrendBox: FC<IProps> = ({ text, bgColor }) => {
  return (
    <div
      className={`w-32 h-32 sm:w-[200px] sm:h-[150px] text-blue-1000 sm:text-xl p-2 rounded-2xl flex-center font-semibold ${
        bgColor || "bg-white"
      }`}
    >
      {text}
    </div>
  );
};

export default MobileTrendBox;
