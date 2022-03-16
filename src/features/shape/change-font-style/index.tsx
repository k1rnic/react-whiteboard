import { whiteboardModel } from 'entities/whiteboard';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const ChangeFontStyle = () => {
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const selectedFontStyle = selectedShape?.fontStyle;

  const handleChange = (e: MouseEvent<HTMLElement>, fontStyle: string) => {
    dispatch(whiteboardModel.modifyShape({ fontStyle }));
  };

  return (
    <ToggleButtonGroup exclusive value={selectedFontStyle} onChange={handleChange}>
      <ToggleButton variant="text" value="italic" sx={{ fontStyle: 'italic' }}>
        I
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
