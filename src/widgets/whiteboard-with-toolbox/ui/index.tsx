import { Box } from '@mui/material';
import { Whiteboard } from 'entities/whiteboard';
import { ShapeTransformer } from 'features/shape/transform';
import { Toolbox } from 'widgets/toolbox';

import useStyles from './styles';

export const WhiteboardWithToolbox = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      <Toolbox />
      <Whiteboard>
        <ShapeTransformer />
      </Whiteboard>
    </Box>
  );
};
