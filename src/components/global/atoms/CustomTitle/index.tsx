import { FC } from "react";

interface IProps {
  title: string;
  color?: string;
  classes?: string;
}

const CustomTitle: FC<IProps> = ({ title, color, classes }) => {
  return (
    <h3 className={`${color || ""}  ${classes || "heading-3xl"}`}>{title}</h3>
  );
};

export default CustomTitle;
