class Student {
  static nextId = 0;

  constructor(name) {
    this.name = name;
    this._id = Student.nextId++;
    this.graduated = false;
  }

  get id() {
    return this._id;
  }

  setClass(hyfClass) {
    this.hyfClass = hyfClass;
  }

  isActive() {
    return this.hyfClass && this.hyfClass.isActive();
  }

  isGraduated() {
    return this.hyfClass?.isGraduated() && this.graduated;
  }

  graduate() {
    this.graduated = true;
  }

  toString() {
    let text = this.name;
    if (this.hyfClass?.isGraduated()) {
      text += this.isGraduated() ? ', graduated' : ', not graduated';
    }
    return text;
  }
}

export default Student;
