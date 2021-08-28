// Lexical Scoping - Classical Way of Writing JavaScript

// This is a very classical way of writing JavaScript
function init() {
  var firstName = 'Arun';
  function sayFirstaName() {
    console.log(firstName);
  } // the variable 'firstName' is available only till here from the line of declaration
  sayFirstaName();
}

init();
console.log(firstName); // Displays Error, as, as soon as the init() function is run, the execution context is terminated ans all the variable inside this context is removed. So when we run this command, we will get an error stating that there is no varibale 'firstName' declared

// But when we use variable way of declaring the function or call the function using a variable (varc callb = init()), then the approach is totally different. We move into the realm of 'closure'
