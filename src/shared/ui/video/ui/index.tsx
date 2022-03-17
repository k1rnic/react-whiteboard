import { KonvaEventObject } from 'konva/lib/Node';
import { Image as ImageRef } from 'konva/lib/shapes/Image';
import { useRef } from 'react';
import { Image as KonvaImage } from 'react-konva';

import { useVideo, VideoConfig } from '../model';

export type VideoProps = {
  onSelect: (selectedId: string) => void;
  onChange: (changes: VideoConfig) => void;
} & VideoConfig;

export const Video = ({ onChange, onSelect, ...props }: VideoProps) => {
  const shapeRef = useRef<ImageRef>(null!);
  const video = useVideo({ src: props.src, play: props.play, videoRef: shapeRef });

  const handleSelect = ({ target: { attrs } }: KonvaEventObject<MouseEvent | DragEvent>) => {
    onSelect(attrs.id);
  };

  const handleDragEnd = ({ target }: KonvaEventObject<DragEvent>) => {
    onChange({ ...props, x: target.x(), y: target.y() });
  };

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);
    onChange({
      ...props,
      x: node.x(),
      y: node.y(),
      width: Math.max(Math.round(node.width() * scaleX), 50),
      height: Math.max(Math.round(node.height() * scaleY), 50),
    });
  };

  return (
    <KonvaImage
      {...props}
      ref={shapeRef}
      image={video}
      onClick={handleSelect}
      onDragStart={handleSelect}
      onDragEnd={handleDragEnd}
      onTransformEnd={handleTransformEnd}
    />
  );
};
