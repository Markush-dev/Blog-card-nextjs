import React, { FC } from 'react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className='self-start mt-8 pl-8 text-xs' aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className={`${index === items.length - 1 ? 'font-normal' : 'font-semibold'}`}>
            {index === items.length - 1 ? (
              item.label
            ) : (
              <>
                <a href={item.url}>{item.label}</a>
                <span className='ml-2 text-gray-500 text-md'>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
