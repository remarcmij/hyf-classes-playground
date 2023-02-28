import StudentContainer from './StudentContainer.mjs';

class HyfClass {
  constructor({ name, startDate }) {
    this.name = name;
    this.startDate = new Date(startDate);
    this.studentContainer = new StudentContainer(name);
  }

  isActive() {
    // If a graduation date has been set AND it lies in the past then
    // this class is no longer active.
    if (this.graduationDate && this.graduationDate.getTime() < Date.now()) {
      return false;
    }
    // If the start date lies in the future then this class is not yet active.
    if (this.startDate.getTime() > Date.now()) {
      return false;
    }
    // In all other cases it is active.
    return true;
  }

  setGraduationDate(graduationDate) {
    this.graduationDate = new Date(graduationDate);
  }

  isGraduated() {
    return this.graduationDate && this.graduationDate.getTime() < Date.now();
  }

  addStudent(student, { seed = false }) {
    if (!seed && bthis.isGraduated()) {
      console.error(
        `Cannot add student ${student.name} to graduated class ${this.name}.`
      );
      return;
    }
    this.studentContainer.addStudent(student);
    student.setClass(this);
  }

  removeStudent(student) {
    if (this.isGraduated()) {
      console.error(`Cannot remove students from a graduated class.`);
      return;
    }
    this.studentContainer.removeStudent(student);
  }

  toString() {
    const lines = [];
    lines.push(`Class: ${this.name}`);
    lines.push(`Active? ${this.isActive() ? 'Yes' : 'No'}`);
    if (this.isGraduated()) {
      lines.push(`Graduated: ${this.graduationDate.toLocaleDateString()}`);
    }
    lines.push('Students:');
    this.studentContainer.forEach((student) => {
      lines.push(`- ${student.toString()}`);
    });
    return lines.join('\n');
  }
}

export default HyfClass;
