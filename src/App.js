import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ButtonVariationExample,
  ButtonStatusExample,
  ButtonModifiersExample,
} from './components/Button/ButtonExample';

import {
  InputExample,
  InputReadOnlyExample,
  InputNoBorderExample,
} from './components/Input/InputExample';

import { InputPasswordExample } from './components/Input/InputPasswordExample';

import {
  InputWithIconRightExample,
  InputWithIconLeftExample,
} from './components/Input/InputWithIconExample';

import { InputSearchExample } from './components/Input/InputSearchExample';

//theme
import './App.css';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [useDarkTheme] = useState(false);
  const [theme] = useState(useDarkTheme ? darkTheme : defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div
        className='flex-auto flex-col p-3'
        style={{
          background: useDarkTheme
            ? darkTheme.default.backgroundColor
            : defaultTheme.default.backgroundColor,
          color: useDarkTheme ? darkTheme.textColor : defaultTheme.textColor,
          height: '100vh',
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

        <h2 className='my-8 text-4xl'>01. Typography</h2>
        <h2 className='my-8 text-4xl'>02. Buttons</h2>
        <div className='flex flex-col gap-y-3 mb-3'>
          <ButtonVariationExample />
          <ButtonStatusExample />
          <ButtonModifiersExample />
        </div>

        <h2 className='my-8 text-4xl'>03. Input</h2>
        <div className='flex flex-col gap-x-3 gap-y-3'>
          <InputExample />
          <InputReadOnlyExample />
          <InputNoBorderExample />
          <InputPasswordExample />
          <InputWithIconRightExample />
          <InputWithIconLeftExample />
          <InputSearchExample />
        </div>

        <h2 className='my-8 text-4xl'>04. Select</h2>
        <h2 className='my-8 text-4xl'>05. Radio Button</h2>
        <h2 className='my-8 text-4xl'>06. Checkbox</h2>
        <h2 className='my-8 text-4xl'>07. Switch</h2>
        <h2 className='my-8 text-4xl'>08. Card</h2>
        <h2 className='my-8 text-4xl'>09. Layout</h2>
        <h2 className='my-8 text-4xl'>10. Accordion</h2>
        <h2 className='my-8 text-4xl'>11. Table</h2>
        <h2 className='my-8 text-4xl'>12. Navbar</h2>
        <h2 className='my-8 text-4xl'>13. Link</h2>
        <h2 className='my-8 text-4xl'>14. Breadcrumbs</h2>
        <h2 className='my-8 text-4xl'>15. List</h2>
        <h2 className='my-8 text-4xl'>16. Dialog (aka Modal)</h2>
        <h2 className='my-8 text-4xl'>17. Progress</h2>
        <h2 className='my-8 text-4xl'>18. Loading Button</h2>
        <h2 className='my-8 text-4xl'>
          19. DatePicker, TimePicker, DateTimePicker
        </h2>
        <h2 className='my-8 text-4xl'>20. DateRangePicker</h2>
        <h2 className='my-8 text-4xl'>21. Timeline</h2>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
