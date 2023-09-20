import React, { FC } from 'react';
import ArrowDownIcon from '@/icons/ArrowDownIcon';

interface IProps {
  name: string,
  classes?: string
  hasImage?: boolean
}

const CustomBtn: FC<IProps> = ({ name, classes, hasImage }) => {
  return (
    <button
      type='button'
      className={`flex justify-center items-center px-6 py-2 mt-8 text-white font-semibold rounded-full max-w-fit bg-[#0055A6] ${classes || ''}`}
    >{name}
      {hasImage && (
        <div className='ml-2'>
          <ArrowDownIcon />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
