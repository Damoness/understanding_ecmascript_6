// let firstName = Symbol();

// let person = {};

// person[firstName] = 'Damon'
// console.log(person[firstName]);


//增加描述

let firstName = Symbol('first name');

let person = {

};

person[firstName] = 'Damon';

console.log('lastName' in person); //false
console.log(person[firstName]);
console.log(firstName);


