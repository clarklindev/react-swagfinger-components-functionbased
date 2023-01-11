import React, { useEffect, useState } from 'react';
import { MultiRangeSlider } from './MultiRangeSlider';

export const MultiRangeSliderExample = () => {
  const [sliderValues, setSliderValues] = useState([]); //holds positions of sliders

  useEffect(() => {
    setSliderValues([10, 20, 40, 60]);
  }, []);

  useEffect(() => {
    console.log('sliderValues: ', sliderValues);
  }, [sliderValues]);

  const configure = {
    step: 1,
    boundaries: [0, 100],
    update: (index, value) => {
      //update by reference is Okay
      let temp = sliderValues.slice();
      temp[index] = value;
      setSliderValues(temp);
    },
  };

  return <MultiRangeSlider sliderValues={sliderValues} configure={configure} />;
};
