import { createSelector } from '@reduxjs/toolkit';

import { reducerName } from './reducer';
import { WhiteboardState } from './types';

const stateSelector = (state: Record<typeof reducerName, WhiteboardState>) => state[reducerName];

export const modeSelector = createSelector(stateSelector, ({ mode }) => mode);
export const shapeListSelector = createSelector(stateSelector, ({ shapes }) => shapes);
export const visibleShapeListSelector = createSelector(shapeListSelector, (shapes) =>
  shapes.filter(({ draft }) => !draft),
);
export const hasDraftShapeSelector = createSelector(shapeListSelector, (shapes) => !!shapes.find(({ draft }) => draft));
export const selectedShapeIdSelector = createSelector(stateSelector, ({ selectedShapeId }) => selectedShapeId);
export const selectedShapeSelector = createSelector(shapeListSelector, selectedShapeIdSelector, (shapes, selectedId) =>
  shapes.find(({ id }) => id === selectedId),
);
export const selectedShapeTypeSelector = createSelector(selectedShapeSelector, (shape) => shape?.type);
export const selectedShapePropsSelector = createSelector(selectedShapeSelector, (shape) => shape?.props);
