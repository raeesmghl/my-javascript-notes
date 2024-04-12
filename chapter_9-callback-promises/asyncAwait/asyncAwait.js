// async/await was introduced in ECMAScript 2017 (ES8) to provide a more straightforward and intuitive way to write asynchronous code, particularly when dealing with Promises. While .then and .catch are effective for handling promises, async/await offers several advantages:

// 1 : Readable and Synchronous Style: async/await allows you to write asynchronous code in a more synchronous style, making it easier to understand and maintain, especially for developers more accustomed to synchronous programming.

//  2 : Error Handling: With async/await, you can use standard try-catch blocks for error handling, which makes it simpler to manage errors within asynchronous code. This improves the overall code readability and maintainability.

// 3 : Variable Scoping: Variables declared within the async/await functions are scoped to that block, making it easier to manage the scope of variables and avoid potential conflicts or leaks.

// 4 : Chaining and Control Flow: async/await simplifies the chaining of asynchronous operations. It allows for a more linear control flow, where subsequent operations can depend on the results of previous ones, without deeply nested callbacks.

// 5 : Debugging: Debugging code that uses async/await is generally easier compared to complex promise chains because the flow of the code is more similar to synchronous code.

// 6 : Conditionals and Loops: Using async/await, you can use traditional conditional statements and loops, which makes the asynchronous code more intuitive and easier to follow.

// While .then and .catch are powerful tools for handling asynchronous operations, they can sometimes lead to callback hell, especially when dealing with multiple nested promises. async/await resolves this issue by allowing developers to write asynchronous code in a more sequential and synchronous manner, leading to cleaner and more maintainable code.














// Certainly, let's delve into async/await thoroughly.




// 1. What is async/await?
// async/await is a modern way of handling asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code. It is built on top of promises and provides a cleaner and more readable way to work with asynchronous code.





// 2. async Function:
// The async keyword is used to define an asynchronous function. An asynchronous function always returns a promise.
// Inside an async function, you can use the await keyword to pause the execution of the function until a promise is settled.






// 3. await Keyword:
// The await keyword is used to pause the execution of an async function until a promise is settled.
// It can only be used inside an async function. It waits for the resolution of the promise and then resumes the async function's execution.







// 4. Benefits of async/await:
// ---> Synchronous Style: async/await allows you to write asynchronous code in a more synchronous style, making it easier to read and understand.
// ---> Error Handling: Errors can be handled using standard try-catch blocks, making it easier to manage and catch errors within asynchronous code.
// ---> Variable Scoping: Variables declared within an async function are scoped to that block, avoiding potential conflicts or leaks.
// ---> Control Flow and Chaining: It simplifies the chaining of asynchronous operations, allowing subsequent operations to depend on the results of previous ones without deep nesting.
// ---> Debugging: The flow of the code is more similar to synchronous code, making debugging easier compared to complex promise chains.
// ---> Simplified Conditionals and Loops: Using async/await, you can use traditional conditional statements and loops, making asynchronous code more intuitive and easier to follow.




// 5. Error Handling in async/await:
// Errors within an async function can be handled using try and catch blocks.
// If a promise is rejected within an async function, the await expression will throw an exception. You can then catch and handle this exception with the surrounding try and catch blocks.




// 6. Using async/await with Promises:
// async/await can be used with any function that returns a promise, making it compatible with most asynchronous operations and APIs in JavaScript.



// Overall, async/await provides a cleaner and more maintainable way to work with asynchronous code in JavaScript, making it easier to understand, debug, and manage complex asynchronous operations























// this example shows, the use of async await to wait for a promise to resolve (synchronously) and pause the execution of the code until it resolved;

// let func = () =>{
//     return 'one';
// }

// let func2 = () =>{
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('two')
//     },1000)
//    })
// }
// let func3 = () =>{
//     return 'three';
// }

// let newF = async () =>{
//     console.log(func())
//     console.log(await func2())
//     console.log(func3())
// }
// newF();

























// simple example

// let func = () =>{
//     return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//             resolve('hello')
//         },2000);
//     });

// }


// let a = async () =>{
//     let abc = await func();
//    console.log(abc)
// }

// a();










// The await keyword can only be used inside an async function to pause the execution of that function until the awaited promise is settled. The promise can be created either inside or outside the async function. (like in code with harry's example);


// created promise outside

let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('true outside')
    }, 3000);
});

let asyncFun = async () =>{
    let promise = await pro;
    console.log(promise)
};
asyncFun()




// created promise inside;


// let func = async () =>{
    // await is used before promise, that shows when promise is resolved, its value is stored in 'pro' variable;

//     let pro =await new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('true inside')
//         },3000)
//     });

//     console.log(pro);
// }
// func();













// this example shows that the synchronous behavious (due to async function) is only inside the async function;
console.log('before async function')
let asyc = async () =>{
    let pro = await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('abc');
        },3000)
    });

    console.log(pro);

}
asyc();

console.log('after async function');







// simillar example;



let prom = (value,time) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(value);
        },time)
    });
    }
    console.log(prom())  // pending promise;
    
    console.log('before async function')
    let asycF = async () =>{
    const pro1 = await prom('a',1000);
    console.log(pro1);
    const pro2 = await prom('b',2000);
    console.log(pro2)
    const pro3 = await prom('c',3000);
    console.log(pro3)
    
    }
    asycF();
    console.log('after async function');