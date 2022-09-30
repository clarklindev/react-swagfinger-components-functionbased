import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../Input/Input';

const InputWithIconContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 1px solid ${(props) => props.theme.default.borderColor};
  border-radius: 8px;
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
    fill: ${(props) => props.theme.textFieldLabelColor};
    width: 25px;
    height: 25px;
  }
`;

const InputWithIcon = ({ configure, savedData, modifiers = [], ...props }) => {
  const {
    iconPosition,
    hasDivider,
    onClick,
    iconClickable,
    type = 'text'
  } = configure;
  return (
    <InputWithIconContainer>
      {/* checks if left position */}
      {iconPosition === 'left' ? (
        // then checks if iconClickable
        iconClickable ? (
          <ButtonWithIcon onClick={onClick}>
            <Icon>{props.children}</Icon>
          </ButtonWithIcon>
        ) : (
          <Icon>{props.children}</Icon>
        )
      ) : null}

      {hasDivider === 'true' && iconPosition === 'left' ? <Divider /> : null}
      <Input
        className={'Input'}
        savedData={savedData}
        configure={configure}
        modifiers={[
          'noborder',
          iconPosition === 'left' ? 'embeddedright' : 'embeddedleft',
          ...modifiers
        ]}
      />
      {hasDivider === 'true' && iconPosition === 'right' ? <Divider /> : null}

      {iconPosition === 'right' ? (
        iconClickable ? (
          <ButtonWithIcon onClick={onClick}>
            <Icon>{props.children}</Icon>
          </ButtonWithIcon>
        ) : (
          <Icon>{props.children}</Icon>
        )
      ) : null}
    </InputWithIconContainer>
  );
};

export default InputWithIcon;
