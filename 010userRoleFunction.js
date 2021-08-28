/* jshint esversion: 6 */

/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin: with all access
subadmin: with access to create/delete courses
testprep: with access to create/delete tests
user: consume all content
other: trial user

Input: getUserRole(name, role)
*/

// var getUserRole = (name, role) => {} --> This is the way to define a arrow function

var getUserRole = function (name, role) {
  //Another way to define a function - used in functional programming
  switch (role) {
    case 'admin':
      return `${name} is admin with all access`;
      break;
    case 'subadmin':
      return `${name} is subadmin with access to create/delete courses`;
      break; // This is not necessary -> when using return, not needed
    case 'testprep':
      return `${name} is testprep with access to create/delete tests`;
      break;
    case 'user':
      return `${name} is user who can consume all content`;
      break;
    default:
      return `${name} is a trial user`;
      break;
  }
};

console.log(getUserRole('Arun', 'admin'));
