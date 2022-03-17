import { MuteVideo } from 'features/shape/mute-video';
import { PlaybackVideo } from 'features/shape/playback-video';

export const ToolboxVideoControlGroup = () => {
  return (
    <>
      <PlaybackVideo />
      <MuteVideo />
    </>
  );
};
