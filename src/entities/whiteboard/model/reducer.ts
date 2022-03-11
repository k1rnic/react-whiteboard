import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WhiteboardMode, WhiteboardShapeType, WhiteboardState } from './types';

const initialState: WhiteboardState = {
  mode: WhiteboardMode.View,
  shapes: [
    {
      id: 'notes',
      type: WhiteboardShapeType.Notes,
      props: {
        text: 'Sample text',
        fontFamily: 'Montserrat',
        fontSize: 18,
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
