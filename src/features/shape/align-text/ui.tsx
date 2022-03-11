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

export const TextAlignSelector = () => {
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const dispatch = useDispatch();
  const isText = selectedShape?.type === whiteboardModel.WhiteboardShapeType.Notes;

  const selectedAlignOption: alignTextModel.TextAlign = selectedShape?.props.align || 'left';

  const handleChange = (e: MouseEvent<HTMLElement>, align: alignTextModel.TextAlign) => {
    dispatch(whiteboardModel.modifyShape({ ...selectedShape!, props: { ...selectedShape?.props, align } }));
  };

  return isText ? (
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
  ) : (
    <></>
  );
};
