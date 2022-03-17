import { whiteboardModel } from 'entities/whiteboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import VideoIcon from 'shared/assets/icons/Video.svg';
import { useFilePicker } from 'shared/lib/file-picker';
import { ToggleButton, ToggleButtonProps } from 'shared/ui/toggle-button';
import { videoShapeModel } from 'shared/ui/video';

export const AddVideo = (props: ToggleButtonProps) => {
  const [files, uploadFile] = useFilePicker({ accept: 'video/*' });

  const dispatch = useDispatch();

  useEffect(() => {
    if (files.length) {
      const src = URL.createObjectURL(files[0]);

      dispatch(
        whiteboardModel.createShapeDraft({
          type: whiteboardModel.WhiteboardShapeType.Video,
          props: { src, ...videoShapeModel.defaultConfig },
        }),
      );
    }
  }, [files]);

  return (
    <ToggleButton {...props} onClick={uploadFile}>
      <VideoIcon />
    </ToggleButton>
  );
};
