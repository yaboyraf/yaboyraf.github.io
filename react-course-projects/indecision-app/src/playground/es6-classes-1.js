class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!'
    return `Hi. I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I am visiting ${this.homeLocation}.`
    }
    return greeting
  }
}

// traveler extends person 
// support for home location 
// override getGreeting
// 1. Hi. I am Andrew Mead. I am visiting Philadelphia
// 2. Hi. I am Andrew Mead.

const me = new Traveler('Raf', 28, 'San Jose')

const other = new Traveler(undefined, undefined, 'nowhere')

console.log(me.getGreeting())

console.log(other.getGreeting())