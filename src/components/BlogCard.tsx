'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

interface BlogData {
    imageUrl: string;
    date: string;
    categories: string[];
    title: string;
    content: string;
}

interface BlogCardProps {
    data: BlogData;
    cardType: 'vertical' | 'horizontal';
}

const styleObject = {
    vertical: {
        customBlockStyles: 'bg-gray-100 flex-col rounded-2xl max-w-md gap-4 min-h-[544px]',
        imageStyles: 'rounded-t-2xl',
        contentStyles: 'mt-5 gap-3 pl-8 pr-6',
    },
    horizontal: {
        customBlockStyles: 'card-shadow gap-8 rounded-2xl h-80',
        imageStyles: 'rounded-tl-2xl rounded-bl-2xl',
        contentStyles: 'gap-4 py-12 pr-8',
    },
};

const BlogCard: React.FC<BlogCardProps> = ({data, cardType}) => {
    const [windowWidth, setWindowWidth] = useState<number>(1280);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize()
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const {imageUrl, date, categories, title, content} = data;

    const isVertical = windowWidth < 781;
    const styles = isVertical ? styleObject.vertical : styleObject[cardType];

    const imageClassName = `object-cover ${cardType === 'horizontal' && !isVertical ? 'responsive-image' : ''} 
    ${styles.imageStyles || ''}`;

    return (
        <article className={`flex ${styles.customBlockStyles || ''}`}>
            <Image
                className={imageClassName}
                src={imageUrl}
                alt={title}
                width={624}
                height={320}
                priority={true}
            />

            <div className={`flex flex-col ${styles.contentStyles || ''}`}>
                <header className="text-xs">
                    <time className="mr-4" dateTime={date}>
                        {date}
                    </time>
                    {categories.map((category, index) => (
                        <span key={index} className="bg-blue-100 px-3 rounded-full mr-2">
              {category}
            </span>
                    ))}
                </header>
                <h2 className="text-[22px] font-semibold">{title}</h2>
                <p>{content}</p>
            </div>
        </article>
    );
};

export default BlogCard;
