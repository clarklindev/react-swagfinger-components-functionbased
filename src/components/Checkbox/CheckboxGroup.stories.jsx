import React, { useState}  from 'react';
import Checkbox from "./Checkbox";
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'Examples/Checkbox',
  component: CheckboxGroup,
  subcomponents: { Checkbox }
}

export const CheckboxGroupExample = (args) => {

  const [groupState, setGroupState] = useState([true, false, false]);

  const configure = {
    name: "Checkbox_ABC",
    values: [
      { label: 'a', value: 'A' },
      { label: 'b', value: 'B' },
      { label: 'c', value: 'C' }
    ],
    update: (name, index, newValue) => {
      
      const newValues = [...groupState];
      newValues[index] = newValue;
      console.log("new Values", newValues.toString());

      setGroupState(newValues);
    }
  }
  
  return (
    <CheckboxGroup savedData={groupState} configure={configure} className={'CheckboxGroup'} />
  );
}

CheckboxGroupExample.storyName = "CheckboxGroup";