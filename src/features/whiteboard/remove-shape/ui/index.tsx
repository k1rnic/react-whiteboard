import { whiteboardModel } from 'entities/whiteboard';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from 'shared/assets/icons/Delete.svg';
import { ToggleButton } from 'shared/ui/toggle-button';

import useStyles from './styles';

export const RemoveShapeButton = () => {
  const styles = useStyles();
  const selectedShape = useSelector(whiteboardModel.selectedShapeSelector);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(whiteboardModel.removeShape(selectedShape!.id));
  };

  return (
    <ToggleButton value="trash" sx={styles.root} onClick={handleRemove}>
      <DeleteIcon />
    </ToggleButton>
  );
};
