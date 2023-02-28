class Student {
  static #nextId = 0;
  #id;
  #graduated;

  constructor(name) {
    this.name = name;
    this.#id = Student.#nextId++;
    this.#graduated = false;
  }

  get id() {
    return this.#id;
  }

  setClass(hyfClass) {
    this.hyfClass = hyfClass;
  }

  isActive() {
    return this.hyfClass && this.hyfClass.isActive();
  }

  isGraduated() {
    return this.hyfClass?.isGraduated && this.#graduated;
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
