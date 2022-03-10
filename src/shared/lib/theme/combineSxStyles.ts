import { SxProps, Theme } from '@mui/material';
import { CSSSelectorObject, SystemCssProperties, SystemStyleObject } from '@mui/system';

type CombineSx = (
  | boolean
  | {
      [cssVariable: string]: string | number;
    }
  | SystemCssProperties<Theme>
  | CSSSelectorObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)
  | null
)[];

export const combineSxStyles = (...styles: SxProps<Theme>[]) => {
  return styles.reduce<CombineSx>((acc, sx) => {
    return [...acc, ...(Array.isArray(sx) ? sx : [sx])];
  }, []);
};
