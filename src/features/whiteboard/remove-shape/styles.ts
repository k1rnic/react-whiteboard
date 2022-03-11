import { makeSx } from 'shared/lib/theme';

export default makeSx({
  root: ({ palette }) => ({
    color: `${palette.red[3]} !important`,
    '&:hover': {
      color: `${palette.red[6]} !important`,
    },
  }),
});
