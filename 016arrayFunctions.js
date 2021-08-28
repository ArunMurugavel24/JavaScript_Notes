var isEven = (element) => {
  // arrow function
  // if (element % 2 === 0) {
  //   return true;
  // }
  // return false;

  return element % 2 === 0; // When 'return' keyword is not mentioned, then we will get the value 'undefined' as output. So, it is important to use 'return' keyword to get our expected result.
};

console.log(isEven(5));

// callback functions

var result = [2, 4, 6, 8].every(isEven); // This is older version of writing callbacks.

// Here, 'isEven' function is used as a reference for the callback. And using 'every' method, this method applies the callback function specified in the method on every element in the array. And, here this will give us 'true', if all the elements pass the test. If one element fails the test, then the overall output will be a 'false'.

console.log(result);

var result = [2, 4, 6, 8].every((e) => e % 2 === 0); // This is the newer version of writing callbacks. No function keyword, just a paranthesis for specifying the arguments in it, then the usual arrow function way to define it. If we are not using the 'return' statement, then we must not use curly braces.
// if not returning then () => ()
// if returning something then () => {}
console.log(result);
