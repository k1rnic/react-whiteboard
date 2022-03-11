import { styled, ToggleButton as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';
import { PropsWithChildren } from 'react';

const IconToggleButton = styled(MuiToggleButton)(({ theme: { palette } }) => ({
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

const TextToggleButton = styled(IconToggleButton)({
  fontSize: 18,
  fontFamily: 'Merriweather',
});

export type ToggleButtonProps = {
  variant?: 'text' | 'icon';
} & MuiToggleButtonProps;

export const ToggleButton = ({ variant = 'icon', ...props }: PropsWithChildren<ToggleButtonProps>) =>
  variant === 'icon' ? <IconToggleButton {...props} /> : <TextToggleButton {...props} />;
