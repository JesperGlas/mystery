import { MysteryPage } from './app.po';

describe('mystery App', () => {
  let page: MysteryPage;

  beforeEach(() => {
    page = new MysteryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
