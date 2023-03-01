import { classes, students, mentors } from './seedData.mjs';
import HyfClass from '../HyfClass.mjs';
import Student from '../Student.mjs';

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

function createStudent({ name, graduated }) {
  const student = new Student(name);
  student.graduated = graduated;
  return student;
}

function seedOrg(org) {
  classes.forEach((classData) => {
    const hyfClass = createClass(classData);
    org.addClass(hyfClass);
  });

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

export default seedOrg;
