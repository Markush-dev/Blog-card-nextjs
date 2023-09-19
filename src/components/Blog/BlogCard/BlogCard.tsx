'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { BlogCardProps } from '@/components/Blog/BlogCard/types';
import { styleObject } from '@/components/Blog/BlogCard/styles';
import CustomBtn from '@/components/CustomBtn';

const VERTICAL_THRESHOLD = 781;

const BlogCard: React.FC<BlogCardProps> = ({ data, configuration }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1280);
  const { cardType, bgColor, hasBtn, changeImagePosition, categoriesStyle } = configuration;
  const { imageUrl, date, categories, title, content } = data;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isVertical = windowWidth < VERTICAL_THRESHOLD;

  const styles = useMemo(() => {
    return isVertical ? styleObject.vertical : styleObject[cardType];
  }, [isVertical, cardType]);

  const imageClassName = useMemo(() => {
    return `object-cover ${cardType === 'horizontal' && !isVertical ? 'responsive-image' : ''} ${
      !changeImagePosition ? styles.imageStyles : 'rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl'
    }`;
  }, [cardType, isVertical, changeImagePosition, styles]);

  const categoryClassName = useMemo(() => {
    if (!categoriesStyle) return 'bg-blue-100 text-black';
    if (categoriesStyle === 'light') return 'bg-white text-black';
    if (categoriesStyle === 'color') return 'bg-black text-white';
  }, [categoriesStyle]);

  return (
    <article
      className={`flex ${changeImagePosition && 'justify-between'} ${styles.customBlockStyles || ''} `}
      style={{ backgroundColor: `var(--${bgColor})` }}
    >
      {!changeImagePosition && (
        <Image
          className={imageClassName}
          src={imageUrl}
          alt={title}
          width={624}
          height={320}
          priority={true}
        />
      )}
      <div
        className={`flex flex-col ${styles.contentStyles || ''}`}
      >
        <header className='text-xs'>
          <time className='mr-4' dateTime={date}>
            {date}
          </time>
          {categories && categories.map((category, index) => (
            <span
              key={index}
              className={`px-3 rounded-full mr-2 ${categoryClassName}`}
            >
              {category}
            </span>
          ))}
        </header>
        <h2 className='text-[22px] font-semibold'>{title}</h2>
        <p>{content}</p>
        {hasBtn && <CustomBtn name='Subscribe' />}
      </div>
      {changeImagePosition && (
        <Image
          className={imageClassName}
          src={imageUrl}
          alt={title}
          width={624}
          height={320}
          priority={true}
        />
      )}
    </article>
  );
};

export default BlogCard;
