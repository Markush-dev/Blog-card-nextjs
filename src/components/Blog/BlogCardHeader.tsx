import BlogTitle from '@/components/Blog/BlogTitle';
import BlogNavigation from '@/components/Blog/BlogNavigation';
import { FC } from 'react';

export interface IProps {
  title: string;
  subtitle?: string;
}

const BlogCardHeader: FC<IProps> = ({ title, subtitle }) => {
  return (
    <div className='flex justify-between md:items-center px-6 md:px-10  mb-6 flex-col md:flex-row'>
      <div>
        {subtitle && <p className='mb-3'>{subtitle}</p>}
        <BlogTitle title={title} />
      </div>
      <BlogNavigation />
    </div>
  );
};

export default BlogCardHeader;
