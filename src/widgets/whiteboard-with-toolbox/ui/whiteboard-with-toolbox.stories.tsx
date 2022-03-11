import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WhiteBoardWithToolbox } from '.';

export default {
  title: 'widgets/whiteBoard-with-toolbox',
  component: WhiteBoardWithToolbox,
  args: {},
} as ComponentMeta<typeof WhiteBoardWithToolbox>;

export const Overview: ComponentStory<typeof WhiteBoardWithToolbox> = (args) => <WhiteBoardWithToolbox />;
