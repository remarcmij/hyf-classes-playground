import util from 'util';

import HyfOrganization from './classes/HyfOrganization.js';

function main() {
  const hyf = HyfOrganization.createSeeded();
  console.table(hyf.classes);

  // const students = hyf.findStudentsByName('satter');
  // console.log(util.inspect(hyf, null, Infinity));
}

main();
