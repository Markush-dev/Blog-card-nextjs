import { FC } from 'react';

interface IProps {
  classes?: string;
}

const ArrowIcon: FC<IProps> = ({ classes }) => {
  return (
    <svg
      className={classes || ''}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M13.0303 6.28033C13.3232 5.98744 13.3232 5.51256 13.0303 5.21967C12.7374 4.92678 12.2626 4.92678 11.9697 5.21967L8 9.18934L4.03033 5.21967C3.73744 4.92678 3.26256 4.92678 2.96967 5.21967C2.67678 5.51256 2.67678 5.98744 2.96967 6.28033L7.46967 10.7803C7.76256 11.0732 8.23744 11.0732 8.53033 10.7803L13.0303 6.28033Z'
        fill='#BBC3C3'
      />
    </svg>
  );
};

export default ArrowIcon;
