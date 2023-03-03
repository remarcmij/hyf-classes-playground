import fs from 'fs';

import HyfClass from '../classes/HyfClass.js';
import HyfStudent from '../classes/HyfStudent.js';

function loadJSON(filename) {
  const json = fs.readFileSync(filename, 'utf-8');
  return JSON.parse(json);
}

function createClass({ name, startDate, graduationDate }) {
  const hyfClass = new HyfClass(name, startDate);
  if (graduationDate) {
    hyfClass.graduationDate = new Date(graduationDate);
  }
  return hyfClass;
}

function createStudent({ name, graduated, id }) {
  const student = new HyfStudent(name, id);
  student.graduated = graduated;
  return student;
}

function seedAll(org) {
  const { modules, mentors } = loadJSON('./seed/data/hyfOrg.json');
  const { classes, students } = loadJSON('./seed/data/fakeData.json');

  for (const classData of classes) {
    const hyfClass = createClass(classData);
    org.addClass(hyfClass);
  }

  students.forEach((studentData) => {
    const student = createStudent(studentData);
    const hyfClass = org.classes.find(
      (cls) => cls.name === studentData.className
    );
    if (!hyfClass) {
      throw new Error(
        `Cannot add student ${student.name} to non-existing class ${studentData.className} `
      );
    }
    hyfClass.addStudent(student, { seed: true });
  });
}

export default seedAll;
