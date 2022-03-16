import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChangeFontColor } from '.';

export default {
  title: 'features/shape/change-font-color',
  component: ChangeFontColor,
  args: {},
} as ComponentMeta<typeof ChangeFontColor>;

export const Overview: ComponentStory<typeof ChangeFontColor> = () => <ChangeFontColor />;
