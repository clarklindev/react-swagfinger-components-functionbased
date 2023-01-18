import React, { useState } from 'react';
import { Input } from './Input';
import { Heading } from '../Typography/Typography';

//normal input
export const InputExample = () => {
  const [savedData, setSavedData] = useState('');
  const configure = {
    onChange: (event) => {
      console.log('normal');
      setSavedData(event.target.value);
    },
  };
  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Input</Heading>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};

//read only
export const InputReadOnlyExample = () => {
  const [savedData, setSavedData] = useState('this is readonly');

  const configure = {
    modifiers: ['readonly'],
    onChange: (event) => {
      console.log('readonly');
      setSavedData(event.target.value);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Read-only</Heading>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};

// no border
export const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');
  const configure = {
    modifiers: ['noborder'],
    placeholder: 'placeholder',
    onChange: (event) => {
      console.log('noborder');
      setSavedData(event.target.value);
    },
  };
  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>No border</Heading>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};
