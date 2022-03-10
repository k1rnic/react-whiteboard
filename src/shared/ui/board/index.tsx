import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import useDimensions from 'react-cool-dimensions';
import { Layer, Stage } from 'react-konva';

export type BoardProps = unknown;

export const Board = ({ children }: PropsWithChildren<BoardProps>) => {
  const { observe, height, width } = useDimensions<HTMLDivElement>();

  return (
    <Box ref={observe} height="100%" width="100%">
      <Stage height={height} width={width}>
        <Layer>{children}</Layer>
      </Stage>
    </Box>
  );
};
