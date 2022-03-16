import { ChangeFontStyleSelector } from 'features/shape/change-font-style';
import { ChangeFontWeightSelector } from 'features/shape/change-font-weight';
import { DecorateTextSelector } from 'features/shape/decorate-text';

export const ToolboxFontStyleGroup = () => {
  return (
    <>
      <ChangeFontWeightSelector />
      <ChangeFontStyleSelector />
      <DecorateTextSelector />
    </>
  );
};
