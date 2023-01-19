import React, { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { Heading } from '../Typography/Typography';

export const CheckboxGroupExample = () => {
  const [savedData, updateSavedData] = useState([false, false, false]);

  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
  ];

  const configure = {
    name: 'Checkbox_ABC',
    groupLabel: 'Favorite Alphabet',
    values: options,

    update: (index, newValue) => {
      const newValues = [...savedData];
      newValues[index] = newValue;
      updateSavedData(newValues);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Checkbox Group</Heading>
      <CheckboxGroup savedData={savedData} configure={configure} />
    </div>
  );
};
