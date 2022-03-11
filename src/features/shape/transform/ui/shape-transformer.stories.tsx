import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Whiteboard } from 'entities/whiteboard';

import { ShapeTransformer } from '.';

export default {
  title: 'features/shape/transform',
  component: ShapeTransformer,
  args: {},
} as ComponentMeta<typeof ShapeTransformer>;

export const Overview: ComponentStory<typeof ShapeTransformer> = () => {
  return (
    <Whiteboard>
      <ShapeTransformer />
    </Whiteboard>
  );
};
