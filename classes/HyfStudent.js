class HyfStudent {
  static nextId = 0;

  constructor(name, id) {
    this.name = name;
    this._id = id ?? HyfStudent.nextId++;
    this.hyfClass = null;
    this.graduated = null;
  }

  get id() {
    return this._id;
  }

  setClass(hyfClass) {
    this.hyfClass = hyfClass;
  }

  isActive() {
    return !!(this.hyfClass && this.hyfClass.isActive());
  }

  isGraduated() {
    return !!(this.hyfClass?.isGraduated() && this.graduated);
  }

  graduateStudent() {
    if (!this.hyfClass?.isGraduated()) {
      throw new Error(
        `Cannot graduate student ${this.name}: ${this.hyfClass} has not graduated yet.`
      );
    }
    this.graduated = true;
  }
}

export default HyfStudent;
