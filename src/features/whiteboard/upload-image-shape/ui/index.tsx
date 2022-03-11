import { whiteboardModel } from 'entities/whiteboard';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageIcon from 'shared/assets/icons/Image.svg';
import { ToggleButton } from 'shared/ui/toggle-button';

export const ImageShapeUploader = () => {
  const [file, setFile] = useState<File | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file!);

      dispatch(
        whiteboardModel.createShape({
          type: whiteboardModel.WhiteboardShapeType.Image,
          props: {
            src: url,
            x: 100,
            y: 100,
            height: 150,
            width: 150,
          },
        }),
      );
    }
  }, [file]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { files } }) => {
    setFile(files?.item(0));
  };

  return (
    <ToggleButton value={whiteboardModel.WhiteboardShapeType.Image} onClick={handleUploadClick}>
      <ImageIcon />
      <input
        multiple={false}
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </ToggleButton>
  );
};
