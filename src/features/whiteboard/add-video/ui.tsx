import VideoIcon from 'shared/assets/icons/Video.svg';
import { ToggleButton, ToggleButtonProps } from 'shared/ui/toggle-button';

export const AddVideo = (props: ToggleButtonProps) => (
  <ToggleButton {...props}>
    <VideoIcon />
  </ToggleButton>
);
