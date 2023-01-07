import React, { useState } from 'react';
import { Input } from './Input';

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
    <>
      <h3>Input</h3>
      <Input savedData={savedData} configure={configure} />
    </>
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
    <>
      <h3>Read-only</h3>
      <Input savedData={savedData} configure={configure} />
    </>
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
    <>
      <h3>No border</h3>
      <Input savedData={savedData} configure={configure} />
    </>
  );
};
