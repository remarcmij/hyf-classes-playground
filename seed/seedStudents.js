import fs from 'fs';
import { faker } from '@faker-js/faker';

const STUDENTS_PER_CLASS = 8;
const GRADUATION_FACTOR = 0.7;

function loadJSON(filename) {
  const json = fs.readFileSync(filename, 'utf-8');
  return JSON.parse(json);
}

function main() {
  const { classes } = loadJSON('./seed/data/hyfOrg.json');

  const students = [];
  for (const classData of classes) {
    for (let i = 0; i < STUDENTS_PER_CLASS; i++) {
      const student = {
        name: faker.internet.userName(),
        id: faker.datatype.uuid(),
        className: classData.name,
        graduated: null,
      };
      if (classData.graduationDate) {
        student.graduated = Math.random() < GRADUATION_FACTOR;
      }
      students.push(student);
    }
  }

  fs.writeFileSync(
    './seed/data/students.json',
    JSON.stringify(students, null, 2),
    'utf-8'
  );
}

main();
