import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../../utils';

const InputContainer = styled.input`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.default.backgroundColor};
  border: 1px solid ${(props) => props.theme.default.borderColor};
  color: ${(props) => props.theme.default.color};
  padding: 10px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  height: 40px;
  width: 180px;
  cursor: pointer;
`;

const Input = ({ savedData, configure }) => {
  const { name = '', placeholder = '', update } = configure;

  return (
    <InputContainer
      className={'Input'}
      name={name}
      placeholder={placeholder}
      value={savedData}
      onChange={() => update}
    />
  );
};

export default Input;
