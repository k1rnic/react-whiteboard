import { ChangeFontStyle } from 'features/shape/change-font-style';
import { ChangeFontWeight } from 'features/shape/change-font-weight';
import { DecorateText } from 'features/shape/decorate-text';

export const ToolboxChangeFontStyleGroup = () => {
  return (
    <>
      <ChangeFontWeight />
      <ChangeFontStyle />
      <DecorateText />
    </>
  );
};
