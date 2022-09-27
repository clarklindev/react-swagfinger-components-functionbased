// .storybook/preview.js
import { ThemeProvider } from 'styled-components';
import { WithThemeProvider } from 'storybook-addon-styled-components-themes';
import { addDecorator } from '@storybook/react';
import { defaultTheme, darkTheme } from '../src/utils';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    source: { type: 'auto', language: 'jsx', format: true }
  },
  styledComponentsThemes: {
    /**
     * Themes
     */
    themes: [defaultTheme, darkTheme],
    /**
     * Theme to start on - index - optional
     */
    initialTheme: 0, // optional
    /**
     *  Key for show name of theme - optional
     */
    label: 'name' // optional
  }
};

addDecorator((story) => <WithThemeProvider>{story()}</WithThemeProvider>);
