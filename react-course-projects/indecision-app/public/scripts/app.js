'use strict';

//var can be reassigned and redefined
var nameVar = 'Raf';
var nameVar = 'Andrew';
console.log('nameVar: ', nameVar);

//let can be reassigned, not redefined
var nameLet = 'Jenn';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);

//const can't be reassigned nor redefined
var nameConst = 'Frank';
console.log('nameConst: ', nameConst);

//block scoping

var fullName = 'Rafael Guevara';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

//always start with const, change to let if you need to, NEVER USE VAR
