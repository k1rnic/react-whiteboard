import { whiteboardModel } from 'entities/whiteboard';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from 'shared/assets/icons/Pause.svg';
import PlayIcon from 'shared/assets/icons/Play.svg';
import { ToggleButton } from 'shared/ui/toggle-button';

export const PlaybackVideo = () => {
  const dispatch = useDispatch();
  const selectedShape = useSelector(whiteboardModel.selectedShapePropsSelector);
  const isPlaying = selectedShape?.play;

  const handleChange = () => {
    dispatch(whiteboardModel.modifyShape({ play: !isPlaying }));
  };

  return (
    <ToggleButton value="playback" onClick={handleChange}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </ToggleButton>
  );
};
