// Throw statements are used for throwing user-defined errors. User can define and throw their own custom errors. When throw statement is executed, the statements present after it will not execute. The control will directly pass to the catch block.


// syntax is simple 

// throw "exception";

// The exception can be a string, number, object, or boolean value.


// with tryCatch

// try{  
//     throw exception; // user can define their own exception  
//     }  
//     catch(error){  
//     expression; }  // code for handling exception.  

// for different errors to throw for different conditions, you can use if-else statement;











try{
    throw new ReferenceError('this is errorrrr');
   }catch(er){
       console.log(er.message)
   }










// a simple example by w3schools

// create a button,input field and paragraph tag (to get results);

let input = document.getElementById('numb');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

let func = () => {
    try {
        if (!input.value) throw 'not defined';
        if (isNaN(input.value)) throw 'not a number';
        result.innerHTML = input.value
    } catch (er) {
        result.innerHTML = er
    }
}










function validateInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    // other validation checks
}

try {
    validateInput(42);
} catch (error) {
    console.log('Caught an exception:', error.message);
}

















// While throw doesn't directly work with asynchronous code (like promises), you can use it within synchronous portions of your asynchronous code or in synchronous functions that interact with asynchronous operations. However, ensure that you appropriately handle the errors in the asynchronous parts, typically within the catch block.






let pro = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 5) {
                resolve('promise is resolved successfullyyyyyyy');
            } else {
                reject('rejecteddddddddd');
            }
        }, 2000);
    });
};

let asyF = async (numb) => {
    try {
        let a = await pro(numb);
        if (numb < 5) {
            console.log(a);
        } else {
            throw 'error aa gya'
        }
    } catch (err) {
        console.log(err)
    } finally {
        console.log('yeh to pakka chale ga');
    }
};

// in this block of code, catch logs rejectedddddddddd, because when using tryCatch with promises, catch is particularly designed to handle the error message produced by rejected promise



// Yes, that's correct. When you use try and catch with promises, the catch block is designed to handle the error messages produced by the rejected promise. If you throw an error within the try block of an asynchronous function, it will not propagate to the outer scope directly. Instead, it will be caught by the catch block that is specifically designed to handle errors related to the rejected promise.

// In the case of promises, you should handle errors inside the catch block that is associated with the rejected state of the promise. You can either log the error, perform error handling operations, or rethrow the error as needed. The throw statement within the try block of an asynchronous function won't propagate to the outer scope directly because it's intended for synchronous code execution and won't affect the promise's flow.


















// example by chatgpt;


function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero errorrrrrrrrrr');
    }
    return a / b;
}
console.log(divide(3, 0));  // throws an error in the console;













// to handle this error; use try/catch;

function dividing(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero errorrrrrrrrrr');
        } else {
            return a / b;
        }
    } catch (err) {
        return err.message;

    }
}
console.log(dividing(3, 0));


















// function enableCookies() {
//     if (!window.confirm('Please enable cookies for the best experience. Click "OK" to enable cookies.')) {
//         throw new Error('Cookies are disabled. Please enable cookies to proceed.');
//     }
//     // Continue with the rest of your logic if cookies are enabled
//     console.log('Continuing with the application logic since cookies are enabled.');
// }

// try {
//     enableCookies();
// } catch (error) {
//     console.error(error.message);
// }



// by this example, see that, we can throw an error in different conditions (if-else) and can handle this error using try catch by calling that function in the try and catch will be used for catching errors;




























// In JavaScript, you can use the throw statement within a try...catch block to manually throw an exception and handle it gracefully. Here's an example of how to use throw within a try...catch block:



// try {
//     // Some condition that might require throwing an exception
//     let x = 10;
//     let y = 0;
//     if (y === 0) {
//       throw new Error('Cannot divide by zero');
//     }
//     let result = x / y;
//     console.log('Result:', result); // This line won't be executed if an exception is thrown
//   } catch (error) {
//     // Handling the thrown exception
//     console.error('An error occurred:', error.message);
//   }



// In this example, if the condition y === 0 is met, an exception will be thrown with the message 'Cannot divide by zero'. The catch block will then handle the exception, and the error message will be displayed in the console.

// Using try...catch with throw allows you to manage exceptional cases in your code, ensuring that the program can gracefully handle errors without halting execution.





















let funs = () =>{
    try{
        let con = confirm('yes or no?')
        if(con){
            console.log('yes');
        }else{
            throw 'not defined'
        }
    }catch(err){
        console.log(err)
    }
};
funs();