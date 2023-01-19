import React from 'react';
import styled from 'styled-components';
import { RadioButtonUnselectedIcon } from '../../icons/RadioButtonUnselectedIcon';
import { RadioButtonSelectedIcon } from '../../icons/RadioButtonSelectedIcon';
import { Icon } from '../Icon/Icon';

const RadioButtonContainer = styled.div`
  label {
    display: inline-flex;
    align-items: center;
    align-content: center;

    .Label {
      padding-left: 10px;
      color: ${(props) => props.theme.color.DEFAULT};
    }
  }
`;

// Hide radioButton visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledRadioButton = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const RadioButton = ({ savedData, configure }) => {
  const checked = savedData;
  const { name, label, onChange } = configure;

  return (
    <RadioButtonContainer>
      <label>
        <HiddenRadioButton checked={checked} onChange={onChange} name={name} />
        <StyledRadioButton checked={checked}>
          <Icon iconSize='30px' color='darkgrey'>
            {checked === true
              ? RadioButtonSelectedIcon
              : RadioButtonUnselectedIcon}
          </Icon>
        </StyledRadioButton>
        <div className='Label'>{label}</div>
      </label>
    </RadioButtonContainer>
  );
};
