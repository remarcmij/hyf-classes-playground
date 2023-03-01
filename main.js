import util from 'util';

import HyfOrganization from './classes/HyfOrganization.js';
import seedOrg from './seed/seedOrg.js';

function main() {
  const hyfOrg = new HyfOrganization();
  seedOrg(hyfOrg);
  console.log(util.inspect(hyfOrg, null, Infinity));
}

main();
