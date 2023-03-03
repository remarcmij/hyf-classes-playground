import fs from 'fs';
import moment from 'moment';
import { faker } from '@faker-js/faker';
import HyfClass from '../classes/HyfClass.js';

const CURRICULUM_DURATION_MONTHS = 7;
const CLASS_INTERVAL_MONTHS = 3;
const STUDENTS_PER_CLASS = 8;
const GRADUATION_FACTOR = 0.7;
const LAST_CLASS_NUMBER = 40;
const CLASS_COUNT = 5;

function createFakeClasses(highestClassNumber, numberOfClasses) {
  // Get the date of last Sunday
  let date = moment().day(0).startOf('day');

  const classes = [];

  for (let i = 0; i < numberOfClasses; i++) {
    const classNum = highestClassNumber - i;
    const className = 'class' + classNum;
    const graduationDate = date.toDate();

    const startDate = date
      .clone()
      .subtract(CURRICULUM_DURATION_MONTHS, 'months')
      .toDate();

    const hyfClass = new HyfClass(className, startDate);
    hyfClass.graduationDate = graduationDate;
    classes.push(hyfClass);

    date.subtract(CLASS_INTERVAL_MONTHS, 'months');
  }

  return classes;
}

function createFakeStudents(classes) {
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

  return students;
}

function main() {
  const classes = createFakeClasses(LAST_CLASS_NUMBER, CLASS_COUNT);
  const students = createFakeStudents(classes);

  fs.writeFileSync(
    './seed/data/fakeData.json',
    JSON.stringify({ classes, students }, null, 2),
    'utf-8'
  );
}

main();
