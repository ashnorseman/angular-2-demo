import { browser, element, by } from 'protractor';

export class Angular2Seed {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ph-root h1')).getText();
  }
}
