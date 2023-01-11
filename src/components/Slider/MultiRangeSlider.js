import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from './Slider';

const MultiRangeSliderContainer = styled.div`
  width: ${(props) => props.width};
`;

const SliderWrapper = styled.div`
  position: relative;
`;

//this is the background track for all the scrollbars - you want to show use this instead of sliders' own track
const SliderTrack = styled.div.attrs((props) => ({
  style: {
    borderRadius: '2px',
    background: props.backgroundColor || props.theme.formElementBackground,
  },
}))`
  position: absolute;
  top: 5px;
  width: 100%;
  height: 4px;
`;

export const MultiRangeSlider = ({ sliderValues, configure }) => {
  const {
    width = '100%',
    step = 1,
    boundaries = [0, 100],
    update,
    minDifference = 1,
    backgroundColor,
  } = configure;

  const [bounds] = useState(boundaries);
  const [minimumDistanceApart] = useState(minDifference);

  const restrictBoundaries = (index, value) => {
    //min
    let min;
    if (sliderValues.length === 1 || index === 0) {
      min = bounds[0];
    } else {
      min = sliderValues[index - 1] + minimumDistanceApart;
    }

    let max;
    //check if single element in sliderValues || if last element in sliderValues
    if (sliderValues.length === 1 || index === sliderValues.length - 1) {
      max = bounds[1];
    } else {
      max = sliderValues[index + 1] - minimumDistanceApart;
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
      <SliderWrapper className='flex align-center'>
        <SliderTrack backgroundColor={backgroundColor} />

        {(sliderValues || []).map((sliderValue, index) => {
          const configure = {
            step: step,
            index: index,
            onChange: onChangeHandler,
            min: bounds[0],
            max: bounds[1],
            trackClickable: false, //you want to leave this false for multirange input
            hideTrack: true, //you want to leave this on for multirange input - <SliderTrack /> replaces this
          };

          return (
            <Slider
              className='absolute' //you want to leave this absolute for multirange input
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
