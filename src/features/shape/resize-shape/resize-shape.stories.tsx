import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ResizeShape } from '.';

export default {
  title: 'features/shape/resize-shape',
  component: ResizeShape,
  args: {},
} as ComponentMeta<typeof ResizeShape>;

export const Overview: ComponentStory<typeof ResizeShape> = () => <ResizeShape />;
