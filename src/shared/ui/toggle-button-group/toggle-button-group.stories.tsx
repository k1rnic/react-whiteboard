import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MouseEvent, useState } from 'react';
import FileIcon from 'shared/assets/icons/File.svg';
import ImageIcon from 'shared/assets/icons/Image.svg';
import VideoIcon from 'shared/assets/icons/Video.svg';
import { ToggleButton } from 'shared/ui/toggle-button';

import { ToggleButtonGroup } from '.';

export default {
  title: 'shared/toggle-button-group',
  component: ToggleButtonGroup,
  args: {},
} as ComponentMeta<typeof ToggleButtonGroup>;

export const Exclusive: ComponentStory<typeof ToggleButtonGroup> = (args) => {
  const [value, setValue] = useState('text');

  const handleChange = (e: MouseEvent<HTMLElement>, selected: string) => {
    setValue(selected);
  };

  return (
    <ToggleButtonGroup {...args} exclusive value={value} onChange={handleChange}>
      <ToggleButton variant="text" value="text">
        T
      </ToggleButton>
      <ToggleButton value="image">
        <ImageIcon />
      </ToggleButton>
      <ToggleButton value="video">
        <VideoIcon />
      </ToggleButton>
      <ToggleButton value="file">
        <FileIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const Inclusive: ComponentStory<typeof ToggleButtonGroup> = (args) => {
  const [value, setValue] = useState(['text']);

  const handleChange = (e: MouseEvent<HTMLElement>, selected: string[]) => {
    setValue(selected);
  };

  return (
    <ToggleButtonGroup {...args} value={value} onChange={handleChange}>
      <ToggleButton variant="text" value="text">
        T
      </ToggleButton>
      <ToggleButton value="image">
        <ImageIcon />
      </ToggleButton>
      <ToggleButton value="video">
        <VideoIcon />
      </ToggleButton>
      <ToggleButton value="file">
        <FileIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
