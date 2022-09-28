import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../../utils';

const BUTTON_MODIFIERS = {
  small: () => css`
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,

  large: () => css`
    font-size: ${typeScale.header5};
    padding: 15px 32px;
  `
};

const Button = styled.button.attrs((props) => ({
  children: props.label
}))`
  background-color: ${(props) => props.theme.default.backgroundColor};
  border: 1px solid ${(props) => props.theme.default.borderColor};
  color: ${(props) => props.theme.default.color};
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  box-sizing: border-box;
  min-width: 100px;
  over-flow: hidden;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.default.backgroundColorHover};
    color: ${(props) => props.theme.default.color};
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.default.backgroundColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.default.backgroundColorActive};
    border-color: ${(props) => props.theme.default.backgroundColorActive};
    color: ${(props) => props.theme.default.colorInverted};
  }

  ${(props) => {
    switch (props.variation) {
      case 'primary':
        return css`  
          background-color: ${props.theme[props.variation].backgroundColor};
          border: none;
          color: ${props.theme[props.variation].color};

          &:disabled{
            background-color ${props.theme.disabledBackgroundColor};
            color: ${props.theme.disabledColor};
            cursor: not-allowed;
          }

          &:hover{
            background-color: ${
              props.theme[props.variation].backgroundColorHover
            };
            color: ${props.theme[props.variation].colorInverted};
          }
          &:focus {
            outline: 2px solid ${
              props.theme[props.variation].backgroundColorHover
            };
            outline-offset: 2px;
          }
          &:active {
            background-color: ${
              props.theme[props.variation].backgroundColorActive
            };
            border-color: ${props.theme[props.variation].backgroundColorActive};
            color: ${props.theme[props.variation].color};
          }
        `;

      case 'secondary':
        return css`
          background: none;
          border: 1px solid ${props.theme[props.variation].borderColor};
          color: ${props.theme[props.variation].color};

          &:disabled {
            background: none;
            color: ${props.theme.disabledColor};
            border-color: ${props.theme.disabledBackgroundColor};
            cursor: not-allowed;
          }

          &:hover {
            background-color: ${props.theme[props.variation]
              .backgroundColorHover};
            color: ${props.theme[props.variation].colorInverted};
          }
          &:focus {
            outline: 2px solid
              ${props.theme[props.variation].backgroundColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme[props.variation]
              .backgroundColorActive};
            border-color: ${props.theme[props.variation].backgroundColorActive};
            color: ${props.theme[props.variation].colorInverted};
          }
        `;

      case 'tertiary':
        return css`
          background: none;
          border: none;
          color: ${props.theme[props.variation].color};

          &:disabled {
            background: none;
            color: ${props.theme.disabledColor};
            cursor: not-allowed;
          }

          &:hover {
            background-color: ${props.theme[props.variation]
              .backgroundColorHover};
            color: ${props.theme[props.variation].colorInverted};
          }
          &:focus {
            outline: 2px solid
              ${props.theme[props.variation].backgroundColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme[props.variation]
              .backgroundColorActive};
            border-color: ${props.theme[props.variation].backgroundColorActive};
            color: ${props.theme[props.variation].colorInverted};
          }
        `;

      case 'warning':
        return css`
          color: ${props.theme.status.color};
          background-color: ${props.theme.status.warningBackgroundColor};
          border: 1px solid transparent;
          outline: none;
          &:hover {
            background-color: ${props.theme.status.warningBackgroundColorHover};
            color: ${props.theme.status.color};
          }
          &:focus {
            background-color: ${props.theme.status.warningBackgroundColorHover};
            outline: 2px solid ${props.theme.status.warningBackgroundColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme.status
              .warningBackgroundColorActive};
            border-color: ${props.theme.status.warningBackgroundColorActive};
          }
        `;

      case 'error':
        return css`
          color: ${props.theme.status.color};
          background-color: ${props.theme.status.errorBackgroundColor};
          border: 1px solid transparent;
          outline: none;
          &:hover {
            background-color: ${props.theme.status.errorBackgroundColorHover};
            color: ${props.theme.status.color};
          }
          &:focus {
            background-color: ${props.theme.status.errorBackgroundColorHover};
            outline: 2px solid ${props.theme.status.errorBackgroundColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme.status.errorBackgroundColorActive};
            border-color: ${props.theme.status.errorBackgroundColorActive};
          }
        `;

      case 'success':
        return css`
          color: ${props.theme.status.color};
          background: ${props.theme.status.successBackgroundColor};
          border: 1px solid transparent;
          outline: none;
          &:hover {
            background-color: ${props.theme.status.successBackgroundColorHover};
            color: ${props.theme.status.color};
          }
          &:focus {
            background-color: ${props.theme.status.successBackgroundColorHover};
            outline: 2px solid ${props.theme.status.successBackgroundColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme.status
              .successBackgroundColorActive};
            border-color: ${props.theme.status.successBackgroundColorActive};
          }
        `;
    }
  }};

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export default Button;
