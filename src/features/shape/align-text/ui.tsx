import { whiteboardModel } from 'entities/whiteboard';
import { alignTextModel } from 'features/shape/align-text';
import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import AlignCenterIcon from 'shared/assets/icons/Align Center.svg';
import AlignLeftIcon from 'shared/assets/icons/Align Left.svg';
import AlignRightIcon from 'shared/assets/icons/Align Right.svg';
import AlignJustifyIcon from 'shared/assets/icons/Justify.svg';
import { ToolboxButton, ToolboxButtonGroup } from 'shared/ui/toolbox';

export const TextAlignSelector = () => {
  const [value, setValue] = useState<alignTextModel.TextAlign>('left');
  const selectedShape = useSelector(whiteboardModel.selectedShapeTypeSelector);
  const isText = selectedShape === 'notes';

  const handleChange = (e: MouseEvent<HTMLElement>, selected: alignTextModel.TextAlign) => {
    setValue(selected);
  };

  return isText ? (
    <ToolboxButtonGroup exclusive value={value} onChange={handleChange}>
      <ToolboxButton value="left">
        <AlignLeftIcon />
      </ToolboxButton>
      <ToolboxButton value="center">
        <AlignCenterIcon />
      </ToolboxButton>
      <ToolboxButton value="right">
        <AlignRightIcon />
      </ToolboxButton>
      <ToolboxButton value="justify">
        <AlignJustifyIcon />
      </ToolboxButton>
    </ToolboxButtonGroup>
  ) : (
    <></>
  );
};
