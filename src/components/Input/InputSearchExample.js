import React, { useState } from 'react';
import { InputSearch } from './InputSearch';

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
    <>
      <h3>Search</h3>
      <InputSearch savedData={savedData} configure={configure} />
    </>
  );
};
