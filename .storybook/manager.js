// .storybook/manager.js

import { addons } from '@storybook/addons';
import customTheme from './CustomTheming';

addons.setConfig({
  theme: customTheme
});
