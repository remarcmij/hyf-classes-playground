import loadHyfOrg from '../seed/loadHyfOrg.js';
import HyfOrganization from '../classes/HyfOrganization.js';
import util from 'util';

describe('HYF Organization', () => {
  let hyfOrg;

  beforeAll(() => {
    hyfOrg = new HyfOrganization();
    loadHyfOrg(hyfOrg);
  });

  test('Fede should ', () => {
    // console.log(util.inspect(hyfOrg, false, Infinity));
    expect(1).toBe(1);
  });
});
