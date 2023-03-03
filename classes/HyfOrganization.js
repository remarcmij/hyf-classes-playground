import loadHyfOrg from '../seed/loadHyfOrg.js';

class HyfOrganization {
  static createSeeded() {
    const hyfOrg = new HyfOrganization();
    loadHyfOrg(hyfOrg);
    return hyfOrg;
  }

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
