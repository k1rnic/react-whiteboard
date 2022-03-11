import { KonvaEventObject } from 'konva/lib/Node';
import { Image as ImageRef, ImageConfig } from 'konva/lib/shapes/Image';
import { useRef } from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

export type ImageProps = {
  src: string;
  onSelect: (selectedId: string) => void;
  onChange: (changes: Omit<ImageConfig, 'image'>) => void;
} & Exclude<ImageConfig, 'image'>;

export const Image = ({ src, onChange, onSelect, ...shapeProps }: ImageProps) => {
  const shapeRef = useRef<ImageRef>(null!);
  const [image] = useImage(src);

  const handleSelect = ({ target: { attrs } }: KonvaEventObject<MouseEvent | DragEvent>) => {
    onSelect(attrs.id);
  };

  return (
    <KonvaImage
      {...shapeProps}
      ref={shapeRef}
      image={image}
      onClick={handleSelect}
      onDragStart={handleSelect}
      onDragEnd={({ target }) => {
        onChange({ ...shapeProps, src, x: target.x(), y: target.y() });
      }}
      onTransformEnd={() => {
        const node = shapeRef.current;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        node.scaleX(1);
        node.scaleY(1);
        onChange({
          ...shapeProps,
          src,
          x: node.x(),
          y: node.y(),
          width: Math.max(node.width() * scaleX, 50),
          height: Math.max(node.height() * scaleY, 50),
        });
      }}
    />
  );
};
