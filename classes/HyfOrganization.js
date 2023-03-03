import seedAll from '../seed/loadData.js';

class HyfOrganization {
  static createSeeded() {
    const hyfOrg = new HyfOrganization();
    seedAll(hyfOrg);
    return hyfOrg;
  }

  constructor() {
    this.classes = [];
  }

  addClass(hyfClass) {
    if (!this.findClass(hyfClass.name)) {
      this.classes = [...this.classes, hyfClass];
    } else {
      throw new Error(
        `Class ${hyfClass.name} is already present in the HYF organization.`
      );
    }
  }

  findClass(name) {
    return this.classes.find((cls) => cls.name === name);
  }

  findStudentsByName(name) {
    let students = [];
    for (const cls of this.classes) {
      students = [...students, ...cls.findStudentsByName(name)];
    }
    return students;
  }

  findStudentById(id) {
    let student = null;
    for (const cls of this.classes) {
      student = cls.findStudentById(id);
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
