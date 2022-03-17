import { Button } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useToggle } from 'shared/lib/toggle';
import { Canvas } from 'shared/ui/canvas';

import { Video } from '..';

export default {
  title: 'shared/video',
  component: Video,
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    height: 150,
    width: 150,
    y: 0,
    x: 16,
  },
} as ComponentMeta<typeof Video>;

export const Overview: ComponentStory<typeof Video> = (args) => {
  const [play, togglePlay] = useToggle();

  return (
    <>
      <Button onClick={togglePlay} disabled={play}>
        play
      </Button>
      <Button onClick={togglePlay} disabled={!play}>
        stop
      </Button>
      <Canvas>
        <Video play={play} draggable {...args} />
      </Canvas>
    </>
  );
};
