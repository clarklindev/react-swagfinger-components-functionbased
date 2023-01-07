import React, { useState } from 'react';
import { InputPassword } from './InputPassword';

export const InputPasswordExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    onChange: (event) => {
      console.log('password');
      setSavedData(event.target.value);
    },
  };

  return (
    <>
      <h3>Password</h3>
      <InputPassword savedData={savedData} configure={configure} />
    </>
  );
};
