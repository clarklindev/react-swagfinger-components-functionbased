import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../../utils/typography';
import { illustrations, CloseIcon } from '../../assets';
import { Button } from '../Button/Button';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.formElementLabel};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignupHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignupText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;

  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0px;
`;

export const SignupModal = () => {
  return (
    <ModalWrapper>
      <img
        src={illustrations.Signup}
        aria-hidden="true"
        alt="Signup for an account"
      />

      <SignupHeader>Sign up</SignupHeader>
      <SignupText>Sign up today to get access</SignupText>

      <Button>Sign up!</Button>

      <CloseModalButton>
        <CloseIcon>hello</CloseIcon>
      </CloseModalButton>
    </ModalWrapper>
  );
};
