import getFontFamily from '../getFontFamily';
import MerriweatherBold from './Merriweather-Bold.ttf';
import MerriweatherBoldItalic from './Merriweather-BoldItalic.ttf';
import MerriweatherRegular from './Merriweather-Regular.ttf';
import MerriweatherRegularItalic from './Merriweather-RegularItalic.ttf';

export const MerriweatherRegularFont = getFontFamily('Merriweather', 400, MerriweatherRegular);
export const MerriweatherRegularItalicFont = getFontFamily('Merriweather', 400, MerriweatherRegularItalic, 'italic');
export const MerriweatherBoldFont = getFontFamily('Merriweather', 700, MerriweatherBold);
export const MerriweatherBoldItalicFont = getFontFamily('Merriweather', 700, MerriweatherBoldItalic, 'italic');
