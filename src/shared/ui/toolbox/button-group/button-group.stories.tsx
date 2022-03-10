import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MouseEvent, useState } from 'react';
import FileIcon from 'shared/assets/icons/File.svg';
import ImageIcon from 'shared/assets/icons/Image.svg';
import VideoIcon from 'shared/assets/icons/Video.svg';
import { ToolboxButton } from 'shared/ui/toolbox/button';
import { ToolboxTextButton } from 'shared/ui/toolbox/text-button';

import { ToolboxButtonGroup } from '.';

export default {
  title: 'shared/toolbox/button-group',
  component: ToolboxButtonGroup,
  args: {},
} as ComponentMeta<typeof ToolboxButtonGroup>;

export const Exclusive: ComponentStory<typeof ToolboxButtonGroup> = (args) => {
  const [value, setValue] = useState('text');

  const handleChange = (e: MouseEvent<HTMLElement>, selected: string) => {
    setValue(selected);
  };

  return (
    <ToolboxButtonGroup {...args} exclusive value={value} onChange={handleChange}>
      <ToolboxTextButton value="text">T</ToolboxTextButton>
      <ToolboxButton value="image">
        <ImageIcon />
      </ToolboxButton>
      <ToolboxButton value="video">
        <VideoIcon />
      </ToolboxButton>
      <ToolboxButton value="file">
        <FileIcon />
      </ToolboxButton>
    </ToolboxButtonGroup>
  );
};

export const Inclusive: ComponentStory<typeof ToolboxButtonGroup> = (args) => {
  const [value, setValue] = useState(['text']);

  const handleChange = (e: MouseEvent<HTMLElement>, selected: string[]) => {
    setValue(selected);
  };

  return (
    <ToolboxButtonGroup {...args} value={value} onChange={handleChange}>
      <ToolboxTextButton value="text">T</ToolboxTextButton>
      <ToolboxButton value="image">
        <ImageIcon />
      </ToolboxButton>
      <ToolboxButton value="video">
        <VideoIcon />
      </ToolboxButton>
      <ToolboxButton value="file">
        <FileIcon />
      </ToolboxButton>
    </ToolboxButtonGroup>
  );
};
