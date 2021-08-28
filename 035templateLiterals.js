// Generally 'single quotes('')' are used to define a single character and 'double quotes("")' for string.

var name1 = 'Arun'; // Strings are treated as an array in JS, hence we can manipulate them easily

// It will be hard if we wanted to introduce special characters in the text with just single and double quotes. Hence we can use backticks(``) to define a string

var name = `Arun`;
var fullName = `${name} Murugavel`; // This is called 'Template Literals' or 'Interpolation'
console.log(fullName);

// a string has so many methods accompanying with it
console.log(fullName.charAt(0));
console.log(fullName.endsWith('l'));
console.log(fullName.includes('Arun'));
console.log(fullName.toUpperCase());
