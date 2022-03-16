import { useDispatch } from 'react-redux';
import { Image, ImageProps } from 'shared/ui/image';
import { Notes, NotesProps } from 'shared/ui/notes';

import {
  modifyShape,
  selectShape,
  WhiteboardShape as WhiteboardShapeModel,
  WhiteboardShapeProps,
  WhiteboardShapeType,
} from '../model';

export const WhiteboardShape = ({ id, type, props }: WhiteboardShapeModel) => {
  const dispatch = useDispatch();

  const handleChange = (changes: WhiteboardShapeProps) => {
    dispatch(modifyShape(changes));
  };

  const handleSelectionChange = () => {
    dispatch(selectShape(id));
  };

  switch (type) {
    case WhiteboardShapeType.Image:
      return (
        <Image draggable id={id} {...(props as ImageProps)} onChange={handleChange} onSelect={handleSelectionChange} />
      );
    case WhiteboardShapeType.Notes:
    default:
      return (
        <Notes draggable id={id} {...(props as NotesProps)} onChange={handleChange} onSelect={handleSelectionChange} />
      );
  }
};
