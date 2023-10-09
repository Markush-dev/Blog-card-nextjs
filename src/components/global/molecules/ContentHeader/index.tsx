import { FC } from "react";
import TitleText from "@/components/global/atoms/TitleText";
import ContentNavigation from "@/components/global/molecules/ContentNavigation";

export interface IProps {
  title: string;
  subtitle?: string;
}

const ContentHeader: FC<IProps> = ({ title, subtitle }) => {
  return (
    <div className="flex justify-between md:items-center px-6 md:px-10  mb-6 flex-col md:flex-row">
      <div>
        {subtitle && <p className="mb-3">{subtitle}</p>}
        <TitleText title={title} />
      </div>
      <ContentNavigation />
    </div>
  );
};

export default ContentHeader;
