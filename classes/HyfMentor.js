class HyfMentor {
  constructor(name, modules) {
    this.name = name;
    this.modules = modules;
    this.nowTeaching = null;
  }

  canTeach(module) {
    return this.modules.includes(module);
  }

  assignModule(module) {
    if (!this.canTeach(module)) {
      throw new Error(`Mentor ${this.name} cannot teach module ${module}`);
    }
    if (this.nowTeaching) {
      throw new Error(`Mentor ${this.name} is busy teaching module ${module}`);
    }
    this.nowTeaching = module;
  }

  unassign() {
    this.nowTeaching = null;
  }
}
