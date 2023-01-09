import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIERS = {
  small: () => css`
    padding: 8px;
    height: 30px;
  `,

  large: () => css`
    padding: 15px 32px;
    height: 50px;
  `,
};

const BaseButton = styled.button`
  box-sizing: border-box;
  border: 1px solid black;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  height: 40px;
  border-radius: 6px;
  ${applyStyleModifiers(MODIFIERS)};
`;

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${(props) =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
  color: ${(props) => props.theme.textOnColorBackgroundElement};

  ${applyStyleModifiers(MODIFIERS)};
`;

const OutlinedButton = styled(BaseButton)`
  border: 1px solid
    ${(props) =>
      props.theme[props.color] ? props.theme[props.color] : props.color};
  background-color: transparent;
  color: ${(props) =>
    props.theme[props.color] ? props.theme[props.color] : props.color};

  &:disabled {
  }

  &:hover {
  }

  &:active {
  }
  ${applyStyleModifiers(MODIFIERS)};
`;

const TextButton = styled(BaseButton)`
  border: none;
  background: none;
  color: ${(props) =>
    props.theme[props.color] ? props.theme[props.color] : props.color};

  &:disabled {
  }

  &:hover {
  }
  &:active {
  }

  ${applyStyleModifiers(MODIFIERS)};
`;

export const Button = ({
  variation = '',
  label = 'button',
  color = 'blue',
  size = '',
}) => {
  const modifiers = size;

  switch (variation) {
    case 'contained':
      return (
        <ContainedButton color={color} modifiers={modifiers}>
          {label}
        </ContainedButton>
      );
    case 'outlined':
      return (
        <OutlinedButton color={color} modifiers={modifiers}>
          {label}
        </OutlinedButton>
      );
    case 'text':
      return (
        <TextButton color={color} modifiers={modifiers}>
          {label}
        </TextButton>
      );
    default:
      return <BaseButton modifiers={modifiers}>{label}</BaseButton>;
  }
};
