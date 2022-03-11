import { ImageConfig } from 'konva/lib/shapes/Image';
import { TextConfig } from 'konva/lib/shapes/Text';

export enum WhiteboardMode {
  View,
  Modify,
  Insert,
}

export enum WhiteboardShapeType {
  Notes,
  Image,
  Video,
  File,
}

export type WhiteboardShapeProps = TextConfig | (ImageConfig & { src: string });

export type WhiteboardShape = {
  id: string;
  type: WhiteboardShapeType;
  draft: boolean;
  props: WhiteboardShapeProps;
};

export type WhiteboardState = {
  mode: WhiteboardMode;
  selectedShapeId?: string;
  selectedShapeType?: WhiteboardShapeType;
  shapes: WhiteboardShape[];
};
