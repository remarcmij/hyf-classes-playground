import { faker } from '@faker-js/faker';

import { classes, mentors } from './seedData.js';
import HyfClass from '../classes/HyfClass.js';
import HyfStudent from '../classes/HyfStudent.js';

const STUDENTS_PER_CLASS = 15;
const GRADUATION_FACTOR = 0.7;

function createClass({ name, startDate, graduationDate, currentModule }) {
  const hyfClass = new HyfClass({ name, startDate });
  if (graduationDate) {
    hyfClass.graduationDate = new Date(graduationDate);
  }
  if (currentModule) {
    hyfClass.currentModule = currentModule;
  }
  return hyfClass;
}

function seedOrg(org) {
  for (const classData of classes) {
    const hyfClass = createClass(classData);
    org.addClass(hyfClass);

    for (let i = 0; i < STUDENTS_PER_CLASS; i++) {
      const fakeStudent = new HyfStudent(
        faker.internet.userName(),
        faker.datatype.uuid()
      );
      if (hyfClass.isGraduated()) {
        fakeStudent._graduated = Math.random() < GRADUATION_FACTOR;
      }
      hyfClass.addStudent(fakeStudent, { seed: true });
    }
  }
}

export default seedOrg;
