import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { TextAlignSelector } from 'features/shape/align-text';
import { TextStyleSelector } from 'features/shape/change-font-style';
import { RemoveShapeButton } from 'features/whiteboard/remove-shape/ui';
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
        <TextStyleSelector />
        <Divider />
        <TextAlignSelector />
        <Divider />
        <RemoveShapeButton />
      </Box>
    </MuiToolbar>
  );
};
