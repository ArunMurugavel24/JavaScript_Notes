// sayHello();

// function sayHello() {
//   console.log('Hello');
// }

// We can call a function from anywhere(above the function, or below the function) - This is all about the global context of JavaScript.

if (2 === 2) {
  console.log('This is True');
}

var myName = 'Arun';
if (myName === myName) {
  console.log('This is a True Statement');
}

if (myName === window.myName) {
  console.log('This is a True Statement');
} // This is going to give us an error. because there is no window context. But there is always a context. Since, here the JS is run by Node, the global context is different that what we get in the Browser("Window") - In website coding, when we have to access local storages and all we are looking for whether or not we have "Window" object as these are browser specific contexts.
