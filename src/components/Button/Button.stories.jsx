import React from 'react';

import Button from './Button';

export default {
  title: 'Examples/Button',
  component: Button,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    onClick: {
      description: 'click handler function - *Optional',
      type: {
        required: false
      },
      action: 'clicked',
      control: { type: 'function' }
    },  
    label: {
      description: 'label for the button - *Required',
      type: {
        required: true
      },
      table: {
        defaultValue: {
          summary: 'label',
          detail: `label text is required for buttons`
        }
      },
    },
    variation: {
      description: 'style for button - *Optional',
      options: ['normal', 'primary', 'secondary', 'tertiary', 'warning', 'error', 'success'],
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: 'normal',
          detail: `it is not necessary to specify the default 'normal' state: variation:'normal' in args`
        }
      },
      control: { type: 'radio' },
    },
    modifiers: {
      description: `string or array of option values - *Optional<br/><br/>
      For the Button component, the modifiers are:<br/>
      'small', 'large'`,
      options: ['small', 'normal', 'large'],
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: 'normal',
          detail: `it is not necessary to specify the default 'normal' state: modifiers:['normal'] in args`
        }
      },
      control: { type: 'radio' },
    }
  },
}


const Template = (args) => <Button {...args} />

export const Default = (args) => {
  return (
    <React.Fragment>
      <Button {...args} />
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
//normal button (default)
const args = { label: 'label' variation:''};
<Button {...args} />

//small button
const args = { label: 'label', variation:'', modifiers:{['small']} };
<Button {...args} />

//large button
const args = { label: 'label', variation:'', modifiers:{['large']} };
<Button {...args} />
`,
      language: "jsx",
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
const args = { label: 'label', variation:'secondary' };
< Button {...args} />`,
      language: "jsx",
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
const args = { label: 'label', variation:'success' };
< Button {...args} />`,
      language: "jsx",
    },
  },
};
