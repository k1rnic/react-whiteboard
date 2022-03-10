import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ComponentType } from 'react';
import { darkTheme, lightTheme } from 'shared/lib/theme';

export type WithTheme = {
  dark?: boolean;
};

export const withTheme = <T,>(Component: ComponentType<T>) => {
  return ({ dark, ...hocProps }: WithTheme & T) => (
    <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Component {...(hocProps as T)} />
    </MuiThemeProvider>
  );
};
