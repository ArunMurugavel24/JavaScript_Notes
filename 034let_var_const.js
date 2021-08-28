// JS, technically doesn't consider '{}' as scope but 'functions' but everything with '{}' is a scope for the scope of understanding

// When JS was started to be used in places that it was before thought cannot be used, it became difficult to catch errors. When a varaible returns 'undefined' it is not a problem in the frontend part. But in the backend we want errors to be show. Hence came the keyword 'let'

// Var -> no error messages is given and the scope is present
// let -> gives errors when problem and goes away once the scope is ended.

console.log(name); // outputs 'undefined'
var name = 'Arun';

console.log(firstName); //Outputs an error message
let firstName = 'Arun';

if (true) {
  var lastName = 'Murugavel';
} // if we replace 'var' with 'let', then the scope of 'lastName' is no longer available and we get an error in the console log outside if statement
console.log(lastName); // Still prints the lastName as JS technically doesn't consider 'if' block as a scope and hence the variable defined inside is not gone away and is still accessible even outside the 'if' block

// by default when a 'for' loop is defined using 'emmet' it defines the looping variable with 'let'. hence once the 'for' loop scope ends, the variable's scope also ends and at the same time if an error occurs, it will be able to print it

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
// if instead of 'let' if 'var' is used to define the looping variable, then if we have to create another 'for' loop, then we cannot use the same looping variable 'index' as used by the previous loop as the scope is not vanished. So, we have to use 'let' in these situations

// if we use 'let' then we can consider the scope of a varibale to be like other programming languages
