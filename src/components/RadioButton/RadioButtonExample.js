import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import { Heading } from '../Typography/Typography';

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
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>RadioButton</Heading>
      <RadioButton savedData={savedData} configure={configure} />
    </div>
  );
};
