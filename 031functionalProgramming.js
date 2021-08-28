let score = 256;

function addBonus() {
  score = score + 45;
  return score;
} // Not a functional Programming Approach

// functional Programming Way
// 1. We keep the data and the functions separately - This is easier to debug

// 2. State Change +++ -> We must not change the state much often/avoid it mostly. i.e.: It is not okay to update the same variable many times but it is okay to redeclare a new variable every single time we want to update our variable

/*E.G:
// Not Okay
Arun = "arun"
Arun = 'Arun here'
Arun = 'Arun, hi'

// Okay
Arun = "arun"
ArunMon = "Arun here"
Arun = 'Arun, hi'
*/

//3. In functional Programming we treat 'functions' as a first class citizens - Same kind of treatment must be given to the function that we give to variables, numbers etc... (what it means for example is we must be able to pass functions as a parameter for a function like we pass any variables(reference, callbacks...))

function addBonus(score) {
  return score + 45;
}
