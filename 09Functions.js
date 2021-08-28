function sayHello(name) {
  console.log('Hey There!');
  console.log('Hey There!', name);
  console.log(`Hello There, ${name}!`);
}

// sayHello(); //Calling a function
// sayHello('Arun');

// 'sayHello' without the paranthesis is called referencing the function

function namestey() {
  return 'Hello in India';
}

// console.log and return are two different things
// return needs a variable/space to store the returned value

namestey();

var greetings = namestey();

console.log(greetings);
console.log(namestey());
