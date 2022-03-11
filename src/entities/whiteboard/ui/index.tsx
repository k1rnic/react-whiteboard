import { KonvaEventObject } from 'konva/lib/Node';
import { TextConfig } from 'konva/lib/shapes/Text';
import { PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'shared/ui/canvas';
import { Notes } from 'shared/ui/notes';

import { modifyShape, selectShape, shapeListSelector, WhiteboardShape, WhiteboardShapeType } from '../model';

const Shape = ({ id, type, props }: WhiteboardShape) => {
  const dispatch = useDispatch();

  const handleChange = (changes: TextConfig) => {
    dispatch(modifyShape({ id, type, props: changes }));
  };

  const handleSelectionChange = () => {
    dispatch(selectShape(id));
  };

  switch (type) {
    case WhiteboardShapeType.Notes:
    default:
      return (
        <Notes draggable id={id} {...(props as TextConfig)} onChange={handleChange} onSelect={handleSelectionChange} />
      );
  }
};

export type WhiteboardProps = unknown;

export const Whiteboard = ({ children }: PropsWithChildren<WhiteboardProps>) => {
  const shapes = useSelector(shapeListSelector);
  const dispatch = useDispatch();

  const checkDeselect = ({ target }: KonvaEventObject<MouseEvent | TouchEvent>) => {
    const outsideClicked = target === target.getStage();
    if (outsideClicked) {
      dispatch(selectShape());
    }
  };

  return (
    <Canvas onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
      {shapes.map((shape) => (
        <Shape key={shape.id} {...shape} />
      ))}
      {children}
    </Canvas>
  );
};
