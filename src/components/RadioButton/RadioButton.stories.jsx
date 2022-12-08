import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Examples/RadioButton',
  component: RadioButton,
  argTypes: {
    onChange: {
      description:'onChange handler function - *required',
      type: {
        required:true
      },
      action: 'changed',
      control:{type:'function'}
    },
    checked: {
      description: 'whether component is checked',
      type: {
        required: true
      },
      table: {
        defaultValue: {
          summary: false,
          detail: `storybook toggle is only for initial state`
        }
      },
      control: 'boolean'
    }
  }
}


const Template = (args) => {
  const [isChecked, setChecked] = useState(()=> args.checked);

  const handleCheckboxChange = event => {
    console.log('onChange: ', event.target.checked)
    setChecked(event.target.checked);
  }

  return (
    <RadioButton {...args} checked={isChecked} onChange={handleCheckboxChange} />
  );
};


export const RadioButtonExample = Template.bind({});
RadioButtonExample.args = {
  label: 'label',
  checked: false
}
RadioButtonExample.storyName = 'RadioButton';
