import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  const configure = {
    label: 'label',
    onChange: (event) => {
      setSavedData(event.target.checked);
    },
  };

  return <Checkbox savedData={savedData} configure={configure} />;
};
