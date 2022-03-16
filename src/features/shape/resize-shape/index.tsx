import { Box, Typography } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProportionIcon from 'shared/assets/icons/ProportionOn.svg';
import { ToolboxInput } from 'shared/ui/toolbox-input';

import useStyles from './styles';

export const ResizeShape = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const selectedWidth = selectedShape?.width;
  const selectedHeight = selectedShape?.height;

  const handleWidthChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(whiteboardModel.modifyShape({ width: +value }));
  };

  const handleHeightChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(whiteboardModel.modifyShape({ height: +value }));
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.field}>
        <Typography sx={styles.dimension}>W</Typography>
        <ToolboxInput
          type="number"
          sx={styles.input}
          inputProps={{ min: 1 }}
          value={selectedWidth}
          onChange={handleWidthChange}
        />
      </Box>

      <Box sx={styles.separator}>
        <ProportionIcon />
      </Box>

      <Box sx={styles.field}>
        <Typography sx={styles.dimension}>H</Typography>
        <ToolboxInput
          type="number"
          sx={styles.input}
          inputProps={{ min: 1, pattern: '[0-9]*' }}
          value={selectedHeight}
          onChange={handleHeightChange}
        />
      </Box>
    </Box>
  );
};
