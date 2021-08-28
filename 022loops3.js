// 'for in' and 'for of' loop

const names = ['Youtube', 'facebook', 'Instagram', 'Netflix', 'Amazon'];

// for (const n of names) {
//   console.log(n);
// } // here each element is taken from the array 'names' and is stored in the variable 'n'. Each iteration, new element from the array. And with this we can perform the needed functions.

const symbols = {
  yt: 'Youtube',
  ig: 'Instagram',
  fb: 'facebook',
  lco: 'LearnCodeOnline',
};

for (const n in symbols) {
  console.log(n);
}
// in 'for in' loop method, if we just use 'n', we will get the keys of the objects only. To get the values of the keys in the object, we have to use 'symbols[n]'
// We use 'for of' for arrays and 'for in' for objects.
