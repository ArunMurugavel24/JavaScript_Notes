// ...<variable> -> This is called the 'spread' operator and the 'REST' operator. It changes either to 'spread' or 'REST' operator based on the use case scenario

// We can use 'spread' or 'REST' operators on arrays, objects...

// REST Operator -> Takes every element passed and groups them into an array

// Spread Operator -> Takes an array and spread them into an individual elements

// Use of Spread
function sumOne(a, b) {
  return a + b;
}

var myArray = [2, 3];
console.log(sumOne(...myArray));

// If we pass more arguments that the specified in the declaration, the it will take the first n nums specified in the declaration and then ignores the rest.
// If we pass [2, 3, 5], only '2', and '3' are considered and '5' is ignored.

// Use of REST
function sumTwo(...args) {
  //Combines all the individual elements into an array
  //'args' is the most commonly used variable
  console.log(args);
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumTwo(1, 2, 3, 4, 5));

// considering first n elements and then rest to the args
function manip(a, b, ...args) {
  // first 2 arguements go to a and b, and the rest to 'args'
  console.log(a);
  console.log(b);
  console.log(args);
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  let pdt = a * b;
  return [sum, pdt]; // Returning Multiple Values
}

console.log(manip(2, 3, 4, 5, 6, 7, 4, 3));
