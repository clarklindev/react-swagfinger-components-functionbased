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
  //actual page background
  color: neutral[500],
  backgroundColor: neutral[100],

  //neutral component color
  base: {
    componentColor: neutral[100], //button text
    componentBackgroundColor: neutral[400],
    componentBorderColor: neutral[100],
  },

  button: {
    contained: {
      componentColor: neutral[100], //button text
      componentBackgroundColor: neutral[400],
      componentBorderColor: neutral[100],
    },

    outlined: {
      componentColor: neutral[400], //button text
      componentBackgroundColor: 'transparent',
      componentBorderColor: neutral[400],
    },

    text: {
      componentColor: neutral[400], //button text
    },
  },

  placeholder: neutral[400],
  disabledColor: neutral[300],
  disabledBackgroundColor: neutral[200],

  formElementBackground: neutral[300],
  formElementLabel: neutral[600],

  borderColor: neutral[300],
};

export const darkTheme = {
  name: 'darkTheme',
  ...commonStyles,
  //actual page background
  color: neutral[300],
  backgroundColor: neutral[600],

  //neutral component color
  base: {
    componentColor: neutral[400], //button text
    componentBackgroundColor: neutral[100],
    componentBorderColor: neutral[400],
  },

  button: {
    contained: {
      componentColor: red[100], //button text
      componentBackgroundColor: red[400],
      componentBorderColor: red[100],
    },
    outlined: {
      componentColor: red[100], //button text
      componentBackgroundColor: red[400],
      componentBorderColor: red[100],
    },
    text: {
      componentColor: red[100], //button text
    },
  },
  placeholder: neutral[400],
  disabledColor: neutral[400],
  disabledBackgroundColor: neutral[300],

  formElementBackground: blue[100],
  formElementLabel: neutral[100],

  borderColor: neutral[300],
};
