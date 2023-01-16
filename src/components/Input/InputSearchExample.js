import React, { useState } from 'react';
import { InputSearch } from './InputSearch';
import { Heading6 } from '../Typography/Typography';

export const InputSearchExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    onChange: (event) => {
      console.log('InputSearch: ', event.target.value);
      setSavedData(event.target.value);
    },
    onSet: (newValue) => {
      setSavedData(newValue);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading6>Search</Heading6>
      <InputSearch savedData={savedData} configure={configure} />
    </div>
  );
};
