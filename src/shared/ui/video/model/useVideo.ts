import Konva from 'konva';
import { Image as ImageRef } from 'konva/lib/shapes/Image';
import { MutableRefObject, useEffect, useMemo } from 'react';

import { VideoConfig } from './types';

export type UseVideoProps = {
  videoRef: MutableRefObject<ImageRef>;
} & Pick<VideoConfig, 'src' | 'play' | 'muted'>;

export const useVideo = ({ videoRef, play, src, muted }: UseVideoProps) => {
  const video = useMemo(() => {
    const element = document.createElement('video');
    element.src = src;
    element.muted = true;
    return element;
  }, [src]);

  useEffect(() => {
    if (play) {
      video.muted = muted ?? video.muted;
      video.play();
      const anim = new Konva.Animation(() => {}, [videoRef.current?.getLayer()]);
      anim.start();
      return () => {
        anim.stop();
      };
    }
  }, [play, muted]);

  return video;
};
