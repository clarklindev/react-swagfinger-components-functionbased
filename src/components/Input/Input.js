import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIERS = {
  noborder: () => css`
    border: none;
    outline: none;
  `,
  readonly: (props) => css`
    cursor: default;
    color: ${props.theme.color};
    background-color: ${props.theme.disabledBackgroundColor};
  `,
  nonselectable: (props) => css`
    pointer-events: none;
  `,
};

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  box-sizing: border-box;
  max-height: 50px;

  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  padding: 15px;
  border-radius: 8px;
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
