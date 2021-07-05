import { BrowserLanguageDetector } from './browser-language-detector';

describe('BrowserLanguageDetector', () => {
  it('should return false for isEnUs if language is set to other than en-US', () => {
    setLanguage('pl');
    expect(BrowserLanguageDetector.getLocaleId()).toBe('pl');
  });

  function setLanguage(lng: string) {
    spyOnProperty(window.navigator, 'language', 'get').and.returnValue(lng);
  }
});
