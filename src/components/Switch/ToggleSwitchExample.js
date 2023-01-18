import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { Heading } from '../Typography/Typography';

export const ToggleSwitchExample = () => {
  const [savedData1, setSavedData1] = useState(false);
  const [savedData2, setSavedData2] = useState(true);

  // ----------------------------------------------------------------

  return (
    <>
      <Heading variation='h6'>ToggleSwitch</Heading>
      <div className='flex flex-row gap-3'>
        <ToggleSwitch
          savedData={savedData1}
          configure={{
            color: 'grey',
            onChange: (event) => setSavedData1(event.target.checked),
          }}
        />

        <ToggleSwitch
          savedData={savedData2}
          configure={{
            color: 'dimgrey',
            onChange: (event) => setSavedData2(event.target.checked),
          }}
        />
      </div>
    </>
  );
};
