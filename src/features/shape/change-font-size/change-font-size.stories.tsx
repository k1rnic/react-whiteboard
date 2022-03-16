import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChangeFontSize } from '.';

export default {
  title: 'features/shape/change-font-size',
  component: ChangeFontSize,
  args: {},
} as ComponentMeta<typeof ChangeFontSize>;

export const Overview: ComponentStory<typeof ChangeFontSize> = () => <ChangeFontSize />;
