import { Divider } from '@mui/material';

export const ToolboxDivider = () => {
  return (
    <Divider
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
