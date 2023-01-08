import React, { useState } from 'react';
import { Counter } from './Counter';

export const CounterExample = () => {
  const [savedData, setSavedData] = useState('0');
  const configure = {
    onChange: (newValue) => {
      setSavedData(newValue);
    },
  };

  return (
    <>
      <h3>Controlled counter</h3>
      <Counter savedData={savedData} configure={configure} />
    </>
  );
};
