// Show user a signout button if he is authenticated
// Other Wise show him option to Login/Signup

var authenticated = false;

// if (authenticated) {
//   console.log('Show SignOut Button');
// } else {
//   console.log('Show Login Option');
// }

authenticated
  ? console.log('Show SignOut Button')
  : console.log('Show Login Option');
