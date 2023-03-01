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
      throw new Error(
        `Cannot add student ${student.name} to graduated class ${this.name}.`
      );
    }

    if (!this.students.find((s) => s.id === student.id)) {
      this.students = [...this.students, student];
      student.setClass(this);
    } else {
      throw new Error(
        `Student ${student.name} is already member of ${this.name}.`
      );
    }
  }

  removeStudent(student) {
    if (this.isGraduated()) {
      throw new Error(`Cannot remove students from a graduated class.`);
    }

    if (!this.students.find((s) => s.id === student.id)) {
      throw new Error(
        `Student ${student.name} is not a member of ${this.name}.`
      );
      return;
    }

    this.students = this.students.filter((s) => s.id !== student.id);
    student.setClass(null);
  }

  toObject() {
    const students = this.students.map((student) => student.toObject());
    return {
      name: this.name,
      startDate: this.startDate,
      graduationDate: this.graduationDate,
      students,
    };
  }
}

export default HyfClass;
