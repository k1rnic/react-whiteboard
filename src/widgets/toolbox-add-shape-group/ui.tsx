import { whiteboardModel } from 'entities/whiteboard';
import { AddFile } from 'features/whiteboard/add-file';
import { AddImage } from 'features/whiteboard/add-image';
import { AddNote } from 'features/whiteboard/add-note';
import { AddVideo } from 'features/whiteboard/add-video';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notesShapeModel } from 'shared/ui/notes';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const ToolboxAddShapeGroup = () => {
  const selectedShapeType = useSelector(whiteboardModel.selectedShapeTypeSelector);
  const dispatch = useDispatch();

  const handleChange = (_: MouseEvent<HTMLElement>, selected?: whiteboardModel.WhiteboardShapeType) => {
    if (selectedShapeType === selected) {
      dispatch(whiteboardModel.clearDrafts());
    }

    switch (selected) {
      case whiteboardModel.WhiteboardShapeType.Notes: {
        dispatch(
          whiteboardModel.createShapeDraft({
            type: whiteboardModel.WhiteboardShapeType.Notes,
            props: notesShapeModel.defaultConfig,
          }),
        );
        break;
      }
      default:
        dispatch(whiteboardModel.clearDrafts());
    }
  };

  return (
    <ToggleButtonGroup exclusive value={selectedShapeType} onChange={handleChange}>
      <AddNote value={whiteboardModel.WhiteboardShapeType.Notes} />
      <AddImage value={whiteboardModel.WhiteboardShapeType.Image} />
      <AddVideo value={whiteboardModel.WhiteboardShapeType.Video} />
      <AddFile value={whiteboardModel.WhiteboardShapeType.File} />
    </ToggleButtonGroup>
  );
};
