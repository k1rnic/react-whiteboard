import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import TestImgSrc from 'shared/assets/img/img.jpg';
import { Canvas } from 'shared/ui/canvas';

import { Image, ImageProps } from '..';

export default {
  title: 'shared/image',
  component: Image,
  args: {},
} as ComponentMeta<typeof Image>;

export const Overview: ComponentStory<typeof Image> = (args) => {
  const [imageProps] = useState<Partial<ImageProps>>({
    id: 'image',
    src: TestImgSrc,
    height: 150,
    width: 150,
    y: 150,
    x: 150,
  });

  return (
    <Canvas>
      <Image draggable {...imageProps} {...args} />
    </Canvas>
  );
};
