import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Heading } from '../Typography/Typography';

export const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  const configure = {
    label: 'label',
    onChange: (event) => {
      setSavedData(event.target.checked);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Checkbox</Heading>
      <Checkbox savedData={savedData} configure={configure} />
    </div>
  );
};
