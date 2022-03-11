export type WhiteboardMode = 'view' | 'modify' | 'insert';

export type WhiteboardShapeType = 'notes' | 'image' | 'video' | 'file';

export type WhiteboardShape = {
  type: WhiteboardShapeType;
};

export interface WhiteboardState {
  mode: WhiteboardMode;
  selectedShape?: WhiteboardShapeType;
  shapes: WhiteboardShape[];
}
