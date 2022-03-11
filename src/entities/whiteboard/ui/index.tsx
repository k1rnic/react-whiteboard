import { KonvaEventObject } from 'konva/lib/Node';
import { TextConfig } from 'konva/lib/shapes/Text';
import { PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'shared/ui/canvas';
import { Notes } from 'shared/ui/notes';

import {
  commitDrafts,
  hasDraftShapeSelector,
  modifyShape,
  selectedShapeSelector,
  selectShape,
  visibleShapeListSelector,
  WhiteboardShape,
  WhiteboardShapeType,
} from '../model';

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
  const shapes = useSelector(visibleShapeListSelector);
  const selectedShape = useSelector(selectedShapeSelector);
  const hasDrafts = useSelector(hasDraftShapeSelector);
  const dispatch = useDispatch();

  const checkDeselect = ({ target }: KonvaEventObject<MouseEvent | TouchEvent>) => {
    const outsideClicked = target === target.getStage();
    if (outsideClicked) {
      if (hasDrafts) {
        dispatch(
          modifyShape({
            ...selectedShape!,
            props: {
              ...selectedShape!.props,
              x: target.pointerPos?.x,
              y: target.pointerPos?.y,
            },
          }),
        );
        dispatch(commitDrafts());
      } else {
        dispatch(selectShape());
      }
    }
  };

  return (
    <Canvas
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      style={{ cursor: hasDrafts ? 'crosshair' : 'default' }}
    >
      {shapes.map((shape) => (
        <Shape key={shape.id} {...shape} />
      ))}
      {children}
    </Canvas>
  );
};
