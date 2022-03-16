import { makeSx } from 'shared/lib/theme';

export default makeSx({
  root: ({ spacing, palette }) => ({
    minHeight: '40px !important',
    padding: `${spacing(0, 4)} !important`,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 3,
    width: '100%',
    backgroundColor: palette.grey[2],
  }),
  items: {
    display: 'flex',
    alignItems: 'center',
  },
});
