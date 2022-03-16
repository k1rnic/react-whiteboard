import { Box, Paper } from '@mui/material';
import { ChromePicker, ChromePickerProps } from 'react-color';

import useStyles from './styles';

export type ColorPickerProps = { opened: boolean; onClose: () => void } & ChromePickerProps;

export const ColorPicker = ({ opened, onClose, ...pickerProps }: ColorPickerProps) => {
  const styles = useStyles();

  return opened ? (
    <Paper sx={styles.pickerPaper} elevation={1}>
      <Box sx={styles.backdrop} onClick={onClose} />
      <ChromePicker {...pickerProps} />
    </Paper>
  ) : (
    <></>
  );
};
