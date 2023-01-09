import React, { useState } from 'react';
import { Counter } from './Counter';
import { Heading6 } from '../Typography/Typography';

export const CounterExample = () => {
  const [savedData, setSavedData] = useState('0');
  const configure = {
    onChange: (newValue) => {
      setSavedData(newValue);
    },
  };

  return (
    <>
      <Heading6>Controlled counter</Heading6>
      <Counter savedData={savedData} configure={configure} />
    </>
  );
};
