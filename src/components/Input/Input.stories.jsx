import React, { useState}  from 'react';
import {Input} from "./Input";

export default {
  title: 'Examples/Input',
  component: Input
}

export const InputExample = () => {
  
  const [savedData, updateData] = useState('');
  
  const configure = {
    onChange: (event) => {
      console.log('event: ', event.target.value);    
      updateData(event.target.value);
    },
  };
  return (
    <Input savedData={savedData} configure={configure}/>
  );
}
InputExample.storyName = 'Input';

///------------------------------------------------------------------------------

export const InputReadOnlyExample = () => {
  const [savedData, updateData] = useState('readonly text');
  const configure = {
    onChange: (event) => {
      updateData(event.target.value);
    }
  };
  return (
    <Input
      savedData={savedData}
      configure={configure}
      modifiers={['readonly']}
    />
  );
};
InputReadOnlyExample.storyName = 'Input (modifiers: readonly)';

///------------------------------------------------------------------------------



export const InputNoBorderExample = () => {
  const [savedData, updateData] = useState('');
  const configure = {
    placeholder: 'helloworld',
    onChange: (event) => {
      console.log('event: ', event.target.value);
      updateData(event.target.value);
    }
  };
  return (
    <Input
      savedData={savedData}
      configure={configure}
      modifiers={['noborder']}
    />
  );
};
InputNoBorderExample.storyName = 'Input (modifiers: noborder)';


///------------------------------------------------------------------------------