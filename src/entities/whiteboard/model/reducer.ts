import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import TestImgSrc from 'shared/assets/img/img.jpg';
import { uuid } from 'shared/lib/uuid';

import { WhiteboardMode, WhiteboardShape, WhiteboardShapeType, WhiteboardState } from './types';

const initialState: WhiteboardState = {
  mode: WhiteboardMode.View,
  shapes: [
    {
      id: 'notes1',
      type: WhiteboardShapeType.Notes,
      draft: false,
      props: {
        text: 'Sample text 1',
        fontFamily: 'Montserrat',
        fontSize: 14,
        x: 0,
        y: 0,
      },
    },
    {
      id: 'notes2',
      type: WhiteboardShapeType.Notes,
      draft: false,
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
      draft: false,
      props: {
        text: 'Sample text 3',
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontStyle: 'italic',
        x: 200,
        y: 200,
      },
    },
    {
      id: 'notes4',
      type: WhiteboardShapeType.Image,
      draft: false,
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
      if (!payload) {
        state.shapes = state.shapes.filter(({ draft }) => !draft);
        state.selectedShapeType = undefined;
      }
    },
    modifyShape: (state, { payload }: PayloadAction<Omit<WhiteboardShape, 'draft'>>) => {
      state.shapes = state.shapes.map<any>(({ id, ...props }) =>
        id === payload.id ? { ...payload, props: payload.props } : { id, ...props },
      );
    },
    removeShape: (state, { payload }: PayloadAction<string>) => {
      state.shapes = state.shapes.filter(({ id }) => id !== payload);
      state.selectedShapeType = undefined;
    },
    createShape: (state, { payload }: PayloadAction<Draft<Omit<WhiteboardShape, 'id' | 'draft'>>>) => {
      const shapeId = uuid();

      state.selectedShapeId = shapeId;
      state.shapes.push({ ...payload, id: shapeId, draft: false });
      state.selectedShapeType = payload.type;
    },
    createShapeDraft: (state, { payload }: PayloadAction<Draft<Omit<WhiteboardShape, 'id' | 'draft'>>>) => {
      const shapeId = uuid();

      state.selectedShapeId = shapeId;
      state.shapes.push({ ...payload, id: shapeId, draft: true });
      state.selectedShapeType = payload.type;
    },
    commitDrafts: (state) => {
      state.shapes.forEach((shape) => {
        shape.draft = false;
      });
    },
    resetDrafts: (state) => {
      state.shapes = state.shapes.filter(({ draft }) => !draft);
    },
  },
});

export const { selectShape, modifyShape, createShape, createShapeDraft, commitDrafts, resetDrafts, removeShape } =
  slice.actions;
export const reducer = slice.reducer;
