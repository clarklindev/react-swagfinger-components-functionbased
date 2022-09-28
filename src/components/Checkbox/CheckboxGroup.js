import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const CheckboxGroupContainer = styled.div`
  display: block;

  .Header {
    margin-bottom: 10px;
    color: ${(props) => props.theme.textFieldLabelColor};
  }

  .Checkbox {
    margin-bottom: 5px;
  }
`;

const CheckboxGroup = ({ savedData, configure }) => {
  console.log('savedData: ', savedData);
  const { name, values, update, groupLabel } = configure;

  return (
    <CheckboxGroupContainer className={'CheckboxGroup'}>
      <div className={'Header'}>{groupLabel}</div>
      {values.map((each, index) => {
        return (
          <Checkbox
            className={'Checkbox'}
            key={`CheckboxGroup_${name}` + index}
            label={each.label}
            onChange={() => update(index, !savedData[index])}
            checked={savedData[index]}
          />
        );
      })}
    </CheckboxGroupContainer>
  );
};

export default CheckboxGroup;
