const uno = () => {
  console.log('I am One');
};

const dos = () => {
  setTimeout(() => {
    console.log('Whooo');
  }, 3000); // Once the function 'dos' is called, it has two commands to execute. Since, the first command needs time to execute, it sends the second command forwards and if still time is present, then even the next func call is executes and once the needed time for the waiting command gets over, it will display or do its work
  console.log('I am Two');
};

const tres = () => {
  console.log('I am Three');
};

uno();
dos();
tres();

// JS executes every command in a Queue. If a command needs time to execution, it will send the next command forward to execute. This is the asynchronous way of executing the code.

// In production environment, 'logging' doesn't happen. We need to return either an object, string, value etc...