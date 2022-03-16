import { whiteboardModel } from 'entities/whiteboard';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const DecorateText = () => {
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const dispatch = useDispatch();

  const selectedTextDecoration = selectedShape?.props.textDecoration;

  const handleChange = (e: MouseEvent<HTMLElement>, textDecoration: string) => {
    dispatch(whiteboardModel.modifyShape({ textDecoration }));
  };

  return (
    <ToggleButtonGroup exclusive value={selectedTextDecoration} onChange={handleChange}>
      <ToggleButton variant="text" value="underline" sx={{ textDecoration: 'underline' }}>
        U
      </ToggleButton>
      <ToggleButton variant="text" value="line-through" sx={{ textDecoration: 'line-through' }}>
        S
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
