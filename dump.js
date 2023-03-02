import util from 'util';

import HyfOrganization from './classes/HyfOrganization.js';
import loadHyfOrg from './seed/loadHyfOrg.js';

function main() {
  const hyfOrg = new HyfOrganization();
  loadHyfOrg(hyfOrg);
  console.log(util.inspect(hyfOrg, null, Infinity));
}

main();
