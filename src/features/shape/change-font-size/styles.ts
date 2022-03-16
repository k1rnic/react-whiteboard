import { makeSx } from 'shared/lib/theme';

export default makeSx({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: ({ spacing }) => spacing(0, 0.5),
  },
  control: ({ palette }) => ({
    height: 24,
    width: 24,
    minWidth: 24,
    color: palette.grey[4],
    padding: 0,
    '&:hover': {
      color: palette.secondary.main,
      backgroundColor: 'transparent',
    },
  }),
});
