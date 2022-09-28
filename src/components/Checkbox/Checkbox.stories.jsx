import React, { useState}  from 'react';
import Checkbox from "./Checkbox";

export default {
  title: 'Examples/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: {
      description: 'onChange handler function - *required',
      type: {
        required: true
      },
      action: 'changed',
      control: { type: 'function' }
    },
    indeterminate: {
      description: 'if the checkbox is in indeterminate state',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: false,
          detail: `usually false, unless checkbox is the parent of a set of checkboxes`
        }
      },
      control: 'boolean'
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
    <Checkbox {...args} checked={isChecked} onChange={handleCheckboxChange} />
  );
};


export const CheckboxExample = Template.bind({});
CheckboxExample.args = {
  label: 'label',
  indeterminate: false,
  checked: true
}
CheckboxExample.storyName = 'Checkbox';
