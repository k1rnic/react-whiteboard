import { Box, SelectChangeEvent } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { useDispatch, useSelector } from 'react-redux';
import { ToolboxSelect, ToolboxSelectItem } from 'shared/ui/toolbox-select';

export const ChangeFontFamily = () => {
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const selectedFontFamily = selectedShape?.fontFamily;

  const handleChange = ({ target: { value: fontFamily } }: SelectChangeEvent<any>) => {
    dispatch(whiteboardModel.modifyShape({ fontFamily }));
  };

  return (
    <Box>
      <ToolboxSelect value={selectedFontFamily} onChange={handleChange}>
        <ToolboxSelectItem value="Montserrat">Montserrat</ToolboxSelectItem>
        <ToolboxSelectItem value="Merriweather">Merriweather</ToolboxSelectItem>
      </ToolboxSelect>
    </Box>
  );
};
