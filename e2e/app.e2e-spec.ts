import { EshopPage } from './app.po';

describe('eshop App', () => {
  let page: EshopPage;

  beforeEach(() => {
    page = new EshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
