import { whiteboardModel } from 'entities/whiteboard';
import { useMemo } from 'react';

import { Anchor } from '../model';

export const useAnchors = (shapeType?: whiteboardModel.WhiteboardShapeType): Anchor[] => {
  const anchors = useMemo(() => {
    switch (shapeType) {
      case whiteboardModel.WhiteboardShapeType.Notes:
        return [Anchor.MiddleLeft, Anchor.MiddleRight];
      case undefined:
        return [];
      default:
        return [
          Anchor.TopLeft,
          Anchor.TopCenter,
          Anchor.TopRight,
          Anchor.MiddleLeft,
          Anchor.MiddleRight,
          Anchor.BottomLeft,
          Anchor.BottomCenter,
          Anchor.BottomRight,
        ];
    }
  }, [shapeType]);

  return anchors;
};
