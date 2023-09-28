import { FC } from 'react';

interface IProps {
  classes?: string;
}

const ArrowPagination: FC<IProps> = ({ classes }) => (
  <svg
    className={classes || ''}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.71967 11.0303C8.01256 11.3232 8.48744 11.3232 8.78033 11.0303C9.07322 10.7374 9.07322 10.2626 8.78033 9.96967L4.81066 6L8.78033 2.03033C9.07322 1.73744 9.07322 1.26256 8.78033 0.96967C8.48744 0.676777 8.01256 0.676777 7.71967 0.96967L3.21967 5.46967C2.92678 5.76256 2.92678 6.23744 3.21967 6.53033L7.71967 11.0303Z'
      fill='#212322'
    />
  </svg>

);
export default ArrowPagination;
