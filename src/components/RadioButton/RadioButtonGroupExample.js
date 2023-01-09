import React, { useState } from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { Heading6 } from '../Typography/Typography';

export const RadioButtonGroupExample = () => {
  // radioOptions: moved outside of configure object - possibility that data is pulled, eg. questions from backend async call
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
    <>
      <Heading6>RadioButton Group</Heading6>
      <RadioButtonGroup savedData={savedData} configure={configure} />
    </>
  );
};
