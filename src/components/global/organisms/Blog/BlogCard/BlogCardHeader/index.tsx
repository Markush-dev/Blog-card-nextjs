import { FC } from "react";

interface IPropsHeader {
  date?: string;
  categories?: string[];
  categoryClassName: string;
}

const BlogCardHeader: FC<IPropsHeader> = ({
  date,
  categories,
  categoryClassName,
}) => {
  return (
    <header className="text-xs h-8 flex items-center category-mask w-full">
      <div className="mr-4 whitespace-nowrap">
        {date && <time dateTime={date}>{date}</time>}
      </div>
      <div className="max-w-[240px] w-full sm:max-w-full">
        {categories &&
          categories.map((category, index) => (
            <span key={index} className={categoryClassName}>
              {category}
            </span>
          ))}
      </div>
    </header>
  );
};

export default BlogCardHeader;
