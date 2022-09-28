import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const CheckboxGroupContainer = styled.div`
  display: block;

  .Checkbox {
    margin-bottom: 5px;
  }
`;

const CheckboxGroup = ({ savedData, configure }) => {
  console.log('savedData: ', savedData);
  const { name, values, update } = configure;

  return (
    <CheckboxGroupContainer className={CheckboxGroup}>
      {values.map((each, index) => {
        return (
          <Checkbox
            className={'Checkbox'}
            key={`CheckboxGroup_${name}` + index}
            label={each.label}
            onChange={() => update(name, index, !savedData[index])}
            checked={savedData[index]}
          />
        );
      })}
    </CheckboxGroupContainer>
  );
};

export default CheckboxGroup;
