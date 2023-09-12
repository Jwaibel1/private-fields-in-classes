class Person {
  #id;

  constructor(id) {
    this.#id = id;
  }

  get() {
    return Math.floor(Math.random() * 1000);
  }
}

module.exports = Person;
