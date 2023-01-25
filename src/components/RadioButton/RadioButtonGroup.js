import React from 'react';
import styled from 'styled-components';

const RadioButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};

  > * {
    margin-bottom: ${(props) => props.direction === 'column' && props.spacing};
    margin-right: ${(props) => props.direction === 'row' && props.spacing};
  }
`;

export const RadioButtonGroup = ({ configure, children }) => {
  const { direction = 'column', spacing = '0px' } = configure;

  return (
    <RadioButtonGroupContainer
      className={`RadioButtonGroup`}
      direction={direction}
      spacing={spacing}
    >
      {children}
    </RadioButtonGroupContainer>
  );
};
