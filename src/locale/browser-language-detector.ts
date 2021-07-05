export abstract class BrowserLanguageDetector {
  public static getLocaleId(): string {
    return window.navigator.language.slice(0, 2);
  }
}
