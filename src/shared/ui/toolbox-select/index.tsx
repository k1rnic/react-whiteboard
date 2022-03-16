import { MenuItem, Select, styled } from '@mui/material';
import CaretDownIcon from 'shared/assets/icons/Caret Down.svg';

export const ToolboxSelectItem = styled(MenuItem)(({ theme: { palette, spacing } }) => ({
  height: 40,
  minHeight: 40,
  padding: spacing(0, 2),
  '&:hover': {
    backgroundColor: `${palette.grey[3]} !important`,
  },
  '&.Mui-selected': {
    backgroundColor: `${palette.grey[3]} !important`,
  },
}));

export const ToolboxSelect = styled(Select)<{ width?: number }>(({ theme: { spacing }, width = 150 }) => ({
  width,
  height: 40,
  div: {
    paddingLeft: spacing(2),
  },
  svg: {
    right: 10,
  },
}));

ToolboxSelect.defaultProps = {
  disableUnderline: true,
  MenuProps: {
    PaperProps: {
      elevation: 1,
      sx: {
        border: ({ palette }) => `1px solid ${palette.grey[2]}`,
      },
    },
    MenuListProps: {
      sx: {
        padding: 0,
      },
    },
  },
  IconComponent: CaretDownIcon,
};
