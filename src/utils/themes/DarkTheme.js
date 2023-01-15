import {
  blue,
  yellow,
  green,
  red,
  neutral,
  status,
  transparency,
} from '../colors';

export const darkTheme = {
  name: 'darkTheme',

  borderColor: neutral[300],
  placeholder: neutral[400],
  formElementBackground: blue[100],
  formElementLabel: neutral[100],
  disabledColor: neutral[400],
  disabledBackgroundColor: neutral[300],

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
    color: neutral[300],
    backgroundColor: neutral[600],
  },

  input: {
    color: neutral[300],
    backgroundColor: neutral[400] + transparency[10],
    borderColor: neutral[100],
  },

  button: {
    //neutral component color
    base: {
      color: neutral[400],
      backgroundColor: neutral[600],
      borderColor: neutral[400],
    },
    contained: {
      color: neutral[100],
      backgroundColor: neutral[400],
      borderColor: neutral[100],
    },
    outlined: {
      color: neutral[100],
      backgroundColor: neutral[400],
      borderColor: neutral[100],
    },
    text: {
      color: neutral[100],
    },
  },
};
