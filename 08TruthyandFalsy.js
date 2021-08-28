// undefined - Truthy
// null
// 0
// ''
// NaN

// null, 0, '', NaN - These are Falsy Values (E.g.: an empty value in a dataset) - Falsy values are treated as false when used with conditionals.

// var user; // undefined
var user = null; // null

if (user) {
  console.log('Condition is True');
} // Result not shown as "user" is null which is "false"

console.log(2 + 2);
console.log(2 + '2');

// Javascript Assumes a lot of things

var user = '2';
if (2 == user) {
  console.log('Condition True');
}

// use "===" to check deeply (even the datatypes)
if (2 === user) {
  console.log('Types are True');
} else {
  console.log('Types are not same');
}
