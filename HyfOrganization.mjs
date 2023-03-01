class HyfOrganization {
  constructor() {
    this.classes = [];
  }

  addClass(hyfClass) {
    if (!this.classes.find((cls) => cls.name === hyfClass.name)) {
      this.classes = [...this.classes, hyfClass];
      console.log(
        `Class ${hyfClass.name} has been added to the HYF organization.`
      );
    } else {
      console.error(
        `Class ${hyfClass.name} is already present in the HYF organization.`
      );
    }
  }

  toString() {
    const lines = [];

    this.classes.forEach((cls) => {
      lines.push('--------------');
      lines.push(cls.toString());
    });
    return lines.join('\n');
  }
}

export default HyfOrganization;
