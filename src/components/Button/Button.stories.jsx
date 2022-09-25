import React from 'react';

import { Button } from './Button';

export default {
  title: 'Examples/Button',
  component: Button,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    onClick: { action: 'clicked' },
    label: {
      description: 'label for the button'
    },
    variation: {
      description: '*Optional - style for button',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'error', 'success'],
      control: { type: 'radio' },
    },
    modifiers: {
      description: '*Optional - string or array of option values',
      options: ['small', 'normal', 'large'],
      control: { type: 'radio' },
    }
  },
}


const Template = (args) => <Button {...args} />

export const Default = (args) => {
  return (
    <React.Fragment>
      
      <h4>Normal button (default)</h4>
      <Button {...args} />

      
      <h4>Small button</h4>
      <Button {...args} modifiers={['small']} />
      
      
      <h4>Large button</h4>
      <Button {...args} modifiers={['large']} />
    </React.Fragment>
  );
};
Default.args = {
  label: 'label',
};
Default.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:''};

/* normal - (default) */
<Button {...args} />

/* small button */
<Button {...args} modifiers={['small']} />

/* large button */
<Button {...args} modifiers={['large']} />`,
      language: "jsx",
      type: "auto",
    },
  },
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'label',
  variation: 'primary',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:'primary'};
< Button {...args} />`,
      language: "jsx",
      type: "auto",
    },
  },
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'label',
  variation:"secondary"
};
Secondary.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:'secondary'};
< Button {...args} />`,
      language: "jsx",
      type: "auto",
    },
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'label',
  variation:"tertiary" 
};
Tertiary.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:'tertiary'};
< Button {...args} />`,
      language: "jsx",
      type: "auto",
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'label',
  variation:"warning"
};
Warning.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:'warning'};
< Button {...args} />`,
      language: "jsx",
      type: "auto",
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'label',
  variation:"error" 
};
Error.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:'error'};
< Button {...args} />`,
      language: "jsx",
      type: "auto",
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  label: 'label',
  variation:"success"
};
Success.parameters = {
  docs: {
    source: {
      code: `
const args = { label: 'label', variation:'success'};
< Button {...args} />`,
      language: "jsx",
      type: "auto",
    },
  },
};
