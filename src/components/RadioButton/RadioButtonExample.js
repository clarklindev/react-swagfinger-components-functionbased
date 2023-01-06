import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

export const RadioButtonExample = () => {
  const [isChecked, setChecked] = useState();

  const handleCheckboxChange = (event) => {
    console.log('onChange: ', event.target.checked);
    setChecked(event.target.checked);
  };

  return (
    <>
      <h3>RadioButton</h3>
      <RadioButton
        label='Label'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </>
  );
};
