import React, { useState } from 'react';
import { Input } from './Input';

//normal input
export const InputExample = () => {
  const [savedData, updateData] = useState('');
  const configure = {
    onChange: (event) => {
      updateData(event.target.value);
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
  const [savedData, updateData] = useState('readonly text');
  const configure = {
    onChange: (event) => {
      updateData(event.target.value);
    },
  };
  return (
    <>
      <h3>Read-only</h3>
      <Input
        savedData={savedData}
        configure={configure}
        modifiers={['readonly']}
      />
    </>
  );
};

// no border
export const InputNoBorderExample = () => {
  const [savedData, updateData] = useState('');
  const configure = {
    placeholder: 'helloworld',
    onChange: (event) => {
      console.log('event: ', event.target.value);
      updateData(event.target.value);
    },
  };
  return (
    <>
      <h3>No border</h3>
      <Input
        savedData={savedData}
        configure={configure}
        modifiers={['noborder']}
      />
    </>
  );
};
