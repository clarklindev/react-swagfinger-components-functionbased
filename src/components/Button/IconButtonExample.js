import { Heading6 } from '../Typography/Typography';
import { IconButton } from './IconButton';

export const IconButtonExample = () => {
  return (
    <>
      <Heading6>Icon Button</Heading6>
      <IconButton size='30px'>
        <svg
          fill='none'
          stroke='black'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
          ></path>
        </svg>
      </IconButton>
    </>
  );
};
