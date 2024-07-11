
// Asynchronous execution allows tasks to be executed independently without blocking program's flow

// it makes possible to initiate multiple tasks and continue execution code without waiting for each operation (step) to complete

// callbacks , promises or async/await are Asynchronous executions of code


// javascript is a synchronous by default (executes from top to bottom like a thread) so its synchronous working is called main thread; and Asynchronous function will always executed after the main thread


// eg:
// console.log('step 1');
// setTimeout(()=>{console.log('step2')},0);
// console.log('step 3');


// setTimeout is asynchronous function so , even if time is 0; it executes after the main thread;




// another example by 'coding game.com';

setTimeout(function() {
  console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10000; ++i) {
  doSomeStuff();   // only returns, do not print
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
  return 1 + 1;
}







// Examples



console.log('start');

setTimeout(() => {
    console.log('step 1 after 3 seconds');
    setTimeout(()=>{
        console.log('step 2 after 2 seconds of completion of step 1');
        setTimeout(()=>{
            console.log('step 3 after 1 second of completion of step 2');
        },1000)
    },2000)
}, 3000);



// output

// start
// step 1 after 3 seconds
// step 2 after 2 seconds of completion of step 1
// step 3 after 1 second of completion of step 2



// you may think, this is pausing the execution of step 2 and step 3 but thats wrong

// in setTimeout with 3 sec , actually means that it has to execute the code inside its body after 3 seconds , and setTimeout is inside its body,same for setTimeout 2 and setTimeout 1;













console.log("Before setTimeout");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("After setTimeout");



//output


// Before setTimeout
// After setTimeout
// Inside setTimeout  (after 2 sec)







console.log("Before setInterval");
setInterval(() => {
  console.log("Inside setInterval");
}, 1000);



//output


// Before setInterval

// Inside setInterval    (after each second)










console.log("Before event listener");
document.addEventListener("click", () => {
  console.log("Click event occurred");
});
console.log("After event listener");


















  // a simple example :





  let func = () =>{
    setTimeout(() => {
        return 'abc';
    },5000);
  };
  console.log(func());

// console will log 'undefined',



//EXPLAINATION


// Return Value of Functions: If a function doesn't explicitly return a value, it returns undefined by default.

// When you call a function that has a delayed operation, like a setTimeout, the function itself does not return any value immediately. Instead, it continues executing the code, and the value is returned after the specified delay. In your case, the function may be returning 'abc' after 5 seconds, but at the time of the initial function call, it hasn't returned anything yet.

// When you call console.log(func()), it first evaluates func(), which initiates the delay, but it doesn't wait for the delay to finish. Therefore, at that moment, the function call itself returns undefined. It's equivalent to calling a function that doesn't explicitly return a value; in JavaScript, such functions return undefined by default.

// To ensure that the value is logged correctly, you should use a callback function or a promise to handle the asynchronous behavior. Here's an example of how you can modify your code to achieve the desired behavior:









//In JavaScript, functions that don't explicitly return a value will return undefined by default. When dealing with asynchronous operations like setTimeout, the function will continue executing the rest of the code without waiting for the delayed operation to finish. Therefore, the function call itself returns undefined immediately.








// IF YOU USE CONSOLE.LOG instead of RETURN, this will work


// like this:


// let func = () =>{
//   setTimeout(() => {
//       console.log('abc')
//   }, 2000);
// };
// func()






// which is same as :

// using callback;

// function delayedFunction(callback) {
//   setTimeout(() => {
//     callback('abc');
//   }, 5000);
// }

// // Using a callback function
// delayedFunction(result => {
//   console.log(result);
// });



// now using promise;



// let func = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//       resolve('abc');
//   },2000);
// });


// func.then((v)=>{
//   console.log(v)
// })



// you can also use this primise by wraping this into a function;















// simple example

console.log('before');  // synchronous

let pro = new Promise((resolve, reject) => {
    console.log('inside');  // synchronous (even inside the function)
    resolve('resolve');    // Asynchronous 
});
pro.then((v)=>{// asynchronous (because .then is used to handle resolved value, so it will only execute when the promise is resolved , even if its resolving imediately, it will be be printed after main thread);
    console.log(v); 
});
console.log('after'); // synchronous























// chat GPT examples : 

// asynchronous example with callbacks
function fetchData(callback) {

    setTimeout(() => {
        console.log('Data fetched');
        callback('Fetched Data');
    }, 2000);
}
function processData(data) {
    console.log('Processing: ' + data);
}

fetchData(processData);

// my own created function
function dataFetching(callback) {
    setTimeout(() => {
        console.log('raees Data');
        callback('raees Data fetched');
    }, 2000);
}
function cb(data) {
    console.log('fetched Data is : ' + data);
}
dataFetching(cb)
// seperately, they both work similar, but if you run them both together, can you guess the answer everytime you did changes with timing in two of those?






// asynchronous example with promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve('Fetched Data');
            } else {
                reject('Failed to fetch data');
            }
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log('Processing: ' + data);
    })
    .catch(error => {
        console.error(error);
    });



// asynchronous example with async/await










// checkout the code execution in javascript by hitesh choudhary in chai our code also  checkout the event loop by namaste javascript and hitesh choudhary's english channel
// then move to the async by hitesh choudhary in chai our code
