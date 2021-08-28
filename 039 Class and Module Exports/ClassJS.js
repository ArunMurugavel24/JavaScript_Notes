// Defining Class in JavaScript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = []; // Now, this becomes a private variable
  getInfo() {
    return { name: this.name, email: this.email };
  } // This is not a function. This is a 'method' as this is inside a class
  enrollCourse(name) {
    this.#courseList.push(name);
  } // this is a 'setter' -> expect variables to be passed in
  getCourseList() {
    return this.#courseList;
  } // this is a 'getter' -> don't expect variables to be passed in
}

// If we wanted to export this class and use it another file, do the following
// 1.
module.exports = User;

// 2. export class User {}

// Private Props, getters, and setters

const rock = new User('rock', 'rock@rock.com');
console.log(rock.getInfo());
rock.enrollCourse('React Bootcamp');
console.log(rock.getCourseList());
console.log(rock.courseList); // We cannot access it as it ia a private variable

// Getters and Setters are used to Get and set info. They also help us to protect our data/variables by allowing accessibility to certian variables based on either 'getter' or 'setter' method

// In order for us to define a 'Private Variable', we need to use '#' before the variable. When using the variable as well, we have to use '#' infront of them

// When we access it separately, then we get an 'undefined' output. But, when we access it throuth the 'getter' methods, we get the expected result