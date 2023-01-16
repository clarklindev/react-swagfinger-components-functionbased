import React from 'react';
import { applyStyleModifiers } from 'styled-components-modifiers';
import styled, { css } from 'styled-components';

import { MODIFIERS } from './modifiers';

import { Input } from './Input';

const InputWithIconContainer = styled.div`
  box-sizing: border-box;
  height: ${(props) => props.theme.global.inputHeight};
  border-radius: ${(props) => props.theme.global.borderRadius};
  border: ${(props) => props.theme.global.borderWidth} solid
    ${(props) => props.theme.global.borderColor};

  background: none;
  display: flex;

  overflow: hidden;

  ${applyStyleModifiers(MODIFIERS)};
`;

const ButtonWithIcon = styled.div`
  max-width: ${(props) => props.theme.global.inputHeight};
  max-height: ${(props) => props.theme.global.inputHeight};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.icon.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  overflow: hidden;
`;

const Icon = styled.div`
  width: inherit;
  height: inherit;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border: none;

  // whatever is passed through as children
  > * {
    fill: ${(props) => props.theme.icon.fill};
    width: 25px;
    height: 25px;
  }
`;

export const InputWithIcon = ({ configure, savedData, children }) => {
  const {
    iconPosition = 'right',
    onClick,
    onChange,
    placeholder = '',
    type = 'text',
    modifiers = [],
  } = configure;

  return (
    <InputWithIconContainer modifiers={modifiers}>
      {/* checks if left position */}
      {iconPosition === 'left' ? (
        <ButtonWithIcon onClick={onClick}>
          <Icon>{children}</Icon>
        </ButtonWithIcon>
      ) : null}

      {/* ------------------------------------------------------------------------- */}

      <Input
        savedData={savedData}
        configure={{
          placeholder,
          type,
          onChange,
          modifiers: ['noborder', 'noborderradius', ...modifiers],
        }}
      />

      {/* ------------------------------------------------------------------------- */}

      {iconPosition === 'right' ? (
        <ButtonWithIcon onClick={onClick}>
          <Icon>{children}</Icon>
        </ButtonWithIcon>
      ) : null}
    </InputWithIconContainer>
  );
};
