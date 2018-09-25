import { RealangularcliPage } from './app.po';

describe('realangularcli App', function() {
  let page: RealangularcliPage;

  beforeEach(() => {
    page = new RealangularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
