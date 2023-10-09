import React, { FC, ReactNode } from "react";
import CustomTitle from "@/components/global/atoms/CustomTitle";

interface IProps {
  classes: string;
  title: string;
  titleClasses?: string;
  element?: ReactNode;
  text?: string;
  textClasses?: string;
}

const ColorInfoBlock: FC<IProps> = ({
  classes,
  title,
  titleClasses,
  text,
  element,
  textClasses,
}) => {
  return (
    <div className={`w-full bg-[#E3F9FC] rounded-2xl ${classes}`}>
      <CustomTitle title={title} color="blue1000" classes={titleClasses} />
      {text && <p className={textClasses || ""}>{text}</p>}
      {element && <>{element}</>}
    </div>
  );
};

export default ColorInfoBlock;
