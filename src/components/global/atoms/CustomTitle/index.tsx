import { FC } from "react";

interface IProps {
  title: string;
  color?: string;
  classes?: string;
}

const CustomTitle: FC<IProps> = ({ title, color, classes }) => {
  return (
    <h3
      style={{ color: `var(--${color || ""})` }}
      className={`font-semibold text-2xl  ${
        classes || "md:text-[32px] md:leading-10"
      }`}
    >
      {title}
    </h3>
  );
};

export default CustomTitle;
