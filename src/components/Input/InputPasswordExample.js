import React, { useState } from 'react';
import { InputPassword } from './InputPassword';
import { Heading6 } from '../Typography/Typography';

export const InputPasswordExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    onChange: (event) => {
      console.log('password');
      setSavedData(event.target.value);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading6>Password</Heading6>
      <InputPassword savedData={savedData} configure={configure} />
    </div>
  );
};
