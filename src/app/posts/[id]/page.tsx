import { dataCard } from '@/app/mockBlogData';
import BlogCard from '@/components/Blog/BlogCard';
import { POST_DEFAULT_CONFIG } from '@/app/config';
import Breadcrumb from '@/components/Breadcrumb';
import { breadcrumbItemsPostPage } from '@/app/mockDataReportPage';
import React, { FC } from 'react';

interface IProps {
  params: {
    id: string;
  };
}

const Page: FC<IProps> = ({ params: { id } }) => {
  const data = dataCard.find(el => el.id === Number(id));
  if (!data) return;
  return (
    <main className='flex flex-col min-h-screen max-w-[1440px] mx-auto items-center'>
      <div className='md:px-20'>
        <Breadcrumb items={breadcrumbItemsPostPage} />
        <div className='mt-4'>
          <BlogCard
            data={data}
            configuration={POST_DEFAULT_CONFIG}
          />
        </div>

      </div>
    </main>

  );
};

export default Page;
