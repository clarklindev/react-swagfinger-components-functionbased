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
  const { name, values, update, groupLabel } = configure;

  return (
    <RadioButtonGroupContainer className={'RadioButtonGroup'}>
      <div className={'Header'}>{groupLabel}</div>
      {values.map((each, index) => {
        return (
          <RadioButton
            className={'RadioButton'}
            key={`RadioButtonGroup_${name}` + index}
            label={each.label}
            name={name}
            onChange={() => update(index, !savedData[index])}
            checked={savedData[index]}
          />
        );
      })}
    </RadioButtonGroupContainer>
  );
};
