import { blue, yellow, green, red, neutral, status } from './colors';

const commonStyles = {
  warning: status.warning,
  success: status.success,
  info: status.info,
  error: status.error,
};

export const defaultTheme = {
  name: 'defaultTheme',
  ...commonStyles,

  color: neutral[500],
  backgroundColor: neutral[100],
  textOnColorBackgroundElement: neutral[100], //button text

  placeholder: neutral[400],
  disabledColor: neutral[300],
  disabledBackgroundColor: neutral[200],
  formElementBackground: neutral[300],
  formElementLabel: neutral[600],
  borderColor: neutral[300],
  colorInverted: neutral[100],
  backgroundColorInverted: neutral[600],
  backgroundColorHover: neutral[200],
  backgroundColorActive: neutral[300],
};

export const darkTheme = {
  name: 'darkTheme',
  ...commonStyles,

  color: neutral[100],
  backgroundColor: neutral[600],
  textOnColorBackgroundElement: neutral[100], //button text

  placeholder: neutral[400],
  disabledColor: neutral[400],
  disabledBackgroundColor: neutral[300],
  formElementBackground: blue[100],
  formElementLabel: neutral[100],
  borderColor: neutral[300],
  colorInverted: neutral[600],
  backgroundColorInverted: neutral[100],
  backgroundColorHover: neutral[200],
  backgroundColorActive: neutral[300],
};
