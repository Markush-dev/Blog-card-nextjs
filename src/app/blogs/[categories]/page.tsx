import React, { FC } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

import {
  breadcrumbItemsBlogPageCategory,
} from '@/app/mockDataReportPage';
import { dataCard } from '@/app/mockBlogData';
import { CARD_DEFAULT_STYLE_CONFIG } from '@/app/config';
import BlogCardList from '@/components/Blog/BlogCardList';

interface IProps {
  params: {
    categories: string;
  };
}

const Page: FC<IProps> = ({ params: { categories } }) => {
  const decodeCategories = decodeURIComponent(categories);
  const filteredData = dataCard.filter((item) =>
    item.categories.some((category) =>
      category.toLowerCase().includes(decodeCategories.toLowerCase()),
    ),
  );
  if (!filteredData.length) {
    return <h1>Oops post was not found for the category you selected.</h1>;
  }

  const capitalizeEachWord = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <div className='md:px-20'>
        <Breadcrumb
          items={[
            ...breadcrumbItemsBlogPageCategory,
            { label: `${capitalizeEachWord(decodeCategories)}`, url: '/' },
          ]}
        />
        <div className='mt-4'>
          <BlogCardList data={filteredData} configuration={CARD_DEFAULT_STYLE_CONFIG} />
        </div>
      </div>
    </>
  );
};

export default Page;
