import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { RemoveShape } from 'features/whiteboard/remove-shape/ui';
import { useSelector } from 'react-redux';
import { Divider } from 'shared/ui/divider';
import { ToolboxAddShapeGroup } from 'widgets/toolbox-add-shape-group';
import { ToolboxShapeToolsGroup } from 'widgets/toolbox-shape-tools-group';

import useStyles from './styles';

export const Toolbox = () => {
  const styles = useStyles();
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const canRemove = selectedShape && !selectedShape?.draft;

  return (
    <MuiToolbar sx={styles.root}>
      <Box sx={styles.items}>
        <ToolboxAddShapeGroup />
        <ToolboxShapeToolsGroup />
        {canRemove && (
          <>
            <Divider />
            <RemoveShape />
          </>
        )}
      </Box>
    </MuiToolbar>
  );
};
