import React, { useState } from 'react';
import { InputPassword } from './InputPassword';

export const InputPasswordExample = () => {
  const [savedData, updateData] = useState('');

  const configure = {
    onChange: (event) => {
      console.log('onChange: ', event.target.value);
      updateData(event.target.value);
    },
  };

  return (
    <>
      <h3>Password</h3>
      <InputPassword savedData={savedData} configure={configure} />
    </>
  );
};
