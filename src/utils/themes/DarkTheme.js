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

  color: {
    warning: status.warning,
    success: status.success,
    info: status.info,
    error: status.error,
  },

  global: {
    inputHeight: '40px',
    padding: '10px',
    borderWidth: '1px',
    borderRadius: '5px',
    borderColor: neutral[300],
    placeholder: neutral[400],

    formElementColor: neutral[200],
    formElementBackground: blue[100],

    disabledColor: neutral[400],
    disabledBackgroundColor: neutral[300],
  },

  typography: {
    h1: {
      fontSize: '4.209rem',
    },
    h2: {
      fontSize: '3.157rem',
    },
    h3: {
      fontSize: '2.369rem',
    },
    h4: {
      fontSize: '1.777rem',
    },
    h5: {
      fontSize: '1.333rem',
    },
    h6: {
      fontSize: '1.2rem',
    },
    fontFamily: "'Roboto', 'sans-serif'",
    header: {
      margin: '0 0 1rem',
      lineHeight: '1.3',
      fontWeight: '400',
    },
  },

  //actual page background
  background: {
    color: 'hotpink',
    backgroundColor: neutral[800],
  },

  input: {
    color: neutral[300],
    backgroundColor: '#000000',
    borderColor: neutral[400] + transparency[10],
  },

  icon: {
    backgroundColor: 'red',
    fill: 'yellow',
    stroke: neutral[600],
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
