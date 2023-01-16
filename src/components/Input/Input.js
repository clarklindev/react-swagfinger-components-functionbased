import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { MODIFIERS } from './modifiers';

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  overflow: hidden;

  box-sizing: border-box;
  height: auto;

  border-radius: ${(props) => props.theme.global.borderRadius};
  border: ${(props) => props.theme.global.borderWidth} solid
    ${(props) => props.theme.global.borderColor};

  background-color: ${(props) => props.theme.input.backgroundColor};
  color: ${(props) => props.theme.input.color};
  padding: ${(props) => props.theme.global.padding};
  width: 100%;
  cursor: text;
  display: flex;
  flex-grow: 1;
  outline: none;

  ${applyStyleModifiers(MODIFIERS)};
`;

export const Input = ({ configure, savedData }) => {
  const { type = 'text', onChange, modifiers = [], placeholder } = configure;

  return (
    <StyledInput
      onChange={onChange}
      value={savedData}
      placeholder={placeholder}
      type={type}
      modifiers={modifiers} //passes modifiers to styled component if any
      readOnly={modifiers.includes('readonly')}
    />
  );
};
