// Destructuring of Data - Whatever is the datatype on the right hand side, similar datatype must be present on the left hand side for probably the destructuring to work

const user = ['Arun', 3, 'admin'];
// var name = user[0];
// var role = user[2];

var [name1, courseCount1, role1] = user; //array with length 3 = array with length 3 => destructuring of Data

console.log(name1);

// Mostly Destructuring is used for Objects
const Myuser = {
  name: 'Arun',
  courseCountNum: 5,
  role: 'admin',
};
// console.log(Myuser.courseCount)

// Destructuring the object
const { name, courseCountNum, role } = Myuser;
console.log(courseCountNum);
// Caution: Whenwe are destructuring the Object, the left side variable name must match the key values of the ones that we are trying to store. Else an 'undefined' message is displayed

const Myuser1 = {
  name2: 'Arun',
  courseCountNum: 5,
  role2: 'admin',
};
const { name2, courseCountNum1, role2 } = Myuser1;
console.log(courseCountNum1); // 'undefined' is displayed as there is no key called 'courseCountNum1' inside the object 'Myuser'

// When Destructuring, make sure the variable names are exactly same in case of object. But not necessary for Arrays
