import BlogCard from '@/components/Blog/BlogCard/BlogCard';
import BlogCardHeader from '@/components/Blog/BlogCardHeader';
import BlogCardList from '@/components/Blog/BlogCardList';

import { dataCard, dataColorCard, dataPartnerHub, dataSubscribe } from '@/app/mockBlogData';

import {
  BLOG_CARD_BLACK_CONFIG, BLOG_CARD_CONFIG, BLOG_CARD_DEFAULT_CONFIG,
  CARD_DEFAULT_STYLE_CONFIG, CARD_STYLE_COLOR_CONFIG, CARD_SUBSCRIBE_CONFIG,
} from '@/app/config';

export default function Home() {
  return (
    <>
      <div className='sm:px-20'>
        <BlogCardHeader title='Zeller Business Blog' />
        <div className='flex flex-col gap-16'>
          <BlogCard
            data={dataCard[0]}
            configuration={BLOG_CARD_DEFAULT_CONFIG}
          />
          <BlogCardList data={dataCard.slice(1)} configuration={CARD_DEFAULT_STYLE_CONFIG} />
        </div>

      </div>
      <div className='mt-16 mb-8 sm:px-20 text-white'>
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className='flex flex-col bg-gray-50 py-10 sm:px-20'>
        <BlogCardHeader title='Zeller Partner Hub' />
        <div className='flex flex-col gap-16'>
          <BlogCard
            data={dataColorCard}
            configuration={BLOG_CARD_CONFIG}
          />
          <BlogCardList differentColor data={dataCard.slice(1)} configuration={CARD_STYLE_COLOR_CONFIG} />
        </div>

      </div>
      <div className='mt-16 mb-8 sm:px-20 text-white'>
        <BlogCard
          data={dataPartnerHub}
          configuration={BLOG_CARD_BLACK_CONFIG}
        />
      </div>
    </>
  );
}
