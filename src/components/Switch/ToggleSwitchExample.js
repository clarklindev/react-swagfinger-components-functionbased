import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { Heading6 } from '../Typography/Typography';

export const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  const configure = {
    label: 'label',
    onChange: (event) => {
      console.log('event.target.checked:', event.target.checked);
      setSavedData(event.target.checked);
    },
  };

  return (
    <>
      <Heading6>ToggleSwitch</Heading6>
      <div className='flex flex-row gap-3'>
        <ToggleSwitch savedData={savedData} configure={configure} />
      </div>
    </>
  );
};
