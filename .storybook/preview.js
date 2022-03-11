import { ThemeProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { lightTheme } from 'shared/lib/theme';
import { store } from 'app/model';

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
    <Provider store={store}>
      <Story />
    </Provider>
  ),
  (Story) => (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    </MuiThemeProvider>
  ),
];
