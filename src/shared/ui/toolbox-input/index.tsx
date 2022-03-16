import { Input, styled } from '@mui/material';

export const ToolboxInput = styled(Input)<{ width?: number }>(({ width = 30 }) => ({
  width,
  height: 24,
  input: {
    padding: 0,
    textAlign: 'center',
    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
}));

ToolboxInput.defaultProps = {
  disableUnderline: true,
};
