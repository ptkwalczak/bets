import { browser, by, element } from 'protractor';

const expectedH1 = 'Bets',
const expectedTitle = `${expectedH1}`;
const targetHero = { id: 15, name: 'Magneta' };
const nameSuffix = 'X';

describe('Bets', () => {
  beforeAll(() => browser.get(''));

  describe('Initial page', () => {
    it(`has title '${expectedTitle}'`, async () => {
      const navElts = element.all(by.css('h1'));
      console.log('navElts: ', await navElts.count());
      console.log(
        'title: ',
        await browser.getTitle().catch((e) => {
          console.log('e');
        })
      );
      expect(await browser.getTitle()).toEqual(expectedTitle);
    });
  });
});
