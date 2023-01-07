import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../../utils';

const CounterContainer = styled.div`
  display: flex;
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  overflow: hidden;
  fill: ${(props) => props.theme.default.color};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.default.backgroundColor};
  border: 1px solid ${(props) => props.theme.default.borderColor};
  color: ${(props) => props.theme.default.color};
  padding: 10px 10px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  display: flex;
  width: 20px;
  align-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-left: 5px;
  margin-right: 5px;

  box-sizing: border-box;
  background-color: ${(props) => props.theme.default.backgroundColor};
  border: 1px solid ${(props) => props.theme.default.borderColor};
  color: ${(props) => props.theme.default.color};
  padding: 10px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  width: 80px;
  cursor: pointer;
  outline: none;
`;

export const Counter = ({ savedData, configure }) => {
  const { onChange } = configure;

  const decrement = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('decrement');
    onChange(parseInt(savedData || 0) - 1);
  };

  const increment = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('increment');
    onChange(parseInt(savedData || 0) + 1);
  };

  return (
    <CounterContainer>
      <Button label='decrement' onClick={decrement}>
        <Svg viewBox='0 0 448 512'>
          {/* fontawesome */}
          <path d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z' />
        </Svg>
      </Button>

      <Input
        onChange={(event) => !isNaN(event.target.value)}
        value={savedData}
      />

      <Button label='increment' onClick={increment}>
        <Svg viewBox='0 0 448 512'>
          {/* fontawesome */}
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </Svg>
      </Button>
    </CounterContainer>
  );
};
