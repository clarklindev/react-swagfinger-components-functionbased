import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: ${(props) => props.width};
`;

const SliderWrapper = styled.div`
  position: relative;
`;

//you want to show teh SliderTrack if there is only one slider
const SliderTrack = styled.div.attrs((props) => ({
  style: {
    borderRadius: '2px',
    display: props.hideTrack ? 'none' : 'block',
    background: props.backgroundColor || props.theme.formElementBackground,
  },
}))`
  height: 4px;
  width: 100%;
  top: 6px;
  position: relative;
`;

const SliderInput = styled.input.attrs((props) => ({
  index: props.index,
  type: 'range',
}))`
  /* Add styles for the input element */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  pointer-events: ${(props) => (props.trackClickable ? 'auto' : 'none')};
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 2px;
  outline: none;
  background: transparent; //the actual clickable part of scrolltrack
  display: flex;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: transparent;
    height: 15px;
  }
  &::-moz-range-track {
    -moz-appearance: none;
    height: 15px;
    background: transparent;
  }
  &::-ms-track {
    appearance: none;
    height: 15px;
    background: transparent;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #666;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 1.7em;
    width: 1.7em;
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
  &::-ms-thumb {
    appearance: none;
    height: 1.7em;
    width: 1.7em;
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
`;

export const Slider = ({ savedData, configure, theme, className }) => {
  const {
    onChange = () => {},
    width = '100%',
    index,
    min = 0,
    max = 100,
    step = 1,
    backgroundColor,
    trackClickable = true,
    hideTrack = false,
  } = configure;

  return (
    <SliderContainer width={width} className={className}>
      <SliderWrapper>
        <SliderTrack hideTrack={hideTrack} backgroundColor={backgroundColor} />
        <SliderInput
          type='range'
          trackClickable={trackClickable}
          min={min}
          max={max}
          step={step}
          value={savedData}
          onChange={(event) => onChange(event, index)}
        />
      </SliderWrapper>
    </SliderContainer>
  );
};
