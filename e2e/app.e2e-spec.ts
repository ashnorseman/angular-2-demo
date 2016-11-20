import { Angular2Seed } from './app.po';

describe('angular-2-seed App', function() {
  let page: Angular2Seed;

  beforeEach(() => {
    page = new Angular2Seed();
  });

  it('should display message saying Angular 2 Seed Project', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 2 Seed Project');
  });
});
