import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChangeFontFamily } from '.';

export default {
  title: 'features/shape/change-font-family',
  component: ChangeFontFamily,
  args: {},
} as ComponentMeta<typeof ChangeFontFamily>;

export const Overview: ComponentStory<typeof ChangeFontFamily> = () => <ChangeFontFamily />;
