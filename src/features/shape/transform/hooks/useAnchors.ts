import { whiteboardModel } from 'entities/whiteboard';
import { useMemo } from 'react';

import { Anchor } from '../model';

export const useAnchors = (shapeType?: whiteboardModel.WhiteboardShapeType): Anchor[] => {
  const anchors = useMemo(() => {
    switch (shapeType) {
      case 'notes':
        return [Anchor.MiddleLeft, Anchor.MiddleRight];
      case undefined:
        return [];
      default:
        return [Anchor.TopLeft, Anchor.TopRight, Anchor.BottomLeft, Anchor.BottomRight];
    }
  }, [shapeType]);

  return anchors;
};
