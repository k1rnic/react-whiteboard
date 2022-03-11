import { whiteboardModel } from 'entities/whiteboard';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileIcon from 'shared/assets/icons/File.svg';
import ImageIcon from 'shared/assets/icons/Image.svg';
import VideoIcon from 'shared/assets/icons/Video.svg';
import { ToolboxButton, ToolboxButtonGroup, ToolboxTextButton } from 'shared/ui/toolbox';

export const ShapeTypeSelector = () => {
  const [value, setValue] = useState<whiteboardModel.WhiteBoardShapeType>();
  const dispatch = useDispatch();

  const handleChange = (e: MouseEvent<HTMLElement>, selected?: whiteboardModel.WhiteBoardShapeType) => {
    setValue(selected);
    dispatch(whiteboardModel.selectShapeType(selected));
  };

  return (
    <ToolboxButtonGroup exclusive value={value} onChange={handleChange}>
      <ToolboxTextButton value="text">T</ToolboxTextButton>
      <ToolboxButton value="image">
        <ImageIcon />
      </ToolboxButton>
      <ToolboxButton value="video">
        <VideoIcon />
      </ToolboxButton>
      <ToolboxButton value="file">
        <FileIcon />
      </ToolboxButton>
    </ToolboxButtonGroup>
  );
};
