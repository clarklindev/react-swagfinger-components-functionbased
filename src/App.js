import React, { useEffect, useState } from 'react';
//theme
import './App.css';
import { GlobalStyle, darkTheme, lightTheme } from './utils';

import { ThemeProvider } from 'styled-components';
import { Heading } from './components/Typography/Typography';
import { TypographyExample } from './components/Typography/TypographyExample';
import { LabelSomethingExample } from './components/LabelSomething/LabelSomethingExample';
import { ButtonVariationExample } from './components/Button/ButtonVariationExample';
import { ButtonModifiersExample } from './components/Button/ButtonModifiersExample';
import { ButtonWithLabelSomethingExample } from './components/Button/ButtonWithLabelSomethingExample';

import { SnackbarExample } from './components/Snackbar/SnackbarExample';
import {
  InputExample,
  InputNoBorderExample,
  InputPasswordExample,
  InputReadOnlyExample,
  InputSearchExample,
  InputWithIconExample,
} from './components/Input';
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
import { ListExample } from './components/List/ListExample';
import {
  CardExample,
  CardWithDropshadowExample,
} from './components/Card/CardExample';
import { TableExample } from './components/Table/TableExample';
import { SliderExample } from './components/Slider/SliderExample';
import { MultiRangeSliderExample } from './components/Slider/MultiRangeSliderExample';
import { HoverExample } from './customhooks/HoverExample';

const App = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(darkTheme);
  }, []);

  return (
    theme && (
      <ThemeProvider theme={theme}>
        <div
          className='App'
          style={{
            background: theme.background.backgroundColor,
            color: theme.color.DEFAULT,
          }}
        >
          <Block>
            <Heading variation='h4'>01. Dark/Light mode</Heading>
            <div className='flex flex-col items-start gap-2'>
              {/* <button onClick={() => setTheme(lightTheme)}>light</button> */}
              <button onClick={() => setTheme(darkTheme)}>dark</button>
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>02. Typography</Heading>
            <TypographyExample />
          </Block>

          <Block>
            <Heading variation='h4'>03. Helper hooks</Heading>
            <HoverExample />
          </Block>

          <Block>
            <Heading variation='h4'>03. LabelSomething</Heading>
            <LabelSomethingExample />
          </Block>

          <Block>
            <Heading variation='h4'>04. Buttons</Heading>
            <div className='flex flex-col'>
              <ButtonVariationExample />
              <ButtonModifiersExample />
              <ButtonWithLabelSomethingExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>04. Snackbar</Heading>
            <div className='flex flex-col'>
              <SnackbarExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>05. Input</Heading>
            <div className='flex flex-col'>
              <InputExample />
              <InputReadOnlyExample />
              <InputNoBorderExample />
              <InputWithIconExample />
              <InputPasswordExample />
              <InputSearchExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>06. Select</Heading>
            <SelectExample />
          </Block>

          <Block>
            <Heading variation='h4'>07. Counter</Heading>
            <CounterExample />
          </Block>

          <Block>
            <Heading variation='h4'>08. Radio Button</Heading>
            <div className='flex flex-col'>
              <RadioButtonExample />
              <RadioButtonGroupExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>09. Checkbox</Heading>
            <div className='flex flex-col'>
              <CheckboxExample />
              <CheckboxGroupExample />
              <CheckboxIconExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>10. ToggleSwitch </Heading>
            <div className='flex flex-col'>
              <ToggleSwitchExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>11. Slider</Heading>
            <SliderExample />
          </Block>

          <Block>
            <Heading variation='h4'>12. Multi-range slider</Heading>
            <MultiRangeSliderExample />
          </Block>

          <Block>
            <Heading variation='h4'>13. Accordion</Heading>
            <AccordionExample />
          </Block>

          <Block>
            <Heading variation='h4'>14. List</Heading>
            <ListExample />
          </Block>

          <Block>
            <Heading variation='h4'>15. Card</Heading>
            <div className='flex flex-col'>
              <CardExample />
              <CardWithDropshadowExample />
            </div>
          </Block>

          <Block>
            <Heading variation='h4'>16. Layout</Heading>
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
            <Heading variation='h4'>17. Table</Heading>
            <TableExample />
          </Block>
          {/* <Block>
            <Heading variation='h4'>18. Navbar</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>19. Link</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>20. Breadcrumbs</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>21. Dialog (aka Modal)</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>22. Progress</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>23. Loading Button</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>24. Timeline</Heading>
          </Block>

          <Block>
            <Heading variation='h4'>25. Multi-input</Heading>
            <div className='flex flex-col'></div>
          </Block>
          <Block>
            <Heading variation='h4'>26. Multi-input Objects</Heading>
            <div className='flex flex-col'></div>
          </Block>
          <Block>
            <Heading variation='h4'>27. Multi-select with input</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>28. Upload</Heading>
          </Block>
          <Block>
            <Heading variation='h4'>
              29. DatePicker, TimePicker, DateTimePicker
            </Heading>
          </Block>
          <Block>
            <Heading variation='h4'>30. DateRangePicker</Heading>
          </Block> */}
        </div>
        <GlobalStyle />
      </ThemeProvider>
    )
  );
};

export default App;
