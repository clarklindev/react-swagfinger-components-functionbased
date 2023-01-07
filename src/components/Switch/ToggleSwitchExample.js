import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';

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
      <h3>ToggleSwitch</h3>
      <div className='flex flex-row gap-3'>
        <ToggleSwitch savedData={savedData} configure={configure} />
      </div>
    </>
  );
};
