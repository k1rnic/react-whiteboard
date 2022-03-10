import { createTheme } from '@mui/material';

import { breakpointOptions } from './breakpoints';
import { componentsConfig } from './components';
import { paletteConfig } from './palette';
import { typographyConfig } from './typography';

export default createTheme({
  components: componentsConfig,
  typography: typographyConfig,
  palette: paletteConfig,
  breakpoints: breakpointOptions,
});
