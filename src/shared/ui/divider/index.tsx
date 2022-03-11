import { Divider as MuiDivider } from '@mui/material';

export const Divider = () => {
  return (
    <MuiDivider
      flexItem
      orientation="vertical"
      sx={{
        height: 20,
        borderColor: ({ palette }) => palette.grey[3],
        alignSelf: 'center',
      }}
    />
  );
};
