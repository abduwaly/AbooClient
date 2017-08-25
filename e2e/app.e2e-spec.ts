import { ManagerClientPage } from './app.po';

describe('manager-client App', () => {
  let page: ManagerClientPage;

  beforeEach(() => {
    page = new ManagerClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
