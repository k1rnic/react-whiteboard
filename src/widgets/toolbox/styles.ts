import { makeSx } from 'shared/lib/theme';

export default makeSx({
  root: {
    minHeight: '40px !important',
    padding: ({ spacing }) => `${spacing(0, 4)} !important`,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 3,
    width: '100%',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
});
