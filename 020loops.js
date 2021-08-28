// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const myStates = [
  'Rajasthan',
  'Delhi',
  'Assam',
  1947,
  'Tamil Nadu',
  'Maharashtra',
];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== 'string') continue; // continue will make the loop move to the next iteration without executing rest of the codes below it in that particular iteration.
  console.log(myStates[i]);
}

// while and do while loops(not used much in web development)

// when we use 'let' to define a variable, it will terminate the variable once the scope is over

// function is cosidered as a scope in the programming world
// break and continue keywords also are based on the context

let i = 0;

while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

let j = 20;
do {
  console.log(j);
  j++;
} while (j < 10); // first executes the 'do', then checks the condition. Thats y first the 20 is printed as output and and then the loop terminates as the condition is not satisfied.

