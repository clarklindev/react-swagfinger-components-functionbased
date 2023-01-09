import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';

const CounterContainer = styled.div`
  display: flex;
  min-width: 130px;
  max-width: 150px;
  height: 50px;

  Input {
    text-align: center;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }

  Button[label='increment'] {
    border-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  Button[label='decrement'] {
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  overflow: hidden;
  fill: ${(props) => props.theme.color};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.color};
  padding: 10px 10px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  display: flex;
  width: 50px;
  align-content: center;
  align-items: center;
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
        configure={{
          placeholder: '',
          // onChange: (event) => !isNaN(event.target.value),
          onChange: (event) => !isNaN(event.target.value),
          modifiers: ['nonselectable'],
        }}
        savedData={savedData}
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
