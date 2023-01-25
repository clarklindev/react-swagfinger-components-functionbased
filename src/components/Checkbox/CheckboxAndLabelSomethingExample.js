import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Heading } from '../Typography/Typography';
import { LabelSomething } from '../LabelSomething/LabelSomething';

export const CheckboxAndLabelSomethingExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Checkbox + LabelSomething</Heading>
      <LabelSomething
        gap='2'
        label='label'
        labelPosition='bottom'
        something={
          <Checkbox
            savedData={savedData}
            configure={{
              name: 'checkbox',
              gap: 2,
              color: 'darkgrey',
              onChange: (event) => {
                setSavedData(event.target.checked);
              },
            }}
          />
        }
      />
    </div>
  );
};