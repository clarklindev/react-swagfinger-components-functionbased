import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html{
    font-size: font-size: 100%;/*16px*/
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    padding:0;
    margin:0;
    
  }

  p {
    margin-bottom: 1rem;
  }

  small, .text_small {font-size: 0.75rem;}

`;
