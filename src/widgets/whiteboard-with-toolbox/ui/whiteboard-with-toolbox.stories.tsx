import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WhiteboardWithToolbox } from '.';

export default {
  title: 'widgets/whiteboard-with-toolbox',
  component: WhiteboardWithToolbox,
  args: {},
} as ComponentMeta<typeof WhiteboardWithToolbox>;

export const Overview: ComponentStory<typeof WhiteboardWithToolbox> = () => <WhiteboardWithToolbox />;
