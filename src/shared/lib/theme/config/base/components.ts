import { Components } from '@mui/material';

export const componentsConfig: Components = {
  MuiCssBaseline: {
    styleOverrides: `
      html {
        height: 100vh;
      };
      body {
        height: 100vh;
      };
      #root {
        height: 100%;
      };
    `,
  },
};
