// We have two major contexts (but we have more)

var num = 2; // At this moment there is already a global context running, that is collecting information

function sayMe() {
  console.log('Say me');
}

sayMe(); // When a function is called, to execute the block of code present in the function, another context called "Execution Context" is created.

// For Every Executeable line of code, a new execution context will be created and once the execution is complete, they will be gone. This time of existence of the execution context will be longer for funtions, conditionals, if they have a large number of codes present within them.

// Functioning of Global Execution Context
// Execution Object - Variable Object, Scope Chain, this (these 3 are the main parts of Execution Context)
// 1st - function declarations are scanned and made available
// 2nd - variable declarations are scanned and made undefined

// Lets create a tipper
tipper('5');

function tipper(a) {
  var bill = parseInt(a); // parseInt - will convert the number coming in to a actual Int value
  console.log(bill + 5);
}

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
}; // if we call this function above this function, then we will get an error. Because, this functions is defined like a variable, and the global execution context makes all variables undefined. When the function is called below the funtion, then it functions properly.

bigTipper('200');

console.log(name);
var name = 'Arun';
// When the name is printed above declaration, the variable are undefined as by the Global Execution Context. Once it is coded below, then it works as we expected.

function sayName() {
  var name = 'MR. A';
  console.log(name);
}

sayName(); // But here, we will not get the name "Arun". This is now a new own Execution context and the variable "name" is on its own inside this new Execution context once this function is called.

console.log(name); // Here we will get the output as "Arun" - Because of the Global Execution Context.

// This is called "Hoisting".
