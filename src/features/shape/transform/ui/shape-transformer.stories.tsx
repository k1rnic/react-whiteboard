import { ComponentMeta, ComponentStory } from '@storybook/react';
import { whiteboardModel } from 'entities/whiteboard';
import { KonvaEventObject } from 'konva/lib/Node';
import { TextConfig } from 'konva/lib/shapes/Text';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Canvas } from 'shared/ui/canvas';
import { Notes } from 'shared/ui/notes';

import { ShapeTransformer } from '.';

export default {
  title: 'features/shape/transform',
  component: ShapeTransformer,
  args: {},
} as ComponentMeta<typeof ShapeTransformer>;

export const Overview: ComponentStory<typeof ShapeTransformer> = () => {
  const [notesProps, setNotesProps] = useState<TextConfig>({
    id: 'notes',
    text: 'Sample text',
    fontFamily: 'Montserrat',
    fontSize: 18,
  });

  const dispatch = useDispatch();

  const checkDeselect = ({ target }: KonvaEventObject<MouseEvent | TouchEvent>) => {
    const clickedOnEmpty = target === target.getStage();
    if (clickedOnEmpty) {
      dispatch(whiteboardModel.selectShape());
    }
  };

  const handleSelectionChange = (selected: string) => {
    dispatch(whiteboardModel.selectShape(selected));
  };

  return (
    <Canvas onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
      <Notes {...notesProps} onSelect={handleSelectionChange} onChange={setNotesProps} />
      <ShapeTransformer />
    </Canvas>
  );
};
