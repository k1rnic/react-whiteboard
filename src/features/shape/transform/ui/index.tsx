import { useTheme } from '@mui/material';
import { whiteboardModel } from 'entities/whiteboard';
import { useAnchors } from 'features/shape/transform/hooks';
import { Box as KonvaBox, Transformer as TransformerRef } from 'konva/lib/shapes/Transformer';
import { useEffect, useRef } from 'react';
import { Transformer } from 'react-konva';
import { useSelector } from 'react-redux';

const MIN_BOX_WIDTH = 50;
const MIN_BOX_HEIGHT = 20;

export const ShapeTransformer = () => {
  const { palette } = useTheme();
  const transformerRef = useRef<TransformerRef>(null!);

  const selected = useSelector(whiteboardModel.selectedShapeSelector);
  const enabledAnchors = useAnchors(selected?.type);

  useEffect(() => {
    if (selected) {
      const stage = transformerRef.current?.getStage();
      const target = stage?.findOne(`#${selected.id}`);

      target ? transformerRef.current.nodes([target]) : transformerRef.current.detach();
    } else {
      transformerRef.current.detach();
    }

    transformerRef.current.getLayer()?.batchDraw();
  }, [selected]);

  const getBoxSize = (old: KonvaBox, current: KonvaBox) => {
    if (current.width < MIN_BOX_WIDTH || current.height < MIN_BOX_HEIGHT) {
      return old;
    }
    return current;
  };

  return (
    <Transformer
      ref={transformerRef}
      flipEnabled={false}
      rotateEnabled={false}
      anchorSize={8}
      anchorStrokeWidth={0}
      enabledAnchors={enabledAnchors}
      anchorFill={palette.secondary.main}
      borderStroke={palette.secondary.main}
      boundBoxFunc={getBoxSize}
    />
  );
};
