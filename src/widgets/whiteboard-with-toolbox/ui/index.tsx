import { Box } from '@mui/material';
import { Whiteboard } from 'entities/whiteboard';
import { TransformShape } from 'features/shape/transform';
import { Toolbox } from 'widgets/toolbox/ui';

import useStyles from './styles';

export const WhiteboardWithToolbox = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      <Toolbox />
      <Whiteboard>
        <TransformShape />
      </Whiteboard>
    </Box>
  );
};
