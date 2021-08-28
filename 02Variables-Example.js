const uid = 'abc123'; // const values cant be changed

var fullName = 'Arun';
var email = 'arunmurugavel24@gmail.com';
var password = '123456';
var confirmPassword = '123456';
var courseCount = 0;
var isLoggedInFromGoogle = false;

// prompt("Enter Your Name"); - One of the way to take inputs from users.

console.log(uid);
console.log('Full Name is:', fullName);
console.log(email);

console.log(`
 With Unique ID: ${uid}
 User is: ${fullName}
 and his email is: ${email}
 and uses the password: ${password}
`); // Interpolation
