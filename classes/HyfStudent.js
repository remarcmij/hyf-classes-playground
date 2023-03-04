class HyfStudent {
  constructor(name) {
    this.name = name;
    this.hyfClass = null;
    this.graduated = null;
  }

  get upperCaseName() {
    return this.name.toUpperCase();
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
