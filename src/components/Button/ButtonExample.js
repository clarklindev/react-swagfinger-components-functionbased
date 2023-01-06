import React from 'react';
import { Button } from './Button';

export const ButtonVariationExample = () => {
  return (
    <>
      <h3>Variation</h3>
      <div className='flex flex-row gap-3'>
        <Button label='Button' variation='primary' />
        <Button label='Button' variation='secondary' />
        <Button label='Button' variation='tertiary' />
      </div>
    </>
  );
};

export const ButtonStatusExample = () => {
  return (
    <>
      <h3>Status</h3>
      <div className='flex flex-row gap-3'>
        <Button label='Button' variation='warning' />
        <Button label='Button' variation='error' />
        <Button label='Button' variation='success' />
      </div>
    </>
  );
};

export const ButtonModifiersExample = () => {
  return (
    <>
      <h3>Size</h3>
      <div className='flex flex-row gap-3'>
        <Button label='Button' variation='primary' modifiers='small' />
        <Button label='Button' variation='primary' modifiers='normal' />
        <Button label='Button' variation='primary' modifiers='large' />
      </div>
    </>
  );
};
