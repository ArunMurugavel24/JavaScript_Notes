const arun = {
  firstName: 'Arun',
  lastName: 'Murugavel',
  role: 'Admin',
  courseCount: 3,
  getInfo: function () {
    console.log(
      `First Name is ${this.firstName}
    Last Name is ${this.lastName}
    His Role is ${this.role}
    and he is currently enrolled in ${this.courseCount} courses`
    );
  }, // This function is written so generically that we can use it with other objects as well because of the 'this' keyword.
};

// Here when we run this code block in the browser, we get a '__proto__' object for the object 'arun' and also another '__proto__' object for the function 'getInfo' present inside the object 'arun'

// When we open the '__proto__' object for the function present for the function we can find so many properties present within this like bind, call, caller, length, etc,.

// Let's look at the 'bind' property (not used much but if we have JS using, it is always present)

const dj = {
  firstName: 'Rock',
  lastName: 'DJ',
  role: 'sub-admin',
  courseCount: 4,
}; // Here we can see that 4 properties are same as the 'arun' object and the function 'getInfo' is not present here. Can we borrow the function 'getInfo' from the object 'arun' and use it with the object 'dj'?

// Yes we can do that. Notice that the 'this' keyword in the object 'arun' is pointing to the object 'arun'. If we somehow make the 'this' keyword point to the object 'dj', then we can borrow the function 'getInfo'. This is where the property 'bind'(points to the reference)

arun.getInfo.bind(dj); // No output -> coz bind always gives you a reference back. And hence we can run it in two ways

arun.getInfo.bind(dj)(); // Method 1 -> the referenced returned is called directly

var djInfo = arun.getInfo.bind(dj);
djInfo(); // Method 2 -> saving the returned reference in a variable and calling the function using that variable

// 'call' property present inside the '__proto__'
// 'call' directly calls the function. whereas 'bind' returns the reference back and we have to manually call the function using the reference passed by it

// methods inside an object have so many propertied behind the scenes ('__proto__')

// Note: What is an Element and a Text Node in HTML?
// Anything starting with the angular brackets (</>) is called an element. The simple text between these starting and ending elements of an element is called a 'Text Node'
// E.g: <h1>Hello</h1> -> here "<h1></h1>" is a Element and "Hello" is a Text Node

// A Tip - always call an array with plural naming (It is a good idea)