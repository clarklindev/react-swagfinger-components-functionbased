import { blue, neutral, yellow, green, red } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  primaryFont: primaryFont,

  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryActiveColor: blue[100],

  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],

  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  backgroundColor: neutral[100],

  disabled: neutral[400],
  textOnDisabled: neutral[300],

  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],

    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],

    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryFont: primaryFont,

  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[300],

  formElementBackground: blue[100],
  textOnFormElementBackground: neutral[100],

  textColorOnPrimary: blue[300],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  backgroundColor: neutral[600],
  disabled: neutral[400],
  textOnDisabled: neutral[300],

  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[100],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],

    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],

    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
