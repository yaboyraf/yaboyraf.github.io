class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!'
    return `Hi. I am ${this.name}`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Raf', 28)

const other = new Person()

console.log(me.getDescription())

console.log(other.getDescription())