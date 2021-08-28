var user = {
  firstName: 'Arun',
  lastName: 'Murugavel',
  role: 'Admin',
  loginCount: 32,
  facebookLoginIn: true,
};

console.log(user.lastName);
console.log(user['firstName']); // Not used much because we need to write the key in double quotes to access the value of that particular key.

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user); // Gives the object's key value pairs in a table format

