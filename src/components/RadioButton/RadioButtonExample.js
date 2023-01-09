import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import { Heading6 } from '../Typography/Typography';

export const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  const configure = {
    name: 'radio',
    label: 'option',
    onChange: (event) => {
      setSavedData(event.target.checked);
    },
  };

  return (
    <>
      <Heading6>RadioButton</Heading6>
      <RadioButton savedData={savedData} configure={configure} />
    </>
  );
};
