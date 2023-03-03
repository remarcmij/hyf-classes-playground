import util from 'util';

import HyfOrganization from './classes/HyfOrganization.js';

function main() {
  const hyf = HyfOrganization.createSeeded();

  const students = hyf.findStudentsByName('satter');
  console.log(util.inspect(students));
}

main();
