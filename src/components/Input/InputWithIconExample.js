import React, { useState } from 'react';
import { InputWithIcon } from './InputWithIcon';
import { Heading6 } from '../Typography/Typography';

export const InputWithIconRightExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    modifiers: ['readonly'],
    placeholder: 'readonly',
    onClick: () => {
      console.log('hello');
    },
    onChange: (event) => {
      console.log('inputwithicon-R: ', event.target.value);
      setSavedData(event.target.value);
    },
  };

  return (
    <>
      <Heading6>Input With Icon - Right</Heading6>
      <InputWithIcon savedData={savedData} configure={configure}>
        {/* whatever icon you want */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z' />
        </svg>
      </InputWithIcon>
    </>
  );
};

export const InputWithIconLeftExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    placeholer: 'type something',
    onClick: () => {
      console.log('hello');
    },
    onChange: (event) => {
      console.log('inputwithicon-L: ', event.target.value);
      setSavedData(event.target.value);
    },
    iconPosition: 'left',
    iconClickable: false,
  };

  return (
    <>
      <Heading6>Input With Icon - Left</Heading6>
      <InputWithIcon savedData={savedData} configure={configure}>
        {/* whatever icon you want */}
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      </InputWithIcon>
    </>
  );
};
