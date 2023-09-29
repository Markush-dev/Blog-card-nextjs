import { FC } from 'react';

interface IProps {
  text: string;
  textColor?: string;
  bgColor?: string;
}

const EconomicTrendsBox: FC<IProps> = ({ text, textColor, bgColor }) => {
  return (
    <div
      className={`w-[200px] h-[150px] p-4 rounded-2xl flex-center text-[22px] font-semibold ${bgColor || 'bg-white'}`}
      style={{ color: `var(--${textColor || ''})` }}

    >
      {text}
    </div>
  );
};

export default EconomicTrendsBox;
