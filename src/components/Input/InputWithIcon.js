import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Input } from './Input';
const MODIFIERS = {
  embeddedleft: () => css`
    // border-top-right-radius: 0;
    // border-bottom-right-radius: 0;
  `,
  embeddedright: () => css`
    // border-top-left-radius: 0;
    // border-bottom-left-radius: 0;
  `,
};

const InputWithIconContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 1px solid ${(props) => props.theme.default.borderColor};
  border-radius: 8px;
  ${applyStyleModifiers(MODIFIERS)};
`;

const Divider = styled.div`
  margin-top: 7px;
  margin-bottom: 7px;
  width: 1px;
  background-color: ${(props) => props.theme.default.borderColor};
`;

const ButtonWithIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  // whatever is passed through as children
  > * {
    fill: ${(props) => props.theme.formElementLabel};
    width: 25px;
    height: 25px;
  }
`;

export const InputWithIcon = ({ configure, savedData, children }) => {
  const {
    iconPosition = 'right',
    hasDivider = true,
    iconClickable = true,
    onClick,
    onChange,
    placeholder = '',
    type = 'text',
    modifiers = [],
  } = configure;

  const defaults = {
    localmodifiers: [
      iconPosition === 'left' ? 'embeddedright' : 'embeddedleft',
    ],
    childmodifiers: ['noborder'],
  };

  return (
    <InputWithIconContainer modifiers={[...defaults.localmodifiers]}>
      {/* checks if left position */}
      {iconPosition === 'left' ? (
        // then checks if iconClickable
        iconClickable ? (
          <ButtonWithIcon onClick={onClick}>
            <Icon>{children}</Icon>
          </ButtonWithIcon>
        ) : (
          <Icon>{children}</Icon>
        )
      ) : null}

      {/* ------------------------------------------------------------------------- */}

      {hasDivider === true && iconPosition === 'left' ? <Divider /> : null}
      <Input
        savedData={savedData}
        configure={{
          placeholder,
          type,
          onChange,
          modifiers: [...modifiers, ...defaults.childmodifiers],
        }}
      />
      {hasDivider === true && iconPosition === 'right' ? <Divider /> : null}

      {/* ------------------------------------------------------------------------- */}

      {iconPosition === 'right' ? (
        iconClickable ? (
          <ButtonWithIcon onClick={onClick}>
            <Icon>{children}</Icon>
          </ButtonWithIcon>
        ) : (
          <Icon>{children}</Icon>
        )
      ) : null}
    </InputWithIconContainer>
  );
};
