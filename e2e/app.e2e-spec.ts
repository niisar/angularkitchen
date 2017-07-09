import { AngularkitchenPage } from './app.po';

describe('angularkitchen App', () => {
  let page: AngularkitchenPage;

  beforeEach(() => {
    page = new AngularkitchenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
