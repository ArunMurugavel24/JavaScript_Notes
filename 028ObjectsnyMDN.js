// Nearly all objects in javaScript are instance of Object; a typical object inherits properties (including methods) from 'Object.prototype', although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

var User = {
  name: '',
  getUserName: function () {
    console.log(`The User Name is: ${this.name}`);
  },
};

var hitesh = Object.create(User); // The output of this depends on what JavaScript Engine runs the JavaScript Code

// with node we get: {}
// with chrome (runs V8): {__proto__:...} -> has everything inside the '__proto__' object

hitesh.name = 'Arun';
hitesh.getUserName();

// It becomes trickier when we want to use the 'constructor'
var sam = Object.create(User, {
  name: { value: 'sammy' },
  courseCount: { value: 3 },
}); // When we want to use the constructor, we can use it like this:
// Object.create(<object>, <object for the contructor>)
// it is trickier as we have to pass in the values again like an object => {key: {value: <value>}}

sam.getUserName();
