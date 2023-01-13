import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIERS = {
  small: () => css`
    padding: 8px;
    height: 30px;
    font-size: 1rem;
  `,

  large: () => css`
    padding: 15px 32px;
    height: 50px;
    font-size: 1.5rem;
  `,

  nopadding: () => css`
    padding: 0px;
  `,
  nodimensions: () => css`
    width: auto;
    height: auto;
  `,
};

const Icon = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  svg {
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
  }
`;

const BaseButton = styled.button`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.base.componentBorderColor};
  background-color: ${(props) => props.theme.base.componentBackgroundColor};
  color: ${(props) => props.theme.base.componentColor};
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 6px;
  ${applyStyleModifiers(MODIFIERS)};
`;

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${(props) =>
    props.theme[props.color]
      ? props.theme[props.color]
      : props.color
      ? props.color
      : props.theme.button.contained.componentBackgroundColor};
  color: ${(props) => props.theme.button.contained.componentColor};
  ${applyStyleModifiers(MODIFIERS)};
`;

const OutlinedButton = styled(BaseButton)`
  border: 1px solid
    ${(props) =>
      props.theme[props.color]
        ? props.theme[props.color]
        : props.color
        ? props.color
        : props.theme.button.outlined.componentBorderColor};

  background-color: transparent;

  color: ${(props) =>
    props.theme[props.color]
      ? props.theme[props.color]
      : props.color
      ? props.color
      : props.theme.button.outlined.componentColor};

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
    props.theme[props.color]
      ? props.theme[props.color]
      : props.color
      ? props.color
      : props.theme.button.text.componentColor};
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
  label = '',
  color = '',
  modifiers = '',
  size = '',
  icon = '',
  iconSize = '',
  children = '',
  className = '',
  ...rest
}) => {
  switch (variation) {
    case 'contained':
      return (
        <ContainedButton
          color={color}
          modifiers={[...modifiers, size]}
          className={className}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label ? label : null}
        </ContainedButton>
      );
    case 'outlined':
      return (
        <OutlinedButton
          color={color}
          modifiers={[...modifiers, size]}
          className={className}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label ? label : null}
        </OutlinedButton>
      );
    case 'text':
      return (
        <TextButton
          color={color}
          modifiers={[...modifiers, size]}
          className={className}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label ? label : null}
        </TextButton>
      );
    default:
      return (
        <BaseButton
          modifiers={modifiers || size}
          className={className}
          {...rest}
        >
          {icon ? <Icon iconSize={iconSize}>{icon}</Icon> : null}
          {label ? label : null}
        </BaseButton>
      );
  }
};
