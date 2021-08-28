var countries = ['India', 'USA', 'Japan', 'Russia']; // One way of declaring the arrays

var states = new Array('Rajasthan', 'Delhi', 'Mumbai', 'Assam'); // Another latest way to declare arrays

console.log(states);
console.log(states[0]); // Accessing the Array Elements

console.log(states.length); // using array methods

states[0] = 'Tamil Nadu'; // Replacing the array elements

console.log(states);

var user = ['Arun', 'arunmurugavel24@gmail.com', 3, 34, true]; // This is not a great way to store info about single entity. We have objects to do so.

console.log(user);

user.pop(); // Removes the last element
console.log(user);

user.unshift("NEW VALUE"); // Adds a new value at the front of the array, shiffting rest of the values to the right; this is an expensive operation
console.log(user);

user.shift(); // Removes the value at the front of the array
console.log(user);

console.log(user.indexOf("Arun")); // Finds and returns the index of the asked value in the array;
console.log(user.indexOf("news")); // ("news" element is not present in the array) Returns the index as '-1' is the specified value is not present. This is helpful coz, we can compare it in the conditions and perform the functions that we are planning to do based on whether an element is present or not.

console.log(Array.from("Arun")); // This 'from' array method converts anything into an array. Here it converts the name "Arun" into a comma separated array elements.