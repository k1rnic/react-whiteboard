import { whiteboardModel } from 'entities/whiteboard';
import { ImageShapeUploader } from 'features/whiteboard/upload-image-shape';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileIcon from 'shared/assets/icons/File.svg';
import VideoIcon from 'shared/assets/icons/Video.svg';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const NewShapeToggleGroup = () => {
  const selectedShapeType = useSelector(whiteboardModel.selectedShapeTypeSelector);
  const dispatch = useDispatch();

  const handleChange = (e: MouseEvent<HTMLElement>, selected?: whiteboardModel.WhiteboardShapeType) => {
    switch (selected) {
      case whiteboardModel.WhiteboardShapeType.Notes:
        dispatch(
          whiteboardModel.createShapeDraft({
            type: whiteboardModel.WhiteboardShapeType.Notes,
            props: {
              text: 'Enter text',
              fontFamily: 'Montserrat',
              fontSize: 14,
            },
          }),
        );
    }
  };

  return (
    <ToggleButtonGroup exclusive value={selectedShapeType} onChange={handleChange}>
      <ToggleButton variant="text" value={whiteboardModel.WhiteboardShapeType.Notes}>
        T
      </ToggleButton>
      <ImageShapeUploader />
      <ToggleButton value={whiteboardModel.WhiteboardShapeType.Video}>
        <VideoIcon />
      </ToggleButton>
      <ToggleButton value={whiteboardModel.WhiteboardShapeType.File}>
        <FileIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
