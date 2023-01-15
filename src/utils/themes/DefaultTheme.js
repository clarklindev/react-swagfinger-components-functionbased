import {
  blue,
  yellow,
  green,
  red,
  neutral,
  status,
  transparency,
} from '../colors';

export const defaultTheme = {
  name: 'defaultTheme',

  borderColor: neutral[300],
  placeholder: neutral[400],
  formElementBackground: neutral[300],
  formElementLabel: neutral[600],
  disabledColor: neutral[300],
  disabledBackgroundColor: neutral[200],

  color: {
    warning: status.warning,
    success: status.success,
    info: status.info,
    error: status.error,
  },

  layout: {
    inputHeight: '40px',
    padding: '10px',
    borderRadius: '5px',
  },

  typography: {
    h1: '4.209rem',
    h2: '3.157rem',
    h3: '2.369rem',
    h4: '1.777rem',
    h5: '1.333rem',
    h6: '1.2rem',
    fontfamily: "'Roboto', 'sans-serif'",
    header: {
      margin: '0 0 1rem',
      lineheight: '1.3',
      fontweight: '400',
    },
  },

  //actual page background
  background: {
    color: neutral[500],
    backgroundColor: neutral[100],
  },

  input: {
    color: neutral[400],
    backgroundColor: neutral[200] + transparency[3],
    borderColor: neutral[400],
  },

  button: {
    //neutral component color
    base: {
      color: neutral[100],
      backgroundColor: neutral[200],
      borderColor: neutral[100],
    },

    contained: {
      color: neutral[100],
      backgroundColor: neutral[400],
      borderColor: neutral[100],
    },

    outlined: {
      color: neutral[400],
      backgroundColor: 'transparent',
      borderColor: neutral[400],
    },

    text: {
      color: neutral[400],
    },
  },
};
