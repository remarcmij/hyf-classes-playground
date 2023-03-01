class HyfClass {
  constructor({ name, startDate }) {
    this.name = name;
    this.startDate = new Date(startDate);
    this.students = [];
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
    if (!seed && this.isGraduated()) {
      console.error(
        `Cannot add student ${student.name} to graduated class ${this.name}.`
      );
      return;
    }

    if (!this.students.find((s) => s.id === student.id)) {
      this.students = [...this.students, student];
      student.setClass(this);
      console.log(
        `Student ${student.name} has been added to ${this.displayName}.`
      );
    } else {
      console.error(
        `Student ${student.name} is already member of ${this.displayName}.`
      );
    }
  }

  removeStudent(student) {
    if (this.isGraduated()) {
      console.error(`Cannot remove students from a graduated class.`);
      return;
    }

    if (!this.students.find((s) => s.id === student.id)) {
      console.error(
        `Student ${student.name} is not a member of ${this.displayName}.`
      );
      return;
    }

    this.students = this.students.filter((s) => s.id !== student.id);
    student.setClass(null);
    console.log(
      `Student ${student.name} has been removed from class ${this.displayName}.`
    );
  }

  toString() {
    const lines = [];
    lines.push(`Class: ${this.name}`);
    lines.push(`Active? ${this.isActive() ? 'Yes' : 'No'}`);
    if (this.isGraduated()) {
      lines.push(
        `Graduation date: ${this.graduationDate.toLocaleDateString()}`
      );
    }
    lines.push('Students:');
    this.students.forEach((student) => {
      lines.push(`- ${student.toString()}`);
    });
    return lines.join('\n');
  }
}

export default HyfClass;
