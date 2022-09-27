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
      control: { type: 'boolean' }
    }
  }
}

export const CheckboxExample = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleCheckboxChange = event => {
    console.log('onChange')
    setChecked(event.target.checked);
  }

  return (
    <Checkbox
      {...args}
      checked={ checked }
      onChange={handleCheckboxChange}
    />
  );
};
CheckboxExample.storyName = 'Checkbox';
CheckboxExample.args = {
  label: "label",
  indeterminate: false,
  checked: false
}