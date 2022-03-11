import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { PropsWithChildren } from 'react';

import useStyles from './styles';

export const Toolbox = ({ children }: PropsWithChildren<unknown>) => {
  const styles = useStyles();

  return (
    <MuiToolbar sx={styles.root}>
      <Box sx={styles.item}>{children}</Box>
    </MuiToolbar>
  );
};
