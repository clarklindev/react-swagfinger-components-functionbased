import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Heading6 } from '../Typography/Typography';

export const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  const configure = {
    label: 'label',
    onChange: (event) => {
      setSavedData(event.target.checked);
    },
  };

  return (
    <>
      <Heading6>Checkbox</Heading6>
      <Checkbox savedData={savedData} configure={configure} />
    </>
  );
};
