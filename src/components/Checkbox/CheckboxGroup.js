import React from 'react';
import styled from 'styled-components';
import { Checkbox } from './Checkbox';

const CheckboxGroupContainer = styled.div`
  display: block;

  .Header {
    margin-bottom: 10px;
    color: ${(props) => props.theme.formElementLabel};
  }

  .Checkbox {
    margin-bottom: 5px;
  }
`;

export const CheckboxGroup = ({ savedData, configure }) => {
  const { name, values, update, groupLabel } = configure;

  return (
    <CheckboxGroupContainer className='CheckboxGroup'>
      <div className='Header'>{groupLabel}</div>
      {values.map((each, index) => {
        return (
          <Checkbox
            key={`CheckboxGroup_${name}` + index}
            savedData={savedData[index]}
            configure={{
              label: each.label,
              name: name,
              onChange: () => update(index, !savedData[index]),
            }}
          />
        );
      })}
    </CheckboxGroupContainer>
  );
};
