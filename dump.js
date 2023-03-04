import HyfOrganization from './classes/HyfOrganization.js';

function main() {
  const hyf = HyfOrganization.createSeeded();
  console.table(hyf.classes);

  hyf.classes.forEach((cls) => {
    console.log(`\nStudents of ${cls.name}:`);
    console.table(cls.students);
  });
}

main();
