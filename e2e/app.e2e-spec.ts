import { QuickStartPage } from './app.po';

describe('quick-start App', function() {
  let page: QuickStartPage;

  beforeEach(() => {
    page = new QuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
