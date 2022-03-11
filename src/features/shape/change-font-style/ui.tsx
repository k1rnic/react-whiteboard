import { whiteboardModel } from 'entities/whiteboard';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from 'shared/ui/toggle-button';
import { ToggleButtonGroup } from 'shared/ui/toggle-button-group';

export const TextStyleSelector = () => {
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const dispatch = useDispatch();
  const isText = selectedShape?.type === whiteboardModel.WhiteboardShapeType.Notes;

  // const selectedFontStyleOptions: string[] = (selectedShape?.props.fontStyle || 'normal regular').split(' ');
  const selectedStyleOptions: string[] = [selectedShape?.props.fontStyle, selectedShape?.props.textDecoration];

  const handleChange = (e: MouseEvent<HTMLElement>, styles: string[]) => {
    const fontWeight = styles.find((style) => style === 'bold') || 'light';
    const fontStyle = styles.find((style) => style === 'italic') || 'normal';
    const textDecoration = styles.find((style) => style === 'underline' || style === 'line-through') || 'none';

    dispatch(
      whiteboardModel.modifyShape({
        ...selectedShape!,
        // FIXME: fix font-style
        props: { ...selectedShape?.props, fontStyle, textDecoration },
      }),
    );
  };

  return isText ? (
    <ToggleButtonGroup value={selectedStyleOptions} onChange={handleChange}>
      <ToggleButton variant="text" value="bold" sx={{ fontWeight: 'bold' }}>
        B
      </ToggleButton>
      <ToggleButton variant="text" value="italic" sx={{ fontStyle: 'italic' }}>
        I
      </ToggleButton>
      <ToggleButton variant="text" value="underline" sx={{ textDecoration: 'underline' }}>
        U
      </ToggleButton>
      <ToggleButton variant="text" value="line-through" sx={{ textDecoration: 'line-through' }}>
        S
      </ToggleButton>
    </ToggleButtonGroup>
  ) : (
    <></>
  );
};
