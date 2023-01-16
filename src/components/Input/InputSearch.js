import React from 'react';

import { applyStyleModifiers } from 'styled-components-modifiers';
import styled from 'styled-components';
import { Input } from './Input';

import { MODIFIERS } from './modifiers';

const InputSearchContainer = styled.div`
  height: ${(props) => props.theme.global.inputHeight};
  box-sizing: border-box;
  display: flex;
  background: none;
  border-radius: ${(props) => props.theme.global.borderRadius};
  border: ${(props) => props.theme.global.borderWidth} solid
    ${(props) => props.theme.global.borderColor};
  overflow: hidden;
  ${applyStyleModifiers(MODIFIERS)};
`;

const Divider = styled.div`
  margin-top: 7px;
  margin-bottom: 7px;
  width: 1px;
  background-color: ${(props) => props.theme.input.borderColor};
`;
const ButtonWithIcon = styled.div`
  max-width: ${(props) => props.theme.global.inputHeight};
  max-height: ${(props) => props.theme.global.inputHeight};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  background: ${(props) => props.theme.icon.backgroundColor};
  overflow: hidden;
`;

const Icon = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: ${(props) => props.theme.global.padding};
  // whatever is passed through as children
  > * {
    fill: ${(props) => props.theme.icon.fill};
    width: 25px;
    height: 25px;
  }
`;

const searchIcon = (
  <svg viewBox='0 0 512 512'>
    <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z' />
  </svg>
);

const clearIcon = (
  <svg viewBox='0 0 320 512'>
    <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
  </svg>
);

// no saved savedData... (*no savedData to fetch)
export const InputSearch = ({ configure, savedData }) => {
  const { iconPosition = 'left', onChange, onSet } = configure;

  const defaults = {
    localmodifiers: ['search'],
    childmodifiers: [
      'noborder',
      'noborderradius', //because it uses <Input> which by default has border-radius
    ],
  };

  const onResetHandler = (event) => {
    onSet('');
  };

  return (
    <InputSearchContainer modifiers={[...defaults.localmodifiers]}>
      {/* checks if left position */}
      {iconPosition === 'left' ? (
        <ButtonWithIcon>
          <Icon>{searchIcon}</Icon>
        </ButtonWithIcon>
      ) : null}

      {/* ------------------------------------------------------------------------- */}

      <Input
        savedData={savedData}
        configure={{
          onChange: onChange,
          modifiers: [
            ...defaults.childmodifiers,

            //because it uses <Input> which by default has border-radius
            iconPosition === 'left'
              ? savedData.length && 'noborderrightradius'
              : savedData.length && 'noborderleftradius',
          ],
        }}
      />

      {/* ------------------------------------------------------------------------- */}

      {/* clear search button */}
      {savedData.length > 0 ? (
        <ButtonWithIcon onClick={onResetHandler}>
          <Icon>{clearIcon}</Icon>
        </ButtonWithIcon>
      ) : null}

      {iconPosition === 'right' ? (
        <ButtonWithIcon>
          <Icon>{searchIcon}</Icon>
        </ButtonWithIcon>
      ) : null}
    </InputSearchContainer>
  );
};
