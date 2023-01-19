import React, { useState } from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { Heading } from '../Typography/Typography';

export const RadioButtonGroupExample = () => {
  // radioOptions: moved outside of configure object - possibility that savedData is pulled, eg. questions from backend async call
  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
    { label: 'd', value: 'D' },
  ];

  const [savedData, updateSavedData] = useState(
    Array(options.length).fill(false)
  );

  const configure = {
    name: 'RadioButton_ABC',
    groupLabel: 'Label',

    values: options, //reference an radioOptions array

    onChange: (index, newValue) => {
      let tempArr = [...savedData].fill(false);
      tempArr[index] = newValue;
      updateSavedData(tempArr);
    },
  };

  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>RadioButton Group</Heading>
      <RadioButtonGroup savedData={savedData} configure={configure} />
    </div>
  );
};
