import { makeSx } from 'shared/lib/theme';

export default makeSx({
  pickerPaper: {
    zIndex: 1,
    marginTop: 0.25,
    position: 'absolute',
    boxShadow: '6px 20px 36px rgba(6, 18, 55, 0.04)',
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
});
