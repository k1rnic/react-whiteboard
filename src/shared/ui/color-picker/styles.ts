import { makeSx } from 'shared/lib/theme';

export default makeSx({
  pickerPaper: {
    zIndex: 1,
    marginTop: 0.25,
    position: 'absolute',
    boxShadow: '6px 20px 36px rgba(6, 18, 55, 0.04)',
    borderRadius: 12,
    '& .chrome-picker': {
      borderRadius: 12,
      fontFamily: 'Montserrat, Arial !important',
      boxShadow: 'none !important',
      border: ({ palette }) => `1px solid ${palette.grey[2]}`,
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
