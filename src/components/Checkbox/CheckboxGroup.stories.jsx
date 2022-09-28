import React, { useState}  from 'react';
import Checkbox from "./Checkbox";
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'Examples/Checkbox',
  component: CheckboxGroup,
  subcomponents: { Checkbox }
}

export const CheckboxGroupExample = (args) => {

  const [savedData, updateData] = useState([true, false, false]);

  const configure = {
    name: "Checkbox_ABC",
    groupLabel: 'Favorite Alphabet', 
    values: [
      { label: 'a', value: 'A' },
      { label: 'b', value: 'B' },
      { label: 'c', value: 'C' }
    ],
    
    update: (index, newValue) => {
      const newValues = [...savedData];
      newValues[index] = newValue;
      console.log("new Values", newValues.toString());

      updateData(newValues);
    }
  }
  
  return (
    <CheckboxGroup savedData={savedData} configure={configure} className={'CheckboxGroup'} />
  );
}

CheckboxGroupExample.storyName = "CheckboxGroup";