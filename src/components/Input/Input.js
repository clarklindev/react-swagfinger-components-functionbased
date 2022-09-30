import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../../utils';

const MODIFIERS = {
  noborder: () => css`
    border: none;
    outline: none;
  `,

  embeddedleft: () => css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
  embeddedright: () => css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `,
  readonly: () => css`
    cursor: default;
    background-color: ${(props) => props.theme.disabledBackgroundColor};
  `
};

const StyledInput = styled.input.attrs((props) => ({
  type: props.type
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
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  outline: none;

  &:read-only {
    cursor: default;
    background-color: ${(props) => props.theme.disabledBackgroundColor};
  }
  ${applyStyleModifiers(MODIFIERS)};
`;

const Input = ({ configure, savedData, modifiers = [] }) => {
  console.log('my modifiers: ', modifiers);
  const { update, placeholder, type = 'text' } = configure;
  return (
    <StyledInput
      onChange={update}
      defaultValue={savedData}
      placeholder={placeholder}
      type={type}
      modifiers={modifiers} //passes modifiers to styled component if any
      readOnly={modifiers.includes('readonly')}
    />
  );
};

export default Input;
