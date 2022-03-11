import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoIcon from 'shared/assets/icons/Video.svg';

import { ToggleButton } from '.';

export default {
  title: 'shared/toggle-button',
  component: ToggleButton,
  args: {},
} as ComponentMeta<typeof ToggleButton>;

export const Overview: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} value="0">
    <VideoIcon />
  </ToggleButton>
);
