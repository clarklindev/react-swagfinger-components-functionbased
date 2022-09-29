import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../../utils';

const MODIFIERS = {
  noborder: () => css`
    border: none;
    outline: none;
  `
};

const StyledInput = styled.input`
  box-sizing: border-box;
  max-height: 50px;

  border: 1px solid ${(props) => props.theme.default.borderColor};
  background-color: ${(props) => props.theme.default.backgroundColor};
  color: ${(props) => props.theme.default.color};
  padding: 15px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  outline: none;

  ${applyStyleModifiers(MODIFIERS)};
`;

const Input = ({ configure, savedData, modifiers }) => {
  const { update, placeholder } = configure;
  return (
    <StyledInput
      onChange={update}
      value={savedData}
      placeholder={placeholder}
      modifiers={modifiers} //passes modifiers to styled component if any
    />
  );
};

export default Input;
