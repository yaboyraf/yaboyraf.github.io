// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b
}
console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
  name: 'Raf',
  cities: ['San Lorenzo', 'San Jose', 'Brentwood'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}
    // this.cities.forEach((city) =>  {
    //   console.log(this.name + ' has lived in ' + city)
    // })

console.log(user.printPlacesLived())

// challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 12,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())