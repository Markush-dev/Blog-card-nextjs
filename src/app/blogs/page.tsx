import BlogCardList from '@/components/Blog/BlogCardList';
import { dataCard } from '@/app/mockBlogData';
import { CARD_DEFAULT_STYLE_CONFIG } from '@/app/config';
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { breadcrumbItemsBlogPageCategory } from '@/app/mockDataReportPage';
import BlogCardHeader from '@/components/Blog/BlogCardHeader';

const Page = () => {
  const mockData = () => {
    const numberOfCopies = 10;

    return Array.from({ length: numberOfCopies }, () =>
      [...dataCard.slice(1), ...dataCard.slice(1).reverse()],
    ).flat();
  };

  return (
    <>
      <div className='md:px-20'>
        <div className='mb-4'>
          <Breadcrumb items={breadcrumbItemsBlogPageCategory} />
        </div>
        <BlogCardHeader title='All Blogs' />
        <div className='flex flex-col gap-8'>
          <BlogCardList
            data={mockData()}
            configuration={CARD_DEFAULT_STYLE_CONFIG} pagination
          />
        </div>
      </div>
    </>

  );
};

export default Page;
