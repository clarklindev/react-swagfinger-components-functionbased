import React, { useState}  from 'react';
import Input from "./Input";

export default {
  title: 'Examples/Input',
  component: Input
}

export const InputExample = (args) => {
  
  const [savedData, updateData] = useState();
  const configure = {
    name: 'Namefield',
    placeholder : 'enter your input',
    update: (event) => {
      console.log('event: ', event.target.value);    
      updateData(event.target.value);
    }
  };


  return (
    <Input savedData={savedData} configure={configure} />
  );
}
InputExample.args = {
}
InputExample.storyName = 'Input';