class StudentContainer {
  constructor(displayName) {
    this.displayName = displayName;
    this.students = [];
  }

  addStudent(student) {
    // Add student to roster if not already added
    if (!this.students.find((s) => s.id === student.id)) {
      this.students = [...this.students, student];
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
    if (!this.students.find((s) => s.id === student.id)) {
      console.error(
        `Student ${student.name} is not a member of ${this.displayName}.`
      );
      return;
    }

    this.students = this.students.filter((s) => s.id !== student.id);
    console.log(
      `Student ${student.name} has been removed from class ${this.displayName}.`
    );
  }

  forEach(callbackFn) {
    this.students.forEach(callbackFn);
  }
}

export default StudentContainer;
