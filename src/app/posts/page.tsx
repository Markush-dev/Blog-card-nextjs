import React from 'react';
import BlogCardHeader from '@/components/Blog/BlogCardHeader';
import BlogCard from '@/components/Blog/BlogCard';
import BlogCardList from '@/components/Blog/BlogCardList';

import { dataCard, dataSubscribe } from '@/app/mockBlogData';

import { CARD_DEFAULT_STYLE_CONFIG, CARD_SUBSCRIBE_CONFIG } from '@/app/config';
import Breadcrumb from '@/components/Breadcrumb';
import { breadcrumbItemsAllPost } from '@/app/mockDataReportPage';

const PostsPage = () => {
  const mockDataRowCard = [...dataCard.slice(1), ...dataCard.slice(1)];
  return (
    <>
      <div className='md:px-20'>
        <div className='mb-4'>
          <Breadcrumb items={breadcrumbItemsAllPost} />
        </div>
        <BlogCardHeader title='All Posts' />
        <div className='flex flex-col gap-8'>
          <BlogCardList data={mockDataRowCard} configuration={CARD_DEFAULT_STYLE_CONFIG} />
        </div>
      </div>
      <div className='mt-16 mb-8 sm:px-20 text-white'>
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className='flex flex-col gap-8 pt-10 sm:px-20'>
        <BlogCardList data={[...mockDataRowCard, ...mockDataRowCard]} configuration={CARD_DEFAULT_STYLE_CONFIG} />
      </div>
      <div className='mt-16 mb-8 sm:px-20 text-white'>
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className='flex flex-col gap-8 py-10 sm:px-20'>
        <BlogCardList data={dataCard.slice(1)} configuration={CARD_DEFAULT_STYLE_CONFIG} />
      </div>
    </>
  );
};

export default PostsPage;