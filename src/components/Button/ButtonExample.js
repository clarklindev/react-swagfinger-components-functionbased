import React from 'react';
import { Button } from './Button';
import { Heading6 } from '../Typography/Typography';
export const ButtonVariationExample = () => {
  return (
    <>
      <Heading6>Variation</Heading6>
      <div className='flex flex-col gap-3'>
        {/* using status colors */}
        <div className='flex flex-row gap-3'>
          <Button label='Contained' color='success' variation='contained' />
          <Button label='Outlined' color='success' variation='outlined' />
          <Button label='Text' color='success' variation='text' />
        </div>
        <div className='flex flex-row gap-3'>
          <Button label='Contained' color='warning' variation='contained' />
          <Button label='Outlined' color='warning' variation='outlined' />
          <Button label='Text' color='warning' variation='text' />
        </div>
        <div className='flex flex-row gap-3'>
          <Button label='Contained' color='error' variation='contained' />
          <Button label='Outlined' color='error' variation='outlined' />
          <Button label='Text' color='error' variation='text' />
        </div>
        <div className='flex flex-row gap-3'>
          <Button label='Contained' color='info' variation='contained' />
          <Button label='Outlined' color='info' variation='outlined' />
          <Button label='Text' color='info' variation='text' />
        </div>

        {/* using hex string */}
        <div className='flex flex-row gap-3'>
          <Button label='Contained' color='#9d4edd' variation='contained' />
          <Button label='Outlined' color='#9d4edd' variation='outlined' />
          <Button label='Text' color='#9d4edd' variation='text' />
        </div>
      </div>
    </>
  );
};

export const ButtonModifiersExample = () => {
  return (
    <>
      <Heading6>Size</Heading6>
      <div className='flex flex-row gap-3'>
        <Button size='small' label='small' />
        <Button size='normal' label='normal' />
        <Button size='large' label='large' />
      </div>
    </>
  );
};
