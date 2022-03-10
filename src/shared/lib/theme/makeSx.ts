import { Theme } from '@mui/material';
import { CSSSelectorObject } from '@mui/system';

type SXCreateProps = CSSSelectorObject<Theme>;
type SXCreateFn<P> = (props: P) => SXCreateProps;

export const makeSx =
  <P>(styles: SXCreateFn<P> | SXCreateProps) =>
  (props?: P) =>
    styles instanceof Function ? styles(props!) : styles;
