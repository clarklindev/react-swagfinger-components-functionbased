import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
//theme
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        className="App"
        style={{
          background: useDarkTheme
            ? darkTheme.default.backgroundColor
            : defaultTheme.default.backgroundColor,
          color: useDarkTheme ? darkTheme.textColor : defaultTheme.textColor,
          width: '100vw',
          height: '100vh'
        }}
      >
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
        </button>

        <h1 style={{ color: 'red' }}>
          to view components, run command in console:
          <pre>
            <code>npm run storybook</code>
          </pre>
        </h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
