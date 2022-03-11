import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Whiteboard } from '.';

export default {
  title: 'entities/whiteboard',
  component: Whiteboard,
  args: {},
} as ComponentMeta<typeof Whiteboard>;

export const Overview: ComponentStory<typeof Whiteboard> = (args) => <Whiteboard />;
