import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Whiteboard } from 'entities/whiteboard';

import { TransformShape } from '.';

export default {
  title: 'features/shape/transform',
  component: TransformShape,
  args: {},
} as ComponentMeta<typeof TransformShape>;

export const Overview: ComponentStory<typeof TransformShape> = () => {
  return (
    <Whiteboard>
      <TransformShape />
    </Whiteboard>
  );
};
