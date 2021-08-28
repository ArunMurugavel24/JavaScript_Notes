// Allow user to access content if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
  console.log('Login Success');
}
