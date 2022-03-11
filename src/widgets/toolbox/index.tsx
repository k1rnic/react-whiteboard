import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { TextAlignSelector } from 'features/shape/align-text';
import { ShapeTypeSelector } from 'features/whiteboard/select-shape-type';
import { Divider } from 'shared/ui/divider';

import useStyles from './styles';

export const Toolbox = () => {
  const styles = useStyles();

  return (
    <MuiToolbar sx={styles.root}>
      <Box sx={styles.item}>
        <ShapeTypeSelector />
        <Divider />
        <TextAlignSelector />
      </Box>
    </MuiToolbar>
  );
};
