import React from 'react';
import styled from 'styled-components';

const CheckboxIconContainer = styled.div`
  label {
    display: inline-flex;
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

const Icon = styled.div`
  overflow: hidden;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: inline-flex;
  align-content: center;
  align-items: center;
`;

const StyledCheckboxIcon = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.default.backgroundColor};
  ${Icon} {
    svg {
      fill: ${(props) => (props.checked ? props.activeColor : 'black')};
      stroke: ${(props) => (props.checked ? props.activeColor : 'black')};
      fill-opacity: ${(props) => (props.checked ? '1' : '0')};
    }
  }
`;

export const CheckboxIcon = ({ savedData, configure, children }) => {
  const checked = savedData;
  const { onChange, activeColor } = configure;
  return (
    <CheckboxIconContainer className='CheckboxIcon'>
      <label>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckboxIcon checked={checked} activeColor={activeColor}>
          <Icon>{children}</Icon>
        </StyledCheckboxIcon>
      </label>
    </CheckboxIconContainer>
  );
};
