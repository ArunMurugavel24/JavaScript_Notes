const courses = [
  {
    name: 'Complete ReactJS course',
    price: '2.3',
  },
  {
    name: 'Complete Angular course',
    price: '2.1',
  },
  {
    name: 'Complete MERN course',
    price: '2.7',
  },
  {
    name: 'Complete C++ course',
    price: '2.8',
  },
  {
    name: 'Django Course',
    price: '7.4',
  },
];

{
  /* <li class="list-group-item">
  Complete C++ course
  <span class="float-right">$ 2.8</span>;
</li>; */
} // This the complete element that we have to inject using the JS

function generateLIST() {
  const ul = document.querySelector('.list-group');
  ul.innerHTML = ''; // We are resetting the whole 'ul' element, each time we are calling it
  courses.forEach((course) => {
    const li = document.createElement('li'); //creating an element (empty 'createElement' just creates this: <></>)
    li.classList.add('list-group-item'); //adds a class to the element

    const name = document.createTextNode(course.name); // creates a textNode and saves the text in the varibale
    li.appendChild(name); // Appends the textNode to the list element as 'Text Node' is a child of 'li'

    // creating the 'span' element and appending the needed childs to this element
    const span = document.createElement('span');
    span.classList.add('float-right');
    const price = document.createTextNode('$ ' + course.price);
    span.appendChild(price);

    li.appendChild(span); //appending 'span' to 'li'
    ul.appendChild(li); // appending 'li' to 'ul'
  });
}

// generateLIST(); -> we can use this as well but this starts loading the JS along with the start of the Web Page

window.addEventListener('load', generateLIST); // Runs the JS once the page is completely loaded

const button = document.querySelector('.sort-btn');

// Sorting courses based on price
button.addEventListener('click', () => {
  courses.sort((a, b) => a.price - b.price); // 'a' and 'b' are the array elements of 'courses' which are objects; 'sort' uses a callback function and takes two arguements
  generateLIST(); // after sorting out, to render the elements, it calls the 'generateLIST' function
});
