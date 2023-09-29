'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { BlogCardProps } from '@/components/Blog/BlogCard/types';
import { categoryStylesClassName, styleObject } from '@/components/Blog/BlogCard/styles';
import CustomBtn from '@/components/CustomBtn';
import { useRouter } from 'next/navigation';
import { getArticleClass, getContentClass, getImageClass } from '@/components/Blog/BlogCard/helpers';
import BlogCardImage from '@/components/Blog/BlogCard/BlogCardImage';
import BlogCardHeader from '@/components/Blog/BlogCard/BlogCardHeader';
import BlogCardContent from '@/components/Blog/BlogCard/BlogCardContent';

const VERTICAL_THRESHOLD = 781;

const BlogCard: React.FC<BlogCardProps> = ({ data, configuration }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1280);
  const {
    cardType, bgColor, hasBtn, btnName,
    changeImagePosition, categoriesStyle, margin,
    configWidth, fontSizeTitle, splitText, cardShadow,
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
    return getImageClass(cardType, isVertical, changeImagePosition, styles.imageStyles, configWidth);
  }, [cardType, isVertical, changeImagePosition, styles, configWidth]);

  const categoryClassName = useMemo(() => {
    const baseClassName = 'px-3 py-0.5 whitespace-nowrap  rounded-full mr-2';
    const categoriesStyleClass = categoriesStyle ? categoryStylesClassName[categoriesStyle] : '';
    return `${baseClassName} ${categoriesStyleClass}`;
  }, [categoriesStyle]);

  const articleClassName = useMemo(() => {
    return getArticleClass(changeImagePosition, styles.customBlockStyles, cardShadow);
  }, [changeImagePosition, cardShadow, styles.customBlockStyles]);

  const contentClassName = useMemo(() => {
    return getContentClass(styles.contentStyles, margin, configWidth);
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
      {!changeImagePosition && (<BlogCardImage imageUrl={imageUrl} title={title} classes={imageClassName} />)}
      <div
        className={contentClassName}
      >
        {(date || categories) &&
          <BlogCardHeader date={date} categories={categories} categoryClassName={categoryClassName} />}
        <BlogCardContent content={content} title={title} splitText={splitText} fontSizeTitle={fontSizeTitle} />
        {hasBtn && btnName && <CustomBtn name={btnName} />}
      </div>
      {changeImagePosition && (<BlogCardImage imageUrl={imageUrl} title={title} classes={imageClassName} />)}

    </article>
  );
};

export default BlogCard;
