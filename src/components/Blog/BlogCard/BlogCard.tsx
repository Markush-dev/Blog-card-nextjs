'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { BlogCardProps } from '@/components/Blog/BlogCard/types';
import { categoryStylesClassName, styleObject } from '@/components/Blog/BlogCard/styles';
import CustomBtn from '@/components/CustomBtn';
import { useRouter } from 'next/navigation';

const VERTICAL_THRESHOLD = 781;

const BlogCard: React.FC<BlogCardProps> = ({ data, configuration }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1280);
  const {
    cardType, bgColor, hasBtn, btnName,
    changeImagePosition, categoriesStyle, margin,
    configWidth, fontSizeTitle,

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
    const baseClassName = 'object-cover';
    const responsiveImageClassName = cardType === 'horizontal' && !isVertical ? 'responsive-image' : '';
    const roundedImageClassName = !changeImagePosition
      ? styles.imageStyles
      : 'rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl';
    const imageWidth = configWidth || '';
    return `${baseClassName} ${responsiveImageClassName} ${roundedImageClassName} ${imageWidth}`;
  }, [cardType, isVertical, changeImagePosition, styles, configWidth]);

  const categoryClassName = useMemo(() => {
    return `px-3 rounded-full mr-2 ${categoriesStyle ? categoryStylesClassName[categoriesStyle] : ''}`;
  }, [categoriesStyle]);

  const articleClassName = useMemo(() => {
    const baseClassName = 'flex cursor-pointer';
    const justifyBetweenClassName = changeImagePosition ? 'justify-between' : '';
    const customBlockStylesClassName = styles.customBlockStyles || '';
    return `${baseClassName} ${justifyBetweenClassName} ${customBlockStylesClassName}`;
  }, [changeImagePosition, styles.customBlockStyles]);

  const contentClassName = useMemo(() => {
    const baseClassName = 'flex flex-col';
    const customContentStylesClassName = styles.contentStyles || '';
    const marginClassName = margin || '';
    const contentWidthClassName = configWidth || '';
    return `${baseClassName} ${customContentStylesClassName} ${marginClassName} ${contentWidthClassName}`;
  }, [margin, configWidth, styles.contentStyles]);

  const handleRedirectToPost = (id?: number) => {
    if (!id) return;
    router.push(`/posts/${id}`);
  };

  return (
    <article
      className={articleClassName}
      style={{ backgroundColor: bgColor ? `var(--${bgColor})` : '' }}
      onClick={() => handleRedirectToPost(id)}
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
        className={contentClassName}
      >
        <header className='text-xs'>
          {date && <time className='mr-4' dateTime={date}>
            {date}
          </time>}
          {categories && categories.map((category, index) => (
            <span
              key={index}
              className={categoryClassName}
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
