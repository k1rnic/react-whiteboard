import { configureStore } from '@reduxjs/toolkit';
import { whiteboardModel } from 'entities/whiteboard';

export const store = configureStore({
  reducer: {
    [whiteboardModel.reducerName]: whiteboardModel.reducer,
  },
});
