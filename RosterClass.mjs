class RosterClass {
  constructor({ name, startDate }) {
    this.name = name;
    this.startDate = startDate;
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
    this.graduationDate = graduationDate;
  }

  isGraduated() {
    return this.graduationDate && this.graduationDate.getTime() < Date.now();
  }

  addStudent(student) {
    if (this.isGraduated()) {
      console.error(
        `Cannot add student ${student.name} to graduated class ${this.name}.`
      );
      return;
    }

    // Add student to class if not already added
    if (!this.students.find((s) => s.id === student.id)) {
      this.students = [...this.students, student];
      student.setClass(this);
      console.log(
        `Student ${student.name} has been added to class ${this.name}.`
      );
    } else {
      console.error(
        `Student ${student.name} is already a member of class ${this.name}.`
      );
    }
  }

  addStudents(...students) {
    students.forEach((student) => this.addStudent(student));
  }

  removeStudent(student) {
    if (!this.students.find((s) => s.id === student.id)) {
      console.error(
        `Student ${student.name} is not a member of class ${this.className}.`
      );
      return;
    }

    if (this.isGraduated()) {
      console.error(
        `Cannot remove student ${student.name} from graduated class ${this.className}.`
      );
      return;
    }

    this.students = this.students.filter((s) => s.id !== student.id);
    console.log(
      `Student ${student.name} has been removed from class ${this.className}.`
    );
  }

  toString() {
    const lines = [];
    lines.push(`Class: ${this.name}`);
    lines.push(`Active? ${this.isActive() ? 'Yes' : 'No'}`);
    if (this.isGraduated()) {
      lines.push(`Graduated: ${this.graduationDate.toLocaleDateString()}`);
    }
    lines.push('Students:');
    this.students.forEach((student) => {
      lines.push(`- ${student.toString()}`);
    });
    return lines.join('\n');
  }
}

export default RosterClass;
