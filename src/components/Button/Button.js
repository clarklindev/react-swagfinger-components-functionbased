import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { MODIFIERS } from './modifiers';
import { Icon } from '../Icon/Icon';

const BaseButton = styled.button`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.button.base.borderColor};
  background-color: ${(props) => props.theme.button.base.backgroundColor};
  color: ${(props) => props.theme.button.base.color};
  outline: none;
  display: flex;
  align-items: center;
  height: auto;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: ${(props) => props.theme.global.borderRadius};
  ${applyStyleModifiers(MODIFIERS)};
`;

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${(props) =>
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color
      ? props.color
      : props.theme.button.contained.backgroundColor};
  color: ${(props) => props.theme.button.contained.color};
  ${applyStyleModifiers(MODIFIERS)};
`;

const OutlinedButton = styled(BaseButton)`
  border: 1px solid
    ${(props) =>
      props.theme.color[props.color]
        ? props.theme.color[props.color]
        : props.color
        ? props.color
        : props.theme.button.outlined.borderColor};

  background-color: transparent;

  color: ${(props) =>
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color
      ? props.color
      : props.theme.button.outlined.color};

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
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color
      ? props.color
      : props.theme.button.text.color};
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
  labelDirection = 'right',
  color = '',
  modifiers = [],
  size = '',
  icon = '',
  iconSize = '',
  children = '',
  className = '',
  ...rest
}) => {
  let labelClasses = '';
  switch (labelDirection) {
    case 'top':
      labelClasses = 'flex flex-col';
      break;
    case 'bottom':
      labelClasses = 'flex flex-col-reverse';
      break;
    case 'left':
      labelClasses = 'flex flex-row-reverse';
      break;
    default:
    case 'right':
      labelClasses = 'flex flex-row';
      break;
  }

  switch (variation) {
    case 'contained':
      return (
        <ContainedButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label}
        </ContainedButton>
      );
    case 'outlined':
      return (
        <OutlinedButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label}
        </OutlinedButton>
      );
    case 'text':
      return (
        <TextButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label}
        </TextButton>
      );
    default:
      return (
        <BaseButton
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
          {label}
        </BaseButton>
      );
  }
};
