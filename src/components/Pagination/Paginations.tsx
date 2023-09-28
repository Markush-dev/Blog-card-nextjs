'use client';
import React, { FC, useMemo } from 'react';
import ArrowPagination from '@/icons/ArrowPagination';

interface IProps {
  count: number;
  showSteps: number;
  sizePage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FC<IProps> = ({
  setCurrentPage,
  currentPage,
  count,
  sizePage,
  showSteps,
}) => {

  const countValues = useMemo(() => {
    const countPage = Math.ceil(count / sizePage);
    const scalePage = (Math.ceil(currentPage / showSteps) - 1) * showSteps;
    return { countPage, scalePage };
  }, [count, sizePage, currentPage]);

  const { countPage, scalePage } = countValues;

  const onChangePage = (page: number) => {
    if (page >= 1 && page <= countPage) {
      setCurrentPage(page);
    }
  };

  const handleArrowClick = (value: number) => {
    const newPage = currentPage + value;
    if (newPage >= 1 && newPage <= countPage) {
      onChangePage(newPage);
    }
  };

  const handleClickBackArrow = () => {
    handleArrowClick(-1);
  };

  const handleClickNextArrow = () => {
    handleArrowClick(1);
  };

  if (countPage < 5) return null;
  return (
    <>
      <div className='bg-white flex card-shadow rounded-full items-center h-12 mt-14'>
        <div className='w-12 h-12 flex justify-center items-center mr-4 p-2'>
          <button
            disabled={currentPage === 1}
            onClick={handleClickBackArrow}
            className={`relative w-8 h-8 rounded-full ${currentPage === 1 ? 'cursor-not-allowed'
              : 'hover:bg-gray-50'} inline-flex items-center justify-center rounded`}
          >
            <ArrowPagination />
          </button>
        </div>

        {countPage > showSteps && scalePage / showSteps > 0 && (
          <div className='w-12 h-12 flex justify-center items-center p-2'>
            <button
              onClick={() => onChangePage(1)}
              className='relative inline-flex items-center justify-center rounded-full w-8 h-8 px-2 hover:bg-gray-50 '
            >
              ...
            </button>
          </div>
        )}
        {new Array(countPage > showSteps ? showSteps : countPage).fill(1)
          .map((_, index) => {
            const pageNumber = index + 1 + scalePage;
            if (pageNumber > countPage) return null;
            return (
              <div
                key={index}
                className='w-12 h-12 flex justify-center items-center'
              >
                <button
                  onClick={() => onChangePage(pageNumber)}
                  className={`relative inline-flex px-4 py-2 w-8 h-8 items-center justify-center rounded-full ${currentPage === pageNumber
                    ? 'bg-[#0071CE] text-white' : 'hover:bg-gray-50'} `}
                >
                  {pageNumber}
                </button>
              </div>

            );
          })}

        {countPage > showSteps && scalePage / showSteps < Math.ceil(countPage / showSteps) - 1 && (
          <div className='w-12 h-12 flex justify-center items-center p-2'>
            <button
              onClick={() => onChangePage(countPage)}
              className='relative inline-flex items-center justify-center rounded-full w-8 h-8 px-2 hover:bg-gray-50 '
            >
              ...
            </button>
          </div>

        )}
        <div className={`w-12 h-12 flex justify-center items-center ${(countPage > showSteps && scalePage / showSteps > 0) && 'hidden'}`}>
          <button
            onClick={() => onChangePage(countPage)}
            className='relative inline-flex px-4 py-2 w-8 h-8 items-center justify-center rounded-full hover:bg-gray-50'
          >
            {countPage}
          </button>
        </div>
        <div className='w-12 h-12 ml-4 flex justify-center items-center'>
          <button
            disabled={currentPage === countPage}
            onClick={handleClickNextArrow}
            className={`relative inline-flex rounded-full items-center justify-center w-8 h-8 ${currentPage === countPage
              ? 'cursor-not-allowed '
              : 'hover:bg-gray-50 '}`}
          >
            <ArrowPagination classes='rotate-180' />
          </button>
        </div>

      </div>
    </>

  );
};

export default Pagination;
