import { Components } from '@mui/material';
import { FONT_FACES } from 'shared/assets/fonts';

export const componentsConfig: Components = {
  MuiCssBaseline: {
    styleOverrides: `
      ${FONT_FACES.join(';')}
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
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
};
