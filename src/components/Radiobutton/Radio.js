import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div``;

const StyledRadioButton = styled.input.attrs({ type: 'radio' })``;

const RadioButton = ({ className, checked, value, label, ...props }) => {
  return (
    <StyledRadioButtonContainer className={className}>
      <label>
        <StyledRadioButton
          checked={checked}
          value={value}
          onChange={onChange}
        ></StyledRadioButton>
        <div className="RadioButtonLabel">{label}</div>
      </label>
    </StyledRadioButtonContainer>
  );
};
export default RadioButtonContainer;
