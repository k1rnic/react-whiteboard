import FileIcon from 'shared/assets/icons/File.svg';
import { ToggleButton, ToggleButtonProps } from 'shared/ui/toggle-button';

export const AddFile = (props: ToggleButtonProps) => (
  <ToggleButton {...props}>
    <FileIcon />
  </ToggleButton>
);
