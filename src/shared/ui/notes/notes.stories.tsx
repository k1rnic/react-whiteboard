import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextConfig } from 'konva/lib/shapes/Text';
import { useState } from 'react';

import { Canvas } from '../canvas';
import { Notes } from '.';

export default {
  title: 'shared/notes',
  component: Notes,
  args: {},
} as ComponentMeta<typeof Notes>;

export const Overview: ComponentStory<typeof Notes> = (args) => {
  const [notesProps] = useState<TextConfig>({
    id: 'notes',
    text: 'Sample text',
    fontFamily: 'Montserrat',
    fontSize: 18,
  });

  return (
    <Canvas>
      <Notes {...args} {...notesProps} />
    </Canvas>
  );
};
