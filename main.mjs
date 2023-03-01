import Student from './Student.mjs';
import HyfClass from './HyfClass.mjs';
import HyfOrganization from './HyfOrganization.mjs';

import seedOrg from './seed/seedOrg.mjs';

function addYourClass() {
  // TODO add your class to the HYF organization
  // 1. Create a HyfClass object
  // 2. Create a Student object for each student (including yourself) in your class,
  // 3. Add the students to the class
}

function main() {
  const hygOrg = new HyfOrganization();
  seedOrg(hygOrg);

  addYourClass();

  console.log(hygOrg.toString());
}

main();
