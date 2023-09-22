import BlogCard from '@/components/Blog/BlogCard';
import { FC } from 'react';
import { BlogData } from '@/components/Blog/types';
import { IConfig } from '@/app/config';

interface BlogCardProps {
  data: BlogData[];
  configuration: Record<number, IConfig> | IConfig;
  differentColor?: boolean;
}

const BlogCardList: FC<BlogCardProps> = ({ data, configuration, differentColor }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {data.map((item, index) => (
        <BlogCard
          data={item}
          configuration={differentColor
            ? (configuration as Record<number, IConfig>)[index]
            : (configuration as IConfig)}
          key={index}
        />
      ))}
    </div>
  );
};

export default BlogCardList;
