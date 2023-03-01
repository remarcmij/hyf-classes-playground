import seedOrg from '../seed/seedOrg.js';
import HyfOrganization from '../classes/HyfOrganization.js';
import util from 'util';

describe('HYF Organization', () => {
  let hyfOrgObject;

  beforeEach(() => {
    const hyfOrg = new HyfOrganization();
    seedOrg(hyfOrg);
    hyfOrgObject = hyfOrg.toObject();
  });

  test('Fede should ', () => {
    console.log(util.inspect(hyfOrgObject, false, Infinity));
    expect(1).toBe(1);
  });
});
