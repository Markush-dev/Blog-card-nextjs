import Link from 'next/link';
import ArrowRightIcon from '@/icons/ArrowRightIcon';
import Dropdown from '@/components/Dropdown';

const BlogNavigation = () => {
  return (
    <div className='text-blue-600 text-sm mt-4 sm:mt-0 flex gap-6 justify-between'>
      <div className='flex justify-center items-center gap-2'>
        <Dropdown />
      </div>
      <div className=' flex justify-center items-center gap-2'>
        <Link href='/posts'>All Post</Link>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default BlogNavigation;
