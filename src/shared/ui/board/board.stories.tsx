import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Board } from '.';

export default {
  title: 'shared/board',
  component: Board,
  args: {},
} as ComponentMeta<typeof Board>;

export const Overview: ComponentStory<typeof Board> = (args) => {
  return <Board {...args}></Board>;
};
