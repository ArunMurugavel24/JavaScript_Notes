// For all regular function calls, 'this' points to 'window'(or whatever the global object is) object

console.log(this);

var user = {
  firstName: 'Arun',
  courseCount: 4,
  getCourseCount: function () {
    console.log('Line 9', this); // here 'this' contains the entirity of this particular object 'user'
    function sayName() {
      console.log('Arun');
      console.log('Line 12', this);
    }
    sayName(); // since this is a regular function call, 'this' keyword in the 'sayName' function points to the global context(e.g.: window)
  },
};

user.getCourseCount(); // This is not counted as a regular function call. This is a function call through an object

// When we run till this point is a browser, we will get 3 outputs:
// 1. Window Object
// 2. User Object till 'getCourseCount' function
// 3. Another window object

function sayName() {
  console.log('Arun');
}
sayName(); // This is how a regular function call looks like

// Generally, we will use 'this' in the context of refering an objects mostly inside a function or whatever