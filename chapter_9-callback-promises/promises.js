

//read promises on (https://www.freecodecamp.org/news/javascript-promises-async-await-and-promise-methods/)

// author : Yogesh Chavan



//  promises (the solution to callback hell);

// the deeply nested callbacks (callback hell) can be difficult to read ,debug and maintain;
// the solution to these callback hell is 'PROMISES';

// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code




// A PROMISE IS A "PROMISE OF CODE EXECUTION", THE CODE EITHER EXECUTES OR FAILS, IN BOTH SITUATIONS/CASES THE SUBSCRIBER IS NOTIFIED (in both cases you get an answer, ie. it returns resolve(), else reject;)

// this is an alternative and better way of Asynchronous execution;




// syntax 


// A JavaScript Promise object contains both the 
// producing code
//and calls to the consuming code:

let myPromise = new Promise((resolve, reject) => {

  // producing code (may take some time)

  resolve();    // when successful
  reject();     // when error

});


// consuming code (must wait for fulfilled promise)
myPromise.then(
  function (value) {/*code if successful*/ },
  function (value) {/*code if some error*/ }
);



// javascript provides promises a built in function with two arguments (resolve, reject) , (any name can be used for them) 
// first argument is resolve (executes if job is done successfully);
// second argument is error (executes when there is error);








// When the producing code (inside the function ) obtains the result, it should call one of the two callbacks: resolve or reject ;





//actually their are two  two handlers (.then and .catch)
















//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++











// by chatGPT







// Promises in JavaScript are a way to handle asynchronous operations, such as fetching data from a server, reading a file, or performing other tasks that may take some time to complete. Promises provide a cleaner and more structured way to work with asynchronous code compared to traditional callback functions, making it easier to manage and reason about asynchronous code.

// A Promise represents a value that may not be available yet but will be at some point in the future. It has three states:

// Pending: The initial state when a promise is created. At this stage, the operation represented by the promise is still in progress.

// Fulfilled: The state in which the promise is resolved successfully with a result. This result is typically the result of the asynchronous operation.

// Rejected: The state in which the promise is rejected due to an error or failure during the asynchronous operation. It contains an error object that provides more information about the failure.




// example




// const myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation (e.g., fetching data)
//     setTimeout(() => {
//       const randomNum = Math.random();
//       if (randomNum < 0.5) {
//         resolve("Success!"); // Resolve the promise with a value
//       } else {
//         reject(new Error("Failed!")); // Reject the promise with an error
//       }
//     }, 1000);
//   });

//   // Using the promise
//   myPromise
//     .then((result) => {
//       console.log("Promise resolved:", result);
//     })
//     .catch((error) => {
//       console.error("Promise rejected:", error);
//     });


// used a condition to specify wether promise resolve or reject;














//============================================================================================================







// .then() CHAIN


// Initial Promise: You start with an initial Promise. This Promise represents an asynchronous operation, which can be resolved (successfully completed) or rejected (encounters an error).

// .then() Handlers: You use the .then() method to attach one or more callback functions to the initial Promise. These callback functions are executed when the Promise is resolved successfully, and they receive the resolved value as their argument. You can chain multiple then() handlers to create a sequence.

// Chaining: When the initial Promise is resolved, the first .then() handler in the chain is executed. If it returns a Promise or a value, the next .then() handler in the chain is scheduled to run. This continues until there are no more .then() handlers in the chain or until an error is encountered.

// Error Handling: If any Promise in the chain is rejected (an error occurs), the control is passed to the nearest .catch() handler or the next .catch() handler in the chain. .catch() handlers are responsible for handling errors in the chain. Once a .catch() handler is executed, the chain resumes with the next .then() after the .catch() handler.




//example



// first function that returns a promise

function asyncTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// second function also returns a promise,  but takes an argument;

function asyncTask2(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 2);
    }, 1000);
  });
}


// third function also similar to second, only differ in resolve;
function asyncTask3(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 3);
    }, 1000);
  });
}





asyncTask1()
  .then((result) => {
    console.log("Task 1 Result:", result);
    return asyncTask2(result);
  })
  .then((result) => {
    console.log("Task 2 Result:", result);
    return asyncTask3(result);
  })
  .then((result) => {
    console.log("Task 3 Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });




// We define three functions: asyncTask1, asyncTask2, and asyncTask3. Each of these functions returns a Promise and simulates an asynchronous operation with a setTimeout. These functions represent tasks that take some time to complete and return a value.

// We start by calling asyncTask1():

// asyncTask1 returns a Promise that resolves with the value 1 after a 1-second delay.
// We attach a .then() handler to the Promise returned by asyncTask1:

// When asyncTask1 completes successfully (after 1 second), it resolves the Promise with the value 1, and the first .then() handler is executed with result set to 1.
// Inside the first .then() handler:

// We log "Task 1 Result: 1", which is the result of asyncTask1.
// We return the result of asyncTask2(result). This means we start the next asynchronous task, asyncTask2, with the value 1.
// We attach another .then() handler to the Promise returned by asyncTask2:

// When asyncTask2 completes successfully (after 1 second), it resolves the Promise with the value 3 (because it adds 2 to the input value).
// The second .then() handler is executed with result set to 3.
// Inside the second .then() handler:

// We log "Task 2 Result: 3", which is the result of asyncTask2.
// We return the result of asyncTask3(result). This means we start the next asynchronous task, asyncTask3, with the value 3.
// We attach a final .then() handler to the Promise returned by asyncTask3:

// When asyncTask3 completes successfully (after 1 second), it resolves the Promise with the value 9 (because it multiplies the input value by 3).
// The final .then() handler is executed with result set to 9.
// Inside the final .then() handler:

// We log "Task 3 Result: 9", which is the result of asyncTask3.
// Since there are no more .then() handlers in the chain, the Promise chain is complete.

// If at any point any of the Promises in the chain had encountered an error (e.g., if reject were called in one of the tasks), the control would be passed to the nearest .catch() handler for error handling.












// simple examples :



let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
  reject('failed')
});

promise
  .then((v) => {
    console.log(v);
  })
  .catch((v) => {
    console.log(v)
  })


// the result is reject, this is because, resolve is taking 1 sec to execute, so until, it completes, promise is fulfiled with reject. and as we know, only one of these can be executed;





// but in this example (using condition);
// only resolve can be executed, until the condition is true;

let pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('success')

    } else {
      reject('failed');
    };
  }, 1000);
});

pro
  .then((v) => {
    console.log(v);
  })
  .catch((v) => {
    console.log(v)
  })







































  



  
  let func = (a,b) =>{
    return new Promise((resolve, reject) => {
        let sum = a+b;
        if(isNaN(sum)){
            let er = new Error('not a numb');
            reject(er);
        }else{
            resolve(sum);
        }
    })
};

func(2,4) // asynchronously
.then((v)=>{
    console.log(v) // asynchronously
    return func(v,3)
})
.then((v)=>{
    console.log(v) // asynchronously
})
.catch((v)=>{
    console.log(v)
})

console.log(func(2,3));   // synchronously