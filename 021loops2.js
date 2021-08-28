// for and for Each loops are used more often
// for each loop is technically not a loop but is considered as a method on an array

const myStates = [
  'Rajasthan',
  'Delhi',
  'Assam',
  1947,
  'Tamil Nadu',
  'Maharashtra',
];

// var i = 0;
// for (;;) {
//   if (i < 3) break;
//   console.log(i);
//   i++; // here the increment and the execution works inside the for loop itself. and will get the same result as we will get in the actual for loop even though we have not specified any condition in the for loop
// } // This kinda loop writing is not used in the production environment

myStates.forEach((s) => console.log(s)); // we have to give a callback function. It iterates over all the elements in the array and executes the callback
