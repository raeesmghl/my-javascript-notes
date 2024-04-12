
// In this section, we'll explore everything you need to know about async/await.

// Async/await gives developers a better way to use promises.

// To use async/await, you need to create a function and add the async keyword before the function name using ES5 function declaration syntax like this:




// async function someFunction() {
//   // function body
// }






// or using function expression syntax like this:

// const someFunction = async function () {
//   // function body
// };








// or using an arrow function like this:

// const someFunction = async () => {
//   // function body
// };










//Always remember that, when you add the async keyword to the function, it always returns a promise.

// Take a look at the below code:

// const sayHello = async function () {
//   return 'Hello';
// };

// sayHello();  // returns a resolved promise with value 'Hello';


// to get the string 'Hello', use .then handler;


//  THIS CODE IS SAME AS : 



// const sayHello = function() {
//     return new Promise((resolve, reject) => {
//      resolve('Hello');
//     });
//    }















// Now, where do we use the await keyword?

// It's used inside the function which is declared as async. So the await keyword should only be used inside the async function.

// You will get an error if you try to use it in non-async functions.

// Suppose, we have a promise which returns the sum of two numbers like this :






let getSum = (a,b) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = a+b;
            if(isNaN(sum)){
                let er = new Error('not a number')
                reject(er)
            }else{
                resolve(sum)
            }
        }, 2000);
    })
}




// this is .then .catch method to get the values;

// getSum(2,2).then((v)=>{
//     console.log(v);
//     return getSum(v,4)
// }).then((v)=>{
//     console.log(v)
// }).catch((v)=>{
//     console.log(v)
// })




// this is async await method to get the values, try and catch are also used to catch error;

let newF = async () =>{
   try{
    let a = await getSum(4,10);
    console.log(a)    // this is used to check when 1st promise is resolved;
    let b = await getSum(a,3);
    console.log(b)    // this is used to check when 2nd promise is resolved;
   }catch(er){
    console.log(er)// this .catch method is different form .then .catch;
   }
};
newF()







// This looks much cleaner and easy to understand.

// Here, to use the await keyword, we're declaring a function with the async keyword. Then to get the result of each promise, we're adding the await keyword in front of it.

// Also, note that we've added try/catch inside the function. You always need to add a try block around the code which uses await so the catch block will be executed if the promise gets rejected.


// There is a very important thing you need to remember: The above async/await code will work exactly the same as when we use .then – so the next await line (line 2) will not be executed until the previous await call (line 1) is successful















// FOR MORE, CHECK THIS : (https://levelup.gitconnected.com/common-gotcha-with-promises-693a993568c2)












