import { Box, Button } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MinusIcon from 'shared/assets/icons/Minus.svg';
import PlusIcon from 'shared/assets/icons/Plus.svg';
import { ToolboxInput } from 'shared/ui/toolbox-input';

import useStyles from './styles';

export const ChangeFontSize = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const selectedFontSize = selectedShape?.props.fontSize;

  const increment = () => {
    dispatch(whiteboardModel.modifyShape({ fontSize: selectedFontSize + 1 }));
  };

  const decrement = () => {
    dispatch(whiteboardModel.modifyShape({ fontSize: selectedFontSize - 1 }));
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(whiteboardModel.modifyShape({ fontSize: +value }));
  };

  return (
    <Box sx={styles.root}>
      <Button sx={styles.control} onClick={decrement}>
        <MinusIcon />
      </Button>
      <ToolboxInput type="number" inputProps={{ min: 1 }} value={selectedFontSize} onChange={handleChange} />
      <Button sx={styles.control} onClick={increment}>
        <PlusIcon />
      </Button>
    </Box>
  );
};
