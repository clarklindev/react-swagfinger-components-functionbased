import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const CheckboxGroupContainer = styled.div`
  .Header {
    margin-bottom: 10px;
    color: red
  }  

  .Checkbox {
    margin-bottom: 5px;
  }
`




  

const CheckboxGroup = ({ savedData, configure }) => {
  console.log('savedData: ', savedData);
  const { name, values, update, groupLabel, style } = configure;

  return (
    <CheckboxGroupContainer className='CheckboxGroup'>
      <div className="Hetaader">{groupLabel}</div>
      <div className="flex flex-row">

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
      </div>
    </CheckboxGroupContainer>
  );
};

export default CheckboxGroup;
