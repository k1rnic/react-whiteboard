import { makeSx } from 'shared/lib/theme';

export default makeSx({
  root: {
    display: 'inline-flex',
    gap: 2,
    padding: ({ spacing }) => spacing(0, 1.5),
    alignItems: 'center',
  },
  field: {
    display: 'flex',
    gap: 1,
    justifyContent: 'space-between',
  },
  input: {
    '& input': { textAlign: 'end' },
  },
  dimension: ({ palette }) => ({ color: palette.grey[4] }),
  separator: ({ palette }) => ({ color: palette.grey[4], display: 'inline-flex' }),
});
