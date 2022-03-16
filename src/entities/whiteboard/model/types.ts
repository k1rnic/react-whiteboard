import { imageShapeModel } from 'shared/ui/image';
import { notesShapeModel } from 'shared/ui/notes';

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
// FIXME: fix types bro
export type WhiteboardShapeProps = any;
// export type WhiteboardShapeProps = notesShapeModel.NotesConfig | imageShapeModel.ImageConfig;

export type WhiteboardBaseShape = {
  id: string;
  draft?: boolean;
};

export type WhiteboardNotesShape = {
  type: WhiteboardShapeType.Notes;
  props: notesShapeModel.NotesConfig;
} & WhiteboardBaseShape;

export type WhiteboardImageShape = {
  type: WhiteboardShapeType.Image;
  props: imageShapeModel.ImageConfig;
} & WhiteboardBaseShape;

// FIXME: fix types bro
export type WhiteboardShape = any;
// export type WhiteboardShape = WhiteboardNotesShape | WhiteboardImageShape;

// FIXME: fix types bro
export type DraftWhiteboardShape = any;
// export type DraftWhiteboardShape = Omit<WhiteboardShape, 'id' | 'draft'>;

export type WhiteboardState = {
  mode: WhiteboardMode;
  selectedShapeId?: string;
  shapes: Array<WhiteboardShape>;
};
