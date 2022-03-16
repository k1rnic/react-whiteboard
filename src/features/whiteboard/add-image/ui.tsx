import { whiteboardModel } from 'entities/whiteboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImageIcon from 'shared/assets/icons/Image.svg';
import { useFilePicker } from 'shared/lib/file-picker';
import { imageShapeModel } from 'shared/ui/image';
import { ToggleButton, ToggleButtonProps } from 'shared/ui/toggle-button';

export const AddImage = (props: ToggleButtonProps) => {
  const [files, uploadFile] = useFilePicker({ accept: 'image/*' });

  const dispatch = useDispatch();

  useEffect(() => {
    if (files.length) {
      const src = URL.createObjectURL(files[0]);

      dispatch(
        whiteboardModel.createShapeDraft({
          type: whiteboardModel.WhiteboardShapeType.Image,
          props: { src, ...imageShapeModel.defaultConfig },
        }),
      );
    }
  }, [files]);

  return (
    <ToggleButton {...props} onClick={uploadFile}>
      <ImageIcon />
    </ToggleButton>
  );
};
