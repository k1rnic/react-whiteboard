import { Box } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { ColorChangeHandler } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from 'shared/lib/toggle';
import { ColorPicker } from 'shared/ui/color-picker';
import { ToggleButton } from 'shared/ui/toggle-button';

import useStyles from './styles';

export const ChangeFontColor = () => {
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const selectedColor = selectedShape?.fill;

  const styles = useStyles({ color: selectedColor! });

  const [colorPickerOpened, toggleColorPicker] = useToggle(false);

  const handleChange: ColorChangeHandler = ({ hex }) => {
    dispatch(whiteboardModel.modifyShape({ fill: hex }));
  };

  return (
    <Box>
      <ToggleButton sx={styles.trigger} value="color" variant="text" onClick={toggleColorPicker}>
        A
      </ToggleButton>
      <ColorPicker
        opened={colorPickerOpened}
        color={selectedColor}
        onChange={handleChange}
        onClose={toggleColorPicker}
      />
    </Box>
  );
};
