import { classes, students, mentors } from './seedData.mjs';
import HyfClass from './HyfClass.mjs';
import Student from './Student.mjs';

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

function createStudent({ name, className, graduated }) {
  const student = new Student(name);
  student.className = className;
  student.graduated = graduated;
  return student;
}

function seedRoster(roster) {
  classes.forEach((classData) => {
    const hyfClass = createClass(classData);
    roster.addClass(hyfClass);
  });

  students.forEach((studentData) => {
    const student = createStudent(studentData);
    roster.addStudent(student, { seed: true });
  });
}

export default seedRoster;
