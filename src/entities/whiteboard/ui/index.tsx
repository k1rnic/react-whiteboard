import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import { PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'shared/ui/canvas';

import { commitDrafts, hasDraftShapeSelector, modifyShape, selectShape, visibleShapeListSelector } from '../model';
import { WhiteboardShape } from './whiteboard-shape';

export type WhiteboardProps = unknown;

export const Whiteboard = ({ children }: PropsWithChildren<WhiteboardProps>) => {
  const shapes = useSelector(visibleShapeListSelector);
  const hasDrafts = useSelector(hasDraftShapeSelector);
  const dispatch = useDispatch();

  const handleWhiteboardClick = ({ target }: KonvaEventObject<MouseEvent | TouchEvent>) => {
    const outsideClicked = target === target.getStage();

    if (outsideClicked) {
      if (hasDrafts) {
        addShape(target.pointerPos!);
      } else {
        clearSelection();
      }
    }
  };

  const addShape = (position: Vector2d) => {
    dispatch(modifyShape(position));
    dispatch(commitDrafts());
  };

  const clearSelection = () => {
    dispatch(selectShape());
  };

  return (
    <Canvas onMouseDown={handleWhiteboardClick} style={{ cursor: hasDrafts ? 'crosshair' : 'default' }}>
      {shapes.map((shape) => (
        <WhiteboardShape key={shape.id} {...shape} />
      ))}
      {children}
    </Canvas>
  );
};
