import { whiteboardModel } from 'entities/whiteboard';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileIcon from 'shared/assets/icons/File.svg';
import ImageIcon from 'shared/assets/icons/Image.svg';
import VideoIcon from 'shared/assets/icons/Video.svg';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const ShapeTypeSelector = () => {
  const [value, setValue] = useState<whiteboardModel.WhiteboardShapeType>();
  const dispatch = useDispatch();

  const handleChange = (e: MouseEvent<HTMLElement>, selected?: whiteboardModel.WhiteboardShapeType) => {
    setValue(selected);
    dispatch(whiteboardModel.selectShapeType(selected));
  };

  return (
    <ToggleButtonGroup exclusive value={value} onChange={handleChange}>
      <ToggleButton variant="text" value="notes">
        T
      </ToggleButton>
      <ToggleButton value="image">
        <ImageIcon />
      </ToggleButton>
      <ToggleButton value="video">
        <VideoIcon />
      </ToggleButton>
      <ToggleButton value="file">
        <FileIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
