import React, { FC } from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className='self-start flex mt-8 pl-8 text-xs overflow-hidden' aria-label="Breadcrumb">
      <ol className="flex shrink-0 space-x-2">
        {items.map((item, index) => (
          <li key={index} className={`${index === items.length - 1 ? 'font-normal text-gray-500' : 'font-semibold'}`}>
            {index === items.length - 1 ? (
              item.label
            ) : (
              <>
                <Link href={item.url}>{item.label}</Link>
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
