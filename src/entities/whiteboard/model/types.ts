export type WhiteboardMode = 'view' | 'modify' | 'insert';

export type WhiteBoardShapeType = 'text' | 'image' | 'video' | 'file';

export type WhiteBoardShape = {
  type: WhiteBoardShapeType;
};

export interface WhiteboardState {
  mode: WhiteboardMode;
  selectedShape?: WhiteBoardShapeType;
  shapes: WhiteBoardShape[];
}
