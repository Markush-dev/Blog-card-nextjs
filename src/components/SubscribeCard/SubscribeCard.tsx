import React from 'react';
import Image from 'next/image';
import CustomBtn from '@/components/CustomBtn';

interface IProps {
  data: SubscribeData;
}

interface SubscribeData {
  imageUrl: string;
  title: string;
  content: string;
}

const SubscribeCard: React.FC<IProps> = ({ data }) => {
  const { imageUrl, title, content } = data;
  return (
    <article
      className='flex flex-col rounded-l-2xl overflow-hidden text-white'
      style={{ backgroundColor: `var(--blue1000)` }}
    >
      <div
        className='flex flex-col px-8 py-6'
      >
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='mt-2'>{content}</p>
        <CustomBtn name='Subscribe' classes='md:mt-6'/>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={624}
        height={320}
        priority={true}
      />
    </article>
  );
};

export default SubscribeCard;
