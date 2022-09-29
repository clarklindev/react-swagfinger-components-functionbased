import React, { useState}  from 'react';
import Input from "./Input";

export default {
  title: 'Examples/Input',
  component: Input
}

export const InputExample = () => {
  
  const [savedData, updateData] = useState('');
  const configure = {
    name: 'Emptyfield',
    placeholder: 'enter your input', 
    update: (event) => {
      console.log('event: ', event.target.value);    
      updateData(event.target.value);
    }
  };
  return (
    <Input savedData={savedData} configure={configure}/>
  );
}
InputExample.storyName = 'Input';

export const InputNoBorderExample = () => {
  const [savedData, updateData] = useState('');
  const configure = {
    name: 'Emptyfield',
    placeholder: 'enter your input', 
    update: (event) => {
      console.log('event: ', event.target.value);    
      updateData(event.target.value);
    }
  };
  return (
    <Input savedData={savedData} configure={configure} modifiers={['noborder']} />
  );
}
InputNoBorderExample.storyName = 'Input (modifier: noborder)';