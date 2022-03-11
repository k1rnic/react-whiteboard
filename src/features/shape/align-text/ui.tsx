import { whiteboardModel } from 'entities/whiteboard';
import { alignTextModel } from 'features/shape/align-text';
import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import AlignCenterIcon from 'shared/assets/icons/Align Center.svg';
import AlignLeftIcon from 'shared/assets/icons/Align Left.svg';
import AlignRightIcon from 'shared/assets/icons/Align Right.svg';
import AlignJustifyIcon from 'shared/assets/icons/Justify.svg';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const TextAlignSelector = () => {
  const [value, setValue] = useState<alignTextModel.TextAlign>('left');
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const isText = selectedShape?.type === whiteboardModel.WhiteboardShapeType.Notes;

  const handleChange = (e: MouseEvent<HTMLElement>, selected: alignTextModel.TextAlign) => {
    setValue(selected);
  };

  console.log({ isText });

  return isText ? (
    <ToggleButtonGroup exclusive value={value} onChange={handleChange}>
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
