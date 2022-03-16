import { whiteboardModel } from 'entities/whiteboard';
import { AlignText } from 'features/shape/align-text';
import { ChangeFontSize } from 'features/shape/change-font-size';
import { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'shared/ui/divider';
import { ToolboxChangeFontStyleGroup } from 'widgets/toolbox-change-font-style-group';

import { ToolboxItem } from './model';

export const ITEMS: ToolboxItem[] = [
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
