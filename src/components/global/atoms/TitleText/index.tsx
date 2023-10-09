import { FC } from "react";
import { IProps } from "@/components/global/molecules/ContentHeader";

const TitleText: FC<IProps> = ({ title }) => {
  return <h2 className="text-2xl font-semibold">{title}</h2>;
};

export default TitleText;
