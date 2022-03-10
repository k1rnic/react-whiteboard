import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Canvas } from '.';

export default {
  title: 'shared/canvas',
  component: Canvas,
  args: {},
} as ComponentMeta<typeof Canvas>;

export const Overview: ComponentStory<typeof Canvas> = (args) => {
  return <Canvas {...args}></Canvas>;
};
