import seedOrg from '../seed/seedOrg.js';
import HyfOrganization from '../classes/HyfOrganization.js';
import util from 'util';

describe('HYF Organization', () => {
  let hyfOrg;

  beforeEach(() => {
    hyfOrg = new HyfOrganization();
    seedOrg(hyfOrg);
  });

  test('Fede should ', () => {
    console.log(util.inspect(hyfOrg, false, Infinity));
    expect(1).toBe(1);
  });
});
