import seedOrg from '../seed/seedOrg.js';
import HyfOrganization from '../classes/HyfOrganization.js';

describe('Classes Playground', () => {
  let hyfOrg;

  beforeEach(() => {
    hyfOrg = new HyfOrganization();
    seedOrg(hyfOrg);
  });

  it('Quick test', () => {
    console.table(hyfOrg.toObject());
    expect(1).toBe(1);
  });
});
