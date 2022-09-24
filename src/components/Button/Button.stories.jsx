import React from 'react';

import { Button } from './Button';

export default {
  title: 'Examples/Button',
  component: Button
}

const Template = (args) => <Button {...args}/> 

export const Default = Template.bind({});
Default.args = {
  label: 'label',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  variation: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'label',
  variation:"secondary"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'label',
  variation:"tertiary" 
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'label',
  variation:"warning"
};

export const Error = Template.bind({});
Error.args = {
  label: 'label',
  variation:"error" 
};

export const Success = Template.bind({});
Success.args = {
  label: 'label',
  variation:"success"
};
