import { whiteboardModel } from 'entities/whiteboard';
import { alignTextModel } from 'features/shape/align-text';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlignCenterIcon from 'shared/assets/icons/Align Center.svg';
import AlignLeftIcon from 'shared/assets/icons/Align Left.svg';
import AlignRightIcon from 'shared/assets/icons/Align Right.svg';
import AlignJustifyIcon from 'shared/assets/icons/Justify.svg';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const AlignText = () => {
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const dispatch = useDispatch();

  const selectedAlignOption: alignTextModel.TextAlign = selectedShape?.align || 'left';

  const handleChange = (e: MouseEvent<HTMLElement>, align: alignTextModel.TextAlign) => {
    dispatch(whiteboardModel.modifyShape({ align }));
  };

  return (
    <ToggleButtonGroup exclusive value={selectedAlignOption} onChange={handleChange}>
      <ToggleButton value="left">
        <AlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center">
        <AlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right">
        <AlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify">
        <AlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
