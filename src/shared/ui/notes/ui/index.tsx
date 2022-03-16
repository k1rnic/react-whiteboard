import { KonvaEventObject } from 'konva/lib/Node';
import { Text as TextRef } from 'konva/lib/shapes/Text';
import { useRef } from 'react';
import { Text } from 'react-konva';

import { NotesConfig } from '../model';

export type NotesProps = {
  onSelect: (selectedId: string) => void;
  onChange: (changes: NotesConfig) => void;
} & NotesConfig;

export const Notes = ({ onChange, onSelect, ...shapeProps }: NotesProps) => {
  const shapeRef = useRef<TextRef>(null!);

  const handleSelect = ({ target: { attrs } }: KonvaEventObject<MouseEvent | DragEvent>) => {
    onSelect(attrs.id);
  };

  const handleDragEnd = ({ target }: KonvaEventObject<DragEvent>) => {
    onChange({ ...shapeProps, x: target.x(), y: target.y() });
  };

  const handleTransform = () => {
    const node = shapeRef.current;
    node.setAttrs({
      scaleX: 1,
      scaleY: 1,
      width: Math.max(node.width() * node.scaleX(), 20),
    });
  };

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    onChange({
      ...shapeProps,
      width: Math.max(node.width() * node.scaleX(), 20),
    });
  };

  return (
    <Text
      {...shapeProps}
      ref={shapeRef}
      padding={12}
      onClick={handleSelect}
      onDragStart={handleSelect}
      onDragEnd={handleDragEnd}
      onTransform={handleTransform}
      onTransformEnd={handleTransformEnd}
    />
  );
};
