import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WhiteboardMode, WhiteboardShapeType, WhiteboardState } from './types';

const initialState: WhiteboardState = {
  mode: WhiteboardMode.View,
  shapes: [],
};

export const reducerName = 'whiteboard';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    selectShapeType: (state, action: PayloadAction<WhiteboardShapeType | undefined>) => {
      state.selectedShape = action.payload;
      if (action.payload) {
        state.mode = WhiteboardMode.Insert;
      }
    },
  },
});

export const { selectShapeType } = slice.actions;
export const reducer = slice.reducer;
