// Inheritance:
// We can Inherit from any class. The child class inherits all the properties of the parent class.
// Syntax: Class <child> extends <parenr>{}
// Inorder to make things private to the parent class, use the keyword 'static'
// To initialize the constructor for the parent class use the keyword 'super'

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  static login() {
    return 'User logged in!';
  } // This method is private to this class only, when we use the keyword 'static'. Any level of child can't access it
}

// Define the Child class
class subAdmin extends User {
  constructor(name, email) {
    super(name, email);
  } // Constructor for the Parent class
  getLoginInfo() {
    return login();
  }
}

let arun = new subAdmin('Arun', 'arunmurugavel44@gmail.com');
console.log(arun.getInfo()); // Accessing the parent class methods
console.log(arun.getLoginInfo()); // Since 'login' is private to the Parent class, the child class can't access it, hence an error message of '"login" not defined' is displayed

// When we have a method in the child class with the same name as a method in the parent class, it overrides the method in the parent class and executes that particular method in the child class
