import { styled } from '@mui/material';

import { ToolboxButton } from '../button';

export const ToolboxTextButton = styled(ToolboxButton)(({ theme: { palette } }) => ({
  fontSize: 18,
  fontFamily: 'Merriweather',
}));
