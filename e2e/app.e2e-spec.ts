import { OracleBoneScriptPage } from './app.po';

describe('oracle-bone-script App', function() {
  let page: OracleBoneScriptPage;

  beforeEach(() => {
    page = new OracleBoneScriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
