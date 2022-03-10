import '@mui/material/styles';
import '@mui/material';

declare module '@mui/material' {
  interface Color {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
  }
}
declare module '@mui/material/styles' {
  interface Palette {
    red: Palette['grey'];
    blue: Palette['grey'];
  }
  interface PaletteOptions {
    red?: PaletteOptions['grey'];
    blue?: PaletteOptions['grey'];
  }
}
