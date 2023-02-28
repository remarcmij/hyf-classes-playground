class HyfRoster {
  constructor() {
    this.classes = [];
    this.students = [];
  }

  addClass(rosterClass) {
    // Add student to class if not already added
    if (!this.classes.find((cls) => cls.id === rosterClass.id)) {
      this.classes = [...this.classes, rosterClass];
      console.log(
        `Class ${rosterClass.name} has been added to the HYF roster.`
      );
    } else {
      console.error(
        `Class ${rosterClass.name} is already present in the HYF roster.`
      );
    }
  }

  addStudent(student) {
    // Add student to roster if not already added
    if (!this.students.find((s) => s.id === student.id)) {
      this.students = [...this.students, student];
      console.log(`Student ${student.name} has been added to the HYF roster.`);
    } else {
      console.error(
        `Student ${student.name} is already part of the HYF roster.`
      );
    }
  }

  addStudents(...students) {
    students.forEach((student) => this.addStudent(student));
  }

  listAllActiveClasses() {
    this.classes.forEach((cls) => {
      if (cls.isActive()) {
        console.log(cls);
      }
    });
  }

  toString() {
    const lines = [];

    this.classes.forEach((cls) => {
      lines.push(cls.toString());
    });
    return lines.join('\n');
  }
}

export default HyfRoster;
