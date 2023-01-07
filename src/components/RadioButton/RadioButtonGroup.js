import React from 'react';
import styled from 'styled-components';
import { RadioButton } from './RadioButton';

const RadioButtonGroupContainer = styled.div`
  display: block;

  .Header {
    margin-bottom: 10px;
    color: ${(props) => props.theme.formElementLabel};
  }

  .RadioButton {
    margin-bottom: 5px;
  }
`;

export const RadioButtonGroup = ({ savedData, configure }) => {
  const { name, values, onChange, groupLabel } = configure;

  return (
    <RadioButtonGroupContainer className='RadioButtonGroup'>
      <div className='Header'>{groupLabel}</div>

      {values.map((each, index) => {
        return (
          <RadioButton
            key={`RadioButtonGroup_${name}` + index}
            savedData={savedData[index]}
            configure={{
              label: each.label,
              name: name,
              onChange: () => onChange(index, !savedData[index]),
            }}
          />
        );
      })}
    </RadioButtonGroupContainer>
  );
};
