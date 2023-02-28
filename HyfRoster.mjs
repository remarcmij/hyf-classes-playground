class HyfRoster {
  constructor() {
    this.classes = [];
    this.students = [];
  }

  addClass(hyfClass) {
    // Add student to class if not already added
    if (!this.classes.find((cls) => cls.name === hyfClass.name)) {
      this.classes = [...this.classes, hyfClass];
      console.log(`Class ${hyfClass.name} has been added to the HYF roster.`);
    } else {
      console.error(
        `Class ${hyfClass.name} is already present in the HYF roster.`
      );
    }
  }

  addStudent(student, options) {
    const hyfClass = this.classes.find((cls) => cls.name === student.className);
    if (!hyfClass) {
      throw new Error(`Unknown class name: ${student.className}`);
    }

    // Add student to roster if not already added
    if (this.students.find((s) => s.id === student.id)) {
      throw new Error(
        `Student ${student.name} is already part of the HYF roster.`
      );
    }

    this.students = [...this.students, student];
    hyfClass.addStudent(student, options);
    console.log(`Student ${student.name} has been added to the HYF roster.`);
  }

  listAllActiveClasses() {
    this.classes.forEach((cls) => {
      if (cls.isActive()) {
        console.log('--------------');
        console.log(cls);
      }
    });
  }

  toString() {
    const lines = [];

    this.classes.forEach((cls) => {
      lines.push('--------------');
      lines.push(cls.toString());
    });
    return lines.join('\n');
  }
}

export default HyfRoster;
