import { rgba } from 'polished';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from './Slider';

const MultiRangeSliderContainer = styled.div`
  width: ${(props) => props.width};
`;

const SliderWrapper = styled.div``;

export const MultiRangeSlider = ({ sliderValues, configure }) => {
  const { width = '100%', step = 1, boundaries = [0, 100], update } = configure;

  const [bounds] = useState(boundaries);

  const restrictBoundaries = (index, value) => {
    //min
    let min;
    if (sliderValues.length === 1 || index === 0) {
      min = bounds[0];
    } else {
      min = sliderValues[index - 1];
    }

    let max;
    //check if single element in sliderValues || if last element in sliderValues
    if (sliderValues.length === 1 || index === sliderValues.length - 1) {
      max = bounds[1];
    } else {
      max = sliderValues[index + 1];
    }

    if (value <= min) {
      return min;
    }
    if (value >= max) {
      return max;
    }
    return value;
  };

  //function that gets called everytime one of the sliders value changes
  const onChangeHandler = (event, index) => {
    const restricted = restrictBoundaries(index, parseInt(event.target.value));
    update(index, restricted);
  };

  //----------------------------------------------------------------------------------
  return (
    <MultiRangeSliderContainer width={width}>
      <SliderWrapper className='flex flex-col'>
        {(sliderValues || []).map((sliderValue, index) => {
          const configure = {
            step: step,
            index: index,
            onChange: onChangeHandler,
            min: bounds[0],
            max: bounds[1],
            backgroundColor: rgba(
              Math.random() * 255,
              Math.random() * 255,
              Math.random() * 255,
              0.5
            ),
          };

          return (
            <Slider
              key={index}
              savedData={sliderValue}
              index={index}
              configure={configure}
            />
          );
        })}
      </SliderWrapper>
    </MultiRangeSliderContainer>
  );
};
