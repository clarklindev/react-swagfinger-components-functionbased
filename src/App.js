import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button/Button';

//theme
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import './App.css';


const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [theme, setTheme] = useState(useDarkTheme ? darkTheme : defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App container mx-auto p-4"
        style={{
          background: useDarkTheme
            ? darkTheme.default.backgroundColor
            : defaultTheme.default.backgroundColor,
          color: useDarkTheme ? darkTheme.textColor : defaultTheme.textColor,
          width: '100vw',
          height: '100vh'
        }}
      >
        {/* <button
          style={{
            margin: '0 16px 24px',
            padding: '8px',
            color: useDarkTheme
              ? darkTheme.default.colorInverted
              : defaultTheme.default.color,
            backgroundColor: useDarkTheme
              ? darkTheme.default.backgroundColorInverted
              : defaultTheme.default.backgroundColor,
            cursor: 'pointer'
          }}
          onClick={() => {
            console.log('set to dark theme');
            setUseDarkTheme(true);
          }}
        >
          Dark theme
        </button>

        <button
          style={{
            margin: '0 16px 24px',
            padding: '8px',
            color: useDarkTheme
              ? darkTheme.default.colorInverted
              : defaultTheme.default.color,
            backgroundColor: useDarkTheme
              ? darkTheme.default.backgroundColorInverted
              : defaultTheme.default.backgroundColor,
            cursor: 'pointer'
          }}
          onClick={() => {
            console.log('set to default theme');
            setUseDarkTheme(false);
          }}
        >
          Default theme
        </button> */}
        
        {/* <h1 class="font-bold">SWAGFINGER UI</h1> */}

        <h2 class="mb-3 text-4xl">01. Typography</h2>
        <h2 class="mb-3 text-4xl">02. Buttons</h2>
        
        <div class="flex flex-col gap-y-3 mb-3">
          <h3>variation</h3>
          <div class="flex gap-x-3 gap-y-3">
            <Button label="Button" variation="primary"/>
            <Button label="Button" variation="secondary"/>
            <Button label="Button" variation="tertiary"/>
          </div>

          <h3>color</h3>
          <div class="flex gap-x-3 gap-y-3">
            <Button label="Button" variation="warning"/>
            <Button label="Button" variation="error"/>
            <Button label="Button" variation="success"/>
          </div>

          <h3>size</h3>
          <div class="flex gap-x-3 gap-y-3">
            <Button label="Button" variation="primary" modifiers='small'/>
            <Button label="Button" variation="primary" modifiers='normal'/>
            <Button label="Button" variation="primary" modifiers='large'/>
          </div>
        </div>

        <h2 class="mb-3 text-4xl">03. Input</h2>

      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
