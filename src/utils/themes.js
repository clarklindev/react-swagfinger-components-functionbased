import { blue, neutral, yellow, green, red } from './colors';

const commonStyles = {
  status: {
    color: neutral[100],

    warningBackgroundColor: yellow[100],
    warningBackgroundColorHover: yellow[200],
    warningBackgroundColorActive: yellow[300],

    errorBackgroundColor: red[100],
    errorBackgroundColorHover: red[200],
    errorBackgroundColorActive: red[300],

    successBackgroundColor: green[100],
    successBackgroundColorHover: green[200],
    successBackgroundColorActive: green[300],

    infoBackgroundColor: blue[100],
    infoBackgroundColorHover: blue[200],
    infoBackgroundColorActive: blue[300],
  },
};

export const defaultTheme = {
  name: 'defaultTheme',
  ...commonStyles,

  placeholder: neutral[400],
  disabledColor: neutral[300],
  disabledBackgroundColor: neutral[200],
  formElementBackground: neutral[300],
  formElementLabel: neutral[600],

  default: {
    borderColor: neutral[300],
    color: neutral[500],
    colorInverted: neutral[100],
    backgroundColor: neutral[100],
    backgroundColorInverted: neutral[600],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300],
  },

  primary: {
    color: neutral[100],
    colorInverted: neutral[100],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: blue[200],
    backgroundColorActive: blue[100],
  },

  secondary: {
    color: blue[300],
    colorInverted: neutral[100],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: blue[200],
    backgroundColorActive: blue[100],
  },

  tertiary: {
    color: blue[300],
    colorInverted: neutral[100],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: blue[200],
    backgroundColorActive: blue[100],
  },
};

export const darkTheme = {
  name: 'darkTheme',
  ...commonStyles,
  placeholder: neutral[400],
  disabledColor: neutral[400],
  disabledBackgroundColor: neutral[300],
  formElementBackground: blue[100],
  formElementLabel: neutral[100],

  default: {
    borderColor: neutral[300],
    color: neutral[100],
    colorInverted: neutral[600],
    backgroundColor: neutral[600],
    backgroundColorInverted: neutral[100],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300],
  },

  primary: {
    color: neutral[100],
    colorInverted: neutral[600],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300],
  },

  secondary: {
    color: neutral[100],
    colorInverted: neutral[600],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300],
  },

  tertiary: {
    color: neutral[100],
    colorInverted: neutral[600],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300],
  },
};
