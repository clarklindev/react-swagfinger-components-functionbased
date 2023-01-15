import React, { useEffect, useState } from 'react';
//theme
import './App.css';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

import { ThemeProvider } from 'styled-components';
import { Heading4 } from './components/Typography/Typography';
import {
  ButtonVariationExample,
  ButtonModifiersExample,
  ButtonWithIconExample,
} from './components/Button/ButtonExample';
import { SnackbarExample } from './components/Snackbar/SnackbarExample';
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
import { RadioButtonExample } from './components/RadioButton/RadioButtonExample';
import { RadioButtonGroupExample } from './components/RadioButton/RadioButtonGroupExample';
import { CheckboxExample } from './components/Checkbox/CheckboxExample';
import { CheckboxGroupExample } from './components/Checkbox/CheckboxGroupExample';
import { CounterExample } from './components/Counter/CounterExample';
import { AccordionExample } from './components/Accordion/AccordionExample';
import { SelectExample } from './components/Select/SelectExample';
import { Block } from './components/Layout/Block';
import { ToggleSwitchExample } from './components/Switch/ToggleSwitchExample';
import { CheckboxIconExample } from './components/Checkbox/CheckboxIconExample';
import { TypographyExample } from './components/Typography/TypographyExample';
import { ListExample } from './components/List/ListExample';
import {
  CardExample,
  CardWithDropshadowExample,
} from './components/Card/CardExample';
import { TableExample } from './components/Table/TableExample';
import { SliderExample } from './components/Slider/SliderExample';
import { MultiRangeSliderExample } from './components/Slider/MultiRangeSliderExample';

import { ToggleSwitch } from './components/Switch/ToggleSwitch';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(darkTheme);
  }, []);

  useEffect(() => {
    let newTheme = useDarkTheme === true ? darkTheme : defaultTheme;
    console.log('theme change: ', newTheme);
    setTheme(newTheme);
  }, [useDarkTheme]);

  return (
    theme && (
      <ThemeProvider theme={theme}>
        <div
          className='App flex-auto flex-col p-3'
          style={{
            background: theme.background.backgroundColor,
            color: theme.background.color,
          }}
        >
          {/* <h1 class="font-bold">SWAGFINGER UI</h1> */}
          <Block>
            <Heading4 as='h2'>01. Dark/light mode</Heading4>
            <ToggleSwitch
              savedData={useDarkTheme}
              configure={{
                label: 'label',
                onChange: (event) => {
                  setUseDarkTheme(event.target.checked);
                },
              }}
            />
          </Block>

          <Block>
            <Heading4 as='h2'>02. Typography</Heading4>
            <TypographyExample />
          </Block>

          <Block>
            <Heading4 as='h2'>03. Buttons</Heading4>
            <div className='flex flex-col'>
              <ButtonVariationExample />
              <ButtonModifiersExample />
              <ButtonWithIconExample />
            </div>
          </Block>

          <Block>
            <Heading4 as='h2'>04. Snackbar</Heading4>
            <div className='flex flex-col'>
              <SnackbarExample />
            </div>
          </Block>

          <Block>
            <Heading4 as='h2'>05. Input</Heading4>
            <div className='flex flex-col'>
              <InputExample />
              <InputReadOnlyExample />
              <InputNoBorderExample />
              <InputPasswordExample />
              <InputWithIconRightExample />
              <InputWithIconLeftExample />
              <InputSearchExample />
            </div>
          </Block>
          <Block>
            <Heading4 as='h2'>06. Multi-input</Heading4>
            <div className='flex flex-col'></div>
          </Block>
          <Block>
            <Heading4 as='h2'>07. Multi-input Objects</Heading4>
            <div className='flex flex-col'></div>
          </Block>
          <Block>
            <Heading4 as='h2'>08. Select</Heading4>
            <SelectExample />
          </Block>
          <Block>
            <Heading4 as='h2'>09. Multi-select with input</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>10. Radio Button</Heading4>
            <div className='flex flex-col'>
              <RadioButtonExample />
              <RadioButtonGroupExample />
            </div>
          </Block>

          <Block>
            <Heading4 as='h2'>11. Checkbox</Heading4>
            <div className='flex flex-col'>
              <CheckboxExample />
              <CheckboxGroupExample />
              <CheckboxIconExample />
            </div>
          </Block>

          <Block>
            <Heading4 as='h2'>12. Counter</Heading4>
            <CounterExample />
          </Block>

          <Block>
            <Heading4 as='h2'>13. ToggleSwitch </Heading4>
            <ToggleSwitchExample />
          </Block>

          <Block>
            <Heading4 as='h2'>14. Slider</Heading4>
            <SliderExample />
          </Block>

          <Block>
            <Heading4 as='h2'>15. Multi-range slider</Heading4>
            <MultiRangeSliderExample />
          </Block>

          <Block>
            <Heading4 as='h2'>16. Accordion</Heading4>
            <AccordionExample />
          </Block>

          <Block>
            <Heading4 as='h2'>17. List</Heading4>
            <ListExample />
          </Block>

          <Block>
            <Heading4 as='h2'>18. Card</Heading4>
            <div className='flex flex-col'>
              <CardExample />
              <CardWithDropshadowExample />
            </div>
          </Block>

          <Block>
            <Heading4 as='h2'>19. Layout</Heading4>
            <div className='flex items-start flex-col'>
              <a
                href='https://swagfinger-component-scss-flexbox-grid.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                sass flexbox-grid -
                https://swagfinger-component-scss-flexbox-grid.vercel.app/
              </a>
              <a
                href='https://github.com/swagfinger/swagfinger-component-scss-flexbox-grid'
                target='_blank'
                rel='noreferrer'
              >
                github -
                https://github.com/swagfinger/swagfinger-component-scss-flexbox-grid
              </a>
            </div>
          </Block>

          <Block>
            <Heading4 as='h2'>20. Table</Heading4>
            <TableExample />
          </Block>
          <Block>
            <Heading4 as='h2'>21. Navbar</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>22. Link</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>23. Breadcrumbs</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>24. Dialog (aka Modal)</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>25. Progress</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>26. Loading Button</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>27. Timeline</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>28. Upload</Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>
              29. DatePicker, TimePicker, DateTimePicker
            </Heading4>
          </Block>
          <Block>
            <Heading4 as='h2'>30. DateRangePicker</Heading4>
          </Block>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    )
  );
};

export default App;
