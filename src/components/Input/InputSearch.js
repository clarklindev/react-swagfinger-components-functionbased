import React, { useState } from 'react';
import { render } from '@testing-library/react';

import { applyStyleModifiers } from 'styled-components-modifiers';
import styled, { css } from 'styled-components';
import { Input } from './Input';

const MODIFIERS = {
  search: () => css`
    /* clears the 'X' from Internet Explorer */
    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  `,
};

const InputSearchContainer = styled.div`
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
  min-width: 50px;
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

const Svg = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z' />
    </svg>
  );
};

// no saved data... (*no data to fetch)
export const InputSearch = ({
  configure,
  savedData,
  modifiers = ['search'],
}) => {
  const {
    iconPosition = 'left',
    hasDivider = true,
    type = 'search',
    updateSearch,
  } = configure;

  const onClear = () => {
    console.log('clear');
    updateSearch('');
  };

  return (
    <InputSearchContainer>
      {/* checks if left position */}
      {iconPosition === 'left' ? (
        <Icon>
          <Svg />
        </Icon>
      ) : null}

      {hasDivider === true && iconPosition === 'left' ? <Divider /> : null}

      <Input
        savedData={savedData}
        configure={configure}
        modifiers={[
          'noborder',
          iconPosition === 'left' ? 'embeddedright' : 'embeddedleft',
          ...modifiers,
        ]}
      />

      {hasDivider === true && iconPosition === 'right' ? <Divider /> : null}

      {/* clear search button */}
      {savedData.length > 0 ? (
        <ButtonWithIcon onClick={onClear}>
          <Icon>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
              {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
            </svg>
          </Icon>
        </ButtonWithIcon>
      ) : null}

      {iconPosition === 'right' ? (
        <Icon>
          <Svg />
        </Icon>
      ) : null}
    </InputSearchContainer>
  );
};
