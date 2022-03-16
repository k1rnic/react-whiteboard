import { whiteboardModel } from 'entities/whiteboard';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const ChangeFontWeightSelector = () => {
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const dispatch = useDispatch();

  const selectedFontWeight = selectedShape?.props.fontVariant;

  const handleChange = (e: MouseEvent<HTMLElement>, fontVariant: string) => {
    dispatch(whiteboardModel.modifyShape({ fontVariant }));
  };

  return (
    <ToggleButtonGroup exclusive value={selectedFontWeight} onChange={handleChange}>
      <ToggleButton variant="text" value="bold" sx={{ fontWeight: 'bold' }}>
        B
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
