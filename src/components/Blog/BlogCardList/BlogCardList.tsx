'use client';
import BlogCard from '@/components/Blog/BlogCard';
import { FC, useState } from 'react';
import { BlogData } from '@/components/Blog/types';
import { IConfig } from '@/app/config';
import Pagination from '@/components/Pagination';

interface BlogCardProps {
  data: BlogData[];
  configuration: Record<number, IConfig> | IConfig;
  differentColor?: boolean;
  pagination?: boolean;
}

const itemsPerPage = 3;

const BlogCardList: FC<BlogCardProps> = ({ data, configuration, differentColor, pagination }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-1 px-3 sm:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {pagination ? paginateData().map((item, index) => (
            <BlogCard
              data={item}
              configuration={differentColor
                ? (configuration as Record<number, IConfig>)[index]
                : (configuration as IConfig)}
              key={index}
            />
          ))
          :
          data.map((item, index) => (
            <BlogCard
              data={item}
              configuration={differentColor
                ? (configuration as Record<number, IConfig>)[index]
                : (configuration as IConfig)}
              key={index}
            />
          ))
        }
      </div>
      {pagination &&
        <>
          <div className='sm:block hidden'>
            <Pagination
              showSteps={5}
              count={data.length}
              sizePage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className='sm:hidden block'>
            <Pagination
              showSteps={3}
              count={data.length}
              sizePage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      }
    </div>

  );
};

export default BlogCardList;
