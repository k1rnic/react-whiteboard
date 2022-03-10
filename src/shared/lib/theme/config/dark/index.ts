import { createTheme } from '@mui/material';

import baseTheme from '../base';
import { componentsConfig } from './components';
import { paletteConfig } from './palette';
import { typographyConfig } from './typography';

export const darkTheme = createTheme(baseTheme, {
  components: componentsConfig,
  typography: typographyConfig,
  palette: paletteConfig,
});
