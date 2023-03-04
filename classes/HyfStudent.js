import { v4 as uuidv4 } from 'uuid';

class HyfStudent {
  constructor(name) {
    this.name = name;
    this._id = uuidv4();
    this.hyfClass = null;
    this.graduated = null;
  }

  get id() {
    return this._id;
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
