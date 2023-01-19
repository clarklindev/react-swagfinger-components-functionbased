import React from 'react';
import { Button } from './Button';
import { Heading } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';

export const ButtonVariationExample = () => {
  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
      />
    </svg>
  );

  return (
    <div className='flex flex-col'>
      {/* using status colors */}
      <Heading variation='h6'>Variation</Heading>

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          label='Contained'
          color='white'
          backgroundColor='success'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='warning'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='error'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='info'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='#9d4edd'
          variation='contained'
        />
        <Button
          label='Contained'
          color='black'
          backgroundColor='white'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='black'
          variation='contained'
        />
      </div>
      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          label='Outlined'
          borderColor='success'
          color='success'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='warning'
          color='warning'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='error'
          color='error'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='info'
          color='info'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='#9d4edd'
          color='#9d4edd'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='white'
          color='white'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='black'
          color='black'
          variation='outlined'
        />
      </div>
      <div className='flex flex-row mb-10 gap-x-5'>
        <Button label='Text' color='success' variation='text' />
        <Button label='Text' color='warning' variation='text' />
        <Button label='Text' color='error' variation='text' />
        <Button label='Text' color='info' variation='text' />
        <Button label='Text' color='#9d4edd' variation='text' />
        <Button label='Text' color='white' variation='text' />
        <Button label='Text' color='black' variation='text' />
      </div>

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='success'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='warning'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='error'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='info'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='white'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='black'>
              {icon}
            </Icon>
          }
        />
      </div>
    </div>
  );
};
