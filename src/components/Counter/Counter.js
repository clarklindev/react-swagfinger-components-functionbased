import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';
import { MinusIcon } from '../../icons/MinusIcon';
import { PlusIcon } from '../../icons/PlusIcon';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

const CounterContainer = styled.div`
  display: flex;

  min-width: 130px;
  max-width: 150px;
  height: ${(props) => props.theme.global.inputHeight};
  color: ${(props) => props.theme.counter.borderColor};
  Button[label='increment'] {
    border-radius: 0;
    border-top-right-radius: ${(props) => props.theme.global.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.global.borderRadius};
    background: ${(props) => props.theme.input.backgroundColor};
  }
  Button[label='decrement'] {
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: ${(props) => props.theme.input.backgroundColor};
  }

  Input {
    border-color: inherit;
    background: ${(props) => props.theme.input.backgroundColor};
  }
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  overflow: hidden;
  fill: ${(props) => props.theme.color};
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
      <Button
        onClick={decrement}
        variation='outlined'
        modifiers={['noborderrightradius']}
      >
        <Icon iconSize='20px'>{MinusIcon}</Icon>
      </Button>

      <Input
        configure={{
          placeholder: '',
          onChange: (event) => !isNaN(event.target.value),
          modifiers: [
            'nonselectable',
            'noborderradius',
            'textcenter',
            'noborderleft',
            'noborderright',
            'nopadding',
          ],

          className: 'border-l-0 border-r-0',
        }}
        savedData={savedData}
      />

      <Button
        onClick={increment}
        variation='outlined'
        modifiers={['noborderleftradius']}
      >
        <Icon iconSize='20px'>{PlusIcon}</Icon>
      </Button>
    </CounterContainer>
  );
};
