import React from 'react';
import { Button } from './Button';
import { Heading6 } from '../Typography/Typography';

export const ButtonVariationExample = () => {
  return (
    <div className='flex flex-col mb-10'>
      {/* using status colors */}
      <Heading6>Variation</Heading6>

      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Contained' color='success' variation='contained' />
        <Button label='Outlined' color='success' variation='outlined' />
        <Button label='Text' color='success' variation='text' />
      </div>
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Contained' color='warning' variation='contained' />
        <Button label='Outlined' color='warning' variation='outlined' />
        <Button label='Text' color='warning' variation='text' />
      </div>
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Contained' color='error' variation='contained' />
        <Button label='Outlined' color='error' variation='outlined' />
        <Button label='Text' color='error' variation='text' />
      </div>
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Contained' color='info' variation='contained' />
        <Button label='Outlined' color='info' variation='outlined' />
        <Button label='Text' color='info' variation='text' />
      </div>
      {/* using hex string */}
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Contained' color='#9d4edd' variation='contained' />
        <Button label='Outlined' color='#9d4edd' variation='outlined' />
        <Button label='Text' color='#9d4edd' variation='text' />
      </div>
    </div>
  );
};

export const ButtonModifiersExample = () => {
  return (
    <div className='flex flex-col mb-10'>
      <Heading6>Size</Heading6>
      <div className='flex flex-row items-end mb-3 gap-x-3'>
        <Button
          size='small'
          label='small'
          variation='contained'
          modifiers={['nodimensions, nopadding']}
        />
        <Button
          size='normal'
          label='normal'
          variation='contained'
          modifiers={['nodimensions, nopadding']}
        />
        <Button
          size='large'
          label='large'
          variation='contained'
          modifiers={['nodimensions, nopadding']}
        />
      </div>
    </div>
  );
};

export const ButtonWithIconExample = () => {
  return (
    <div className='flex flex-col'>
      <Heading6>Button with icon</Heading6>

      <div className='flex flex-row mb-3 gap-x-3'>
        <Button
          variation='contained'
          label='Contained'
          iconSize='30px'
          color='red'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12.75l6 6 9-13.5'
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};
