import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { lightTheme } from 'shared/lib/theme';
import { ThemeProvider } from '@emotion/react';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    </MuiThemeProvider>
  ),
];
