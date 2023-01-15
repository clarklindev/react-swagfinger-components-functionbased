import React, { useState } from 'react';
import { Input } from './Input';
import { Heading6 } from '../Typography/Typography';

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
      <Heading6>Input</Heading6>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};

//read only
export const InputReadOnlyExample = () => {
  const [savedData, setSavedData] = useState('readonly text');

  const configure = {
    modifiers: ['readonly'],
    onChange: (event) => {
      console.log('readonly');
      setSavedData(event.target.value);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading6>Read-only</Heading6>
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
      <Heading6>No border</Heading6>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};
