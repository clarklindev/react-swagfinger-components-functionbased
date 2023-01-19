import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { CheckIcon } from '../../icons/CheckIcon';
import { MinusSmallIcon } from '../../icons/MinusSmallIcon';

const CheckboxContainer = styled.div`
  label {
    display: inline-flex;
    align-items: center;
    align-content: center;

    .Label {
      padding-left: 10px;
      color: ${(props) => props.theme.color};
    }
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.global.borderRadius};
  border: 1px solid ${(props) => props.theme.checkbox.borderColor};
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.checkbox.backgroundColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  display: block;
  margin: auto;
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.color};
  box-sizing: border-box;
`;

export const Checkbox = ({ savedData, configure }) => {
  const checked = savedData;
  const { indeterminate = false, label, onChange } = configure;
  return (
    <CheckboxContainer className='Checkbox'>
      <label>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
          <Icon color='black' iconSize='25px'>
            {indeterminate === true ? MinusSmallIcon : checked && CheckIcon}
          </Icon>
        </StyledCheckbox>
        <div className='Label'>{label}</div>
      </label>
    </CheckboxContainer>
  );
};
