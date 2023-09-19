import React from 'react';
import BlogCardHeader from '@/components/Blog/BlogCardHeader';
import BlogCard from '@/components/Blog/BlogCard';
import { dataCard, dataColorCard, dataPartnerHub, dataSubscribe } from '@/app/mockBlogData';
import {
  CARD_DEFAULT_STYLE_CONFIG,
  CARD_STYLE_COLOR_CONFIG,
  CARD_SUBSCRIBE_CONFIG,
} from '@/app/config';
import BlogCardList from '@/components/Blog/BlogCardList';

const PostPage = () => {
  return (
    <main className='flex flex-col min-h-screen max-w-[1440px] mx-auto items-center'>
      <div className='sm:px-20'>
          <BlogCardHeader title='All Posts' subtitle='Zeller Business Blog' />
        <div className='flex flex-col gap-8'>
          <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
          <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
        </div>
      </div>
      <div className='mt-16 mb-8 sm:px-20 text-white'>
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className='flex flex-col gap-8 py-10 sm:px-20'>
        <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
        <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
        <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
        <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
      </div>
      <div className='mt-16 mb-8 sm:px-20 text-white'>
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className='flex flex-col gap-8 py-10 sm:px-20'>
        <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
        <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
      </div>
    </main>
  );
};

export default PostPage;