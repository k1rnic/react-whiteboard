import { Box, Toolbar as MuiToolbar } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { TextAlignSelector } from 'features/shape/align-text';
import { TextStyleSelector } from 'features/shape/change-font-style';
import { RemoveShapeButton } from 'features/whiteboard/remove-shape/ui';
import { useSelector } from 'react-redux';
import { Divider } from 'shared/ui/divider';
import { NewShapeToggleGroup } from 'widgets/new-shape-toggle-group';

import useStyles from './styles';

export const Toolbox = () => {
  const styles = useStyles();
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const isText = selectedShape?.type === whiteboardModel.WhiteboardShapeType.Notes;
  const canRemove = selectedShape && !selectedShape?.draft;

  return (
    <MuiToolbar sx={styles.root}>
      <Box sx={styles.item}>
        <NewShapeToggleGroup />
        {isText && (
          <>
            <Divider />
            <TextStyleSelector />
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
