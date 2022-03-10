import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoIcon from 'shared/assets/icons/Video.svg';

import { ToolboxTextButton } from '.';

export default {
  title: 'shared/toolbox/text-button',
  component: ToolboxTextButton,
  args: {},
} as ComponentMeta<typeof ToolboxTextButton>;

export const Overview: ComponentStory<typeof ToolboxTextButton> = (args) => (
  <ToolboxTextButton {...args} value="0">
    <VideoIcon />
  </ToolboxTextButton>
);
