// import User from './ClassJS'; -> This is how it works in many frameworks but not in classical JS

const User = require('./ClassJS');

// Constructor is a method, that runs as soon as an object is being created
const arun = new User('Arun', 'arunmurugavel44@gmail.com');

console.log(arun.getInfo().email); // chaining it on the method. Not a good way to do. Hold it in a variable and then output it

arun.enrollCourse('React Bootcamp');
arun.enrollCourse('Vue Bootcamp');

console.log(arun.getCourseList());

let courses = arun.getCourseList();

courses.forEach((c) => console.log(c));
