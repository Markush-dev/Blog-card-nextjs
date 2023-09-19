import BlogCard from '@/components/Blog/BlogCard';
import { FC } from 'react';
import { BlogData } from '@/components/Blog/types';
import { IConfig } from '@/app/config';

interface BlogCardProps {
  data: BlogData[];
  configuration: IConfig[];
}

const BlogCardList: FC<BlogCardProps> = ({ data, configuration }) => {
  return (
    <div className='flex flex-col md:flex-row px-2 md:px-0 gap-8'>
      {data.map((item, index) => (
        <BlogCard
          data={item}
          configuration={configuration[index]}
          key={index}
        />
      ))}
    </div>
  );
};

export default BlogCardList;
