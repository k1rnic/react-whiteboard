import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { ReactNode } from 'react';

import useStyles from './styles';

export type ToolboxProps = {
  before?: ReactNode[];
  center?: ReactNode[];
  after?: ReactNode[];
  dense?: boolean;
};

export const Toolbox = ({ before = [], center = [], after = [], dense }: ToolboxProps) => {
  const styles = useStyles({ dense });

  return (
    <MuiToolbar sx={styles.root}>
      <Box sx={styles.item}>{before}</Box>
      <Box sx={styles.item}>{center}</Box>
      <Box sx={styles.item}>{after}</Box>
    </MuiToolbar>
  );
};
