// Handlin APIs
// We are using https://api.chucknorris.io/ for the API

// We can chain on the promises using the two methods to perform various operations. These two methods are: 'then'(to work with the positive/success promises returned) and 'catch'(for error handling/for handling the negative/unsuccessful promises or responses returned)

'fetch().then().then().then().catch();'; // fetch() is the classic JS method that always returns a promise. Classical JS method to give 'GET' requests to the particular endpoint.

// When chaining, the returned values from the previous promise will be the input for the chained 'then()' method
// 'catch()' method catches any erros like no proper response, no internet connection, etc,...

// 'try and catch' syntax
/*
try {

} catch (error) {

}
*/

fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
    return response.json(); // 'json()' converts the response into a JSON object
  })
  .then((data) => {
    // console.log('DATA is :', data);
    var joke = data.value; // Accessing the different key-value pairs of the converted JSON Object
    console.log(joke);
  }) // body of the JSON is called as the 'data' and is used here in the chaining
  .catch((err) => console.log(err));

// 'node' does not run api request. When we run the above code using the node, we get an error. Because, node doesn't know "fetch()". Hence we must run this code in the browser console to see the result

// When we run this code in the browser, this is not being executed immediately, there is a delay. This is called a promise. Somebody is doing something from the website and it is taking probably a millisecond to complete that

// The body is in the "ReadableStream" format when the response is received. Hence we must convert it into the JSON format

// We must always check the 'Status code' or the 'PromiseStatus' to move ahead with the next step in the production environment
