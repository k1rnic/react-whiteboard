import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Canvas } from 'shared/ui/canvas';

import { NotesConfig } from '../model';
import { Notes } from '.';

export default {
  title: 'shared/notes',
  component: Notes,
  args: {},
} as ComponentMeta<typeof Notes>;

export const Overview: ComponentStory<typeof Notes> = (args) => {
  const [notesProps] = useState<NotesConfig>({
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
