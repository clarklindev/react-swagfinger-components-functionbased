import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html{
    font-size: font-size: 100%;/*16px*/
    box-sizing: border-box;
  }
  
  *, *:before, *:after{
    box-sizing: inherit;
  }

  // typography

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    padding:0 30px;
  }

  p {margin-bottom: 1rem;}

  small, .text_small {font-size: 0.75rem;}

`;
