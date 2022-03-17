import { whiteboardModel } from 'entities/whiteboard';
import { useDispatch, useSelector } from 'react-redux';
import MuteOffIcon from 'shared/assets/icons/MuteOff.svg';
import MuteOnIcon from 'shared/assets/icons/MuteOn.svg';
import { ToggleButton } from 'shared/ui/toggle-button';

export const MuteVideo = () => {
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const isMuted = selectedShape?.muted;

  const handleChange = () => {
    dispatch(whiteboardModel.modifyShape({ muted: !isMuted }));
  };

  return (
    <ToggleButton value="mute" onClick={handleChange}>
      {isMuted ? <MuteOnIcon /> : <MuteOffIcon />}
    </ToggleButton>
  );
};
