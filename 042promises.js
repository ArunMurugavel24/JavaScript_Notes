// promises, async, await

const uno = () => {
  return 'I am One';
};

// const dos = async () => {
//   setTimeout(() => {
//     console.log('Whooo');
//   }, 3000);
// };

const dos = async () => {
  return new Promise((resolve, reject) => {
    // resolve('I got the result');//This returns a response immediatelt
    setTimeout(() => {
      resolve('I got the result'); // We can pass in any datatypes like array, object... This situation will resolve our problem
    }, 3000); //Simulation of an environment that returns a value after few seconds
  }); // Both 'resolve' and 'reject' are methods. They work like the try and catch methods
};

const tres = () => {
  return 'I am Three';
};

const callMe = async () => {
  // By adding 'async' this method becomes asynchronous as we are returing a promise in one of the function calls inside this method. But right now, just by adding the keyword 'async' will do nothing.
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  // When we call this, we will not get a value to be stored in the variable 'valTwo'. We get 'undefined'
  // All the values for which we are making a asynchronous call and we are waiting for a few minutes, there we can use another keyword called 'await'. We can have multiple 'await' keywords inside a method. This keyword emphasises that "until I am completely finished with this particular method, you are not allowed to jump to the next command or the process (Dont just leave me here until I complete executing this particular function)". This means, this will be sitting in the queue and no other future commands will be executed till this command is done executing
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();

// Whenever we want to retrieve a resource or something, it will take probably a couple of milliseconds to fill up the ans. In those situations, retrieving the resources 'asynchronously' is a good way

// 'Promise' -> it has two states: either it will be 'fulfilled' or it will not be 'fulfilled'. It is an event that maybe fulfilling up in the future or maybe not. We can create 'promises' like we create a new array or an object

// There are bunch of libraries like 'axios' which are defined in such a way that when we get a response from the web, it will reolve otherwise it will reject the response

// Whenever we are getting a promise, we must make that particular method asynchronous using the keyword 'async'

// When we are rejecting a promise, that means we are raising up an error and we must be concerned about that error
