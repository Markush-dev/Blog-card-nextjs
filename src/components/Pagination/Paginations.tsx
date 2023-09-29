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

  const {
    countPage,
    scalePage,
    shouldRenderDotsBefore,
    shouldRenderDotsAfter,
    shouldRenderLastPageButton,
  } = useMemo(() => {
    const countPage = Math.ceil(count / sizePage);
    const scalePage = (Math.ceil(currentPage / showSteps) - 1) * showSteps;
    const shouldRenderDotsBefore = countPage > showSteps && scalePage / showSteps > 0;
    const shouldRenderDotsAfter = countPage > showSteps && scalePage / showSteps < Math.ceil(countPage / showSteps) - 1;
    const shouldRenderLastPageButton = !(countPage > showSteps && scalePage / showSteps > 0);

    return { countPage, scalePage, shouldRenderDotsBefore, shouldRenderDotsAfter, shouldRenderLastPageButton };
  }, [count, sizePage, currentPage, showSteps]);

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

  const renderPageButtons = () => {
    const buttons = [];
    const maxButtons = Math.min(showSteps, countPage);
    for (let i = 0; i < maxButtons; i++) {
      const pageNumber = i + 1 + scalePage;
      if (pageNumber > countPage) break;

      const isCurrent = currentPage === pageNumber;
      const btnClasses = `relative inline-flex px-4 py-2 w-8 h-8 items-center justify-center rounded-full 
      ${isCurrent ? 'bg-[#0071CE] text-white' : 'hover:bg-gray-50'} `;
      buttons.push(
        <div
          key={i}
          className='w-12 h-12 flex-center'
        >
          <button
            onClick={() => onChangePage(pageNumber)}
            className={btnClasses}
          >
            {pageNumber}
          </button>
        </div>,
      );
    }

    return buttons;
  };

  const renderDots = (showDots: boolean, page: number) => {
    if (showDots) {
      return (
        <div className='w-12 h-12 flex-center p-2'>
          <button
            onClick={() => onChangePage(page)}
            className='relative inline-flex items-center justify-center rounded-full w-8 h-8 px-2 hover:bg-gray-50'
          >
            ...
          </button>
        </div>
      );
    }
    return null;
  };

  const renderLastPageButton = () => {
    if (shouldRenderLastPageButton) {
      return (
        <div className='w-12 h-12 flex-center'>
          <button
            onClick={() => onChangePage(countPage)}
            className='relative inline-flex px-4 py-2 w-8 h-8 items-center justify-center rounded-full hover:bg-gray-50'
          >
            {countPage}
          </button>
        </div>
      );
    }
    return null;
  };

  const arrowBtnClass = (currentPage: number, page: number) => {
    const baseClassName = 'flex-center relative w-8 h-8 rounded-full';
    return `${baseClassName} ${currentPage === page ? 'cursor-not-allowed' : 'hover:bg-gray-50'}`;
  };

  return (
    <div className='bg-white flex card-shadow rounded-full items-center h-12 mt-14'>
      <div className='w-12 h-12 flex-center mr-4 p-2'>
        <button
          disabled={currentPage === 1}
          onClick={handleClickBackArrow}
          className={`${arrowBtnClass(currentPage, 1)}`}
        >
          <ArrowPagination />
        </button>
      </div>
      {renderDots(shouldRenderDotsBefore, 1)}
      {renderPageButtons()}
      {renderDots(shouldRenderDotsAfter, countPage)}
      {renderLastPageButton()}
      <div className='w-12 h-12 ml-4 flex-center'>
        <button
          disabled={currentPage === countPage}
          onClick={handleClickNextArrow}
          className={`${arrowBtnClass(currentPage, countPage)}`}
        >
          <ArrowPagination classes='rotate-180' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
