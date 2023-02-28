import Student from './Student.mjs';
import HyfClass from './HyfClass.mjs';
import HyfRoster from './HyfRoster.mjs';

import seedRoster from './seedRoster.mjs';

function addYourClass() {
  // TODO add your class to the HYF Roster
  // 1. Create a HyfClass object
  // 2. Create a Student object for each student (including yourself) in your class,
  // 3.
}

function main() {
  const roster = new HyfRoster();
  seedRoster(roster);

  addYourClass();

  // roster.listAllActiveClasses();
  console.log(roster.toString());
}

main();
