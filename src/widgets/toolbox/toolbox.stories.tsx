import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Toolbox } from '.';

export default {
  title: 'widgets/toolbox',
  component: Toolbox,
  args: {},
} as ComponentMeta<typeof Toolbox>;

export const Overview: ComponentStory<typeof Toolbox> = () => <Toolbox />;
