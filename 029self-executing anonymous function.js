var getName = function () {
  console.log('This is a function');
  console.log('It is saying Hello');
}; // This way of holding the entire function in a variable is not common in many programming languages and this particular way is a part of a programming paradigm called 'functional programming'

// Arrow function -> the function that calls itself immediately after its declaration (format: () => ())

// Self-Executing Anonymous function - Also known as 'IFFE'
//developer.mozilla.org/en-US/docs/Glossary/IIFE
// IFFE - Immediately Invoked Function Expression
// syntax: (function() {statements})();
// Althought they have a very limited scope of working, they are still being used many areas like web scrapping. etc,.

(function () {
  console.log('This is a function');
  console.log('It is saying Hello');
})();
