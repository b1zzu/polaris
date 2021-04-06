import 'react-i18next';
import it from './locales/it.json';
import de from './locales/de.json';

declare module 'react-i18next' {
  interface Resources {
    it: typeof it;
    de: typeof de;
  }
}
