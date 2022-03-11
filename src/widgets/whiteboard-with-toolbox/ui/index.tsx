import { Box } from '@mui/material';
import { Canvas } from 'shared/ui/canvas';
import { Toolbox } from 'widgets/toolbox';

import useStyles from './styles';

export const WhiteboardWithToolbox = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      <Toolbox />
      <Canvas></Canvas>
    </Box>
  );
};
