// 'new' keyword in Javascript
// used to create a new instance
// the first letter of the name of the instance is recommended to be a Capital Letter (not compulsory)

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount; // 'this.courseCount' is one of the way of defining an Object. This is the reason Y we are getting the output as '__proto__' object with bunch of other key-values inside this object (constructor,...)
  this.getCourseCount = function () {
    console.log(`Course Count is: ${this.courseCount}`);
  };
}; // this is almost like a '__proto__' (prototype) that we see in the browser when we define a variable

// Whenever a constructor is involved, the use of 'new' keyword is found (not always)

// Now we are going to define this blueprint ('User') for every single user that is signing up in a website for example
var hitesh = User('hitesh', 2);
console.log(hitesh);
// When we run the above line, we get the output as 'undefined'.
// So, whenever we want to create an object using the functional way, we need to use the 'new' keyword

// So,
var hitesh = new User('hitesh', 2);
console.log(hitesh);
// This block, when executed will create a new object
var sam = new User('sam', 1);
console.log(sam);
// When we run the last two blocks, we will se two different objects created; a two new separate instances or copies are created

// 'new' keyword is used for creating a object using functions; it is also responsible for invoking the constructor and creating a new instances every single time. No matter how many times we use this 'new' keyword, a new copy is created every single time.

// 'new' keyword also takes care of the 'this' keyword. 'this' keyword always points to the 'window' object for a normal function call. And when we did not use the 'new' keyword, it was a regular function call, and hence it outputed 'undefined'. When we use the 'new' keyword, the another reponsibility of this keyword kicks in: which is to move the scope of the 'this' keyword within the function itself.
// Also creates a unique objects for every user with all the key-value pairs

// accessing the '__proto__' object using the 'prototype' method to give the functional object more properties
User.prototype.getFirstName = function () {
  console.log(`The firstname is: ${this.firstName}`);
}; // 'getFirstName' is a function added to the 'User' functional object (giving more property)

// now we can use the 'getFirstName' function to get the firstName of every user.
hitesh.getFirstName();
sam.getFirstName(); // here we r not getting inside the object. we are running it outside of the object using the new function that we created and added using the 'prototype' method to the 'User' object

// using 'prototype', we can even write our own constructors, overwrite the getter and setter and so on.

// We can directly access all the properties present inside the '__proto__' without using 'prototype' method on the object.

// It is fatal to get an output as 'undefined' because, it leads us to various situations of errors. (if the varibale is not defined, or if the variable that we are accessing is not present in the scope, ect...) To avoid this situation, we can use conditionsls

if (hitesh.hasOwnProperty('firstName')) {
  // Here we are accessing the 'hasOwnProperty' directly without using 'prototype' method. Like this property, we have so many others as well inside the '__proto__' object
  hitesh.getFirstName();
}

// Note: In javascript, everything is an object

// forEach(), lenght(),...are also the properties given to us by '__proto__' for Array. That is why we are able to access them directly
