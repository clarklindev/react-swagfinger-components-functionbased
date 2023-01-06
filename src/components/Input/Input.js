import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../../utils';

const MODIFIERS = {
  noborder: () => css`
    border: none;
    outline: none;
  `,
  readonly: (props) => css`
    cursor: default;
    color: ${props.theme.default.color};
    background-color: ${props.theme.disabledBackgroundColor};
  `,
};

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  box-sizing: border-box;
  max-height: 50px;

  border: 1px solid ${(props) => props.theme.default.borderColor};
  background-color: ${(props) => props.theme.default.backgroundColor};
  color: ${(props) => props.theme.default.color};
  padding: 15px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  width: 100%;
  cursor: text;
  display: flex;
  flex-grow: 1;
  outline: none;

  ${applyStyleModifiers(MODIFIERS)};
`;

export const Input = ({ configure, savedData, modifiers = [] }) => {
  const { onChange, placeholder = 'type something', type = 'text' } = configure;

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
