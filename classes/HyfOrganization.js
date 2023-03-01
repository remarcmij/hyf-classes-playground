class HyfOrganization {
  constructor() {
    this.classes = [];
  }

  addClass(hyfClass) {
    if (!this.classes.find((cls) => cls.name === hyfClass.name)) {
      this.classes = [...this.classes, hyfClass];
    } else {
      throw new Error(
        `Class ${hyfClass.name} is already present in the HYF organization.`
      );
    }
  }

  findStudent(name) {
    let student = null;
    for (const cls of classes) {
      student = cls.students.find((s) => s.name === name);
      if (student) {
        break;
      }
    }
    return student;
  }

  promoteStudent(student) {
    // TODO
  }

  demoteStudent(student) {
    // TODO
  }
}

export default HyfOrganization;
