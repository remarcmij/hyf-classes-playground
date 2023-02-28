import Student from './Student.mjs';
import RosterClass from './RosterClass.mjs';
import HyfRoster from './HyfRoster.mjs';

function seed(roster) {
  const fede = new Student('Fede');
  roster.addStudents(fede);

  const class32 = new RosterClass({
    name: 'class32',
    startDate: new Date('2021-11-7'),
  });
  class32.addStudents(fede);
  class32.setGraduationDate(new Date('2021-11-7'));
  roster.addClass(class32);

  const class33 = new RosterClass({
    name: 'class33',
    startDate: new Date('2021-5-28'),
  });
  class33.setGraduationDate(new Date('2021-11-7'));
  roster.addClass(class33);
}

function main() {
  const roster = new HyfRoster();
  seed(roster);

  // roster.listAllActiveClasses();
  console.log(roster.toString());
}

main();
