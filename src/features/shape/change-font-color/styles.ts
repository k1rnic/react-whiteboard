import { makeSx } from 'shared/lib/theme';

export default makeSx<{ color: string }>(({ color = 'black' }) => ({
  trigger: {
    '&::after': {
      content: '""',
      backgroundColor: color,
      position: 'absolute',
      width: 20,
      height: 3,
      bottom: 3,
      borderRadius: 2,
    },
  },
  pickerPaper: {
    zIndex: 1,
    marginTop: 0.25,
    position: 'absolute',
    '& .chrome-picker': {
      boxShadow: 'none !important',
    },
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));
