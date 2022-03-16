import { Components } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';
import { FONT_FACES } from 'shared/assets/fonts';

import { paletteConfig } from './palette';

const colors = createPalette(paletteConfig);

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
  MuiInputBase: {
    styleOverrides: {
      input: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      iconStandard: {
        color: colors.grey[4],
      },
    },
  },
};
