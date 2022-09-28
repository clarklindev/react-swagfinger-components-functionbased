import React, { useState}  from 'react';
import Counter from "./Counter";

export default {
  title: 'Examples/Counter',
  component: Counter
}

export const CounterExample = () => {
  const [savedData, updateData] = useState(14)
  const configure = {
    update: (newValue) => {
      updateData(newValue);
    }
  }

  return <Counter savedData={savedData} configure={configure} />;
} 
CounterExample.storyName = 'Counter';