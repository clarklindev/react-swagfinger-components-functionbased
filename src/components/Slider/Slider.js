import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  height: 10px;
  width: ${(props) => props.width};
`;

const SliderWrapper = styled.div.attrs((props) => ({
  style: {
    background: props.backgroundColor || props.theme.formElementBackground,
  },
}))`
  height: 4px;
  width: 100%;
  border-radius: 2px;

  position: relative;
`;

const SliderInput = styled.input.attrs((props) => ({
  index: props.index,
}))`
  /* Add styles for the input element */
  -webkit-appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  outline: none;
  background: transparent;
  display: flex;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #666;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Slider = ({ savedData, configure, theme }) => {
  const {
    onChange = () => {},
    width = '100%',
    index,
    min = 0,
    max = 100,
    step = 1,
    backgroundColor,
  } = configure;

  return (
    <SliderContainer width={width}>
      <SliderWrapper backgroundColor={backgroundColor}>
        <SliderInput
          type='range'
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
