import { whiteboardModel } from 'entities/whiteboard';
import { ReactNode } from 'react';

export type ToolboxItem = {
  shapes: whiteboardModel.WhiteboardShapeType[];
  component: ReactNode;
};
