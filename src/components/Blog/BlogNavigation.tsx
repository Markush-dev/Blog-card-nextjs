import Link from 'next/link';
import ArrowIcon from '@/icons/ArrowIcon';
import ArrowRightIcon from '@/icons/ArrowRightIcon';

const BlogNavigation = () => {
  return (
    <div className='text-blue-600 flex gap-6 justify-between'>
      <div className='flex justify-center items-center gap-2'>
        <div>Categories</div>
        <ArrowIcon />
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Link href='/posts'>All Post</Link>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default BlogNavigation;
