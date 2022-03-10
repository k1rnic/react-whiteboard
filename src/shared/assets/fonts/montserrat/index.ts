import getFontFamily from '../getFontFamily';
import MontserratBold from './Montserrat-Bold.ttf';
import MontserratBoldItalic from './Montserrat-BoldItalic.ttf';
import MontserratLight from './Montserrat-Light.ttf';
import MontserratLightItalic from './Montserrat-LightItalic.ttf';
import MontserratRegular from './Montserrat-Regular.ttf';
import MontserratRegularItalic from './Montserrat-RegularItalic.ttf';
import MontserratSemiBold from './Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalic from './Montserrat-SemiBoldItalic.ttf';

export const MontserratLightFont = getFontFamily('Montserrat', 30, MontserratLight);
export const MontserratLightItalicFont = getFontFamily('Montserrat', 30, MontserratLightItalic, 'italic');
export const MontserratRegularFont = getFontFamily('Montserrat', 400, MontserratRegular);
export const MontserratRegularItalicFont = getFontFamily('Montserrat', 400, MontserratRegularItalic, 'italic');
export const MontserratSemiBoldFont = getFontFamily('Montserrat', 600, MontserratSemiBold);
export const MontserratSemiBoldItalicFont = getFontFamily('Montserrat', 600, MontserratSemiBoldItalic, 'italic');
export const MontserratBoldFont = getFontFamily('Montserrat', 700, MontserratBold);
export const MontserratBoldItalicFont = getFontFamily('Montserrat', 700, MontserratBoldItalic, 'italic');
