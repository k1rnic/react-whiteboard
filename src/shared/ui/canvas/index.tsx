import { Box, ThemeProvider, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import useDimensions from 'react-cool-dimensions';
import { Layer, Stage, StageProps } from 'react-konva';
import { Provider, useStore } from 'react-redux';

export type CanvasProps = StageProps;

export const Canvas = ({ onMouseDown, onTouchStart, children }: PropsWithChildren<CanvasProps>) => {
  const theme = useTheme();
  const store = useStore();
  const { observe, height, width } = useDimensions<HTMLDivElement>();

  return (
    <Box ref={observe} height="100%" width="100%">
      <Stage height={height} width={width} onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layer>{children}</Layer>
          </ThemeProvider>
        </Provider>
      </Stage>
    </Box>
  );
};
