import { styled, ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)({
  '& > .MuiToggleButtonGroup-grouped': {
    margin: '4px !important',
    borderRadius: '4px !important',
    padding: '0px !important',
  },
});
