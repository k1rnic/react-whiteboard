import { whiteboardModel } from 'entities/whiteboard';
import { AlignText } from 'features/shape/align-text';
import { ChangeFontColor } from 'features/shape/change-font-color';
import { ChangeFontFamily } from 'features/shape/change-font-family';
import { ChangeFontSize } from 'features/shape/change-font-size';
import { ResizeShape } from 'features/shape/resize-shape';
import { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'shared/ui/divider';
import { ToolboxChangeFontStyleGroup } from 'widgets/toolbox-change-font-style-group';
import { ToolboxVideoControlGroup } from 'widgets/toolbox-video-control-group';

import { ToolboxItem } from './model';

export const ITEMS: ToolboxItem[] = [
  {
    shapes: [whiteboardModel.WhiteboardShapeType.Notes],
    component: <ChangeFontFamily />,
  },
  {
    shapes: [whiteboardModel.WhiteboardShapeType.Notes],
    component: <ChangeFontSize />,
  },
  {
    shapes: [whiteboardModel.WhiteboardShapeType.Notes],
    component: <ToolboxChangeFontStyleGroup />,
  },
  {
    shapes: [whiteboardModel.WhiteboardShapeType.Notes],
    component: <AlignText />,
  },
  {
    shapes: [whiteboardModel.WhiteboardShapeType.Notes],
    component: <ChangeFontColor />,
  },
  {
    shapes: [whiteboardModel.WhiteboardShapeType.Video],
    component: <ToolboxVideoControlGroup />,
  },
  {
    shapes: [
      whiteboardModel.WhiteboardShapeType.Image,
      whiteboardModel.WhiteboardShapeType.Video,
      whiteboardModel.WhiteboardShapeType.File,
    ],
    component: <ResizeShape />,
  },
];

export const ToolboxShapeToolsGroup = memo(() => {
  const selectedShape = useSelector(whiteboardModel.selectedShapeTypeSelector);

  return (
    <>
      {ITEMS.filter(({ shapes }) => shapes.includes(selectedShape!)).map(({ component }, idx) => (
        <Fragment key={idx}>
          <Divider />
          {component}
        </Fragment>
      ))}
    </>
  );
});
