import { registerLocaleData } from '@angular/common';
import { BrowserLanguageDetector } from './browser-language-detector';

export function importAngularLocale(): Promise<void> {
  const localeId = BrowserLanguageDetector.getLocaleId();
  return import(`@angular/common/locales/${localeId}.js`).then((module) =>
    registerLocaleData(module.default)
  );
}
