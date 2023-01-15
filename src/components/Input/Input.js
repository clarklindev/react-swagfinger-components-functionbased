import React, { useEffect } from 'react';
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
  max-height: 40px;
  border: 1px solid ${(props) => props.theme.input.borderColor};
  background-color: ${(props) => props.theme.input.backgroundColor};
  color: ${(props) => props.theme.input.color};
  padding: ${(props) => props.theme.layout.padding};
  border-radius: ${(props) => props.theme.borderRadius};
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
