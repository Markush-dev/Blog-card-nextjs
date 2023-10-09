import { FC } from "react";

interface IProps {
  text: string;
  textColor?: string;
  bgColor?: string;
}

const MobileTrendBox: FC<IProps> = ({ text, textColor, bgColor }) => {
  return (
    <div
      className={`w-32 h-32 sm:w-[200px] sm:h-[150px] sm:text-xl p-2 rounded-2xl flex-center font-semibold ${
        bgColor || "bg-white"
      }`}
      style={{ color: `var(--${textColor || ""})` }}
    >
      {text}
    </div>
  );
};

export default MobileTrendBox;
