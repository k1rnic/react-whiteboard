import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WhiteboardMode, WhiteboardShapeType, WhiteboardState } from './types';

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
        x: 200,
        y: 200,
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
      if (payload) {
        state.mode = WhiteboardMode.Insert;
      }
    },
  },
});

export const { selectShape } = slice.actions;
export const reducer = slice.reducer;
