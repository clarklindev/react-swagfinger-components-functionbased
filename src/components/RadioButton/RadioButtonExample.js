import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

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
      <h3>RadioButton</h3>
      <RadioButton savedData={savedData} configure={configure} />
    </>
  );
};
