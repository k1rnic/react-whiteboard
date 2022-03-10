import { styled, ToggleButton } from '@mui/material';

export const ToolboxButton = styled(ToggleButton)(({ theme: { palette } }) => ({
  width: 32,
  height: 32,
  color: palette.grey[6],
  margin: 4,
  border: 'none !important',
  borderRadius: 4,
  padding: 0,
  '&:hover': {
    color: palette.action.selected,
    backgroundColor: 'transparent',
  },
  '&.Mui-selected': {
    color: palette.action.selected,
    backgroundColor: palette.blue[1],
    '&:hover': {
      color: palette.action.selected,
      backgroundColor: palette.blue[1],
    },
  },
  '& svg': {
    width: 24,
    height: 24,
  },
}));
