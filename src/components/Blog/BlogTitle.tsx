import { FC } from 'react';
import { IProps } from '@/components/Blog/BlogCardHeader';

const BlogTitle: FC<IProps> = ({ title }) => {
  return (
    <h2 className='text-2xl font-semibold'>
      {title}
    </h2>
  );
};

export default BlogTitle;
