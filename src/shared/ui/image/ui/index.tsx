import { KonvaEventObject } from 'konva/lib/Node';
import { Image as ImageRef } from 'konva/lib/shapes/Image';
import { useRef } from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

import { ImageConfig } from '../model';

export type ImageProps = {
  src: string;
  onSelect: (selectedId: string) => void;
  onChange: (changes: ImageConfig) => void;
} & ImageConfig;

export const Image = ({ onChange, onSelect, ...props }: ImageProps) => {
  const shapeRef = useRef<ImageRef>(null!);
  const [image] = useImage(props.src);

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
      width: Math.max(node.width() * scaleX, 50),
      height: Math.max(node.height() * scaleY, 50),
    });
  };

  return (
    <KonvaImage
      {...props}
      ref={shapeRef}
      image={image}
      onClick={handleSelect}
      onDragStart={handleSelect}
      onDragEnd={handleDragEnd}
      onTransformEnd={handleTransformEnd}
    />
  );
};
