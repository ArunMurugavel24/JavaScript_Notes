// fill and filter

var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill('h', 3, 5)); // 'fill' fills up all the values by replacing the existing values in the array. 'fill(value, start-point, end-point)', and the end-range here is exclusive and start-range is inclusive.

const myNumbers = [23, 24, 25, 55, 66, 77, 87, 98];

// whenever we use 'filter', we get a new array
const result = myNumbers.filter((num) => num < 55); // here we are using a callback function
console.log(result); // filter removes the specified element and forms a new array without that element as per the condition (array that satisfy the condition of the callback in the filter method)

// slice and splice

var users = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sod'];

console.log(users.slice(1, 3)); // slicing a particular area of an array (starting-point, end-point). If we give just one point, then all the elements from that point will be dispalyed excluding the elements before that index

users.splice(1, 2, 'Hi', 'Bye'); // splice(start-pos, number-of-counts-from the-start-pos, value-to-be-inserted). It goes to the starting pos, then counts the number of counts, then deletes these values in this range, and then replace the given value in that positions. We can pass in as many values you want, and those values will be replaced in the posn-range of deleted/removed elements
console.log(users);
