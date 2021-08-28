// Methods and objects

var user = {
  firstName: 'Arun',
  lastName: 'Murugavel',
  role: 'Admin',
  loginCount: 32,
  facebookLoginIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    // Here 'buyCourse' is the name of the function
    this.courseList.push(courseName); // 'this' here refers to this object's context. Not the one outside the object
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in a total of ${this.courseList.length} courses`;
  },
};

var courseList = true;
console.log(user.getCourseCount()); //Since we want to run this method, we are using paranthesis with the 'getCourseCount' function.
user.buyCourse('React JS Course');
console.log(user.getCourseCount());
console.log(user.courseList);
