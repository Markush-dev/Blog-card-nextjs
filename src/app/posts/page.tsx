import React from "react";

import BlogCard from "@/components/global/organisms/Blog/BlogCard";
import Breadcrumb from "@/components/global/molecules/Breadcrumb";
import BlogCardList from "@/components/global/organisms/Blog/BlogCardList";
import ContentHeader from "@/components/global/molecules/ContentHeader";

import { dataCard, dataSubscribe } from "@/mockBlogData";

import { CARD_DEFAULT_STYLE_CONFIG, CARD_SUBSCRIBE_CONFIG } from "@/config";
import { breadcrumbItemsAllPost } from "@/mockDataReportPage";

const PostsPage = () => {
  const mockDataRowCard = [...dataCard.slice(1), ...dataCard.slice(1)];
  return (
    <>
      <div className="md:px-20">
        <div className="mb-4">
          <Breadcrumb items={breadcrumbItemsAllPost} />
        </div>
        <ContentHeader title="All Posts" />
        <div className="flex flex-col gap-8">
          <BlogCardList
            data={mockDataRowCard}
            configuration={CARD_DEFAULT_STYLE_CONFIG}
          />
        </div>
      </div>
      <div className="mt-8 sm:mt-16 mb-8 sm:px-20 text-white">
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className="flex flex-col gap-8 pt-10 sm:px-20">
        <BlogCardList
          data={[...mockDataRowCard, ...mockDataRowCard]}
          configuration={CARD_DEFAULT_STYLE_CONFIG}
        />
      </div>
      <div className="mt-8 sm:mt-16 mb-8 sm:px-20 text-white">
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className="flex flex-col gap-8 py-10 sm:px-20">
        <BlogCardList
          data={dataCard.slice(1)}
          configuration={CARD_DEFAULT_STYLE_CONFIG}
        />
      </div>
    </>
  );
};

export default PostsPage;
