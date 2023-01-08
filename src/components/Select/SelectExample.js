import React, { useState } from 'react';
import { Select } from './Select';

export const SelectExample = () => {
  const [savedData, setSavedData] = useState();

  const data = [
    { value: 'option0', text: 'Select an option' },
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ];

  const configure = {
    onChange: (event) => {
      console.log('event.target.value: ', event.target.value);
      setSavedData(event.target.value);
    },
  };

  return (
    <>
      <Select savedData={savedData} configure={configure}>
        {data.map((each, index) => (
          <option key={index} value={each.value}>
            {each.text}
          </option>
        ))}
      </Select>
    </>
  );
};
