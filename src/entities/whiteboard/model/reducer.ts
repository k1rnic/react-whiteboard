import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TestImgSrc from 'shared/assets/img/img.jpg';
import { uuid } from 'shared/lib/uuid';

import {
  DraftWhiteboardShape,
  WhiteboardMode,
  WhiteboardShapeProps,
  WhiteboardShapeType,
  WhiteboardState,
} from './types';

const initialState: WhiteboardState = {
  mode: WhiteboardMode.View,
  shapes: [
    {
      id: 'notes1',
      type: WhiteboardShapeType.Notes,
      props: {
        text: 'Sample text 1',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: 'bold',
        x: 0,
        y: 0,
      },
    },
    {
      id: 'notes2',
      type: WhiteboardShapeType.Notes,
      props: {
        text: 'Sample text 2',
        fontFamily: 'Montserrat',
        fontSize: 16,
        x: 100,
        y: 100,
      },
    },
    {
      id: 'notes3',
      type: WhiteboardShapeType.Notes,
      props: {
        text: 'Sample text 3',
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        x: 200,
        y: 200,
      },
    },
    {
      id: 'notes4',
      type: WhiteboardShapeType.Image,
      props: {
        src: TestImgSrc,
        x: 350,
        y: 350,
        width: 150,
        height: 150,
      },
    },
  ],
};

export const reducerName = 'whiteboard';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    selectShape: (state, { payload }: PayloadAction<string | undefined>) => {
      state.selectedShapeId = payload;
    },
    modifyShape: (state, { payload }: PayloadAction<WhiteboardShapeProps>) => {
      state.shapes.forEach((shape) => {
        if (shape.id === state.selectedShapeId) {
          shape.props = { ...shape.props, ...payload } as any;
        }
      });
    },
    removeShape: (state, { payload }: PayloadAction<string>) => {
      state.shapes = state.shapes.filter(({ id }) => id !== payload);
    },
    createShape: (state, { payload }: PayloadAction<DraftWhiteboardShape>) => {
      // const shapeId = uuid();
      // state.selectedShapeId = shapeId;
      // state.shapes.push({ ...payload, id: shapeId, draft: false });
    },
    createShapeDraft: (state, { payload }: PayloadAction<DraftWhiteboardShape>) => {
      const id = uuid();
      state.shapes.push({ ...payload, id, draft: true } as any);
      state.selectedShapeId = id;
    },
    commitDrafts: (state) => {
      state.shapes.forEach((shape) => {
        shape.draft = false;
      });
    },
    clearDrafts: (state) => {
      state.shapes = state.shapes.filter(({ draft }) => !draft);
    },
  },
});

export const { selectShape, modifyShape, createShape, createShapeDraft, commitDrafts, clearDrafts, removeShape } =
  slice.actions;
export const reducer = slice.reducer;
