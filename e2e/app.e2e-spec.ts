import { BookwormFrontendPage } from './app.po';

describe('bookworm-frontend App', () => {
  let page: BookwormFrontendPage;

  beforeEach(() => {
    page = new BookwormFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
