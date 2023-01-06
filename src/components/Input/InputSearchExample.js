import React, { useState } from 'react';
import { InputSearch } from './InputSearch';

export const InputSearchExample = () => {
  const [searchString, setSearchString] = useState('');
  const configure = {
    onChange: (event) => {
      console.log('handle');
      setSearchString(event.target.value);
    },
    updateSearch: (newValue) => {
      setSearchString(newValue);
    },
  };

  return (
    <>
      <h3>Search</h3>
      <InputSearch savedData={searchString} configure={configure} />
    </>
  );
};
