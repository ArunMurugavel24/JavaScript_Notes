var counter = document.querySelector('.counter');
var followers = document.querySelector('.followers');

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1); // Executes the callback function in the set Interval

// setInterval(function, millisecond)
// setTimeOut(function, millisecond)
// 'function' in these two special functions are 'callback functions'

setTimeout(() => {
  followers.innerHTML = 'Followers on Instagram';
}, 5000); // Executes the callback function after the speciied Interval

// Note: innerHTML and innerText are not the same though they both produce the same results at certain conditions.
// innerHTML - grabs the HTML code inside the specified element
// innerText - grabs just the text inside the specified HTML element
