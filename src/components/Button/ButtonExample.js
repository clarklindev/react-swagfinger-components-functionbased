import React from 'react';
import { Button } from './Button';
import { Heading6 } from '../Typography/Typography';

export const ButtonVariationExample = () => {
  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      class='w-6 h-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
      />
    </svg>
  );

  return (
    <div className='flex flex-col mb-10'>
      {/* using status colors */}
      <Heading6>Variation</Heading6>

      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Contained' color='success' variation='contained' />
        <Button label='Contained' color='warning' variation='contained' />
        <Button label='Contained' color='error' variation='contained' />
        <Button label='Contained' color='info' variation='contained' />
        <Button label='Contained' color='#9d4edd' variation='contained' />
      </div>
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Outlined' color='success' variation='outlined' />
        <Button label='Outlined' color='warning' variation='outlined' />
        <Button label='Outlined' color='error' variation='outlined' />
        <Button label='Outlined' color='info' variation='outlined' />
        <Button label='Outlined' color='#9d4edd' variation='outlined' />
      </div>
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button label='Text' color='success' variation='text' />
        <Button label='Text' color='warning' variation='text' />
        <Button label='Text' color='error' variation='text' />
        <Button label='Text' color='info' variation='text' />
        <Button label='Text' color='#9d4edd' variation='text' />
      </div>
      <div className='flex flex-row mb-3 gap-x-3'>
        <Button
          variation='text'
          modifiers={['nopadding']}
          iconSize='30px'
          color='success'
          icon={icon}
        />
        <Button
          variation='text'
          modifiers={['nopadding']}
          iconSize='30px'
          color='warning'
          icon={icon}
        />
        <Button
          variation='text'
          modifiers={['nopadding']}
          iconSize='30px'
          color='error'
          icon={icon}
        />
        <Button
          variation='text'
          modifiers={['nopadding']}
          iconSize='30px'
          color='info'
          icon={icon}
        />
        <Button
          variation='text'
          modifiers={['nopadding']}
          iconSize='30px'
          color='#9d4edd'
          icon={icon}
        />
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
  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      class='w-6 h-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
      />
    </svg>
  );

  return (
    <div className='flex flex-col mb-10'>
      <Heading6>Button with icon</Heading6>

      {/* aligned with tailwindcss - flex-row items are auto-stretch so for them to be variable height, need to use items-end or items-start */}
      <div className='flex flex-row items-end mb-3 gap-x-3'>
        {/* contained */}
        <Button
          className='gap-2'
          variation='contained'
          label='Contained'
          iconSize='30px'
          color='red'
          labelDirection='right'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='contained'
          label='Contained'
          iconSize='30px'
          color='red'
          labelDirection='top'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='contained'
          label='Contained'
          iconSize='30px'
          color='red'
          labelDirection='bottom'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='contained'
          label='Contained'
          iconSize='30px'
          color='red'
          labelDirection='left'
          icon={icon}
        />
      </div>

      {/* outlined */}
      <div className='flex flex-row items-end mb-3 gap-x-3'>
        <Button
          className='gap-2'
          variation='outlined'
          label='outlined'
          iconSize='30px'
          color='red'
          labelDirection='right'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='outlined'
          label='outlined'
          iconSize='30px'
          color='red'
          labelDirection='top'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='outlined'
          label='outlined'
          iconSize='30px'
          color='red'
          labelDirection='bottom'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='outlined'
          label='outlined'
          iconSize='30px'
          color='red'
          labelDirection='left'
          icon={icon}
        />
      </div>

      {/* text */}
      <div className='flex flex-row items-end mb-3 gap-x-3'>
        <Button
          className='gap-2'
          variation='text'
          label='text'
          iconSize='30px'
          color='red'
          labelDirection='right'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='text'
          label='text'
          iconSize='30px'
          color='red'
          labelDirection='top'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='text'
          label='text'
          iconSize='30px'
          color='red'
          labelDirection='bottom'
          icon={icon}
        />

        <Button
          className='gap-2'
          variation='text'
          label='text'
          iconSize='30px'
          color='red'
          labelDirection='left'
          icon={icon}
        />
      </div>
    </div>
  );
};
