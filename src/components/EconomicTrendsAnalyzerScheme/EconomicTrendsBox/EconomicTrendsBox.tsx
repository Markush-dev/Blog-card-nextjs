import { FC } from 'react';

interface IProps {
  text: string;
  textColor?: string;
  classes?: string;
}

const EconomicTrendsBox: FC<IProps> = ({ text, textColor, classes }) => {
  return (
    <div
      className={`w-[200px] h-[150px] p-4 rounded-2xl flex justify-center items-center text-[22px] font-semibold ${classes || 'bg-white'}`}
      style={{ color: `var(--${textColor || ''})` }}

    >
      {text}
    </div>
  );
};

export default EconomicTrendsBox;
