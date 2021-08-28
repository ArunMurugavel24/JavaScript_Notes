// Recent introduction is JS

// Maps are not objects but work like objects. They are completely differnt

var myMap = new Map(); // This is a contructional way of approach
// Like initializing an Object

// Setting values to the map
myMap.set(1, 'Uno'); // key, value pairs in the set
myMap.set(2, 'Dos');
myMap.set(3, 'Tres');
myMap.set(4, 'Cuatro');

console.log(myMap); // When we run this, it outputs how many key-value pairs are there. And each key is mapped to value using '=>' which indicates it is not a object

// Grabbing keys from the map
for (let key of myMap.keys()) {
  console.log(`Key is ${key}`);
} // We are using the 'for-of' loop

// Grabbing values from the map
for (let value of myMap.values()) {
  console.log(`Value is ${value}`);
}

// Grabbing both key and value from the map
for (let [key, value] of myMap) {
  console.log(`Key is: ${key} and the Value is: ${value}`);
} // myMap returns both key and the value and they are stored in the array with key and the value variable

// Tricky Part
myMap.forEach((key) => console.log(`Key is ${key}`));
// When using for-each, it considers the 'keys' of maps as index and only considers values as the 'values' for returning as output. As, generally we want to manipulate the values and when iterating, it just iterates through the values alone. So, no matter what your variable name is, if one argument is passed then the value is only returned.

// To grab both key and value using 'forEach'
myMap.forEach((v, k) => console.log(`Key is: ${k} and the value is: ${v}`));
// Not that when using 'forEach' on Maps, values are returned first and then the other arguements. So, we must use the variables accordingly

// Summary
// for-of loop - Always Gives 'key' first
// for-each loop - Always Gives 'value' first

// Deleting a key-value pair in Map
myMap.delete(2); // pass in 'key' for that particular key-value pair whom you want to delete
console.log(myMap);
