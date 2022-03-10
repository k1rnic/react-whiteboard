import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoIcon from 'shared/assets/icons/Video.svg';

import { ToolboxButton } from '.';

export default {
  title: 'shared/toolbox/button',
  component: ToolboxButton,
  args: {},
} as ComponentMeta<typeof ToolboxButton>;

export const Overview: ComponentStory<typeof ToolboxButton> = (args) => (
  <ToolboxButton {...args} value="0">
    <VideoIcon />
  </ToolboxButton>
);
