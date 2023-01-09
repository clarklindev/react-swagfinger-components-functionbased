import React, { useState } from 'react';
import { CheckboxIcon } from './CheckboxIcon';
import { Heading6 } from '../Typography/Typography';

export const CheckboxIconExample = () => {
  const [savedData1, setSavedData1] = useState(false);
  const [savedData2, setSavedData2] = useState(false);

  const configure1 = {
    activeColor: 'blue',
    onChange: (event) => {
      console.log('checked1');
      setSavedData1(event.target.checked);
    },
  };

  const configure2 = {
    activeColor: 'red',
    onChange: (event) => {
      console.log('checked2');
      setSavedData2(event.target.checked);
    },
  };

  return (
    <>
      <Heading6>CheckboxIcon</Heading6>
      <div className='flex flex-row'>
        <CheckboxIcon savedData={savedData1} configure={configure1}>
          <svg
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            fillOpacity='0'
            strokeWidth='1'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
            ></path>
          </svg>
        </CheckboxIcon>
        <CheckboxIcon savedData={savedData2} configure={configure2}>
          <svg
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            fillOpacity='0'
            strokeWidth='1'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
            />
          </svg>
        </CheckboxIcon>
      </div>
    </>
  );
};
