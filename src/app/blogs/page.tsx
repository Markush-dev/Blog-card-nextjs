import React from "react";

import Breadcrumb from "@/components/global/molecules/Breadcrumb";
import TitleText from "@/components/global/atoms/TitleText";
import BlogCardList from "@/components/global/organisms/Blog/BlogCardList";

import { dataCard } from "@/mockBlogData";
import { CARD_DEFAULT_STYLE_CONFIG } from "@/config";
import { breadcrumbItemsBlogPageCategory } from "@/mockDataReportPage";

const Page = () => {
  const mockData = () => {
    const numberOfCopies = 10;

    return Array.from({ length: numberOfCopies }, () => [
      ...dataCard.slice(1),
      ...dataCard.slice(1).reverse(),
    ]).flat();
  };

  return (
    <>
      <div className="md:px-20">
        <div className="mb-4">
          <Breadcrumb items={breadcrumbItemsBlogPageCategory} />
        </div>
        <TitleText title="All Blogs" />
        <div className="flex flex-col gap-8">
          <BlogCardList
            data={mockData()}
            configuration={CARD_DEFAULT_STYLE_CONFIG}
            pagination
          />
        </div>
      </div>
    </>
  );
};

export default Page;
