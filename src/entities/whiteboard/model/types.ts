import { imageShapeModel } from 'shared/ui/image';
import { notesShapeModel } from 'shared/ui/notes';
import { videoShapeModel } from 'shared/ui/video';

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

export type WhiteboardShapeProps =
  | notesShapeModel.NotesConfig
  | imageShapeModel.ImageConfig
  | videoShapeModel.VideoConfig;

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

export type WhiteboardVideoShape = {
  type: WhiteboardShapeType.Video;
  props: videoShapeModel.VideoConfig;
} & WhiteboardBaseShape;

export type WhiteboardShape = WhiteboardNotesShape | WhiteboardImageShape | WhiteboardVideoShape;

export type DraftWhiteboardShape = Omit<WhiteboardShape, 'id' | 'draft'>;

export type WhiteboardState = {
  mode: WhiteboardMode;
  selectedShapeId?: string;
  shapes: Array<WhiteboardShape>;
};
