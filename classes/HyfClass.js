class HyfClass {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
    this.students = [];
  }

  isActive() {
    // If a graduation date has been set AND it lies in the past then
    // this class is no longer active.
    if (this.graduationDate?.getTime() < Date.now()) {
      return false;
    }
    // If the start date lies in the future then this class is not yet active.
    if (this.startDate.getTime() > Date.now()) {
      return false;
    }
    // If none of the above then it is active.
    return true;
  }

  setGraduationDate(graduationDate) {
    this.graduationDate = new Date(graduationDate);
  }

  isGraduated() {
    return this.graduationDate?.getTime() < Date.now();
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
    }

    this.students = this.students.filter((s) => s.id !== student.id);
    student.setClass(null);
  }

  findStudentsByName(partialName) {
    // Make search case-insensitive
    const partialUpperCaseName = partialName.toUpperCase();
    return this.students.filter((student) =>
      student.upperCaseName.includes(partialUpperCaseName)
    );
  }

  findStudentById(id) {
    return this.students.find((student) => student.id === id);
  }
}

export default HyfClass;
