import { Box } from '@mui/material';
import { TextAlignSelector } from 'features/shape/align-text';
import { ShapeTypeSelector } from 'features/whiteboard/select-shape-type';
import { Toolbox, ToolboxDivider } from 'shared/ui/toolbox';

import useStyles from './styles';

export const WhiteBoardWithToolbox = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      <Toolbox>
        <ShapeTypeSelector />
        <ToolboxDivider />
        <TextAlignSelector />
      </Toolbox>
    </Box>
  );
};
