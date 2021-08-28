// Scoping

var name = 'Arun';

console.log('Line number 5', name);

function sayName() {
  var name = 'Mr. A';
  console.log('Line Number 9', name);
  sayName2();
  function sayName2() {
    var name = 'Mr. An';
    console.log('Line Number 12', name);
  }
}

sayName();

// in the world of JavaScript, if blocks, empty blocks, etc... are not truly considered as a scope. (but they are scope). The only scope we consider are the ones that are tied to the function
