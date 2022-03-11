import { KonvaEventObject } from 'konva/lib/Node';
import { Text as TextRef, TextConfig } from 'konva/lib/shapes/Text';
import { useRef } from 'react';
import { Text } from 'react-konva';

export type NotesProps = {
  onSelect: (selectedId: string) => void;
  onChange: (changes: TextConfig) => void;
} & TextConfig;

export const Notes = ({ onChange, onSelect, ...shapeProps }: NotesProps) => {
  const shapeRef = useRef<TextRef>(null!);

  const handleSelect = ({ target: { attrs } }: KonvaEventObject<MouseEvent | DragEvent>) => {
    onSelect(attrs.id);
  };

  return (
    <Text
      {...shapeProps}
      ref={shapeRef}
      padding={8}
      onClick={handleSelect}
      onDragStart={handleSelect}
      onDragEnd={({ target }) => {
        onChange({ ...shapeProps, x: target.x(), y: target.y() });
      }}
      onTransform={() => {
        const node = shapeRef.current;
        node.setAttrs({
          scaleX: 1,
          scaleY: 1,
          width: Math.max(node.width() * node.scaleX(), 20),
        });
      }}
      onTransformEnd={() => {
        const node = shapeRef.current;
        onChange({
          ...shapeProps,
          width: Math.max(node.width() * node.scaleX(), 20),
        });
      }}
    />
  );
};
