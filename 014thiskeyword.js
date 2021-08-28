// TODO: Part 1 of "this" keyword

console.log(this); // This gives us the global context of the page. The output depends on where you are running it. Here, we're running it on the node engine which supports the V8 engine, and that's why we are able to see the "{}". But when u run this on the console in any browser, you will get an output of "window" (in Chrome). So, the output depends on where you are running this line.

var game = 'basketball';

function sayName() {
  var name = 'Arun';
  console.log(this);
}

sayName();

// Note: When we are running the same above code in the browser, we will get 2 different window objects as output. And also, if we use functions as a variable (var sayName = function(){}), then also we will see the same output as above, but behind the scenes, this is not the same, because of the global execution context.
