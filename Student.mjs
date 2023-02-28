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

  setClass(className) {
    this.className = className;
  }

  isActive() {
    return this.className && this.className.isActive();
  }

  isGraduated() {
    return this.className?.isGraduated && this.graduated;
  }

  graduate() {
    this.graduated = true;
  }

  toString() {
    let text = this.name;
    if (this.className?.isGraduated()) {
      text += this.isGraduated() ? ', graduated' : ', not graduated';
    }
    return text;
  }
}

export default Student;
