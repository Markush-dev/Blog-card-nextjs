import { FC } from 'react';

interface IProps {
  text: string,
  color?: string
  classes?: string
}

const ReportsTitle: FC<IProps> = ({ text, color, classes }) => {
  return (
    <h3
      style={{ color: `var(--${color || ''})` }}
      className={`text-2xl md:text-[32px] md:leading-10 font-semibold ${classes || ''}`}
    >
      {text}
    </h3>
  );
};

export default ReportsTitle;
