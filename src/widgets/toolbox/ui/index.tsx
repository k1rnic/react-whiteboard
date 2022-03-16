import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { TextAlignSelector } from 'features/shape/align-text';
import { RemoveShapeButton } from 'features/whiteboard/remove-shape/ui';
import { useSelector } from 'react-redux';
import { Divider } from 'shared/ui/divider';
import { ToolboxAddShapeGroup } from 'widgets/toolbox-add-shape-group';
import { ToolboxFontStyleGroup } from 'widgets/toolbox-font-style-group';

import useStyles from './styles';

export const Toolbox = () => {
  const styles = useStyles();
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const isText = selectedShape?.type === whiteboardModel.WhiteboardShapeType.Notes;
  const canRemove = selectedShape && !selectedShape?.draft;

  return (
    <MuiToolbar sx={styles.root}>
      <Box sx={styles.item}>
        <ToolboxAddShapeGroup />
        {isText && (
          <>
            <Divider />
            <ToolboxFontStyleGroup />
          </>
        )}
        {isText && (
          <>
            <Divider />
            <TextAlignSelector />
          </>
        )}
        {canRemove && (
          <>
            <Divider />
            <RemoveShapeButton />
          </>
        )}
      </Box>
    </MuiToolbar>
  );
};
