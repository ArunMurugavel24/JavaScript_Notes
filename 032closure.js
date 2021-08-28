function init() {
  var firstName = 'Arun';
  function sayFirstaName() {
    console.log(firstName);
  }
  return sayFirstaName; // Here we are not executing the function rather just passing a reference.
}

var value = init(); // since a refernce to a function is returned, the functions 'init' and 'sayFirstName' is not entirely gone. Yes, when we execute these codes, there are no errors and all these lines are executes but there is no output as the function 'sayFirstName' is just referenced and not called. This is like 'pointers' as the memory cannot be freed as there is a reference to the function present inside the function.

// since a refernce of the function inside the function 'init' is returned to the variable 'value', we can now run the reference function by calling it using the variable to which the reference is returned. This is called 'Closure'
value();

// another example
function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add4 = doAddition(4); // when 'doAddition' called, it return you the reference of the function declared in the return statement
var sum = add4(4); // here we are calling the referenced function
console.log(sum);

// We always do not have to call on the reference functions using new variables. Instead, we can just do the following
console.log(doAddition(4)(5)); // This way of calling a function is called 'curring'
// First parenthesis is for the first func parameter and the second paranthesis is for the second inner func parameter

// 'Closure' is used in many libraries and frameworks like Redux, ReactJS,...
