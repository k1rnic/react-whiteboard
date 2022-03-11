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

export type WhiteboardShape = {
  type: WhiteboardShapeType;
};

export type WhiteboardState = {
  mode: WhiteboardMode;
  selectedShape?: WhiteboardShapeType;
  shapes: WhiteboardShape[];
};
