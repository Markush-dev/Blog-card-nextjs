'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { BlogCardProps } from '@/components/Blog/BlogCard/types';
import { styleObject } from '@/components/Blog/BlogCard/styles';
import CustomBtn from '@/components/CustomBtn';
import { useRouter } from 'next/navigation';

const VERTICAL_THRESHOLD = 781;

const BlogCard: React.FC<BlogCardProps> = ({ data, configuration }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1280);
  const {
    cardType, bgColor, hasBtn, btnName,
    changeImagePosition, categoriesStyle, margin,
    postWidth, fontSizeTitle,

  } = configuration;
  const { imageUrl, date, categories, title, content, id } = data;
  const router = useRouter();
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
    if (bgColor === 'grey30') return 'bg-white text-[#0071CE]';
    if (!categoriesStyle) return ' bg-[#F6F7F9] text-[#0071CE]';
    if (categoriesStyle === 'light') return 'bg-white text-black';
    if (categoriesStyle === 'color') return 'bg-black text-white';
  }, [categoriesStyle, bgColor]);

  const handleRedirectToPost = (id?: number) => {
    if (!id) return;
    router.push(`/posts/${id}`);
  };

  return (
    <article
      className={`flex cursor-pointer ${changeImagePosition
        ? 'justify-between'
        : ''} ${styles.customBlockStyles || ''} `}
      style={{ backgroundColor: bgColor ? `var(--${bgColor})` : '' }}
      onClick={() => handleRedirectToPost(id)}
    >
      {!changeImagePosition && (
        <Image
          className={`${imageClassName} ${postWidth || ''}`}
          src={imageUrl}
          alt={title}
          width={624}
          height={320}
          priority={true}
        />
      )}
      <div
        className={`flex flex-col ${styles.contentStyles || ''} ${margin || ''} ${postWidth || ''}`}
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
        <h2 className={`${fontSizeTitle || 'text-[22px]'} font-semibold`}>{title}</h2>
        <p>{content}</p>
        {hasBtn && btnName && <CustomBtn name={btnName} />}
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
